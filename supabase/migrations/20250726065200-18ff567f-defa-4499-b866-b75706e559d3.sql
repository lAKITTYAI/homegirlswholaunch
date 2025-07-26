-- Create table to store Net 30 payment applications
CREATE TABLE public.net30_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  plan_name TEXT NOT NULL,
  billing_type TEXT NOT NULL, -- 'monthly' or 'annual'
  amount INTEGER NOT NULL, -- amount in cents
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'approved', 'rejected'
  business_name TEXT,
  business_structure TEXT,
  tax_id TEXT,
  business_phone TEXT,
  business_address TEXT,
  years_in_operation TEXT,
  monthly_revenue TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  reviewed_at TIMESTAMPTZ,
  reviewed_by TEXT,
  notes TEXT
);

-- Enable Row Level Security
ALTER TABLE public.net30_applications ENABLE ROW LEVEL SECURITY;

-- Create policy for users to view their own applications
CREATE POLICY "Users can view their own net30 applications"
ON public.net30_applications
FOR SELECT
USING (email = (auth.jwt() ->> 'email'));

-- Create policy for inserting applications (anyone can apply)
CREATE POLICY "Anyone can create net30 applications"
ON public.net30_applications
FOR INSERT
WITH CHECK (true);

-- Create policy for admin to view and update all applications
CREATE POLICY "Admin can manage all net30 applications"
ON public.net30_applications
FOR ALL
USING ((auth.jwt() ->> 'email') = 'mnjkitten@gmail.com')
WITH CHECK ((auth.jwt() ->> 'email') = 'mnjkitten@gmail.com');

-- Create trigger for updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_net30_applications_updated_at
  BEFORE UPDATE ON public.net30_applications
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();