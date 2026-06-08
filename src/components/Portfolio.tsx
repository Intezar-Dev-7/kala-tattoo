import React from "react";
import { Sparkles } from "lucide-react";
import { PORTFOLIO } from "../data";

export default function Portfolio() {
  // Triple the items to make the continuous loop perfectly seamless
  const scrollItems = [...PORTFOLIO, ...PORTFOLIO, ...PORTFOLIO];

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-[#050505] text-white overflow-hidden relative border-b border-white/5">
      {/* Scope marquee keyframes for slow natural scrolling */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee 32s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Decorative vector overlays */}
      <div className="absolute top-1/4 right-[5%] w-[400px] h-[400px] rounded-full bg-gold-500/[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] rounded-full bg-amber-500/[0.02] blur-[150px] pointer-events-none" />

      <div className="relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-8 sm:mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1 text-gold-400 font-mono text-xs tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Curated Fine Skin Art</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight mb-4">
            Our Tattoo Portfolio
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Review authentic artwork executed in our Arambol studio. Rohan incorporates micro-textures and pristine margins to yield gorgeous, clean lines.
          </p>
        </div>

        {/* Portfolio Horizontal Auto-Scrolling Track */}
        <div className="w-full overflow-hidden py-4 border-y border-white/5 bg-neutral-900/10 cursor-grab active:cursor-grabbing">
          <div className="marquee-container gap-6 px-3">
            {scrollItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-72 sm:w-80 md:w-96 shrink-0 bg-neutral-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-gold-500/20 shadow-lg hover:shadow-black/50 transition-all duration-300"
              >
                {/* Product Aspect frame with pure image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title || "Tattoo Artwork"}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[0.9]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
