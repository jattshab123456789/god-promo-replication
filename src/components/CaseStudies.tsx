import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-hero-glow opacity-20" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-12">
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
                <span className="text-primary font-semibold">01. Case Study</span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-4 mb-6">
                  Abdu now gets 3x more leads from his SaaS videos.
                </h3>

                {/* Team */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://hynamedia.digital/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-20-at-17.11.36_04b271b5-scaled.jpg"
                      alt="Talha Jubaer"
                      className="w-12 h-12 rounded-full object-cover"
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
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Alvi Karim</p>
                      <p className="text-muted-foreground text-xs">Founder</p>
                    </div>
                  </div>
                </div>

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

              {/* Right Stats */}
              <div className="space-y-6">
                <div className="card-glass p-6 rounded-2xl border border-primary/20">
                  <p className="text-muted-foreground text-sm mb-2">Revenue Growth</p>
                  <p className="text-4xl font-bold text-gradient">48%</p>
                </div>
                <div className="card-glass p-6 rounded-2xl border border-primary/20">
                  <p className="text-muted-foreground text-sm mb-2">Saved on Ads</p>
                  <p className="text-4xl font-bold text-gradient">16%</p>
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
