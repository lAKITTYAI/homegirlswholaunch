import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Banknote, BadgeDollarSign, FileSearch } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// Sample grants data - replace with real data later
const grants = [{
  id: 1,
  title: "Small Business Innovation Grant",
  amount: "$25,000",
  deadline: "May 15, 2025",
  description: "For innovative small businesses focused on technology and sustainability.",
  link: "#",
  image: "/lovable-uploads/abeb93d9-d013-4590-bac7-4b09da2ccee8.png"
}, {
  id: 2,
  title: "Women Entrepreneurs Fund",
  amount: "$15,000",
  deadline: "June 1, 2025",
  description: "Supporting women-owned businesses in their early stages.",
  link: "#",
  image: "/lovable-uploads/745ce114-a155-458b-94c3-39ed6710c6d9.png"
}, {
  id: 3,
  title: "Community Business Development Grant",
  amount: "$10,000",
  deadline: "July 30, 2025",
  description: "For businesses that contribute to local community development.",
  link: "#",
  image: "/lovable-uploads/76c729f3-0e2d-48c2-8865-6d42e33807ee.png"
}, {
  id: 4,
  title: "The Single Mom in Business Grant",
  amount: "$20,000",
  deadline: "August 15, 2025",
  description: "Supporting single mothers who are starting or growing their own businesses while balancing family responsibilities.",
  link: "#",
  image: "/lovable-uploads/1b524a66-7144-4bc8-b40d-0ad7a6a3d9b1.png"
}];
export default function FundingOptions() {
  const [activeTab, setActiveTab] = useState<'grants' | 'apply'>('grants');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    businessStructure: '',
    businessAge: '',
    industryType: '',
    monthlyRevenue: '',
    fundingAmount: '',
    fundingUse: '',
    businessGoals: '',
    currentChallenges: '',
    previousFunding: '',
    businessDescription: '',
    yearsInOperation: '',
    numberOfEmployees: ''
  });
  const {
    toast
  } = useToast();
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.from('funding_applications').insert({
        business_name: formData.businessName,
        email: formData.email,
        phone: formData.phone,
        business_structure: formData.businessStructure,
        years_in_operation: formData.yearsInOperation,
        industry_type: formData.industryType,
        number_of_employees: formData.numberOfEmployees,
        monthly_revenue: formData.monthlyRevenue,
        funding_amount: formData.fundingAmount,
        funding_use: formData.fundingUse,
        previous_funding: formData.previousFunding,
        business_goals: formData.businessGoals,
        current_challenges: formData.currentChallenges,
        business_description: formData.businessDescription
      });
      if (error) {
        console.error('Error submitting application:', error);
        toast({
          title: "Error Submitting Application",
          description: "There was a problem submitting your application. Please try again.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Application Submitted Successfully!",
          description: "We'll review your application and get back to you within 5 business days."
        });

        // Reset form
        setFormData({
          businessName: '',
          email: '',
          phone: '',
          businessStructure: '',
          businessAge: '',
          industryType: '',
          monthlyRevenue: '',
          fundingAmount: '',
          fundingUse: '',
          businessGoals: '',
          currentChallenges: '',
          previousFunding: '',
          businessDescription: '',
          yearsInOperation: '',
          numberOfEmployees: ''
        });
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error Submitting Application",
        description: "There was an unexpected error. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleApplyNow = () => {
    setActiveTab('apply');
  };
  return <div className="container mx-auto px-4 py-12">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }} className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Grants & Funding Options</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-6">
            HWL has partnered with leading grantors who are committed to funding new entrepreneurs. As an HWL member, you can apply for all our partnership grants through this platform. We're also expanding our funding options to include SBA loans, private lenders, and additional resources - coming soon.
          </p>
          <p className="text-base text-neutral-500 max-w-xl mx-auto">
            Explore available grants and funding opportunities to help launch and grow your business.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 mb-12">
          <div className="w-full max-w-2xl">
            <motion.img src="/lovable-uploads/ab2b2116-36e6-4d43-83e5-d3289f08bf9a.png" alt="Women Entrepreneurs Fund - Apply for funding here" className="rounded-lg shadow-lg w-full object-cover" initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5
          }} />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-neutral-800">Apply for all grants here.</h2>
            <p className="text-neutral-600 mb-6">
              We understand that every entrepreneur's financial path is unique. Our funding options are designed to support you at every stage of your business.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Button variant={activeTab === 'grants' ? 'default' : 'outline'} onClick={() => setActiveTab('grants')} className="gap-2">
            <BadgeDollarSign />
            Available Grants
          </Button>
          <Button variant={activeTab === 'apply' ? 'default' : 'outline'} onClick={() => setActiveTab('apply')} className="gap-2">
            <FileSearch />
            Apply for Funding
          </Button>
        </div>

        {activeTab === 'grants' ? <div className="grid gap-6">
            {grants.map(grant => <motion.div key={grant.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.4
        }}>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-2">{grant.title}</CardTitle>
                        <CardDescription className="text-lg text-primary">
                          Amount: {grant.amount}
                        </CardDescription>
                      </div>
                      <Button onClick={handleApplyNow}>
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 mb-4">{grant.description}</p>
                    
                    {/* Show image if available */}
                    {grant.image && <div className="mb-4">
                        <motion.img src={grant.image} alt={`Image for ${grant.title}`} className="w-full rounded-lg object-contain max-h-96 bg-gray-50" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  duration: 0.5
                }} />
                      </div>}
                    
                    <p className="text-sm text-neutral-500">
                      Application Deadline: {grant.deadline}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div> : <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Apply for Funding</CardTitle>
              <CardDescription>
                Submit your comprehensive business application for funding consideration. We'll review your submission and get back to you within 5 business days.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Business Information Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-neutral-800 border-b pb-2">Business Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="businessName">Business Name *</Label>
                      <Input id="businessName" placeholder="Enter your business name" value={formData.businessName} onChange={e => handleInputChange('businessName', e.target.value)} required />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="businessStructure">Business Structure *</Label>
                      <Select onValueChange={value => handleInputChange('businessStructure', value)} required>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select business structure" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border shadow-lg z-50">
                          <SelectItem value="llc" className="py-3 px-4">LLC (Limited Liability Company)</SelectItem>
                          <SelectItem value="corporation" className="py-3 px-4">Corporation</SelectItem>
                          <SelectItem value="partnership" className="py-3 px-4">Partnership</SelectItem>
                          <SelectItem value="sole-proprietorship" className="py-3 px-4">Sole Proprietorship</SelectItem>
                          <SelectItem value="s-corp" className="py-3 px-4">S-Corporation</SelectItem>
                          <SelectItem value="non-profit" className="py-3 px-4">Non-Profit Organization</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="yearsInOperation">Years in Operation *</Label>
                      <Select onValueChange={value => handleInputChange('yearsInOperation', value)} required>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select years in operation" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border shadow-lg z-50">
                          <SelectItem value="startup" className="py-3 px-4">Startup (0-1 year)</SelectItem>
                          <SelectItem value="1-2" className="py-3 px-4">1-2 years</SelectItem>
                          <SelectItem value="3-5" className="py-3 px-4">3-5 years</SelectItem>
                          <SelectItem value="5-10" className="py-3 px-4">5-10 years</SelectItem>
                          <SelectItem value="10+" className="py-3 px-4">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="industryType">Industry Type *</Label>
                      <Select onValueChange={value => handleInputChange('industryType', value)} required>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border shadow-lg z-50">
                          <SelectItem value="technology" className="py-3 px-4">Technology & Software</SelectItem>
                          <SelectItem value="retail" className="py-3 px-4">Retail & E-commerce</SelectItem>
                          <SelectItem value="food-beverage" className="py-3 px-4">Food & Beverage</SelectItem>
                          <SelectItem value="healthcare" className="py-3 px-4">Healthcare & Wellness</SelectItem>
                          <SelectItem value="professional-services" className="py-3 px-4">Professional Services</SelectItem>
                          <SelectItem value="manufacturing" className="py-3 px-4">Manufacturing</SelectItem>
                          <SelectItem value="real-estate" className="py-3 px-4">Real Estate</SelectItem>
                          <SelectItem value="education" className="py-3 px-4">Education & Training</SelectItem>
                          <SelectItem value="other" className="py-3 px-4">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="numberOfEmployees">Number of Employees</Label>
                      <Select onValueChange={value => handleInputChange('numberOfEmployees', value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select number of employees" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border shadow-lg z-50">
                          <SelectItem value="1" className="py-3 px-4">Just me (1 person)</SelectItem>
                          <SelectItem value="2-5" className="py-3 px-4">2-5 employees</SelectItem>
                          <SelectItem value="6-10" className="py-3 px-4">6-10 employees</SelectItem>
                          <SelectItem value="11-25" className="py-3 px-4">11-25 employees</SelectItem>
                          <SelectItem value="26-50" className="py-3 px-4">26-50 employees</SelectItem>
                          <SelectItem value="50+" className="py-3 px-4">50+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="monthlyRevenue">Monthly Revenue</Label>
                      <Select onValueChange={value => handleInputChange('monthlyRevenue', value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select monthly revenue range" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border shadow-lg z-50">
                          <SelectItem value="0-1k" className="py-3 px-4">$0 - $1,000</SelectItem>
                          <SelectItem value="1k-5k" className="py-3 px-4">$1,000 - $5,000</SelectItem>
                          <SelectItem value="5k-10k" className="py-3 px-4">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k" className="py-3 px-4">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k" className="py-3 px-4">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k+" className="py-3 px-4">$50,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-neutral-800 border-b pb-2">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="Enter your email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} required />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} />
                    </div>
                  </div>
                </div>

                {/* Funding Information Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-neutral-800 border-b pb-2">Funding Information</h3>
                  
                  <div className="space-y-3">
                    <Label htmlFor="fundingAmount">Funding Amount Needed *</Label>
                    <div className="relative">
                      <Banknote className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                      <Input id="fundingAmount" type="number" className="pl-10" placeholder="Enter amount" value={formData.fundingAmount} onChange={e => handleInputChange('fundingAmount', e.target.value)} required />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="fundingUse">How will you use the funds for your business? *</Label>
                    <Textarea id="fundingUse" className="min-h-[120px]" placeholder="Please describe in detail how you plan to use the funding for your business (e.g., inventory, marketing, equipment, staff, etc.)" value={formData.fundingUse} onChange={e => handleInputChange('fundingUse', e.target.value)} required />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="previousFunding">Previous Funding History</Label>
                    <Select onValueChange={value => handleInputChange('previousFunding', value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Have you received funding before?" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border shadow-lg z-50">
                        <SelectItem value="none" className="py-3 px-4">No previous funding</SelectItem>
                        <SelectItem value="personal" className="py-3 px-4">Personal savings/bootstrap</SelectItem>
                        <SelectItem value="friends-family" className="py-3 px-4">Friends & Family</SelectItem>
                        <SelectItem value="bank-loan" className="py-3 px-4">Bank Loan</SelectItem>
                        <SelectItem value="grant" className="py-3 px-4">Grant Funding</SelectItem>
                        <SelectItem value="investor" className="py-3 px-4">Angel/VC Investor</SelectItem>
                        <SelectItem value="other" className="py-3 px-4">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Business Goals & Challenges Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-neutral-800 border-b pb-2">Business Goals & Challenges</h3>
                  
                  <div className="space-y-3">
                    <Label htmlFor="businessGoals">What are your primary business goals? *</Label>
                    <Textarea id="businessGoals" className="min-h-[100px]" placeholder="Describe your short-term and long-term business goals (e.g., expand operations, hire staff, launch new products, etc.)" value={formData.businessGoals} onChange={e => handleInputChange('businessGoals', e.target.value)} required />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="currentChallenges">Current Business Challenges</Label>
                    <Textarea id="currentChallenges" className="min-h-[100px]" placeholder="What challenges is your business currently facing? (e.g., cash flow, marketing, competition, etc.)" value={formData.currentChallenges} onChange={e => handleInputChange('currentChallenges', e.target.value)} />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="businessDescription">Business Description *</Label>
                    <Textarea id="businessDescription" className="min-h-[120px]" placeholder="Tell us about your business - what products/services do you offer, who are your customers, what makes you unique?" value={formData.businessDescription} onChange={e => handleInputChange('businessDescription', e.target.value)} required />
                  </div>
                </div>

                <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>}
      </motion.div>
    </div>;
}