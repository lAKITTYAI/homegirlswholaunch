
import { motion } from "framer-motion";
import { Lightbulb, Users, Heart, Calendar, Mic, Rocket, PartyPopper, UserCheck, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Users,
    title: "Local Chapter Meetings",
    description: "Join monthly meetups in your city to connect face-to-face with fellow women entrepreneurs. Build genuine relationships and local business networks.",
  },
  {
    icon: Rocket,
    title: "3-6 Month Cohort Accelerator",
    description: "Structured program with weekly group coaching, accountability partners, and milestone tracking. Launch or scale your business with intensive support.",
  },
  {
    icon: UserCheck,
    title: "Peer Accountability Groups",
    description: "Get matched with fellow entrepreneurs at your stage. Regular check-ins, goal setting, and mutual support to keep you on track.",
  },
  {
    icon: Lightbulb,
    title: "Expert Mentorship",
    description: "Get personalized guidance from successful entrepreneurs in your industry. Industry-specific expertise and strategic advice when you need it.",
  },
  {
    icon: Calendar,
    title: "Flexible Learning Options",
    description: "Choose between self-paced digital resources or live coaching programs. Our hybrid model adapts to your schedule and learning style.",
  },
  {
    icon: Mic,
    title: "Guest Speaker Seminars",
    description: "Learn from industry experts and successful entrepreneurs in exclusive seminars and monthly HWL meetings.",
  },
  {
    icon: Heart,
    title: "Funding Opportunities",
    description: "Access to grants, credit building, and funding partners. Over $2.3M+ secured for members through our exclusive network.",
    link: "/funding-options"
  },
  {
    icon: PartyPopper,
    title: "VIP Launch Support",
    description: "Celebrate your business milestones with launch parties, press features, and social media amplification from the HWL community.",
  },
  {
    icon: Plus,
    title: "And More",
    description: "HWL Magazine features, ambassador opportunities, and exclusive member privileges await you.",
    link: "/about"
  },
];

export const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Built on Community, Powered by Support
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From local chapter meetings to intensive cohort programs, we combine in-person connection with digital flexibility to support your unique entrepreneurial journey.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-neutral-50 hover:bg-white hover:shadow-lg transition-all duration-300 hover-scale"
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
                {feature.link && (
                  <Link 
                    to={feature.link} 
                    className="mt-4 inline-block text-primary hover:underline font-medium story-link"
                  >
                    Learn more
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
