import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    text: "SELCO's water treatment system has completely transformed our water quality. No more scaling issues and the water tastes great. Highly recommended for every household!",
    name: "Rajesh Kumar",
    info: "Homeowner, Indore",
    rating: 5,
  },
  {
    text: "We installed SELCO's descaler at our factory and the results are amazing. Zero maintenance and completely chemical-free. Outstanding service by the team!",
    name: "Priya Sharma",
    info: "Business Owner, Bhopal",
    rating: 5,
  },
  {
    text: "The shower filter made a huge difference for my family. Our skin feels softer and hair is much healthier. Thank you SELCO for this wonderful product!",
    name: "Amit Patel",
    info: "Homeowner, Ujjain",
    rating: 5,
  },
  {
    text: "We use SELCO's magnetic descaler in our hotel and the results are outstanding. No more scaling on geysers and pipelines. Truly maintenance-free technology!",
    name: "Sunita Verma",
    info: "Hotel Owner, Indore",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section className="py-24 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 mb-4">
            Testimonials
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-heading">
            What Our Customers Say
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-2xl p-10 text-center border border-border/50 max-w-2xl mx-auto" style={{ boxShadow: 'var(--shadow-elegant)' }}>
                    <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-6">
                      <Quote className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex justify-center gap-1 mb-5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-body text-lg italic leading-relaxed mb-8">"{t.text}"</p>
                    <h4 className="font-heading font-bold text-heading text-base">{t.name}</h4>
                    <p className="text-body text-sm">{t.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-8" : "bg-primary/25"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
