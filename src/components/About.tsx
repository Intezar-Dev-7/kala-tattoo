import { Instagram, Facebook, MessageCircle, Sparkles, Shield, Compass, HelpCircle } from "lucide-react";

export default function About() {
  const socialPlacements = [
    {
      name: "Instagram",
      handle: "@kala_tattoo_studio_goa",
      icon: <Instagram className="w-5 h-5 text-pink-400 group-hover:scale-105" />,
      url: "https://instagram.com/kala_tattoo_studio_goa",
      colorClass: "hover:bg-gradient-to-tr hover:from-purple-600/15 hover:via-pink-600/15 hover:to-orange-500/15 hover:border-pink-500/30",
    },
    {
      name: "Facebook",
      handle: "Kala Tattoo Arambol",
      icon: <Facebook className="w-5 h-5 text-blue-400 group-hover:scale-105" />,
      url: "https://facebook.com",
      colorClass: "hover:bg-blue-650/10 hover:border-blue-500/30",
    },
    {
      name: "WhatsApp",
      handle: "+91 70578 30197",
      icon: <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-105" />,
      url: "https://wa.me/917057830197",
      colorClass: "hover:bg-emerald-650/10 hover:border-emerald-500/30",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-[#050505] text-white relative border-b border-white/5 overflow-hidden">
      
      {/* Visual glowing meshes */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gold-500/[0.01] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column Left: Narrative Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-gold-400 font-mono text-xs tracking-widest uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Behind the Ink</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white">
              About Kala Tattoo Studio
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Kala Tattoo Studio is a highly-acclaimed professional tattoo atelier located in the heart of <strong className="font-semibold text-white">Arambol, Goa</strong>. We specialize in bespoke, custom tattoos that gracefully coalesce high artistic storytelling with micro-technical precision.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Founded under the simple, immutable ethos of <strong className="text-gold-200">"Ink With Meaning. Art With Soul"</strong>, our studio has welcomed thousands of global travelers, yogis, artists, and locals through its doors, earning an uninterrupted 5.0-star rating. We design with deliberate, meditative care, tailoring lines and values to matching muscle curves perfectly.
            </p>

            {/* Custom Interactive Social Grid */}
            <div className="pt-6 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
                Follow Our Daily Studio Journeys:
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {socialPlacements.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex items-center gap-3 bg-neutral-950/80 border border-white/5 py-3 px-4 rounded-2xl cursor-pointer transition-all duration-300 ${social.colorClass}`}
                  >
                    <div className="shrink-0 p-1 rounded-lg bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                      {social.icon}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-gray-500 uppercase block">{social.name}</span>
                      <span className="text-xs text-white block font-medium truncate mt-0.5">{social.handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column Right: Highlight Bento Boxes */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-[#090909] border border-white/5 p-6 rounded-3xl space-y-3">
              <div className="flex items-center gap-2.5 text-gold-400">
                <Compass className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-white">Artistic Vision</h3>
              </div>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                We reject stock clip-art cloning. Every piece crafted represents a deep collaboration, combining cultural Sanskrit, sacred geometry, or portraiture into highly sentimental symbols.
              </p>
            </div>

            <div className="bg-[#090909] border border-gold-500/15 p-6 rounded-3xl space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-600/[0.02] rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-2.5 text-gold-400">
                <Shield className="w-5 h-5 text-gold-300" />
                <h3 className="font-serif font-bold text-lg text-white">Hygiene Standards</h3>
              </div>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                Medical standards apply here. We deploy sterile, single-use globally-certified needle packs, pre-cleaned professional rotary machines, and perform complete workstation sterilization cycles.
              </p>
            </div>

            <div className="bg-[#090909] border border-white/5 p-6 rounded-3xl space-y-3">
              <div className="flex items-center gap-2.5 text-gold-400">
                <HelpCircle className="w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-white">Personalized Consult Process</h3>
              </div>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                Rohan works directly with your reference models, sketching iterations on tablets first, enabling zero-pressure adjustments before mapping stencils onto your skin.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
