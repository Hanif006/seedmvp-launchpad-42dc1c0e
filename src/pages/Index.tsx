
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sprout } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background grid-bg py-16">
      <div className="container mx-auto px-4 text-center max-w-3xl animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sprout className="h-12 w-12 text-primary animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Seed</span>
            <span className="text-primary">MVP</span>
          </h1>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-medium text-white/80 mb-8">
          Transforming Ideas into Digital Reality
        </h2>
        
        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
          We help entrepreneurs and startups build high-quality minimum viable products 
          that validate your business idea and attract investors.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/services">Explore Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg group">
            <Link to="/submit-idea" className="flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
