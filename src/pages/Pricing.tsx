import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import CheckoutModal from "@/components/CheckoutModal";
import WaitlistModal from "@/components/WaitlistModal";

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText = "Get Started", 
  highlighted = false,
  annualPrice,
  onSubscribe,
  onJoinWaitlist
}: { 
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText?: string;
  highlighted?: boolean;
  annualPrice?: string;
  onSubscribe: () => void;
  onJoinWaitlist: () => void;
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
    <CardFooter className="flex flex-col gap-3">
      <Button 
        variant={highlighted ? "default" : "outline"} 
        className="w-full"
        onClick={onSubscribe}
      >
        Choose This Plan
      </Button>
      <Button 
        variant="ghost" 
        className="w-full border border-input"
        onClick={onJoinWaitlist}
      >
        Join the Waitlist
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

  const [waitlistModal, setWaitlistModal] = useState<{
    isOpen: boolean;
    planName: string;
  }>({
    isOpen: false,
    planName: ''
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

  const handleJoinWaitlist = (tier: typeof tiers[0]) => {
    setWaitlistModal({
      isOpen: true,
      planName: tier.title
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">
            Coming Soon - Pre-Launch Access
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Membership Plans</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Be among the first to join our community when we launch! Reserve your spot now and get exclusive founding member benefits.
          </p>
          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20 max-w-2xl mx-auto">
            <p className="text-sm text-primary font-medium">
              🎉 Pre-Launch Special: First 100 members get 50% off their first year + exclusive founding member perks
            </p>
          </div>
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
              onJoinWaitlist={() => handleJoinWaitlist(tier)}
            />
          ))}
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
      
      <WaitlistModal
        isOpen={waitlistModal.isOpen}
        onClose={() => setWaitlistModal({ ...waitlistModal, isOpen: false })}
        planName={waitlistModal.planName}
      />
    </div>
  );
};

export default Pricing;
