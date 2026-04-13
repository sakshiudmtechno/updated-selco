import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import selcoLogo from "@/assets/selco-logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const dropdowns: Record<string, { name: string; path: string }[]> = {
    Products: [
      { name: "Three in One (C9-EMT)", path: "/three-in-one" },
      { name: "Magnetic Descaler (C9-MG)", path: "/magnetic-descaler" },
      { name: "Electro-Magnetic Descaler (C9-EM)", path: "/em-descaler" },
      { name: "Scale Extractor Softener (C9-SX)", path: "/scale-extractor" },
    ],
    "Technology & Benefits": [
      { name: "C9 Electro-Magnetic Descalers", path: "/technology/c9-electromagnetic" },
    ],
    Applications: [
      { name: "Domestic", path: "/applications/domestic" },
      { name: "Commercial", path: "/applications/commercial" },
      { name: "Industrial", path: "/applications/industrial" },
      { name: "Hydroponic", path: "/applications/hydroponic" },
      { name: "Agricultural", path: "/applications/agricultural" },
    ],
    Resources: [
      { name: "Blog", path: "/blog" },
      { name: "FAQs", path: "/faqs" },
    ],
  };

  const navItems = ["Home", "About us", "Products", "Technology & Benefits", "Applications", "Services", "Resources", "Contacts"];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleScroll = () => setScrolled(window.scrollY > 20);
    document.addEventListener("mousedown", handleClick);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getPath = (item: string) => {
    const map: Record<string, string> = { Home: "/", "About us": "/about", Services: "/services", Contacts: "/contacts" };
    return map[item] || "/";
  };

  const toggleDropdown = (key: string) => setOpenDropdown(openDropdown === key ? null : key);

  const isDropdown = (item: string) => !!dropdowns[item];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background"}`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={selcoLogo} alt="SELCO Logo" className="h-10 w-auto" />
          
        </Link>

        <nav className="hidden xl:flex items-center gap-6" ref={navRef}>
          {navItems.map((item) =>
            isDropdown(item) ? (
              <div key={item} className="relative">
                <button
                  onClick={() => toggleDropdown(item)}
                  className="flex items-center gap-1 text-sm font-medium text-heading hover:text-primary transition-colors"
                >
                  {item} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === item ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === item && (
                  <div className="absolute top-full left-0 mt-3 bg-card border border-border/50 rounded-xl shadow-xl py-2 min-w-[260px] z-50" style={{ boxShadow: 'var(--shadow-elegant)' }}>
                    {dropdowns[item].map((p) => (
                      <Link
                        key={p.path}
                        to={p.path}
                        className="block px-5 py-2.5 text-sm text-heading hover:bg-primary/5 hover:text-primary transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item}
                to={getPath(item)}
                className="text-sm font-medium text-heading hover:text-primary transition-colors"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        <div className="hidden xl:flex items-center gap-4">
          {/* <a href="tel:+919826155580" className="flex items-center gap-2 text-primary font-heading font-bold text-sm">
            <Phone className="w-4 h-4" />
            +91 98261 55580
          </a> */}
          <a href="https://wa.me/919826155580" target="_blank" rel="noopener noreferrer" className="gradient-bg text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-heading font-semibold hover:opacity-90 transition-all shadow-md">
            Send A Request
          </a>
        </div>

        <button className="xl:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-card border-t px-4 pb-4 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) =>
            isDropdown(item) ? (
              <div key={item}>
                <button
                  onClick={() => toggleDropdown(item)}
                  className="flex items-center justify-between w-full py-3 text-sm text-heading hover:text-primary"
                >
                  {item} <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === item && (
                  <div className="pl-4 space-y-1">
                    {dropdowns[item].map((p) => (
                      <Link
                        key={p.path}
                        to={p.path}
                        className="block py-2 text-sm text-body hover:text-primary"
                        onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item}
                to={getPath(item)}
                className="block py-3 text-sm text-heading hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Link>
            )
          )}
          <a href="tel:+919826155580" className="block py-3 text-primary font-bold text-sm">+91 98261 55580</a>
          <a href="https://wa.me/919826155580" target="_blank" rel="noopener noreferrer" className="mt-2 w-full gradient-bg text-primary-foreground py-3 rounded-lg text-sm font-semibold text-center block">
            Send A Request
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
