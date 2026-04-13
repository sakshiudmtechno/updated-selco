import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleMap from "@/components/GoogleMap";
import AboutCompanySection from "@/components/AboutCompanySection";
import ProductPageTestimonials from "@/components/ProductPageTestimonials";
import OurSolutionsSection from "@/components/OurSolutionsSection";
import { Droplets, Shield, CheckCircle, Heart } from "lucide-react";
import showerFilter from "@/assets/shower-filter.jpg";

const ShowerFilter = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mt-[68px] py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">Shower & Tap Filter</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Multi-layer filtration system for showers and taps that removes chlorine, sediments, and impurities for healthier skin and hair.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-body italic">SELCO Shower & Tap Filters</span>
              <div className="w-10 h-0.5 bg-primary my-3" />
              <h2 className="font-heading font-extrabold text-3xl text-heading mb-6">Clean Water for Skin & Hair</h2>
              <p className="text-body leading-relaxed mb-6">
                SELCO Shower & Tap Filters use advanced multi-layer filtration beads — including KDF, calcium sulfite, activated carbon, and mineral stones — to remove chlorine, heavy metals, sediments, and odor from your bathing water. Enjoy softer skin, healthier hair, and a refreshing shower experience every day.
              </p>
              <ul className="space-y-3">
                {["Multi-layer filtration with mineral beads", "Removes chlorine, heavy metals & sediments", "Healthier skin & stronger hair", "Easy installation on any shower or tap", "Replaceable filter cartridge", "Compact & stylish design"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-body text-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-6">
              <img src={showerFilter} alt="SELCO Shower & Tap Filter" className="w-full max-w-md rounded-lg shadow-lg" loading="lazy" />
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {[
                  { icon: Droplets, title: "Multi-Layer", desc: "Advanced bead filtration" },
                  { icon: Shield, title: "Removes Chlorine", desc: "Protects skin & hair" },
                  { icon: Heart, title: "Health Benefits", desc: "Softer skin, stronger hair" },
                  { icon: CheckCircle, title: "Easy Install", desc: "Fits any shower or tap" },
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
          <h2 className="font-heading font-extrabold text-3xl text-heading mb-4">Get Your Shower Filter Today</h2>
          <p className="text-body mb-6">Contact us for pricing and availability</p>
          <a href="https://wa.me/919826155580?text=Hi%2C%20I%20am%20interested%20in%20the%20Shower%20%26%20Tap%20Filter" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-3 rounded font-heading font-semibold text-sm hover:opacity-90 transition-opacity inline-block">
            Contact on WhatsApp
          </a>
        </div>
      </section>

      <OurSolutionsSection exclude="/shower-filter" />
      <AboutCompanySection />
      <ProductPageTestimonials />
      <GoogleMap />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ShowerFilter;
