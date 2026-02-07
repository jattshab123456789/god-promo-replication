import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cancellation & <span className="text-primary">Refund Policy</span>
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: February 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Overview</h2>
              <p className="text-muted-foreground">
                At GOD PROMO, we strive to deliver high-quality video editing services that exceed your expectations. This policy outlines the terms for cancellations and refunds to ensure transparency and fairness for all parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Cancellation Policy</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Before Work Begins</h3>
                  <p className="text-muted-foreground">
                    If you cancel before we start working on your project, you are eligible for a full refund of any advance payment made.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Work in Progress</h3>
                  <p className="text-muted-foreground">
                    If work has already begun, refunds will be prorated based on the amount of work completed. We will provide a breakdown of completed work upon request.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-2">After Delivery</h3>
                  <p className="text-muted-foreground">
                    Once the final deliverables have been provided, cancellation is not possible. However, revisions as per the package terms are still available.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Refund Eligibility</h2>
              <p className="text-muted-foreground mb-3">You may be eligible for a refund if:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>We fail to deliver the project within the agreed extended timeline</li>
                <li>The delivered work significantly deviates from the agreed specifications</li>
                <li>Technical issues on our end prevent project completion</li>
                <li>You cancel before work has commenced</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Non-Refundable Situations</h2>
              <p className="text-muted-foreground mb-3">Refunds are not available in the following cases:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Change of mind after work has been completed</li>
                <li>Delays caused by late submission of materials by the client</li>
                <li>Requests for changes outside the original project scope</li>
                <li>Failure to provide clear instructions leading to misunderstandings</li>
                <li>Dissatisfaction due to subjective creative preferences after approved revisions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Revision Policy</h2>
              <p className="text-muted-foreground">
                All packages include a specified number of free revisions. We encourage clients to use these revisions to ensure satisfaction before requesting a refund. Additional revisions beyond the included amount can be purchased at an additional cost.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Refund Process</h2>
              <p className="text-muted-foreground mb-3">To request a refund:</p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li>Contact us via email or WhatsApp with your project details</li>
                <li>Explain the reason for your refund request</li>
                <li>Allow 3-5 business days for review</li>
                <li>If approved, refunds will be processed within 7-10 business days</li>
                <li>Refunds will be issued to the original payment method</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Dispute Resolution</h2>
              <p className="text-muted-foreground">
                If you are dissatisfied with a refund decision, please contact us to discuss the matter further. We are committed to finding a fair resolution and maintaining positive client relationships.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact for Refunds</h2>
              <p className="text-muted-foreground">
                For cancellation or refund requests, please contact us at:{" "}
              </p>
              <div className="mt-4 p-4 rounded-xl bg-card border border-border">
                <p className="text-foreground">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:sahilgrewal089@gmail.com" className="text-primary hover:underline">
                    sahilgrewal089@gmail.com
                  </a>
                </p>
                <p className="text-foreground mt-2">
                  <strong>WhatsApp:</strong>{" "}
                  <a href="https://wa.me/917404141096" className="text-primary hover:underline">
                    +91 7404141096
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
