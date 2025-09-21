import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}

const WaitlistModal = ({ isOpen, onClose, planName }: WaitlistModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessStatus: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.businessStatus) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "Successfully joined waitlist!",
      description: `Thank you for joining the ${planName} waitlist. We'll contact you when we launch!`
    });

    // Reset form and close modal
    setFormData({ name: "", email: "", phone: "", businessStatus: "" });
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join {planName} Waitlist</DialogTitle>
          <DialogDescription>
            Be the first to know when {planName} becomes available. We'll notify you as soon as we launch!
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="business-status">Where are you in your business?</Label>
            <Select value={formData.businessStatus} onValueChange={(value) => handleInputChange("businessStatus", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your business status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="idea">Just an idea</SelectItem>
                <SelectItem value="new">New business (0-1 year)</SelectItem>
                <SelectItem value="existing">Existing business (1+ years)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Join Waitlist
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;