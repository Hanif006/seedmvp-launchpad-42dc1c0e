
import { 
  Rocket, 
  Code, 
  PenTool, 
  TrendingUp, 
  HelpCircle, 
  CheckCircle,
  Database,
  ShieldCheck,
  Users,
  Activity,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const serviceCategories = [
  {
    title: "MVP Development",
    description: "I build functional, market-ready MVPs in weeks, not months. I combine agile methodology with cutting-edge technology to deliver high-quality products quickly.",
    icon: Rocket,
    features: [
      "Rapid development timeline",
      "Core feature prioritization",
      "Scalable architecture",
      "Quality assurance testing",
      "Deployment and launch support"
    ],
    benefits: "Get to market faster, test your idea with real users, and attract investors with a tangible product."
  },
  {
    title: "No-Code/Low-Code Solutions",
    description: "Leverage the power of no-code and low-code platforms to create functional applications with minimal technical debt. Perfect for early-stage startups looking to validate their concept quickly.",
    icon: Code,
    features: [
      "Visual development tools",
      "Pre-built templates",
      "API integrations",
      "Automated workflows",
      "Responsive design"
    ],
    benefits: "Reduce development costs by up to 70% and launch in days instead of months."
  },
  {
    title: "Design & Prototyping",
    description: "Create intuitive, engaging user experiences that solve real problems. My design process focuses on understanding your users and crafting interfaces that deliver value from day one.",
    icon: PenTool,
    features: [
      "User research",
      "UX/UI design",
      "Interactive prototypes",
      "User testing",
      "Design systems"
    ],
    benefits: "Validate your concept with real users before investing in full development."
  },
  {
    title: "Launch & Scale",
    description: "From initial launch to scaling your user base, I help you grow and adapt your product based on real-world feedback and analytics.",
    icon: TrendingUp,
    features: [
      "Growth strategy",
      "Marketing website",
      "Analytics implementation",
      "Performance optimization",
      "Scaling infrastructure"
    ],
    benefits: "Grow your user base and improve your product with data-driven decisions."
  },
  {
    title: "Consultation for Startup Ideas",
    description: "Get expert feedback on your idea, market fit analysis, and actionable recommendations from my experience working with startups.",
    icon: HelpCircle,
    features: [
      "Idea validation",
      "Market research",
      "Technical feasibility",
      "Business model review",
      "Roadmap planning"
    ],
    benefits: "Get clarity on your vision and a clear path forward for your startup journey."
  },
];

const additionalServices = [
  { name: "Database Design", icon: Database },
  { name: "Security Implementation", icon: ShieldCheck },
  { name: "User Authentication", icon: Users },
  { name: "Analytics Integration", icon: Activity },
  { name: "API Development", icon: Zap },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - SeedMVP</title>
        <meta
          name="description"
          content="From MVP development to launch and scale, I offer comprehensive services to help startups succeed."
        />
      </Helmet>
      <div className="pt-24">
        {/* Hero Section */}
        <div className="bg-background text-white py-16">
          <div className="container-tight">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">My Services</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80">
                I offer end-to-end solutions to take your idea from concept to launch and beyond.
                As a solo developer, I provide personalized attention to your startup journey.
              </p>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="section bg-background">
          <div className="container-tight">
            <div className="space-y-24">
              {serviceCategories.map((service, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  } gap-12 items-center`}
                >
                  <div className="md:w-1/2">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-foreground">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    
                    <h3 className="text-xl font-semibold mb-3 text-foreground">What's Included:</h3>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2 text-foreground">Why Choose This Service:</h3>
                      <p className="text-muted-foreground">{service.benefits}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="glass-card p-8 rounded-xl">
                      <div className="aspect-video glass-card rounded-lg shadow-md flex items-center justify-center">
                        <service.icon className="h-24 w-24 text-primary opacity-20" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="section bg-muted">
          <div className="container-tight">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Additional Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I offer a range of specialized services that can be added to any package 
                based on your specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{service.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="section bg-background">
          <div className="container-tight">
            <div className="glass-card p-8 md:p-12 text-center rounded-xl">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Ready to Get Started?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
                Let's discuss your project and find the perfect service package for your needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  variant="default"
                  className="bg-primary/80 hover:bg-primary text-background"
                  asChild
                >
                  <Link to="/submit-idea">Submit Your Idea</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/50 text-primary hover:bg-primary/10"
                  asChild
                >
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
