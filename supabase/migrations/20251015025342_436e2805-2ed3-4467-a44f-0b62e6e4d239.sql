-- Create products table for digital resources
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL DEFAULT 0,
  category TEXT NOT NULL,
  image_url TEXT,
  download_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Allow everyone to view products
CREATE POLICY "Anyone can view products"
  ON public.products
  FOR SELECT
  USING (true);

-- Only admin can insert products
CREATE POLICY "Only admin can insert products"
  ON public.products
  FOR INSERT
  WITH CHECK ((auth.jwt() ->> 'email'::text) = 'mnjkitten@gmail.com'::text);

-- Only admin can update products
CREATE POLICY "Only admin can update products"
  ON public.products
  FOR UPDATE
  USING ((auth.jwt() ->> 'email'::text) = 'mnjkitten@gmail.com'::text)
  WITH CHECK ((auth.jwt() ->> 'email'::text) = 'mnjkitten@gmail.com'::text);

-- Only admin can delete products
CREATE POLICY "Only admin can delete products"
  ON public.products
  FOR DELETE
  USING ((auth.jwt() ->> 'email'::text) = 'mnjkitten@gmail.com'::text);

-- Trigger for updating updated_at timestamp
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();