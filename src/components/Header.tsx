import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";
import zeptaroLogo from "@/assets/zeptaro-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Features", href: "#features" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-navy py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+917762038030" className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 7762038030</span>
            </a>
            <a href="mailto:zeptaroerp@gmail.com" className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">zeptaroerp@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary font-semibold animate-pulse">🎉 Special Offers Available!</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background/95 backdrop-blur-md shadow-card">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <img src={zeptaroLogo} alt="Zeptaro - Making Technology Easier" className="h-12 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
  <div key={link.name} className="relative flex flex-col items-center">
    
    {/* Special Offer badge only for Products */}
    {link.name === "Products" && (
      <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] px-2 py-[2px] rounded-full font-semibold shadow-md">
  Best Offer
</span>

    )}

    <a
      href={link.href}
      className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
    >
      {link.name}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
    </a>
  </div>
))}

            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="hero" size="lg">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground/80 hover:text-primary font-medium py-2 border-b border-border/50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button variant="hero" size="lg" className="mt-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;