const clients = [
  { name: "James", niche: "Run Clothing Brand" },
  { name: "Taz", niche: "Gamer" },
  { name: "Chris", niche: "Car washing business" },
  { name: "Abdur Rahman", niche: "UI/UX designer" },
];

const HappyClients = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-4 mb-12">
        <div className="text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Happy Clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Delivering Real Value to Every Client
          </h2>
        </div>
      </div>

      {/* Clients Marquee */}
      <div className="overflow-hidden">
        <div className="flex gap-6 animate-marquee">
          {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 card-glass p-6 text-center rounded-2xl"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">{client.name[0]}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{client.name}</h3>
              <p className="text-muted-foreground text-sm">Niche: {client.niche}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
