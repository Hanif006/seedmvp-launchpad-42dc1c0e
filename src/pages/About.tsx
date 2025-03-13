
import { 
  Rocket, 
  Users, 
  Heart, 
  Target, 
  Shield 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const values = [
  {
    title: "Speed",
    description: "We believe in moving fast and helping our clients get to market quickly to test and refine their ideas.",
    icon: Rocket,
  },
  {
    title: "Collaboration",
    description: "We work closely with founders, treating their vision with the same care and dedication as our own projects.",
    icon: Users,
  },
  {
    title: "Quality",
    description: "While we work quickly, we never compromise on delivering high-quality, reliable, and scalable solutions.",
    icon: Shield,
  },
  {
    title: "Passion",
    description: "We're genuinely excited about each project and committed to helping founders succeed in their startup journey.",
    icon: Heart,
  },
  {
    title: "Results-Oriented",
    description: "We focus on outcomes, not just outputs, ensuring that our work drives real business value for our clients.",
    icon: Target,
  },
];

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Serial entrepreneur with 15+ years of experience in product development and startup ecosystems.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Samantha Chen",
    role: "Chief Technology Officer",
    bio: "Former senior developer at Google with expertise in scalable architecture and emerging technologies.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Rodriguez",
    role: "Design Director",
    bio: "Award-winning UX/UI designer passionate about creating intuitive, user-centered digital experiences.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Priya Patel",
    role: "Product Strategy Lead",
    bio: "Product strategist with experience helping 50+ startups refine their MVPs and go-to-market strategies.",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - SeedMVP</title>
        <meta
          name="description"
          content="Learn about SeedMVP, our mission, values, and the team behind our MVP development agency."
        />
      </Helmet>
      <div className="pt-24">
        {/* Hero Section */}
        <div className="bg-seedmvp-blue text-white py-16">
          <div className="container-tight">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">About SeedMVP</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80">
                We're a team of passionate builders, designers, and strategists 
                helping startups bring their ideas to life.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <section className="section">
          <div className="container-tight">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    SeedMVP was born from a simple observation: too many great startup ideas never make it to market because of technical barriers and development costs.
                  </p>
                  <p>
                    Founded in 2018, we set out to change that by creating a studio specifically designed to help founders quickly transform their concepts into functional MVPs that can validate business models and attract investment.
                  </p>
                  <p>
                    Since then, we've worked with over 100 startups across various industries, helping them launch, iterate, and grow. Our team brings together expertise in development, design, and product strategy to deliver solutions that work for early-stage companies.
                  </p>
                </div>
              </div>
              <div className="bg-seedmvp-gray-light rounded-xl p-8">
                <div className="aspect-video bg-white rounded-lg shadow-md"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section bg-seedmvp-gray-light">
          <div className="container-tight">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide our work and relationships with clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-seedmvp-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-seedmvp-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="section">
          <div className="container-tight">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The experts behind SeedMVP who will help bring your vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-seedmvp-blue font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-seedmvp-gray-light">
          <div className="container-tight">
            <div className="bg-seedmvp-blue text-white rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
                Let's bring your vision to life. Start by sharing your idea with us today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="bg-white text-seedmvp-blue hover:bg-seedmvp-gray"
                  asChild
                >
                  <Link to="/submit-idea">Submit Your Idea</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
