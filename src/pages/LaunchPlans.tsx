import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Plus, Rocket, Calendar, Star } from "lucide-react";
import { toast } from "sonner";
import AmbassadorApplicationForm from "@/components/AmbassadorApplicationForm";

// Kit visual list
const kitItems = [
  {
    label: "Custom Logo",
    description: "A mock brand called Aurora Accessories shown on a sleek laptop screen.",
  },
  {
    label: "Brand Moodboard",
    description: "A clean Canva-style collage with fonts + color swatches.",
  },
  {
    label: "Business Bio & Tagline",
    description: "Shown on a mobile preview (feels like their real brand).",
  },
  {
    label: "Welcome Email Template",
    description: "Rendered as a phone email mockup with luxury product photo.",
  },
  {
    label: "5 IG Captions",
    description: "Displayed via a sample IG post format.",
  },
  {
    label: '"What\'s Next" Checklist',
    description: "Multiple checklist styles on cute lavender/gold cards.",
  },
];

// Sample launch plan templates (Ultimate Branding Package first, then Homegirls Kit, then Ambassador)
const launchPlanTemplates = [
  {
    id: "ultimate-branding",
    title: "Ultimate Branding Package",
    description: "Everything you need to stand out like a boss. For a limited time, get $75 secrets to branding + brand essentials.",
    kit: true,
    price: "$75.00",
    limitedTime: true,
    featured: true,
    coverImage: "/lovable-uploads/31e73e7b-f073-44bd-ae9d-635a594b3ad7.png",
    kitItems: [
      {
        label: "Brand Strategy Guide",
        description: "Step-by-step guide to developing your unique brand identity.",
      },
      {
        label: "Logo Design Templates",
        description: "Professional logo templates and design principles.",
      },
      {
        label: "Color Palette & Typography Guide",
        description: "Choose the perfect colors and fonts for your brand.",
      },
      {
        label: "Brand Voice & Messaging Kit",
        description: "Develop your brand's personality and communication style.",
      },
      {
        label: "Social Media Branding Templates",
        description: "Consistent branding across all your social platforms.",
      },
      {
        label: "Business Branding Checklist",
        description: "Complete checklist to ensure brand consistency everywhere.",
      },
    ],
  },
  {
    id: "kit",
    title: "The Homegirls Who Launch Kit",
    description: "Everything you need to launch like a boss. For a limited time, get our ultimate launch kit packed with premium branding, social media, and business essentials.",
    kit: true,
    price: "$149.00",
    limitedTime: true,
    featured: true,
    coverImage: "/lovable-uploads/e8248008-7075-4ddc-84c0-cedcfbd591e3.png",
    kitItems,
  },
  {
    id: "ambassador",
    title: "Become a HWL Ambassador",
    description: "Join our ambassador program to empower women, make money, and build your brand while representing HWL with 30% commission and no cap.",
    ambassador: true,
    featured: true,
    coverImage: "/lovable-uploads/13b7dca7-8944-4d2c-bdd4-dfa4f7b94e33.png",
    benefits: [
      "30% commission on all referrals",
      "No commission caps or limits",
      "Exclusive ambassador resources",
      "Personal branding support",
      "Community recognition",
      "Early access to new programs"
    ]
  },

  // original plans, keep IDs as numbers for all other plans
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
    coverImage: "lovable-uploads/45bac26b-54f9-4d58-8840-05424b9a8cbe.png",
  },
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
    coverImage: "lovable-uploads/ee800c71-472a-4278-8e54-0d2034deb217.png",
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
    coverImage: "lovable-uploads/f8ef299d-aa55-4b32-8e6b-a07c1b39a420.png",
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
    coverImage: "lovable-uploads/c89ebdaa-4404-42bb-b02e-c7958dd17e05.png",
  },
];

export default function LaunchPlans() {
  const [savedPlans, setSavedPlans] = useState<number[]>([]);
  const [showAmbassadorForm, setShowAmbassadorForm] = useState(false);

  const savePlan = (id: number) => {
    if (savedPlans.includes(id)) {
      setSavedPlans(savedPlans.filter(planId => planId !== id));
      toast.info("Plan removed from your dashboard");
    } else {
      setSavedPlans([...savedPlans, id]);
      toast.success("Plan added to your dashboard");
    }
  };

  if (showAmbassadorForm) {
    return <AmbassadorApplicationForm onBack={() => setShowAmbassadorForm(false)} />;
  }

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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 lg:col-span-3 mb-8"
          >
            <img
              src="public/lovable-uploads/c7ce2bf2-7c2d-4583-8804-83d2ba602e6a.png"
              alt="Team collaborating on launch plans"
              className="w-full rounded-lg shadow-lg object-cover max-h-[500px]"
            />
          </motion.div>

          {launchPlanTemplates.map((template, idx) =>
            template.kit ? (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="md:col-span-2 lg:col-span-3"
              >
                <Card className="h-full flex flex-col border-primary bg-primary/5 border-2 shadow-lg relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-secondary-dark text-primary px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wider shadow">
                      Limited Time Special
                    </span>
                  </div>
                  <img
                    src={template.coverImage}
                    alt={`${template.title} Visual`}
                    className="rounded-t-lg w-full object-contain h-auto min-h-[300px] max-h-[500px] border-b border-primary bg-white"
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-1">
                      <CardTitle className="text-2xl font-extrabold text-primary-dark">
                        {template.title}
                      </CardTitle>
                      <span className="text-lg font-semibold bg-primary text-white rounded-full px-4 py-1 shadow">{template.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-700 text-base mb-4">
                      {template.description}
                    </p>
                    <div className="mb-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-center text-blue-700 font-medium text-sm">
                        <Check className="h-4 w-4 mr-2" />
                        Free for Boss Builder and Inner Circle members
                      </div>
                    </div>
                    {(template.price === "$149.00" || template.price === "$75.00") && (
                      <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="flex items-center text-green-700 font-medium text-sm">
                          <Check className="h-4 w-4 mr-2" />
                          Eligible for net 30 payments
                        </div>
                      </div>
                    )}
                    <ul className="grid md:grid-cols-3 gap-y-3 gap-x-6 text-sm mb-4">
                      {template.kitItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="text-primary mt-1" size={18} />
                          <span>
                            <span className="font-medium">{item.label}</span>
                            <span className="block text-neutral-600">{item.description}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3 pt-0 items-center">
                    <div className="w-full flex gap-2">
                      <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10">
                        Choose as Member
                      </Button>
                      <Button className="flex-1 bg-primary hover:bg-primary-dark">
                        Purchase – {template.price}
                      </Button>
                    </div>
                    <span className="text-xs text-primary-dark opacity-70 tracking-wide">Free for members | Net 30 available for purchases</span>
                  </CardFooter>
                </Card>
              </motion.div>
            ) : template.ambassador ? (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="md:col-span-2 lg:col-span-3"
              >
                <Card className="h-full flex flex-col border-primary bg-primary/5 border-2 shadow-lg relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-secondary-dark text-primary px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wider shadow">
                      Ambassador Program
                    </span>
                  </div>
                  <img
                    src={template.coverImage}
                    alt={`${template.title} Visual`}
                    className="rounded-t-lg w-full object-contain h-auto min-h-[300px] max-h-[500px] border-b border-primary bg-white"
                  />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-1">
                      <CardTitle className="text-2xl font-extrabold text-primary-dark">
                        {template.title}
                      </CardTitle>
                      <span className="text-lg font-semibold bg-primary text-white rounded-full px-4 py-1 shadow">30% Commission</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-700 text-base mb-4">
                      {template.description}
                    </p>
                    <ul className="grid md:grid-cols-2 gap-y-3 gap-x-6 text-sm mb-4">
                      {template.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="text-primary mt-1" size={18} />
                          <span className="font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3 pt-0 items-center">
                    <Button 
                      className="w-full bg-primary hover:bg-primary-dark text-lg font-bold py-3"
                      onClick={() => setShowAmbassadorForm(true)}
                    >
                      Apply for Ambassador Position
                    </Button>
                    <span className="text-xs text-primary-dark opacity-70 tracking-wide">Work with us and earn 30% commission with no caps</span>
                  </CardFooter>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className={`h-full flex flex-col hover:shadow-md transition-shadow ${template.featured ? 'border-primary border-2' : ''}`}>
                  {template.featured ? (
                    <div className="bg-primary text-white text-center py-1 text-sm font-medium">
                      FEATURED
                    </div>
                  ) : null}
                  {template.coverImage && (
                    <img
                      src={template.coverImage}
                      alt={`${template.title} cover image`}
                      className="rounded-t-lg w-full object-contain h-auto"
                    />
                  )}
                  <CardHeader className="relative">
                    {template.featured ? (
                      <div className="absolute top-0 right-0 mt-2 mr-2">
                        <Star className="h-5 w-5 text-primary fill-primary" />
                      </div>
                    ) : null}
                    <CardTitle>{template.title}</CardTitle>
                    {template.timeframe &&
                      <div className="flex items-center text-neutral-500 text-sm mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <p>Timeframe: {template.timeframe}</p>
                      </div>
                    }
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-neutral-600 mb-4">{template.description}</p>
                    <div className="mb-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-center text-blue-700 font-medium text-sm">
                        <Check className="h-4 w-4 mr-2" />
                        Free for Boss Builder and Inner Circle members
                      </div>
                    </div>
                    {template.steps && <ul className="space-y-2">
                      {template.steps.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 text-primary">
                            <Check size={16} />
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>}
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
                  <CardFooter className="flex flex-col gap-3 pt-0">
                    <div className="w-full flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-primary text-primary hover:bg-primary/10"
                      >
                        Choose as Member
                      </Button>
                      <Button className="flex-1 bg-primary hover:bg-primary-dark">
                        Purchase for Non-Members
                      </Button>
                    </div>
                    <span className="text-xs text-primary-dark opacity-70 tracking-wide text-center">Free for Boss Builder, Inner Circle & Launch Squad members</span>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
}
