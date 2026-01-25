import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="card-glass px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">G</span>
          </div>
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

        {/* Mascot & Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block w-12 h-12 rounded-full overflow-hidden bg-secondary">
            <img 
              src="https://hynamedia.digital/wp-content/uploads/2025/07/WhatsApp_Image_2025-07-26_at_15.13.46_526430a2-removebg-preview.png" 
              alt="Mascot" 
              className="w-full h-full object-contain"
            />
          </div>
          
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
