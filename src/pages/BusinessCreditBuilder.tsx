
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Building2, 
  TrendingUp, 
  Shield, 
  Calendar,
  CheckCircle,
  Star,
  DollarSign
} from "lucide-react";

const creditBenefits = [
  {
    icon: TrendingUp,
    title: "Build Credit Fast",
    description: "Establish business credit in as little as 30-45 days with our Net 30 program"
  },
  {
    icon: Shield,
    title: "Dun & Bradstreet Reporting",
    description: "All payments are reported directly to D&B to build your business credit profile"
  },
  {
    icon: Building2,
    title: "Separate Business Identity",
    description: "Keep your personal and business credit separate for better financial health"
  },
  {
    icon: Star,
    title: "Premium Vendors",
    description: "Access to quality suppliers and vendors with Net 30 payment terms"
  }
];

const creditTiers = [
  {
    name: "Starter",
    price: "$297",
    creditLimit: "$500 - $2,500",
    features: [
      "Basic business credit setup",
      "2 Net 30 vendor accounts",
      "Dun & Bradstreet reporting",
      "Credit monitoring dashboard",
      "Email support"
    ]
  },
  {
    name: "Growth",
    price: "$497",
    creditLimit: "$2,500 - $10,000",
    features: [
      "Advanced credit profile optimization",
      "5 Net 30 vendor accounts",
      "Dun & Bradstreet + Experian reporting",
      "Priority credit monitoring",
      "Phone + Email support",
      "Credit coaching sessions"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$797",
    creditLimit: "$10,000+",
    features: [
      "Complete credit suite setup",
      "10+ Net 30 vendor accounts",
      "All 3 bureau reporting (D&B, Experian, Equifax)",
      "Real-time credit alerts",
      "Dedicated account manager",
      "Monthly strategy calls"
    ]
  }
];

export default function BusinessCreditBuilder() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    businessName: "",
    ein: "",
    email: "",
    phone: "",
    businessType: "",
    yearsInBusiness: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Business Credit Builder
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Build strong business credit with our Net 30 program. Get reported to Dun & Bradstreet 
            and establish creditworthiness separate from your personal credit.
          </p>
          
          <div className="flex justify-center items-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm">
              <CheckCircle className="w-4 h-4 mr-1" />
              Dun & Bradstreet Reporting
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              Net 30 Terms
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Shield className="w-4 h-4 mr-1" />
              Business Credit Protection
            </Badge>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {creditBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-neutral-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Credit Building Plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {creditTiers.map((tier) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <Card className={`h-full ${tier.popular ? 'ring-2 ring-primary shadow-lg' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{tier.price}</div>
                    <CardDescription className="text-lg font-medium">
                      Credit Limit: {tier.creditLimit}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full"
                      variant={selectedTier === tier.name ? "default" : "outline"}
                      onClick={() => setSelectedTier(tier.name)}
                    >
                      {selectedTier === tier.name ? "Selected" : "Select Plan"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        {selectedTier && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Business Credit Application - {selectedTier} Plan
                </CardTitle>
                <CardDescription>
                  Complete your application to start building business credit with Net 30 terms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name *</Label>
                      <Input
                        id="businessName"
                        value={formData.businessName}
                        onChange={(e) => handleInputChange("businessName", e.target.value)}
                        placeholder="Enter your business name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ein">EIN (Tax ID) *</Label>
                      <Input
                        id="ein"
                        value={formData.ein}
                        onChange={(e) => handleInputChange("ein", e.target.value)}
                        placeholder="XX-XXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(XXX) XXX-XXXX"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type *</Label>
                      <Input
                        id="businessType"
                        value={formData.businessType}
                        onChange={(e) => handleInputChange("businessType", e.target.value)}
                        placeholder="LLC, Corporation, etc."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="yearsInBusiness">Years in Business</Label>
                      <Input
                        id="yearsInBusiness"
                        value={formData.yearsInBusiness}
                        onChange={(e) => handleInputChange("yearsInBusiness", e.target.value)}
                        placeholder="0-1, 1-2, 2+, etc."
                      />
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Selected Plan: {selectedTier}
                    </h4>
                    <p className="text-sm text-neutral-600 mb-2">
                      Plan Cost: {creditTiers.find(t => t.name === selectedTier)?.price}
                    </p>
                    <p className="text-xs text-neutral-500">
                      * One-time setup fee. Net 30 terms begin immediately after approval.
                    </p>
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Application & Start Building Credit
                  </Button>

                  <p className="text-xs text-center text-neutral-500">
                    By submitting this application, you agree to our terms of service and 
                    authorize us to report your payment history to Dun & Bradstreet.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Info Section */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">How Our Net 30 Program Works</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Apply & Get Approved</h4>
                <p className="text-sm text-neutral-600">
                  Submit your application and get approved for Net 30 terms with our vendor partners
                </p>
              </div>
              <div>
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Make Purchases</h4>
                <p className="text-sm text-neutral-600">
                  Use your Net 30 accounts to purchase business supplies and services
                </p>
              </div>
              <div>
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Build Credit</h4>
                <p className="text-sm text-neutral-600">
                  Pay on time and watch your business credit score grow with D&B reporting
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
