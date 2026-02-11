import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-hero-glow opacity-15" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Some Solid Case Studies
          </h2>
        </div>

        {/* Case Study Card */}
        <div className="max-w-5xl mx-auto">
          <div className="card-glass p-8 md:p-12 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <span className="text-primary font-semibold text-sm">01. Case Study</span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-4 mb-6 leading-tight">
                  Abdu now gets 3x more leads from his SaaS videos.
                </h3>

                {/* Team */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://hynamedia.digital/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-20-at-17.11.36_04b271b5-scaled.jpg"
                      alt="Talha Jubaer"
                      className="w-12 h-12 rounded-full object-cover border border-border"
                    />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Talha Jubaer</p>
                      <p className="text-muted-foreground text-xs">Founder</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://hynamedia.digital/wp-content/uploads/2025/07/Untitled-1.png"
                      alt="Alvi Karim"
                      className="w-12 h-12 rounded-full object-cover border border-border"
                    />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Alvi Karim</p>
                      <p className="text-muted-foreground text-xs">Founder</p>
                    </div>
                  </div>
                </div>

                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl group"
                  asChild
                >
                  <a href="https://wa.me/917404141096?text=Hello%2C%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer">
                    Book a call
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </div>

              {/* Right Stats */}
              <div className="space-y-6">
                <div className="card-glass p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors">
                  <p className="text-muted-foreground text-sm mb-2">Revenue Growth</p>
                  <p className="text-5xl font-bold text-gradient">81%</p>
                </div>
                <div className="card-glass p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors">
                  <p className="text-muted-foreground text-sm mb-2">Saved on Ads</p>
                  <p className="text-5xl font-bold text-gradient">27%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
