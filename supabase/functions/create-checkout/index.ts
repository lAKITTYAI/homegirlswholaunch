
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";

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

    const { planName, email, isAnnual } = await req.json();
    logStep("Request data received", { planName, email, isAnnual });

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
    
    logStep("Plan pricing determined", { amount, interval });

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
