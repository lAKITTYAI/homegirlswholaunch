import { motion } from "framer-motion";
import { Crown, Star, BookOpen, CreditCard, Users2, Sparkles, Trophy, DollarSign, Camera, Gift, Zap, Globe } from "lucide-react";

const privilegeCategories = [
  {
    category: "Community & Connection",
    color: "primary", // Purple theme
    bgColor: "bg-primary/5 border-primary/20",
    iconColor: "text-primary",
    features: [
      {
        icon: Users2,
        title: "VIP Member Network",
        description: "Connect with an exclusive community of ambitious female entrepreneurs and business owners."
      },
      {
        icon: Globe,
        title: "Local Chapter Access",
        description: "Join monthly meetups and networking events in cities nationwide."
      },
      {
        icon: Sparkles,
        title: "Mentorship Matching",
        description: "Get paired with successful entrepreneurs who align with your industry and goals."
      }
    ]
  },
  {
    category: "Business Growth & Funding",
    color: "gold", // Gold theme  
    bgColor: "bg-gold-light border-gold/30",
    iconColor: "text-gold-dark",
    features: [
      {
        icon: DollarSign,
        title: "Exclusive Funding Access",
        description: "Priority access to grants, investor connections, and funding opportunities available only to members."
      },
      {
        icon: CreditCard,
        title: "Business Credit Building",
        description: "Net-30 payment terms and specialized accounts to establish strong business credit profiles."
      },
      {
        icon: Zap,
        title: "Fast-Track Programs",
        description: "Skip the waitlist and get priority enrollment in our most popular business accelerator programs."
      },
      {
        icon: Gift,
        title: "Partner Discounts",
        description: "Exclusive member rates on business services, software, and professional resources from our partners."
      }
    ]
  },
  {
    category: "Recognition & Media",
    color: "pink", // Pink theme
    bgColor: "bg-pink-light border-pink/30", 
    iconColor: "text-pink-dark",
    features: [
      {
        icon: BookOpen,
        title: "HWL Magazine Features",
        description: "Opportunity to be featured on the cover and get a full spread in our exclusive HWL Magazine."
      },
      {
        icon: Star,
        title: "Celebrity Entrepreneur Events", 
        description: "VIP access to exclusive events and workshops with high-profile female entrepreneurs and celebrities."
      },
      {
        icon: Camera,
        title: "Member Spotlights",
        description: "Get featured across our social media channels and marketing materials as a success story."
      },
      {
        icon: Crown,
        title: "VIP Launch Support",
        description: "Red-carpet treatment for your business launches including PR support and promotional coverage."
      },
      {
        icon: Trophy,
        title: "Achievement Recognition",
        description: "Special awards and recognition for member milestones, achievements, and business successes."
      }
    ]
  }
];

const ExclusiveMemberPrivileges = () => {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Exclusive Member Privileges
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            When you join HWL, you're not just getting resources—you're gaining access to an exclusive world of opportunities, recognition, and premium benefits designed for ambitious female entrepreneurs.
          </p>
        </motion.div>

        {privilegeCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            className="mb-16 last:mb-0"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                {category.category}
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {category.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                  className={`p-6 rounded-2xl border-2 hover:shadow-lg transition-all duration-300 hover-scale ${category.bgColor}`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <feature.icon className={`w-6 h-6 ${category.iconColor}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-gold-light/20 to-pink-light/20 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Unlock Your Potential?
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              These exclusive privileges are just the beginning. As an HWL member, you'll have access to opportunities that can transform your business and elevate your entrepreneurial journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-sm text-neutral-600">
                <span className="font-semibold">Limited memberships available</span> • Premium benefits included
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusiveMemberPrivileges;