import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ChevronDown, Sparkles, MessageCircle, ArrowRight } from "lucide-react";

interface HeroProps {
  onWatchTrailer: () => void;
}

function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
    }> = [];

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        size: Math.random() * 2 + 0.5,
        speedY: -(Math.random() * 0.4 + 0.2),
        opacity: Math.random() * 0.6 + 0.1,
        fadeSpeed: Math.random() * 0.0015 + 0.0005,
      };
    };

    // Initialize initial particles scattered around the screen
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedY: -(Math.random() * 0.4 + 0.2),
        opacity: Math.random() * 0.6 + 0.1,
        fadeSpeed: Math.random() * 0.0015 + 0.0005,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (particles.length < 50 && Math.random() < 0.1) {
        particles.push(createParticle());
      }

      particles.forEach((p, index) => {
        p.y += p.speedY;
        p.opacity -= p.fadeSpeed;

        if (p.y < -10 || p.opacity <= 0) {
          particles[index] = createParticle();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity})`;
          ctx.shadowBlur = 4;
          ctx.shadowColor = "rgba(201, 168, 76, 0.4)";
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}

export default function Hero({ onWatchTrailer }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.1 });

      tl.fromTo(
        ".hero-heading",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
      ).fromTo(
        ".hero-btn",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
        "-=0.8"
      );
    },
    { scope: containerRef }
  );

  const openWhatsApp = () => {
    window.open("https://wa.me/919876543210", "_blank");
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black flex flex-col items-end justify-center select-none"
    >
      {/* Background Cinematic Video Backdrop with 1.08x scale to crop out corner watermarks */}
      <video
        autoPlay
        loop
        muted
        playsInline
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 select-none pointer-events-none transition-opacity duration-1000 scale-[1.08]"
      >
        <source
          src="https://res.cloudinary.com/dkk1k5rfd/video/upload/v1780405240/PixVerse_V6_Image_Text_360P_generate_a_video_o_hdkufz.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
 
      {/* Custom Cinematic Vignette and Deep Corner Shadows to fully obscure boundaries & watermarks */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.85)]" />
 
      {/* Floating Gold Particles */}
      <FloatingParticles />
 
      {/* Right Aligned Minimal Cinematic Hero Content */}
      <div className="relative z-20 text-right w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-end justify-end h-full pt-40 pb-28 md:pb-36">
        
        {/* Main Heading - Right aligned, smaller size (48px max on desktop), positioned downwards */}
        <h1 className="hero-heading font-bebas text-[24px] sm:text-[36px] md:text-[48px] tracking-[0.04em] leading-[1.1] text-white uppercase mb-8 max-w-2xl opacity-0 text-right">
          CAPTURING INDIA'S<br />
          <span className="text-[#c9a84c]">PRECIOUS MOMENTS</span>
        </h1>
 
        {/* Buttons on bottom right with comfortable cinematic breathing space */}
        <div className="hero-btn flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-5 opacity-0 w-full sm:w-auto">
          {/* WATCH SHOWREEL - transparent with gold border, white text */}
          <button
            onClick={onWatchTrailer}
            className="group px-8 py-3.5 bg-transparent border-2 border-[#c9a84c] hover:bg-[#c9a84c]/10 text-white font-bebas text-base tracking-[0.15em] transition-all duration-300 rounded-none flex items-center justify-center gap-2.5 active:scale-95"
          >
            Watch Showreel
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#c9a84c]" />
          </button>
 
          {/* WHATSAPP US - solid gold, black text */}
          <button
            onClick={openWhatsApp}
            className="group px-8 py-3.5 bg-[#c9a84c] hover:bg-[#e0be5a] text-black font-bebas text-base tracking-[0.15em] transition-all duration-300 rounded-none flex items-center justify-center gap-2.5 active:scale-95 shadow-[0_4px_20px_rgba(201,168,76,0.15)]"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            WhatsApp Us
          </button>
        </div>
      </div>
  
      {/* Scrolling Text Marquee at the very bottom only */}
      <div className="absolute bottom-0 left-0 w-full bg-black/30 border-t border-[#c9a84c]/10 py-4 overflow-hidden z-25 backdrop-blur-[2px] pointer-events-none">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-xs sm:text-sm tracking-[0.4em] text-[#c9a84c] uppercase font-semibold font-bebas">
          <span>WEDDING FILMS • COMMERCIAL • MUSIC VIDEOS • DOCUMENTARY •&nbsp;</span>
          <span>WEDDING FILMS • COMMERCIAL • MUSIC VIDEOS • DOCUMENTARY •&nbsp;</span>
          <span>WEDDING FILMS • COMMERCIAL • MUSIC VIDEOS • DOCUMENTARY •&nbsp;</span>
          <span>WEDDING FILMS • COMMERCIAL • MUSIC VIDEOS • DOCUMENTARY •&nbsp;</span>
        </div>
      </div>
    </div>
  );
}

