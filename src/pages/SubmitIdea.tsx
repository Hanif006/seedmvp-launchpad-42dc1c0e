
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

const mvpTypes = [
  { id: "web", label: "Web Application" },
  { id: "mobile", label: "Mobile App" },
  { id: "ai", label: "AI/ML Solution" },
  { id: "nocode", label: "No-Code/Low-Code" },
  { id: "other", label: "Other" },
];

const budgetRanges = [
  { id: "5k-15k", label: "$5,000 - $15,000" },
  { id: "15k-30k", label: "$15,000 - $30,000" },
  { id: "30k-50k", label: "$30,000 - $50,000" },
  { id: "50k+", label: "$50,000+" },
  { id: "not-sure", label: "Not sure yet" },
];

const SubmitIdea = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectTitle: "",
    projectDescription: "",
    mvpType: "",
    budgetRange: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Idea Submitted Successfully!",
        description: "We'll review your project and get back to you soon.",
      });
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Submit Your Idea - SeedMVP</title>
        <meta
          name="description"
          content="Share your startup idea with SeedMVP and take the first step toward building your MVP."
        />
      </Helmet>
      <div className="pt-24">
        {/* Hero Section */}
        <div className="bg-seedmvp-blue text-white py-16">
          <div className="container-tight">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Submit Your Idea</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80">
                Share your vision with us and take the first step toward bringing it to life.
                We're excited to hear about your project!
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <section className="section">
          <div className="container-tight">
            {isSubmitted ? (
              <div className="bg-white p-12 rounded-xl shadow-md text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We've received your project idea and we're excited to review it!
                  Our team will get back to you within 1-2 business days to discuss
                  the next steps.
                </p>
                <p className="text-seedmvp-blue font-medium mb-8">
                  A confirmation email has been sent to {formData.email}
                </p>
                <Button asChild>
                  <a href="/">Return to Home Page</a>
                </Button>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Tell Us About Your Project</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Your Information</h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="projectTitle">Project Title</Label>
                        <Input
                          id="projectTitle"
                          name="projectTitle"
                          value={formData.projectTitle}
                          onChange={handleChange}
                          placeholder="e.g., Fitness Tracking App"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectDescription">Project Description</Label>
                        <Textarea
                          id="projectDescription"
                          name="projectDescription"
                          value={formData.projectDescription}
                          onChange={handleChange}
                          placeholder="Describe your idea, target users, key features, and any other relevant details..."
                          rows={6}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Requirements */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <Label>What type of MVP do you need?</Label>
                        <RadioGroup
                          value={formData.mvpType}
                          onValueChange={(value) => handleRadioChange("mvpType", value)}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                          required
                        >
                          {mvpTypes.map((type) => (
                            <div key={type.id} className="flex items-center space-x-2">
                              <RadioGroupItem value={type.id} id={`mvp-type-${type.id}`} />
                              <Label htmlFor={`mvp-type-${type.id}`} className="cursor-pointer">
                                {type.label}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      <div className="space-y-3">
                        <Label>What's your budget range?</Label>
                        <RadioGroup
                          value={formData.budgetRange}
                          onValueChange={(value) => handleRadioChange("budgetRange", value)}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                          required
                        >
                          {budgetRanges.map((range) => (
                            <div key={range.id} className="flex items-center space-x-2">
                              <RadioGroupItem value={range.id} id={`budget-${range.id}`} />
                              <Label htmlFor={`budget-${range.id}`} className="cursor-pointer">
                                {range.label}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full sm:w-auto" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Your Idea <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default SubmitIdea;
