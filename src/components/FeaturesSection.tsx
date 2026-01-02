import { Shield, Headphones, Truck, Award, Clock, Wrench } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "2 Year Warranty",
    description: "Comprehensive warranty coverage on all products with free repairs and replacements.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support to help you with any queries or technical issues.",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free pan-India delivery with secure packaging and real-time tracking.",
  },
  {
    icon: Award,
    title: "Quality Certified",
    description: "ISO certified products meeting international quality and safety standards.",
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description: "Professional installation within 48 hours of delivery by trained technicians.",
  },
  {
    icon: Wrench,
    title: "Easy Returns",
    description: "Hassle-free 15-day return policy with full refund guarantee.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Benefits of Choosing <span className="text-gradient">Zeptaro</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're committed to providing the best products and services to transform your educational experience.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-card-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;