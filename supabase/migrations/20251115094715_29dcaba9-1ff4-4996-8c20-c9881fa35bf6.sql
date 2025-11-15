-- Create business_listings table
CREATE TABLE IF NOT EXISTS public.business_listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  
  -- Business Information
  business_name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  
  -- Location
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  full_address TEXT,
  
  -- Contact
  email TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  
  -- Social Media
  instagram TEXT,
  facebook TEXT,
  linkedin TEXT,
  
  -- Listing Details
  listing_type TEXT NOT NULL CHECK (listing_type IN ('standard', 'featured')),
  is_active BOOLEAN DEFAULT true,
  featured_until TIMESTAMP WITH TIME ZONE,
  
  -- Media
  logo_url TEXT,
  cover_image_url TEXT,
  gallery_images TEXT[],
  
  -- Payment
  stripe_checkout_session_id TEXT,
  stripe_payment_intent_id TEXT,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed')),
  amount_paid NUMERIC,
  
  -- Owner (optional - for future authentication)
  owner_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Enable RLS
ALTER TABLE public.business_listings ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view active listings
CREATE POLICY "Anyone can view active business listings"
ON public.business_listings
FOR SELECT
USING (is_active = true);

-- Policy: Anyone can insert listings (for guest submissions)
CREATE POLICY "Anyone can create business listings"
ON public.business_listings
FOR INSERT
WITH CHECK (true);

-- Policy: Owners can update their own listings
CREATE POLICY "Owners can update their own listings"
ON public.business_listings
FOR UPDATE
USING (auth.uid() = owner_user_id OR owner_user_id IS NULL);

-- Policy: Admin can manage all listings
CREATE POLICY "Admin can manage all listings"
ON public.business_listings
FOR ALL
USING ((auth.jwt()->>'email') = 'mnjkitten@gmail.com')
WITH CHECK ((auth.jwt()->>'email') = 'mnjkitten@gmail.com');

-- Create index for faster queries
CREATE INDEX idx_business_listings_city ON public.business_listings(city);
CREATE INDEX idx_business_listings_category ON public.business_listings(category);
CREATE INDEX idx_business_listings_listing_type ON public.business_listings(listing_type);
CREATE INDEX idx_business_listings_is_active ON public.business_listings(is_active);

-- Create trigger to update updated_at
CREATE TRIGGER update_business_listings_updated_at
BEFORE UPDATE ON public.business_listings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();