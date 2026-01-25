const testimonials = [
  {
    name: "Abdur Rahman",
    location: "Bangladesh",
    image: "https://hynamedia.digital/wp-content/uploads/2025/07/Abdur-Rahman.png",
  },
  {
    name: "Chris",
    location: "USA",
    image: "https://hynamedia.digital/wp-content/uploads/2025/07/Chris-1.png",
  },
  {
    name: "Taz",
    location: "USA",
    image: "https://hynamedia.digital/wp-content/uploads/2025/07/taz-1.png",
  },
  {
    name: "James",
    location: "USA",
    image: "https://hynamedia.digital/wp-content/uploads/2025/07/James-1.png",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-4 mb-12">
        <div className="text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Client testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            See What Clients Are Saying
          </h2>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div className="overflow-hidden">
        <div className="flex gap-6 animate-marquee">
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 card-glass p-6 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{testimonial.name}</h3>
              <p className="text-muted-foreground text-sm">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
