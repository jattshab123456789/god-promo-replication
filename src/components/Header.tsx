import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/logo-gp.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="card-glass px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img 
            src={logoImage} 
            alt="GOD PROMO Logo" 
            className="w-10 h-10 object-contain scale-125 rounded-lg"
          />
          <span className="text-lg font-bold text-foreground">
            GOD <span className="text-primary">PROMO</span>
          </span>
        </a>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Case Studies
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>

        {/* Hamburger / Mascot area */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 card-glass p-5">
          <nav className="flex flex-col gap-1">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-4 rounded-xl">
              Services
            </a>
            <a href="#case-studies" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-4 rounded-xl">
              Case Studies
            </a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-4 rounded-xl">
              About
            </a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-4 rounded-xl">
              FAQ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
