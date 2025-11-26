import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface BusinessListing {
  id: string;
  business_name: string;
  email: string;
  phone: string | null;
  category: string;
  city: string;
  state: string;
  listing_type: string;
  payment_status: string | null;
  amount_paid: number | null;
  created_at: string;
  description: string;
  website: string | null;
  owner_name: string | null;
  services: string | null;
}

const BusinessListingsDashboard = () => {
  const [listings, setListings] = useState<BusinessListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const { toast } = useToast();

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const { data, error } = await supabase
        .from('business_listings')
        .select('*')
        .eq('app_identifier', 'homegirls-who-launch')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setListings(data || []);
    } catch (error) {
      console.error('Error fetching listings:', error);
      toast({
        title: "Error",
        description: "Failed to load business listings",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updatePaymentStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('business_listings')
        .update({ payment_status: newStatus })
        .eq('id', id);

      if (error) throw error;

      setListings(listings.map(listing => 
        listing.id === id ? { ...listing, payment_status: newStatus } : listing
      ));

      toast({
        title: "Success",
        description: "Payment status updated"
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Error",
        description: "Failed to update payment status",
        variant: "destructive"
      });
    }
  };

  const filteredListings = listings.filter(listing => {
    if (filter === "all") return true;
    return listing.payment_status === filter || (filter === "pending" && !listing.payment_status);
  });

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case "paid": return "bg-green-500";
      case "pending": return "bg-yellow-500";
      case "failed": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Business Listing Signups</h1>
        <p className="text-muted-foreground">
          Total Signups: {listings.length}
        </p>
      </div>

      <div className="mb-6">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All ({listings.length})</SelectItem>
            <SelectItem value="pending">Pending ({listings.filter(l => !l.payment_status || l.payment_status === 'pending').length})</SelectItem>
            <SelectItem value="paid">Paid ({listings.filter(l => l.payment_status === 'paid').length})</SelectItem>
            <SelectItem value="failed">Failed ({listings.filter(l => l.payment_status === 'failed').length})</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6">
        {filteredListings.map((listing) => (
          <Card key={listing.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{listing.business_name}</CardTitle>
                  <CardDescription>
                    {listing.city}, {listing.state} • {listing.category}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="capitalize">
                    {listing.listing_type}
                  </Badge>
                  <Badge className={getStatusColor(listing.payment_status)}>
                    {listing.payment_status || 'pending'}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Email:</span> {listing.email}
                  </div>
                  <div>
                    <span className="font-semibold">Phone:</span> {listing.phone || 'N/A'}
                  </div>
                  {listing.owner_name && (
                    <div>
                      <span className="font-semibold">Owner:</span> {listing.owner_name}
                    </div>
                  )}
                  {listing.website && (
                    <div>
                      <span className="font-semibold">Website:</span>{' '}
                      <a href={listing.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {listing.website}
                      </a>
                    </div>
                  )}
                  <div>
                    <span className="font-semibold">Amount Paid:</span> ${listing.amount_paid || 0}
                  </div>
                  <div>
                    <span className="font-semibold">Submitted:</span> {new Date(listing.created_at).toLocaleDateString()}
                  </div>
                </div>

                <div>
                  <span className="font-semibold">Description:</span>
                  <p className="text-sm text-muted-foreground mt-1">{listing.description}</p>
                </div>

                {listing.services && (
                  <div>
                    <span className="font-semibold">Services/What We Offer:</span>
                    <p className="text-sm text-muted-foreground mt-1">{listing.services}</p>
                  </div>
                )}

                <div className="flex items-center gap-2 pt-4 border-t">
                  <span className="text-sm font-semibold">Payment Status:</span>
                  <Select 
                    value={listing.payment_status || "pending"} 
                    onValueChange={(value) => updatePaymentStatus(listing.id, value)}
                  >
                    <SelectTrigger className="w-[150px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredListings.length === 0 && (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              No business listings found for the selected filter.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BusinessListingsDashboard;
