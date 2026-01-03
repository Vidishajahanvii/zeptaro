import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7762038030",
      href: "tel:+917762038030",
    },
    {
      icon: Mail,
      label: "Email",
      value: "zeptaroerp@gmail.com",
      href: "mailto:zeptaroerp@gmail.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Ward No. 7, Vil - Godhwa, Post - Pataura, P.s - Motihari, Dis - East Champaran, Bihar - 845401",
      href: "#",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about our products? Want a demo? Reach out to us and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 7762038030"
                  className="bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  required
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
  <span className="block text-sm font-semibold text-muted-foreground mb-1">
    {item.label}
  </span>

  {item.label === "Address" ? (
    <p className="text-sm leading-relaxed text-gray-600 max-w-md">
      Ward No. 7, Vil - Godhwa, Post - Pataura, P.S - Motihari,<br />
      Dist - East Champaran, Bihar – 845401
    </p>
  ) : (
   <span className="font-medium text-card-foreground group-hover:text-violet-600 transition-colors">
  {item.value}
</span>

  )}
</div>

                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-card h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8!2d84.9!3d26.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDM5JzAwLjAiTiA4NMKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zeptaro Location - Motihari, Bihar"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;