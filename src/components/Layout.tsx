
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
    { to: "/resources", label: "Digital Resources" },
    { to: "/accelerator", label: "Accelerator Program" },
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
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="flex items-center">
            <img 
              src="lovable-uploads/9078973d-5f5e-4f0d-95ee-cfafef7ab155.png" 
              alt="Homegirls Who Launch Logo" 
              className="h-10"
            />
          </Link>
        </div>
        
        <NavigationMenu className="flex-1">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link 
                to="/" 
                className={cn(
                  "inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-6 py-3 text-base font-medium transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  location.pathname === "/" ? "text-primary font-semibold bg-primary/10" : "text-neutral-700"
                )}
              >
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={cn("h-12 px-6 py-3 text-base font-medium text-neutral-700 hover:text-primary data-[state=open]:text-primary", isActiveCategory(services) ? "text-primary font-semibold bg-primary/10" : "")}>
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
              <NavigationMenuTrigger className={cn("h-12 px-6 py-3 text-base font-medium text-neutral-700 hover:text-primary data-[state=open]:text-primary", isActiveCategory(programs) ? "text-primary font-semibold bg-primary/10" : "")}>
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
              <NavigationMenuTrigger className={cn("h-12 px-6 py-3 text-base font-medium text-neutral-700 hover:text-primary data-[state=open]:text-primary", isActiveCategory(company) ? "text-primary font-semibold bg-primary/10" : "")}>
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
                  "inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-6 py-3 text-base font-medium transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  location.pathname === "/pricing" ? "text-primary font-semibold bg-primary/10" : "text-neutral-700"
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
