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
      title: "Business Credit Builder",
      description: "Build your business credit score and access funding opportunities",
      price: "$97",
      originalPrice: "$147",
      features: [
        "3-Bureau Credit Reporting",
        "Credit Building Strategies",
        "Funding Application Templates",
        "Net-30 Program + Vendor Directory",
        "Credit Building Savings Account"
      ],
      link: "/business-credit-builder",
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
        "Crisis Communication Plans"
      ],
      badge: "High Value"
    },
    {
      icon: BookOpen,
      title: "Digital Marketing Guide", 
      description: "Master digital marketing strategies to grow your business online",
      price: "$59.99",
      features: [
        "Social Media Strategy",
        "Content Marketing Plans",
        "SEO Optimization Tips",
        "Email Marketing Templates"
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
            Available Now
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            While we prepare our full program, get started with these essential resources that successful entrepreneurs use to build their foundation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {availableProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
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
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold text-primary">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-neutral-400 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <p className="text-sm text-green-600 font-medium mt-1">
                        Save {parseInt(product.originalPrice.replace('$', '')) - parseInt(product.price.replace('$', ''))}% Pre-Launch Price
                      </p>
                    )}
                  </div>
                  
                  <ul className="space-y-2 mb-6 flex-grow">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                   <div className="space-y-2">
                     {product.link ? (
                       <Button asChild className="w-full">
                         <Link to={product.link}>
                           Get Started Now
                         </Link>
                       </Button>
                     ) : (
                       <Button className="w-full">
                         <Download className="w-4 h-4 mr-2" />
                         Download Now
                       </Button>
                     )}
                     <p className="text-xs text-neutral-500 text-center">
                       Instant access • 30-day money-back guarantee
                     </p>
                     
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
          <h3 className="text-xl font-semibold mb-2">Questions about our current offerings?</h3>
          <p className="text-neutral-600 mb-4">
            Get personalized recommendations on which resources are right for your business stage.
          </p>
          <AppointmentBooking />
        </motion.div>
      </div>
    </section>
  );
};

export default AvailableNow;