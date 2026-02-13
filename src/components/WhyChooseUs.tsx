import { Check, X } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import logoImage from "@/assets/logo-gp.jpg";

const godPromoFeatures = [
  "40+ Skilled Professionals In-House",
  "Focused on Real, Measurable Results",
  "Trusted by Over 100 Satisfied Clients",
  "Ready-to-Launch Content Funnel System",
  "Custom-Built CRM for Your Business",
  "24/7 Support, Anytime You Need Us",
];

const extraValue = [
  "40+ Skilled Professionals In-House",
  "Focused on Real, Measurable Results",
  "First 2 revisions are free.",
];

const otherAgencies = [
  "Extra charges apply for every revision",
  "Unreliable freelancers with slow delivery timelines",
  "Edits that don't drive engagement or conversions",
  "Weak thumbnails & titles lacking CTR strategy",
  "No system for effective content distribution",
  "Little to no funnel or lead capture expertise",
  "Decisions made on gut feeling, not data",
  "Slow replies and poor communication flow",
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-hero-glow opacity-20" />

      <div className="container px-4 relative z-10">
        <AnimatedSection variant="fade-up">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Know What We Do Differently</h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* GOD PROMO Column */}
          <AnimatedSection variant="slide-left" delay={0.2}>
            <div className="card-glass p-8 rounded-3xl border-2 border-primary/30 h-full">
              <div className="flex items-center gap-4 mb-6">
                <img src={logoImage} alt="GOD PROMO" className="w-16 h-16 rounded-2xl object-contain" />
                <h3 className="text-2xl font-bold text-gradient">GOD PROMO</h3>
              </div>
              <StaggerContainer staggerDelay={0.08}>
                <ul className="space-y-3 mb-8">
                  {godPromoFeatures.map((feature, index) => (
                    <StaggerItem key={index}>
                      <li className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
              <div className="border-t border-border pt-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Extra Value, Just for You</h4>
                <ul className="space-y-3">
                  {extraValue.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Other Agencies Column */}
          <AnimatedSection variant="slide-right" delay={0.3}>
            <div className="card-glass p-8 rounded-3xl h-full">
              <h3 className="text-2xl font-bold text-muted-foreground mb-6">Other Agencies</h3>
              <ul className="space-y-3">
                {otherAgencies.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection variant="fade-up" delay={0.4}>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              😊 Usually, we don't provide samples, but if a client is genuinely interested to see our works, we're happy to create one for a small fee.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyChooseUs;
