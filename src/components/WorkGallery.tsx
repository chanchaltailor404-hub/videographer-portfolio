import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface WorkItem {
  id: number;
  title: string;
  category: "Wedding" | "Commercial" | "Music Video";
  categoryType: "wedding" | "commercial" | "music";
  videoUrl: string;
  posterUrl: string;
}

const workData: WorkItem[] = [
  {
    id: 1,
    title: "Sufi Trance Sessions",
    category: "Music Video",
    categoryType: "music",
    videoUrl: "https://player.vimeo.com/external/517602126.sd.mp4?s=d0dbf11f67fecb5368a5c2d3a985e513a96860f3&profile_id=164&oauth2_token_id=57447761",
    posterUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Royal Udaipur Wedding",
    category: "Wedding",
    categoryType: "wedding",
    videoUrl: "https://player.vimeo.com/external/435674703.sd.mp4?s=7f603c4a45347a83d3e6022e37452d0a42cf8f4c&profile_id=164&oauth2_token_id=57447761",
    posterUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Sunderbans: Forest Echoes",
    category: "Music Video",
    categoryType: "music",
    videoUrl: "https://player.vimeo.com/external/403844514.sd.mp4?s=6a94ae1b6ca98064cfb10cae57e9373dc8930e46&profile_id=164&oauth2_token_id=57447761",
    posterUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0db?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Mahindra: Driven by Soul",
    category: "Commercial",
    categoryType: "commercial",
    videoUrl: "https://player.vimeo.com/external/430030919.sd.mp4?s=74b59f77f597950c48312e6bf54b9d5c317ca7f3&profile_id=164&oauth2_token_id=57447761",
    posterUrl: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "A Night at Jodhpur Palace",
    category: "Wedding",
    categoryType: "wedding",
    videoUrl: "https://player.vimeo.com/external/370331493.sd.mp4?s=9897aa04f85154371fa79b4a1b0b5c110901fd5c&profile_id=164&oauth2_token_id=57447761",
    posterUrl: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "TATA Projects: Build India",
    category: "Commercial",
    categoryType: "commercial",
    videoUrl: "https://player.vimeo.com/external/324838634.sd.mp4?s=de723797682976b9e4a3070cdccb92ca43ae7be8&profile_id=164&oauth2_token_id=57447761",
    posterUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
  },
];

interface WorkGalleryProps {
  onSelectVideo: (url: string) => void;
}

export default function WorkGallery({ onSelectVideo }: WorkGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<string>("all");

  useGSAP(
    () => {
      // Heading slide-in from bottom on scroll
      gsap.fromTo(
        ".gallery-heading",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-heading",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Category filters slide-in
      gsap.fromTo(
        ".filter-btn",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".filter-container",
            start: "top 90%",
          },
        }
      );

      // Staggered layout entry for the card grid
      gsap.fromTo(
        ".work-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".grid-container",
            start: "top 80%",
          },
        }
      );

      // Subtle parallax vertical movement on card media
      const mediaElements = gsap.utils.toArray<HTMLElement>(".card-parallax-media");
      mediaElements.forEach((el) => {
        const parent = el.closest(".work-card");
        if (!parent) return;

        gsap.fromTo(
          el,
          { yPercent: -7.5 },
          {
            yPercent: 7.5,
            ease: "none",
            scrollTrigger: {
              trigger: parent,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: containerRef, dependencies: [filter] }
  );

  const filteredData =
    filter === "all"
      ? workData
      : workData.filter((item) => item.categoryType === filter);

  return (
    <section
      id="work"
      ref={containerRef}
      className="gallery-section py-24 md:py-32 bg-[#0a0a0a] border-t border-white/5 relative z-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="gallery-heading mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#c9a84c] font-medium mb-3">
              CURATED ARCHIVE
            </p>
            <h2 className="font-bebas text-5xl md:text-7xl tracking-wide text-white font-normal uppercase">
              SELECTED <span className="text-[#c9a84c]">WORKS</span>
            </h2>
          </div>
          <p className="text-gray-400 font-light text-sm max-w-sm leading-relaxed">
            A premium collection of high-concept visual frames, capturing India's 
            most precious celebrations, music, and corporate stories with raw soul.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-container flex flex-wrap gap-2 md:gap-4 border-b border-white/5 pb-8 mb-12">
          {["all", "wedding", "commercial", "music"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer ${
                filter === cat
                  ? "bg-[#c9a84c] text-black shadow-[0_4px_15px_rgba(201,168,76,0.25)]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat === "all"
                ? "SHOW ALL"
                : cat === "wedding"
                ? "WEDDING"
                : cat === "commercial"
                ? "COMMERCIAL"
                : "MUSIC VIDEO"}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item) => (
            <Card key={item.id} item={item} onSelectVideo={onSelectVideo} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  key?: number;
  item: WorkItem;
  onSelectVideo: (url: string) => void;
}

function Card({ item, onSelectVideo }: CardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => {
        // Handle auto-play failure block if necessary
        console.log("Autoplay was blocked initially:", err);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onClick={() => onSelectVideo(item.videoUrl)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="work-card group relative bg-black aspect-video cursor-pointer overflow-hidden border border-white/5 transition-all duration-500 hover:border-[#c9a84c]/80 flex flex-col justify-end"
    >
      {/* Parallax Container Wrapper with extra height to support vertical scrolling without page-gaps */}
      <div className="card-parallax-media absolute inset-x-0 h-[115%] -top-[7.5%] pointer-events-none overflow-hidden">
        {/* Absolute background video */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          poster={item.posterUrl}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-105 opacity-70 group-hover:opacity-100"
          style={{ willChange: "transform" }}
        >
          <source src={item.videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Dark Gradient Veil */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

      {/* Floating Gold Border Lines around card on hover */}
      <div className="absolute inset-0 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none z-10 border border-[#c9a84c]" />

      {/* Interactive Play Indicator Dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 z-20">
        <Play className="w-5 h-5 fill-[#c9a84c] text-[#c9a84c] ml-0.5" />
      </div>

      {/* Metadata Labels inside bottom of card */}
      <div className="relative z-10 p-6 transition-all duration-500 transform group-hover:translate-x-1.5">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#c9a84c] font-semibold mb-1">
          {item.category}
        </p>
        <h3 className="font-bebas text-2xl tracking-wider text-white uppercase leading-none">
          {item.title}
        </h3>
      </div>
    </div>
  );
}
