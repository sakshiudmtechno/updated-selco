import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import productImg from "@/assets/product-three-in-one.png";

const ThreeInOne = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-section-bg rounded-2xl p-8 flex items-center justify-center">
              <img src={productImg} alt="Three in One C9-EMT" className="max-h-96 w-auto object-contain" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 mb-4">
                SELCO Product
              </span>
              <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-heading mb-6">
                Three in One (C9-EMT)
              </h1>
              <p className="text-body leading-relaxed mb-4">
                The SELCO Three in One (C9-EMT) is a hybrid water conditioning system that combines the power of electromagnetic, magnetic, and extraction technologies into one compact unit. It delivers sharp, high-coverage water treatment with exceptional energy efficiency.
              </p>
              <ul className="space-y-3 mb-8">
                {["Hybrid 3-in-1 technology for comprehensive water treatment", "Sharp & high coverage across all water lines", "Energy-efficient with minimal power consumption", "Chemical-free operation — no salt, no resin", "Suitable for residential and commercial installations", "Zero maintenance with long-lasting performance"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-body text-sm">
                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/919826155580" target="_blank" rel="noopener noreferrer" className="gradient-bg text-white px-8 py-3.5 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-all shadow-lg inline-block">
                Get Quote on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ThreeInOne;
