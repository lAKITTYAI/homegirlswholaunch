
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg">Processing your subscription...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="bg-green-100 p-3 rounded-full"
              >
                <CheckCircle className="w-8 h-8 text-green-600" />
              </motion.div>
            </div>
            <CardTitle className="text-2xl text-green-800">
              Welcome to HomeGirls Who Launch! 🎉
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-green-700">
              Your subscription has been successfully activated! You're now part of our amazing community of women entrepreneurs.
            </p>
            
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">What's Next?</h3>
              <ul className="text-left space-y-2 text-green-700">
                <li>• Check your email for your welcome message and getting started guide</li>
                <li>• Access your member-exclusive resources and community</li>
                <li>• Join our upcoming events and masterclasses</li>
                <li>• Connect with other women entrepreneurs in our community</li>
              </ul>
            </div>

            {sessionId && (
              <p className="text-sm text-green-600">
                Session ID: {sessionId}
              </p>
            )}

            <div className="flex gap-4 justify-center">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link to="/community">
                  Join the Community <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">
                  Back to Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Success;
