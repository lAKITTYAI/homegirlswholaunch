
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AboutSection } from "@/components/AboutSection";
import { PodcastSection } from "@/components/PodcastSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <Features />
      <PodcastSection />
    </main>
  );
};

export default Index;
