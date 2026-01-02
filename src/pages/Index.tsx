import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Zeptaro Technologies | Digital Boards & 360° Cameras for Education</title>
        <meta
          name="description"
          content="Zeptaro is India's trusted EdTech partner offering premium digital boards, 360° cameras, and smart classroom solutions. Transform your classroom with our cutting-edge technology."
        />
        <meta name="keywords" content="digital board, interactive display, 360 camera, smart classroom, educational technology, EdTech India, Zeptaro" />
        <link rel="canonical" href="https://zeptaro.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ProductsSection />
          <FeaturesSection />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;