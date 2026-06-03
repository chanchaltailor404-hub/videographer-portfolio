import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Find offset or scroll smoothly
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "Work", id: "work" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 bg-transparent transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo - fully in gold and smaller size */}
          <a
            href="#"
            className="font-bebas text-lg md:text-2xl tracking-[0.2em] text-[#c9a84c] hover:text-[#e0be5a] transition-colors duration-300"
          >
            DRISHYA FILMS
          </a>

          {/* Desktop Navigation with links spread out with more spacing */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-12 lg:gap-16">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="relative group text-xs uppercase tracking-[0.25em] text-white hover:text-[#c9a84c] transition-colors duration-300 py-2 font-medium"
                  >
                    {item.label}
                    {/* Golden Underline Hover Effect */}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#c9a84c] transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 z-30 transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-center">
          {menuItems.map((item) => (
            <li key={item.id} className="overflow-hidden">
              <button
                onClick={() => scrollToSection(item.id)}
                className="font-bebas text-4xl uppercase tracking-widest text-white hover:text-[#c9a84c] transition-colors duration-300"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="mt-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#c9a84c] text-black font-bebas text-lg px-8 py-3 uppercase tracking-widest hover:bg-white transition-colors"
            >
              Start Project
            </button>
          </li>
        </ul>

        {/* Dynamic Watermark in background of Drawer */}
        <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none opacity-20">
          <p className="font-bebas text-7xl tracking-widest text-[#c9a84c]/20">
            DRISHYA FILMS
          </p>
        </div>
      </div>
    </>
  );
}
