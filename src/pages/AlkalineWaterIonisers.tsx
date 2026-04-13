import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleMap from "@/components/GoogleMap";
import AboutCompanySection from "@/components/AboutCompanySection";
import ProductPageTestimonials from "@/components/ProductPageTestimonials";
import OurSolutionsSection from "@/components/OurSolutionsSection";
import { Droplets, Heart, Leaf, CheckCircle } from "lucide-react";

const AlkalineWaterIonisers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mt-[68px] py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">Alkaline Water Ionisers</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Specialized ionisers that increase water pH levels, providing alkaline-rich drinking water for hydration, detoxification, and overall wellness.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-body italic">SELCO Alkaline Ionisers</span>
              <div className="w-10 h-0.5 bg-primary my-3" />
              <h2 className="font-heading font-extrabold text-3xl text-heading mb-6">Alkaline Water for Better Health</h2>
              <p className="text-body leading-relaxed mb-6">
                SELCO Alkaline Water Ionisers elevate your water's pH level, enriching it with essential minerals and antioxidants. Experience improved hydration, enhanced detoxification, and better overall wellness with every glass.
              </p>
              <ul className="space-y-3">
                {["Raises water pH for alkaline-rich hydration", "Rich in antioxidants & essential minerals", "Supports detoxification & wellness", "Eco-friendly & chemical-free", "Backed by 30+ years of expertise"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-body text-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Droplets, title: "High pH Water", desc: "Optimal alkaline levels" },
                { icon: Heart, title: "Health Benefits", desc: "Hydration & detox support" },
                { icon: Leaf, title: "Eco-Friendly", desc: "100% chemical-free" },
                { icon: CheckCircle, title: "Trusted Brand", desc: "30+ years expertise" },
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
          <h2 className="font-heading font-extrabold text-3xl text-heading mb-4">Get Your Alkaline Water Ioniser</h2>
          <p className="text-body mb-6">Contact us today for a free consultation</p>
          <a href="https://wa.me/919826155580?text=Hi%2C%20I%20am%20interested%20in%20Alkaline%20Water%20Ionisers" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-3 rounded font-heading font-semibold text-sm hover:opacity-90 transition-opacity inline-block">
            Contact on WhatsApp
          </a>
        </div>
      </section>

      <OurSolutionsSection exclude="/alkaline-water-ionisers" />
      <AboutCompanySection />
      <ProductPageTestimonials />
      <GoogleMap />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AlkalineWaterIonisers;
