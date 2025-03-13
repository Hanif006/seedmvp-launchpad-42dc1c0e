
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 hero-gradient text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Idea into Reality?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/80">
            Let's build your MVP together and fast-track your startup journey.
            Take the first step toward bringing your vision to life.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-seedmvp-blue hover:bg-seedmvp-gray"
            asChild
          >
            <Link to="/submit-idea" className="px-8 flex items-center">
              Submit Your Idea <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
