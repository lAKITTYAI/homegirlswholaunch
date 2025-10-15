import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProductDownloadButtonProps {
  product: {
    id: string;
    title: string;
    price: number;
    download_url: string | null;
  };
}

export default function ProductDownloadButton({ product }: ProductDownloadButtonProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!product.download_url) {
      toast.error("Download not available yet");
      return;
    }

    // Check if user is authenticated
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      // User is logged in - check if they're a member
      // For now, assuming all logged-in users are members
      // You can add additional checks here for membership status
      window.open(product.download_url, '_blank');
      toast.success("Download started!");
      return;
    }

    // User not logged in
    if (product.price > 0) {
      // Show payment modal for paid products
      setShowPaymentModal(true);
    } else {
      // Free product - allow download
      window.open(product.download_url, '_blank');
      toast.success("Download started!");
    }
  };

  const handlePayment = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      // Call Stripe checkout function
      const { data, error } = await supabase.functions.invoke('create-product-checkout', {
        body: {
          productId: product.id,
          email: email,
        }
      });

      if (error) throw error;

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast.error("Payment setup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button 
        className="w-full bg-primary hover:bg-primary-dark"
        onClick={handleDownload}
      >
        {product.download_url ? (product.price > 0 ? "Purchase & Download" : "Download Free") : "Coming Soon"}
      </Button>

      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Purchase {product.title}</DialogTitle>
            <DialogDescription>
              Complete your purchase to download this resource.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            <div>
              <p className="text-2xl font-bold text-primary">${product.price}</p>
              <p className="text-sm text-muted-foreground">One-time purchase</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <Button 
              className="w-full" 
              onClick={handlePayment}
              disabled={loading || !email}
            >
              {loading ? "Processing..." : `Pay $${product.price}`}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              <p>💡 Tip: <strong>Join as a member</strong> to get all resources for free!</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
