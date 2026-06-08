import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { FAQS } from "../data";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-12 sm:py-16 md:py-20 bg-[#050505] text-white relative border-b border-white/5 overflow-hidden">
      
      {/* Glow Backing */}
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-gold-600/[0.01] blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-gold-400 font-mono text-xs tracking-widest uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answers & Clarifications</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-light">
            Need clarification on the healing timeline or custom commissions? Browse these details curated straight by our design desks.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-neutral-900/30 border border-white/5 rounded-2xl overflow-hidden transition-colors duration-250 hover:border-gold-500/10"
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-sm sm:text-base text-neutral-100 hover:text-gold-300 transition-colors cursor-pointer focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-gold-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
                  )}
                </button>

                {/* Body Text */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-white/[0.03] p-5 bg-neutral-950/20" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light font-sans select-all">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
