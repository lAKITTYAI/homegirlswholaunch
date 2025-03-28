
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import { toast } from "sonner";

// Sample launch plan templates
const launchPlanTemplates = [
  {
    id: 1,
    title: "E-Commerce Launch",
    description: "Perfect for product-based businesses looking to establish an online presence.",
    steps: [
      "Set up online store",
      "Create product listings",
      "Configure payment processing",
      "Set up shipping options",
      "Create marketing plan",
    ],
    timeframe: "3 months",
  },
  {
    id: 2,
    title: "Service Business Launch",
    description: "Ideal for consultants, coaches, or service-based entrepreneurs.",
    steps: [
      "Create service packages",
      "Build portfolio/case studies",
      "Set up scheduling system",
      "Create client onboarding process",
      "Develop referral program",
    ],
    timeframe: "2 months",
  },
  {
    id: 3,
    title: "Digital Product Launch",
    description: "For entrepreneurs launching digital products like courses or ebooks.",
    steps: [
      "Create product content",
      "Set up sales page",
      "Configure digital delivery",
      "Plan email sequence",
      "Set up affiliate program",
    ],
    timeframe: "6 weeks",
  },
];

export default function LaunchPlans() {
  const [savedPlans, setSavedPlans] = useState<number[]>([]);

  const savePlan = (id: number) => {
    if (savedPlans.includes(id)) {
      setSavedPlans(savedPlans.filter(planId => planId !== id));
      toast.info("Plan removed from your dashboard");
    } else {
      setSavedPlans([...savedPlans, id]);
      toast.success("Plan added to your dashboard");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Customizable Launch Plan Templates
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Choose a template to start with, then customize it to fit your specific business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {launchPlanTemplates.map((template) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>{template.title}</CardTitle>
                  <p className="text-neutral-500 text-sm">Timeframe: {template.timeframe}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-neutral-600 mb-4">{template.description}</p>
                  <ul className="space-y-2">
                    {template.steps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 text-primary">
                          <Check size={16} />
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary/5"
                    onClick={() => savePlan(template.id)}
                  >
                    {savedPlans.includes(template.id) ? (
                      <>
                        <Check size={16} className="mr-1" /> Saved
                      </>
                    ) : (
                      <>
                        <Plus size={16} className="mr-1" /> Save
                      </>
                    )}
                  </Button>
                  <Button className="bg-primary hover:bg-primary-dark">Customize</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
