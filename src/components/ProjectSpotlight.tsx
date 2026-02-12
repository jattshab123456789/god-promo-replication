import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

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
};

const VideoCard = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="card-glass aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-secondary relative group cursor-pointer" onClick={togglePlay}>
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center glow-primary">
          {playing ? <Pause className="w-6 h-6 text-primary-foreground" /> : <Play className="w-6 h-6 text-primary-foreground ml-1" />}
        </div>
      </div>
    </div>
  );
};

const ProjectSpotlight = () => {
  const [activeCategory, setActiveCategory] = useState("Infograph");

  const videos = categoryVideos[activeCategory] || [];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hero-glow opacity-30" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Project Spotlight
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            A Glimpse of What We Do
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground glow-primary"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Video Showcase Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {videos.length > 0 ? (
            videos.map((src, i) => (
              <VideoCard key={src} src={src} />
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
