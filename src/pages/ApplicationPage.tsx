import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useParams } from "react-router-dom";

const data: Record<string, { title: string; desc: string; benefits: string[] }> = {
  domestic: {
    title: "Domestic Applications",
    desc: "SELCO water conditioners protect your home's plumbing, appliances, and fixtures from hard water damage. Enjoy scale-free taps, longer-lasting geysers, and softer water for bathing — all without chemicals.",
    benefits: ["Scale-free bathrooms & kitchens", "Extended appliance lifespan (geyser, washing machine, dishwasher)", "Softer skin & hair after bathing", "Reduced soap & detergent consumption", "Zero maintenance, zero electricity (magnetic models)", "Safe drinking water for the whole family"],
  },
  commercial: {
    title: "Commercial Applications",
    desc: "Hotels, hospitals, restaurants, and offices benefit from SELCO's commercial water treatment solutions. Reduce maintenance costs, protect expensive equipment, and provide clean water to customers and staff.",
    benefits: ["Protect cooling towers & boilers from scale", "Reduce maintenance costs by up to 40%", "Improve water quality for hospitality guests", "Extend HVAC system lifespan", "Chemical-free — meets green building standards", "Quick ROI through energy & maintenance savings"],
  },
  industrial: {
    title: "Industrial Applications",
    desc: "SELCO serves industries including manufacturing, power plants, textiles, and food processing with robust water conditioning systems designed for high-flow and demanding environments.",
    benefits: ["Scale prevention in boilers & heat exchangers", "Reduced downtime and maintenance cycles", "Lower energy consumption from clean heat transfer surfaces", "Compatible with high TDS water", "No chemical handling or storage needed", "Proven performance across 30+ years"],
  },
  hydroponic: {
    title: "Hydroponic Applications",
    desc: "Hydroponics requires precisely conditioned water for optimal plant growth. SELCO systems ensure mineral balance without adding harmful chemicals, improving nutrient absorption and crop yields.",
    benefits: ["Balanced mineral content for plant health", "Prevents clogging of drip irrigation lines", "Chemical-free water conditioning", "Improved nutrient uptake by roots", "Consistent water quality batch after batch", "Low operating cost"],
  },
  agricultural: {
    title: "Agricultural Applications",
    desc: "From drip irrigation to livestock watering, SELCO systems improve water quality for agricultural operations, preventing scale buildup in pipes and improving soil health.",
    benefits: ["Scale-free irrigation systems", "Improved soil permeability", "Better crop yields with conditioned water", "Safe water for livestock", "Reduced pipe maintenance costs", "Works with bore-well & hard water sources"],
  },
};

const ApplicationPage = () => {
  const { type } = useParams<{ type: string }>();
  const info = data[type || ""] || data.domestic;

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-28 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 mb-4">Applications</span>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-heading mb-6">{info.title}</h1>
          <p className="text-body text-lg leading-relaxed max-w-3xl mb-8">{info.desc}</p>
          <h2 className="font-heading font-bold text-xl text-heading mb-4">Key Benefits</h2>
          <ul className="space-y-3 max-w-2xl mb-8">
            {info.benefits.map(b => (
              <li key={b} className="flex items-start gap-2 text-body"><span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" /><span>{b}</span></li>
            ))}
          </ul>
          <a href="https://wa.me/919826155580" target="_blank" rel="noopener noreferrer" className="gradient-bg text-white px-8 py-3.5 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-all shadow-lg inline-block">
            Get a Free Consultation
          </a>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ApplicationPage;
