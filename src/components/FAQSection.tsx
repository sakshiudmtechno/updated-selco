import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is SELCO's water treatment technology?",
    a: "SELCO uses advanced electro-magnetic and magnetic descaling technology that is 100% chemical-free, eco-friendly, and maintenance-free. Our systems condition water at the molecular level to prevent and remove limescale buildup.",
  },
  {
    q: "How does the C9 Series work?",
    a: "The CLEAR WATER C9 Series uses computerised electro-magnetic technology to prevent and remove scale buildup in pipes and appliances without any chemicals. It generates specific frequencies that alter the crystalline structure of minerals in water.",
  },
  {
    q: "Are SELCO systems maintenance-free?",
    a: "Yes! All SELCO water treatment systems are designed for zero maintenance with long-lasting performance and no recurring costs. Once installed, they work continuously without any intervention.",
  },
  {
    q: "Where is SELCO located?",
    a: "Our head office is at 2-A, Electronic Complex, Opp. Vodafone, Pardesipura, Indore – 452010 (M.P.), India. Call us at +91 98261 55580.",
  },
  {
    q: "What is the warranty on SELCO products?",
    a: "SELCO products come with comprehensive warranty coverage. Our electromagnetic descalers and water conditioning systems are backed by extensive warranty periods, ensuring peace of mind for your investment.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-pad bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-5/12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 mb-4">
              FAQ
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-heading mb-6 leading-tight">
              Everything You Need to Know About SELCO
            </h2>
            <p className="text-body leading-relaxed mb-8">
              SELCO delivers innovative water treatment solutions backed by 30+ years of expertise. We're here to answer all your questions.
            </p>
            <a href="https://wa.me/919826155580" target="_blank" rel="noopener noreferrer" className="gradient-bg text-primary-foreground px-8 py-3.5 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-all inline-block shadow-lg">
              Ask Us on WhatsApp
            </a>
          </div>
          <div className="lg:w-7/12 space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-card rounded-xl overflow-hidden border border-border/50 hover-lift" style={{ boxShadow: 'var(--shadow-card)' }}>
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  <span className="font-heading font-semibold text-sm text-heading pr-4">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${open === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-5 pb-5">
                    <p className="text-body text-sm leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
