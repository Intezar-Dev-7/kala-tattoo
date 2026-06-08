import { PenTool, Eye, Feather, Compass, Sparkles, Moon } from "lucide-react";
import { SERVICES } from "../data";

export default function Services() {
  // Dynamic Lucide selection mapper
  const renderIcon = (name: string) => {
    const props = { className: "w-6 h-6 text-gold-400 group-hover:text-gold-350 transition-colors" };
    switch (name) {
      case "PenTool": return <PenTool {...props} />;
      case "Eye": return <Eye {...props} />;
      case "Feather": return <Feather {...props} />;
      case "Compass": return <Compass {...props} />;
      case "Sparkles": return <Sparkles {...props} />;
      case "Moon": return <Moon {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-[#030303] text-white relative border-b border-white/5">
      
      {/* Visual Ambient Light glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold-600/[0.03] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Group */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-gold-400 font-mono text-xs tracking-widest uppercase mb-3">
            <Compass className="w-3.5 h-3.5 animate-[spin_5s_linear_infinite]" />
            <span>Mastery Across Diverse Disciplines</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight mb-4">
            Tattoo Services In Goa
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Every tattoo represents a spiritual transition or unique personal story. At Kala Tattoo Studio, we perform each style under deep artistic reverence.
          </p>
        </div>

        {/* Services Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              id={srv.idAttribute}
              className="group relative bg-[#090909] border border-white/5 rounded-3xl p-6 sm:p-8 hover:border-gold-500/20 shadow-lg hover:shadow-black/70 transition-all duration-300"
            >
              {/* Card Accent Top Line */}
              <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Icon box container */}
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-all duration-300">
                  {renderIcon(srv.iconName)}
                </div>

                <h3 className="text-xl font-serif font-bold text-white mb-3 tracking-tight group-hover:text-gold-200 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {srv.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
