import { useEffect, useRef } from "react";
import { X, Volume2, ShieldAlert } from "lucide-react";

interface VideoModalProps {
  videoUrl: string | null;
  onClose: () => void;
}

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoUrl) return;

    // Capture Escape key to close modal player
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Prevent body scroll behind modal
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [videoUrl, onClose]);

  if (!videoUrl) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 transition-opacity duration-300 pointer-events-auto"
    >
      {/* Floating Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#c9a84c] text-white hover:text-[#c9a84c] transition-colors duration-300 z-50 cursor-pointer"
        aria-label="Close player"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Video Framing Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl aspect-video bg-black rounded-none shadow-[0_0_80px_rgba(201,168,76,0.15)] border border-white/10 overflow-hidden"
      >
        <video
          ref={videoRef}
          autoPlay
          controls
          playsInline
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Cinematic Hint overlay */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
          <Volume2 className="w-3.5 h-3.5 text-[#c9a84c]" />
          <span className="font-mono text-[9px] text-white uppercase tracking-widest">
            Cinematic sound track active
          </span>
        </div>
      </div>
    </div>
  );
}
