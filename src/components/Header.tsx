import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import selcoLogo from "@/assets/selco-logo.png";

type NavItem = {
  label: string;
  hash?: string;
  dropdown?: { name: string; path: string }[];
};

const NAV: NavItem[] = [
  { label: "Home", hash: "#home" },
  { label: "About", hash: "#about" },
  {
    label: "Products",
    hash: "#products",
    dropdown: [
      { name: "Three in One (C9-EMT)", path: "/three-in-one" },
      { name: "Magnetic Descaler (C9-MG)", path: "/magnetic-descaler" },
      { name: "Electro-Magnetic Descaler (C9-EM)", path: "/em-descaler" },
      { name: "Scale Extractor Softener (C9-SX)", path: "/scale-extractor" },
    ],
  },
  {
    label: "Technology",
    dropdown: [
      { name: "C9 Electro-Magnetic Descalers", path: "/technology/c9-electromagnetic" },
    ],
  },
  {
    label: "Applications",
    dropdown: [
      { name: "Domestic", path: "/applications/domestic" },
      { name: "Commercial", path: "/applications/commercial" },
      { name: "Industrial", path: "/applications/industrial" },
      { name: "Hydroponic", path: "/applications/hydroponic" },
      { name: "Agricultural", path: "/applications/agricultural" },
    ],
  },
  { label: "Services", hash: "#services" },
  {
    label: "Resources",
    dropdown: [
      { name: "Blog", path: "/blog" },
      { name: "FAQs", path: "/faqs" },
    ],
  },
  { label: "Contact", hash: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    document.addEventListener("mousedown", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToHash = (hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleHashClick = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    setOpenDropdown(null);
    if (!isHome) {
      navigate("/" + hash);
      setTimeout(() => scrollToHash(hash), 100);
    } else {
      scrollToHash(hash);
      history.replaceState(null, "", hash);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_-8px_rgba(0,40,100,0.12)] border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        <a
          href="#home"
          onClick={handleHashClick("#home")}
          className="flex items-center gap-2 shrink-0"
        >
          <img src={selcoLogo} alt="SELCO" className="h-9 md:h-10 w-auto" />
        </a>

        <nav className="hidden xl:flex items-center gap-7" ref={navRef}>
          {NAV.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    scrolled ? "text-heading hover:text-primary" : "text-heading hover:text-primary"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-3 bg-card border border-border/60 rounded-2xl py-2 min-w-[280px] z-50 animate-fade-in"
                    style={{ boxShadow: "var(--shadow-premium)" }}
                  >
                    {item.dropdown.map((p) => (
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
              <a
                key={item.label}
                href={item.hash}
                onClick={handleHashClick(item.hash!)}
                className="text-sm font-medium text-heading hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            )
          )}
        </nav>

        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <a
            href="https://wa.me/919826155580"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 gradient-bg text-white px-6 py-2.5 rounded-xl text-sm font-heading font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Send A Request
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <button
          className="xl:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6 text-heading" /> : <Menu className="w-6 h-6 text-heading" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-xl border-t border-border/50 px-4 pb-6 max-h-[85vh] overflow-y-auto animate-fade-in">
          {NAV.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="border-b border-border/40 last:border-0">
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className="flex items-center justify-between w-full py-3.5 text-sm font-medium text-heading hover:text-primary"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="pl-4 pb-3 space-y-1">
                    {item.dropdown.map((p) => (
                      <Link
                        key={p.path}
                        to={p.path}
                        className="block py-2 text-sm text-body hover:text-primary transition-colors"
                        onClick={() => {
                          setMobileOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.hash}
                onClick={handleHashClick(item.hash!)}
                className="block py-3.5 text-sm font-medium text-heading hover:text-primary border-b border-border/40 last:border-0"
              >
                {item.label}
              </a>
            )
          )}
          <a
            href="https://wa.me/919826155580"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 w-full gradient-bg text-white py-3.5 rounded-xl text-sm font-heading font-semibold text-center block shadow-lg"
          >
            Send A Request
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
