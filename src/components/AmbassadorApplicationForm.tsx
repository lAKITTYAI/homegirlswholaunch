import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { ArrowLeft, Users, Target, TrendingUp } from "lucide-react";
import { toast } from "sonner";

interface AmbassadorApplicationFormProps {
  onBack: () => void;
}

export default function AmbassadorApplicationForm({ onBack }: AmbassadorApplicationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    businessName: "",
    businessType: "",
    socialMediaFollowing: "",
    experience: "",
    motivation: "",
    availability: "",
    marketingExperience: "",
    agreeToTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    toast.success("Application submitted successfully! We'll review your application and get back to you within 5-7 business days.");
    onBack();
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 text-primary hover:text-primary-dark"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Launch Plans
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            HWL Ambassador Application
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Join our team and earn 30% commission with no caps while empowering women entrepreneurs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Build Community</h3>
              <p className="text-sm text-neutral-600">Connect with and support women entrepreneurs</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Achieve Goals</h3>
              <p className="text-sm text-neutral-600">Help others launch successful businesses</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Earn Income</h3>
              <p className="text-sm text-neutral-600">30% commission with no caps or limits</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Application Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="location">Location (City, State) *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="e.g., Atlanta, GA"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="businessName">Business Name (if applicable)</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange("businessName", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select onValueChange={(value) => handleInputChange("businessType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="service">Service-based</SelectItem>
                      <SelectItem value="product">Product-based</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="coaching">Coaching</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="socialMediaFollowing">Social Media Following</Label>
                <Select onValueChange={(value) => handleInputChange("socialMediaFollowing", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your social media reach" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1000">0 - 1,000 followers</SelectItem>
                    <SelectItem value="1000-5000">1,000 - 5,000 followers</SelectItem>
                    <SelectItem value="5000-10000">5,000 - 10,000 followers</SelectItem>
                    <SelectItem value="10000+">10,000+ followers</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="experience">Previous Sales/Marketing Experience *</Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange("experience", e.target.value)}
                  placeholder="Describe your experience in sales, marketing, or business development..."
                  rows={4}
                  required
                />
              </div>

              <div>
                <Label htmlFor="motivation">Why do you want to become an HWL Ambassador? *</Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => handleInputChange("motivation", e.target.value)}
                  placeholder="Tell us about your passion for supporting women entrepreneurs..."
                  rows={4}
                  required
                />
              </div>

              <div>
                <Label htmlFor="availability">Availability *</Label>
                <Select onValueChange={(value) => handleInputChange("availability", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="How many hours per week can you commit?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-10">5-10 hours per week</SelectItem>
                    <SelectItem value="10-20">10-20 hours per week</SelectItem>
                    <SelectItem value="20-30">20-30 hours per week</SelectItem>
                    <SelectItem value="30+">30+ hours per week</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                />
                <Label htmlFor="agreeToTerms" className="text-sm">
                  I agree to the terms and conditions of the HWL Ambassador Program *
                </Label>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-lg font-semibold py-3">
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}