import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: February 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using GOD PROMO's services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Provided</h2>
              <p className="text-muted-foreground">
                GOD PROMO provides professional video editing services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Short-form content editing (Reels, Shorts, TikTok)</li>
                <li>Long-form video editing (YouTube, documentaries)</li>
                <li>Motion graphics and visual effects</li>
                <li>Color grading and audio enhancement</li>
                <li>Thumbnail design and branding</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Project Requirements</h2>
              <p className="text-muted-foreground">
                Clients must provide all necessary raw footage, assets, and clear instructions for each project. Delays in providing materials may affect delivery timelines. We reserve the right to request additional information or clarification as needed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Delivery & Revisions</h2>
              <p className="text-muted-foreground">
                Delivery timelines are estimates and may vary based on project complexity. Standard packages include a specified number of revisions. Additional revisions beyond the included amount may incur extra charges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
              <p className="text-muted-foreground">
                Payment is required as per the agreed terms before project commencement or delivery, depending on the package. We accept various payment methods as listed on our website. All prices are subject to change without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground">
                Upon full payment, clients receive full ownership of the final edited content. GOD PROMO reserves the right to use completed projects for portfolio and promotional purposes unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Confidentiality</h2>
              <p className="text-muted-foreground">
                We treat all client materials and project details as confidential. We will not share your content with third parties without your explicit consent, except as required for service delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                GOD PROMO shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:sahilgrewal089@gmail.com" className="text-primary hover:underline">
                  sahilgrewal089@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
