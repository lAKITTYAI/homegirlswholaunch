import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import CheckoutModal from "@/components/CheckoutModal";

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText = "Get Started", 
  highlighted = false,
  annualPrice,
  onSubscribe
}: { 
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText?: string;
  highlighted?: boolean;
  annualPrice?: string;
  onSubscribe: () => void;
}) => (
  <Card className={`flex flex-col h-full ${highlighted ? 'border-primary shadow-lg' : ''}`}>
    <CardHeader>
      {highlighted && <Badge className="w-fit mb-2 bg-primary">Most Popular</Badge>}
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-neutral-500">/month</span>
        {annualPrice && (
          <div className="text-sm text-neutral-500 mt-1">
            {annualPrice}/year (2 months free)
          </div>
        )}
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button 
        variant={highlighted ? "default" : "outline"} 
        className="w-full"
        onClick={onSubscribe}
      >
        {buttonText}
      </Button>
    </CardFooter>
  </Card>
);

const Pricing = () => {
  const [checkoutModal, setCheckoutModal] = useState<{
    isOpen: boolean;
    planName: string;
    monthlyPrice: string;
    annualPrice: string;
    features: string[];
  }>({
    isOpen: false,
    planName: '',
    monthlyPrice: '',
    annualPrice: '',
    features: []
  });

  const tiers = [
    {
      title: "Launch Squad",
      price: "$39",
      annualPrice: "$390",
      description: "For first-time entrepreneurs & freelancers starting out",
      features: [
        "Access to the HomeGirls Who Launch community",
        "Monthly Launch Playbooks",
        "Office Hours – Monthly group Q&A sessions",
        "Member-exclusive newsletters",
        "Free Grant List"
      ]
    },
    {
      title: "Boss Builder",
      price: "$199",
      annualPrice: "$1,990",
      description: "For entrepreneurs actively scaling their business",
      features: [
        "Everything in Launch Squad",
        "Bi-Weekly Masterclasses",
        "Personalized Business Audits",
        "Access to Resource Vault",
        "Priority Coaching",
        "HWL Magazine Spotlight opportunities"
      ],
      highlighted: true
    },
    {
      title: "Inner Circle",
      price: "$349",
      annualPrice: "$3,490",
      description: "For serious entrepreneurs ready for 1:1 mentorship",
      features: [
        "Everything in Boss Builder",
        "1:1 Strategy Session (Monthly)",
        "Exclusive Inner Circle Retreats",
        "Guaranteed HWL Magazine feature when business officially launches",
        "VIP Access to exclusive events"
      ]
    }
  ];

  const handleSubscribe = (tier: typeof tiers[0]) => {
    setCheckoutModal({
      isOpen: true,
      planName: tier.title,
      monthlyPrice: tier.price,
      annualPrice: tier.annualPrice,
      features: tier.features
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Membership Plans</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Join our community of women entrepreneurs and get access to the resources, support, and mentorship you need to launch and grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              price={tier.price}
              annualPrice={tier.annualPrice}
              description={tier.description}
              features={tier.features}
              highlighted={tier.highlighted}
              onSubscribe={() => handleSubscribe(tier)}
            />
          ))}
        </div>

        <div className="mt-16 text-center bg-secondary/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Annual Membership Perks & Payment Options</h2>
          <p className="text-lg mb-6">
            Lock in your success with our annual plans - save two months, plus get exclusive business credit benefits and flexible payment terms.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3 text-lg">Launch Squad</h3>
              <p className="text-2xl font-bold text-primary mb-2">$390/year</p>
              <p className="text-sm text-green-600 font-medium mb-3">Save $78 (2 months free)</p>
              <p className="text-sm text-muted-foreground mb-4">Split into 2 easy payments of $195</p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setCheckoutModal({
                    isOpen: true,
                    planName: "Launch Squad",
                    monthlyPrice: "$39",
                    annualPrice: "$390",
                    features: tiers[0].features
                  });
                }}
              >
                Get Started
              </Button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3 text-lg">Boss Builder</h3>
              <p className="text-2xl font-bold text-primary mb-2">$1,990/year</p>
              <p className="text-sm text-green-600 font-medium mb-3">Save $398 (2 months free)</p>
              <p className="text-sm text-muted-foreground mb-4">Split into 2 easy payments of $995</p>
              <Button 
                variant="default" 
                className="w-full"
                onClick={() => {
                  setCheckoutModal({
                    isOpen: true,
                    planName: "Boss Builder",
                    monthlyPrice: "$199",
                    annualPrice: "$1,990",
                    features: tiers[1].features
                  });
                }}
              >
                Get Started
              </Button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border-2 border-primary">
              <h3 className="font-semibold mb-3 text-lg">Inner Circle</h3>
              <p className="text-2xl font-bold text-primary mb-2">$3,490/year</p>
              <p className="text-sm text-green-600 font-medium mb-1">Save $698 (2 months free)</p>
              <p className="text-sm text-purple-600 font-medium mb-3">+ VIP gift box</p>
              <p className="text-sm text-muted-foreground mb-3">Split into 2 easy payments of $1,745</p>
              <div className="bg-gradient-to-r from-primary/10 to-purple-50 p-3 rounded-lg mb-4">
                <p className="text-xs font-semibold text-primary">🏆 EXCLUSIVE BENEFIT</p>
                <p className="text-xs text-muted-foreground mt-1">Automatic 3-bureau credit reporting for qualified businesses</p>
              </div>
              <Button 
                variant="default" 
                className="w-full"
                onClick={() => {
                  setCheckoutModal({
                    isOpen: true,
                    planName: "Inner Circle",
                    monthlyPrice: "$349",
                    annualPrice: "$3,490",
                    features: tiers[2].features
                  });
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CheckoutModal
        isOpen={checkoutModal.isOpen}
        onClose={() => setCheckoutModal({ ...checkoutModal, isOpen: false })}
        planName={checkoutModal.planName}
        monthlyPrice={checkoutModal.monthlyPrice}
        annualPrice={checkoutModal.annualPrice}
        features={checkoutModal.features}
      />
    </div>
  );
};

export default Pricing;
