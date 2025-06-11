import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Newspaper, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
const HWLMagazine = () => {
  const [imageError, setImageError] = useState(false);
  const [secondImageError, setSecondImageError] = useState(false);
  const imagePath = "lovable-uploads/10be624b-3394-497b-b424-ed3e2b069b56.png";
  const secondImagePath = "/lovable-uploads/6e87f5d2-aeda-4454-823d-0f4827052919.png";
  return <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">HWL Magazine</h1>
        
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/2">
            <div className="sticky top-24">
              {imageError ? <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                  <AlertCircle className="mx-auto h-12 w-12 text-amber-500 mb-2" />
                  <p className="text-amber-800 font-medium">Image could not be loaded</p>
                  <p className="text-amber-600 text-sm mt-1">Path: {imagePath}</p>
                </div> : <img src={imagePath} alt="HWL Magazine Spring 2025 Issue" className="rounded-lg shadow-lg mx-auto w-full max-w-md" onError={() => setImageError(true)} />}
              <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold">Current Issue</h2>
                <p className="text-neutral-600 mt-2">Summer 2025</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" /> Featured Articles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">How a new app called Meta-Morph Fitness AI is changing the health and fitness space</h3>
                  <p className="text-neutral-600">Revolutionizing workouts with personalized AI-driven fitness solutions.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">From Idea to Launch: 5 Women Share Their Stories</h3>
                  <p className="text-neutral-600">Real-world advice from entrepreneurs who've been there.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Funding Your Dream: Alternative Capital Sources</h3>
                  <p className="text-neutral-600">Creative ways to finance your business beyond traditional loans.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Building Community While Building Business</h3>
                  <p className="text-neutral-600">How to create authentic connections that support your growth.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Newspaper className="mr-2 h-5 w-5" /> Subscribe to HWL Magazine
                </CardTitle>
                <CardDescription>Get inspiration and practical advice delivered to your inbox</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-600 mb-1">Email address</label>
                    <Input type="email" id="email" placeholder="youremail@example.com" />
                  </div>
                  <button type="button" className="w-full bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
                    Subscribe Now
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Second Magazine Cover */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/2">
            <div className="sticky top-24">
              {secondImageError ? <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                  <AlertCircle className="mx-auto h-12 w-12 text-amber-500 mb-2" />
                  <p className="text-amber-800 font-medium">Image could not be loaded</p>
                  <p className="text-amber-600 text-sm mt-1">Path: {secondImagePath}</p>
                </div> : <img src={secondImagePath} alt="HWL Magazine Vol 1 - Spring/Summer 2025" className="rounded-lg shadow-lg mx-auto w-full max-w-md" onError={() => setSecondImageError(true)} />}
              <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold">Vol #1</h2>
                <p className="text-neutral-600 mt-2">Spring 2025</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" /> Vol #1 Featured Articles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">2025 Future of Jobs Report: What You Need to Know to Win</h3>
                  <p className="text-neutral-600">Essential insights for navigating tomorrow's job market.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Top 10 Free AI Sites</h3>
                  <p className="text-neutral-600">Discover powerful AI tools that won't cost you a dime.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Beginner Friendly AI Making Millionaires</h3>
                  <p className="text-neutral-600">Simple AI strategies anyone can use to build wealth.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Side Hustles That Can Change Your Life</h3>
                  <p className="text-neutral-600">Proven ways to earn extra income and gain financial freedom.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">From Vision to Reality: Homegirls Who Did It</h3>
                  <p className="text-neutral-600">Exclusive interviews with successful women entrepreneurs.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">AI is Helping People Get Healthy</h3>
                  <p className="text-neutral-600">How technology is revolutionizing wellness and fitness.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default HWLMagazine;