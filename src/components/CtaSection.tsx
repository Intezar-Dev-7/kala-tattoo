import { MessageCircle, Calendar, Sparkles } from "lucide-react";

interface CtaSectionProps {
  onOpenBooking: () => void;
}

export default function CtaSection({ onOpenBooking }: CtaSectionProps) {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-black border-b border-white/5">
      
      {/* Absolute glow vector backing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-gold-600/10 blur-[130px] pointer-events-none mix-blend-screen" />

      {/* Luxury borders top-middle */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        
        {/* Sparkly micro-badge */}
        <div className="inline-flex items-center gap-1 bg-gold-400/5 border border-gold-400/20 px-3.5 py-1 rounded-full text-gold-300 font-mono text-[10px] tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-gold-450 animate-pulse" />
          <span>Transforming Ideas into Skin Poetry</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-none">
          Ready To Get Inked?
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed">
          Whether it’s your very first tattoo or your next elaborate custom masterpiece, let’s collaborate directly to create something deeply meaningful together.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4.5 pt-6">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-black py-3.5 px-8 rounded-full font-mono text-xs font-bold tracking-widest uppercase shadow-lg hover:shadow-gold-500/20 cursor-pointer transition-all duration-200"
          >
            <div className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </div>
          </button>

          <a
            href="https://wa.me/917057830197?text=Hi%20Kala%20Tattoo%20Studio,%20I'm%20ready%20to%20get%20inked!%20I'd%20like%20to%20book%20a%20consultation."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto border border-white/10 hover:border-emerald-500/40 bg-white/5 hover:bg-emerald-500/10 text-white py-3.5 px-8 rounded-full font-mono text-xs font-bold tracking-widest uppercase cursor-pointer transition-all duration-200"
          >
            <div className="flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us Instantly</span>
            </div>
          </a>
        </div>

        {/* Sub-disclaimer info */}
        <p className="text-[10px] text-gray-500 font-mono select-none pt-4">
          ★ 100% Sterile Consultation • Fully Private Custom Studio Lounge
        </p>
      </div>

    </section>
  );
}
