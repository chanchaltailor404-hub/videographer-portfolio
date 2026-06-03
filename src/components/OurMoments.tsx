import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const col1Images = [
  "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=500&auto=format&fit=crop", // Silhouette in rain
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop", // Stunning portrait closeup
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop", // Cinematic moody male portrait
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=500&auto=format&fit=crop", // Sun rays in forest trees
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&auto=format&fit=crop", // Classic black and white candid
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=500&auto=format&fit=crop"  // Dramatic cinematic look down street
];

const col2Images = [
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=500&auto=format&fit=crop", // Golden hour silhouette
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop", // Deep model lookup
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=500&auto=format&fit=crop", // Dramatic geometric shadows on architecture
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=500&auto=format&fit=crop", // Cyberpunk moody red/blue light portrait
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop", // Business silhouette looking over window
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop"  // Soft film grain natural light portrait
];

const col3Images = [
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500&auto=format&fit=crop", // Happy snowy candid romance
  "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=500&auto=format&fit=crop", // Intense narrative closeup
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=500&auto=format&fit=crop", // Extreme closeup look
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=500&auto=format&fit=crop", // Atmospheric night stroll wet road
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=500&auto=format&fit=crop", // Orange coat on gothic architecture street
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop"  // Laughing dynamic portrait
];

export default function OurMoments() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Heading slide-in
      gsap.fromTo(
        ".moments-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".moments-heading",
            start: "top 85%",
          },
        }
      );

      // Grid Box fade + scale slide-in
      gsap.fromTo(
        ".moments-grid-container",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".moments-grid-container",
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-[#0a0a0a] border-t border-white/5 relative z-20 overflow-hidden hover-pause"
    >
      {/* Background Visual Flare */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#c9a84c]/2 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title Section */}
        <div className="moments-heading mb-16 text-center max-w-2xl mx-auto opacity-0">
          <p className="text-xs uppercase tracking-[0.4em] text-[#c9a84c] font-medium mb-3">
            EXPLORE TIMELESS SHOTS
          </p>
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wide text-white uppercase">
            OUR <span className="text-[#c9a84c]">MOMENTS</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#c9a84c] mx-auto mt-6" />
        </div>

        {/* 3-Column Grid Container with fixed height clipping for smooth overflow */}
        <div className="moments-grid-container grid grid-cols-2 md:grid-cols-3 gap-6 h-[700px] overflow-hidden rounded-3xl border border-white/5 bg-black/40 p-4 md:p-6 backdrop-blur-[2px] relative opacity-0">
          
          {/* Column 1: Moves upward */}
          <div className="relative h-full overflow-hidden flex flex-col justify-center">
            <div className="animate-scroll-up flex flex-col gap-6">
              {col1Images.map((imgUrl, i) => (
                <div
                  key={`col1-${i}`}
                  className="relative flex-shrink-0 aspect-[4/5] sm:aspect-[3/4] w-full rounded-[20px] overflow-hidden border border-white/10 group shadow-md hover:scale-102 hover:border-[#c9a84c] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={imgUrl}
                    alt={`Moment Left ${i}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#c9a84c]/2 group-hover:opacity-0 transition-opacity duration-300" />
                </div>
              ))}
              {/* Duplicate array for seamless infinite looping */}
              {col1Images.map((imgUrl, i) => (
                <div
                  key={`col1-dup-${i}`}
                  className="relative flex-shrink-0 aspect-[4/5] sm:aspect-[3/4] w-full rounded-[20px] overflow-hidden border border-white/10 group shadow-md hover:scale-102 hover:border-[#c9a84c] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={imgUrl}
                    alt={`Moment Left Dup ${i}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#c9a84c]/2 group-hover:opacity-0 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Moves downward */}
          <div className="relative h-full overflow-hidden flex flex-col justify-center">
            <div className="animate-scroll-down flex flex-col gap-6">
              {col2Images.map((imgUrl, i) => (
                <div
                  key={`col2-${i}`}
                  className="relative flex-shrink-0 aspect-[4/5] sm:aspect-[3/4] w-full rounded-[20px] overflow-hidden border border-white/10 group shadow-md hover:scale-102 hover:border-[#c9a84c] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={imgUrl}
                    alt={`Moment Center ${i}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#c9a84c]/2 group-hover:opacity-0 transition-opacity duration-300" />
                </div>
              ))}
              {/* Duplicate array for seamless infinite looping */}
              {col2Images.map((imgUrl, i) => (
                <div
                  key={`col2-dup-${i}`}
                  className="relative flex-shrink-0 aspect-[4/5] sm:aspect-[3/4] w-full rounded-[20px] overflow-hidden border border-white/10 group shadow-md hover:scale-102 hover:border-[#c9a84c] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={imgUrl}
                    alt={`Moment Center Dup ${i}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#c9a84c]/2 group-hover:opacity-0 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Moves upward - Hidden on mobile */}
          <div className="relative h-full overflow-hidden hidden md:flex flex-col justify-center">
            <div className="animate-scroll-up flex flex-col gap-6 w-full">
              {col3Images.map((imgUrl, i) => (
                <div
                  key={`col3-${i}`}
                  className="relative flex-shrink-0 aspect-[3/4] w-full rounded-[20px] overflow-hidden border border-white/10 group shadow-md hover:scale-102 hover:border-[#c9a84c] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={imgUrl}
                    alt={`Moment Right ${i}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#c9a84c]/2 group-hover:opacity-0 transition-opacity duration-300" />
                </div>
              ))}
              {/* Duplicate array for seamless infinite looping */}
              {col3Images.map((imgUrl, i) => (
                <div
                  key={`col3-dup-${i}`}
                  className="relative flex-shrink-0 aspect-[3/4] w-full rounded-[20px] overflow-hidden border border-white/10 group shadow-md hover:scale-102 hover:border-[#c9a84c] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={imgUrl}
                    alt={`Moment Right Dup ${i}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#c9a84c]/2 group-hover:opacity-0 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
