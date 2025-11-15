import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { listingType, businessData } = await req.json();
    
    // Validate listing type
    if (!listingType || !["standard", "featured"].includes(listingType)) {
      throw new Error("Invalid listing type");
    }

    // Price IDs - UPDATE THESE WITH YOUR ACTUAL STRIPE PRICE IDs
    const priceIds = {
      standard: "price_standard_listing",  // Replace with actual Stripe price ID for $25
      featured: "price_featured_listing",   // Replace with actual Stripe price ID for $49
    };

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer_email: businessData.email,
      line_items: [
        {
          price: priceIds[listingType as keyof typeof priceIds],
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/business-directory?success=true`,
      cancel_url: `${req.headers.get("origin")}/business-directory?canceled=true`,
      metadata: {
        listing_type: listingType,
        business_name: businessData.businessName,
        email: businessData.email,
      },
    });

    return new Response(JSON.stringify({ url: session.url, sessionId: session.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
