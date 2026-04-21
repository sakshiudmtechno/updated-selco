import selcoLady from "@/assets/selco-lady.jpeg";

const CTABanner = () => {
  return (
    <section className="section-pad bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl overflow-hidden gradient-bg p-10 md:p-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-foreground/20 blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary-foreground/10 blur-3xl translate-y-1/2 -translate-x-1/3" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-7/12 text-center md:text-left">
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground mb-4 leading-tight">
                Get the truth about your water quality!
              </h2>
              <p className="text-primary-foreground/80 mb-8 text-lg">
                Order a free water test at your home today and discover how SELCO can transform your water experience.
              </p>
              <a href="https://wa.me/919826155580" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground text-primary px-10 py-4 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-all inline-block shadow-lg">
                Contact SELCO Now
              </a>
            </div>
            <div className="md:w-5/12 flex justify-center">
              <img src={selcoLady} alt="Happy SELCO customer" className="w-64 h-80 object-cover rounded-2xl shadow-2xl" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
