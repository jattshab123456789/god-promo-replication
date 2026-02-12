const services = [
  {
    title: "Infographic Videos",
    description: "Visually break down complex info into clear, engaging animated graphics.",
  },
  {
    title: "Talking Head Videos",
    description: "Clean, polished edits that keep the focus on your message and delivery.",
  },
  {
    title: "Documentary Videos",
    description: "Craft real stories with cinematic pacing, voice, and emotion.",
  },
  {
    title: "Real Estate Videos",
    description: "Highlight properties with sleek visuals and smooth, premium edits.",
  },
  {
    title: "Gaming Videos",
    description: "High-energy edits packed with effects, syncs, and sharp transitions.",
  },
  {
    title: "VSL (Video Sales Letters)",
    description: "Persuasive, fast-paced edits that drive conversions and sales.",
  },
  {
    title: "Shorts/Reels",
    description: "Scroll-stopping vertical videos tailored for fast social media impact.",
  },
  {
    title: "Long Forms",
    description: "Structured, story-driven edits ideal for YouTube or detailed content.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container px-4 mb-14">
        <div className="text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            What We Specialize In
          </h2>
        </div>
      </div>

      {/* Row 1 - Left to Right */}
      <div className="relative overflow-hidden mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
          {[...services.slice(0, 4), ...services.slice(0, 4), ...services.slice(0, 4)].map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 card-glass p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-6 animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...services.slice(4), ...services.slice(4), ...services.slice(4)].map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 card-glass p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
