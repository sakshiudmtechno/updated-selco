import { useState } from "react";
import selcoLady from "@/assets/selco-lady.jpeg";

const ContactFormSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    if (!name || !phone || !agreed) return;
    const text = `Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(`https://wa.me/919826155580?text=${text}`, "_blank");
  };

  return (
    <section className="section-pad bg-section-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          <div className="md:w-5/12">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl gradient-bg opacity-10 blur-2xl" />
              <img src={selcoLady} alt="Happy SELCO customer" className="w-full max-w-sm mx-auto rounded-2xl shadow-xl relative z-10" loading="lazy" width={640} height={800} />
            </div>
          </div>
          <div className="md:w-7/12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 mb-4">
              Contact Form
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-heading mb-8 leading-tight">
              Get in Touch with SELCO
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" className="border border-border bg-card px-5 py-3.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone" className="border border-border bg-card px-5 py-3.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            </div>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Add Comments" rows={4} className="w-full border border-border bg-card px-5 py-3.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all mb-4" />
            <label className="flex items-center gap-2 text-sm text-body mb-6">
              <input type="checkbox" className="accent-primary w-4 h-4" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
              I agree that my submitted data is being collected and stored.
            </label>
            <button onClick={handleSubmit} className="gradient-bg text-primary-foreground px-10 py-3.5 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-all shadow-lg">
              Send via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
