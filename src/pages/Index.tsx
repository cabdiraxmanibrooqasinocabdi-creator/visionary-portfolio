import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ProjectSection from "@/components/ProjectSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import BottomDock from "@/components/BottomDock";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <HeroSection />
      <TechStack />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <BottomDock />
      {/* Spacer for bottom dock */}
      <div className="h-24" />
    </main>
  );
};

export default Index;
