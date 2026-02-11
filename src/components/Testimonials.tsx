const testimonials = [
  {
    name: "James",
    niche: "Clothing Brand",
    image: "https://hynamedia.digital/wp-content/uploads/2025/07/James-1.png",
  },
  {
    name: "Chris",
    niche: "Car Washing Business",
    image: "https://hynamedia.digital/wp-content/uploads/2025/07/Chris-1.png",
  },
  {
    name: "Taz",
    niche: "Gamer",
    image: "https://hynamedia.digital/wp-content/uploads/2025/07/taz-1.png",
  },
  {
    name: "Abdur Rahman",
    niche: "UI/UX Designer",
    image: "https://hynamedia.digital/wp-content/uploads/2025/07/Abdur-Rahman.png",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="card-glass p-6 rounded-2xl group hover:border-primary/40 transition-all duration-300 text-center flex-shrink-0 w-72">
    {/* Client Image */}
    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/40 group-hover:border-primary transition-colors">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Client Info */}
    <h3 className="text-lg font-semibold text-foreground">{testimonial.name}</h3>
    <p className="text-primary text-sm font-medium mt-1">{testimonial.niche}</p>
  </div>
);

const Testimonials = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 mb-14">
        <div className="text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Client testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            See What Clients Are Saying
          </h2>
        </div>
      </div>

      {/* Floating Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
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
