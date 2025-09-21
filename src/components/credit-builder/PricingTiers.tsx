import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface PricingTiersProps {
  onSelectPlan: (planName: string, price: string, type: string) => void;
}

export default function PricingTiers({ onSelectPlan }: PricingTiersProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border-2 border-primary/20 shadow-lg mb-12"
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
              onClick={() => onSelectPlan("Boss Builder Membership", "$199", "Starter Track")}
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
              onClick={() => onSelectPlan("Inner Circle Membership", "$349", "Builder Track")}
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
              onClick={() => onSelectPlan("Instant Credit Reporting", "$99 + Membership", "Accelerated Track")}
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
              onClick={() => onSelectPlan("Credit Reporting Service", "$49/month", "Reporting Only")}
            >
              Select Reporting Only
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-neutral-600 max-w-4xl mx-auto">
          <strong>Standalone Credit Reporting Service:</strong> This option is not a savings account or membership - it's a standalone option just to build credit only. 
          You can also use this option to build personal credit as well (personal credit payments start at $25). You do not have to be a member for this option.
          This money is not returned and you can choose how long you want to continue to pay to be reported. 
          We recommend paying for at least 90 days for optimal credit building results.
        </p>
      </div>
    </motion.div>
  );
}