-- Temporarily remove admin-only restrictions on products table
-- This is for initial product setup only

-- Drop existing restrictive policies for insert, update, delete
DROP POLICY IF EXISTS "Only admin can insert products" ON public.products;
DROP POLICY IF EXISTS "Only admin can update products" ON public.products;
DROP POLICY IF EXISTS "Only admin can delete products" ON public.products;

-- Create temporary permissive policies
CREATE POLICY "Temporary: Anyone can insert products"
ON public.products
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Temporary: Anyone can update products"
ON public.products
FOR UPDATE
USING (true)
WITH CHECK (true);

CREATE POLICY "Temporary: Anyone can delete products"
ON public.products
FOR DELETE
USING (true);