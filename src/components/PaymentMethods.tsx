import { useScrollReveal } from "@/hooks/useScrollReveal";

const PaymentMethods = () => {
  const { ref, isVisible } = useScrollReveal();

  const paymentLogos = [
    { name: "PayPal", src: "https://hynamedia.digital/wp-content/uploads/2025/07/p.png" },
    { name: "Binance", src: "https://hynamedia.digital/wp-content/uploads/2025/07/binance.png" },
    { name: "Payoneer", src: "https://hynamedia.digital/wp-content/uploads/2025/07/payoneer.png" },
    { name: "Tap Tap Send", src: "https://hynamedia.digital/wp-content/uploads/2025/07/tap-tap-send.png" },
    { name: "Bank Transfer", src: "https://hynamedia.digital/wp-content/uploads/2025/07/bank-transper.png" },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container px-4" ref={ref}>
        <div className={`text-center mb-10 scroll-reveal ${isVisible ? "visible" : ""}`}>
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Payment Method
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
            Payment Received Through This System
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {paymentLogos.map((payment, index) => (
            <div
              key={index}
              className={`w-32 h-16 flex items-center justify-center hover:scale-110 transition-all duration-300 scroll-reveal-scale ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              <img
                src={payment.src}
                alt={payment.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
