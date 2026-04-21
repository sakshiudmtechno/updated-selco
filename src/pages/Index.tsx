import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutCompanySection from "@/components/AboutCompanySection";
import HomeSolutionsSection from "@/components/HomeSolutionsSection";
import WaterCompositionSection from "@/components/WaterCompositionSection";
import FamiliesSection from "@/components/FamiliesSection";
import ScheduleTestSection from "@/components/ScheduleTestSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import ContactFormSection from "@/components/ContactFormSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }, [hash]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <div id="about" className="reveal">
          <AboutCompanySection />
        </div>
        <div id="products" className="reveal">
          <HomeSolutionsSection />
        </div>
        <div className="reveal">
          <WaterCompositionSection />
        </div>
        <div className="reveal">
          <FamiliesSection />
        </div>
        <div id="services" className="reveal">
          <ServicesSection />
        </div>
        <div className="reveal">
          <ScheduleTestSection />
        </div>
        <div id="faq" className="reveal">
          <FAQSection />
        </div>
        <div className="reveal">
          <TestimonialsSection />
        </div>
        <div className="reveal">
          <CTABanner />
        </div>
        <div id="contact" className="reveal">
          <ContactFormSection />
        </div>
        <div className="reveal">
          <GoogleMap />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
