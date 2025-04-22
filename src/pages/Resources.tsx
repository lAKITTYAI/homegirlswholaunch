
import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

// Sample resource data
const resources = [
  {
    id: 1,
    title: "Business Plan Template",
    category: "Templates",
    description: "A comprehensive business plan template to help you outline your business strategy.",
    downloadUrl: "#",
    imageUrl: "https://via.placeholder.com/300x200",
    featured: true,
  },
  {
    id: 2,
    title: "Marketing Strategy Guide",
    category: "Guides",
    description: "Learn how to create an effective marketing strategy for your new business.",
    downloadUrl: "#",
    imageUrl: "https://via.placeholder.com/300x200",
    featured: false,
  },
  {
    id: 3,
    title: "Financial Projections Spreadsheet",
    category: "Templates",
    description: "Track your financial projections with this easy-to-use spreadsheet template.",
    downloadUrl: "#",
    imageUrl: "lovable-uploads/7d82b6d9-3e36-4297-b7b6-e340cc37eeae.png",
    featured: true,
  },
  {
    id: 4,
    title: "Social Media Content Calendar",
    category: "Templates",
    description: "Plan your social media content strategy with this organized calendar template.",
    downloadUrl: "#",
    imageUrl: "https://via.placeholder.com/300x200",
    featured: false,
  },
  {
    id: 5,
    title: "Legal Checklist for Startups",
    category: "Checklists",
    description: "Ensure your business has all the necessary legal foundations with this checklist.",
    downloadUrl: "#",
    imageUrl: "https://via.placeholder.com/300x200",
    featured: false,
  },
  {
    id: 6,
    title: "Pitch Deck Template",
    category: "Templates",
    description: "A professional pitch deck template to help you secure funding for your business.",
    downloadUrl: "#",
    imageUrl: "https://via.placeholder.com/300x200",
    featured: true,
  },
];

// Categories for filtering
const categories = ["All", "Templates", "Guides", "Checklists"];

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter resources based on search query and active category
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Resource Library
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Access tools, templates, and guides to help you successfully launch and grow your business.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
              <Input 
                type="search"
                placeholder="Search resources..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={activeCategory === category ? "bg-primary" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {filteredResources.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={resource.imageUrl} 
                      alt={resource.title} 
                      className="w-full h-full object-cover"
                    />
                    {resource.featured && (
                      <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <CardHeader>
                    <span className="text-xs text-primary-dark font-medium uppercase tracking-wide mb-1">
                      {resource.category}
                    </span>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-neutral-600">{resource.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary hover:bg-primary-dark">
                      Download Resource
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-600">No resources found matching your search criteria.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
