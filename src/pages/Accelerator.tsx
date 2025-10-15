import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Rocket, Users, Target, TrendingUp, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Accelerator = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-accelerator-checkout", {
        body: { email },
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
        setIsCheckoutOpen(false);
        setEmail("");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to start checkout. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const benefits = [
    {
      icon: Target,
      title: "Strategic Guidance",
      description: "Work with experienced mentors to refine your business strategy and accelerate growth"
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Connect with fellow entrepreneurs and build lasting partnerships"
    },
    {
      icon: TrendingUp,
      title: "Growth Resources",
      description: "Access funding opportunities, pitch practice, and investor connections"
    },
    {
      icon: Calendar,
      title: "Structured Program",
      description: "12-week intensive program with weekly workshops and accountability"
    }
  ];

  const programHighlights = [
    "Weekly group workshops and masterclasses",
    "1-on-1 mentorship sessions",
    "Pitch deck development and practice",
    "Financial planning and forecasting",
    "Marketing and customer acquisition strategies",
    "Legal and compliance guidance",
    "Demo day with potential investors",
    "Ongoing community support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Rocket className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              HWL Accelerator Program
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your business idea into a thriving company with our intensive 12-week accelerator program designed for ambitious women entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" onClick={() => setIsCheckoutOpen(true)}>
                Apply Now - $3,000
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="#program-details">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">What You'll Get</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section id="program-details" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Program Highlights</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive program covers everything you need to take your business to the next level.
              </p>
              <div className="space-y-4">
                {programHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Application Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Cohort Start</h4>
                    <p className="text-muted-foreground">Rolling admissions - New cohorts start quarterly</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Duration</h4>
                    <p className="text-muted-foreground">12 weeks intensive program</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Commitment</h4>
                    <p className="text-muted-foreground">10-15 hours per week</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Investment</h4>
                    <p className="text-muted-foreground">Available for HWL members</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our next cohort and take your business to new heights with the support of our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" onClick={() => setIsCheckoutOpen(true)}>
              Submit Application - $3,000
            </Button>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Membership Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apply to HWL Accelerator</DialogTitle>
            <DialogDescription>
              Enter your email to proceed with your $3,000 application payment.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <Button 
              className="w-full" 
              onClick={handleCheckout}
              disabled={isLoading || !email}
            >
              {isLoading ? "Processing..." : "Proceed to Payment"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Accelerator;
