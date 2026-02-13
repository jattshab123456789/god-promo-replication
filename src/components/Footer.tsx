import { Facebook, Twitter, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";
import logoImage from "@/assets/logo-gp.jpg";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container px-4">
        <StaggerContainer className="grid md:grid-cols-4 gap-12 mb-12" staggerDelay={0.1}>
          <StaggerItem>
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src={logoImage} alt="GOD PROMO Logo" className="w-12 h-12 object-contain scale-125 rounded-xl" />
                <span className="text-xl font-bold text-foreground">GOD <span className="text-primary">PROMO</span></span>
              </Link>
              <p className="text-muted-foreground text-sm">Professional video editing services that help your content stand out.</p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Policies</h3>
              <div className="grid grid-cols-1 gap-3">
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms & Conditions</Link>
                <Link to="/refund" className="text-muted-foreground hover:text-primary transition-colors text-sm">Refund Policy</Link>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</Link>
                <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors text-sm">Customer Support</Link>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
              <div className="space-y-3">
                <a href="https://wa.me/917404141096?text=Hello%2C%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <MessageCircle className="w-4 h-4 text-primary" /><span>+91 7404141096</span>
                </a>
                <a href="mailto:sahilgrewal089@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4 text-primary" /><span>sahilgrewal089@gmail.com</span>
                </a>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: "https://facebook.com" },
                  { icon: Twitter, href: "https://twitter.com" },
                  { icon: Linkedin, href: "https://linkedin.com" },
                  { icon: Instagram, href: "https://instagram.com" },
                ].map(({ icon: Icon, href }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <AnimatedSection variant="fade-in">
          <div className="pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} GOD PROMO. All rights reserved.</p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;
