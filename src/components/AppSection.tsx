import bottleApp from "@/assets/water-bottle-app.jpg";

const AppSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src={bottleApp} alt="Water delivery app" className="w-full max-w-sm mx-auto" loading="lazy" width={640} height={800} />
          </div>
          <div className="md:w-1/2 text-center md:text-right">
            <span className="text-sm text-body italic">call us 24/7 for ordering</span>
            <div className="w-10 h-0.5 bg-primary mx-auto md:ml-auto md:mr-0 my-3" />
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-heading mb-4">
              Want fresh, filtered water without the hassle?
            </h2>
            <p className="text-body leading-relaxed mb-8">
              Bottled water delivery is a convenient alternative to filtration systems and single-serve water bottles.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded font-heading font-semibold text-sm hover:opacity-90 transition-opacity">
              Download An App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
