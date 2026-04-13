import familyImg from "@/assets/family-water.jpg";

const FamiliesSection = () => {
  return (
    <section className="relative h-[450px] overflow-hidden">
      <img src={familyImg} alt="Families trusting SELCO water solutions" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={900} />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,100%,15%/0.85)] via-[hsl(210,100%,20%/0.7)] to-[hsl(210,100%,25%/0.5)]" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
       <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase 
bg-blue-500/10 backdrop-blur-sm text-blue-200 border border-blue-400/20 mb-6">
  Trusted by Thousands
</span>

<h2 className="font-heading font-extrabold text-3xl md:text-5xl mb-4 max-w-3xl leading-tight">

  <span className="block bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
    Backed by 30+ Years of Industry Expertise
  </span>

</h2>

<p className="text-blue-400 max-w-lg text-lg">
  From Captain Industries to SELCO — delivering trusted, chemical-free water treatment solutions across India.
</p>
      <div className="flex gap-8 mt-10 items-center">

  {/* 1 */}
  <div className="text-center">
    <span className="font-heading font-extrabold text-4xl 
    bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent 
    drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
      10,000+
    </span>
    <p className="text-blue-200 text-sm mt-1">Installations</p>
  </div>

  <div className="w-px h-10 bg-blue-400/30" />

  {/* 2 */}
  <div className="text-center">
    <span className="font-heading font-extrabold text-4xl 
    bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent 
    drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
      50+
    </span>
    <p className="text-blue-200 text-sm mt-1">Cities Served</p>
  </div>

  <div className="w-px h-10 bg-blue-400/30" />

  {/* 3 */}
  <div className="text-center">
    <span className="font-heading font-extrabold text-4xl 
    bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent 
    drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
      99%
    </span>
    <p className="text-blue-200 text-sm mt-1">Satisfaction</p>
  </div>

</div>
      </div>
    </section>
  );
};

export default FamiliesSection;
