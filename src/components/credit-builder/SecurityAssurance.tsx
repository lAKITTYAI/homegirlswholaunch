import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, FileCheck, CreditCard } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "256-bit SSL encryption protects all your sensitive financial information"
  },
  {
    icon: Lock,
    title: "Privacy Protected",
    description: "Your data is never sold or shared with third parties without your consent"
  },
  {
    icon: FileCheck,
    title: "Compliance Standards",
    description: "We follow all federal regulations for credit reporting and financial services"
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "PCI DSS compliant payment processing ensures your payment data is safe"
  }
];

export default function SecurityAssurance() {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">Your Security & Privacy</h3>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          We use enterprise-grade security measures to protect your personal and business information
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {securityFeatures.map((feature, index) => (
          <Card key={feature.title} className="text-center">
            <CardContent className="pt-6">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-neutral-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-neutral-500">
          All credit reporting is done in compliance with the Fair Credit Reporting Act (FCRA) and other applicable regulations.
        </p>
      </div>
    </div>
  );
}