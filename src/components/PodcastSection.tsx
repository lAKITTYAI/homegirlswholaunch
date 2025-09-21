import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Youtube, Mic, Users } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PodcastGuestForm } from "@/components/PodcastGuestForm";

export const PodcastSection = () => {
  const [isGuestFormOpen, setIsGuestFormOpen] = useState(false);
  
  return (
    <>
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              "My goal is to show my Homegirls how to turn A new business, old business, slow business, or idea into a successful business that will create wealth that last generations" -Madam L.A Kitty
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Join our community and access exclusive content through our podcast and YouTube channel
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mic className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Homegirls Who Launch Podcast
                  </h3>
                </div>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Tune in to inspiring conversations with successful entrepreneurs, 
                  get expert advice, and hear real stories from women who turned 
                  their dreams into thriving businesses.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="gap-2 bg-primary hover:bg-primary/90">
                    <Play className="w-4 h-4" />
                    Listen to Podcast
                  </Button>
                  <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/5">
                    <Youtube className="w-4 h-4" />
                    Watch on YouTube
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="gap-2" 
                    onClick={() => setIsGuestFormOpen(true)}
                  >
                    <Users className="w-4 h-4" />
                    Be a Guest
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <motion.img
                  src="/lovable-uploads/316cf67d-f73c-4fc8-b3b0-c054aa99fde2.png"
                  alt="Homegirls Who Launch Podcast recording session with host getting makeup done"
                  className="w-full h-full object-cover"
                  initial={{
                    opacity: 0,
                    x: 20
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Dialog open={isGuestFormOpen} onOpenChange={setIsGuestFormOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              Want to be a Guest on Our Podcast?
            </DialogTitle>
          </DialogHeader>
          <PodcastGuestForm />
        </DialogContent>
      </Dialog>
    </>
  );
};