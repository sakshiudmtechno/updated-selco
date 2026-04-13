import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleMap from "@/components/GoogleMap";
import AboutCompanySection from "@/components/AboutCompanySection";
import ProductPageTestimonials from "@/components/ProductPageTestimonials";
import OurSolutionsSection from "@/components/OurSolutionsSection";
import { Shield, CheckCircle, Settings, Droplets } from "lucide-react";
import scaleExtractor from "@/assets/scale-extractor.jpg";

const ScaleExtractor = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mt-[68px] py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-4">Scale Extractor Softener (C9-SX)</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Industrial-grade scale extraction and water softening system that removes existing scale deposits and prevents new buildup.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-body italic">SELCO CLEAR WATER C9-SX</span>
              <div className="w-10 h-0.5 bg-primary my-3" />
              <h2 className="font-heading font-extrabold text-3xl text-heading mb-6">Scale Extraction & Softening</h2>
              <p className="text-body leading-relaxed mb-6">
                The SELCO C9-SX Scale Extractor Softener is designed to actively extract existing limescale deposits from pipelines while simultaneously conditioning incoming water. Made from high-grade stainless steel, it is built for long-term use in both domestic and industrial settings — providing soft, scale-free water without chemicals.
              </p>
              <ul className="space-y-3">
                {["Extracts existing scale from pipelines", "Prevents new limescale formation", "High-grade stainless steel construction", "No chemicals, no salt, no electricity", "Suitable for homes, hotels & industries", "Long-lasting & completely maintenance-free"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-body text-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-6">
              <img src={scaleExtractor} alt="SELCO C9-SX Scale Extractor Softener" className="w-full max-w-md rounded-lg shadow-lg" loading="lazy" />
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {[
                  { icon: Droplets, title: "Scale Extraction", desc: "Removes existing deposits" },
                  { icon: Shield, title: "Stainless Steel", desc: "Industrial-grade build" },
                  { icon: Settings, title: "Zero Maintenance", desc: "No servicing needed" },
                  { icon: CheckCircle, title: "Chemical Free", desc: "100% eco-friendly" },
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
          <h2 className="font-heading font-extrabold text-3xl text-heading mb-4">Get Your C9-SX Scale Extractor</h2>
          <p className="text-body mb-6">Contact us for pricing and installation</p>
          <a href="https://wa.me/919826155580?text=Hi%2C%20I%20am%20interested%20in%20the%20C9-SX%20Scale%20Extractor%20Softener" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-3 rounded font-heading font-semibold text-sm hover:opacity-90 transition-opacity inline-block">
            Contact on WhatsApp
          </a>
        </div>
      </section>

      <OurSolutionsSection exclude="/scale-extractor" />
      <AboutCompanySection />
      <ProductPageTestimonials />
      <GoogleMap />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ScaleExtractor;
