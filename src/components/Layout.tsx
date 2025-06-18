
import { Outlet, Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { to: "/", label: "Home" },
    { to: "/pricing", label: "Pricing" },
    { to: "/launch-plans", label: "Launch Plans" },
    { to: "/resources", label: "Resources" },
    { to: "/funding", label: "Funding Options" },
    { to: "/credit-builder", label: "Credit Builder" },
    { to: "/community", label: "Community" },
    { to: "/about", label: "About HWL" },
    { to: "/magazine", label: "HWL Magazine" },
  ];

  return (
    <header className="bg-white border-b border-neutral-200 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="flex items-center">
            <img 
              src="lovable-uploads/9078973d-5f5e-4f0d-95ee-cfafef7ab155.png" 
              alt="Homegirls Who Launch Logo" 
              className="h-10"
            />
          </Link>
        </div>
        <nav className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ease-in-out",
                location.pathname === link.to
                  ? "text-primary font-semibold"
                  : "text-neutral-600 hover:text-primary hover:bg-neutral-100"
              )}
            >
              {link.label}
              {location.pathname === link.to && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  layoutId="navbar-indicator"
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30 
                  }}
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
