import { useState } from "react";
import { Lightbulb, FileText, Scissors, Image, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { icon: Lightbulb, title: "Insight", subtitle: "Deep Idea Analysis", description: "Leveraging industry knowledge, we dissect your ideas to uncover their true potential and market fit.", industries: ["Coaches", "Personal Brand", "E-Commerce", "Fashion"] },
  { icon: FileText, title: "Scripting", subtitle: "Your Story, Scripted", description: "We turn your ideas into powerful narratives that sell, inspire, and stick in people's minds." },
  { icon: Scissors, title: "Editing", subtitle: "Next-Level Cuts", description: "Clean, dynamic edits with premium motion graphics that make your content unforgettable." },
  { icon: Image, title: "Thumbnail", subtitle: "Crafting Scroll-Stopping Designs", description: "We analyze other thumbnails in your niche and are able to replicate best performing results." },
  { icon: Send, title: "Post", subtitle: "Go Live, Get Results", description: "Your video is ready to shine—now it's time to share it with the world and let the results roll in." },
];

const OurApproach = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <AnimatedSection variant="fade-up">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Strategic Content That Drives Leads For You</h2>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fade-up" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all hover:scale-105 ${
                      activeStep === index
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{step.title}</span>
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="card-glass p-8 md:p-12 rounded-3xl text-center"
            >
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center"
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                {(() => {
                  const Icon = steps[activeStep].icon;
                  return <Icon className="w-8 h-8 text-primary" />;
                })()}
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{steps[activeStep].title}</h3>
              <h4 className="text-lg text-primary mb-4">{steps[activeStep].subtitle}</h4>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">{steps[activeStep].description}</p>

              {steps[activeStep].industries && (
                <div className="flex flex-wrap justify-center gap-2">
                  {steps[activeStep].industries.map((industry, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.08 }}
                      className="px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm"
                    >
                      {industry}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
