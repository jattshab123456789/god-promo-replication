import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import showreelVideo from "@/assets/showreel.mp4";
import videoPoster from "@/assets/video-poster.jpg";

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
      <motion.div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-hero-glow opacity-50"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm text-muted-foreground">Remote Video Editing Agency</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="text-muted-foreground">Grab more audience</span>
            <br />
            <span className="text-foreground">Using </span>
            <span className="text-gradient">our banger content</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            We partner with growth-focused businesses, providing Done-For-You organic
            content systems that drive leads effortlessly.
          </motion.p>

          {/* Avatar Group */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="flex -space-x-3">
              {avatars.map((avatar, index) => (
                <motion.img
                  key={index}
                  src={avatar}
                  alt={`Client ${index + 1}`}
                  className="w-12 h-12 rounded-full border-2 border-background object-cover"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                />
              ))}
              <motion.div 
                className="w-12 h-12 rounded-full border-2 border-background bg-secondary flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                <span className="text-xs text-muted-foreground">+27</span>
              </motion.div>
            </div>
            <div className="text-left">
              <p className="text-foreground font-semibold">Helped 30+ Businesses Worldwide.</p>
              <p className="text-muted-foreground text-sm">Our Clients Speak for Us</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0, type: "spring", stiffness: 200 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl glow-primary hover:scale-105 transition-transform"
              asChild
            >
              <a href="https://wa.me/917404141096?text=Hello%2C%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Us
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Video Section */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="card-glass p-4 rounded-3xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-card">
              <video 
                src={showreelVideo}
                poster={videoPoster}
                controls
                loop
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
