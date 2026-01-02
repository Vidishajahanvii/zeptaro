import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Principal, Delhi Public School",
    content: "Zeptaro's digital boards have completely transformed our classrooms. The interactive features keep students engaged, and the quality is exceptional.",
    rating: 5,
    avatar: "RK",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "IT Head, St. Xavier's College",
    content: "The 360° cameras are perfect for our hybrid learning setup. Crystal clear video quality and the auto-tracking feature is a game-changer.",
    rating: 5,
    avatar: "PS",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Director, ABC International School",
    content: "Outstanding customer service and quick installation. Our teachers love the easy-to-use interface. Highly recommended for all schools!",
    rating: 5,
    avatar: "AP",
  },
  {
    id: 4,
    name: "Dr. Sunita Verma",
    role: "HOD, Engineering College",
    content: "We've equipped all our labs with Zeptaro products. The warranty support is excellent, and the products are built to last.",
    rating: 5,
    avatar: "SV",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Our Happy <span className="text-gradient">Customers</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Hear what educators and institutions across India have to say about their experience with Zeptaro.
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote icon */}
            <Quote className="absolute -top-8 left-8 w-16 h-16 text-primary/20" />

            {/* Testimonial card */}
            <div className="bg-navy-light/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary/20">
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div>
                  <h4 className="text-lg font-bold text-primary-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary/80">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrev}
                className="rounded-full border-primary/30 text-primary-foreground hover:bg-primary/20 hover:border-primary"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full border-primary/30 text-primary-foreground hover:bg-primary/20 hover:border-primary"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;