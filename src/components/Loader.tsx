import { useEffect, useState } from "react";
import { gsap } from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Add overflow hidden to body during loading
    document.body.classList.add("preloader-lock");

    // Animate percentage count up
    const progressObject = { value: 0 };
    const progressTl = gsap.to(progressObject, {
      value: 100,
      duration: 2.2,
      ease: "power2.out",
      onUpdate: () => {
        setProgress(Math.floor(progressObject.value));
      },
    });

    const overlayTl = gsap.timeline({
      delay: 2.3,
      onComplete: () => {
        document.body.classList.remove("preloader-lock");
        onComplete();
      },
    });

    // Elegant text slide reveal
    overlayTl
      .fromTo(
        ".loader-word",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power4.out" }
      )
      .to(
        ".loader-subtitle",
        { opacity: 1, duration: 0.5 },
        "-=0.3"
      )
      .to(
        ".loader-word, .loader-subtitle, .progress-bar-container, .progress-num",
        {
          opacity: 0,
          y: -40,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.inOut",
          delay: 0.5,
        }
      )
      .to(
        ".loader-bg-slice",
        {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1.0,
          stagger: 0.15,
          ease: "power4.inOut",
        },
        "-=0.2"
      );

    return () => {
      progressTl.kill();
      overlayTl.kill();
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between p-8 md:p-16 select-none bg-transparent">
      {/* Background Slices for high-end wipe reveal */}
      <div className="absolute inset-0 flex z-0">
        <div className="loader-bg-slice flex-1 bg-[#0d0d0d] border-r border-[#1a1a1a]/10"></div>
        <div className="loader-bg-slice flex-1 bg-[#090909] border-r border-[#1a1a1a]/10"></div>
        <div className="loader-bg-slice flex-1 bg-[#0b0b0b]"></div>
      </div>

      {/* Header element */}
      <div className="relative z-10 flex justify-between items-center">
        <span className="font-bebas text-2xl tracking-widest text-[#c9a84c] opacity-80">
          DRISHYA FILMS
        </span>
        <span className="font-mono text-xs text-[#c9a84c]/60 uppercase tracking-widest">
          Est. 2020
        </span>
      </div>

      {/* Middle element */}
      <div className="relative z-10 my-auto text-center">
        <div className="overflow-hidden mb-2">
          <h1 className="font-bebas text-5xl sm:text-7xl md:text-8xl tracking-wider text-white inline-block">
            <span className="loader-word inline-block mr-4">DRISHYA</span>
            <span className="loader-word inline-block text-[#c9a84c]">FILMS</span>
          </h1>
        </div>
        <p className="loader-subtitle text-xs sm:text-sm font-light tracking-[0.3em] text-gray-400 uppercase opacity-0">
          Indian Cinematography &amp; Direction Portfolio
        </p>
      </div>

      {/* Footer Progress element */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div className="progress-bar-container w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-[#c9a84c] transition-all duration-75"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="font-bebas text-4xl sm:text-6xl tracking-tighter text-[#c9a84c] flex items-baseline">
          <span className="progress-num inline-block">{progress}</span>
          <span className="text-sm font-mono text-white/40 ml-1">%</span>
        </div>
      </div>
    </div>
  );
}
