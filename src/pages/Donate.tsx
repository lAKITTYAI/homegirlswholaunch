
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const DonationOption = ({ amount, description, onClick }: { amount: string, description: string, onClick: () => void }) => (
  <button
    onClick={onClick}
    className="w-full p-4 border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors text-left mb-4"
  >
    <h3 className="text-xl font-bold text-primary">{amount}</h3>
    <p className="text-neutral-600 text-sm mt-1">{description}</p>
  </button>
);

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(value);
    setSelectedAmount("");
  };

  const handleDonate = () => {
    // This would connect to Stripe in the future
    toast.success("Thank you for your support! (Stripe integration coming soon)");
  };

  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
              Support the <span className="text-primary">HomeGirls Launch Fund</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              At HomeGirls Who Launch, we believe that no woman should have to put her dreams on hold due to a lack of resources. 
              That's why we created the HomeGirls Launch Fund – a community-powered initiative that provides direct financial 
              support to first-time female entrepreneurs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-center">Make Your Donation</h2>
              
              <div className="mb-6">
                <h3 className="font-medium mb-3">Select donation type:</h3>
                <div className="flex gap-4">
                  <Button
                    variant={donationType === "one-time" ? "default" : "outline"}
                    onClick={() => setDonationType("one-time")}
                    className="flex-1"
                  >
                    One-time
                  </Button>
                  <Button
                    variant={donationType === "monthly" ? "default" : "outline"}
                    onClick={() => setDonationType("monthly")}
                    className="flex-1"
                  >
                    Monthly
                  </Button>
                </div>
              </div>
              
              <h3 className="font-medium mb-3">Select an amount:</h3>
              <DonationOption 
                amount="$25" 
                description="Provides a starter toolkit with business templates and resources" 
                onClick={() => handleAmountSelect("25")}
              />
              <DonationOption 
                amount="$100" 
                description="Funds mentorship sessions for a new entrepreneur" 
                onClick={() => handleAmountSelect("100")}
              />
              <DonationOption 
                amount="$500" 
                description="Supports a full business launch package, including branding and digital tools" 
                onClick={() => handleAmountSelect("500")}
              />
              <DonationOption 
                amount="$1,000" 
                description="Sponsors a 'HomeGirl Startup Fellowship,' giving comprehensive support" 
                onClick={() => handleAmountSelect("1000")}
              />
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Or enter a custom amount:</h3>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomAmount}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              <Button 
                onClick={handleDonate} 
                className="w-full py-6 text-lg"
                disabled={!selectedAmount && !customAmount}
              >
                Donate {selectedAmount ? `$${selectedAmount}` : customAmount ? `$${customAmount}` : ""} 
                {donationType === "monthly" ? " Monthly" : ""}
              </Button>
              <p className="text-center text-sm mt-2 text-neutral-500">
                Secure payment powered by Stripe
              </p>
            </Card>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Why Donate?</h2>
              <p className="mb-4 text-neutral-600">
                When you contribute to the HomeGirls Launch Fund, you're doing more than giving money – 
                you're investing in the future of women-led businesses and empowering the next generation 
                of girl bosses.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Meet the Launchers</h3>
              <p className="mb-4 text-neutral-600">
                Your generosity directly impacts the lives of real women on their entrepreneurial journey. 
                Through the Meet the Launchers program, you'll see firsthand how your support fuels the 
                dreams of our members.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Corporate Partnerships</h3>
              <p className="mb-4 text-neutral-600">
                We welcome partnerships with businesses who share our vision for empowering women entrepreneurs. 
                Partner with us and receive recognition, exclusive sponsorship opportunities, and make a 
                lasting impact.
              </p>
              
              <div className="bg-primary/10 p-4 rounded-lg mt-6">
                <h3 className="font-semibold">Have questions?</h3>
                <p className="text-sm">
                  For questions about donations or partnerships, contact us at{" "}
                  <a href="mailto:support@homegirlswholaunch.com" className="text-primary hover:underline">
                    support@homegirlswholaunch.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Donate;
