import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const articles = [
  { img: blog1, title: "When and Why Should I Test My Water?" },
  { img: blog2, title: "Filtering Drinking Water vs. Working Water" },
  { img: blog3, title: "What is a shower water filter and how does it work?" },
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <span className="text-sm text-body italic">news and updates</span>
        <div className="w-10 h-0.5 bg-primary mx-auto my-3" />
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary mb-12">
          Water resource center
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <div key={a.title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg h-52">
                <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-heading/70 to-transparent p-4">
                  <span className="text-primary text-xs font-semibold">December 13, 2017</span>
                </div>
              </div>
              <h3 className="font-heading font-bold text-heading text-sm mt-3 group-hover:text-primary transition-colors">
                {a.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
