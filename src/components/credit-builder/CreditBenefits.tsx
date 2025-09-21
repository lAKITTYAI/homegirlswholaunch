import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, Building2, PiggyBank } from "lucide-react";

const creditBenefits = [
  {
    icon: TrendingUp,
    title: "Build Credit Fast",
    description: "Establish business credit in as little as 30-45 days with our integrated programs"
  },
  {
    icon: Shield,
    title: "Dun & Bradstreet Reporting",
    description: "All payments are reported directly to D&B to build your business credit profile"
  },
  {
    icon: Building2,
    title: "Separate Business Identity",
    description: "Keep your personal and business credit separate for better financial health"
  },
  {
    icon: PiggyBank,
    title: "Multiple Building Methods",
    description: "Choose from Net 30 programs or savings account options to fit your budget"
  }
];

export default function CreditBenefits() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {creditBenefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card className="text-center h-full">
            <CardContent className="pt-6">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-neutral-600">{benefit.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}