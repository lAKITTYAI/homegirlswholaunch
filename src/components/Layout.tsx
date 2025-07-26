
import { Outlet, Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const location = useLocation();
  
  const services = [
    { to: "/funding", label: "Funding Options" },
    { to: "/credit-builder", label: "Credit Builder" },
    { to: "/savings-account", label: "Savings Account" },
  ];

  const programs = [
    { to: "/launch-plans", label: "Launch Plans" },
    { to: "/resources", label: "Resources" },
  ];

  const company = [
    { to: "/about", label: "About HWL" },
    { to: "/community", label: "Community" },
    { to: "/magazine", label: "HWL Magazine" },
  ];

  const isActiveCategory = (categoryLinks: { to: string }[]) => {
    return categoryLinks.some(link => location.pathname === link.to);
  };

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
        
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <Link 
                to="/" 
                className={cn(
                  navigationMenuTriggerStyle(),
                  location.pathname === "/" ? "text-primary font-semibold bg-neutral-100" : ""
                )}
              >
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={isActiveCategory(services) ? "text-primary font-semibold" : ""}>
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[300px] gap-3 p-4 bg-white">
                  {services.map((service) => (
                    <NavigationMenuLink key={service.to} asChild>
                      <Link
                        to={service.to}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{service.label}</div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={isActiveCategory(programs) ? "text-primary font-semibold" : ""}>
                Programs
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[300px] gap-3 p-4 bg-white">
                  {programs.map((program) => (
                    <NavigationMenuLink key={program.to} asChild>
                      <Link
                        to={program.to}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{program.label}</div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={isActiveCategory(company) ? "text-primary font-semibold" : ""}>
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[300px] gap-3 p-4 bg-white">
                  {company.map((item) => (
                    <NavigationMenuLink key={item.to} asChild>
                      <Link
                        to={item.to}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{item.label}</div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link 
                to="/pricing" 
                className={cn(
                  navigationMenuTriggerStyle(),
                  location.pathname === "/pricing" ? "text-primary font-semibold bg-neutral-100" : ""
                )}
              >
                Pricing
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
