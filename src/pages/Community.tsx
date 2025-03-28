
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Search, Plus, Users } from "lucide-react";
import { toast } from "sonner";

// Sample forum data
const forumCategories = [
  { id: 1, name: "Introductions", description: "Introduce yourself to the community", postCount: 156, members: 245 },
  { id: 2, name: "Business Strategy", description: "Discuss business strategy and planning", postCount: 284, members: 312 },
  { id: 3, name: "Marketing & PR", description: "Share marketing ideas and get feedback", postCount: 427, members: 520 },
  { id: 4, name: "Funding & Finance", description: "Discuss funding options and financial management", postCount: 198, members: 276 },
  { id: 5, name: "Legal & Compliance", description: "Get advice on legal and compliance issues", postCount: 113, members: 189 },
];

const recentDiscussions = [
  { 
    id: 1, 
    title: "What marketing strategies worked for your launch?", 
    author: "Sarah Johnson",
    authorAvatar: "https://via.placeholder.com/40",
    date: "2 days ago",
    replyCount: 24,
    category: "Marketing & PR",
    excerpt: "I'm planning my product launch for next month and would love to hear what marketing strategies worked well for others..."
  },
  { 
    id: 2, 
    title: "Looking for feedback on my business plan", 
    author: "Michael Chen",
    authorAvatar: "https://via.placeholder.com/40",
    date: "3 days ago",
    replyCount: 18,
    category: "Business Strategy",
    excerpt: "I've attached my business plan draft and would appreciate any constructive feedback from the community..."
  },
  { 
    id: 3, 
    title: "How to approach angel investors?", 
    author: "Leila Washington",
    authorAvatar: "https://via.placeholder.com/40",
    date: "1 week ago",
    replyCount: 32,
    category: "Funding & Finance",
    excerpt: "I'm ready to approach angel investors for my tech startup. Does anyone have advice on how to make a good first impression?"
  }
];

export default function Community() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleNewTopic = () => {
    toast.info("New topic feature coming soon!");
  };

  const handleJoinDiscussion = () => {
    toast.info("Discussion feature coming soon!");
  };

  // Filter categories based on search
  const filteredCategories = forumCategories.filter(
    category => category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Community Forum
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Connect with fellow entrepreneurs, ask questions, share insights, and support each other.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
              <Input 
                type="search"
                placeholder="Search forum categories..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button onClick={handleNewTopic} className="bg-primary hover:bg-primary-dark">
              <Plus size={16} className="mr-1" /> New Topic
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-12">
            {filteredCategories.map((category) => (
              <Collapsible
                key={category.id}
                open={selectedCategory === category.id}
                onOpenChange={() => 
                  setSelectedCategory(selectedCategory === category.id ? null : category.id)
                }
              >
                <CollapsibleTrigger asChild>
                  <div className="bg-white border border-neutral-200 rounded-lg p-4 hover:shadow-sm transition-shadow cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg text-neutral-900">{category.name}</h3>
                        <p className="text-neutral-600">{category.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-neutral-500">{category.postCount} posts</p>
                        <div className="flex items-center justify-end mt-1 text-primary">
                          <Users size={16} className="mr-1" />
                          <span className="text-sm">{category.members}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="mt-2 pl-4 border-l-2 border-primary/20">
                    <Card>
                      <CardContent className="pt-4">
                        <p className="text-neutral-600">Join this category to view discussions and participate in the conversation.</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                          Join Category
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-neutral-900">Recent Discussions</h2>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                View All
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {recentDiscussions.map((discussion) => (
                <motion.div
                  key={discussion.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <img 
                            src={discussion.authorAvatar} 
                            alt={discussion.author} 
                            className="w-8 h-8 rounded-full mr-3" 
                          />
                          <div>
                            <CardTitle className="text-lg">{discussion.title}</CardTitle>
                            <p className="text-xs text-neutral-500">
                              Posted by {discussion.author} · {discussion.date} · In {discussion.category}
                            </p>
                          </div>
                        </div>
                        <div className="text-xs text-neutral-500 whitespace-nowrap">
                          {discussion.replyCount} replies
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600">{discussion.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full bg-primary hover:bg-primary-dark"
                        onClick={handleJoinDiscussion}
                      >
                        Join Discussion
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
