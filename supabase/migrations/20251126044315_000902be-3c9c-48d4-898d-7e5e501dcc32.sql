-- Add app_identifier column to business_listings table
ALTER TABLE business_listings 
ADD COLUMN app_identifier TEXT DEFAULT 'homegirls-who-launch';

-- Create index for better query performance
CREATE INDEX idx_business_listings_app_identifier ON business_listings(app_identifier);