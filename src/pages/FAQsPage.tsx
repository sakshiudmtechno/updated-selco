import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is SELCO's water conditioning technology?", a: "SELCO uses electromagnetic and magnetic technology to condition hard water without chemicals, salt, or resin. Our systems prevent scale formation and gradually remove existing scale from pipes and appliances." },
  { q: "Do SELCO products require maintenance?", a: "No. SELCO water conditioners are maintenance-free with no consumables to replace. Once installed, they work continuously for years without any intervention." },
  { q: "Is the treated water safe for drinking?", a: "Yes. SELCO systems do not add or remove any chemicals from the water. They simply change the behavior of minerals to prevent scale — the water remains safe and retains its natural mineral content." },
  { q: "How long does installation take?", a: "Installation typically takes 1-2 hours depending on the model. Our technicians handle the complete setup at your location." },
  { q: "Which SELCO product is right for my home?", a: "For most homes, the Three in One (C9-EMT) is ideal. For specific needs, our team can recommend the best solution after understanding your water quality and usage patterns." },
  { q: "Do you offer a warranty?", a: "Yes, all SELCO products come with a comprehensive warranty. Contact us for specific warranty details for each product." },
  { q: "Can SELCO systems work with bore-well water?", a: "Absolutely. Our systems are designed to handle high-TDS bore-well water effectively, preventing scale even in the hardest water conditions." },
  { q: "What areas do you serve?", a: "SELCO serves customers across India with a strong presence in Madhya Pradesh and expanding nationwide. Contact us to check availability in your area." },
];

const FAQsPage = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-28 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 mb-4">Resources</span>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-heading mb-10">Frequently Asked Questions</h1>
          <div className="max-w-3xl space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-heading font-semibold text-heading text-sm pr-4">{f.q}</span>
                  <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-6 pb-4 text-body text-sm leading-relaxed animate-fade-up">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQsPage;
