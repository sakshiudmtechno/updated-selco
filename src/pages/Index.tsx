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
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutCompanySection />
      <HomeSolutionsSection />
      <WaterCompositionSection />
      <FamiliesSection />
      <ScheduleTestSection />
      <FAQSection />
      <TestimonialsSection />
      <CTABanner />
      <ContactFormSection />
      <GoogleMap />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
