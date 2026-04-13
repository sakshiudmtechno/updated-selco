import { Droplets, DollarSign, Shield } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Chemical-Free",
    desc: "Our advanced water treatment systems use eco-friendly technology — no chemicals, no hassle.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    desc: "Save money with maintenance-free systems backed by 30+ years of industry expertise from Captain Industries.",
  },
  {
    icon: Droplets,
    title: "Eco-Friendly",
    desc: "Green technology that eliminates hard water scaling, pipe blockages, and water quality problems naturally.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2 space-y-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start bg-background rounded-lg p-6 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-primary mb-1">{f.title}</h3>
                  <p className="text-body text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-1/2 text-center lg:text-right">
            <span className="text-sm text-body italic">why choose SELCO</span>
            <div className="w-10 h-0.5 bg-primary mx-auto lg:ml-auto lg:mr-0 my-3" />
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-heading mb-6">
              Trusted Water Treatment Solutions Since 30+ Years
            </h2>
            {/* <p className="text-body leading-relaxed mb-8">
              SELCO (Saloni Electronics & Controls) delivers innovative, eco-friendly water conditioning solutions. Backed by Captain Industries' 30+ years of expertise, we eliminate hard water problems with cutting-edge technology.
            </p> */}
            <a href="https://wa.me/919826155580" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-3 rounded font-heading font-semibold text-sm hover:opacity-90 transition-opacity inline-block">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
