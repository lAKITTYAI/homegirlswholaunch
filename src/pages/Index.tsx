
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <Features />
    </main>
  );
};

export default Index;
