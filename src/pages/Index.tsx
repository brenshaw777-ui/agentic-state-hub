import BackgroundFX from "@/components/BackgroundFX";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import FeatureGrid from "@/components/FeatureGrid";
import UseCaseTabs from "@/components/UseCaseTabs";
import HowItWorks from "@/components/HowItWorks";
import DeveloperSection from "@/components/DeveloperSection";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import Tokenomics from "@/components/Tokenomics";
import LinksSection from "@/components/LinksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <FeatureGrid />
        <UseCaseTabs />
        <HowItWorks />
        <DeveloperSection />
        <RoadmapTimeline />
        <Tokenomics />
        <LinksSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
