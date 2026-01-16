import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { CreditCard, Building2, FileText, Mail, LogOut } from "lucide-react";

interface EarlyAccessSignup {
  id: string;
  email: string;
  status: string;
  created_at: string;
  approved_at: string | null;
}

interface Subscription {
  id: string;
  user_id: string;
  plan_type: string;
  status: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  created_at: string;
}

interface BusinessListing {
  id: string;
  business_name: string;
  email: string;
  category: string;
  payment_status: string;
  created_at: string;
}

interface FundingApplication {
  id: string;
  business_name: string;
  email: string;
  funding_amount: string;
  status: string;
  created_at: string;
}

const AdminDashboard = () => {
  const [earlyAccessSignups, setEarlyAccessSignups] = useState<EarlyAccessSignup[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [businessListings, setBusinessListings] = useState<BusinessListing[]>([]);
  const [fundingApplications, setFundingApplications] = useState<FundingApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/admin/login");
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [signupsRes, subsRes, listingsRes, fundingRes] = await Promise.all([
        supabase.from("early_access_signups").select("*").order("created_at", { ascending: false }),
        supabase.from("subscriptions").select("*").order("created_at", { ascending: false }),
        supabase.from("business_listings").select("*").order("created_at", { ascending: false }),
        supabase.from("funding_applications").select("*").order("created_at", { ascending: false }),
      ]);

      if (signupsRes.data) setEarlyAccessSignups(signupsRes.data);
      if (subsRes.data) setSubscriptions(subsRes.data);
      if (listingsRes.data) setBusinessListings(listingsRes.data);
      if (fundingRes.data) setFundingApplications(fundingRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      active: "bg-green-500",
      pending: "bg-yellow-500",
      paid: "bg-green-500",
      approved: "bg-green-500",
      rejected: "bg-red-500",
      cancelled: "bg-gray-500",
    };
    return <Badge className={`${colors[status] || "bg-gray-500"} text-white`}>{status}</Badge>;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const activeSubscribers = subscriptions.filter(s => s.status === "active").length;
  const paidListings = businessListings.filter(l => l.payment_status === "paid").length;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Overview of all signups, subscribers, and applications</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Early Access Signups</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{earlyAccessSignups.length}</div>
              <p className="text-xs text-muted-foreground">Total signups</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeSubscribers}</div>
              <p className="text-xs text-muted-foreground">Premium members</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Business Listings</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{businessListings.length}</div>
              <p className="text-xs text-muted-foreground">{paidListings} paid</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Funding Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{fundingApplications.length}</div>
              <p className="text-xs text-muted-foreground">Total applications</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for Different Data */}
        <Tabs defaultValue="signups" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="signups">Early Access ({earlyAccessSignups.length})</TabsTrigger>
            <TabsTrigger value="subscribers">Subscribers ({subscriptions.length})</TabsTrigger>
            <TabsTrigger value="listings">Listings ({businessListings.length})</TabsTrigger>
            <TabsTrigger value="funding">Funding ({fundingApplications.length})</TabsTrigger>
          </TabsList>

          {/* Early Access Signups Tab */}
          <TabsContent value="signups">
            <Card>
              <CardHeader>
                <CardTitle>Early Access Signups</CardTitle>
                <CardDescription>All users who signed up for early access</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Signed Up</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {earlyAccessSignups.map((signup) => (
                      <TableRow key={signup.id}>
                        <TableCell className="font-medium">{signup.email}</TableCell>
                        <TableCell>{getStatusBadge(signup.status)}</TableCell>
                        <TableCell>{formatDate(signup.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subscribers Tab */}
          <TabsContent value="subscribers">
            <Card>
              <CardHeader>
                <CardTitle>Subscribers</CardTitle>
                <CardDescription>All premium subscription members</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User ID</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Stripe Customer</TableHead>
                      <TableHead>Subscribed</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscriptions.map((sub) => (
                      <TableRow key={sub.id}>
                        <TableCell className="font-mono text-xs">{sub.user_id.slice(0, 8)}...</TableCell>
                        <TableCell className="capitalize">{sub.plan_type}</TableCell>
                        <TableCell>{getStatusBadge(sub.status)}</TableCell>
                        <TableCell className="font-mono text-xs">
                          {sub.stripe_customer_id || "N/A"}
                        </TableCell>
                        <TableCell>{formatDate(sub.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Business Listings Tab */}
          <TabsContent value="listings">
            <Card>
              <CardHeader>
                <CardTitle>Business Listings</CardTitle>
                <CardDescription>All business directory submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Business Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Payment Status</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {businessListings.map((listing) => (
                      <TableRow key={listing.id}>
                        <TableCell className="font-medium">{listing.business_name}</TableCell>
                        <TableCell>{listing.email}</TableCell>
                        <TableCell>{listing.category}</TableCell>
                        <TableCell>{getStatusBadge(listing.payment_status)}</TableCell>
                        <TableCell>{formatDate(listing.created_at)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Funding Applications Tab */}
          <TabsContent value="funding">
            <Card>
              <CardHeader>
                <CardTitle>Funding Applications</CardTitle>
                <CardDescription>All funding program applications</CardDescription>
              </CardHeader>
              <CardContent>
                {fundingApplications.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">No funding applications yet</p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Business Name</TableHead>
                        <TableHead>Contact Email</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Applied</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {fundingApplications.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell className="font-medium">{app.business_name}</TableCell>
                          <TableCell>{app.email}</TableCell>
                          <TableCell>${app.funding_amount?.toLocaleString()}</TableCell>
                          <TableCell>{getStatusBadge(app.status)}</TableCell>
                          <TableCell>{formatDate(app.created_at)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
