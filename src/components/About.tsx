import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Film, Users, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [weddingsCount, setWeddingsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  useGSAP(
    () => {
      // Image frame animations
      gsap.fromTo(
        ".about-image-wrapper",
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 75%",
          },
        }
      );

      // Text column content sliding-in from right
      gsap.fromTo(
        ".about-content-slide",
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 75%",
          },
        }
      );

      // Stats Count Up triggers
      const tempStatsObj = { wed: 0, clie: 0, yrs: 0 };
      gsap.to(tempStatsObj, {
        wed: 200,
        clie: 150,
        yrs: 6,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-stats-row",
          start: "top 90%",
        },
        onUpdate: () => {
          setWeddingsCount(Math.floor(tempStatsObj.wed));
          setClientsCount(Math.floor(tempStatsObj.clie));
          setYearsCount(Math.floor(tempStatsObj.yrs));
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-section py-24 md:py-32 bg-[#0d0d0d] relative z-20 overflow-hidden"
    >
      {/* Gold Divider Line between sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />
      </div>

      {/* Background visual watermarks */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#c9a84c]/2 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Circular Image Frame with Gold Border */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="about-image-wrapper relative group w-72 h-72 sm:w-96 sm:h-96 aspect-square opacity-0">
              {/* Circular Primary Image Container with Gold Border */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#c9a84c] shadow-[0_0_35px_rgba(201,168,76,0.3)] relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=700&auto=format&fit=crop"
                  alt="Naina Tailor Cinematographer"
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/25 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Watermark badge adjusted for circular style */}
              <div className="absolute -bottom-2 -right-2 bg-[#0a0a0a] border border-[#c9a84c]/60 p-3 rounded-full flex flex-col justify-center items-center text-center shadow-2xl z-20 w-24 h-24">
                <Award className="w-4 h-4 text-[#c9a84c] mb-1 animate-pulse" />
                <span className="font-bebas text-[10px] tracking-wider text-white">HI-FI CINEMA</span>
                <span className="text-[7px] tracking-widest text-[#c9a84c] font-semibold">BEST RETINAL</span>
              </div>
            </div>
          </div>

          {/* Right Column - Narrative Elements (Slides in from right) */}
          <div className="about-content-slide lg:col-span-7 flex flex-col justify-center opacity-0">
            <p className="text-xs uppercase tracking-[0.4em] text-[#c9a84c] font-medium mb-3">
              THE STORYTELLER
            </p>
            <h2 className="font-bebas text-5xl md:text-7xl tracking-wide text-white uppercase mb-8">
              Naina Tailor — <span className="text-[#c9a84c]">CINEMATOGRAPHER</span>
            </h2>

            <div className="space-y-6 text-gray-300 font-light leading-relaxed text-sm md:text-base">
              <p>
                Drishya Films is a premium cinematic studio based in India. We capture your 
                most precious moments from grand Indian weddings to powerful brand stories. 
                Every frame we create is a memory that lasts forever.
              </p>
              <p>
                By blending cinema-grade technology with profound visual perspective, we capture the 
                grandeur, textures, and vibrant emotional heights of luxury Indian celebrations and 
                brand narratives with extreme depth and meticulous precision.
              </p>
            </div>

            {/* Custom Stats Block (4 Columns!) matching exactly the requested count values */}
            <div className="about-stats-row grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 border-t border-b border-white/5 py-8 my-10 bg-white/[0.01] px-4">
              {/* Stat 1 */}
              <div className="text-center flex flex-col items-center">
                <div className="p-2 bg-[#c9a84c]/5 border border-[#c9a84c]/10 mb-2 rounded-none">
                  <Film className="w-4 h-4 text-[#c9a84c]" />
                </div>
                <div className="font-bebas text-3xl md:text-4xl lg:text-5xl tracking-tight text-white flex items-baseline">
                  <span>{weddingsCount}</span>
                  <span className="text-base text-[#c9a84c] ml-0.5">+</span>
                </div>
                <p className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mt-1">
                  Weddings
                </p>
              </div>

              {/* Stat 2 */}
              <div className="text-center flex flex-col items-center">
                <div className="p-2 bg-[#c9a84c]/5 border border-[#c9a84c]/10 mb-2 rounded-none">
                  <Users className="w-4 h-4 text-[#c9a84c]" />
                </div>
                <div className="font-bebas text-3xl md:text-4xl lg:text-5xl tracking-tight text-white flex items-baseline">
                  <span>{clientsCount}</span>
                  <span className="text-base text-[#c9a84c] ml-0.5">+</span>
                </div>
                <p className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mt-1">
                  Clients
                </p>
              </div>

              {/* Stat 3 */}
              <div className="text-center flex flex-col items-center">
                <div className="p-2 bg-[#c9a84c]/5 border border-[#c9a84c]/10 mb-2 rounded-none">
                  <Award className="w-4 h-4 text-[#c9a84c]" />
                </div>
                <div className="font-bebas text-3xl md:text-4xl lg:text-5xl tracking-tight text-white flex items-baseline">
                  <span>{yearsCount}</span>
                  <span className="text-base text-[#c9a84c] ml-0.5">+</span>
                </div>
                <p className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mt-1">
                  Years
                </p>
              </div>

              {/* Stat 4 */}
              <div className="text-center flex flex-col items-center">
                <div className="p-2 bg-[#c9a84c]/5 border border-[#c9a84c]/10 mb-2 rounded-none">
                  <Globe className="w-4 h-4 text-[#c9a84c]" />
                </div>
                <div className="font-bebas text-2xl sm:text-3xl lg:text-4xl text-[#c9a84c] flex items-center justify-center h-10 md:h-12 uppercase">
                  <span>PAN INDIA</span>
                </div>
                <p className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mt-1">
                  Coverage
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#c9a84c]">
                Represented in Mumbai &amp; Across India
              </span>
              <div className="hidden sm:block h-[1px] bg-white/10 flex-1" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
