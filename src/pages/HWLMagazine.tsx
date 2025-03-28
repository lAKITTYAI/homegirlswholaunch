
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Newspaper, AlertCircle } from "lucide-react";

const HWLMagazine = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">HWL Magazine</h1>
        
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/2">
            <div className="sticky top-24">
              {imageError ? (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                  <AlertCircle className="mx-auto h-12 w-12 text-amber-500 mb-2" />
                  <p className="text-amber-800 font-medium">Image could not be loaded</p>
                  <p className="text-amber-600 text-sm mt-1">Path: /lovable-uploads/7c2da9c5-137a-4446-ac19-309290052143.png</p>
                </div>
              ) : (
                <img 
                  src="/lovable-uploads/7c2da9c5-137a-4446-ac19-309290052143.png" 
                  alt="HWL Magazine Cover" 
                  className="rounded-lg shadow-lg mx-auto w-full max-w-md" 
                  onError={() => setImageError(true)}
                />
              )}
              <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold">Current Issue</h2>
                <p className="text-neutral-600 mt-2">Spring 2025</p>
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
                    <input type="email" id="email" className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="youremail@example.com" />
                  </div>
                  <button type="button" className="w-full bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
                    Subscribe Now
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Debug information */}
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <p className="text-sm text-gray-600">Image path: /lovable-uploads/7c2da9c5-137a-4446-ac19-309290052143.png</p>
          <p className="text-sm text-gray-600">If the image is not displaying, please ensure it has been uploaded correctly.</p>
        </div>
      </div>
    </div>
  );
};

export default HWLMagazine;
