UPDATE public.business_listings 
SET 
  listing_type = 'spotlight',
  gallery_images = ARRAY[
    '/business-logos/annipuf-product-1.png',
    '/business-logos/annipuf-product-2.png',
    '/business-logos/annipuf-product-3.png',
    '/business-logos/annipuf-product-4.png'
  ],
  verified = true,
  payment_status = 'completed'
WHERE business_name = 'Annipuf Self-love' 
AND app_identifier = 'homegirls-who-launch';