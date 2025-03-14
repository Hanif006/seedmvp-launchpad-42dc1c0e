
import { 
  Rocket, 
  Code, 
  PenTool, 
  TrendingUp, 
  HelpCircle 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "MVP Development",
    description: "We build functional, market-ready MVPs in weeks, not months. Perfect for validating ideas quickly.",
    icon: Rocket,
  },
  {
    title: "No-Code/Low-Code Solutions",
    description: "Get to market faster with our no-code and low-code approaches for quick prototyping and testing.",
    icon: Code,
  },
  {
    title: "Design & Prototyping",
    description: "Beautiful, intuitive designs that solve real problems and delight your users from day one.",
    icon: PenTool,
  },
  {
    title: "Launch & Scale",
    description: "From initial launch to scaling your user base, we help you grow and adapt your product.",
    icon: TrendingUp,
  },
  {
    title: "Consultation for Startup Ideas",
    description: "Get expert feedback on your idea, market fit analysis, and actionable recommendations.",
    icon: HelpCircle,
  },
];

const ServicesSection = () => {
  return (
    <section className="section bg-background">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer end-to-end solutions to take your idea from concept to launch and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card rounded-lg p-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="secondary">
            <Link to="/services">Learn More About Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
