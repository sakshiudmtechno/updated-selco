import { Link } from "react-router-dom";
import emDescaler from "@/assets/em-descaler.jpg";
import magneticDescaler from "@/assets/magnetic-descaler.jpg";
import scaleExtractor from "@/assets/scale-extractor.jpg";
import showerFilter from "@/assets/shower-filter.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const solutions = [
  { img: product1, title: "Water Ionisers", link: "/water-ionisers", desc: "Advanced ionisation technology" },
  { img: product2, title: "Alkaline Water Ionisers", link: "/alkaline-water-ionisers", desc: "pH-balanced alkaline water" },
  { img: product3, title: "Water Purifiers", link: "/water-purifiers", desc: "Multi-stage purification" },
  { img: emDescaler, title: "Electro-Magnetic Descaler (C9-EM)", link: "/em-descaler", desc: "Computerized electromagnetic conditioning" },
  { img: magneticDescaler, title: "Magnetic Descaler (C9-MG)", link: "/magnetic-descaler", desc: "Permanent magnetic descaling" },
  { img: scaleExtractor, title: "Scale Extractor (C9-SX)", link: "/scale-extractor", desc: "Industrial-grade scale extraction" },
  { img: showerFilter, title: "Shower & Tap Filter", link: "/shower-filter", desc: "Multi-layer bathroom filtration" },
];

const OurSolutionsSection = ({ exclude }: { exclude?: string }) => {
  const filtered = exclude ? solutions.filter(s => s.link !== exclude) : solutions;

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 text-center">
        <span className="text-sm text-body italic">our solutions</span>
        <div className="w-10 h-0.5 bg-primary mx-auto my-3" />
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary mb-12">
          Explore More SELCO Products
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filtered.map((s) => (
            <Link to={s.link} key={s.title} className="group">
              <div className="bg-background rounded-lg p-6 mb-3">
                <img src={s.img} alt={s.title} className="w-32 h-32 object-contain mx-auto group-hover:scale-105 transition-transform" loading="lazy" />
              </div>
              <h3 className="font-heading font-bold text-heading text-sm">{s.title}</h3>
              <p className="text-body text-xs mt-1">{s.desc}</p>
              <span className="text-primary text-xs font-semibold mt-2 hover:underline inline-block">Read More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutionsSection;
