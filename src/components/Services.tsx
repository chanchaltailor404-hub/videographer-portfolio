import { useRef, ComponentType } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Music, Tv, Compass, Sparkles, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: ComponentType<{ className?: string }>;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Wedding & Sangeet Films",
    description: "Elegant, high-end wedding documentaries and dramatic sangeet cinematic features. Capturing grand celebrations, exquisite traditions, and pure emotions.",
    details: ["Multi-Cam 4K Raw Support", "Premium Cinematic Grading", "Traditional & Folk Soundscapes", "Grand Highlight Trailers"],
    icon: Heart,
  },
  {
    id: 2,
    title: "Corporate & Brand Videos",
    description: "Visually striking commercial campaigns and powerful industry films engineered to communicate brand value, vision, and scale across India.",
    details: ["Concept & Storyboard Design", "High-End Drone & Crane Shoots", "Commercial Rights Soundtrack", "Premium Distribution Pack"],
    icon: Tv,
  },
  {
    id: 3,
    title: "Music Videos",
    description: "Provocative visual translations of sonic art. Fusing choreography, stylized Indian aesthetic accents, and state-of-the-art lighting grids.",
    details: ["Stylized Lighting Design", "Heavy VFX & Color Matching", "Choreography Multi-Shoots", "Artist Identity Optimization"],
    icon: Music,
  },
  {
    id: 4,
    title: "Documentary Films",
    description: "Deep, raw human stories crafted with cinematic standards. Unveiling India's diverse landscapes, vibrant realities, and majestic heritage.",
    details: ["Deep Editorial Research", "Travel Ready Compact Rigs", "Authentic Native Score design", "Festival Ready Masters"],
    icon: Compass,
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Intro headings
      gsap.fromTo(
        ".services-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-heading",
            start: "top 85%",
          },
        }
      );

      // Staggered card animations
      gsap.fromTo(
        ".service-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-24 md:py-32 bg-[#0a0a0a] border-t border-white/5 relative z-20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] bg-[#c9a84c]/2 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="services-heading mb-16 md:mb-24 text-center max-w-2xl mx-auto opacity-0">
          <p className="text-xs uppercase tracking-[0.4em] text-[#c9a84c] font-medium mb-3">
            PRODUCTION SERVICES
          </p>
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wide text-white uppercase text-center">
            EXPERTISE &amp; <span className="text-[#c9a84c]">OFFERINGS</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#c9a84c] mx-auto mt-6 mb-4" />
          <p className="text-gray-400 font-light text-sm">
            Providing full-suite cinematic production capabilities, from conceptual 
            pre-production to award-ready color grading post deliverables.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="service-card group bg-[#0f0f0f] border border-white/5 p-6 md:p-8 relative overflow-hidden transition-all duration-500 hover:border-[#c9a84c]/80 hover:shadow-[0_0_35px_rgba(201,168,76,0.22)] hover:-translate-y-2 flex flex-col justify-between opacity-0"
              >
                {/* Visual gold glow hover radial backdrop */}
                <div className="absolute -inset-px bg-gradient-to-b from-[#c9a84c]/0 to-[#c9a84c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div>
                  {/* Icon on TOP */}
                  <div className="mb-6">
                    <div className="inline-block p-3.5 bg-[#c9a84c]/5 border border-[#c9a84c]/20 text-[#c9a84c] transition-all duration-300 group-hover:bg-[#c9a84c] group-hover:text-black group-hover:shadow-[0_0_15px_rgba(201,168,76,0.3)]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title and Description BELOW */}
                  <h3 className="font-bebas text-2xl md:text-3xl tracking-wider text-white uppercase mb-3 transition-colors duration-300 group-hover:text-[#c9a84c]">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-light text-xs md:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Compact Details bullet list styled luxuriously */}
                <div className="border-t border-white/5 pt-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {service.details.slice(0, 2).map((detail, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-gray-500 bg-white/2 px-2 py-0.5 border border-white/5">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
