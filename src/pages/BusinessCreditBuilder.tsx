
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
  DollarSign,
  PiggyBank,
  Users
} from "lucide-react";

const creditBenefits = [
  {
    icon: TrendingUp,
    title: "Build Credit Fast",
    description: "Establish business credit in as little as 30-45 days with our integrated programs"
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
    icon: PiggyBank,
    title: "Multiple Building Methods",
    description: "Choose from Net 30 programs or savings account options to fit your budget"
  }
];

const creditPrograms = [
  {
    name: "Boss Builder Net 30",
    price: "$79",
    type: "membership",
    description: "Net 30 program integrated with Boss Builder membership",
    features: [
      "Full Boss Builder membership benefits",
      "Net 30 vendor account setup",
      "Dun & Bradstreet reporting",
      "Bi-Weekly Masterclasses",
      "Personalized Business Audits",
      "Credit monitoring dashboard",
      "Business credit coaching"
    ],
    creditLimit: "$2,500 - $10,000",
    popular: true
  },
  {
    name: "Inner Circle Net 30",
    price: "$249",
    type: "membership",
    description: "Premium Net 30 program with Inner Circle membership",
    features: [
      "Full Inner Circle membership benefits",
      "Premium Net 30 vendor accounts",
      "All 3 bureau reporting (D&B, Experian, Equifax)",
      "1:1 Strategy Sessions (Monthly)",
      "Exclusive Inner Circle Retreats",
      "Dedicated account manager",
      "Priority credit building support"
    ],
    creditLimit: "$10,000+"
  },
  {
    name: "Credit Savings Builder",
    price: "Starting at $10",
    type: "savings",
    description: "Monthly savings account program for gradual credit building",
    features: [
      "Choose $10, $15, or $30 monthly payments",
      "Build to $500 or $1000 savings goal",
      "Reported every 30-60 days",
      "Money returned after completion",
      "No membership required",
      "Flexible payment schedule",
      "Perfect for budget-conscious builders"
    ],
    creditLimit: "$500 - $1,000"
  }
];

const savingsOptions = [
  { monthly: 10, goal: 500, duration: "50 months", reporting: "Every 30 days" },
  { monthly: 15, goal: 500, duration: "33 months", reporting: "Every 45 days" },
  { monthly: 30, goal: 1000, duration: "33 months", reporting: "Every 60 days" }
];

export default function BusinessCreditBuilder() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [selectedSavingsOption, setSelectedSavingsOption] = useState<number | null>(null);
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
            Business Credit Builder Programs
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
            Build strong business credit through our integrated membership programs with Net 30 terms, 
            or start small with our monthly savings account program. All options report to major credit bureaus.
          </p>
          
          <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
            <Badge variant="secondary" className="text-sm">
              <CheckCircle className="w-4 h-4 mr-1" />
              Dun & Bradstreet Reporting
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              Net 30 & Savings Options
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Users className="w-4 h-4 mr-1" />
              Membership Integration
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <PiggyBank className="w-4 h-4 mr-1" />
              Money Back Guarantee
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

        {/* Credit Building Programs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Credit Building Path</h2>
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {creditPrograms.map((program) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <Card className={`h-full ${program.popular ? 'ring-2 ring-primary shadow-lg' : ''}`}>
                  {program.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      {program.type === 'membership' ? <Users className="w-5 h-5" /> : <PiggyBank className="w-5 h-5" />}
                      <CardTitle className="text-xl">{program.name}</CardTitle>
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {program.price}
                      {program.type === 'membership' ? '/month' : '/month+'}
                    </div>
                    <CardDescription className="text-sm font-medium">
                      Credit Building: {program.creditLimit}
                    </CardDescription>
                    <p className="text-sm text-neutral-600 mt-2">{program.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full"
                      variant={selectedProgram === program.name ? "default" : "outline"}
                      onClick={() => setSelectedProgram(program.name)}
                    >
                      {selectedProgram === program.name ? "Selected" : "Select Program"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Savings Account Options */}
          {selectedProgram === "Credit Savings Builder" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Card className="max-w-4xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <PiggyBank className="w-5 h-5" />
                    Choose Your Savings Plan
                  </CardTitle>
                  <CardDescription>
                    Select your monthly payment amount and savings goal. Your money will be returned after completion.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {savingsOptions.map((option, index) => (
                      <Card 
                        key={index}
                        className={`cursor-pointer transition-all ${
                          selectedSavingsOption === index ? 'ring-2 ring-primary bg-primary/5' : 'hover:shadow-md'
                        }`}
                        onClick={() => setSelectedSavingsOption(index)}
                      >
                        <CardContent className="pt-6 text-center">
                          <div className="text-2xl font-bold text-primary mb-2">
                            ${option.monthly}/month
                          </div>
                          <div className="space-y-2 text-sm">
                            <p><strong>Goal:</strong> ${option.goal}</p>
                            <p><strong>Duration:</strong> {option.duration}</p>
                            <p><strong>Reporting:</strong> {option.reporting}</p>
                            <p className="text-green-600 font-medium">
                              Money returned after completion
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Application Form */}
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Credit Building Application - {selectedProgram}
                </CardTitle>
                <CardDescription>
                  {selectedProgram === "Credit Savings Builder" 
                    ? "Start your monthly savings plan to build business credit gradually"
                    : "Get started with Net 30 terms and full membership benefits"
                  }
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
                      Selected Program: {selectedProgram}
                    </h4>
                    {selectedProgram === "Credit Savings Builder" && selectedSavingsOption !== null ? (
                      <div className="text-sm text-neutral-600 space-y-1">
                        <p>Monthly Payment: ${savingsOptions[selectedSavingsOption].monthly}</p>
                        <p>Savings Goal: ${savingsOptions[selectedSavingsOption].goal}</p>
                        <p>Duration: {savingsOptions[selectedSavingsOption].duration}</p>
                        <p>Reporting: {savingsOptions[selectedSavingsOption].reporting}</p>
                        <p className="text-green-600 font-medium">Money returned after completion</p>
                      </div>
                    ) : (
                      <div className="text-sm text-neutral-600">
                        <p>Program Cost: {creditPrograms.find(p => p.name === selectedProgram)?.price}/month</p>
                        <p>Includes full membership benefits + Net 30 credit building</p>
                      </div>
                    )}
                  </div>

                  <Button type="submit" className="w-full">
                    {selectedProgram === "Credit Savings Builder" 
                      ? "Start Savings Plan & Build Credit"
                      : "Join Membership & Start Building Credit"
                    }
                  </Button>

                  <p className="text-xs text-center text-neutral-500">
                    By submitting this application, you agree to our terms of service and 
                    authorize us to report your payment history to major credit bureaus.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* How It Works Section */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">How Our Credit Building Programs Work</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Net 30 Programs */}
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Net 30 Membership Programs
              </h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full w-fit h-fit">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold">Join Membership</h5>
                    <p className="text-sm text-neutral-600">
                      Get full access to Boss Builder ($79) or Inner Circle ($249) membership benefits
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full w-fit h-fit">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold">Net 30 Setup</h5>
                    <p className="text-sm text-neutral-600">
                      We set up your Net 30 vendor accounts and credit reporting
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full w-fit h-fit">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold">Build & Learn</h5>
                    <p className="text-sm text-neutral-600">
                      Use Net 30 terms while accessing coaching, courses, and community support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Program */}
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <PiggyBank className="w-5 h-5 text-primary" />
                Monthly Savings Program
              </h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full w-fit h-fit">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold">Choose Your Plan</h5>
                    <p className="text-sm text-neutral-600">
                      Select $10, $15, or $30 monthly payments to build to $500-$1000
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full w-fit h-fit">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold">Regular Reporting</h5>
                    <p className="text-sm text-neutral-600">
                      Your payments are reported every 30-60 days to build your credit history
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full w-fit h-fit">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold">Get Money Back</h5>
                    <p className="text-sm text-neutral-600">
                      Once you reach your savings goal, your money is returned to you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
