import { Link } from "react-router-dom";
import productThreeInOne from "@/assets/product-three-in-one.png";
import productMagneticDescaler from "@/assets/product-magnetic-descaler.jpg";
import productEmDescaler from "@/assets/product-em-descaler.png";
import productScaleExtractor from "@/assets/product-scale-extractor.jpg";

const products = [
  {
    img: productThreeInOne,
    title: "Three in One (C9-EMT)",
    desc: "Hybrid, sharp, high coverage, energy-efficient",
    link: "/three-in-one",
  },
  {
    img: productMagneticDescaler,
    title: "Magnetic Descaler (C9-MG)",
    desc: "Advance, zero maintenance, no power, no periodical, take care",
    link: "/magnetic-descaler",
  },
  {
    img: productEmDescaler,
    title: "Computerised Electro-Magnetic Descaler (C9-EM)",
    desc: "Powerful, fast, smart, energy-efficient, sharp, high coverage",
    link: "/em-descaler",
  },
  {
    img: productScaleExtractor,
    title: "Scale Extractor Softener (C9-SX)",
    desc: "Powerful hybrid softening, Long lasting Purity, Energy-Efficient",
    link: "/scale-extractor",
  },
];

const HomeSolutionsSection = () => {
  return (
    <section className="section-pad bg-gradient-to-b from-section-bg to-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 mb-4">
          What We Offer
        </span>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-heading mb-4">
          Our Products
        </h2>
        <p className="text-body max-w-2xl mx-auto mb-14">
          Discover SELCO's complete range of chemical-free water treatment solutions designed for every need.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((p) => (
            <Link
              to={p.link}
              key={p.title}
              className="group bg-card rounded-2xl p-6 text-center hover-lift cursor-pointer border border-border/50 hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="bg-section-bg rounded-xl p-4 mb-5 flex items-center justify-center h-48">
                <img
                  src={p.img}
                  alt={p.title}
                  className="max-h-40 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading font-bold text-heading text-base mb-2">{p.title}</h3>
              <p className="text-body text-sm leading-relaxed mb-4">{p.desc}</p>
              <span className="inline-block text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSolutionsSection;
