import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactFormSection from "@/components/ContactFormSection";
import GoogleMap from "@/components/GoogleMap";

const Contacts = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mt-[68px] py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Get in touch with SELCO for water treatment solutions, product enquiries, and installation support.
          </p>
        </div>
      </section>
      <ContactFormSection />
      <GoogleMap />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contacts;
