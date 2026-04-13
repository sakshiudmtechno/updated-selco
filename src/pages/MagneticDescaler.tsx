import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleMap from "@/components/GoogleMap";
import AboutCompanySection from "@/components/AboutCompanySection";
import ProductPageTestimonials from "@/components/ProductPageTestimonials";
import OurSolutionsSection from "@/components/OurSolutionsSection";
import { Shield, CheckCircle, Settings, Droplets } from "lucide-react";
import magneticDescaler from "@/assets/magnetic-descaler.jpg";

const MagneticDescaler = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mt-[68px] py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">Magnetic Descaler (C9-MG)</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Permanent magnetic water conditioning system that softens hard water naturally — no electricity, no chemicals, no maintenance.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-body italic">SELCO CLEAR WATER C9-MG</span>
              <div className="w-10 h-0.5 bg-primary my-3" />
              <h2 className="font-heading font-extrabold text-3xl text-heading mb-6">Permanent Magnetic Descaling</h2>
              <p className="text-body leading-relaxed mb-6">
                The SELCO C9-MG Magnetic Descaler uses powerful permanent magnets to condition hard water as it flows through the unit. The magnetic field alters the behavior of dissolved minerals, preventing them from forming hard scale deposits on pipes, taps, and appliances. It requires no electricity, no salt, and zero maintenance — a truly green solution.
              </p>
              <ul className="space-y-3">
                {["Powerful permanent magnet technology", "No electricity or power required", "No salt & no chemicals — eco-friendly", "Completely maintenance-free for life", "Easy inline installation on any pipe", "Best for domestic & industrial water lines"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-body text-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-6">
              <img src={magneticDescaler} alt="SELCO C9-MG Magnetic Descaler" className="w-full max-w-md rounded-lg shadow-lg" loading="lazy" />
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {[
                  { icon: Shield, title: "Permanent Magnets", desc: "Lifetime magnetic strength" },
                  { icon: Droplets, title: "Soft Water", desc: "Prevents hard scale deposits" },
                  { icon: Settings, title: "Zero Maintenance", desc: "Install and forget" },
                  { icon: CheckCircle, title: "No Electricity", desc: "Completely passive system" },
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
          <h2 className="font-heading font-extrabold text-3xl text-heading mb-4">Get Your C9-MG Magnetic Descaler</h2>
          <p className="text-body mb-6">Contact us for pricing and installation details</p>
          <a href="https://wa.me/919826155580?text=Hi%2C%20I%20am%20interested%20in%20the%20C9-MG%20Magnetic%20Descaler" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-3 rounded font-heading font-semibold text-sm hover:opacity-90 transition-opacity inline-block">
            Contact on WhatsApp
          </a>
        </div>
      </section>

      <OurSolutionsSection exclude="/magnetic-descaler" />
      <AboutCompanySection />
      <ProductPageTestimonials />
      <GoogleMap />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MagneticDescaler;
