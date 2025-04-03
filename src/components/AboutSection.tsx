
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Where Vision Meets Opportunity
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              At HomeGirls Who Launch, we create a supportive space for women entrepreneurs to 
              transform their ideas into thriving businesses. Our community provides the resources, 
              mentorship, and funding opportunities needed to help you make your mark in the business world.
            </p>
            <p className="text-lg text-neutral-600 mb-8">
              Whether you're at the beginning stages of your entrepreneurial journey or ready to 
              scale your existing venture, our tailored launch plans and expert network are here to guide you every step of the way.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link to="/about">Learn About HWL</Link>
              </Button>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
                asChild
              >
                <Link to="/launch-plans">Explore Launch Plans</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="lovable-uploads/8fc75791-aaa9-4af7-9a14-c94f554650be.png"
                alt="HomeGirls Who Launch Workspace"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-60 rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
