
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AboutSection } from "@/components/AboutSection";
import { PodcastSection } from "@/components/PodcastSection";
import PreLaunchBanner from "@/components/PreLaunchBanner";
import AvailableNow from "@/components/AvailableNow";
import ExclusiveMemberPrivileges from "@/components/ExclusiveMemberPrivileges";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <main className="min-h-screen">
      <PreLaunchBanner />
      <Hero />
      <AvailableNow />
      <AboutSection />
      <HowItWorks />
      <Features />
      <ExclusiveMemberPrivileges />
      <PodcastSection />
    </main>
  );
};

export default Index;
