
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AboutSection } from "@/components/AboutSection";
import { PodcastSection } from "@/components/PodcastSection";
import PreLaunchBanner from "@/components/PreLaunchBanner";
import AvailableNow from "@/components/AvailableNow";

const Index = () => {
  return (
    <main className="min-h-screen">
      <PreLaunchBanner />
      <Hero />
      <AvailableNow />
      <AboutSection />
      <Features />
      <PodcastSection />
    </main>
  );
};

export default Index;
