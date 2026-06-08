import { Phone, MessageCircle, MapPin, Clock, ExternalLink } from "lucide-react";

export default function Contact() {
  const mapLink = "https://google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRiPAjIHCAIQIRiPAjIHCAMQIRiPAtIBCTczMThqMGoxNagCCLACAfEF7EFBwFyhrt4&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KZtZz4md7787MbaWTOCOM5-S&daddr=Khalcha+wada,+Arambol+Beach+Rd,+armabol,+Arambol,+Goa+403524";

  // Standard responsive Kala Tattoo Google Embed code, with beautiful dark overlay filter
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15361.631046132043!2d73.7027582!3d15.7046395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbec7f969cf599b%3A0x92aa598fe3cf1699!2sKala%20Tattoo%20Studio!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-[#030303] text-white relative border-b border-white/5 overflow-hidden">
      
      {/* Decorative localized meshes */}
      <div className="absolute top-[30%] left-[-15%] w-[450px] h-[450px] rounded-full bg-gold-600/[0.012] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-gold-400 font-mono text-xs tracking-widest uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect & Reach Out</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight mb-4">
            Visit Our Tattoo Studio
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-light">
            Conveniently nestled along the coastal Arambol Beach Road. Walk in to browse physical flash portfolios or discuss concepts with Rohan.
          </p>
        </div>

        {/* Layout: Info Sidebar and Visual Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Info Sidebar (4 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-neutral-950/80 border border-white/5 p-6 sm:p-8 rounded-3xl">
            
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-white tracking-tight pb-3 border-b border-white/5">
                Kala Tattoo Studio
              </h3>

              {/* Address card */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase block mb-1">
                    Studio Location
                  </span>
                  <p className="text-neutral-200 text-sm leading-relaxed max-w-xs">
                    Khalcha Wada, Arambol Beach Road,<br />
                    Arambol, Goa 403524
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-400/5 border border-gold-400/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase block mb-1">
                    Direct Contact Number
                  </span>
                  <a 
                    href="tel:+917057830197" 
                    className="text-white hover:text-gold-300 text-base font-bold transition-colors font-mono"
                  >
                    +91 70578 30197
                  </a>
                </div>
              </div>

              {/* Hours chart */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-400/5 border border-gold-400/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase block mb-1">
                    Hours of Operation
                  </span>
                  <p className="text-neutral-200 text-sm leading-relaxed">
                    Open Daily: <span className="text-gold-300 font-semibold font-mono">Until 11 PM</span>
                  </p>
                  <p className="text-[10px] text-gray-500 mt-1">Accepting walk-ins & appointments daily</p>
                </div>
              </div>
            </div>

            {/* Core Click CTAs */}
            <div className="pt-6 border-t border-white/5 space-y-3">
              <a
                href="tel:+917057830197"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-black py-3 px-6 rounded-xl font-mono text-xs font-bold tracking-widest uppercase shadow hover:shadow-gold-500/10 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current shrink-0" />
                <span>Call Now Direct</span>
              </a>

              <a
                href="https://wa.me/917057830197?text=Hi%20Kala%20Tattoo%20Studio!%20I'm%20visiting%20Arambol%20and%20would%20like%20to%20query%20about%20booking%20a%20tattoo%20session."
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 border border-white/10 hover:border-emerald-500/30 bg-white/5 hover:bg-emerald-500/10 text-white py-3 px-6 rounded-xl font-mono text-xs font-bold tracking-widest uppercase transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp Instant</span>
              </a>
            </div>

          </div>

          {/* Interactive Styled Google Map Frame (7 columns) */}
          <div className="lg:col-span-7 relative flex flex-col justify-between bg-neutral-950/40 border border-white/5 p-4 rounded-3xl min-h-[350px] sm:min-h-[450px]">
            
            {/* Dark Styled Map Wrapper */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative border border-white/10 flex-grow">
              <iframe
                title="Kala Tattoo Studio Arambol Beach Road Goa Location Route"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(1) invert(0.91) contrast(1.15) brightness(0.85)", // Luxury Dark styled filter
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Direct Directions button trigger footer */}
            <div className="pt-4 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span className="truncate pr-4">🗺️ Coordinates mapped to Khalcha Wada beach junction</span>
              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 font-semibold underline shrink-0 cursor-pointer"
              >
                <span>Google Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
