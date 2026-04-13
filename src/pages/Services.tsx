import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import OurSolutionsSection from "@/components/OurSolutionsSection";
import GoogleMap from "@/components/GoogleMap";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mt-[68px] py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">Our Services</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive water treatment solutions for homes, industries, and commercial establishments.
          </p>
        </div>
      </section>
      <OurSolutionsSection />
      <GoogleMap />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
