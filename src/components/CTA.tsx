import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hero-glow opacity-30" />

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Fuel Your Growth
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Team Up With Us to Elevate Your Business
          </h2>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl glow-primary"
            asChild
          >
            <a href="https://wa.me/8801990429616?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20call%20with%20you.%20Kindly%20share%20your%20availability." target="_blank" rel="noopener noreferrer">
              Book a call
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
