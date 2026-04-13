import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutCompanySection from "@/components/AboutCompanySection";
import ProductPageTestimonials from "@/components/ProductPageTestimonials";
import GoogleMap from "@/components/GoogleMap";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mt-[68px] py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">About Us</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Learn more about SELCO — over 30 years of pioneering chemical-free water treatment technology.
          </p>
        </div>
      </section>
      <AboutCompanySection />
      <ProductPageTestimonials />
      <GoogleMap />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
