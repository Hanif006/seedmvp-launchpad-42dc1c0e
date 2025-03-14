
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ChevronDown } from "lucide-react";

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
        <div className="pt-24 pb-12 md:pt-32 md:pb-24 px-4">
          <div className="max-w-5xl mx-auto">
            <Alert className="mx-auto mb-6 max-w-md bg-muted/40 border-muted">
              <AlertDescription className="text-center text-sm">
                Limited Availability: 4 spots for March
              </AlertDescription>
            </Alert>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 tracking-tight">
              Build Your MVP, Fast, Affordable,
              <br />and <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Stress-Free</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-6 mb-8">
              Turning ideas into reality, fast. Let us take your idea from 
              concept to a market-ready MVP in just a few weeks.
            </p>
            
            <div className="mt-12 space-y-6">
              <button className="purple-gradient text-white px-8 py-3 rounded-lg font-medium flex items-center mx-auto">
                <span className="mr-2">Book a Call</span>
              </button>
              
              <p className="text-sm text-muted-foreground">
                No commitment required. Let's explore your idea together.
              </p>
              
              <div className="animate-bounce mt-12">
                <ChevronDown className="h-6 w-6 mx-auto text-muted-foreground/60" />
              </div>
            </div>
          </div>
        </div>
        
        <ServicesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </div>
    </>
  );
};

export default Home;
