-- Fix security vulnerability: Restrict funding_applications access to administrators only

-- Drop the overly permissive read policy
DROP POLICY "Allow reading funding applications" ON public.funding_applications;

-- Create secure policies for funding applications
-- Only administrators can read funding applications
CREATE POLICY "Only admin can read funding applications" 
ON public.funding_applications 
FOR SELECT 
USING ((auth.jwt() ->> 'email'::text) = 'mnjkitten@gmail.com'::text);

-- Only administrators can update funding applications (for status changes)
CREATE POLICY "Only admin can update funding applications" 
ON public.funding_applications 
FOR UPDATE 
USING ((auth.jwt() ->> 'email'::text) = 'mnjkitten@gmail.com'::text)
WITH CHECK ((auth.jwt() ->> 'email'::text) = 'mnjkitten@gmail.com'::text);

-- Only administrators can delete funding applications
CREATE POLICY "Only admin can delete funding applications" 
ON public.funding_applications 
FOR DELETE 
USING ((auth.jwt() ->> 'email'::text) = 'mnjkitten@gmail.com'::text);