import AnimatedSection from "./AnimatedSection";

const services = [
  { title: "Infographic Videos", description: "Visually break down complex info into clear, engaging animated graphics." },
  { title: "Talking Head Videos", description: "Clean, polished edits that keep the focus on your message and delivery." },
  { title: "Documentary Videos", description: "Craft real stories with cinematic pacing, voice, and emotion." },
  { title: "Real Estate Videos", description: "Highlight properties with sleek visuals and smooth, premium edits." },
  { title: "Gaming Videos", description: "High-energy edits packed with effects, syncs, and sharp transitions." },
  { title: "Shorts/Reels", description: "Scroll-stopping vertical videos tailored for fast social media impact." },
  { title: "Long Forms", description: "Structured, story-driven edits ideal for YouTube or detailed content." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container px-4 mb-12">
        <AnimatedSection variant="fade-up">
          <div className="text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">What We Specialize In</h2>
          </div>
        </AnimatedSection>
      </div>

      <div className="overflow-hidden mb-6">
        <div className="flex gap-6 animate-marquee">
          {[...services.slice(0, 4), ...services.slice(0, 4)].map((service, index) => (
            <div key={index} className="flex-shrink-0 w-80 card-glass p-6 rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-6 animate-marquee-reverse">
          {[...services.slice(4), ...services.slice(4)].map((service, index) => (
            <div key={index} className="flex-shrink-0 w-80 card-glass p-6 rounded-2xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
