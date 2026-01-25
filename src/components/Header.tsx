import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-gp.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="card-glass px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img 
            src={logoImage} 
            alt="GOD PROMO Logo" 
            className="w-12 h-12 object-contain scale-125"
          />
          <span className="text-xl font-bold text-foreground">
            GOD <span className="text-primary">PROMO</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
            Case Studies
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>

        {/* Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 card-glass p-4">
          <nav className="flex flex-col gap-4">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Services
            </a>
            <a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Case Studies
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              About
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              FAQ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
