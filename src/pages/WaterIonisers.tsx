import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleMap from "@/components/GoogleMap";
import AboutCompanySection from "@/components/AboutCompanySection";
import ProductPageTestimonials from "@/components/ProductPageTestimonials";
import OurSolutionsSection from "@/components/OurSolutionsSection";
import { Droplets, Zap, Shield, CheckCircle } from "lucide-react";

const WaterIonisers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mt-[68px] py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">Water Ionisers</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Advanced systems designed to improve water quality by altering its molecular structure, delivering healthier and better-tasting drinking water.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-body italic">SELCO Water Ionisers</span>
              <div className="w-10 h-0.5 bg-primary my-3" />
              <h2 className="font-heading font-extrabold text-3xl text-heading mb-6">Transform Your Water Quality</h2>
              <p className="text-body leading-relaxed mb-6">
                SELCO Water Ionisers use advanced electrolysis technology to restructure water molecules, providing you with ionised water that supports better hydration, improved taste, and overall wellness.
              </p>
              <ul className="space-y-3">
                {["Advanced electrolysis technology", "Improved hydration & taste", "Chemical-free process", "Energy-efficient operation", "Easy installation & maintenance-free"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-body text-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Droplets, title: "Pure Water", desc: "Removes impurities at molecular level" },
                { icon: Zap, title: "Smart Tech", desc: "Advanced electrolysis system" },
                { icon: Shield, title: "Safe & Reliable", desc: "100% chemical-free technology" },
                { icon: CheckCircle, title: "Easy Use", desc: "Maintenance-free operation" },
              ].map((f) => (
                <div key={f.title} className="bg-section-bg rounded-lg p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <f.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-heading text-sm mb-1">{f.title}</h3>
                  <p className="text-body text-xs">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-extrabold text-3xl text-heading mb-4">Interested in Water Ionisers?</h2>
          <p className="text-body mb-6">Contact us today for a free consultation</p>
          <a href="https://wa.me/919826155580?text=Hi%2C%20I%20am%20interested%20in%20Water%20Ionisers" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-3 rounded font-heading font-semibold text-sm hover:opacity-90 transition-opacity inline-block">
            Contact on WhatsApp
          </a>
        </div>
      </section>

      <OurSolutionsSection exclude="/water-ionisers" />
      <AboutCompanySection />
      <ProductPageTestimonials />
      <GoogleMap />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WaterIonisers;
