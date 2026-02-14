import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "James",
    niche: "Clothing Brand",
    image: "https://hynamedia.digital/wp-content/uploads/2025/07/James-1.png",
    quote: "Thanks GOD PROMO for the best editing services!",
  },
  {
    name: "Chris",
    niche: "Car Washing Business",
    image: "https://hynamedia.digital/wp-content/uploads/2025/07/Chris-1.png",
    quote: "GOD PROMO transformed my content completely!",
  },
  {
    name: "Taz",
    niche: "Gamer",
    image: "https://hynamedia.digital/wp-content/uploads/2025/07/taz-1.png",
    quote: "Amazing editing quality! Thanks GOD PROMO!",
  },
  {
    name: "Abdur Rahman",
    niche: "UI/UX Designer",
    image: "https://hynamedia.digital/wp-content/uploads/2025/07/Abdur-Rahman.png",
    quote: "Professional work and fast delivery!",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="card-glass p-6 rounded-2xl group hover:border-primary/50 transition-all duration-300 text-center flex-shrink-0 w-72 card-hover">
    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-3 border-primary group-hover:scale-110 transition-transform duration-500">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-lg font-semibold text-foreground">{testimonial.name}</h3>
    <p className="text-primary text-sm font-medium">{testimonial.niche}</p>
    <p className="text-muted-foreground text-sm mt-3 italic">"{testimonial.quote}"</p>
  </div>
);

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 relative overflow-hidden">
      <div ref={ref} className="container px-4 mb-12">
        <div className={`text-center scroll-reveal ${isVisible ? "visible" : ""}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Client testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            See What Clients Are Saying
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real reviews from our happy clients thanking GOD PROMO for our editing services
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
