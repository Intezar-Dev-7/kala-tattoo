import { Star, ShieldCheck, Award, Sparkles, Compass } from "lucide-react";
import { IMAGES } from "../data";

interface HeroProps {
  onOpenBooking: () => void;
  onViewPortfolio: () => void;
}

export default function Hero({ onOpenBooking, onViewPortfolio }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden bg-[#030303]"
    >
      {/* Background Graphic with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Premium Kala Tattoo Studio Goa Interior Workstation"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-102 filter brightness-[0.38] contrast-[1.05] transition-all duration-700"
        />
        {/* Elite shading gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10" />
        
        {/* Ambient golden soft glow flare */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gold-600/10 blur-[130px] mix-blend-screen pointer-events-none" />
      </div>

      {/* Main Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Micro-badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-gold-500/20 text-gold-300 text-[10px] sm:text-xs font-mono tracking-widest uppercase mb-4 sm:mb-6 shadow-inner animate-[bounce_3s_infinite]">
          <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
          <span>Goa's Premier Luxury Tattoo Lounge • 134+ Reviews 5.0 ★</span>
        </div>

        {/* Brand Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight text-white max-w-4xl leading-[1.10] sm:leading-[1.15] mb-3 sm:mb-4">
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-500">Tattoo Studio</span> In Goa
        </h1>

        {/* Subheadlines list */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-neutral-300 font-mono text-[10px] sm:text-xs tracking-widest uppercase max-w-3xl mb-4 sm:mb-6">
          <span>Custom Tattoos</span>
          <span className="text-gold-500 font-bold">•</span>
          <span>Realism Tattoos</span>
          <span className="text-gold-500 font-bold">•</span>
          <span>Fine Line Tattoos</span>
          <span className="text-gold-500 font-bold">•</span>
          <span>Mandala Tattoos</span>
          <span className="text-gold-500 font-bold">•</span>
          <span>Cover-Up Tattoos</span>
          <span className="text-gold-500 font-bold">•</span>
          <span>Spiritual Tattoos</span>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light max-w-2xl leading-relaxed mb-6 sm:mb-8 md:mb-10">
          Transform your custom thoughts into deeply meaningful skin artwork. <strong className="font-semibold text-white">Kala Tattoo Studio</strong> integrates modern artistic precision, medical-grade hygiene standards, and years of creative experience to forge timeless designs.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10 sm:mb-12 md:mb-16">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-black text-xs sm:text-sm font-mono font-bold tracking-widest uppercase h-12 px-8 rounded-full shadow-lg hover:shadow-gold-500/20 transition-all duration-300 cursor-pointer"
          >
            Book Free Consultation
          </button>
          
          <button
            onClick={onViewPortfolio}
            className="w-full sm:w-auto border border-white/20 hover:border-gold-500 bg-white/5 hover:bg-gold-500/10 text-white text-xs sm:text-sm font-mono font-bold tracking-widest uppercase h-12 px-8 rounded-full transition-all duration-300 cursor-pointer"
          >
            View Tattoo Portfolio
          </button>
        </div>

        {/* Feature Grid Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl pt-4 border-t border-white/5">
          
          <div className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.04] p-3.5 rounded-2xl text-left hover:border-gold-500/10 transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 border border-gold-500/20">
              <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
            </div>
            <div>
              <h4 className="text-white text-xs font-serif font-bold">5-Star Studio</h4>
              <p className="text-[10px] text-gray-500 mt-0.5 leading-snug font-mono">134+ Pure Reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.04] p-3.5 rounded-2xl text-left hover:border-gold-500/10 transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 border border-gold-500/20">
              <Award className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <h4 className="text-white text-xs font-serif font-bold">Expert Artists</h4>
              <p className="text-[10px] text-gray-500 mt-0.5 leading-snug font-mono">9+ Years Mastery</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.04] p-3.5 rounded-2xl text-left hover:border-gold-500/10 transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 border border-gold-500/20">
              <Compass className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <h4 className="text-white text-xs font-serif font-bold">Bespoke Designs</h4>
              <p className="text-[10px] text-gray-500 mt-0.5 leading-snug font-mono">Zero Copy-Paste Clones</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.04] p-3.5 rounded-2xl text-left hover:border-gold-500/10 transition-colors duration-200">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 border border-gold-500/20">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <h4 className="text-white text-xs font-serif font-bold">Safe Hygiene</h4>
              <p className="text-[10px] text-gray-500 mt-0.5 leading-snug font-mono">Sterile Med-grade Tools</p>
            </div>
          </div>

        </div>
      </div>

      {/* Fancy lower overlay smoke divider */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />
    </section>
  );
}
