import { Target, Eye, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "5000+", label: "Happy Customers" },
  { icon: Building2, value: "500+", label: "Schools & Colleges" },
  { icon: Target, value: "15+", label: "States Covered" },
  { icon: Eye, value: "10+", label: "Years Experience" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transforming Education with <span className="text-gradient">Smart Technology</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Zeptaro Technologies is India's leading provider of educational technology solutions. 
              We specialize in high-quality digital boards, 360° cameras, and audio-visual equipment 
              designed specifically for modern classrooms.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our mission is to make learning more interactive, engaging, and accessible for students 
              and teachers across the country. With a commitment to quality and customer satisfaction, 
              we've helped thousands of educational institutions embrace the digital revolution.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Learn More About Us
              </Button>
              <Button variant="outline" size="lg">
                Our Story
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-glow transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-20">
          <p className="text-center text-muted-foreground mb-8">Trusted by leading institutions across India</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {["DPS", "St. Xavier's", "Kendriya Vidyalaya", "IIT Delhi", "AIIMS", "NIT"].map((name) => (
              <div key={name} className="text-2xl font-bold text-muted-foreground/50">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;