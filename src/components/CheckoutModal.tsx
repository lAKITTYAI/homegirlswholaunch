
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { CreditCard, Mail, Calendar, DollarSign } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  monthlyPrice: string;
  annualPrice: string;
  features: string[];
}

const CheckoutModal = ({ isOpen, onClose, planName, monthlyPrice, annualPrice, features }: CheckoutModalProps) => {
  const [email, setEmail] = useState('');
  const [isAnnual, setIsAnnual] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const currentPrice = isAnnual ? annualPrice : monthlyPrice;
  const savings = isAnnual ? "Save 2 months!" : "";

  const handleCheckout = async () => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          planName,
          email,
          isAnnual,
        },
      });

      if (error) throw error;

      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
        onClose();
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout Error",
        description: "There was an error processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Subscribe to {planName}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Plan Summary */}
          <Card>
            <CardContent className="pt-4">
              <div className="text-center">
                <h3 className="font-semibold text-lg">{planName}</h3>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="text-2xl font-bold text-primary">
                    {currentPrice}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </div>
                {savings && (
                  <Badge variant="secondary" className="mt-2">
                    {savings}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Billing Toggle */}
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">
                {isAnnual ? 'Annual Billing' : 'Monthly Billing'}
              </span>
            </div>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className="text-xs text-muted-foreground">
              We'll send your receipt and membership details to this email.
            </p>
          </div>

          {/* Features Preview */}
          <div className="bg-muted/50 p-3 rounded-lg">
            <h4 className="text-sm font-medium mb-2">What's included:</h4>
            <ul className="text-xs space-y-1 text-muted-foreground">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
              {features.length > 3 && (
                <li>• And {features.length - 3} more...</li>
              )}
            </ul>
          </div>

          {/* Checkout Button */}
          <Button 
            onClick={handleCheckout} 
            disabled={loading}
            className="w-full"
            size="lg"
          >
            {loading ? (
              "Processing..."
            ) : (
              <>
                <DollarSign className="w-4 h-4 mr-2" />
                Continue to Payment
              </>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Secure payment powered by Stripe. Cancel anytime.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
