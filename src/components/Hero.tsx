import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="mb-8">
            <img
              src="/lovable-uploads/9078973d-5f5e-4f0d-95ee-cfafef7ab155.png"
              alt="Homegirls Who Launch Logo"
              className="h-24 mx-auto"
            />
          </div>
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Launch Your Dream Business
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 leading-tight">
            Turn Your Side Hustle Into Your
            <span className="text-primary"> Main Hustle</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Join a community of ambitious entrepreneurs and get access to the resources,
            guidance, and funding you need to build your dream business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
              Join the Waitlist
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};