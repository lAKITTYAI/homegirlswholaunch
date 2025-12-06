-- Drop the old constraint and add new one with all 4 tiers
ALTER TABLE public.business_listings 
DROP CONSTRAINT business_listings_listing_type_check;

ALTER TABLE public.business_listings 
ADD CONSTRAINT business_listings_listing_type_check 
CHECK (listing_type = ANY (ARRAY['standard'::text, 'expanded'::text, 'verified'::text, 'spotlight'::text]));

-- Now insert the business
INSERT INTO public.business_listings (
  business_name,
  description,
  category,
  city,
  state,
  email,
  listing_type,
  is_active,
  payment_status,
  app_identifier
) VALUES (
  'Annipuf Self-love',
  'A self-love brand for kids and teens that sells self-care products and self-love tools that teach self-care, confidence, financial independence and critical thinking.',
  'Beauty & Education',
  'Beverly Hills',
  'CA',
  'info@annipuf.com',
  'spotlight',
  true,
  'completed',
  'homegirls-who-launch'
);