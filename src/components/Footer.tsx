import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import zeptaroLogo from "@/assets/zeptaro-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Features", href: "#features" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const products = [
    { name: "Digital Boards", href: "#products" },
    { name: "360° Cameras", href: "#products" },
    { name: "Microphones", href: "#products" },
    { name: "Smart Podiums", href: "#products" },
    { name: "Accessories", href: "#products" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-navy pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-primary/20">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center mb-6">
              <img src={zeptaroLogo} alt="Zeptaro - Making Technology Easier" className="h-14 w-auto" />
            </a>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              India's trusted partner for educational technology solutions. Transforming classrooms with smart digital boards and cameras.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-6">Products</h4>
            <ul className="space-y-3">
              {products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-primary-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+917762038030" className="flex items-start gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+91 7762038030</span>
                </a>
              </li>
              <li>
                <a href="mailto:zeptaroerp@gmail.com" className="flex items-start gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>zeptaroerp@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/70">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Ward No. 7, Vil - Godhwa, Post - Pataura, P.s - Motihari, Dis - East Champaran, Bihar - 845401</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Zeptaro Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;