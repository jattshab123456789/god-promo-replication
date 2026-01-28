import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import showreelVideo from "@/assets/showreel.mp4";

const avatars = [
  "https://hynamedia.digital/wp-content/uploads/2025/07/Chris.png",
  "https://hynamedia.digital/wp-content/uploads/2025/07/James.png",
  "https://hynamedia.digital/wp-content/uploads/2025/07/taz.png",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-hero-glow opacity-50" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="text-sm text-muted-foreground">Remote Video Editing Agency</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-muted-foreground">Grab more audience</span>
            <br />
            <span className="text-foreground">Using </span>
            <span className="text-gradient">our banger content</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            We partner with growth-focused businesses, providing Done-For-You organic
            content systems that drive leads effortlessly.
          </p>

          {/* Avatar Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex -space-x-3">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`Client ${index + 1}`}
                  className="w-12 h-12 rounded-full border-2 border-background object-cover"
                />
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-background bg-secondary flex items-center justify-center">
                <span className="text-xs text-muted-foreground">+27</span>
              </div>
            </div>
            <div className="text-left">
              <p className="text-foreground font-semibold">Helped 30+ Businesses Worldwide.</p>
              <p className="text-muted-foreground text-sm">Our Clients Speak for Us</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl glow-primary"
              asChild
            >
              <a href="https://wa.me/917404141096?text=Hello%2C%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="card-glass p-4 rounded-3xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-card">
              <video 
                src={showreelVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
