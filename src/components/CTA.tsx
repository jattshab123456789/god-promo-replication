import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hero-glow opacity-30"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.15, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection variant="fade-up">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Fuel Your Growth</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">Team Up With Us to Elevate Your Business</h2>
          </AnimatedSection>
          <AnimatedSection variant="scale-in" delay={0.3}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl glow-primary hover:scale-105 transition-transform"
              asChild
            >
              <a href="https://wa.me/917404141096?text=Hello%2C%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />Contact Us
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTA;
