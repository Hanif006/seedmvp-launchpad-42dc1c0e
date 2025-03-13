
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "SeedMVP helped us turn our concept into a fully functional product in just 6 weeks. Their team was professional, responsive, and truly understood our vision.",
    author: "Sarah Johnson",
    company: "FinTech Innovations",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    quote: "Working with SeedMVP was a game-changer for our startup. We went from idea to a working MVP that impressed our investors and helped us secure funding.",
    author: "Michael Chen",
    company: "HealthTech Solutions",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    quote: "The no-code solution that SeedMVP built for us saved us thousands in development costs and got us to market 3x faster than traditional development.",
    author: "Jessica Rodriguez",
    company: "EduLearn Platform",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-white">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with SeedMVP.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-seedmvp-gray rounded-xl p-8 md:p-12 shadow-md">
            <div className="flex justify-center mb-6">
              <Quote className="h-12 w-12 text-seedmvp-blue opacity-20" />
            </div>
            <blockquote className="text-xl md:text-2xl text-center text-gray-800 mb-6">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex flex-col items-center">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].author} 
                className="w-16 h-16 rounded-full mb-4 border-2 border-seedmvp-blue"
              />
              <div className="text-center">
                <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-seedmvp-blue" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 bg-white rounded-full shadow-md p-2 text-gray-600 hover:text-seedmvp-blue focus:outline-none focus:ring-2 focus:ring-seedmvp-blue"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 bg-white rounded-full shadow-md p-2 text-gray-600 hover:text-seedmvp-blue focus:outline-none focus:ring-2 focus:ring-seedmvp-blue"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
