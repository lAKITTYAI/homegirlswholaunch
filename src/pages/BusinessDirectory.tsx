import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Plus, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { GetListedForm } from "@/components/GetListedForm";
import { Link } from "react-router-dom";
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
      const {
        data,
        error
      } = await supabase.from("business_listings").select("*").eq("is_active", true).eq("payment_status", "completed").order("listing_type", {
        ascending: false
      }).order("created_at", {
        ascending: false
      });
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
    const matchesSearch = business.business_name.toLowerCase().includes(searchQuery.toLowerCase()) || business.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || business.category === selectedCategory;
    const matchesCity = selectedCity === "all" || business.city === selectedCity;
    return matchesSearch && matchesCategory && matchesCity;
  });
  const renderStars = (rating: number) => {
    return Array.from({
      length: 5
    }).map((_, i) => <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-gold-500 text-gold-500" : "text-lavender-200"}`} />);
  };
  return <div className="min-h-screen bg-gradient-to-b from-lavender-50 to-white">
      {showGetListed && <GetListedForm onClose={() => setShowGetListed(false)} />}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-lavender-100 via-white to-gold-50 border-b border-lavender-200 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-body text-luxury-charcoal mb-6 tracking-wide leading-tight">
              HWL Black Business Roll Call
            </h1>
            <p className="text-xl md:text-2xl text-lavender-700 mb-8 leading-relaxed">BE SEEN. BE SUPPORTED. BE CELEBRATED.</p>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg" onClick={() => setShowGetListed(true)}>
              <Plus className="mr-2 h-5 w-5" />
              List Your Business
            </Button>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white border-b border-lavender-200 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lavender-400 h-5 w-5" />
                <Input placeholder="Search businesses..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-12 h-12 bg-lavender-50 border-lavender-200 text-lg focus:border-gold-500" />
              </div>
              <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="px-6 py-3 h-12 rounded-md border border-lavender-200 bg-card text-luxury-charcoal font-medium relative z-50 shadow-sm hover:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors">
                <option value="all">All Categories</option>
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
              <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)} className="px-6 py-3 h-12 rounded-md border border-lavender-200 bg-card text-luxury-charcoal font-medium relative z-50 shadow-sm hover:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-colors">
                <option value="all">All Cities</option>
                {cities.map(city => <option key={city} value={city}>{city}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      {filteredBusinesses.filter(b => b.listing_type === "featured").length > 0 && <section className="py-16 bg-gradient-to-br from-gold-50 to-lavender-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-4xl font-serif text-luxury-charcoal mb-2">
                    Featured Businesses
                  </h2>
                  <p className="text-lavender-600">Curated luxury experiences... We cant wait to feature you next.            </p>
                </div>
                <CheckCircle2 className="h-10 w-10 text-gold-500" />
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBusinesses.filter(b => b.listing_type === "featured").map(business => <Link key={business.id} to={`/business/${business.id}`}>
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gold-200 hover:border-gold-400 group bg-white">
                      <div className="aspect-[4/3] relative overflow-hidden bg-lavender-100">
                        {business.cover_image_url && <img src={business.cover_image_url} alt={business.business_name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />}
                        <Badge className="absolute top-4 right-4 bg-gold-500 text-luxury-charcoal border-0 px-3 py-1 font-semibold">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          HWL Verified
                        </Badge>
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-2xl font-serif text-luxury-charcoal group-hover:text-gold-600 transition-colors">
                            {business.business_name}
                          </CardTitle>
                        </div>
                        <div className="flex items-center gap-1 mt-2">
                          {renderStars(Math.floor(business.rating || 5))}
                          <span className="ml-2 text-sm font-medium text-lavender-700">
                            {business.rating || 5.0}
                          </span>
                          <span className="text-sm text-lavender-500 ml-1">
                            ({business.review_count || 0})
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="outline" className="border-lavender-300 text-lavender-700 mb-3">
                          {business.category}
                        </Badge>
                        <p className="text-lavender-600 mb-4 line-clamp-2 leading-relaxed">
                          {business.description}
                        </p>
                        <div className="flex items-center justify-between text-lavender-500">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{business.city}, {business.state}</span>
                          </div>
                          <span className="text-gold-600 font-semibold">
                            {business.price_range || "$$$"}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>)}
              </div>
            </div>
          </div>
        </section>}

      {/* All Businesses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif text-luxury-charcoal mb-12">
              {selectedCity !== "all" || selectedCategory !== "all" || searchQuery ? "Search Results" : "All Businesses"}
            </h2>
            
            {loading ? <div className="text-center py-20">
                <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-lavender-200 border-t-gold-500"></div>
                <p className="text-lavender-600 mt-4">Loading businesses...</p>
              </div> : filteredBusinesses.length === 0 ? <div className="text-center py-20 bg-lavender-50 rounded-2xl">
                <p className="text-xl text-lavender-600 mb-6">No businesses found matching your criteria</p>
                <Button onClick={() => setShowGetListed(true)} className="bg-gold-500 hover:bg-gold-600 text-luxury-charcoal">
                  Be the First to List
                </Button>
              </div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBusinesses.map(business => <Link key={business.id} to={`/business/${business.id}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-lavender-200 hover:border-lavender-400 group bg-white h-full">
                      <div className="aspect-[4/3] relative overflow-hidden bg-lavender-100">
                        {business.cover_image_url && <img src={business.cover_image_url} alt={business.business_name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />}
                        {business.verified && <Badge className="absolute top-4 right-4 bg-gold-500/90 text-luxury-charcoal border-0">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>}
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl font-serif text-luxury-charcoal group-hover:text-lavender-700 transition-colors line-clamp-1">
                          {business.business_name}
                        </CardTitle>
                        <div className="flex items-center gap-1 mt-2">
                          {renderStars(Math.floor(business.rating || 5))}
                          <span className="ml-2 text-sm font-medium text-lavender-700">
                            {business.rating || 5.0}
                          </span>
                          <span className="text-sm text-lavender-500 ml-1">
                            ({business.review_count || 0})
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="outline" className="border-lavender-300 text-lavender-700 mb-3">
                          {business.category}
                        </Badge>
                        <p className="text-lavender-600 mb-4 line-clamp-2 leading-relaxed">
                          {business.description}
                        </p>
                        <div className="flex items-center justify-between text-lavender-500">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{business.city}, {business.state}</span>
                          </div>
                          <span className="text-gold-600 font-semibold">
                            {business.price_range || "$$"}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>)}
              </div>}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-lavender-100 via-gold-50 to-lavender-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal mb-6">
            Join the Roll Call
          </h2>
          <p className="text-xl text-lavender-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            Elevate your business with premium placement in our curated directory of Black excellence
          </p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-7 text-lg" onClick={() => setShowGetListed(true)}>
            <Plus className="mr-2 h-6 w-6" />
            List Your Business Today
          </Button>
        </div>
      </section>
    </div>;
};
export default BusinessDirectory;