import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Building2, TrendingUp, Shield, Calendar, CheckCircle, Star, DollarSign, PiggyBank, Users, AlertCircle } from "lucide-react";

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

export default function BusinessCreditBuilder() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: string, type: string} | null>(null);
  const [formData, setFormData] = useState({
    businessName: "",
    ein: "",
    email: "",
    phone: "",
    businessType: "",
    yearsInBusiness: ""
  });

  const handleSelectPlan = (planName: string, price: string, type: string) => {
    setSelectedPlan({ name: planName, price, type });
    // TODO: Integrate with payment processing or enrollment form
    console.log(`Selected plan: ${planName} (${price}) - Type: ${type}`);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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

        {/* How It Works Section */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">How It Works</h2>
          <p className="text-sm text-neutral-600 max-w-4xl mx-auto">
            <strong>Membership Credit Building:</strong> Your membership payments establish consistent payment history. 
            As you reach payment milestones, we activate reporting to additional credit bureaus, 
            building a stronger business credit profile with each tier. Or choose our standalone reporting service 
            for monthly bureau reporting without membership benefits - perfect for businesses that just need credit building.
          </p>
        </div>

        {/* Progressive Credit Building Tiers - Highlighted Section */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border-2 border-primary/20 shadow-lg"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Progressive Credit Building Tiers</h2>
              <p className="text-lg text-neutral-700 max-w-4xl mx-auto">
                Your membership payments build credit progressively - the more you pay, the more bureaus report your success
              </p>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Starter Track */}
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardHeader className="text-center pb-4">
                  <Badge variant="outline" className="w-fit mx-auto mb-3">Starter Track</Badge>
                  <div className="text-2xl font-bold text-primary">$199</div>
                  <CardTitle className="text-lg">Boss Builder Membership</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">1</span>
                      </div>
                      <span>Enrollment Payment</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">2</span>
                      </div>
                      <span>Payment History Building</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-green-600">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-xs font-bold text-green-600">3</span>
                      </div>
                      <span>1 Bureau Reporting Activated</span>
                    </div>
                  </div>
                  <div className="text-sm text-neutral-600 mb-4">
                    Dual bureau reporting after 3 consistent payments
                  </div>
                  <Button 
                    className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 border border-purple-200"
                    onClick={() => handleSelectPlan("Boss Builder Membership", "$199", "Starter Track")}
                  >
                    Select Starter Track
                  </Button>
                </CardContent>
              </Card>

              {/* Builder Track */}
              <Card className="relative overflow-hidden ring-2 ring-primary/30">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <CardHeader className="text-center pb-4">
                  <Badge className="w-fit mx-auto mb-3 bg-primary">Most Popular</Badge>
                  <div className="text-2xl font-bold text-primary">$349</div>
                  <CardTitle className="text-lg">Inner Circle Membership</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">1</span>
                      </div>
                      <span>Premium Enrollment</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-green-600">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-xs font-bold text-green-600">2</span>
                      </div>
                      <span>2 Bureau Reporting Activated</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-green-600">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-xs font-bold text-green-600">3</span>
                      </div>
                      <span>All 3 Bureaus Reporting</span>
                    </div>
                  </div>
                  <div className="text-sm text-neutral-600 mb-4">
                    Faster credit building with premium benefits
                  </div>
                  <Button 
                    className="w-full"
                    onClick={() => handleSelectPlan("Inner Circle Membership", "$349", "Builder Track")}
                  >
                    Select Builder Track
                  </Button>
                </CardContent>
              </Card>

              {/* Accelerated Track */}
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 to-pink-400"></div>
                <CardHeader className="text-center pb-4">
                  <Badge variant="outline" className="w-fit mx-auto mb-3 border-pink-400 text-pink-700">Accelerated</Badge>
                  <div className="text-2xl font-bold text-primary">$99 + Membership</div>
                  <CardTitle className="text-lg">Instant Credit Reporting</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-green-600">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span>Immediate Setup</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-green-600">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span>All 3 Bureaus Day 1</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-green-600">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span>Fast Track Credit Building</span>
                    </div>
                  </div>
                  <div className="text-sm text-neutral-600 mb-4">
                    Start building credit immediately with full reporting
                  </div>
                  <Button 
                    variant="secondary"
                    className="w-full"
                    onClick={() => handleSelectPlan("Instant Credit Reporting", "$99 + Membership", "Accelerated Track")}
                  >
                    Select Accelerated Track
                  </Button>
                </CardContent>
              </Card>

              {/* Credit Reporting Only */}
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
                <CardHeader className="text-center pb-4">
                  <Badge variant="outline" className="w-fit mx-auto mb-3 border-green-500 text-green-700">Reporting Only</Badge>
                  <div className="text-2xl font-bold text-primary">$49/month</div>
                  <CardTitle className="text-lg">Credit Reporting Service</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-green-600">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span>Monthly Bureau Reporting</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-green-600">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span>D&B & Experian Business</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center">
                        <span className="text-xs font-bold text-neutral-500">✕</span>
                      </div>
                      <span className="text-neutral-500">No Membership Benefits</span>
                    </div>
                  </div>
                  <div className="text-sm text-neutral-600 mb-4">
                    Perfect for established businesses wanting credit reporting only
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full border-green-500 text-green-700 hover:bg-green-50"
                    onClick={() => handleSelectPlan("Credit Reporting Service", "$49/month", "Reporting Only")}
                  >
                    Select Reporting Only
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-neutral-600 max-w-4xl mx-auto">
                <strong>Standalone Credit Reporting Service:</strong> This option is not a savings account or membership - it's a standalone option just to build credit only. 
                This money is not returned and you can choose how long you want to continue to pay to be reported. 
                We recommend paying for at least 90 days for optimal credit building results.
              </p>
            </div>
          </motion.div>
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

        {/* How Membership Credit Building Works */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">How Membership Credit Building Works</h3>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Your membership payments automatically build business credit through progressive bureau reporting
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Join & Pay</h4>
                <p className="text-sm text-neutral-600">
                  Choose Boss Builder ($199) or Inner Circle ($349) membership and make your initial payment
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Progressive Reporting</h4>
                <p className="text-sm text-neutral-600">
                  Your payments trigger progressive credit bureau reporting - more bureaus report as you continue paying
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Build & Benefit</h4>
                <p className="text-sm text-neutral-600">
                  Build strong business credit while accessing full membership benefits, coaching, and resources
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <PiggyBank className="w-5 h-5 text-primary" />
                    <h4 className="text-lg font-semibold">Looking for Savings Options?</h4>
                  </div>
                  <p className="text-sm text-neutral-600 mb-4">
                    Build credit with small monthly payments through our dedicated savings account program - no membership required.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate('/savings-account')}
                  >
                    Explore Savings Credit Builder →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Business Verification Memo */}
        <div className="mt-8 pt-6 border-t border-neutral-200">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Business Verification Requirements</h4>
                <p className="text-sm text-amber-700">
                  <strong>Important Notice:</strong> All businesses undergo comprehensive verification and must demonstrate proper legal structure and compliance standards to qualify for our credit building programs. Applications will be thoroughly reviewed to ensure legitimacy, appropriate business formation, and adherence to our qualification criteria. Businesses that do not meet our verification standards will not be approved for program participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}