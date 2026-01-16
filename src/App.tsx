import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import LaunchPlans from "./pages/LaunchPlans";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import AboutHWL from "./pages/AboutHWL";
import HWLMagazine from "./pages/HWLMagazine";
import Pricing from "./pages/Pricing";
import Donate from "./pages/Donate";
import FundingOptions from "./pages/FundingOptions";
import BusinessCreditBuilder from "./pages/BusinessCreditBuilder";
import BusinessSavingsAccount from "./pages/BusinessSavingsAccount";
import Success from "./pages/Success";
import AdminProducts from "./pages/AdminProducts";
import Accelerator from "./pages/Accelerator";
import BusinessDirectory from "./pages/BusinessDirectory";
import BusinessProfile from "./pages/BusinessProfile";
import BusinessListingsDashboard from "./pages/BusinessListingsDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/launch-plans" element={<LaunchPlans />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/community" element={<Community />} />
                <Route path="/about" element={<AboutHWL />} />
                <Route path="/magazine" element={<HWLMagazine />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/funding" element={<FundingOptions />} />
                <Route path="/credit-builder" element={<BusinessCreditBuilder />} />
                <Route path="/savings-account" element={<BusinessSavingsAccount />} />
                <Route path="/success" element={<Success />} />
                <Route path="/accelerator" element={<Accelerator />} />
                <Route path="/business-directory" element={<BusinessDirectory />} />
                <Route path="/business/:id" element={<BusinessProfile />} />
                
                {/* Admin routes - protected */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route
                  path="/admin/products"
                  element={
                    <ProtectedRoute requireAdmin>
                      <AdminProducts />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/business-listings"
                  element={
                    <ProtectedRoute requireAdmin>
                      <BusinessListingsDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute requireAdmin>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
