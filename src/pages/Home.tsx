
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";

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
      <div>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </div>
    </>
  );
};

export default Home;
