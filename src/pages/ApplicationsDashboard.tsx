
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { FileText, Calendar, DollarSign, Mail, Phone, Building } from "lucide-react";

interface FundingApplication {
  id: string;
  created_at: string;
  business_name: string;
  email: string;
  phone?: string;
  business_structure: string;
  years_in_operation: string;
  industry_type: string;
  number_of_employees?: string;
  monthly_revenue?: string;
  funding_amount: string;
  funding_use: string;
  previous_funding?: string;
  business_goals: string;
  current_challenges?: string;
  business_description: string;
  status: string;
}

export default function ApplicationsDashboard() {
  const [applications, setApplications] = useState<FundingApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const { toast } = useToast();

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('funding_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching applications:', error);
        toast({
          title: "Error Loading Applications",
          description: "Could not load funding applications.",
          variant: "destructive",
        });
      } else {
        setApplications(data || []);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error Loading Applications",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateApplicationStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('funding_applications')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) {
        console.error('Error updating status:', error);
        toast({
          title: "Error Updating Status",
          description: "Could not update application status.",
          variant: "destructive",
        });
      } else {
        setApplications(prev => 
          prev.map(app => 
            app.id === id ? { ...app, status: newStatus } : app
          )
        );
        toast({
          title: "Status Updated",
          description: "Application status has been updated successfully.",
        });
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  const filteredApplications = applications.filter(app => 
    filter === 'all' || app.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'under_review': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-neutral-600">Loading applications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Funding Applications Dashboard
          </h1>
          <p className="text-lg text-neutral-600">
            Manage and review all submitted funding applications
          </p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Filter by status:</span>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Applications</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="under_review">Under Review</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Badge variant="outline" className="text-lg px-4 py-2">
            {filteredApplications.length} Applications
          </Badge>
        </div>

        {filteredApplications.length === 0 ? (
          <Card className="p-8 text-center">
            <FileText className="mx-auto h-12 w-12 text-neutral-400 mb-4" />
            <h3 className="text-lg font-medium text-neutral-900 mb-2">No Applications Found</h3>
            <p className="text-neutral-600">
              {filter === 'all' 
                ? "No funding applications have been submitted yet." 
                : `No applications with status "${filter}" found.`
              }
            </p>
          </Card>
        ) : (
          <div className="grid gap-6">
            {filteredApplications.map((application) => (
              <motion.div
                key={application.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2 flex items-center gap-2">
                          <Building className="h-5 w-5" />
                          {application.business_name}
                        </CardTitle>
                        <p className="text-neutral-600 mb-2">{application.business_description}</p>
                        <div className="flex items-center gap-4 text-sm text-neutral-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(application.created_at).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            ${application.funding_amount}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(application.status)}>
                          {application.status.replace('_', ' ').toUpperCase()}
                        </Badge>
                        <Select
                          value={application.status}
                          onValueChange={(value) => updateApplicationStatus(application.id, value)}
                        >
                          <SelectTrigger className="w-40">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="under_review">Under Review</SelectItem>
                            <SelectItem value="approved">Approved</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                      <div>
                        <h4 className="font-medium text-neutral-700 mb-1">Contact Information</h4>
                        <p className="text-sm text-neutral-600 flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {application.email}
                        </p>
                        {application.phone && (
                          <p className="text-sm text-neutral-600 flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {application.phone}
                          </p>
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-700 mb-1">Business Details</h4>
                        <p className="text-sm text-neutral-600">Structure: {application.business_structure}</p>
                        <p className="text-sm text-neutral-600">Industry: {application.industry_type}</p>
                        <p className="text-sm text-neutral-600">Years: {application.years_in_operation}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-700 mb-1">Financial Info</h4>
                        {application.monthly_revenue && (
                          <p className="text-sm text-neutral-600">Monthly Revenue: {application.monthly_revenue}</p>
                        )}
                        {application.number_of_employees && (
                          <p className="text-sm text-neutral-600">Employees: {application.number_of_employees}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-neutral-700 mb-1">Funding Use</h4>
                        <p className="text-sm text-neutral-600">{application.funding_use}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-700 mb-1">Business Goals</h4>
                        <p className="text-sm text-neutral-600">{application.business_goals}</p>
                      </div>
                      {application.current_challenges && (
                        <div>
                          <h4 className="font-medium text-neutral-700 mb-1">Current Challenges</h4>
                          <p className="text-sm text-neutral-600">{application.current_challenges}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
