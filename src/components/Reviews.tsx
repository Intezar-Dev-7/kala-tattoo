import { Star, MessageSquare } from "lucide-react";
import { REVIEWS } from "../data";

export default function Reviews() {
  // Render golden stars
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 text-gold-400 fill-gold-400 shrink-0" />
    ));
  };

  return (
    <section id="reviews" className="py-12 sm:py-16 md:py-20 bg-[#050505] text-white relative border-b border-white/5 overflow-hidden">
      
      {/* Visual glowing halo */}
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-gold-600/[0.01] blur-[120px] pointer-events-none" />

      {maxwContainer()}

    </section>
  );

  function maxwContainer() {
    return (
      <div className="relative">
        {/* Title elements */}
        <div className="text-center mb-8 sm:mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1 text-gold-400 font-mono text-xs tracking-widest uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Unbiased Client Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-light">
            Read real feedback from international travelers, local micro-collectors, and scar cover-up clients. Kala Tattoo holds an unbroken 5.0 ★ rating across 134+ global reviews.
          </p>
        </div>

        {/* Endless Marquee Ribbon Ticker */}
        <div className="w-full overflow-hidden relative py-4">
          
          {/* Symmetrical shadow fade caps to cover borders visually */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          {/* Scrolling tape */}
          <div className="animate-marquee flex gap-6 hover:cursor-grab active:cursor-grabbing select-none">
            
            {/* First Loop set */}
            {REVIEWS.map((rev) => (
              <div
                key={`rev-set1-${rev.id}`}
                className="w-[280px] sm:w-[360px] shrink-0 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors border border-white/5 hover:border-gold-500/10 p-5 sm:p-6 rounded-3xl flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4.5">
                    <span className="font-serif font-bold text-sm sm:text-base text-white tracking-wide truncate pr-3 select-all">
                      {rev.reviewer}
                    </span>
                    <div className="flex gap-0.5">
                      {renderStars(rev.rating)}
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light line-clamp-5 select-text hover:line-clamp-none transition-all duration-300">
                    "{rev.text}"
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/[0.03] flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <span>Google Review Verified</span>
                  <span className="text-gold-500/70">5.0 ★ Rate</span>
                </div>
              </div>
            ))}

            {/* Second Duplicate loop set for seamless loop transition */}
            {REVIEWS.map((rev) => (
              <div
                key={`rev-set2-${rev.id}`}
                className="w-[280px] sm:w-[360px] shrink-0 bg-neutral-900/40 hover:bg-neutral-900/60 transition-colors border border-white/5 hover:border-gold-500/10 p-5 sm:p-6 rounded-3xl flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4.5">
                    <span className="font-serif font-bold text-sm sm:text-base text-white tracking-wide truncate pr-3 select-all">
                      {rev.reviewer}
                    </span>
                    <div className="flex gap-0.5">
                      {renderStars(rev.rating)}
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light line-clamp-5 select-text hover:line-clamp-none transition-all duration-300">
                    "{rev.text}"
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/[0.03] flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <span>Google Review Verified</span>
                  <span className="text-gold-500/70">5.0 ★ Rate</span>
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Outer instructions hint */}
        <div className="text-center mt-6 text-xs text-gray-500 font-mono select-none">
          💡 Hover over any recommendation card to pause scrolling and read.
        </div>
      </div>
    );
  }
}
