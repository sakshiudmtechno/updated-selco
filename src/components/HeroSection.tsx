import { ArrowRight, ShieldCheck, Leaf, Award } from "lucide-react";
import heroImg from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[640px] md:min-h-[760px] overflow-hidden pt-20 md:pt-24">
      <img
        src={heroImg}
        alt="Clean water solutions by SELCO"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{ objectPosition: "85% center" }}
        loading="eager"
        fetchPriority="high"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071a35]/95 via-[#071a35]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative container mx-auto px-4 md:px-6 h-full flex items-center py-20 md:py-28">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-md border border-white/20 text-cyan-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
            Trusted by 10,000+ families
          </span>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6 text-white">
            Advanced Water
            <span className="block">Treatment by</span>
            <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              SELCO
            </span>
          </h1>

          <p className="mb-10 text-base md:text-lg leading-relaxed max-w-xl text-blue-100/90">
            Pioneering chemical-free water conditioning technology for homes,
            industries, and commercial establishments across India.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="https://wa.me/919826155580"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 gradient-bg text-white px-8 py-4 rounded-xl font-heading font-semibold text-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-xl font-heading font-semibold text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8 text-white/90">
            {[
              { icon: ShieldCheck, label: "Chemical Free" },
              { icon: Leaf, label: "Eco Friendly" },
              { icon: Award, label: "30+ Years" },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-2">
                <f.icon className="w-5 h-5 text-cyan-300" />
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
