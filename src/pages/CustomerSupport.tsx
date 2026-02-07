import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Mail, Clock, HelpCircle } from "lucide-react";

const CustomerSupport = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Customer <span className="text-primary">Support</span>
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              We're here to help you with any questions or concerns. Our dedicated support team is available to assist you.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <MessageCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">WhatsApp Support</h3>
                <p className="text-muted-foreground mb-4">Get instant support via WhatsApp for quick queries.</p>
                <a 
                  href="https://wa.me/917404141096?text=Hello%2C%20I%20need%20help%20with%20your%20services." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  +91 7404141096
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <Mail className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Email Support</h3>
                <p className="text-muted-foreground mb-4">Send us an email and we'll respond within 24 hours.</p>
                <a 
                  href="mailto:sahilgrewal089@gmail.com"
                  className="text-primary hover:underline font-medium"
                >
                  sahilgrewal089@gmail.com
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Business Hours</h3>
                <p className="text-muted-foreground mb-4">Our team is available during these hours:</p>
                <p className="text-foreground font-medium">Monday - Saturday: 10:00 AM - 7:00 PM IST</p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <HelpCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">FAQ</h3>
                <p className="text-muted-foreground mb-4">Find answers to commonly asked questions.</p>
                <a href="/#faq" className="text-primary hover:underline font-medium">
                  View FAQ Section
                </a>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-4">How Can We Help?</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Questions about our video editing services</li>
                <li>• Project status and delivery inquiries</li>
                <li>• Revision requests and feedback</li>
                <li>• Payment and billing support</li>
                <li>• Technical issues or file uploads</li>
                <li>• Custom project requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerSupport;
