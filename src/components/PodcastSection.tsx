import { Button } from "@/components/ui/button";
import { Play, Youtube, Mic, UserPlus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PodcastGuestForm } from "@/components/PodcastGuestForm";

export const PodcastSection = () => {
  console.log("PodcastSection is rendering - simplified version");
  
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            "My goal is to show my Homegirls how to turn A new business, old business, slow business, or idea into a successful business that will create wealth that last generations" -Madam L.A Kitty
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Join our community and access exclusive content through our podcast and YouTube channel
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
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
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="gap-2 bg-primary hover:bg-primary/90">
                    <Play className="w-4 h-4" />
                    Listen to Podcast
                  </Button>
                  <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/5">
                    <Youtube className="w-4 h-4" />
                    Watch on YouTube
                  </Button>
                </div>
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary" className="gap-2 w-full sm:w-auto">
                        <UserPlus className="w-4 h-4" />
                        Be a Guest
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <PodcastGuestForm />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/hwl-luxury-lifestyle.jpeg" 
                alt="Homegirls Who Launch Podcast Host" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};