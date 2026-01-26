import { Play } from "lucide-react";

const videoTestimonials = [
  {
    name: "James",
    niche: "Clothing Brand",
    quote: "Thanks GOD PROMO for the best editing services! My content went viral!",
    videoId: "dQw4w9WgXcQ", // Replace with actual video IDs
  },
  {
    name: "Chris",
    niche: "Car Washing Business",
    quote: "GOD PROMO transformed my content completely. Best editing team ever!",
    videoId: "dQw4w9WgXcQ",
  },
  {
    name: "Taz",
    niche: "Gamer",
    quote: "Amazing editing quality! Thanks GOD PROMO for helping me grow!",
    videoId: "dQw4w9WgXcQ",
  },
  {
    name: "Abdur Rahman",
    niche: "UI/UX Designer",
    quote: "Professional work and fast delivery. GOD PROMO is the best!",
    videoId: "dQw4w9WgXcQ",
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
            Watch real video reviews from our happy clients thanking GOD PROMO for our editing services
          </p>
        </div>
      </div>

      {/* Video Testimonials Grid */}
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-glass p-4 rounded-2xl group hover:border-primary/50 transition-all duration-300"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-[9/16] rounded-xl overflow-hidden mb-4 bg-background/50">
                <iframe
                  src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                  title={`${testimonial.name}'s Review`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Client Info */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground">{testimonial.name}</h3>
                <p className="text-primary text-sm font-medium">{testimonial.niche}</p>
                <p className="text-muted-foreground text-sm mt-2 italic">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
