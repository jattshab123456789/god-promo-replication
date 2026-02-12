import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 38, suffix: "%", label: "More Engagement", sublabel: "Viral Edits" },
  { value: 3, suffix: "X", label: "More Reach", sublabel: "Strategic Distribution" },
  { value: 9, suffix: "%", label: "More Leads", sublabel: "Automated Systems" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-gradient">
      {count}
      {suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Text Marquee */}
      <div className="mb-16 overflow-hidden">
        <div className="flex gap-8 animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 whitespace-nowrap">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                <span className="text-muted-foreground">Tired</span>{" "}
                <span className="text-foreground">of dull video content that blends in?</span>{" "}
                <span className="text-foreground">Let's level up your game with</span>{" "}
                <span className="text-primary">standout visuals!</span>
                <span className="mx-8">•</span>
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="card-glass p-8 text-center"
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <h3 className="text-xl font-semibold text-foreground mt-4">{stat.label}</h3>
              <p className="text-muted-foreground mt-1">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
