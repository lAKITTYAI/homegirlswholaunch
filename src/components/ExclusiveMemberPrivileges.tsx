import { motion } from "framer-motion";
import { Crown, Star, BookOpen, CreditCard, Users2, Sparkles, Trophy, DollarSign, Camera, Gift, Zap, Globe } from "lucide-react";

const privileges = [
  // Purple - Community & Connection (4 items)
  {
    icon: Users2,
    title: "Live Community Feed",
    description: "Recent member wins (new contracts, launches, etc.), upcoming events preview, real-time community activity, and member business launches.",
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
    title: "Exclusive HWL Grant Access",
    description: "Access to HWL's exclusive monthly grant giveaway program for members only. HWL founders and community members contribute to a monthly grant fund, with a new member selected each month to receive funding support for their business ventures.",
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
    description: "First access to grant funds & funding partners with a 78% approval rate. Over $2.3M+ in funding secured for HWL members through our exclusive network of lenders, investors & banks.",
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-200",
    iconColor: "text-yellow-700"
  },
  {
    icon: Gift,
    title: "Industry Partnerships",
    description: "Major brand collaboration logos, corporate sponsor showcases, exclusive partner benefits, and professional service discounts.",
    bgColor: "bg-yellow-50",
    iconBg: "bg-yellow-200",
    iconColor: "text-yellow-700"
  },
  // Pink - Recognition & VIP (4 items)
  {
    icon: Star,
    title: "Celebrity Entrepreneur Events",
    description: "VIP access to exclusive events with high-profile entrepreneurs. Network with industry titans in intimate settings and gain insider knowledge from successful business leaders. Enjoy premium experiences including backstage access, private meet-and-greets, and front-row seating at signature HWL events.",
    bgColor: "bg-pink-50",
    iconBg: "bg-pink-200",
    iconColor: "text-pink-700"
  },
  {
    icon: Camera,
    title: "Member Spotlights",
    description: "Get featured in press & media plus your success story across social media. Spotlight winners receive a dedicated page in HWL Magazine and an exclusive feature spot on our HWL podcast to share their entrepreneurial journey with our community.",
    bgColor: "bg-pink-50",
    iconBg: "bg-pink-200",
    iconColor: "text-pink-700"
  },
  {
    icon: Crown,
    title: "VIP Launch Support",
    description: "Receive the ultimate red-carpet launch experience with dedicated PR support, social media amplification across HWL's platforms, press release distribution to major outlets, exclusive launch event planning assistance, and personalized marketing strategy consultation to ensure your business debut makes maximum impact.",
    bgColor: "bg-pink-50",
    iconBg: "bg-pink-200",
    iconColor: "text-pink-700"
  },
  {
    icon: Trophy,
    title: "Achievement Recognition",
    description: "Receive prestigious milestone awards recognizing your entrepreneurial journey, plus exclusive invitations to the HWL Business Royalty Awards - an elegant black-tie gala where exceptional members are honored for their outstanding business achievements.",
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