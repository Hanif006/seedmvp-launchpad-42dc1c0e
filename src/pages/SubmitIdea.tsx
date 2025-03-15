
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
          content="Share your startup idea with Mosquito Kalinz9o and take the first step toward building your MVP."
        />
      </Helmet>
      <div className="pt-24">
        {/* Hero Section */}
        <div className="bg-background text-white py-16">
          <div className="container-tight">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Submit Your Idea</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80">
                Share your vision with me and take the first step toward bringing it to life.
                I'm excited to hear about your project!
              </p>
            </div>
          </div>
        </div>

        {/* About Developer Section */}
        <section className="section bg-background">
          <div className="container-tight">
            <div className="glass-card p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center text-left">
                <div className="md:w-1/3">
                  <img 
                    src="/lovable-uploads/fc72adba-dd45-40ea-b7b9-b7f430f209b2.png" 
                    alt="Mosquito Kalinz9o" 
                    className="rounded-xl w-full max-w-xs mx-auto"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 text-gradient">Meet The Developer</h2>
                  <p className="text-white/90 text-lg mb-4">
                    Hi, I'm <span className="font-bold text-primary">Mosquito Kalinz9o</span>, a 16-year-old developer from Denmark with a passion for building innovative digital solutions.
                  </p>
                  <p className="text-white/80 mb-4">
                    Despite my young age, I bring a wealth of experience in web and mobile development, having worked on numerous projects that prioritize clean code, user experience, and business goals.
                  </p>
                  <p className="text-white/80">
                    As a one-man team, I offer personalized attention to every project. I believe in transparent communication, rapid development, and delivering quality results that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section bg-background">
          <div className="container-tight">
            {isSubmitted ? (
              <div className="glass-card p-12 rounded-xl shadow-md text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gradient">Thank You!</h2>
                <p className="text-lg text-white/80 mb-6">
                  I've received your project idea and I'm excited to review it!
                  I'll get back to you within 1-2 business days to discuss
                  the next steps.
                </p>
                <p className="text-blue-400 font-medium mb-8">
                  A confirmation email has been sent to {formData.email}
                </p>
                <Button asChild variant="secondary" className="bg-primary/20 hover:bg-primary/30 text-white">
                  <a href="/">Return to Home Page</a>
                </Button>
              </div>
            ) : (
              <div className="glass-card p-8 rounded-xl shadow-md max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-gradient">Tell Me About Your Project</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white/90">Your Information</h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white/80">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white/80">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white/90">Project Details</h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="projectTitle" className="text-white/80">Project Title</Label>
                        <Input
                          id="projectTitle"
                          name="projectTitle"
                          value={formData.projectTitle}
                          onChange={handleChange}
                          placeholder="e.g., Fitness Tracking App"
                          required
                          className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectDescription" className="text-white/80">Project Description</Label>
                        <Textarea
                          id="projectDescription"
                          name="projectDescription"
                          value={formData.projectDescription}
                          onChange={handleChange}
                          placeholder="Describe your idea, target users, key features, and any other relevant details..."
                          rows={6}
                          required
                          className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Requirements */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white/90">Requirements</h3>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <Label className="text-white/80">What type of MVP do you need?</Label>
                        <RadioGroup
                          value={formData.mvpType}
                          onValueChange={(value) => handleRadioChange("mvpType", value)}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                          required
                        >
                          {mvpTypes.map((type) => (
                            <div key={type.id} className="flex items-center space-x-2">
                              <RadioGroupItem value={type.id} id={`mvp-type-${type.id}`} className="border-blue-400 text-blue-400" />
                              <Label htmlFor={`mvp-type-${type.id}`} className="cursor-pointer text-white/80">
                                {type.label}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      <div className="space-y-3">
                        <Label className="text-white/80">What's your budget range?</Label>
                        <RadioGroup
                          value={formData.budgetRange}
                          onValueChange={(value) => handleRadioChange("budgetRange", value)}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                          required
                        >
                          {budgetRanges.map((range) => (
                            <div key={range.id} className="flex items-center space-x-2">
                              <RadioGroupItem value={range.id} id={`budget-${range.id}`} className="border-blue-400 text-blue-400" />
                              <Label htmlFor={`budget-${range.id}`} className="cursor-pointer text-white/80">
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
                    className="w-full sm:w-auto bg-primary/80 hover:bg-primary text-background" 
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
