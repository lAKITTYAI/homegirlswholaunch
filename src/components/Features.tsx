import { motion } from "framer-motion";
import { Lightbulb, Users, Wallet } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Expert Guidance",
    description: "Get personalized mentorship and strategic advice from successful entrepreneurs.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description: "Connect with like-minded individuals who share your entrepreneurial journey.",
  },
  {
    icon: Wallet,
    title: "Funding Solutions",
    description: "Access various funding options and financial resources to grow your business.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We provide all the tools and resources you need to transform your side hustle
            into a successful business.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-neutral-50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};