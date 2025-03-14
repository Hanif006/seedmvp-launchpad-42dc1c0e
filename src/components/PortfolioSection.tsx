
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { 
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

// Portfolio project data
const portfolioProjects = [
  {
    id: 1,
    title: "HealthTech Dashboard",
    description: "A modern dashboard for healthcare professionals with real-time patient monitoring.",
    image: "https://placehold.co/600x400/10B981/FFFFFF/png?text=HealthTech",
    tags: ["React", "TailwindCSS", "TypeScript"],
    link: "#",
    details: "Designed and implemented a comprehensive healthcare dashboard that allows medical professionals to monitor patient vitals in real-time, with custom alert systems and intuitive data visualization."
  },
  {
    id: 2,
    title: "EduLearn Platform",
    description: "Online learning platform with interactive courses and real-time progress tracking.",
    image: "https://placehold.co/600x400/4ADE80/FFFFFF/png?text=EduLearn",
    tags: ["Next.js", "TailwindCSS", "Firebase"],
    link: "#",
    details: "Built a feature-rich e-learning platform that offers interactive course materials, progress tracking, and personalized learning paths for students of all ages."
  },
  {
    id: 3,
    title: "FinTech Mobile App",
    description: "Mobile application for personal finance management with budgeting tools.",
    image: "https://placehold.co/600x400/10B981/FFFFFF/png?text=FinTech",
    tags: ["React Native", "TypeScript", "Redux"],
    link: "#",
    details: "Developed a comprehensive mobile finance application with budget planning, expense tracking, and investment monitoring features to help users achieve their financial goals."
  },
  {
    id: 4,
    title: "E-commerce Solution",
    description: "Comprehensive e-commerce platform with inventory management and payment processing.",
    image: "https://placehold.co/600x400/4ADE80/FFFFFF/png?text=E-commerce",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    details: "Created a scalable e-commerce solution with inventory management, secure payment processing, and detailed analytics to help businesses grow their online presence."
  },
  {
    id: 5,
    title: "Travel Booking App",
    description: "A seamless travel booking experience with personalized recommendations.",
    image: "https://placehold.co/600x400/10B981/FFFFFF/png?text=TravelApp",
    tags: ["Vue.js", "Express", "PostgreSQL"],
    link: "#",
    details: "Engineered a travel booking platform that offers personalized trip recommendations, seamless booking experiences, and real-time updates for travelers on the go."
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "Comprehensive analytics dashboard for social media management.",
    image: "https://placehold.co/600x400/4ADE80/FFFFFF/png?text=SocialDash",
    tags: ["React", "GraphQL", "AWS"],
    link: "#",
    details: "Designed an intuitive social media management dashboard that provides real-time analytics, scheduled posting, and engagement tracking across multiple platforms."
  },
];

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    // Observer for the section title
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          titleObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observer for the section
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Start observing
    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      titleObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <section className="section bg-background overflow-hidden py-20" ref={sectionRef}>
      <div className="container-tight">
        <div 
          ref={titleRef} 
          className="text-center mb-16 opacity-0"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out some of the projects we've delivered for our clients.
          </p>
        </div>

        {/* Desktop View with Carousel */}
        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {portfolioProjects.map((project) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 transition-all duration-300">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Card className="glass-card rounded-lg overflow-hidden h-full transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                          <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map(tag => (
                              <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button variant="ghost" asChild className="flex items-center gap-2 text-primary hover:bg-primary/10 hover:text-primary-foreground transition-colors duration-300">
                            <Link to={project.link}>
                              View Project <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-4">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.details}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8 gap-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 left-0 h-10 w-10 rounded-full bg-background border border-primary/20 hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="relative inset-0 translate-y-0 right-0 h-10 w-10 rounded-full bg-background border border-primary/20 hover:bg-primary hover:text-primary-foreground" />
            </div>
          </Carousel>
        </div>

        {/* Mobile View with Stacked Cards */}
        <div className="block md:hidden space-y-6">
          {portfolioProjects.slice(0, 4).map((project, index) => (
            <div
              key={project.id}
              className="glass-card rounded-lg overflow-hidden transition-all duration-500 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" asChild className="flex items-center gap-2 text-primary hover:bg-primary/10">
                  <Link to={project.link}>
                    View Project <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <Button asChild variant="secondary" className="px-8 py-6 text-lg hover:scale-105 transition-transform">
            <Link to="/services">See All Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
