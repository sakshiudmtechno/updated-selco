const stats = [
  { pct: "99%", label: "of scaling eliminated" },
  { pct: "100%", label: "chemical-free technology" },
  { pct: "30+", label: "years of expertise" },
];

const EfficiencySection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <span className="text-sm text-primary-foreground/80 italic">choose SELCO</span>
        <div className="w-10 h-0.5 bg-primary-foreground mx-auto my-3" />
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-12">
          Advanced Water Conditioning Technology
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <div className="w-24 h-24 rounded-full border-4 border-primary-foreground/30 flex items-center justify-center">
                <span className="font-heading font-extrabold text-2xl">{s.pct}</span>
              </div>
              <span className="text-sm text-primary-foreground/80 text-left max-w-[120px]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EfficiencySection;
