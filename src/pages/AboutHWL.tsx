
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutHWL = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Homegirls Who Launch</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Homegirls Who Launch is dedicated to empowering women entrepreneurs by providing 
              the tools, resources, and community support needed to successfully launch and 
              grow their businesses. We believe in creating a space where women can connect, 
              collaborate, and thrive together in the entrepreneurial world.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Founded in 2023, Homegirls Who Launch began as a small community of women 
              entrepreneurs who wanted to support each other through the challenges of 
              starting and growing businesses. What started as informal meetups quickly 
              grew into a comprehensive platform providing resources, launch plans, 
              networking opportunities, and knowledge-sharing.
            </p>
            <p>
              Today, we're proud to serve thousands of women entrepreneurs across the 
              country, helping them turn their business dreams into reality with practical 
              tools and a supportive community.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Community:</strong> We believe in the power of women supporting women.</li>
              <li><strong>Accessibility:</strong> We make entrepreneurial resources accessible to all women.</li>
              <li><strong>Practicality:</strong> We focus on actionable strategies that drive real results.</li>
              <li><strong>Inclusivity:</strong> We celebrate diversity and create space for all voices.</li>
              <li><strong>Growth:</strong> We're committed to continuous learning and improvement.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutHWL;
