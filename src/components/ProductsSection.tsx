import { useState } from "react";
import { Link } from "react-router-dom";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import emDescaler from "@/assets/em-descaler.jpg";
import magneticDescaler from "@/assets/magnetic-descaler.jpg";
import scaleExtractor from "@/assets/scale-extractor.jpg";
import showerFilter from "@/assets/shower-filter.jpg";

const tabs = ["All", "Ionisers", "Alkaline", "Purifiers", "Descalers", "Filters"];

const products = [
  { img: product1, name: "Water Ioniser System", desc: "Advanced ionisation technology", link: "/water-ionisers", category: "Ionisers" },
  { img: product2, name: "Alkaline Water Ioniser", desc: "pH-balanced alkaline water", link: "/alkaline-water-ionisers", category: "Alkaline" },
  { img: product3, name: "Water Purifier", desc: "Multi-stage purification", link: "/water-purifiers", category: "Purifiers" },
  { img: emDescaler, name: "Electro-Magnetic Descaler (C9-EM)", desc: "Computerized electromagnetic water conditioning", link: "/em-descaler", category: "Descalers" },
  { img: magneticDescaler, name: "Magnetic Descaler (C9-MG)", desc: "Permanent magnetic descaling solution", link: "/magnetic-descaler", category: "Descalers" },
  { img: scaleExtractor, name: "Scale Extractor Softener (C9-SX)", desc: "Industrial-grade scale extraction", link: "/scale-extractor", category: "Descalers" },
  { img: showerFilter, name: "Shower & Tap Filter", desc: "Multi-layer bathroom filtration", link: "/shower-filter", category: "Filters" },
];

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? products : products.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <span className="text-sm text-body italic">our products</span>
        <div className="w-10 h-0.5 bg-primary mx-auto my-3" />
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary mb-10">
          SELCO Product Range
        </h2>
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-heading font-semibold px-4 py-1.5 rounded transition-colors ${
                activeTab === tab ? "bg-primary text-primary-foreground" : "text-body hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {filtered.map((p) => (
            <Link to={p.link} key={p.name} className="group">
              <div className="bg-section-bg rounded-lg p-6 mb-4">
                <img src={p.img} alt={p.name} className="w-40 h-40 object-contain mx-auto group-hover:scale-105 transition-transform" loading="lazy" />
              </div>
              <h3 className="font-heading font-bold text-heading text-sm mt-1">{p.name}</h3>
              <p className="text-body text-xs mt-1">{p.desc}</p>
              <span className="text-primary text-xs font-semibold mt-2 hover:underline inline-block">Read More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
