import { useState } from "react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";

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

const ProjectSpotlight = () => {
  const [activeCategory, setActiveCategory] = useState("Infograph");
  const videos = categoryVideos[activeCategory] || [];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hero-glow opacity-30" />

      <div className="container px-4 relative z-10">
        <AnimatedSection variant="fade-up">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Project Spotlight</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">A Glimpse of What We Do</h2>
          </div>
        </AnimatedSection>

        {/* Category Pills */}
        <AnimatedSection variant="fade-up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 ${
                  activeCategory === category.name
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Video Showcase Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {videos.length > 0 ? (
            videos.map((src, i) => (
              <motion.div
                key={src}
                className="card-glass aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-secondary hover:border-primary/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <video src={src} muted loop playsInline autoPlay className="w-full h-full object-cover" />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-muted-foreground">Coming soon...</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSpotlight;
