import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import CtaSection from "./components/CtaSection";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  const handleViewPortfolio = () => {
    const el = document.getElementById("portfolio");
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-white selection:bg-gold-500 selection:text-black font-sans antialiased">
      
      {/* Floating Glass Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Layout */}
      <main>
        {/* Full-Screen Hero */}
        <Hero 
          onOpenBooking={handleOpenBooking} 
          onViewPortfolio={handleViewPortfolio} 
        />

        {/* Portfolio Masonry Grid with slider */}
        <Portfolio />

        {/* Dynamic Services In Goa */}
        <Services />

        {/* Detailed Narrative About Studio */}
        <About />

        {/* Differentiatiors and Counters */}
        <WhyChooseUs />

        {/* Heavy Conversion CTA Banner */}
        <CtaSection onOpenBooking={handleOpenBooking} />

        {/* Infinite marquee Reviews Ribbon */}
        <Reviews />

        {/* Local Business Accordion FAQs */}
        <Faqs />

        {/* Styled Dark Google Coordinates contact map */}
        <Contact />
      </main>

      {/* Solid bottom footer */}
      <Footer />

      {/* Intake consultation booking dialogue */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
      />

      {/* Floating, glowing WhatsApp chat launcher */}
      <FloatingWhatsApp />

    </div>
  );
}
