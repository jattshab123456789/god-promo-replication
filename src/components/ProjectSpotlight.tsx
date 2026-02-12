import { useState } from "react";

const categories = [
  { name: "Infograph", active: true },
  { name: "Talking Head", active: false },
  { name: "Documentary", active: false },
  { name: "Real Estate", active: false },
  { name: "Games", active: false },
];

const ProjectSpotlight = () => {
  const [activeCategory, setActiveCategory] = useState("Infograph");

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
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-glass aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-secondary flex items-center justify-center">
            <span className="text-muted-foreground">Video Sample 1</span>
          </div>
          <div className="card-glass aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-secondary flex items-center justify-center">
            <span className="text-muted-foreground">Video Sample 2</span>
          </div>
          <div className="card-glass aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-card to-secondary flex items-center justify-center">
            <span className="text-muted-foreground">Video Sample 3</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSpotlight;
