import { useRef } from "react";

// Strip #1: Wedding & Cinematic moments (Flows Left-to-Right, 300px x 200px, 20px gap, rounded-[20px])
export function WeddingCinematicStrip() {
  const weddingImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", // Wedding scene
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop", // Rings
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop", // Wedding party joy
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop", // Outdoor wedding setup
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=800&auto=format&fit=crop", // Bridal dance
    "https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=800&auto=format&fit=crop", // Field kiss sunset
    "https://images.unsplash.com/photo-1510076894077-b62344ef99a5?q=80&w=800&auto=format&fit=crop", // Couple walk side by side
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop"  // Party sparklers joy
  ];

  return (
    <div className="w-full bg-[#050505] py-10 border-t border-b border-white/5 relative z-20 overflow-hidden hover-pause">
      {/* Decorative label to look elegant */}
      <div className="max-w-7xl mx-auto px-6 mb-4 flex justify-between items-center text-[10px] font-mono tracking-[0.4em] text-gray-500 uppercase">
        <span>// CINEMATIC ENCOUNTERS</span>
        <span>MOMENTS FOREVER</span>
      </div>

      <div className="w-full overflow-hidden flex items-center bg-black/40 py-3">
        {/* Left-to-right (scroll-right has 55s slow speed) */}
        <div className="animate-scroll-right flex gap-5 pr-5">
          {weddingImages.map((imgUrl, index) => (
            <div
              key={`wedding-raw-${index}`}
              className="relative flex-shrink-0 w-[300px] h-[200px] rounded-[20px] border border-[#c9a84c]/40 overflow-hidden group/item shadow-[0_0_15px_rgba(201,168,76,0.12)] transition-all duration-300 hover:z-30 hover:scale-105 hover:border-[#c9a84c] hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] cursor-pointer"
            >
              <img
                src={imgUrl}
                alt={`Wedding moment ${index}`}
                className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-500 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#c9a84c]/3 group-hover/item:opacity-0 transition-opacity duration-300" />
            </div>
          ))}
          {/* Duplicated set for scroll-right seamless loop */}
          {weddingImages.map((imgUrl, index) => (
            <div
              key={`wedding-dup-${index}`}
              className="relative flex-shrink-0 w-[300px] h-[200px] rounded-[20px] border border-[#c9a84c]/40 overflow-hidden group/item shadow-[0_0_15px_rgba(201,168,76,0.12)] transition-all duration-300 hover:z-30 hover:scale-105 hover:border-[#c9a84c] hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] cursor-pointer"
            >
              <img
                src={imgUrl}
                alt={`Wedding moment duplicate ${index}`}
                className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-500 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#c9a84c]/3 group-hover/item:opacity-0 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Strip #2: Behind the Scenes (Flows Right-to-Left, slightly bigger: 350px x 220px, gap 20px, different speed)
export function BehindTheScenesStrip() {
  const btsImages = [
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop", // Cinema professional rig
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop", // Director slate clapper
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop", // Camera lens
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop", // Cinema projection beam
    "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=800&auto=format&fit=crop", // Set lighting silhouette
    "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=800&auto=format&fit=crop", // Movie camera & screen
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop", // Set director chair monitor
    "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop"  // Broadcast control room/studio
  ];

  return (
    <div className="w-full bg-[#070707] py-12 border-t border-b border-white/5 relative z-20 overflow-hidden hover-pause">
      {/* Decorative label */}
      <div className="max-w-7xl mx-auto px-6 mb-4 flex justify-between items-center text-[10px] font-mono tracking-[0.4em] text-gray-500 uppercase">
        <span>// BEHIND THE SCENES</span>
        <span>CREATIVE FORCE & LIGHTS</span>
      </div>

      <div className="w-full overflow-hidden flex items-center bg-black/50 py-3">
        {/* Right-to-left (scroll-left is 50s speed - different speed for depth) */}
        <div className="animate-scroll-left flex gap-5 pr-5">
          {btsImages.map((imgUrl, index) => (
            <div
              key={`bts-raw-${index}`}
              className="relative flex-shrink-0 w-[350px] h-[220px] rounded-[20px] border border-[#c9a84c]/40 overflow-hidden group/item shadow-[0_0_15px_rgba(201,168,76,0.12)] transition-all duration-300 hover:z-30 hover:scale-105 hover:border-[#c9a84c] hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] cursor-pointer"
            >
              <img
                src={imgUrl}
                alt={`Behind the Scenes ${index}`}
                className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-500 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#c9a84c]/3 group-hover/item:opacity-0 transition-opacity duration-300" />
            </div>
          ))}
          {/* Duplicate set for scroll-left seamless loop */}
          {btsImages.map((imgUrl, index) => (
            <div
              key={`bts-dup-${index}`}
              className="relative flex-shrink-0 w-[350px] h-[220px] rounded-[20px] border border-[#c9a84c]/40 overflow-hidden group/item shadow-[0_0_15px_rgba(201,168,76,0.12)] transition-all duration-300 hover:z-30 hover:scale-105 hover:border-[#c9a84c] hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] cursor-pointer"
            >
              <img
                src={imgUrl}
                alt={`Behind the Scenes duplicate ${index}`}
                className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-500 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#c9a84c]/3 group-hover/item:opacity-0 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Strip #3: Cinematic Tilted & Oval Shaped Pill Strip (Flows Left-to-Right, rounded-[50px], gap 20px)
export function CinematicTiltedStrip() {
  const cinematicImages = [
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop", // Rainy station bench romance
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop", // Cinematic screen / seats silhouette
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop", // Moody neon street
    "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?q=80&w=800&auto=format&fit=crop", // Silhouette in mist forest
    "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=800&auto=format&fit=crop", // Rain window tail-lights
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop", // Vintage car golden hour
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop", // Stage fog & dramatic lights
    "https://images.unsplash.com/photo-1513829096999-4978602297a7?q=80&w=800&auto=format&fit=crop"  // Moody night walking scene
  ];

  return (
    <div className="w-full bg-[#0a0a0a] py-14 border-t border-b border-white/5 relative z-20 overflow-hidden hover-pause">
      {/* Decorative label */}
      <div className="max-w-7xl mx-auto px-6 mb-4 flex justify-between items-center text-[10px] font-mono tracking-[0.4em] text-[#c9a84c] uppercase">
        <span>// UNIQUE OVAL PRESENTATION</span>
        <span>EXQUISITE FILM RENDERS</span>
      </div>

      <div className="w-full overflow-hidden flex items-center bg-black/60 py-4">
        {/* Left-to-right (scroll-right has 60s slow speed) */}
        <div className="animate-scroll-right flex gap-5 pr-5">
          {cinematicImages.map((imgUrl, index) => (
            <div
              key={`oval-raw-${index}`}
              className="relative flex-shrink-0 w-[300px] h-[180px] rounded-[50px] border border-[#c9a84c]/40 overflow-hidden group/item shadow-[0_0_15px_rgba(201,168,76,0.12)] transition-all duration-300 hover:z-30 hover:scale-105 hover:border-[#c9a84c] hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] cursor-pointer"
            >
              <img
                src={imgUrl}
                alt={`Oval Cinematic Frame ${index}`}
                className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-500 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#c9a84c]/3 group-hover/item:opacity-0 transition-opacity duration-300" />
            </div>
          ))}
          {/* Duplicate set for scroll-right seamless loop */}
          {cinematicImages.map((imgUrl, index) => (
            <div
              key={`oval-dup-${index}`}
              className="relative flex-shrink-0 w-[300px] h-[180px] rounded-[50px] border border-[#c9a84c]/40 overflow-hidden group/item shadow-[0_0_15px_rgba(201,168,76,0.12)] transition-all duration-300 hover:z-30 hover:scale-105 hover:border-[#c9a84c] hover:shadow-[0_0_25px_rgba(201,168,76,0.5)] cursor-pointer"
            >
              <img
                src={imgUrl}
                alt={`Oval Cinematic Frame duplicate ${index}`}
                className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-500 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#c9a84c]/3 group-hover/item:opacity-0 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
