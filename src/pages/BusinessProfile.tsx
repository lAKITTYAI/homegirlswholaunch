import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Globe,
  Instagram,
  Star,
  CheckCircle2,
  Clock,
  ArrowLeft,
  Facebook,
  Linkedin,
} from "lucide-react";

const BusinessProfile = () => {
  const { id } = useParams();
  const [business, setBusiness] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBusiness();
  }, [id]);

  const fetchBusiness = async () => {
    try {
      const { data, error } = await supabase
        .from("business_listings")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      setBusiness(data);
    } catch (error) {
      console.error("Error fetching business:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-lavender-50 flex items-center justify-center">
        <p className="text-lg text-lavender-700">Loading...</p>
      </div>
    );
  }

  if (!business) {
    return (
      <div className="min-h-screen bg-lavender-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-lavender-700 mb-4">Business not found</p>
          <Link to="/business-directory">
            <Button variant="outline">Back to Directory</Button>
          </Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "fill-gold-500 text-gold-500" : "text-lavender-200"
        }`}
      />
    ));
  };

  const images = business.gallery_images || [business.cover_image_url, business.logo_url].filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-b from-lavender-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-lavender-200">
        <div className="container mx-auto px-4 py-6">
          <Link to="/business-directory">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Directory
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image Gallery */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-lavender-100">
            {images[0] && (
              <img
                src={images[0]}
                alt={business.business_name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images.slice(1, 4).map((img: string, i: number) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-lavender-100">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Rating */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-4xl md:text-5xl font-serif text-luxury-charcoal">
                  {business.business_name}
                </h1>
                {business.verified && (
                  <Badge className="bg-gold-500 text-white border-0 px-3 py-1">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    HWL Verified
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1">
                  {renderStars(Math.floor(business.rating || 5))}
                  <span className="ml-2 text-lg font-medium text-lavender-800">
                    {business.rating || 5.0}
                  </span>
                  <span className="text-lavender-500">
                    ({business.review_count || 0} reviews)
                  </span>
                </div>
                <span className="text-lavender-600">•</span>
                <Badge variant="outline" className="border-lavender-300 text-lavender-700">
                  {business.category}
                </Badge>
                <span className="text-lavender-600">•</span>
                <span className="text-lavender-700 font-medium">
                  {business.price_range || "$$"}
                </span>
              </div>
            </div>

            {/* About Section */}
            <Card className="p-8 bg-white border-lavender-200 shadow-sm">
              <h2 className="text-2xl font-serif text-luxury-charcoal mb-4">
                About {business.business_name}
              </h2>
              <p className="text-lavender-700 text-lg leading-relaxed">
                {business.description}
              </p>
              {business.owner_name && (
                <div className="mt-6 pt-6 border-t border-lavender-100">
                  <p className="text-sm text-lavender-500 mb-1">Owner</p>
                  <p className="text-lg font-medium text-lavender-900">
                    {business.owner_name}
                  </p>
                </div>
              )}
            </Card>

            {/* Services Section */}
            {business.services && (
              <Card className="p-8 bg-white border-lavender-200 shadow-sm">
                <h2 className="text-2xl font-serif text-luxury-charcoal mb-4">
                  What We Offer
                </h2>
                <p className="text-lavender-700 text-lg leading-relaxed whitespace-pre-line">
                  {business.services}
                </p>
              </Card>
            )}

            {/* Hours Section */}
            {business.hours && (
              <Card className="p-8 bg-white border-lavender-200 shadow-sm">
                <h2 className="text-2xl font-serif text-luxury-charcoal mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gold-500" />
                  Hours
                </h2>
                <div className="space-y-2">
                  {Object.entries(business.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-lavender-700">
                      <span className="capitalize font-medium">{day}</span>
                      <span>{hours as string}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-lavender-50 to-white border-lavender-200 sticky top-24">
              <h3 className="text-xl font-serif text-luxury-charcoal mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-lavender-900">{business.city}, {business.state}</p>
                    {business.full_address && (
                      <p className="text-sm text-lavender-600 mt-1">
                        {business.full_address}
                      </p>
                    )}
                  </div>
                </div>

                {business.phone && (
                  <a
                    href={`tel:${business.phone}`}
                    className="flex items-center gap-3 text-lavender-700 hover:text-gold-600 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-gold-500 flex-shrink-0" />
                    <span>{business.phone}</span>
                  </a>
                )}

                {business.website && (
                  <a
                    href={business.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lavender-700 hover:text-gold-600 transition-colors"
                  >
                    <Globe className="h-5 w-5 text-gold-500 flex-shrink-0" />
                    <span className="truncate">Visit Website</span>
                  </a>
                )}

                {business.email && (
                  <a
                    href={`mailto:${business.email}`}
                    className="flex items-center gap-3 text-lavender-700 hover:text-gold-600 transition-colors"
                  >
                    <span className="text-sm">📧</span>
                    <span className="truncate">{business.email}</span>
                  </a>
                )}
              </div>

              {/* Social Media */}
              {(business.instagram || business.facebook || business.linkedin) && (
                <div className="mt-6 pt-6 border-t border-lavender-100">
                  <h4 className="text-sm font-medium text-lavender-900 mb-3">Follow Us</h4>
                  <div className="flex gap-3">
                    {business.instagram && (
                      <a
                        href={`https://instagram.com/${business.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-lavender-100 text-lavender-700 hover:bg-gold-500 hover:text-white transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    )}
                    {business.facebook && (
                      <a
                        href={business.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-lavender-100 text-lavender-700 hover:bg-gold-500 hover:text-white transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    )}
                    {business.linkedin && (
                      <a
                        href={business.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-lavender-100 text-lavender-700 hover:bg-gold-500 hover:text-white transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
