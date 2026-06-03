import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkGallery from "./components/WorkGallery";
import OurMoments from "./components/OurMoments";
import { WeddingCinematicStrip, BehindTheScenesStrip, CinematicTiltedStrip } from "./components/FlowingStrips";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import VideoModal from "./components/VideoModal";
import { Instagram, Youtube, MessageCircle } from "lucide-react";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Trailer placeholder URL
const HERO_TRAILER_URL =
  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c05427d2c6c39055e810a95574744d01&profile_id=164&oauth2_token_id=57447761";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded) return;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    (window as any).lenis = lenis;

    // Synchronize Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Integrate Lenis into GSAP ticker
    const gsapTickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(gsapTickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger to ensure all markers and bounds fit the smooth container
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      (window as any).lenis = null;
      gsap.ticker.remove(gsapTickerCallback);
    };
  }, [isLoaded]);

  return (
    <>
      {/* Intro cinematic loader */}
      {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}

      {/* Main viewport structure */}
      <div
        className={`relative min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-between selection:bg-[#c9a84c] selection:text-black overflow-x-hidden ${
          isLoaded ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
        }`}
      >
        {isLoaded && (
          <>
            {/* Sticky Frosted Header Navbar */}
            <Navbar />

            {/* Immersive Main Sections */}
            <main className="flex-1 w-full flex flex-col">
              <Hero onWatchTrailer={() => setActiveVideoUrl(HERO_TRAILER_URL)} />
              
              <WeddingCinematicStrip />
              
              <WorkGallery onSelectVideo={(url) => setActiveVideoUrl(url)} />
              
              <OurMoments />
              
              <BehindTheScenesStrip />
              
              <About />
              
              <CinematicTiltedStrip />
              
              <Services />
              
              <Testimonials />
              
              <Contact />
            </main>

            {/* Cinema Fullscreen Lightbox Player */}
            <VideoModal
              videoUrl={activeVideoUrl}
              onClose={() => setActiveVideoUrl(null)}
            />

            {/* Luxury cinematic footer */}
            <footer className="bg-[#050505] border-t border-white/5 py-16 text-center relative z-20">
              <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8">
                {/* Logo center */}
                <div className="font-bebas text-3xl tracking-[0.25em] text-[#c9a84c] select-none">
                  DRISHYA FILMS
                </div>

                {/* Social icons: Instagram, YouTube, WhatsApp in gold */}
                <div className="flex items-center gap-6">
                  <a
                    href="https://instagram.com/drishyafilms"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#c9a84c] hover:text-[#e0be5a] transition-all p-2 rounded-full border border-white/5 hover:border-[#c9a84c] bg-white/2 hover:scale-105"
                    aria-label="Instagram Profile"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#c9a84c] hover:text-[#e0be5a] transition-all p-2 rounded-full border border-white/5 hover:border-[#c9a84c] bg-white/2 hover:scale-105"
                    aria-label="YouTube Channel"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#c9a84c] hover:text-[#e0be5a] transition-all p-2 rounded-full border border-white/5 hover:border-[#c9a84c] bg-white/2 hover:scale-105"
                    aria-label="WhatsApp Us"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>

                {/* Copyright text bottom */}
                <div className="border-t border-white/5 w-full pt-8 mt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 font-mono tracking-widest gap-4">
                  <p>&copy; {new Date().getFullYear()} DRISHYA FILMS. ALL RIGHTS RESERVED.</p>
                  <p className="text-[10px] text-gray-600 tracking-[0.25em] uppercase">
                    AUTHENTIC MOTION CINEMATOGRAPHY // EST. 2020
                  </p>
                </div>
              </div>
            </footer>
          </>
        )}
      </div>
    </>
  );
}
