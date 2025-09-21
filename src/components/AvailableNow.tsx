import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, PiggyBank, BookOpen, Download, Check } from "lucide-react";
import { Link } from "react-router-dom";
import AppointmentBooking from "@/components/AppointmentBooking";

const AvailableNow = () => {
  const availableProducts = [
    {
      icon: CreditCard,
      title: "Business Credit Builder Guide",
      description: "Complete step-by-step guide to build a strong business credit score",
      price: "$47",
      originalPrice: "$97",
      features: [
        "Step-by-Step Credit Building Process",
        "Credit Building Strategies & Timeline",
        "Funding Application Templates",
        "Vendor Directory for Net-30 Accounts",
        "Credit Monitoring & Tracking Tools"
      ],
      badge: "Most Popular",
      badgeColor: "bg-green-500"
    },
    {
      icon: BookOpen,
      title: "Media Training Guide",
      description: "Master media interviews and public speaking as a celebrity entrepreneur",
      price: "$80",
      originalPrice: "$160",
      features: [
        "Interview Preparation Strategies",
        "Public Speaking Techniques",
        "Media Kit Templates",
        "Crisis Communication Plans",
        "Personal Branding Strategies"
      ],
      badge: "High Value"
    },
    {
      icon: BookOpen,
      title: "Digital Marketing Guide", 
      description: "Master digital marketing strategies to grow your business online",
      price: "$40",
      originalPrice: "$80",
      features: [
        "Social Media Strategy",
        "Content Marketing Plans",
        "SEO Optimization Tips",
        "Email Marketing Templates",
        "Analytics & Performance Tracking"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-green-500 hover:bg-green-600">
            Early Access for Waitlist Members
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Building Your Foundation
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Thank you for joining our waitlist! Get early access to these essential foundation-building resources while we prepare your comprehensive program launch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6 max-w-4xl mx-auto">
            <h3 className="font-semibold text-primary mb-2">🎯 Waitlist Member Exclusive Pricing</h3>
            <p className="text-sm text-neutral-700">
              Special pre-launch pricing for our waitlist members. Start building your foundation while we prepare your comprehensive program.
              <span className="text-primary font-medium ml-1">
                Limited time offer!
              </span>
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {availableProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex"
            >
              <Card className="w-full flex flex-col hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="text-center">
                  <div className="relative">
                    {product.badge && (
                      <Badge className={`absolute -top-2 -right-2 ${product.badgeColor || 'bg-primary'}`}>
                        {product.badge}
                      </Badge>
                    )}
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <product.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="min-h-[72px] flex flex-col justify-center">
                    <CardTitle className="text-xl mb-2">
                      {product.title === "Media Training Guide" ? (
                        <>
                          Media Training <span className="block">Guide</span>
                        </>
                      ) : product.title === "Digital Marketing Guide" ? (
                        <>
                          Digital Marketing <span className="block">Guide</span>
                        </>
                      ) : (
                        product.title
                      )}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {product.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="text-center mb-6 min-h-[96px]">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-3xl font-bold text-primary">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-neutral-400 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="min-h-[1.5rem]">
                        {product.originalPrice && (
                          <p className="text-sm text-green-600 font-medium">
                            Save {Math.round(((parseInt(product.originalPrice.replace('$', '')) - parseInt(product.price.replace('$', ''))) / parseInt(product.originalPrice.replace('$', ''))) * 100)}% - Waitlist Member Price
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6 min-h-[176px]">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                   <div className={`mt-auto space-y-3 ${product.title === "Business Credit Builder Guide" ? "pt-3" : ""}`}>
                     <Button className="w-full">
                       <Download className="w-4 h-4 mr-2" />
                       Download Now
                     </Button>
                     <p className="text-xs text-neutral-500 text-center">
                       {product.title === "Business Credit Builder Guide" 
                         ? "Instant access • Foundation builder • 30-day guarantee"
                         : "Instant digital download"
                       }
                     </p>
                     
                      {/* Show additional options for Business Credit Builder Guide */}
                      {product.title === "Business Credit Builder Guide" && (
                        <div className="mt-3 border-t pt-3">
                          <p className="text-xs text-neutral-600 mb-2 text-center font-medium">Start Building Now:</p>
                          <div className="grid grid-cols-2 gap-2">
                            <Button asChild variant="outline" size="sm" className="text-xs h-8">
                              <Link to="/savings-account">
                                Savings
                              </Link>
                            </Button>
                            <Button asChild variant="outline" size="sm" className="text-xs h-8">
                              <Link to="/business-credit-builder">
                                Credit
                              </Link>
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      {/* Show "View All Digital Products" button only on the last card */}
                      {index === availableProducts.length - 1 && (
                        <Button 
                          asChild 
                          size="lg" 
                          className="w-full mt-4 bg-primary hover:bg-primary/90 text-white font-semibold py-3"
                        >
                          <Link to="/resources">
                            View All Digital Products
                          </Link>
                        </Button>
                      )}
                     </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/20"
        >
          <h3 className="text-xl font-semibold mb-2">Ready to build your foundation?</h3>
          <p className="text-neutral-600 mb-4">
            Get personalized recommendations on which foundation resources are perfect for your current business stage.
          </p>
          <AppointmentBooking />
        </motion.div>
      </div>
    </section>
  );
};

export default AvailableNow;