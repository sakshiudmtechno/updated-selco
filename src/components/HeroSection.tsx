import heroImg from "@/assets/hero-woman.jpg";
<img src="/selco.svg" />
const HeroSection = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden mt-[68px]">

      {/* Background Image */}
      <img
        src={heroImg}
        alt="Clean water solutions by SELCO"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "85% center" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl animate-fade-up">

          {/* Heading */}
          <h1 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-5xl leading-tight mb-6">

            <span className="block bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
              Advanced Water Treatment Solutions by
            </span>

            {/* 🔥 PERFECT SELCO TEXT LOGO */}
            <span
              className="block mt-2 text-[#3b5fbf] tracking-[4px]"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 800,
                transform: "skewX(-18deg) scaleX(1.15)",
                display: "inline-block",
                lineHeight: "1",
                textShadow: "1px 0 0 #3b5fbf, -1px 0 0 #3b5fbf",
              }}
            >
              SELCO
            </span>

          </h1>

          {/* Paragraph */}
          <p className="mb-8 text-lg leading-relaxed max-w-lg text-blue-200">
            Pioneering chemical-free water conditioning technology for homes,
            industries, and commercial establishments across India.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/919826155580"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-heading font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </a>

            <a
              href="#about"
              className="border border-white/30 text-white px-8 py-3.5 rounded-lg font-heading font-semibold text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;