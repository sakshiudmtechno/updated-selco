import waterTestImg from "@/assets/water-test-hero.jpg";

const ScheduleTestSection = () => {
  return (
    <section className="py-24 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 animate-fade-up">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 mb-4">
              Free Service
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-heading mb-4 leading-tight">
              Schedule a Free Water Quality Test
            </h2>
            <p className="text-body leading-relaxed mb-6">
              Contact SELCO for a comprehensive water analysis today. Our experts will visit your home or office to test water quality and recommend the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 border border-border bg-card px-5 py-3.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <a href="https://wa.me/919826155580" target="_blank" rel="noopener noreferrer" className="gradient-bg text-primary-foreground px-8 py-3.5 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-all whitespace-nowrap text-center shadow-lg">
                Contact Us
              </a>
            </div>
            <label className="flex items-center gap-2 text-sm text-body">
              <input type="checkbox" className="accent-primary w-4 h-4" />
              I have read and agree to the terms & conditions
            </label>
          </div>
          <div className="md:w-1/2 animate-fade-up-delay">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl gradient-bg opacity-10 blur-2xl" />
              <img src={waterTestImg} alt="SELCO water quality testing" className="w-full rounded-2xl shadow-xl relative z-10" loading="lazy" width={1024} height={640} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleTestSection;
