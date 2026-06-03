import { useRef, useState, FormEvent, ChangeEvent } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Linkedin,
  Send,
  CheckCircle,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useGSAP(
    () => {
      // Intro headers
      gsap.fromTo(
        ".contact-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-heading",
            start: "top 85%",
          },
        }
      );

      // Section split info list
      gsap.fromTo(
        ".contact-info-list",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-grid-target",
            start: "top 80%",
          },
        }
      );

      // Form animation
      gsap.fromTo(
        ".contact-form-box",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-grid-target",
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate luxury API response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Automatically dismiss success window after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1800);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-24 md:py-32 bg-[#0d0d0d] relative z-20 overflow-hidden"
    >
      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="absolute right-10 bottom-10 w-80 h-80 bg-[#c9a84c]/2 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="contact-heading mb-16 md:mb-24 opacity-0 max-w-xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#c9a84c] font-medium mb-3">
            ACQUISITION &amp; BOOKING
          </p>
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wide text-white uppercase">
            LET'S CONCEIVE <span className="text-[#c9a84c]">YOUR FILM</span>
          </h2>
          <p className="text-gray-400 font-light text-sm mt-4 leading-relaxed">
            Ready to convert your vision into an immutable masterwork? Fill out the 
            concierge desk form below to obtain direct dates and package catalogs.
          </p>
        </div>

        {/* Form and Contact Detail Split */}
        <div className="contact-grid-target grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Direct Info & Social Handles */}
          <div className="contact-info-list lg:col-span-4 flex flex-col justify-between gap-12 opacity-0">
            <div className="space-y-10">
              
              {/* Info Block 1 */}
              <div className="flex items-start gap-5">
                <div className="p-3 bg-white/3 border border-white/5 text-[#c9a84c]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">
                    Direct Inquiry
                  </p>
                  <a
                    href="mailto:hello@drishyafilms.com"
                    className="text-white hover:text-[#c9a84c] transition-colors text-base font-light"
                  >
                    hello@drishyafilms.com
                  </a>
                </div>
              </div>

              {/* Info Block 2 */}
              <div className="flex items-start gap-5">
                <div className="p-3 bg-white/3 border border-white/5 text-[#c9a84c]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">
                    Direct Call / Text
                  </p>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    className="text-white hover:text-[#c9a84c] transition-colors text-base font-light"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Info Block 3 */}
              <div className="flex items-start gap-5">
                <div className="p-3 bg-white/3 border border-white/5 text-[#c9a84c]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-1">
                    Primary Studio Location
                  </p>
                  <span className="text-white text-base font-light">
                    Mumbai, India
                  </span>
                </div>
              </div>

              {/* Gold WhatsApp Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full px-6 py-4 border-2 border-[#c9a84c] bg-[#c9a84c] hover:bg-transparent text-black hover:text-[#c9a84c] font-bebas text-md tracking-widest transition-all duration-300 rounded-none flex items-center justify-center gap-2 font-semibold shadow-[0_0_15px_rgba(201,168,76,0.25)]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Connect on WhatsApp
                </a>
              </div>

            </div>

            {/* Social Rows block */}
            <div>
              <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-4">
                DRISHYA CHANNELS
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/drishyafilms"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-white/10 hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-black text-[#c9a84c] flex items-center justify-center transition-all bg-white/[0.02]"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-white/10 hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-black text-[#c9a84c] flex items-center justify-center transition-all bg-white/[0.02]"
                  aria-label="YouTube Profile"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Mini form structure */}
          <div className="contact-form-box lg:col-span-8 bg-[#0f0f0f] border border-white/5 p-8 md:p-12 relative opacity-0">
            {isSuccess && (
              <div className="absolute inset-0 bg-[#0f0f0f] z-20 flex flex-col items-center justify-center text-center p-8 transition-all duration-300">
                <CheckCircle className="w-16 h-16 text-[#c9a84c] mb-4 animate-bounce" />
                <h4 className="font-bebas text-3xl tracking-widest text-[#c9a84c] mb-2">
                  TRANSMISSION SUCCESSFUL
                </h4>
                <p className="text-gray-300 font-light text-sm max-w-sm mb-6 leading-relaxed">
                  Your details have entered Naina's secure calendar pipeline. Expect a direct representational callback within 12 business hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2 border border-white/10 text-white font-mono text-xs hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all uppercase"
                >
                  Send another request
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Input Name */}
                <div className="relative group">
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                    NAME / ORGANIZATION <span className="text-[#c9a84c]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#c9a84c] px-4 py-4 text-white text-sm focus:outline-none transition-colors duration-300 placeholder:text-gray-700"
                  />
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c9a84c] scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left duration-300" />
                </div>

                {/* Input Email */}
                <div className="relative group">
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                    EMAIL ADDRESS <span className="text-[#c9a84c]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#c9a84c] px-4 py-4 text-white text-sm focus:outline-none transition-colors duration-300 placeholder:text-gray-700"
                  />
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c9a84c] scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left duration-300" />
                </div>

              </div>

              {/* Message Block */}
              <div className="relative group">
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                  PROJECT SPECIFICS &amp; MESSAGE <span className="text-[#c9a84c]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your production date, location, aesthetic style..."
                  className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#c9a84c] px-4 py-4 text-white text-sm focus:outline-none transition-colors duration-300 resize-none placeholder:text-gray-700"
                />
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c9a84c] scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left duration-300" />
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#c9a84c] hover:bg-[#e0be5a] disabled:bg-gray-800 disabled:text-gray-600 text-black font-bebas text-lg tracking-widest transition-all duration-300 uppercase flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(201,168,76,0.15)] hover:shadow-[0_0_35px_rgba(201,168,76,0.35)] cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    TRANSMITTING DIRECTIVE...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-black font-bold fill-black" />
                    SEND INQUIRY DETAILS
                  </>
                )}
              </button>

              {/* Secure Token disclaimer */}
              <div className="flex items-center gap-2 justify-center text-[10px] text-gray-600 font-mono">
                <HelpCircle className="w-3 h-3 text-[#c9a84c]/50" />
                <span>Encrypted transmission // Direct inbox of Director Naina Tailor</span>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
