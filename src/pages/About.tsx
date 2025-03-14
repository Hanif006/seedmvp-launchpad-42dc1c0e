
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
    description: "I believe in moving fast and helping my clients get to market quickly to test and refine their ideas.",
    icon: Rocket,
  },
  {
    title: "Collaboration",
    description: "I work closely with founders, treating their vision with the same care and dedication as my own projects.",
    icon: Users,
  },
  {
    title: "Quality",
    description: "While I work quickly, I never compromise on delivering high-quality, reliable, and scalable solutions.",
    icon: Shield,
  },
  {
    title: "Passion",
    description: "I'm genuinely excited about each project and committed to helping founders succeed in their startup journey.",
    icon: Heart,
  },
  {
    title: "Results-Oriented",
    description: "I focus on outcomes, not just outputs, ensuring that my work drives real business value for my clients.",
    icon: Target,
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - SeedMVP</title>
        <meta
          name="description"
          content="Learn about Hanif Anuar, his mission, values, and experience in MVP development."
        />
      </Helmet>
      <div className="pt-24">
        {/* Hero Section */}
        <div className="bg-background text-white py-16">
          <div className="container-tight">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80">
                I'm a passionate builder, designer, and strategist 
                helping startups bring their ideas to life.
              </p>
            </div>
          </div>
        </div>

        {/* My Story */}
        <section className="section bg-background">
          <div className="container-tight">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">My Story</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Hi, I'm Hanif Anuar, a 16-year-old developer from Denmark. Despite my young age, I've developed a strong passion for creating digital solutions that solve real problems.
                  </p>
                  <p>
                    SeedMVP started as my personal mission to help entrepreneurs and startups turn their ideas into reality without the usual technical barriers and high development costs.
                  </p>
                  <p>
                    As a solo developer, I offer personalized attention to every project I take on. My approach combines technical expertise with strategic thinking to create MVPs that not only work well but also help validate business models and attract investment.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/ac0521fd-f6c5-464e-95af-e684d1fcd5cf.png" 
                  alt="Hanif Anuar" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* My Values */}
        <section className="section bg-muted">
          <div className="container-tight">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-foreground">My Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide my work and relationships with clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Experience */}
        <section className="section bg-background">
          <div className="container-tight">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-foreground">My Experience</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Despite my young age, I've developed skills and expertise in various areas of web and app development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Technical Skills</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Front-end: React, Next.js, Vue.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Back-end: Node.js, Express, Firebase</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Mobile: React Native, Flutter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Database: MongoDB, MySQL, Firestore</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>UI/UX: Figma, Adobe XD</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Project Experience</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>E-commerce platforms for small businesses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Mobile apps for service-based startups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>SaaS platforms with subscription models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Community platforms and marketplaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>AI-enhanced web applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-muted">
          <div className="container-tight">
            <div className="glass-card p-8 md:p-12 text-center rounded-xl">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Ready to Work Together?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
                Let's bring your vision to life. Start by sharing your idea with me today.
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
        </section>
      </div>
    </>
  );
};

export default About;
