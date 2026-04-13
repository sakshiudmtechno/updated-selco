import waterGlass from "@/assets/water-glass.png";

const WaterCompositionSection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-heading mb-2">
            SELCO Basic Water Composition
          </h2>
          <div className="flex justify-center">
            <svg width="40" height="12" viewBox="0 0 40 12" className="text-primary">
              <path d="M2 6 C10 2, 14 10, 20 6 C26 2, 30 10, 38 6" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop layout: minerals on sides, glass in center */}
          <div className="hidden md:grid grid-cols-3 items-center gap-8 min-h-[480px]">
            {/* Left minerals */}
            <div className="flex flex-col gap-16">
              {/* Potassium */}
              <div className="text-center">
                <h4 className="font-heading font-bold text-heading text-xl">Potassium</h4>
                <span className="font-heading font-bold text-primary text-lg">2.5 mg/L</span>
                <p className="text-body text-sm mt-1 leading-relaxed">To purify water 2.5mg potassium is needed for every litre.</p>
              </div>
              {/* Fluoride */}
              <div className="text-center">
                <h4 className="font-heading font-bold text-heading text-xl">Fluoride</h4>
                <span className="font-heading font-bold text-primary text-lg">0.5 mg/L</span>
                <p className="text-body text-sm mt-1 leading-relaxed">0.5mg fluoride is needed to purify 1 litre of water.</p>
              </div>
            </div>

            {/* Center glass */}
            <div className="flex justify-center relative">
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl scale-150" />
              <img
                src={waterGlass}
                alt="Pure water glass composition"
                className="w-64 lg:w-80 animate-float relative z-10 drop-shadow-2xl"
                loading="lazy"
                width={800}
                height={800}
              />
              {/* Dotted lines */}
              <div className="absolute top-[30%] left-0 w-16 border-t-2 border-dashed border-primary/30" />
              <div className="absolute top-[30%] right-0 w-16 border-t-2 border-dashed border-primary/30" />
              <div className="absolute bottom-[30%] left-0 w-16 border-t-2 border-dashed border-primary/30" />
              <div className="absolute bottom-[30%] right-0 w-16 border-t-2 border-dashed border-primary/30" />
            </div>

            {/* Right minerals */}
            <div className="flex flex-col gap-16">
              {/* Chloride */}
              <div className="text-center">
                <h4 className="font-heading font-bold text-heading text-xl">Chloride</h4>
                <span className="font-heading font-bold text-primary text-lg">350a mg/L</span>
                <p className="text-body text-sm mt-1 leading-relaxed">To purify water give 350a mg chlorine for every litre of water.</p>
              </div>
              {/* Magnesium */}
              <div className="text-center">
                <h4 className="font-heading font-bold text-heading text-xl">Magnesium</h4>
                <span className="font-heading font-bold text-primary text-lg">14.5 mg/L</span>
                <p className="text-body text-sm mt-1 leading-relaxed">14.5mg of magnesium will be required to purify every litre.</p>
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden">
            <div className="flex justify-center mb-8">
              <img
                src={waterGlass}
                alt="Pure water glass composition"
                className="w-48 animate-float drop-shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Potassium", value: "2.5 mg/L", desc: "Essential for cellular function" },
                { name: "Chloride", value: "350a mg/L", desc: "Maintains fluid balance" },
                { name: "Fluoride", value: "0.5 mg/L", desc: "Strengthens tooth enamel" },
                { name: "Magnesium", value: "14.5 mg/L", desc: "Supports muscle function" },
              ].map((m) => (
                <div key={m.name} className="bg-card rounded-2xl p-4 text-center border border-border/50">
                  <h4 className="font-heading font-bold text-heading text-base">{m.name}</h4>
                  <span className="text-primary font-heading font-bold text-lg">{m.value}</span>
                  <p className="text-body text-xs mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom mineral strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { name: "Nitrates", value: "2 mg/L" },
              { name: "Bicarbonates", value: "157 mg/L" },
              { name: "Sulphates", value: "5.6 mg/L" },
              { name: "Sodium", value: "0.4 mg/L" },
            ].map((m) => (
              <div key={m.name} className="bg-section-bg rounded-xl p-4 text-center border border-border/30">
                <h4 className="font-heading font-bold text-heading text-sm">{m.name}</h4>
                <span className="text-primary font-heading font-bold text-base">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterCompositionSection;
