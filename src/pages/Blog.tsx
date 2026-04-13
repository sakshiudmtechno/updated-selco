import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";

const posts = [
  { title: "How Electromagnetic Descaling Works", excerpt: "Learn the science behind SELCO's chemical-free water treatment technology and why it outperforms traditional softeners.", date: "March 15, 2026", slug: "#" },
  { title: "5 Signs Your Home Has a Hard Water Problem", excerpt: "White stains on taps, dry skin after showers, and appliance breakdowns — discover the hidden costs of hard water.", date: "February 28, 2026", slug: "#" },
  { title: "Why Industries Are Switching to Chemical-Free Water Treatment", excerpt: "From cost savings to environmental compliance, explore why major industries trust SELCO's C9 technology.", date: "January 10, 2026", slug: "#" },
  { title: "The Complete Guide to Water Conditioning for Homes", excerpt: "Everything homeowners need to know about protecting their plumbing, appliances, and family from hard water.", date: "December 5, 2025", slug: "#" },
];

const Blog = () => (
  <div className="min-h-screen">
    <Header />
    <section className="pt-28 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 mb-4">Resources</span>
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-heading mb-10">Blog</h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {posts.map(p => (
            <article key={p.title} className="bg-card border border-border/50 rounded-2xl p-6 hover-lift">
              <p className="text-xs text-muted-foreground mb-2">{p.date}</p>
              <h2 className="font-heading font-bold text-lg text-heading mb-2">{p.title}</h2>
              <p className="text-body text-sm leading-relaxed mb-4">{p.excerpt}</p>
              <Link to={p.slug} className="text-primary text-sm font-semibold hover:underline">Read More →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Blog;
