import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Check } from "lucide-react";

const CATEGORIES = [
  "Beauty & Wellness",
  "Technology",
  "Food & Beverage",
  "Retail",
  "Professional Services",
  "Healthcare",
  "Education",
  "Entertainment",
  "Real Estate",
  "Other"
];

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

interface GetListedFormProps {
  onClose: () => void;
}

export const GetListedForm = ({ onClose }: GetListedFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"standard" | "featured">("standard");
  
  const [formData, setFormData] = useState({
    businessName: "",
    description: "",
    category: "",
    city: "",
    state: "",
    fullAddress: "",
    email: "",
    phone: "",
    website: "",
    instagram: "",
    facebook: "",
    linkedin: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // First, insert the listing into the database
      const { data: listing, error: insertError } = await supabase
        .from("business_listings")
        .insert({
          business_name: formData.businessName,
          description: formData.description,
          category: formData.category,
          city: formData.city,
          state: formData.state,
          full_address: formData.fullAddress,
          email: formData.email,
          phone: formData.phone,
          website: formData.website,
          instagram: formData.instagram,
          facebook: formData.facebook,
          linkedin: formData.linkedin,
          listing_type: selectedPlan,
          payment_status: "pending",
          is_active: false, // Will be activated after payment
        })
        .select()
        .single();

      if (insertError) throw insertError;

      // Create Stripe checkout session
      const { data: checkoutData, error: checkoutError } = await supabase.functions.invoke(
        "create-listing-checkout",
        {
          body: {
            listingType: selectedPlan,
            businessData: formData,
          },
        }
      );

      if (checkoutError) throw checkoutError;

      // Update listing with checkout session ID
      await supabase
        .from("business_listings")
        .update({ stripe_checkout_session_id: checkoutData.sessionId })
        .eq("id", listing.id);

      // Redirect to Stripe checkout
      window.open(checkoutData.url, "_blank");
      
      toast({
        title: "Redirecting to checkout",
        description: "Complete your payment to activate your listing",
      });
      
      onClose();
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to create listing. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <Card className="w-full max-w-4xl my-8">
        <CardHeader>
          <CardTitle>Get Your Business Listed</CardTitle>
          <CardDescription>Choose your plan and submit your business information</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Plan Selection */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card
                className={`cursor-pointer transition-all ${
                  selectedPlan === "standard"
                    ? "ring-2 ring-gold-500 bg-gold-50/20"
                    : "hover:ring-1 hover:ring-lavender-300"
                }`}
                onClick={() => setSelectedPlan("standard")}
              >
                <CardHeader className="space-y-3 pb-4">
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-lg font-serif text-luxury-charcoal">Standard Listing</CardTitle>
                    {selectedPlan === "standard" && <Check className="h-5 w-5 text-gold-500 flex-shrink-0" />}
                  </div>
                  <CardDescription className="text-2xl font-bold text-gold-600">$25</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2.5 text-lavender-700">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 flex-shrink-0">✓</span>
                      <span>Basic business profile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 flex-shrink-0">✓</span>
                      <span>Contact information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 flex-shrink-0">✓</span>
                      <span>Social media links</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 flex-shrink-0">✓</span>
                      <span>Search visibility</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className={`cursor-pointer transition-all ${
                  selectedPlan === "featured"
                    ? "ring-2 ring-gold-500 bg-gold-50/20"
                    : "hover:ring-1 hover:ring-lavender-300"
                }`}
                onClick={() => setSelectedPlan("featured")}
              >
                <CardHeader className="space-y-3 pb-4">
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-lg font-serif text-luxury-charcoal">Featured Listing</CardTitle>
                    {selectedPlan === "featured" && <Check className="h-5 w-5 text-gold-500 flex-shrink-0" />}
                  </div>
                  <CardDescription className="text-2xl font-bold text-gold-600">$49</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2.5 text-lavender-700">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 flex-shrink-0">✓</span>
                      <span>Everything in Standard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 flex-shrink-0">✓</span>
                      <span>Priority placement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 flex-shrink-0">✓</span>
                      <span>Featured badge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 flex-shrink-0">✓</span>
                      <span>Enhanced visibility</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Business Information */}
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <select
                    id="category"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background"
                  >
                    <option value="">Select a category</option>
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Business Description *</Label>
                <Textarea
                  id="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <select
                    id="state"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background"
                  >
                    <option value="">Select state</option>
                    {US_STATES.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fullAddress">Full Address</Label>
                  <Input
                    id="fullAddress"
                    value={formData.fullAddress}
                    onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="https://"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input
                    id="instagram"
                    placeholder="@username"
                    value={formData.instagram}
                    onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input
                    id="facebook"
                    placeholder="facebook.com/page"
                    value={formData.facebook}
                    onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input
                    id="linkedin"
                    placeholder="linkedin.com/company"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing
                  </>
                ) : (
                  `Continue to Payment ($${selectedPlan === "standard" ? "25" : "49"})`
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
