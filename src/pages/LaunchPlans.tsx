
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Plus, Rocket, Calendar, Star } from "lucide-react";
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
  {
    id: 4,
    title: "HWL Custom Launch Plan",
    description: "A hyper custom launch plan for our members who need a step by step plan for their first business launch.",
    steps: [
      "1-on-1 strategy call with a launch expert",
      "Personalized timeline & milestone creation",
      "Custom marketing & branding strategy",
      "Weekly accountability check-ins",
      "Post-launch review & next steps planning",
    ],
    timeframe: "4 weeks",
    featured: true,
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
              <Card className={`h-full flex flex-col hover:shadow-md transition-shadow ${template.featured ? 'border-primary border-2' : ''}`}>
                {template.featured && (
                  <div className="bg-primary text-white text-center py-1 text-sm font-medium">
                    FEATURED
                  </div>
                )}
                <CardHeader className="relative">
                  {template.featured ? (
                    <div className="absolute top-0 right-0 mt-2 mr-2">
                      <Star className="h-5 w-5 text-primary fill-primary" />
                    </div>
                  ) : null}
                  <CardTitle>{template.title}</CardTitle>
                  <div className="flex items-center text-neutral-500 text-sm mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <p>Timeframe: {template.timeframe}</p>
                  </div>
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
                  {template.featured && (
                    <div className="mt-4 bg-primary/10 p-3 rounded-md">
                      <div className="flex items-center text-primary font-medium mb-2">
                        <Rocket size={16} className="mr-2" />
                        Additional Features:
                      </div>
                      <ul className="text-sm space-y-1 text-neutral-700">
                        <li>• Priority access to launch experts</li>
                        <li>• Custom social media content calendar</li>
                        <li>• Personalized launch day checklist</li>
                        <li>• Post-launch analytics & assessment</li>
                      </ul>
                    </div>
                  )}
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
                  <Button className={`${template.featured ? 'bg-primary hover:bg-primary-dark' : 'bg-primary hover:bg-primary-dark'}`}>
                    {template.featured ? 'Apply Now' : 'Customize'}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
