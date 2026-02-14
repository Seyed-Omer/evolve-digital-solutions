import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsSection from "@/components/StatsSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CTASection />
      <ServicesSection />
      <PortfolioSection />
      <StatsSection />
      <ProcessTimeline />
      <CareersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
