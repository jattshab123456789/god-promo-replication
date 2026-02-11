import { Facebook, Twitter, Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/logo-gp.jpg";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img 
                src={logoImage} 
                alt="GOD PROMO Logo" 
                className="w-10 h-10 object-contain scale-125 rounded-lg"
              />
              <span className="text-lg font-bold text-foreground">
                GOD <span className="text-primary">PROMO</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional video editing services that help your content stand out.
            </p>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">Policies</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms & Conditions
              </Link>
              <Link to="/refund" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Refund Policy
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Customer Support
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">Contact Us</h3>
            <div className="space-y-3">
              <a href="https://wa.me/917404141096?text=Hello%2C%20I%27m%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>+91 7404141096</span>
              </a>
              <a href="mailto:sahilgrewal089@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>sahilgrewal089@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">Follow Us</h3>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Instagram, href: "https://instagram.com" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-card/60 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} <span className="font-semibold text-foreground">GOD PROMO</span> | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
