import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: February 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                GOD PROMO ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our video editing services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-3">We may collect the following types of information:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and payment details</li>
                <li><strong>Project Materials:</strong> Video footage, images, audio files, and other content you provide</li>
                <li><strong>Communication Data:</strong> Messages, feedback, and project instructions</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3">We use the collected information to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide and deliver our video editing services</li>
                <li>Process payments and send billing information</li>
                <li>Communicate with you about projects and updates</li>
                <li>Improve our services and customer experience</li>
                <li>Send promotional materials (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Storage & Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information. Project files are stored securely and are typically deleted within 30 days after project completion unless otherwise requested. We use encrypted connections for data transfer and secure storage systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Information Sharing</h2>
              <p className="text-muted-foreground mb-3">
                We do not sell your personal information. We may share your information only:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>With service providers who assist in our operations (payment processors, cloud storage)</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights and safety or that of others</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-3">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies & Tracking</h2>
              <p className="text-muted-foreground">
                Our website may use cookies and similar technologies to enhance user experience and analyze website traffic. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:sahilgrewal089@gmail.com" className="text-primary hover:underline">
                  sahilgrewal089@gmail.com
                </a>{" "}
                or via WhatsApp at{" "}
                <a href="https://wa.me/917404141096" className="text-primary hover:underline">
                  +91 7404141096
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

export default PrivacyPolicy;
