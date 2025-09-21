import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Sample resource data (removed ambassador item as it's moved to Launch Plans)
const resources = [
  {
    id: 1,
    title: "Business Plan Template",
    category: "Templates",
    description: "A comprehensive business plan template to help you outline your business strategy.",
    downloadUrl: "#",
    imageUrl: "/lovable-uploads/84308ea9-eb06-4de6-9066-42472783373f.png",
    featured: true,
    price: "$18.00",
  },
  {
    id: 2,
    title: "Marketing Strategy Guide",
    category: "Guides",
    description: "Learn how to create an effective marketing strategy for your new business.",
    downloadUrl: "#",
    imageUrl: "/lovable-uploads/de4156f1-b221-4545-a5de-6a7c62ebf1b0.png",
    featured: false,
    price: "$29.99",
  },
  {
    id: 3,
    title: "Financial Projections Spreadsheet",
    category: "Templates",
    description: "Track your financial projections with this easy-to-use spreadsheet template.",
    downloadUrl: "#",
    imageUrl: "/lovable-uploads/df74c050-72ab-4ca8-bf0f-7611c6a80140.png",
    featured: true,
    price: "$18.00",
  },
  {
    id: 4,
    title: "Social Media Content Calendar",
    category: "Templates",
    description: "Plan your social media content strategy with this organized calendar template.",
    downloadUrl: "#",
    imageUrl: "/lovable-uploads/87165aac-7f00-4ee1-89b6-f09014ddd012.png",
    featured: false,
    price: "$29.99",
  },
  {
    id: 5,
    title: "Legal Checklist for Startups",
    category: "Checklists",
    description: "Ensure your business has all the necessary legal foundations with this checklist.",
    downloadUrl: "#",
    imageUrl: "/lovable-uploads/a9699e21-9904-4794-9554-eaff3efc955a.png",
    featured: false,
    price: "$9.99",
  },
  {
    id: 6,
    title: "Pitch Deck Template",
    category: "Templates",
    description: "A professional pitch deck template to help you secure funding for your business.",
    downloadUrl: "#",
    imageUrl: "/lovable-uploads/7f734f75-5996-411c-bcdd-d48aa59f4de2.png",
    featured: true,
    price: "$18.00",
  },
  {
    id: 7,
    title: "Grant Guide",
    category: "Guides",
    description: "Complete guide to finding and applying for business grants and funding opportunities.",
    downloadUrl: "#",
    imageUrl: "/lovable-uploads/7491bc30-3824-497c-912d-05477db998a0.png",
    featured: true,
    price: "$49.99",
  },
  {
    id: 8,
    title: "Branding Guide",
    category: "Guides",
    description: "Build a powerful brand identity with this comprehensive branding strategy guide.",
    downloadUrl: "#",
    imageUrl: "/lovable-uploads/b9bb392e-f979-41ae-acc0-1a97f484fda2.png",
    featured: false,
    price: "$39.99",
  },
  {
    id: 9,
    title: "Digital Marketing Guide",
    category: "Guides",
    description: "Master digital marketing strategies to grow your business online and reach more customers.",
    downloadUrl: "#",
    imageUrl: "/lovable-uploads/0724c3cc-3800-4022-95a2-45df2414c2a1.png",
    featured: true,
    price: "$59.99",
  },
  {
    id: 10,
    title: "Business Tax Prep Guide",
    category: "Guides",
    description: "Navigate business taxes with confidence using this comprehensive tax planning guide.",
    downloadUrl: "#",
    imageUrl: "/lovable-uploads/2f3673c4-e9f1-4718-86a5-4e8995c8b022.png",
    featured: false,
    price: "$44.99",
  },
  {
    id: 11,
    title: "Credit Building Guide",
    category: "Guides",
    description: "Build and improve your business credit score with proven strategies and techniques.",
    downloadUrl: "#",
    imageUrl: "/lovable-uploads/c53b4f07-7901-4fd3-9016-2b05bd828506.png",
    featured: true,
    price: "$34.99",
  },
  {
    id: 12,
    title: "Media Training Guide For Celebrity Entrepreneurs",
    category: "Guides",
    description: "Master media interviews and public speaking as a celebrity entrepreneur.",
    downloadUrl: "#",
    imageUrl: "/lovable-uploads/15f29d9d-f951-4548-9ac0-37bd2c78eda4.png",
    featured: true,
    price: "$97.00",
  },
];

// Categories for filtering (removed Opportunities since ambassador moved)
const categories = ["All", "Templates", "Guides", "Checklists"];

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            Digital Resources Library
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
                  <div className="aspect-[4/3] bg-neutral-50 p-4 relative">
                    <img 
                      src={resource.imageUrl} 
                      alt={resource.title} 
                      className="w-full h-full object-contain cursor-pointer"
                      onClick={() => setSelectedImage(resource.imageUrl)}
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
                    {resource.price && (
                      <div className="mt-3 p-3 bg-primary/10 border border-primary/20 rounded-md">
                        <p className="text-lg font-bold text-primary">{resource.price}</p>
                      </div>
                    )}
                    <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded-md">
                      <p className="text-xs text-blue-700 font-medium">
                        ✓ Free for HWL Boss Builder and Inner Circle members
                      </p>
                    </div>
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

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Full size resource"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
