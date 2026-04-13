import teamImg from "@/assets/team-selco.png";

const AboutCompanySection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 mb-4">
              About Us
            </span>
            {/* <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-heading mb-6 leading-tight">
              SELCO — Saloni Electronic Controls
            </h2>
            <p className="text-body leading-relaxed mb-5">
              SELCO (Saloni Electronic Controls) is a pioneer in chemical-free water treatment technology based in Indore, M.P. With over 30 years of industry expertise under the Captain Industries legacy, SELCO designs, manufactures, and supplies advanced water conditioning systems for homes, industries, and commercial establishments across India.
            </p> */}
            <p className="text-body leading-relaxed mb-5">
              Our flagship CLEAR WATER C9 Series includes electromagnetic descalers, magnetic descalers, scale extractors, shower filters, water ionisers, and purifiers — all engineered for zero maintenance, zero chemicals, and long-lasting performance.
            </p>
            <p className="text-body leading-relaxed mb-5">
              Trusted by thousands of families and businesses, SELCO continues to innovate in eco-friendly water solutions that protect your health, appliances, and the environment. Our commitment to sustainability and customer satisfaction sets us apart as the leading water treatment brand in Central India.
            </p>
            <div className="flex gap-8 mt-8">
              <div>
                <span className="font-heading font-extrabold text-3xl gradient-text">30+</span>
                <p className="text-body text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <span className="font-heading font-extrabold text-3xl gradient-text">10K+</span>
                <p className="text-body text-sm mt-1">Happy Customers</p>
              </div>
              <div>
                <span className="font-heading font-extrabold text-3xl gradient-text">100%</span>
                <p className="text-body text-sm mt-1">Chemical Free</p>
              </div>
            </div>
          </div>
          <div className="animate-fade-up-delay">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl gradient-bg opacity-10 blur-2xl" />
              <img
                src={teamImg}
                alt="SELCO Team at manufacturing facility"
                className="w-full rounded-2xl shadow-xl relative z-10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;
