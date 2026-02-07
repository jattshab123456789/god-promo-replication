import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MessageCircle } from "lucide-react";
import logoImage from "@/assets/logo-gp.jpg";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <img 
                src={logoImage} 
                alt="GOD PROMO Logo" 
                className="w-12 h-12 object-contain scale-125 rounded-xl"
              />
              <span className="text-xl font-bold text-foreground">
                GOD <span className="text-primary">PROMO</span>
              </span>
            </a>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms & Conditions
              </a>
              <a href="/refund" className="text-muted-foreground hover:text-foreground transition-colors">
                Refund Policy
              </a>
              <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                Customer Support
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="https://wa.me/917404141096?text=Hello%2C%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>+91 7404141096</span>
              </a>
              <a href="mailto:sahilgrewal089@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>sahilgrewal089@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} GOD PROMO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
