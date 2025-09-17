import { motion } from "framer-motion";
import { Crown, Star, BookOpen, CreditCard, Users2, Sparkles, Trophy, DollarSign, Camera, Gift, Zap, Globe } from "lucide-react";

const privileges = [
  // Purple - Community & Connection (4 items)
  {
    icon: Users2,
    title: "VIP Member Network",
    description: "Connect with an exclusive community of ambitious female entrepreneurs.",
    bgColor: "bg-primary/10",
    iconBg: "bg-primary/20",
    iconColor: "text-primary"
  },
  {
    icon: Globe,
    title: "Local Chapter Access",
    description: "Join monthly meetups and networking events in cities nationwide.",
    bgColor: "bg-primary/10",
    iconBg: "bg-primary/20", 
    iconColor: "text-primary"
  },
  {
    icon: Sparkles,
    title: "Mentorship Matching",
    description: "Get paired with successful entrepreneurs in your industry.",
    bgColor: "bg-primary/10",
    iconBg: "bg-primary/20",
    iconColor: "text-primary"
  },
  {
    icon: BookOpen,
    title: "HWL Magazine Features",
    description: "Opportunity to be featured on the cover and get a full spread.",
    bgColor: "bg-primary/10",
    iconBg: "bg-primary/20",
    iconColor: "text-primary"
  },
  // Gold - Business & Funding (4 items)
  {
    icon: DollarSign,
    title: "Exclusive Funding Access",
    description: "Priority access to grants and funding opportunities for members only.",
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-200",
    iconColor: "text-yellow-700"
  },
  {
    icon: CreditCard,
    title: "Business Credit Building",
    description: "Net-30 payment terms and specialized credit building accounts.",
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-200",
    iconColor: "text-yellow-700"
  },
  {
    icon: Zap,
    title: "Fast-Track Programs",
    description: "Skip waitlists and get priority enrollment in accelerator programs.",
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-200",
    iconColor: "text-yellow-700"
  },
  {
    icon: Gift,
    title: "Partner Discounts",
    description: "Exclusive member rates on business services and software.",
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-200",
    iconColor: "text-yellow-700"
  },
  // Pink - Recognition & VIP (4 items)
  {
    icon: Star,
    title: "Celebrity Entrepreneur Events",
    description: "VIP access to exclusive events with high-profile entrepreneurs.",
    bgColor: "bg-pink-50",
    iconBg: "bg-pink-200",
    iconColor: "text-pink-700"
  },
  {
    icon: Camera,
    title: "Member Spotlights",
    description: "Get featured across social media and marketing as a success story.",
    bgColor: "bg-pink-50",
    iconBg: "bg-pink-200",
    iconColor: "text-pink-700"
  },
  {
    icon: Crown,
    title: "VIP Launch Support",
    description: "Red-carpet treatment for launches with PR and promotional coverage.",
    bgColor: "bg-pink-50",
    iconBg: "bg-pink-200",
    iconColor: "text-pink-700"
  },
  {
    icon: Trophy,
    title: "Achievement Recognition",
    description: "Special awards for member milestones and business successes.",
    bgColor: "bg-pink-50",
    iconBg: "bg-pink-200",
    iconColor: "text-pink-700"
  }
];

const ExclusiveMemberPrivileges = () => {
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
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Exclusive Member Privileges
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              When you join HWL, you gain access to an exclusive world of opportunities, recognition, and premium benefits designed for ambitious female entrepreneurs.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {privileges.map((privilege, index) => (
            <motion.div
              key={privilege.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover-scale ${privilege.bgColor}`}
            >
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full ${privilege.iconBg} flex items-center justify-center`}>
                  <privilege.icon className={`w-6 h-6 ${privilege.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {privilege.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {privilege.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveMemberPrivileges;