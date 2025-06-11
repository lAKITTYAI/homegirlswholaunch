
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("Thank you for joining our waitlist!");
    setEmail("");
  };

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
              className="h-32 mx-auto" 
            />
          </div>
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Launch Your Dream Business
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 leading-tight">
            Turn Your Side Hustle Into Your
            <span className="text-purple-700"> Main Hustle</span>
          </h1>
          <div className="mb-6">
            <img 
              src="/lovable-uploads/059f52f4-e079-48bc-882c-d787435cf13b.png" 
              alt="Homegirls Who Launch - Professional woman in purple suit" 
              className="h-64 mx-auto object-contain" 
            />
          </div>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Join a community of ambitious entrepreneurs and get access to the resources,
            guidance, and funding you need to build your dream business.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" className="bg-primary hover:bg-primary-dark text-white whitespace-nowrap">
                Join Waitlist
              </Button>
            </div>
          </form>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5" asChild>
              <Link to="/launch-plans">Explore Launch Plans</Link>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5" asChild>
              <Link to="/resources">Browse Resources</Link>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5" asChild>
              <Link to="/community">Join Community</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
