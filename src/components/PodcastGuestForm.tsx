import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export const PodcastGuestForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    expertise: "",
    experience: "",
    topic: "",
    socialMedia: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.expertise || !formData.experience) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    console.log("Podcast guest application:", formData);
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      expertise: "",
      experience: "",
      topic: "",
      socialMedia: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-6">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-center">
          Want to be a Guest on Our Podcast?
        </DialogTitle>
        <p className="text-center text-muted-foreground">
          Share your entrepreneurial journey with our Homegirls Who Launch community
        </p>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company/Business</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your business or company name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="expertise">Area of Expertise *</Label>
          <Input
            id="expertise"
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            placeholder="e.g., E-commerce, Tech, Real Estate, Consulting"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">Business Experience *</Label>
          <Textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Tell us about your business journey, achievements, and what makes your story unique..."
            className="min-h-[100px]"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="topic">Proposed Podcast Topic</Label>
          <Input
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            placeholder="What would you like to discuss on the podcast?"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="socialMedia">Social Media/Website</Label>
          <Input
            id="socialMedia"
            name="socialMedia"
            value={formData.socialMedia}
            onChange={handleChange}
            placeholder="Your website, Instagram, LinkedIn, etc."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Additional Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Anything else you'd like us to know..."
            className="min-h-[80px]"
          />
        </div>

        <Button type="submit" className="w-full" size="lg">
          Submit Application
        </Button>
      </form>
    </div>
  );
};