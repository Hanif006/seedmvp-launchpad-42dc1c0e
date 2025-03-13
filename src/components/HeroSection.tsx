
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative pt-20 overflow-hidden">
      <div className="hero-gradient absolute inset-0 opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Transform your idea into{" "}
            <span className="text-seedmvp-blue">reality</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Fast-track your startup with SeedMVP. We build MVPs that validate
            your business and attract investors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/submit-idea" className="px-8 flex items-center">
                Submit Your Idea <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services" className="px-8">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes for visual interest */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-seedmvp-blue opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-seedmvp-accent opacity-10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
