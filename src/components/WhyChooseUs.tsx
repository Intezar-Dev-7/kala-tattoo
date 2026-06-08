import { useEffect, useState, useRef } from "react";
import { Sparkles, ShieldCheck, Users, Flame, Award, HelpCircle, Pocket, Star, CheckSquare } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
}

function CountUp({ end, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 1800; // ms
    const increment = end / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return (
    <div ref={elementRef} className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-gold-400">
      {count}
      {suffix}
    </div>
  );
}

export default function WhyChooseUs() {
  const customCounters = [
    { label: "Tattoos Completed", end: 1850, suffix: "+" },
    { label: "Happy Clients", end: 1200, suffix: "+" },
    { label: "Google Reviews", end: 134, suffix: "+" },
    { label: "Years of Experience", end: 9, suffix: "+" },
  ];

  const highlights = [
    {
      title: "Professional Tattoo Artists",
      description: "Led by Rohan, holding 9 years of high-detail experience translating thoughts into masterful skin artwork.",
      icon: <Award className="w-5 h-5 text-gold-400" />,
    },
    {
      title: "Sterile Medical Equipment",
      description: "100% sterile vacuum-wrapped needles, cartridge protection lines and hospital-safe sterilization protocols.",
      icon: <ShieldCheck className="w-5 h-5 text-gold-400" />,
    },
    {
      title: "True Custom Artwork",
      description: "Collaborative tablet renderings custom tailored to match bone curvature and personal symbolic intentions.",
      icon: <Flame className="w-5 h-5 text-gold-400" />,
    },
    {
      title: "International Guest Care",
      description: "Welcoming global travelers seeking spiritual memory markers with fluent communication, guidelines, and vibes.",
      icon: <Users className="w-5 h-5 text-gold-400" />,
    },
    {
      title: "High Hygiene Standards",
      description: "Strict workspace cleaning cycles before/after appointments, hygienic barriers, and premium wrap shield dressings.",
      icon: <CheckSquare className="w-5 h-5 text-gold-400" />,
    },
    {
      title: "Bespoke Personal Designs",
      description: "Each tattoo line carries soulful communication, capturing sacred geometry, Sanskrit mantras, or realist themes.",
      icon: <Sparkles className="w-5 h-5 text-gold-400" />,
    },
    {
      title: "Premium Globally-Sourced Inks",
      description: "We utilize vegan, heavy metal-free, top-tier international black work shading inks ensuring pristine healed lines.",
      icon: <Pocket className="w-5 h-5 text-gold-400" />,
    },
    {
      title: "Friendly Free Consultations",
      description: "Zero pressure, conversational sit-downs on Arambol beach road to discuss design scope, timeframes, and care guidelines.",
      icon: <HelpCircle className="w-5 h-5 text-gold-400" />,
    },
  ];

  return (
    <section id="why-us" className="py-12 sm:py-16 md:py-20 bg-[#030303] text-white relative border-b border-white/5">
      
      {/* Background Graphic subtle overlays */}
      <div className="absolute top-[30%] left-[5%] w-[450px] h-[450px] rounded-full bg-gold-600/[0.015] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title elements */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-gold-400 font-mono text-xs tracking-widest uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
            <span>Uncompromising Professional Integrity</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight mb-4">
            Why Choose Kala Tattoo Studio
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-light">
            We are trusted globally for executing world-class custom skin art while maintaining spotless hygiene indexes on the Arambol coast.
          </p>
        </div>

        {/* Dynamic Intersection Animating Counters Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 bg-neutral-950/80 border border-white/5 rounded-3xl p-6 sm:p-10 mb-18 text-center shadow-lg">
          {customCounters.map((cnt) => (
            <div key={cnt.label} className="space-y-2 py-4">
              <CountUp end={cnt.end} suffix={cnt.suffix} />
              <p className="text-xs sm:text-sm font-mono tracking-wider text-gray-500 uppercase">
                {cnt.label}
              </p>
            </div>
          ))}
        </div>

        {/* Core Highlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/30 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-gold-500/20 shadow-sm transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-gold-400/5 border border-gold-400/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-base font-serif font-bold text-white tracking-wide leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.03] flex items-center justify-between text-[10px] text-gray-600 font-mono">
                <span>Verified Choice</span>
                <span className="text-gold-500">✓ 5.0 Rated</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
