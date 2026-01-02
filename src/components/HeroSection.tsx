import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import digitalBoard from "@/assets/digital-board.png";
import camera360 from "@/assets/camera-360.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary mb-6 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              India's Trusted EdTech Partner
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Transform Your{" "}
              <span className="text-gradient">Classroom</span>
              <br />
              With Smart Technology
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Premium Digital Boards & 360° Cameras for modern education. 
              Empower teachers, engage students, and revolutionize learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "5000+", label: "Happy Customers" },
                { value: "500+", label: "Schools" },
                { value: "15+", label: "States" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Products showcase */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Digital Board */}
              <div className="animate-float">
                <img
                  src={digitalBoard}
                  alt="Zeptaro Digital Board"
                  className="w-full max-w-lg mx-auto drop-shadow-2xl"
                />
              </div>

              {/* Camera floating */}
              <div className="absolute -bottom-8 -left-8 w-48 animate-float" style={{ animationDelay: "1s" }}>
                <img
                  src={camera360}
                  alt="Zeptaro 360 Camera"
                  className="w-full drop-shadow-xl"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-primary/20 blur-xl" />
              <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;