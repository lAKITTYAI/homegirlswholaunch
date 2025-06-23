
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  businessName: z.string().min(2, "Business name is required"),
  businessWebsite: z.string().url("Invalid website URL").optional().or(z.literal("")),
  yearsInBusiness: z.string().min(1, "Please specify years in business"),
  expertise: z.string().min(10, "Please describe your area of expertise (minimum 10 characters)"),
  speakingExperience: z.string().min(10, "Please describe your speaking experience (minimum 10 characters)"),
  motivation: z.string().min(20, "Please explain your motivation (minimum 20 characters)"),
  availabilityRegions: z.string().min(5, "Please specify your availability"),
});

type FormData = z.infer<typeof formSchema>;

interface SpeakerApplicationFormProps {
  onSubmit: () => void;
}

const SpeakerApplicationForm: React.FC<SpeakerApplicationFormProps> = ({ onSubmit }) => {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      businessName: "",
      businessWebsite: "",
      yearsInBusiness: "",
      expertise: "",
      speakingExperience: "",
      motivation: "",
      availabilityRegions: "",
    },
  });

  const handleSubmit = (data: FormData) => {
    console.log("Speaker application submitted:", data);
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in becoming an HWL speaker. We'll review your application and get back to you soon.",
    });
    onSubmit();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input placeholder="(555) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your business name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="businessWebsite"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Website</FormLabel>
                <FormControl>
                  <Input placeholder="https://yourwebsite.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="yearsInBusiness"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Years in Business *</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 3 years, 6 months, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="expertise"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Area of Expertise *</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe your area of expertise and what topics you could speak about..."
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Tell us about your business expertise, industry knowledge, and topics you're passionate about speaking on.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="speakingExperience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Speaking Experience *</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe your previous speaking experience, including events, audiences, etc..."
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Share any previous speaking engagements, workshops, webinars, or public presentations you've given.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="motivation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Why do you want to become an HWL Speaker? *</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Share your motivation for joining the HWL speaker community..."
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Tell us what drives you to help other women entrepreneurs and how you align with HWL's mission.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="availabilityRegions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Geographic Availability *</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Specify regions, cities, or if you're available for virtual events..."
                  className="min-h-[80px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Let us know where you're available to speak (local, regional, national, virtual, etc.).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4 pt-4">
          <Button type="submit" className="flex-1">
            Submit Application
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SpeakerApplicationForm;
