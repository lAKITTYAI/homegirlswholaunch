
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText = "Get Started", 
  highlighted = false,
  annualPrice
}: { 
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText?: string;
  highlighted?: boolean;
  annualPrice?: string;
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
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button variant={highlighted ? "default" : "outline"} className="w-full">
        {buttonText}
      </Button>
    </CardFooter>
  </Card>
);

const Pricing = () => {
  const tiers = [
    {
      title: "Launch Squad",
      price: "$29",
      annualPrice: "$290",
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
      price: "$79",
      annualPrice: "$790",
      description: "For entrepreneurs actively scaling their business",
      features: [
        "Everything in Launch Squad",
        "Bi-Weekly Masterclasses",
        "Personalized Business Audits",
        "Access to Resource Vault",
        "Priority Coaching"
      ],
      highlighted: true
    },
    {
      title: "Inner Circle",
      price: "$249",
      annualPrice: "$2,490",
      description: "For serious entrepreneurs ready for 1:1 mentorship",
      features: [
        "Everything in Boss Builder",
        "1:1 Strategy Session (Monthly)",
        "Exclusive Inner Circle Retreats",
        "Spotlight Opportunities",
        "VIP Access to exclusive events"
      ]
    }
  ];

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
            />
          ))}
        </div>

        <div className="mt-16 text-center bg-secondary/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Annual Membership Benefits</h2>
          <p className="text-lg mb-6">
            Save with our annual plans and get two months free, plus exclusive bonuses for our Inner Circle members.
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="p-4">
              <h3 className="font-semibold mb-2">Launch Squad</h3>
              <p>$290/year (2 months free)</p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Boss Builder</h3>
              <p>$790/year (2 months free)</p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Inner Circle</h3>
              <p>$2,490/year (2 months free + a bonus VIP gift box)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
