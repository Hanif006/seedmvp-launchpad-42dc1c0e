
import { Helmet } from "react-helmet";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SeedMVP - Transform Your Idea Into Reality</title>
        <meta
          name="description"
          content="Fast-track your startup with SeedMVP. We build MVPs that validate your business and attract investors."
        />
      </Helmet>
      <div className="grid-bg min-h-screen bg-background">
        <HeroSection />
        <ServicesSection />
        <div id="our-work" className="scroll-mt-20">
          <PortfolioSection />
        </div>
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </div>
    </>
  );
};

export default Home;
