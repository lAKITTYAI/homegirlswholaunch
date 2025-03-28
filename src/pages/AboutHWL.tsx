
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
              Our mission is to create a world where every woman feels equipped and empowered to launch and grow a successful business. 
              We provide the tools, resources, and community support to help women confidently navigate the entrepreneurial journey. 
              Starting a business can feel overwhelming, but with the right guidance and a powerful network behind you, your success is inevitable.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              In 2016, Madam L.A. Kitty founded HomeGirls Who Launch after experiencing firsthand how isolating and challenging 
              starting a business can be without the right support. What began as a small circle of women sharing advice and encouraging 
              one another quickly evolved into a comprehensive platform dedicated to serving first-time female entrepreneurs, women-led startups, 
              small business owners, and freelancers transitioning into entrepreneurship.
            </p>
            <p>
              Today, HomeGirls Who Launch is a growing community serving thousands of women across the country. 
              We provide practical resources, actionable strategies, and an empowering support system to help women 
              turn their ideas into thriving businesses. Our mission remains the same: to ensure no woman has to launch her business alone.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Who We Serve</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">We are proud to support:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>First-Time Female Entrepreneurs:</strong> We guide women through every stage of launching their first business, from idea to execution.</li>
              <li><strong>Women-Led Startups:</strong> We champion innovation and provide strategies to help women-led companies scale and thrive.</li>
              <li><strong>Small Business Owners:</strong> Whether you run a boutique or a service-based business, we offer the tools and insights to help you grow.</li>
              <li><strong>Freelancers Transitioning to Entrepreneurship:</strong> We help freelancers transform their skills into profitable, scalable businesses with confidence.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What We Offer</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Practical Resources:</strong> Actionable guides, business templates, and expert-led workshops that help you make informed decisions and take bold steps forward.</li>
              <li><strong>Community & Support:</strong> An inclusive and empowering network of like-minded women who share insights, celebrate wins, and provide guidance through the highs and lows of entrepreneurship.</li>
              <li><strong>Mentorship & Coaching:</strong> Access to experienced women entrepreneurs who offer personalized mentorship and real-world advice to fuel your growth.</li>
              <li><strong>Inspiration & Motivation:</strong> Real stories from women who have successfully launched and scaled their businesses, proving that your goals are within reach.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Community:</strong> We believe in the transformative power of women supporting women.</li>
              <li><strong>Accessibility:</strong> We provide essential entrepreneurial resources to women from all walks of life.</li>
              <li><strong>Practicality:</strong> We prioritize actionable strategies that drive tangible results.</li>
              <li><strong>Inclusivity:</strong> We celebrate diversity and ensure every woman's voice is heard and valued.</li>
              <li><strong>Growth:</strong> We are committed to continuous learning, evolving with the needs of our community, and fostering personal and professional growth.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why We Exist</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              We exist because no woman should have to navigate the entrepreneurial journey alone. HomeGirls Who Launch was created 
              to break down barriers and offer women the practical tools, authentic community, and ongoing support needed to succeed. 
              Our platform isn't just about starting businesses—it's about empowering women to build legacies, create economic independence, 
              and inspire future generations.
            </p>
            <p className="mb-4">
              We are more than a platform—we are a movement that believes when women launch, the world rises.
            </p>
            <p className="font-semibold text-lg text-primary mt-6">
              Ready to launch your dream?
            </p>
            <p>
              Explore our resources, connect with our community, and take the first step toward building the business you've always imagined.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutHWL;
