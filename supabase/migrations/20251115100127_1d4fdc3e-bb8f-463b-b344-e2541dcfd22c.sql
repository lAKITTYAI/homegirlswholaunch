-- Add new fields to business_listings for luxury directory
ALTER TABLE public.business_listings
ADD COLUMN IF NOT EXISTS owner_name TEXT,
ADD COLUMN IF NOT EXISTS services TEXT,
ADD COLUMN IF NOT EXISTS hours JSONB,
ADD COLUMN IF NOT EXISTS price_range TEXT CHECK (price_range IN ('$', '$$', '$$$', '$$$$')),
ADD COLUMN IF NOT EXISTS rating NUMERIC(2,1) DEFAULT 5.0 CHECK (rating >= 0 AND rating <= 5),
ADD COLUMN IF NOT EXISTS review_count INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS verified BOOLEAN DEFAULT false;

-- Update existing listings with default values
UPDATE public.business_listings
SET 
  rating = 5.0,
  review_count = 0,
  verified = (listing_type = 'featured'),
  price_range = CASE 
    WHEN listing_type = 'featured' THEN '$$$'
    ELSE '$$'
  END
WHERE rating IS NULL;