import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scrolling behavior for sticky glass look and hide-on-scrolldown
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Classify if scrolled past main threshold
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide or show based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down - hide
      } else {
        setIsVisible(true); // Scrolling up or near top - reveal
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for floating navbar
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", target: "home" },
    { label: "Portfolio", target: "portfolio" },
    { label: "Services", target: "services" },
    { label: "About", target: "about" },
    { label: "Why Us", target: "why-us" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <nav
      id="studio-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 md:px-8 py-4 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-lg py-2.5 sm:py-3 px-6 sm:px-8 border-white/5"
            : "bg-transparent py-4 px-4 sm:px-6 border-transparent"
        } border flex items-center justify-between`}
      >
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gold-500/10 border border-gold-500/30 group-hover:border-gold-400 group-hover:bg-gold-500/20 transition-all duration-300">
            <span className="font-serif font-bold text-base text-gold-400 group-hover:text-gold-300">K</span>
          </div>
          <div>
            <span className="font-serif font-black tracking-widest text-sm text-white uppercase block leading-none">
              Kala <span className="text-gold-400">Tattoo</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase block mt-0.5 leading-none">
              Arambol • Goa
            </span>
          </div>
        </button>

        {/* Center Links (Desktop & Large Tablet) */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollToSection(link.target)}
              className="text-xs font-mono font-medium tracking-widest text-gray-400 hover:text-gold-300 uppercase transition-colors duration-150 relative py-1 cursor-pointer focus:outline-none group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-500 to-amber-500 transition-all duration-200 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Right CTA / Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-block bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-black text-xs font-mono font-bold tracking-widest py-2 px-5 rounded-full uppercase shadow-md hover:shadow-gold-500/10 cursor-pointer transition-all duration-200 focus:outline-none"
          >
            Book Appointment
          </button>

          {/* Toggle (Mobile & Tablet) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -mr-1 rounded-full hover:bg-neutral-900 text-gray-400 hover:text-white transition-colors cursor-pointer lg:hidden focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Full-Screen Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 h-screen w-screen z-50 lg:hidden bg-[#030303]/90 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in overflow-y-auto animate-duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Card Container */}
          <div 
            className="w-full max-w-sm bg-neutral-950/90 border border-white/5 rounded-3xl p-6 sm:p-8 relative shadow-2xl flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between w-full border-b border-white/5 pb-4">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30">
                  <span className="font-serif font-bold text-sm text-gold-400">K</span>
                </div>
                <div className="text-left">
                  <span className="font-serif font-black tracking-widest text-xs text-white uppercase block leading-none">
                    Kala <span className="text-gold-400">Tattoo</span>
                  </span>
                  <span className="text-[8px] font-mono tracking-widest text-gray-500 uppercase block mt-0.5 leading-none">
                    Arambol • Goa
                  </span>
                </div>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Links Space */}
            <div className="flex flex-col items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollToSection(link.target)}
                  className="text-sm font-mono tracking-widest text-gray-300 hover:text-gold-400 uppercase py-2.5 w-full text-center border-b border-white/5 last:border-none cursor-pointer focus:outline-none transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Bottom CTA Block */}
            <div className="space-y-4 pt-4 border-t border-white/5 flex flex-col items-center w-full">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-gradient-to-r from-gold-600 to-gold-500 text-black py-3 px-6 rounded-full font-mono text-xs font-bold tracking-widest uppercase shadow-md hover:shadow-gold-500/10 cursor-pointer text-center focus:outline-none"
              >
                Book Appointment
              </button>
              <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-mono select-none">
                <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
                <span>Ink With Meaning, Art With Soul.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
