import Header from "@/components/Header";
import Footer from "@/components/Footer";
import c9Img from "@/assets/c9.png";
import WhatsAppButton from "@/components/WhatsAppButton";

const C9Electromagnetic = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO / BREADCRUMB */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl">
            C9 Electro-Magnetic Water Descaler
          </h1>
        </div>
      </section>

      {/* IMAGE */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
         <img
  src={c9Img}
  alt="Technology"
  className="mx-auto max-w-60 h-70 rounded-lg shadow-lg"
/>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-4xl">

          <p className="text-lg text-body mb-6">
            The Selco Clearwater system uses sophisticated microprocessors and programming to generate rapidly changing waveforms which are transmitted through the prewound pipe to treat the water flow.
          </p>

          <p className="text-body mb-6">
            In the time taken to pass through this field, the mineral crystals are reduced to tiny particles of 4 microns or less. The treated water stays charged and starts to break down existing scale and mineral deposits.
          </p>

          {/* BENEFITS */}
          <h2 className="font-heading text-2xl font-bold mt-10 mb-4 text-heading">
            Benefits of Treated Water
          </h2>

          <ul className="space-y-3">
            {[
              "Hard water softened without chemicals",
              "Chemical-free descaling",
              "Breaks down existing scale deposits",
              "Prevents limescale formation",
              "Works on bore/well water",
              "Reduces maintenance & energy cost",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* DESCRIPTION */}
          <h2 className="font-heading text-2xl font-bold mt-12 mb-4 text-heading">
            Why Selco Clearwater?
          </h2>

          <p className="text-body mb-6">
            The Selco Clearwater system is one of the most cost-effective and environmentally friendly water treatment solutions available. It neutralises mineral bonding using advanced waveform technology.
          </p>

          <p className="text-body mb-6">
            This prevents scale formation and gradually removes existing deposits, making plumbing systems scale-free within months.
          </p>

          {/* ADVANTAGES */}
          <h2 className="font-heading text-2xl font-bold mt-12 mb-4 text-heading">
            Advantages Over Traditional Systems
          </h2>

          <ul className="space-y-3">
            {[
              "Low installation cost",
              "No plumbing required",
              "Low electricity consumption",
              "Maintenance-free system",
              "No limitation on flow rate",
              "Portable and easy to install",
              "No chemicals required",
              "Environmentally friendly",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="https://wa.me/919826155580"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg text-white px-8 py-3.5 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-all shadow-lg inline-block"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default C9Electromagnetic;