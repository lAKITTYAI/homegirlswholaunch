
-- Create a table to store funding applications
CREATE TABLE public.funding_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  business_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  business_structure TEXT NOT NULL,
  years_in_operation TEXT NOT NULL,
  industry_type TEXT NOT NULL,
  number_of_employees TEXT,
  monthly_revenue TEXT,
  funding_amount TEXT NOT NULL,
  funding_use TEXT NOT NULL,
  previous_funding TEXT,
  business_goals TEXT NOT NULL,
  current_challenges TEXT,
  business_description TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending'
);

-- Enable Row Level Security (make it accessible to authenticated users for now)
ALTER TABLE public.funding_applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow reading all applications (you can make this more restrictive later)
CREATE POLICY "Allow reading funding applications" 
  ON public.funding_applications 
  FOR SELECT 
  USING (true);

-- Create policy to allow inserting new applications (public access for form submissions)
CREATE POLICY "Allow inserting funding applications" 
  ON public.funding_applications 
  FOR INSERT 
  WITH CHECK (true);
