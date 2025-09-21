import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const PodcastGuestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    expertise: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your interest! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      company: "",
      expertise: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company/Organization</Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="expertise">Area of Expertise</Label>
        <Input
          id="expertise"
          name="expertise"
          value={formData.expertise}
          onChange={handleChange}
          placeholder="e.g., Marketing, Finance, Tech, etc."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Why would you be a great guest?</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your story, achievements, and what insights you'd like to share..."
          rows={4}
        />
      </div>

      <Button type="submit" className="w-full">
        Submit Application
      </Button>
    </form>
  );
};