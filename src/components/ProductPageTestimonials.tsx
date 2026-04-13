import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "SELCO's water treatment system has completely transformed our water quality. No more scaling issues and the water tastes great. Highly recommended!",
    name: "Rajesh Kumar",
    info: "Homeowner, Indore",
  },
  {
    text: "We installed SELCO's descaler at our factory and the results are amazing. Zero maintenance and completely chemical-free. Outstanding service by the team!",
    name: "Priya Sharma",
    info: "Business Owner, Bhopal",
  },
  {
    text: "The shower filter made a huge difference for my family. Our skin feels softer and hair is much healthier. Thank you SELCO!",
    name: "Amit Patel",
    info: "Homeowner, Ujjain",
  },
];

const ProductPageTestimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <span className="text-sm text-body italic">testimonials</span>
        <div className="w-10 h-0.5 bg-primary mx-auto my-3" />
        <h2 className="font-heading font-extrabold text-3xl text-heading mb-12">
          What Our Customers Say About Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-section-bg rounded-lg p-8 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>
              <p className="text-body italic leading-relaxed mb-6">"{t.text}"</p>
              <h4 className="font-heading font-bold text-primary text-sm">{t.name}</h4>
              <p className="text-body text-xs">{t.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPageTestimonials;
