import React, { useState } from "react";
import { X, Calendar, User, Phone, Mail, Sparkles, CheckCircle, Smartphone } from "lucide-react";
import { BookingDetails } from "../types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState<BookingDetails>({
    name: "",
    phone: "",
    email: "",
    tattooStyle: "Realism",
    placement: "Arm / Sleeve",
    size: "Medium (3 - 5 inches)",
    ideaDescription: "",
    preferredDate: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Estimate the session complexity dynamically
  const getEstimation = () => {
    const isSleeve = formData.placement.toLowerCase().includes("sleeve") || formData.placement.toLowerCase().includes("back");
    const isLarge = formData.size.toLowerCase().includes("large");
    const isRealismOrMandala = formData.tattooStyle === "Realism" || formData.tattooStyle === "Mandala" || formData.tattooStyle === "Cover-Up";

    if (isSleeve && isLarge) {
      return { sessions: "3 - 5 Sessions", complexity: "Masterclass Extreme", duration: "12 - 20 hrs total" };
    } else if (isLarge || (isSleeve && isRealismOrMandala)) {
      return { sessions: "2 - 3 Sessions", complexity: "Advanced Custom", duration: "8 - 12 hrs total" };
    } else if (isRealismOrMandala) {
      return { sessions: "1 - 2 Sessions", complexity: "High Detail", duration: "4 - 6 hrs total" };
    } else if (formData.size.toLowerCase().includes("medium")) {
      return { sessions: "1 Session", complexity: "Moderate Precision", duration: "2 - 3 hrs" };
    } else {
      return { sessions: "1 Session", complexity: "Fine minimalist", duration: "1 - 1.5 hrs" };
    }
  };

  const estimation = getEstimation();

  // Create WhatsApp message URI
  const triggerWhatsApp = () => {
    const space = "%20";
    const newline = "%0A";
    const text = `*KALA TATTOO STUDIO - CONSULTATION INTAKE*${newline}${newline}` +
      `*Name:* ${formData.name}${newline}` +
      `*Phone:* ${formData.phone}${newline}` +
      `*Email:* ${formData.email}${newline}` +
      `*Style:* ${formData.tattooStyle}${newline}` +
      `*Placement:* ${formData.placement}${newline}` +
      `*Size:* ${formData.size}${newline}` +
      `*Idea:* ${formData.ideaDescription}${newline}` +
      `*Date:* ${formData.preferredDate || "Flexible"}${newline}${newline}` +
      `_Estimated Complexity:_ *${estimation.complexity}* [${estimation.sessions} - ${estimation.duration}]`;
    
    const url = `https://wa.me/917057830197?text=${text}`;
    window.open(url, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerWhatsApp();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      {/* Container */}
      <div 
        id="booking-modal-card" 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-premium p-6 sm:p-8 text-white shadow-2xl transition-all duration-300"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-gold-500/20 text-gray-400 hover:text-gold-300 transition-colors duration-150"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-gold-400 text-sm tracking-wider uppercase font-mono mb-2">
                <Sparkles className="w-4 h-4 animation-pulse" />
                <span>Custom Art Registration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Book Your Art Consultation
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Enter your ink ideas below. Our custom designer will coordinate with Rohan to map out your masterpiece.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="relative">
                  <label className="block text-xs font-mono font-medium text-gray-400 uppercase mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="William"
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-400 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-mono font-medium text-gray-400 uppercase mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 70578 30197"
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-400 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-mono font-medium text-gray-400 uppercase mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="william@gmail.com"
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-400 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-mono font-medium text-gray-400 uppercase mb-1.5">
                    Preferred Session Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 hover:text-gold-400" />
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-gold-400 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Grid 3 - Custom Options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-gray-400 uppercase mb-1.5">
                    Style Preference
                  </label>
                  <select
                    name="tattooStyle"
                    value={formData.tattooStyle}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-gold-400 transition-all duration-200"
                  >
                    <option value="Realism" className="bg-neutral-900">Realism Tattoos</option>
                    <option value="Mandala" className="bg-neutral-900">Mandala / Dotwork</option>
                    <option value="Fine Line" className="bg-neutral-900">Fine Line / Minimal</option>
                    <option value="Cover-Up" className="bg-neutral-900">Cover-Up Masterclass</option>
                    <option value="Spiritual" className="bg-neutral-900">Spiritual & Faith</option>
                    <option value="Custom" className="bg-neutral-900">Bespoke Custom Idea</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-gray-400 uppercase mb-1.5">
                    Body Placement
                  </label>
                  <select
                    name="placement"
                    value={formData.placement}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-gold-400 transition-all duration-200"
                  >
                    <option value="Arm / Sleeve" className="bg-neutral-900">Forearm / Full Sleeve</option>
                    <option value="Shoulder / Chest" className="bg-neutral-900">Shoulder / Chest</option>
                    <option value="Back / Ribs" className="bg-neutral-900">Full Back / Rib Cage</option>
                    <option value="Leg / Calf" className="bg-neutral-900">Leg / Upper Thigh</option>
                    <option value="Wrist / Collar" className="bg-neutral-900">Wrist / Collarbone</option>
                    <option value="Other Area" className="bg-neutral-900">Other Placement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-gray-400 uppercase mb-1.5">
                    Approximate Size
                  </label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-gold-400 transition-all duration-200"
                  >
                    <option value="Small (< 2 inches)" className="bg-neutral-900">Small (Subtle, &lt;2")</option>
                    <option value="Medium (3 - 5 inches)" className="bg-neutral-900">Medium (3" - 5")</option>
                    <option value="Large (6+ inches)" className="bg-neutral-900">Large Specialist (6"+)</option>
                    <option value="Full Sleeve Project" className="bg-neutral-900 font-bold">Full Sleeve / Cover-up</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-mono font-medium text-gray-400 uppercase mb-1.5">
                  Describe the Meaning & Core Concept *
                </label>
                <textarea
                  required
                  name="ideaDescription"
                  value={formData.ideaDescription}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Explain your vision, symoblogy, background motifs or cover-up needs. Rohan has 9 years of experience with custom storytelling..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-400 transition-all duration-200 resize-none"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm h-12 px-6 rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 cursor-pointer transition-all duration-200 focus:outline-none"
                >
                  <Smartphone className="w-4 h-4 text-white animate-pulse" />
                  Confirm & Send via WhatsApp
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Submission success state */
          <div className="py-12 px-4 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mb-3">
              Application Initiated!
            </h2>
            <p className="text-gray-300 text-sm max-w-md mx-auto mb-6">
              Hey <span className="text-gold-300 font-semibold">{formData.name}</span>, your concept portfolio has been logged! Rohan and our custom team will review your specs for <span className="font-semibold text-white">{formData.tattooStyle}</span>.
            </p>

            <div className="w-full max-w-md bg-white/5 rounded-2xl p-5 text-left border border-white/5 space-y-3 mb-8">
              <div className="text-xs font-mono uppercase text-gold-400 tracking-wider font-bold">Booking Receipt Details</div>
              <div className="grid grid-cols-2 gap-y-2.5 text-xs">
                <div>
                  <span className="text-gray-500">Contact Number:</span>
                  <p className="text-gray-200 font-semibold">{formData.phone}</p>
                </div>
                <div>
                  <span className="text-gray-500">Preferred Date:</span>
                  <p className="text-gray-200 font-semibold">{formData.preferredDate || "Needs Discussion"}</p>
                </div>
                <div>
                  <span className="text-gray-500">Body Placement:</span>
                  <p className="text-gray-200 font-semibold">{formData.placement}</p>
                </div>
                <div>
                  <span className="text-gray-500">Intended Dimensions:</span>
                  <p className="text-gray-200 font-semibold">{formData.size}</p>
                </div>
              </div>
              <div className="border-t border-white/5 pt-3">
                <span className="text-gray-500 text-[11px] block mb-1">Estimated Setup Complexity:</span>
                <span className="inline-block bg-gold-500/20 border border-gold-500/20 rounded-full px-3 py-1 font-mono text-[10px] text-gold-300 font-semibold">
                  {estimation.complexity} • {estimation.sessions} • {estimation.duration}
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mb-6">
              Our team will review your submitted specifications and coordinate on your custom artwork.
            </p>

            <div className="w-full max-w-sm">
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
