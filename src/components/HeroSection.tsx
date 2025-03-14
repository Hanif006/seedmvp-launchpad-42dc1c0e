
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Stress-Free";
  
  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 150);
        
        return () => clearTimeout(timeout);
      } else {
        // When typing is complete, pause before erasing
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        
        return () => clearTimeout(timeout);
      }
    } else {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(text.slice(0, text.length - 1));
        }, 100);
        
        return () => clearTimeout(timeout);
      } else {
        // When erasing is complete, start typing again
        const timeout = setTimeout(() => {
          setIsTyping(true);
        }, 500);
        
        return () => clearTimeout(timeout);
      }
    }
  }, [text, isTyping]);
  
  return (
    <div className="relative pt-20 overflow-hidden grid-bg min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Build Your MVP, Fast, Affordable,
            <br />and <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Turning ideas into reality, fast. Let us take your idea from
            concept to a market-ready MVP in just a few weeks.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Button size="lg" className="purple-gradient border-0 hover:opacity-90 transition-opacity" asChild>
              <Link to="/submit-idea" className="px-8 py-6 text-lg">
                Book a Call
              </Link>
            </Button>
            
            <p className="text-sm text-gray-400">
              No commitment required. Let's explore your idea together.
            </p>
            
            <div className="animate-bounce mt-12">
              <ChevronDown className="h-6 w-6 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes for visual interest */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
