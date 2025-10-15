import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users } from "lucide-react";
import { toast } from "sonner";

export default function Community() {
  const handleJoinDiscussion = () => {
    toast.info("Member login feature coming soon!");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Join Your Local HWL Chapter
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Connect face-to-face with fellow women entrepreneurs in your city. Attend monthly meetings, build real friendships, and grow your business with local support.
          </p>
        </div>

        {/* Local Chapters Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Find Your Local Chapter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600 mb-4">
                HWL chapters meet monthly in cities across the country. Each meeting features networking, 
                guest speakers, peer support, and practical workshops. It's where online connections become 
                real friendships and accountability partnerships are formed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="search"
                  placeholder="Enter your city or zip code"
                  className="flex-grow"
                />
                <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                  Find My Chapter
                </Button>
              </div>
              <p className="text-sm text-neutral-500 mt-3">
                Don't see a chapter in your area? Interested in becoming an HWL Ambassador and starting one? 
                <span className="text-primary font-medium ml-1 cursor-pointer hover:underline">Learn more</span>
              </p>
            </CardContent>
          </Card>

          {/* Popular Chapters Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { city: "Los Angeles, CA", members: 245, nextMeeting: "Feb 15, 2025" },
              { city: "Atlanta, GA", members: 189, nextMeeting: "Feb 18, 2025" },
              { city: "Houston, TX", members: 167, nextMeeting: "Feb 20, 2025" },
              { city: "New York, NY", members: 312, nextMeeting: "Feb 22, 2025" },
              { city: "Chicago, IL", members: 198, nextMeeting: "Feb 25, 2025" },
              { city: "Miami, FL", members: 156, nextMeeting: "Feb 28, 2025" }
            ].map((chapter) => (
              <Card key={chapter.city} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{chapter.city}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-neutral-600 mb-2">
                    <Users size={16} className="mr-2 text-primary" />
                    <span>{chapter.members} members</span>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Next meeting: <span className="font-semibold">{chapter.nextMeeting}</span>
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                    Join Chapter
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Features */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
            Community Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Meetups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  In-person chapter meetings featuring guest speakers, networking, and workshops. 
                  Build genuine connections with entrepreneurs in your city.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Accountability Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Get matched with a peer at your business stage for regular check-ins, goal setting, 
                  and mutual support to keep you on track.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Online Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">
                  Access our members-only online platform to connect between meetings, share wins, 
                  ask questions, and get support 24/7.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Community in Action */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Community in Action</h2>
          <motion.img
            src="/lovable-uploads/f91aedcc-e16c-4cc7-a62e-7ba82f175dc1.png"
            alt="Homegirls Who Launch Community"
            className="w-full rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </div>

        {/* Success Stories Section */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-neutral-900">Member Success Stories</h2>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              View All Stories
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                id: 1,
                title: "From Side Hustle to Full-Time: My Journey with HWL",
                author: "Sarah Martinez",
                date: "1 week ago",
                excerpt: "Thanks to my accountability partner and our local Atlanta chapter, I finally took the leap and went full-time with my boutique. The support system made all the difference...",
                category: "Success Story"
              },
              {
                id: 2,
                title: "Secured $50K Funding After Joining the Cohort",
                author: "Jennifer Wu",
                date: "2 weeks ago",
                excerpt: "The 6-month cohort accelerator completely transformed my pitch and business plan. I applied to HWL's funding partners and secured $50K to scale my tech platform...",
                category: "Funding Win"
              },
              {
                id: 3,
                title: "Building My Network Through Monthly Meetups",
                author: "Alicia Thompson",
                date: "3 weeks ago",
                excerpt: "I was nervous about attending my first Houston chapter meeting, but the women were so welcoming! I've made genuine friendships and business connections that have been invaluable...",
                category: "Community"
              }
            ].map((story) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{story.title}</CardTitle>
                        <p className="text-xs text-neutral-500 mt-1">
                          By {story.author} · {story.date} · {story.category}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600">{story.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/5"
                      onClick={handleJoinDiscussion}
                    >
                      Read Full Story
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
