
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "MVP Project",
    price: "$2,000",
    description: "Complete MVP development for your startup idea",
    features: [
      "Web application development",
      "Core functionality implementation",
      "Responsive design",
      "User authentication",
      "Basic analytics integration",
      "2-4 weeks delivery",
      "1 round of revisions",
      "Deployment setup",
    ],
    popular: true,
    buttonText: "Get Started",
  },
  {
    name: "Maintenance Package",
    price: "$1,500",
    description: "30-day maintenance and support for your project",
    features: [
      "Bug fixes & troubleshooting",
      "Performance optimization",
      "Feature enhancements",
      "Technical support",
      "Security updates",
      "Analytics review",
      "Code refactoring",
      "Documentation updates",
    ],
    popular: false,
    buttonText: "Add Maintenance",
  },
];

const PricingSection = () => {
  return (
    <section className="section bg-background">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Pricing Plans</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple and transparent pricing to help bring your project to life.
            Choose the plan that works for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-xl p-6 md:p-8 relative flex flex-col ${
                tier.popular ? "border-2 border-primary ring-4 ring-primary/20" : ""
              }`}
            >
              {tier.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  One-Time Payment
                </span>
              )}
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground ml-1">
                    {index === 0 ? "/ project" : "/ 30 days"}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">{tier.description}</p>
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto">
                <Button 
                  variant={tier.popular ? "default" : "outline"} 
                  className="w-full"
                  asChild
                >
                  <Link to="/submit-idea">{tier.buttonText}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need more information about these plans?
          </p>
          <Button variant="outline" asChild>
            <Link to="/contact">Contact for Details</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
