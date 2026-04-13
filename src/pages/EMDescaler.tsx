import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleMap from "@/components/GoogleMap";
import AboutCompanySection from "@/components/AboutCompanySection";
import ProductPageTestimonials from "@/components/ProductPageTestimonials";
import OurSolutionsSection from "@/components/OurSolutionsSection";
import { Zap, Shield, CheckCircle, Settings } from "lucide-react";
import emDescaler from "@/assets/em-descaler.jpg";

const EMDescaler = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mt-[68px] py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">Electro-Magnetic Descaler (C9-EM)</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Computerized electromagnetic water conditioning system that prevents and removes limescale buildup without chemicals or salt.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-body italic">SELCO CLEAR WATER C9-EM</span>
              <div className="w-10 h-0.5 bg-primary my-3" />
              <h2 className="font-heading font-extrabold text-3xl text-heading mb-6">Advanced Electromagnetic Descaling</h2>
              <p className="text-body leading-relaxed mb-6">
                The SELCO C9-EM Computerized Electro-Magnetic Descaler uses advanced electromagnetic pulse technology to alter the crystallization of calcium and magnesium in water. This prevents scale formation in pipelines, taps, geysers, cooling towers, and all water-using equipment — completely maintenance-free and chemical-free.
              </p>
              <ul className="space-y-3">
                {["Computerized electromagnetic pulse technology", "Prevents & removes existing limescale", "No salt, no chemicals, no maintenance", "Suitable for domestic & industrial pipelines", "Protects geysers, cooling towers & boilers", "30+ years of proven technology by SELCO"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-body text-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-6">
              <img src={emDescaler} alt="SELCO C9-EM Electro-Magnetic Descaler" className="w-full max-w-md rounded-lg shadow-lg" loading="lazy" />
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {[
                  { icon: Zap, title: "EM Pulse Tech", desc: "Computerized frequency control" },
                  { icon: Shield, title: "Scale Protection", desc: "Prevents & removes scale" },
                  { icon: Settings, title: "Zero Maintenance", desc: "Fully automatic operation" },
                  { icon: CheckCircle, title: "Chemical Free", desc: "No salt or resins needed" },
                ].map((f) => (
                  <div key={f.title} className="bg-section-bg rounded-lg p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <f.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-heading text-xs mb-1">{f.title}</h3>
                    <p className="text-body text-[11px]">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-extrabold text-3xl text-heading mb-4">Interested in C9-EM Descaler?</h2>
          <p className="text-body mb-6">Contact us today for a free consultation and site assessment</p>
          <a href="https://wa.me/919826155580?text=Hi%2C%20I%20am%20interested%20in%20the%20C9-EM%20Electro-Magnetic%20Descaler" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-3 rounded font-heading font-semibold text-sm hover:opacity-90 transition-opacity inline-block">
            Contact on WhatsApp
          </a>
        </div>
      </section>

      <OurSolutionsSection exclude="/em-descaler" />
      <AboutCompanySection />
      <ProductPageTestimonials />
      <GoogleMap />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EMDescaler;
