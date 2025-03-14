
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Portfolio project data
const portfolioProjects = [
  {
    id: 1,
    title: "HealthTech Dashboard",
    description: "A modern dashboard for healthcare professionals with real-time patient monitoring.",
    image: "https://placehold.co/600x400/10B981/FFFFFF/png?text=HealthTech",
    tags: ["React", "TailwindCSS", "TypeScript"],
    link: "#"
  },
  {
    id: 2,
    title: "EduLearn Platform",
    description: "Online learning platform with interactive courses and real-time progress tracking.",
    image: "https://placehold.co/600x400/4ADE80/FFFFFF/png?text=EduLearn",
    tags: ["Next.js", "TailwindCSS", "Firebase"],
    link: "#"
  },
  {
    id: 3,
    title: "FinTech Mobile App",
    description: "Mobile application for personal finance management with budgeting tools.",
    image: "https://placehold.co/600x400/10B981/FFFFFF/png?text=FinTech",
    tags: ["React Native", "TypeScript", "Redux"],
    link: "#"
  },
  {
    id: 4,
    title: "E-commerce Solution",
    description: "Comprehensive e-commerce platform with inventory management and payment processing.",
    image: "https://placehold.co/600x400/4ADE80/FFFFFF/png?text=E-commerce",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
];

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    // Observer for the section title
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observer for each project card
    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add animation with staggered delay based on index
          setTimeout(() => {
            entry.target.classList.add('animate-scale-in');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100');
          }, index * 150);
          projectObserver.unobserve(entry.target);
        }
      });
    }, { ...observerOptions, threshold: 0.15 });

    // Start observing
    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    projectRefs.current.forEach(ref => {
      if (ref) projectObserver.observe(ref);
    });

    return () => {
      sectionObserver.disconnect();
      projectObserver.disconnect();
    };
  }, []);

  return (
    <section className="section bg-background overflow-hidden py-20">
      <div className="container-tight">
        <div 
          ref={sectionRef} 
          className="text-center mb-16 opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out some of the projects we've delivered for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="glass-card rounded-lg overflow-hidden transition-all duration-500 opacity-0 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" asChild className="flex items-center gap-2 text-primary">
                  <Link to={project.link}>
                    View Project <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center opacity-0" ref={el => projectRefs.current[4] = el}>
          <Button asChild variant="secondary">
            <Link to="/services">See All Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
