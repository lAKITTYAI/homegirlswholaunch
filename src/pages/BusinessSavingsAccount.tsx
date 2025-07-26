import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, DollarSign, TrendingUp, Shield, FileText } from "lucide-react";

export default function BusinessSavingsAccount() {
  const memberPlans = [
    {
      name: "Starter Plan",
      price: "$25/month",
      duration: "9 months",
      total: "$225 total saved",
      color: "bg-green-50 border-green-200 text-green-800"
    },
    {
      name: "Builder Plan", 
      price: "$50/month",
      duration: "12 months",
      total: "$600 total saved",
      color: "bg-blue-50 border-blue-200 text-blue-800"
    },
    {
      name: "Boss Up Plan",
      price: "$100/month", 
      duration: "18 months",
      total: "$1,800 total saved",
      color: "bg-purple-50 border-purple-200 text-purple-800"
    }
  ];

  const nonMemberPlans = [
    {
      name: "Starter Plan",
      price: "$35/month",
      duration: "9 months",
      total: "$315 total saved",
      color: "bg-green-50 border-green-200 text-green-800"
    },
    {
      name: "Builder Plan", 
      price: "$70/month",
      duration: "12 months",
      total: "$840 total saved",
      color: "bg-blue-50 border-blue-200 text-blue-800"
    },
    {
      name: "Boss Up Plan",
      price: "$140/month", 
      duration: "18 months",
      total: "$2,520 total saved",
      color: "bg-purple-50 border-purple-200 text-purple-800"
    }
  ];

  const features = [
    "No credit check required",
    "No debt or interest", 
    "Build 9–18 months of payment history",
    "Exclusive access to Homegirls vendor list",
    "Eligible for Net 30 application approval"
  ];

  const requirements = [
    "Active business entity with verifiable registration (LLC, S-Corp, or Corp)",
    "Valid EIN (Employer Identification Number) from IRS",
    "Business bank account in the legal business name",
    "Verifiable business address (no P.O. boxes)",
    "Active business email and phone number matching business records",
    "Business must be operational for at least 30 days",
    "Valid government-issued ID for business owner/authorized signatory"
  ];

  const steps = [
    "Choose your plan tier (member or non-member pricing)",
    "Complete enrollment with business verification (EIN, business bank account)", 
    "Set up automatic monthly payments via our secure payment processor",
    "We report your on-time payments as Net 30 tradelines to business credit bureaus",
    "Continue making monthly payments for your selected term (9-18 months)",
    "Receive your total savings back upon successful completion of the program",
    "Get your completion certificate and access to next-step funding guidance"
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Credit Builder Savings Program
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Build strong business credit while saving toward future business goals - without debt or interest
          </p>
        </div>

        {/* Program Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Program Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-700 leading-relaxed">
              The Homegirls Credit Builder Savings Program is a monthly subscription designed to help entrepreneurs 
              build strong business credit while saving toward future business goals. Unlike traditional loans, our 
              program offers credit-building without debt. Customers select a plan, make monthly payments, and have 
              those payments reported as tradelines to business credit bureaus. At the end of the term, they receive 
              their total savings back (minus optional admin fees), along with a stronger credit profile.
            </p>
          </CardContent>
        </Card>

        {/* Pricing Notice */}
        <div className="mb-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">Special Member Pricing Available</h3>
                <p className="text-neutral-700">
                  HWL members save 30% on all Credit Builder Savings plans. 
                  <span className="font-semibold"> Non-members pay standard rates below.</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Member Pricing First */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-2 text-primary">HWL Member Pricing (30% Savings)</h2>
          <p className="text-center text-neutral-600 mb-8">Exclusive rates for HWL members</p>
          <div className="grid md:grid-cols-3 gap-6">
            {memberPlans.map((plan, index) => (
              <motion.div
                key={`member-${plan.name}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-primary/50 bg-primary/5">
                  <CardHeader>
                    <Badge className="bg-primary text-white">{plan.name} - MEMBER</Badge>
                    <div className="mt-4">
                      <div className="text-3xl font-bold text-primary">{plan.price}</div>
                      <div className="text-neutral-600">{plan.duration}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-semibold text-neutral-800">{plan.total}</div>
                    <div className="text-sm text-neutral-600 mt-2">
                      {plan.name === "Starter Plan" && "Reports to 1 credit bureau"}
                      {plan.name === "Builder Plan" && "Reports to 2 credit bureaus"}
                      {plan.name === "Boss Up Plan" && "Reports to 3 credit bureaus"}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Non-Member Plan Tiers */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-2">Non-Member Plan Tiers</h3>
          <p className="text-center text-neutral-600 mb-8">Standard pricing for non-members</p>
          <div className="grid md:grid-cols-3 gap-6">
            {nonMemberPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <Badge className={plan.color}>{plan.name}</Badge>
                    <div className="mt-4">
                      <div className="text-3xl font-bold text-primary">{plan.price}</div>
                      <div className="text-neutral-600">{plan.duration}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-semibold text-neutral-800">{plan.total}</div>
                    <div className="text-sm text-neutral-600 mt-2">
                      {plan.name === "Starter Plan" && "Reports to 1 credit bureau"}
                      {plan.name === "Builder Plan" && "Reports to 2 credit bureaus"}
                      {plan.name === "Boss Up Plan" && "Reports to 3 credit bureaus"}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-neutral-600 mt-6">
            Each on-time payment is reported monthly, helping customers build history with 
            Dun & Bradstreet, Experian Business, and Equifax Business.
          </p>
        </div>

        {/* Agreement Access */}
        <div className="text-center mb-12">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                View Program Agreement
              </Button>
            </DialogTrigger>
            <DialogContent 
              className="max-w-5xl max-h-[85vh] overflow-y-auto" 
              style={{backgroundColor: '#ffffff', opacity: 1, zIndex: 9999}}
            >
              <DialogHeader>
                <DialogTitle className="text-xl text-center text-black">Homegirls Who Launch - Credit Builder Savings Agreement</DialogTitle>
              </DialogHeader>
              <div className="space-y-8 text-base leading-relaxed bg-white p-4" style={{backgroundColor: '#ffffff !important'}}>
                <p style={{color: '#000000 !important', backgroundColor: '#ffffff !important'}}>
                  This Credit Builder Savings Agreement ("Agreement") is entered into between the undersigned
                  customer ("Customer") and Homegirls Who Launch LLC ("HWL"), a registered business entity.
                </p>
                
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">1. PROGRAM DESCRIPTION</h3>
                  <p style={{color: '#000000 !important', backgroundColor: '#ffffff !important'}}>
                    Customer agrees to participate in the HWL Credit Builder Savings Program. This program allows the
                    Customer to make monthly payments that are reported as Net 30 tradelines to major business credit
                    bureaus while savings are securely held for disbursement at the end of the term.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">2. PLAN SELECTION</h3>
                  <p style={{color: '#000000 !important', backgroundColor: '#ffffff !important'}}>Customer agrees to one of the following plans:</p>
                  <ul className="list-disc ml-6 mt-2" style={{color: '#000000 !important', backgroundColor: '#ffffff !important'}}>
                    <li style={{color: '#000000 !important'}}>Starter: $25/month for 9 months</li>
                    <li style={{color: '#000000 !important'}}>Builder: $50/month for 12 months</li>
                    <li style={{color: '#000000 !important'}}>Boss Up: $100/month for 18 months</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">3. PAYMENT TERMS</h3>
                  <p style={{color: '#000000 !important', backgroundColor: '#ffffff !important'}}>
                    Payments will be collected automatically via HWL's approved payment processor. All payments
                    must be made on time to maintain tradeline reporting and eligibility for the savings disbursement.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">4. REPORTING</h3>
                  <p style={{color: '#000000 !important', backgroundColor: '#ffffff !important'}}>
                    HWL will report monthly payment activity to one or more of the following commercial credit bureaus:
                    Dun & Bradstreet, Experian Business, Equifax Business via eCredable and/or Nav.
                  </p>
                  <p className="mt-3" style={{color: '#000000 !important', backgroundColor: '#ffffff !important'}}>
                    <strong>Important:</strong> HWL is committed to supporting our customers' financial success. We understand 
                    that unforeseen circumstances may arise that could impact your ability to make timely payments. Should you 
                    experience financial hardship, we encourage you to contact us immediately to discuss payment arrangements. 
                    HWL will never report negative payment information to credit bureaus and will work collaboratively with 
                    customers to find mutually acceptable solutions during times of financial difficulty.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">5. SAVINGS RELEASE</h3>
                  <p style={{color: '#000000 !important', backgroundColor: '#ffffff !important'}}>
                    At the end of the term, the total savings amount will be released to the Customer, minus any
                    administrative fees if applicable. Early termination will result in forfeiture of tradeline benefits and may reduce refund eligibility.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">6. LATE PAYMENTS</h3>
                  <p style={{color: '#000000 !important', backgroundColor: '#ffffff !important'}}>
                    A grace period of 5 calendar days is allowed for each monthly payment. Late payments may delay
                    or suspend credit reporting and savings release. Repeated missed payments may result in program
                    cancellation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">7. TERMINATION</h3>
                  <p style={{color: '#000000 !important', backgroundColor: '#ffffff !important'}}>
                    HWL reserves the right to terminate this agreement for non-compliance, fraud, or chargeback
                    abuse. Refunds will be assessed based on funds received and program standing at time of
                    termination.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">8. ACKNOWLEDGEMENT</h3>
                  <p style={{color: '#000000 !important', backgroundColor: '#ffffff !important'}}>
                    By signing below, the Customer agrees to the terms of this agreement and acknowledges that this
                    program is not a loan or a credit line, but a voluntary credit builder and savings plan.
                  </p>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">CUSTOMER INFORMATION:</h3>
                  <div className="space-y-3" style={{color: '#000000 !important', backgroundColor: '#ffffff !important'}}>
                    <p style={{color: '#000000 !important'}}>Full Name: ___________________________________________</p>
                    <p style={{color: '#000000 !important'}}>Business Name: _______________________________________</p>
                    <p style={{color: '#000000 !important'}}>Business EIN: _________________________________________</p>
                    <p style={{color: '#000000 !important'}}>Email: _______________________________________________</p>
                    <p style={{color: '#000000 !important'}}>Phone: _______________________________________________</p>
                    <p style={{color: '#000000 !important'}}>Signature: ___________________________ Date: ____________</p>
                  </div>
                  <p className="mt-4 text-primary font-medium">
                    Email completed agreement to: billing@homegirlswholaunch.com
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* How It Works */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              How It Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-neutral-700">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features & Requirements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Program Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Legal Structure & Reporting */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Legal Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700">
                Funds are held in a secured sub-account for the duration of the plan. Customers agree to 
                program terms prior to enrollment. Late payments may delay savings disbursement and tradeline reporting.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reporting Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700">
                We use eCredable Business Lift+ and Nav Business Boost to report monthly payment activity 
                to major business credit bureaus.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Support */}
        <Card>
          <CardHeader>
            <CardTitle>Support</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-neutral-700">
                <strong>Email:</strong> <a href="mailto:support@homegirlswholaunch.com" className="text-primary hover:underline">support@homegirlswholaunch.com</a>
              </p>
              <p className="text-neutral-700">
                <strong>Phone:</strong> <a href="tel:8885550199" className="text-primary hover:underline">(888) 555-0199</a>
              </p>
              <p className="text-neutral-700">
                <strong>Website:</strong> <a href="http://www.homegirlswholaunch.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.homegirlswholaunch.com</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}