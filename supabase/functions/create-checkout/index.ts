
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-CHECKOUT] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");
    logStep("Stripe key verified");

    const { planName, email, isAnnual, paymentType } = await req.json();
    logStep("Request data received", { planName, email, isAnnual, paymentType });

    // Define pricing for each plan
    const pricingMap = {
      "Launch Squad": {
        monthly: 3900, // $39.00 in cents
        annual: 39000, // $390.00 in cents
      },
      "Boss Builder": {
        monthly: 19900, // $199.00 in cents
        annual: 199000, // $1990.00 in cents
      },
      "Inner Circle": {
        monthly: 34900, // $349.00 in cents
        annual: 349000, // $3490.00 in cents
      }
    };

    const planPricing = pricingMap[planName as keyof typeof pricingMap];
    if (!planPricing) {
      throw new Error(`Invalid plan name: ${planName}`);
    }

    const amount = isAnnual ? planPricing.annual : planPricing.monthly;
    const interval = isAnnual ? "year" : "month";
    
    logStep("Plan pricing determined", { amount, interval, paymentType });

    // Handle Net 30 applications
    if (paymentType === "net30") {
      logStep("Processing Net 30 application");
      
      // For Launch Squad, collect $100 qualification fee via Stripe first
      if (planName === "Launch Squad") {
        logStep("Launch Squad Net 30 - creating qualification fee checkout");
        
        const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });
        
        // Check if customer exists
        let customerId;
        if (email) {
          const customers = await stripe.customers.list({ email, limit: 1 });
          if (customers.data.length > 0) {
            customerId = customers.data[0].id;
            logStep("Existing customer found", { customerId });
          }
        }
        
        const session = await stripe.checkout.sessions.create({
          customer: customerId,
          customer_email: customerId ? undefined : email || undefined,
          line_items: [
            {
              price_data: {
                currency: "usd",
                product_data: { 
                  name: `${planName} Net 30 Qualification Fee`,
                  description: `One-time $100 fee to qualify for Net 30 terms on ${planName} membership`
                },
                unit_amount: 10000, // $100 in cents
              },
              quantity: 1,
            },
          ],
          mode: "payment",
          success_url: `${req.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}&net30_plan=${encodeURIComponent(planName)}&billing=${isAnnual ? 'annual' : 'monthly'}`,
          cancel_url: `${req.headers.get("origin")}/pricing`,
          metadata: {
            type: "net30_qualification",
            plan_name: planName,
            billing_type: isAnnual ? "annual" : "monthly",
            customer_email: email
          }
        });
        
        logStep("Launch Squad Net 30 qualification checkout created", { sessionId: session.id, url: session.url });
        
        return new Response(JSON.stringify({ url: session.url }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        });
      }
      
      // For other plans, process Net 30 application directly
      const supabase = createClient(
        Deno.env.get("SUPABASE_URL") ?? "",
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
        { auth: { persistSession: false } }
      );

      // Store Net 30 application
      const { data: applicationData, error: applicationError } = await supabase
        .from("net30_applications")
        .insert({
          email,
          plan_name: planName,
          billing_type: isAnnual ? "annual" : "monthly",
          amount,
          status: "pending"
        })
        .select()
        .single();

      if (applicationError) {
        logStep("Error creating Net 30 application", { error: applicationError });
        throw new Error(`Failed to create Net 30 application: ${applicationError.message}`);
      }

      logStep("Net 30 application created successfully", { applicationId: applicationData.id });
      
      return new Response(JSON.stringify({ 
        success: true, 
        message: "Net 30 application submitted successfully",
        applicationId: applicationData.id 
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // Continue with regular Stripe checkout for immediate payments
    logStep("Processing immediate payment via Stripe");

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });

    // Check if customer exists
    let customerId;
    if (email) {
      const customers = await stripe.customers.list({ email, limit: 1 });
      if (customers.data.length > 0) {
        customerId = customers.data[0].id;
        logStep("Existing customer found", { customerId });
      }
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email || undefined,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { 
              name: `${planName} Membership`,
              description: `${planName} - ${isAnnual ? 'Annual' : 'Monthly'} Subscription`
            },
            unit_amount: amount,
            recurring: { interval },
          },
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${req.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/pricing`,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
    });

    logStep("Checkout session created", { sessionId: session.id, url: session.url });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in create-checkout", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
