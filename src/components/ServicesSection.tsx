import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import emDescaler from "@/assets/em-descaler.jpg";
import magneticDescaler from "@/assets/magnetic-descaler.jpg";
import scaleExtractor from "@/assets/scale-extractor.jpg";
import showerFilter from "@/assets/shower-filter.jpg";

const services = [
  { img: emDescaler, title: "Electro-Magnetic Descaler (C9-EM)", link: "/em-descaler", desc: "Computerized electromagnetic water conditioning system" },
  { img: magneticDescaler, title: "Magnetic Descaler (C9-MG)", link: "/magnetic-descaler", desc: "Permanent magnetic water softening solution" },
  { img: scaleExtractor, title: "Scale Extractor Softener (C9-SX)", link: "/scale-extractor", desc: "Industrial-grade scale extraction system" },
  { img: showerFilter, title: "Shower & Tap Filter", link: "/shower-filter", desc: "Multi-layer filtration for bathrooms" },
];

const ServicesSection = () => {
  return (
    <section className="section-pad bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 mb-4">
            Our Solutions
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-heading mb-4">
            CLEAR WATER <span className="gradient-text">C9 Series</span>
          </h2>
          <p className="text-body leading-relaxed">
            End-to-end water treatment engineered for zero maintenance and lasting performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link to={s.link} key={s.title} className="group premium-card p-4 flex flex-col">
              <div className="relative overflow-hidden rounded-xl h-56 bg-section-bg">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </div>
              </div>
              <div className="pt-4 pb-2">
                <h3 className="font-heading font-bold text-heading text-sm mb-1.5 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-body text-xs leading-relaxed">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
