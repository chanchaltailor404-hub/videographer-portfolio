import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  city: string;
  rating: number;
  tag: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote: "Drishya Films did not just record our wedding; they created an exquisite piece of cinema. Every tear, laugh, and heavy royal gaze was captured with breathtaking framing. Naina is a true master.",
    author: "Aditi & Devraj",
    city: "Udaipur",
    rating: 5,
    tag: "Royal Wedding",
  },
  {
    id: 2,
    quote: "For our luxury automotive launch, we needed visuals that screamed premium quality and performance. Drishya Films blew past our expectations. Their cinematography is second to none in India.",
    author: "Mahindra Marketing",
    city: "Mumbai",
    rating: 5,
    tag: "Brand Campaign",
  },
  {
    id: 3,
    quote: "An unparalleled filming experience. Naina's lens found stories in our music session that we couldn't even see ourselves. It represents Indian soul packaged in clean Hollywood standards.",
    author: "Kabir Singh Trio",
    city: "New Delhi",
    rating: 5,
    tag: "Music Video",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      // Heading animate in
      gsap.fromTo(
        ".testimonials-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials-heading",
            start: "top 85%",
          },
        }
      );

      // Wrapper animate in
      gsap.fromTo(
        ".testimonials-slider-box",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials-slider-box",
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const handlePrev = () => {
    gsap.to(slideRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.3,
      onComplete: () => {
        setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
        gsap.fromTo(
          slideRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
        );
      },
    });
  };

  const handleNext = () => {
    gsap.to(slideRef.current, {
      opacity: 0,
      x: 30,
      duration: 0.3,
      onComplete: () => {
        setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
        gsap.fromTo(
          slideRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
        );
      },
    });
  };

  const activeTestimonial = testimonialsData[activeIndex];

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="py-24 md:py-32 bg-[#0a0a0a] border-t border-white/5 relative z-20 overflow-hidden"
    >
      {/* Visual background ambient mask */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-[#c9a84c]/2 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="testimonials-heading mb-16 text-center max-w-2xl mx-auto opacity-0">
          <p className="text-xs uppercase tracking-[0.4em] text-[#c9a84c] font-medium mb-3">
            CLIENT ENDORSEMENTS
          </p>
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wide text-white uppercase">
            IMMORTALIZED <span className="text-[#c9a84c]">STORIES</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#c9a84c] mx-auto mt-6" />
        </div>

        {/* Carousel Slider Box */}
        <div className="testimonials-slider-box max-w-4xl mx-auto bg-[#0f0f0f] border border-white/5 p-8 md:p-16 relative opacity-0 shadow-2xl">
          {/* Subtle Decorative Quote Icon */}
          <div className="absolute top-6 right-8 text-white/5 pointer-events-none">
            <Quote className="w-32 h-32 stroke-[0.5px]" />
          </div>

          <div ref={slideRef} className="relative z-10 flex flex-col items-center text-center">
            {/* Tag / Category Badge */}
            <span className="text-[10px] tracking-[0.3em] font-mono uppercase bg-[#c9a84c]/10 text-[#c9a84c] px-3.5 py-1.5 border border-[#c9a84c]/20 mb-8">
              {activeTestimonial.tag}
            </span>

            {/* Gold Stellar ratings */}
            <div className="flex items-center gap-1 mb-8">
              {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#c9a84c] text-[#c9a84c]" />
              ))}
            </div>

            {/* Quote content */}
            <blockquote className="font-dmsans text-lg sm:text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-10 max-w-2xl">
              "{activeTestimonial.quote}"
            </blockquote>

            {/* Profile footer with client name and city below */}
            <div className="flex flex-col items-center">
              <span className="font-bebas text-xl md:text-2xl tracking-widest text-[#c9a84c] uppercase">
                {activeTestimonial.author}
              </span>
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                {activeTestimonial.city}, India
              </span>
            </div>
          </div>

          {/* Nav Controls */}
          <div className="flex justify-between items-center mt-12 md:mt-4 pt-8 border-t border-white/5">
            {/* Index Tracker */}
            <div className="font-mono text-[10px] text-gray-500 tracking-widest">
              0{activeIndex + 1} / 0{testimonialsData.length}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-white/10 text-white hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-black transition-all flex items-center justify-center rounded-none cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-white/10 text-white hover:border-[#c9a84c] hover:bg-[#c9a84c] hover:text-black transition-all flex items-center justify-center rounded-none cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
