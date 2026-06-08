import { Instagram, Facebook, MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  const scrollSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = -90;
      const pos = el.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-neutral-980 text-gray-400 py-16 border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative backing radial gold glow dust */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-gold-600/[0.015] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.04]">
          
          {/* Logo & Slogan Column */}
          <div className="space-y-4 md:col-span-1">
            <button
              onClick={() => scrollSection("home")}
              className="flex items-center gap-2 text-left cursor-pointer focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                <span className="font-serif font-black text-gold-400">K</span>
              </div>
              <span className="font-serif font-black tracking-widest text-sm text-white uppercase block">
                Kala <span className="text-gold-400">Tattoo</span>
              </span>
            </button>
            <p className="text-xs text-gray-500 leading-relaxed font-light max-w-xs">
              Ink with Meaning. Art with Soul. We create masterpieces tailored to highlight your specific skeletal posture.
            </p>
            
            {/* Minimalist social links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com/kala_tattoo_studio_goa"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/5 border border-white/5 rounded-full hover:bg-gold-500 hover:text-black hover:border-gold-400 hover:scale-105 transition-all text-gray-400"
                aria-label="Instagram handle Kala Tattoo"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/5 border border-white/5 rounded-full hover:bg-gold-500 hover:text-black hover:border-gold-400 hover:scale-105 transition-all text-gray-400"
                aria-label="Facebook Page Kala Tattoo"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917057830197"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/5 border border-white/5 rounded-full hover:bg-gold-500 hover:text-black hover:border-gold-400 hover:scale-105 transition-all text-gray-400"
                aria-label="WhatsApp Chat Kala Tattoo"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {[
                { name: "Home", id: "home" },
                { name: "Portfolio", id: "portfolio" },
                { name: "Services", id: "services" },
                { name: "About", id: "about" },
                { name: "Why Us", id: "why-us" },
                { name: "Contact", id: "contact" },
              ].map((lnk) => (
                <button
                  key={lnk.id}
                  onClick={() => scrollSection(lnk.id)}
                  className="text-xs hover:text-gold-300 text-gray-400 transition-colors cursor-pointer text-left focus:outline-none font-light py-0.5"
                >
                  {lnk.name}
                </button>
              ))}
            </div>
          </div>

          {/* Direct Address Column */}
          <div className="space-y-4 md:col-span-1">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">Studio Visit</h4>
            <div className="text-xs space-y-2.5 leading-relaxed font-light">
              <p>
                Kala Tattoo Studio<br />
                Khalcha Wada<br />
                Arambol Beach Road,<br />
                Arambol, Goa 403524
              </p>
              <p className="text-gold-400 font-medium">+91 70578 30197</p>
            </div>
          </div>

          {/* Quick Schedule Grid */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">Accepting Bookings</h4>
            <div className="space-y-2 text-xs leading-relaxed font-light">
              <p>Our tattoo artists are active daily. We accept advanced custom slot reservations as well as shoreline beach walk-ins.</p>
              <p className="text-gray-500 font-mono text-[10px]">CURRENT LOCAL YEAR: 2026</p>
            </div>
          </div>

        </div>

        {/* Closing Ribbon copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-mono gap-4">
          <p>© 2026 Kala Tattoo Studio. All Rights Reserved.</p>
          <p className="flex items-center gap-1 leading-none select-none">
            <span>Ink with Meaning</span>
            <Heart className="w-3 h-3 text-red-500/80 fill-red-500" />
            <span>Art with Soul</span>
          </p>
        </div>

      </div>

    </footer>
  );
}
