const InfoBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary to-[hsl(216,70%,35%)]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-primary-foreground mb-2">
          Want more information?
        </h2>
        <p className="text-primary-foreground/80 mb-4">
          <span className="font-bold">Call Us</span> +91 98261 55580
        </p>
        <a href="https://wa.me/919826155580" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground text-primary px-8 py-3 rounded font-heading font-semibold text-sm hover:opacity-90 transition-opacity inline-block">
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default InfoBanner;
