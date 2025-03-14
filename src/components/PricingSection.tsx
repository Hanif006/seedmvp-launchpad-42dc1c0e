
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Basic MVP",
    price: "$5,000",
    description: "Perfect for validating simple ideas quickly",
    features: [
      "Single platform (web or mobile)",
      "Core functionality only",
      "Basic UI/UX design",
      "2-4 weeks delivery",
      "1 round of revisions",
      "Basic analytics integration",
    ],
    popular: false,
    buttonText: "Get Started",
  },
  {
    name: "Pro MVP",
    price: "$12,000",
    description: "Comprehensive solution for serious startups",
    features: [
      "Web + mobile responsive",
      "Full feature implementation",
      "Professional UI/UX design",
      "4-8 weeks delivery",
      "3 rounds of revisions",
      "Advanced analytics",
      "User authentication",
      "Payment processing integration",
    ],
    popular: true,
    buttonText: "Get Started",
  },
  {
    name: "Enterprise MVP",
    price: "Custom",
    description: "Tailored solutions for complex projects",
    features: [
      "Multi-platform solution",
      "Custom feature development",
      "Premium UI/UX design",
      "Flexible timeline",
      "Unlimited revisions",
      "Advanced integrations",
      "Dedicated project manager",
      "Technical documentation",
      "Post-launch support",
    ],
    popular: false,
    buttonText: "Contact Us",
  },
];

const PricingSection = () => {
  return (
    <section className="section bg-background">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Pricing Plans</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing to help you choose the perfect plan for your project.
            All plans include our expertise and dedication to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-xl p-6 md:p-8 relative flex flex-col ${
                tier.popular ? "border-2 border-primary ring-4 ring-primary/20" : ""
              }`}
            >
              {tier.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                  {tier.price !== "Custom" && (
                    <span className="text-muted-foreground ml-1">/ project</span>
                  )}
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
            Need a custom solution or have specific requirements?
          </p>
          <Button variant="outline" asChild>
            <Link to="/contact">Contact Us for Custom Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
