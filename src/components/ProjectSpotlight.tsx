import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  { name: "Infograph", active: true },
  { name: "Talking Head", active: false },
  { name: "Documentary", active: false },
  { name: "Real Estate", active: false },
  { name: "Games", active: false },
];

const categoryVideos: Record<string, string[]> = {
  Infograph: [
    "/videos/infograph-1.mp4",
    "/videos/infograph-2.mp4",
    "/videos/infograph-3.mp4",
    "/videos/infograph-4.mp4",
  ],
  "Talking Head": [
    "/videos/talkinghead-1.mp4",
    "/videos/talkinghead-2.mp4",
    "/videos/talkinghead-3.mp4",
    "/videos/talkinghead-4.mp4",
  ],
  Documentary: [
    "/videos/documentary-1.mp4",
    "/videos/documentary-2.mp4",
  ],
};

const ProjectSpotlight = () => {
  const [activeCategory, setActiveCategory] = useState("Infograph");
  const { ref, isVisible } = useScrollReveal();

  const videos = categoryVideos[activeCategory] || [];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hero-glow opacity-30" />

      <div className="container px-4 relative z-10" ref={ref}>
        <div className={`text-center mb-12 scroll-reveal ${isVisible ? "visible" : ""}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Project Spotlight
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            A Glimpse of What We Do
          </h2>
        </div>

        {/* Category Pills */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 scroll-reveal stagger-1 ${isVisible ? "visible" : ""}`}>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground glow-primary scale-105"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:scale-105"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Video Showcase Grid */}
        <div className={`grid gap-6 ${activeCategory === "Documentary" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2 md:grid-cols-4"}`}>
          {videos.length > 0 ? (
            videos.map((src, i) => (
              <div
                key={src}
                className={`card-glass rounded-2xl overflow-hidden bg-gradient-to-br from-card to-secondary card-hover scroll-reveal-scale ${isVisible ? "visible" : ""} ${activeCategory === "Documentary" ? "aspect-video" : "aspect-[9/16]"}`}
                style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
              >
                <video
                  src={src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-muted-foreground">
              Coming soon...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSpotlight;
