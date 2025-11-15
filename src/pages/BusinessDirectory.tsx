import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, ExternalLink, Star, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { GetListedForm } from "@/components/GetListedForm";

const BusinessDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [businesses, setBusinesses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showGetListed, setShowGetListed] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    fetchBusinesses();
  }, []);

  const fetchBusinesses = async () => {
    try {
      const { data, error } = await supabase
        .from("business_listings")
        .select("*")
        .eq("is_active", true)
        .eq("payment_status", "completed")
        .order("listing_type", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) throw error;

      setBusinesses(data || []);
      
      // Extract unique categories and cities
      const uniqueCategories = [...new Set(data?.map(b => b.category) || [])];
      const uniqueCities = [...new Set(data?.map(b => b.city) || [])];
      setCategories(uniqueCategories);
      setCities(uniqueCities);
    } catch (error) {
      console.error("Error fetching businesses:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.business_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || business.category === selectedCategory;
    const matchesCity = selectedCity === "all" || business.city === selectedCity;
    return matchesSearch && matchesCategory && matchesCity;
  });

  return (
    <div className="min-h-screen bg-background">
      {showGetListed && <GetListedForm onClose={() => setShowGetListed(false)} />}
      
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
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => setShowGetListed(true)}
            >
              <Plus className="mr-2 h-5 w-5" />
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
                className="px-4 py-2 rounded-md border border-input bg-background text-foreground z-10"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2 rounded-md border border-input bg-background text-foreground z-10"
              >
                <option value="all">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      {filteredBusinesses.filter(b => b.listing_type === "featured").length > 0 && (
        <section className="py-12 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Star className="h-6 w-6 text-primary" />
              Featured Businesses
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBusinesses.filter(b => b.listing_type === "featured").map(business => (
                <Card key={business.id} className="overflow-hidden hover:shadow-lg transition-shadow border-primary">
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    {business.cover_image_url && (
                      <img src={business.cover_image_url} alt={business.business_name} className="object-cover w-full h-full" />
                    )}
                    <Badge className="absolute top-2 right-2 bg-primary">Featured</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {business.business_name}
                      {business.website && (
                        <a href={business.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </a>
                      )}
                    </CardTitle>
                    <CardDescription>{business.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{business.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {business.city}, {business.state}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Businesses */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">All Businesses</h2>
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading businesses...</p>
            </div>
          ) : filteredBusinesses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No businesses found. Be the first to list your business!</p>
              <Button onClick={() => setShowGetListed(true)} className="mt-4">
                Get Listed
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBusinesses.map(business => (
                <Card key={business.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    {business.cover_image_url && (
                      <img src={business.cover_image_url} alt={business.business_name} className="object-cover w-full h-full" />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {business.business_name}
                      {business.website && (
                        <a href={business.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </a>
                      )}
                    </CardTitle>
                    <CardDescription>{business.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{business.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {business.city}, {business.state}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Join?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get your business in front of thousands of potential customers in our community
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => setShowGetListed(true)}
          >
            <Plus className="mr-2 h-5 w-5" />
            Get Your Business Listed
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BusinessDirectory;
