import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, PiggyBank, Users, AlertCircle } from "lucide-react";
import CreditBenefits from "@/components/credit-builder/CreditBenefits";
import PricingTiers from "@/components/credit-builder/PricingTiers";
import FAQ from "@/components/credit-builder/FAQ";
import SecurityAssurance from "@/components/credit-builder/SecurityAssurance";
import ResultsTimeline from "@/components/credit-builder/ResultsTimeline";


export default function BusinessCreditBuilder() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: string, type: string} | null>(null);

  const handleSelectPlan = (planName: string, price: string, type: string) => {
    setSelectedPlan({ name: planName, price, type });
    // TODO: Integrate with payment processing or enrollment form
    console.log(`Selected plan: ${planName} (${price}) - Type: ${type}`);
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

        <PricingTiers onSelectPlan={handleSelectPlan} />

        <CreditBenefits />

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

        <ResultsTimeline />

        <SecurityAssurance />

        <FAQ />

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