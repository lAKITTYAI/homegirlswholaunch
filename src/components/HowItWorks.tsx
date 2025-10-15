import { motion } from "framer-motion";
import { Users, Target, Rocket, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Users,
    number: "01",
    title: "Join the Community",
    description: "Sign up and get instant access to our digital resources library. Connect with your local HWL chapter or join our online community to meet fellow entrepreneurs.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200"
  },
  {
    icon: Target,
    number: "02",
    title: "Choose Your Path",
    description: "Pick what works for you: attend monthly local chapter meetings, join our intensive 3-6 month cohort accelerator, or go self-paced with digital resources. Mix and match based on your needs.",
    color: "bg-pink-50",
    iconColor: "text-pink-600",
    borderColor: "border-pink-200"
  },
  {
    icon: Rocket,
    number: "03",
    title: "Build with Support",
    description: "Get paired with an accountability partner, access expert mentorship, attend speaker seminars, and build your business credit. We provide the tools, you bring the hustle.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200"
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Launch & Celebrate",
    description: "Access funding opportunities, get featured in HWL Magazine, receive VIP launch support, and celebrate your wins with the community. Your success is our success.",
    color: "bg-green-50",
    iconColor: "text-green-600",
    borderColor: "border-green-200"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Your journey from idea to thriving business, supported every step of the way
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`${step.color} ${step.borderColor} border-2 rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 hover-scale`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm`}>
                      <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                    </div>
                    <span className={`text-4xl font-bold ${step.iconColor} opacity-20`}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/40 to-transparent -translate-y-1/2 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-neutral-600 mb-6">
              Choose the launch plan that fits your goals and budget. Every plan includes community access and our signature support system.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link to="/launch-plans">View Launch Plans</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
                asChild
              >
                <Link to="/resources">Browse Digital Resources</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
