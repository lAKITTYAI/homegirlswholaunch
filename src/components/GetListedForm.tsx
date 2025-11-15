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
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "highlighted" | "verified" | "founder" | "premium">("basic");
  
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
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
    tagline: "",
    whatWeOffer: "",
    logoUrl: "",
  });

  const planPrices = {
    basic: 25,
    highlighted: 49,
    verified: 99,
    founder: 199,
    premium: 399,
  };

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
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto py-8">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Get Your Business Listed</CardTitle>
          <CardDescription>Choose your plan and submit your business information. All payments are ONE TIME PAYMENTS.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Plan Selection - Enhanced Design */}
            <div className="space-y-4">
              <div className="text-center space-y-2 mb-6">
                <h3 className="text-xl font-serif text-gold-600">✨ Choose Your Spotlight Package ✨</h3>
                <p className="text-sm text-lavender-600">Select the perfect plan to showcase your business</p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedPlan === "basic"
                      ? "ring-2 ring-gold-500 bg-gradient-to-br from-gold-50 to-lavender-50 shadow-xl scale-[1.02]"
                      : "hover:ring-2 hover:ring-gold-300 bg-card"
                  }`}
                  onClick={() => setSelectedPlan("basic")}
                >
                  <CardHeader className="space-y-3 pb-4">
                    <div className="flex justify-between items-start gap-2">
                      <div className="space-y-1">
                        <CardTitle className="text-lg font-serif text-luxury-charcoal flex items-center gap-2">
                          Basic Directory
                          {selectedPlan === "basic" && <Check className="h-5 w-5 text-gold-500" />}
                        </CardTitle>
                        <p className="text-xs text-lavender-600">Perfect for getting started</p>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-gold-600">$25</span>
                      <span className="text-sm text-lavender-500">one-time</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-lavender-700">
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">✓</span>
                        <span>Basic business profile</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">✓</span>
                        <span>Contact & social links</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">✓</span>
                        <span>Search visibility</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedPlan === "highlighted"
                      ? "ring-2 ring-gold-500 bg-gradient-to-br from-gold-50 to-lavender-50 shadow-xl scale-[1.02]"
                      : "hover:ring-2 hover:ring-gold-300 bg-card"
                  }`}
                  onClick={() => setSelectedPlan("highlighted")}
                >
                  <CardHeader className="space-y-3 pb-4">
                    <div className="flex justify-between items-start gap-2">
                      <div className="space-y-1">
                        <CardTitle className="text-lg font-serif text-luxury-charcoal flex items-center gap-2">
                          Highlighted
                          {selectedPlan === "highlighted" && <Check className="h-5 w-5 text-gold-500" />}
                        </CardTitle>
                        <p className="text-xs text-lavender-600">Stand out from the crowd</p>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-gold-600">$49</span>
                      <span className="text-sm text-lavender-500">one-time</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-lavender-700">
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">✓</span>
                        <span>Everything in Basic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">✓</span>
                        <span>Priority placement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">✓</span>
                        <span>Enhanced visibility</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card
                  className={`cursor-pointer transition-all hover:shadow-lg relative ${
                    selectedPlan === "verified"
                      ? "ring-2 ring-gold-500 bg-gradient-to-br from-gold-50 to-lavender-50 shadow-xl scale-[1.02]"
                      : "hover:ring-2 hover:ring-gold-300 bg-card"
                  }`}
                  onClick={() => setSelectedPlan("verified")}
                >
                  <div className="absolute top-3 right-3 bg-gold-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    POPULAR
                  </div>
                  <CardHeader className="space-y-3 pb-4">
                    <div className="flex justify-between items-start gap-2">
                      <div className="space-y-1">
                        <CardTitle className="text-lg font-serif text-luxury-charcoal flex items-center gap-2">
                          HWL Verified
                          {selectedPlan === "verified" && <Check className="h-5 w-5 text-gold-500" />}
                        </CardTitle>
                        <p className="text-xs text-lavender-600">Build trust & credibility</p>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-gold-600">$99</span>
                      <span className="text-sm text-lavender-500">one-time</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-lavender-700">
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">✓</span>
                        <span>Everything in Highlighted</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">✓</span>
                        <span><strong>HWL Verified badge</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">✓</span>
                        <span>Social media spotlight</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedPlan === "founder"
                      ? "ring-2 ring-gold-500 bg-gradient-to-br from-gold-50 to-lavender-50 shadow-xl scale-[1.02]"
                      : "hover:ring-2 hover:ring-gold-300 bg-card"
                  }`}
                  onClick={() => setSelectedPlan("founder")}
                >
                  <CardHeader className="space-y-3 pb-4">
                    <div className="flex justify-between items-start gap-2">
                      <div className="space-y-1">
                        <CardTitle className="text-lg font-serif text-luxury-charcoal flex items-center gap-2">
                          Founder Spotlight
                          {selectedPlan === "founder" && <Check className="h-5 w-5 text-gold-500" />}
                        </CardTitle>
                        <p className="text-xs text-lavender-600">Magazine + website feature</p>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-gold-600">$199</span>
                      <span className="text-sm text-lavender-500">one-time</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-lavender-700">
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">✓</span>
                        <span>Everything in Verified</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">✓</span>
                        <span><strong>1/4 or 1/2 page spread</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">✓</span>
                        <span>Magazine & website</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card
                  className={`cursor-pointer transition-all hover:shadow-lg relative ${
                    selectedPlan === "premium"
                      ? "ring-2 ring-gold-500 bg-gradient-to-br from-gold-50 to-lavender-50 shadow-xl scale-[1.02]"
                      : "hover:ring-2 hover:ring-gold-300 bg-card"
                  }`}
                  onClick={() => setSelectedPlan("premium")}
                >
                  <div className="absolute top-3 right-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    PREMIUM
                  </div>
                  <CardHeader className="space-y-3 pb-4">
                    <div className="flex justify-between items-start gap-2">
                      <div className="space-y-1">
                        <CardTitle className="text-lg font-serif text-luxury-charcoal flex items-center gap-2">
                          Premium Spotlight
                          {selectedPlan === "premium" && <Check className="h-5 w-5 text-gold-500" />}
                        </CardTitle>
                        <p className="text-xs text-lavender-600">Full VIP treatment</p>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-gold-600">$399</span>
                      <span className="text-sm text-lavender-500">one-time</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-lavender-700">
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">✓</span>
                        <span>Everything in Founder</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">✓</span>
                        <span><strong>Full page feature</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">✓</span>
                        <span><strong>Custom tagline</strong></span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Business Information */}
            <div id="application-form" className="space-y-4">
              <div className="bg-lavender-50 p-4 rounded-lg border border-lavender-200">
                <h3 className="font-serif text-lg text-luxury-charcoal mb-2">📝 Business Profile Information</h3>
                <p className="text-sm text-lavender-600">Complete your profile to showcase your business beautifully</p>
              </div>

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
                  <Label htmlFor="ownerName">Owner Name (Recommended)</Label>
                  <Input
                    id="ownerName"
                    placeholder="Your name"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                  />
                  <p className="text-xs text-lavender-600">Powerful for building trust!</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="logoUrl">Logo or Business Image URL</Label>
                <Input
                  id="logoUrl"
                  type="url"
                  placeholder="https://example.com/logo.jpg"
                  value={formData.logoUrl}
                  onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })}
                />
                <p className="text-xs text-lavender-600">Add a link to your logo or business photo</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <select
                  id="category"
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="relative z-50 w-full px-3 py-2 rounded-md border border-input bg-card text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                >
                  <option value="">Select a category</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Short Bio (2-4 sentences) *</Label>
                <Textarea
                  id="description"
                  required
                  rows={3}
                  placeholder="Tell us about your business in a few sentences..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
                <p className="text-xs text-lavender-600">Keep it concise and engaging</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatWeOffer">"What We Offer" (Bullet Points)</Label>
                <Textarea
                  id="whatWeOffer"
                  rows={4}
                  placeholder="• Service 1&#10;• Service 2&#10;• Service 3"
                  value={formData.whatWeOffer}
                  onChange={(e) => setFormData({ ...formData, whatWeOffer: e.target.value })}
                />
                <p className="text-xs text-lavender-600">List your key services or products (one per line)</p>
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
                    className="relative z-50 w-full px-3 py-2 rounded-md border border-input bg-card text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
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

              {selectedPlan === "premium" && (
                <div className="space-y-2">
                  <Label htmlFor="tagline">Profile Tagline *</Label>
                  <Input
                    id="tagline"
                    required
                    placeholder="Enter your custom tagline for your profile"
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  />
                </div>
              )}
            </div>

            <div className="flex gap-3 justify-end pt-4 border-t border-lavender-200">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={loading}
                className="bg-gold-600 hover:bg-gold-700 text-white font-semibold"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Submit Application`
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
