import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, ExternalLink, Star } from "lucide-react";

const BusinessDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock data - will be replaced with Supabase data
  const businesses = [
    {
      id: 1,
      name: "Bloom Beauty Bar",
      category: "Beauty & Wellness",
      description: "Luxury beauty services for the modern woman entrepreneur",
      location: "Atlanta, GA",
      featured: true,
      image: "/lovable-uploads/316cf67d-f73c-4fc8-b3b0-c054aa99fde2.png"
    },
    {
      id: 2,
      name: "Tech Savvy Solutions",
      category: "Technology",
      description: "IT consulting and digital transformation for small businesses",
      location: "Los Angeles, CA",
      featured: false,
      image: "/lovable-uploads/6326d9ea-3f1e-49ce-a6de-ab9b6907e4b6.png"
    }
  ];

  const categories = ["All", "Beauty & Wellness", "Technology", "Food & Beverage", "Retail", "Professional Services"];

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || business.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary/5 border-b border-border py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              HWL Business Roll Call
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover and connect with women-owned businesses in our community
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Your Business Listed
            </Button>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search businesses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
            <Star className="h-6 w-6 text-primary" />
            Featured Businesses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBusinesses.filter(b => b.featured).map(business => (
              <Card key={business.id} className="overflow-hidden hover:shadow-lg transition-shadow border-primary">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img src={business.image} alt={business.name} className="object-cover w-full h-full" />
                  <Badge className="absolute top-2 right-2 bg-primary">Featured</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {business.name}
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </CardTitle>
                  <CardDescription>{business.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{business.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {business.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Businesses */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">All Businesses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBusinesses.filter(b => !b.featured).map(business => (
              <Card key={business.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img src={business.image} alt={business.name} className="object-cover w-full h-full" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {business.name}
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </CardTitle>
                  <CardDescription>{business.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{business.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {business.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Join?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get your business in front of thousands of potential customers in our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Standard Listing - $25
            </Button>
            <Button size="lg" variant="outline">
              Featured Listing - $49
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessDirectory;
