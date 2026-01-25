import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import founderImage from "@/assets/founder-sahil.jpg";

const Founder = () => {
  return (
    <section id="founder" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-hero-glow opacity-20" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Meet The Founder
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            The Mind Behind GOD PROMO
          </h2>
        </div>

        {/* Founder Card */}
        <div className="max-w-4xl mx-auto">
          <div className="card-glass p-8 md:p-12 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left - Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl transform scale-95" />
                  <img
                    src={founderImage}
                    alt="Sahil Grewal - Founder of GOD PROMO"
                    className="relative w-64 h-80 md:w-72 md:h-96 rounded-3xl object-cover border-2 border-primary/30"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Sahil Grewal
                </h3>
                <span className="text-primary font-semibold text-lg">Founder & CEO</span>
                
                <p className="text-muted-foreground mt-6 mb-8 leading-relaxed">
                  With a passion for creative storytelling and a vision to transform how brands connect with their audience, Sahil founded GOD PROMO to deliver world-class video content that drives real results.
                </p>

                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl"
                  asChild
                >
                  <a href="https://wa.me/8801990429616?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20call%20with%20you.%20Kindly%20share%20your%20availability." target="_blank" rel="noopener noreferrer">
                    Book a call
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
