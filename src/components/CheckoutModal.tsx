
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  monthlyPrice: string;
  annualPrice: string;
  features: string[];
}

const CheckoutModal = ({ isOpen, onClose, planName, monthlyPrice, annualPrice, features }: CheckoutModalProps) => {
  const [email, setEmail] = useState("");
  const [billingType, setBillingType] = useState<"monthly" | "annual">("monthly");
  const [paymentType, setPaymentType] = useState<"immediate" | "net30">("immediate");
  const [isLoading, setIsLoading] = useState(false);

  const currentPrice = billingType === "annual" ? annualPrice : monthlyPrice;
  const priceDisplay = billingType === "annual" ? `${annualPrice}/year` : `${monthlyPrice}/month`;

  const handleCheckout = async () => {
    if (!email) {
      alert("Please enter your email address");
      return;
    }

    setIsLoading(true);
    console.log("Starting checkout process...", { planName, email, isAnnual: billingType === "annual" });

    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          planName,
          email,
          isAnnual: billingType === "annual",
          paymentType
        }
      });

      console.log("Checkout response:", { data, error });

      if (error) {
        console.error("Checkout error:", error);
        alert("There was an error processing your request. Please try again.");
        return;
      }

      if (data?.url) {
        console.log("Redirecting to checkout:", data.url);
        if (paymentType === "net30") {
          // For Net 30, show success message instead of redirecting to Stripe
          alert("Net 30 application submitted successfully! You will receive an invoice within 24 hours.");
          onClose();
        } else {
          window.location.href = data.url;
        }
      } else {
        console.error("No checkout URL returned");
        alert("There was an error processing your request. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("There was an error processing your request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Subscribe to {planName}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Plan Details */}
          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">{planName}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{currentPrice}</span>
                <span className="text-gray-600">/{billingType === "annual" ? "year" : "month"}</span>
                {billingType === "annual" && (
                  <div className="text-sm text-green-600 font-medium">Save 2 months!</div>
                )}
              </div>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Checkout Form */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="billing-type">Billing Period</Label>
              <Select value={billingType} onValueChange={(value: "monthly" | "annual") => setBillingType(value)}>
                <SelectTrigger className="mt-1 bg-white border-gray-300 text-gray-900">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-300 shadow-lg z-[9999]">
                  <SelectItem 
                    value="monthly" 
                    className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100 cursor-pointer px-4 py-2"
                  >
                    Monthly - {monthlyPrice}/month
                  </SelectItem>
                  <SelectItem 
                    value="annual" 
                    className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100 cursor-pointer px-4 py-2"
                  >
                    Annual - {annualPrice}/year (Save 2 months!)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Payment Terms</Label>
              <RadioGroup value={paymentType} onValueChange={(value: "immediate" | "net30") => setPaymentType(value)} className="mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="immediate" id="immediate" />
                  <Label htmlFor="immediate" className="text-sm font-normal">
                    Pay Now - Immediate access via credit card
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="net30" id="net30" />
                  <Label htmlFor="net30" className="text-sm font-normal">
                    Net 30 Terms - For established businesses with proper structure
                  </Label>
                </div>
              </RadioGroup>
              {paymentType === "net30" && (
                <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
                  <p className="text-xs text-blue-800">
                    <strong>Net 30 Requirements:</strong> Available for businesses with proper legal structure (LLC, Corporation), 
                    established business bank account, and verifiable business operations. Application will be reviewed within 24 hours.
                  </p>
                </div>
              )}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Total:</span>
                <span className="text-xl font-bold">{priceDisplay}</span>
              </div>
              
              <Button 
                onClick={handleCheckout} 
                disabled={isLoading || !email}
                className="w-full"
              >
                {isLoading ? "Processing..." : 
                 paymentType === "net30" ? `Apply for Net 30 - ${priceDisplay}` : 
                 `Subscribe for ${priceDisplay}`}
              </Button>
              
              <p className="text-xs text-gray-500 mt-2 text-center">
                {paymentType === "net30" ? 
                  "Your Net 30 application will be reviewed within 24 hours." :
                  "You will be redirected to Stripe to complete your payment securely."
                }
              </p>
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
