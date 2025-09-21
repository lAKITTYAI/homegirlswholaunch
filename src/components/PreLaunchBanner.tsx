import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Sparkles, Clock } from "lucide-react";
import { toast } from "sonner";

const PreLaunchBanner = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEarlyAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // TODO: Add Supabase integration for email collection
    setIsSubmitted(true);
    toast.success("You're on the early access list! 🎉");
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-r from-primary/10 via-purple-50 to-primary/5 border-b">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="outline" className="bg-white/80 border-primary/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Pre-Launch Special
            </Badge>
            <Badge variant="outline" className="bg-white/80 border-orange-300 text-orange-600">
              <Clock className="w-3 h-3 mr-1" />
              Limited Time
            </Badge>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Be the First to Launch with HomeGirls Who Launch!
          </h2>
          
          <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
            Join our exclusive early access list and be among the first 100 members to access our full program when we launch. Plus get special founding member perks!
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-primary/20 shadow-lg">
            <h3 className="font-semibold text-lg mb-4 text-primary">Founding Member Benefits:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 bg-primary/5 rounded-lg">
                <span className="font-medium">50% Off First Year</span>
                <p className="text-neutral-600 mt-1">Exclusive discount for early supporters</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <span className="font-medium">VIP Launch Party Invite</span>
                <p className="text-neutral-600 mt-1">Exclusive networking event</p>
              </div>
              <div className="p-3 bg-primary/5 rounded-lg">
                <span className="font-medium">Lifetime Access</span>
                <p className="text-neutral-600 mt-1">To select founding member digital resources</p>
              </div>
            </div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleEarlyAccess} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email for early access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/90 border-primary/30"
                required
              />
              <Button type="submit" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700">
                <Mail className="w-4 h-4 mr-2" />
                Join Waitlist
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                You're on the list! Check your email for updates.
              </div>
            </div>
          )}
          
          <p className="text-sm text-neutral-500 mt-4">
            No spam, just early access updates and exclusive offers. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PreLaunchBanner;