import { Link } from "react-router-dom";
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <span className="text-sm text-body italic">our solutions</span>
        <div className="w-10 h-0.5 bg-primary mx-auto my-3" />
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary mb-12">
          CLEAR WATER C9 Series
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link to={s.link} key={s.title} className="group">
              <div className="relative overflow-hidden rounded-lg h-64 bg-section-bg">
                <img src={s.img} alt={s.title} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <h3 className="font-heading font-bold text-heading text-sm mt-3">{s.title}</h3>
              <p className="text-body text-xs mt-1">{s.desc}</p>
              <span className="inline-block mt-2 text-primary text-xs font-semibold hover:underline">Read More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
