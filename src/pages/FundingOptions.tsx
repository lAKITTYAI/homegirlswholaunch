import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Banknote, BadgeDollarSign, FileSearch } from "lucide-react";

// Sample grants data - replace with real data later
const grants = [
  {
    id: 1,
    title: "Small Business Innovation Grant",
    amount: "$25,000",
    deadline: "May 15, 2025",
    description: "For innovative small businesses focused on technology and sustainability.",
    link: "#"
  },
  {
    id: 2,
    title: "Women Entrepreneurs Fund",
    amount: "$15,000",
    deadline: "June 1, 2025",
    description: "Supporting women-owned businesses in their early stages.",
    link: "#"
  },
  {
    id: 3,
    title: "Community Business Development Grant",
    amount: "$10,000",
    deadline: "July 30, 2025",
    description: "For businesses that contribute to local community development.",
    link: "#"
  }
];

export default function FundingOptions() {
  const [activeTab, setActiveTab] = useState<'grants' | 'apply'>('grants');

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Funding Options
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore available grants and funding opportunities to help launch and grow your business.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <motion.img 
              src="/lovable-uploads/ffa347f0-8c3f-4f05-aff6-a242fcb715a4.png" 
              alt="Successful businesswoman with money" 
              className="rounded-lg shadow-lg w-full object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-neutral-800">
              Let's Get You Funded!
            </h2>
            <p className="text-neutral-600 mb-6">
              We understand that every entrepreneur's financial path is unique. Our funding options are designed to support you at every stage of your business.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={activeTab === 'grants' ? 'default' : 'outline'}
            onClick={() => setActiveTab('grants')}
            className="gap-2"
          >
            <BadgeDollarSign />
            Available Grants
          </Button>
          <Button
            variant={activeTab === 'apply' ? 'default' : 'outline'}
            onClick={() => setActiveTab('apply')}
            className="gap-2"
          >
            <FileSearch />
            Apply for Funding
          </Button>
        </div>

        {activeTab === 'grants' ? (
          <div className="grid gap-6">
            {grants.map((grant) => (
              <motion.div
                key={grant.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-2">{grant.title}</CardTitle>
                        <CardDescription className="text-lg text-primary">
                          Amount: {grant.amount}
                        </CardDescription>
                      </div>
                      <Button asChild>
                        <a href={grant.link} target="_blank" rel="noopener noreferrer">
                          Apply Now
                        </a>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 mb-4">{grant.description}</p>
                    <p className="text-sm text-neutral-500">
                      Application Deadline: {grant.deadline}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Apply for Funding</CardTitle>
              <CardDescription>
                Submit your application for funding consideration. We'll review your submission and get back to you within 5 business days.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input id="businessName" placeholder="Enter your business name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Funding Amount Needed</Label>
                  <div className="relative">
                    <Banknote className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                    <Input id="amount" type="number" className="pl-10" placeholder="Enter amount" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Business Description</Label>
                  <textarea
                    id="description"
                    className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your business and how you plan to use the funding"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  );
}
