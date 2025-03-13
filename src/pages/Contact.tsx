
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact - SeedMVP</title>
        <meta
          name="description"
          content="Get in touch with SeedMVP for your MVP development needs. We're here to help you bring your startup idea to life."
        />
      </Helmet>
      <div className="pt-24">
        {/* Hero Section */}
        <div className="bg-seedmvp-blue text-white py-16">
          <div className="container-tight">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80">
                Have questions or ready to discuss your project? 
                We're here to help you bring your idea to life.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="section">
          <div className="container-tight">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  <p className="text-gray-600 mb-8">
                    Have a question or want to discuss your project? 
                    Fill out the form or contact us directly through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-seedmvp-blue/10 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-seedmvp-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Our Location</h3>
                      <p className="text-gray-600">
                        123 Startup Street, Tech Valley<br />
                        San Francisco, CA 90210
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-seedmvp-blue/10 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-seedmvp-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <a 
                        href="mailto:info@seedmvp.com" 
                        className="text-seedmvp-blue hover:text-seedmvp-blue-dark transition-colors"
                      >
                        info@seedmvp.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-seedmvp-blue/10 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-seedmvp-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <a 
                        href="tel:+1234567890" 
                        className="text-seedmvp-blue hover:text-seedmvp-blue-dark transition-colors"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
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
                        <label htmlFor="email" className="text-sm font-medium">
                          Your Email
                        </label>
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
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or question..."
                        rows={6}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full sm:w-auto" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12">
          <div className="container-tight">
            <div className="bg-seedmvp-gray-light h-96 rounded-xl overflow-hidden">
              {/* This would be replaced with an actual map component in production */}
              <div className="h-full w-full flex items-center justify-center bg-seedmvp-gray-light">
                <MapPin className="h-12 w-12 text-seedmvp-blue opacity-30" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
