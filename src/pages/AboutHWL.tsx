import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, ArrowRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import SpeakerApplicationForm from "@/components/SpeakerApplicationForm";
const AboutHWL = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleApplicationSubmit = () => {
    setIsDialogOpen(false);
  };
  return <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Homegirls Who Launch</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">Our mission is to create a world where every woman feels equipped and empowered to launch and grow a successful business—surrounded by a sisterhood of support. We believe entrepreneurship shouldn't be a solo journey. Through local chapter meetings, structured cohort programs, digital resources, and a nationwide network, we provide the community-first foundation women need to confidently build and scale their businesses. Starting a business can feel overwhelming, but with the right guidance and a powerful network behind you, your success is inevitable.</p>
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
              <li><strong>Aspiring Women Entrepreneurs:</strong> We empower women with entrepreneurial dreams and unwavering drive to transform their vision into reality, providing the foundation and roadmap needed to confidently take the leap into business ownership.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Hybrid Model</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">We meet you where you are with flexible options that fit your learning style, schedule, and goals:</p>
            <ul className="list-disc pl-6 space-y-3 mb-4">
              <li><strong>Local Chapter Meetings:</strong> Join monthly face-to-face meetups in your city to build genuine relationships, network with local entrepreneurs, and attend speaker seminars. Connect with your community and grow together.</li>
              <li><strong>3-6 Month Cohort Accelerator:</strong> Our intensive structured program includes weekly group coaching calls, dedicated accountability partners, milestone tracking, and expert mentorship. Perfect for entrepreneurs ready to launch or scale with focused support.</li>
              <li><strong>Digital Resources Library:</strong> Access our comprehensive collection of downloadable guides, templates, and courses at your own pace. Learn on your schedule with resources you can return to again and again.</li>
              <li><strong>Ambassador Program:</strong> Lead your own local HWL chapter, host monthly meetings, and build your leadership platform while earning income and growing the entrepreneurial community in your area.</li>
            </ul>
            <p className="text-sm text-neutral-600 italic">Mix and match what works for you—attend local meetings while working through digital resources, or join the cohort accelerator for intensive growth. The choice is yours.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What We Offer</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Community First:</strong> Local chapter meetings and peer accountability groups where you build real friendships with women who understand your journey and celebrate your wins.</li>
              <li><strong>Practical Resources:</strong> Actionable guides, business templates, and expert-led workshops that help you make informed decisions and take bold steps forward.</li>
              <li><strong>Mentorship & Coaching:</strong> Access to experienced women entrepreneurs who offer personalized mentorship and real-world advice to fuel your growth.</li>
              <li><strong>Business Credit Building:</strong> Net 30 payment terms and specialized savings accounts designed to establish and strengthen your business credit profile, helping you access funding and build financial credibility.</li>
              <li><strong>Exclusive Funding Opportunities:</strong> Access to grants, direct lender connections, and funding resources available exclusively to HWL members, providing you with unique pathways to secure the capital needed to launch and scale your business.</li>
              <li><strong>Business Formation & Legal Support:</strong> Legal templates, business structure guidance, contract resources, and regulatory compliance tools that help you navigate the complex legal aspects of starting and running your business with confidence.</li>
              <li><strong>Marketing & Branding Mastery:</strong> Strategic marketing guidance, social media templates, branding workshops, and digital marketing resources to help you build a powerful brand presence and attract your ideal customers.</li>
              <li><strong>Structured Learning Programs:</strong> Step-by-step courses, certification programs, and masterclasses that provide organized educational pathways to take you from startup concept to successful scale-up.</li>
              <li><strong>Media & Recognition:</strong> Opportunities to be featured in HWL Magazine, on our podcast, and across our social platforms. Gain visibility and credibility in the entrepreneurial community.</li>
              <li><strong>Exclusive Events & Experiences:</strong> VIP launch parties, celebrity entrepreneur events, speaker seminars, and high-end networking experiences that elevate your business presence and foster meaningful connections.</li>
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

        {/* Become A HWL Speaker Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="mb-12">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Mic className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Become A HWL Chapter Speaker or Ambassador
                </h3>
                <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
                  Lead monthly HWL chapter meetings in your city, speak at events, or become an official HWL Ambassador. 
                  Help empower women entrepreneurs while building your leadership platform and earning income.
                </p>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg" size="lg">
                      Apply Here
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </DialogClose>
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">HWL Speaker Application</DialogTitle>
                      <DialogDescription>
                        Join our community of inspiring women speakers who are empowering entrepreneurs worldwide. 
                        Please fill out the application below to be considered for speaking opportunities.
                      </DialogDescription>
                    </DialogHeader>
                    <SpeakerApplicationForm onSubmit={handleApplicationSubmit} />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.7
      }} className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img src="/lovable-uploads/hwl-luxury-lifestyle.jpeg?v=2" alt="Madam L.A. Kitty - Entrepreneur and Founder of Homegirls Who Launch" className="w-full h-auto object-cover" />
        </motion.div>
      </div>
    </div>;
};
export default AboutHWL;