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
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real reviews from our happy clients thanking GOD PROMO for our editing services
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-glass p-6 rounded-2xl group hover:border-primary/50 transition-all duration-300 text-center"
            >
              {/* Client Image */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-3 border-primary">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Client Info */}
              <h3 className="text-lg font-semibold text-foreground">{testimonial.name}</h3>
              <p className="text-primary text-sm font-medium">{testimonial.niche}</p>
              <p className="text-muted-foreground text-sm mt-3 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
