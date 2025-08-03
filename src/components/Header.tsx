import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import sreLogo from "@/assets/LOGO SRE TRANSPARENT.png";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    scrollToSection(sectionId);
  };

  const menuItems = [
    { name: "Accueil", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "À propos", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={sreLogo}
              alt="SRE Logo"
              className="w-14 h-14 lg:w-20 lg:h-20 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-primary">
                SRE
              </span>
              <span className="text-xs lg:text-sm text-muted-foreground hidden sm:block">
                Solutions & Réalisations Énergétiques
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href.replace("#", ""))}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium bg-transparent border-none cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+33 1 23 45 67 89</span>
            </div>
            <Button variant="default" size="sm">
              Devis gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="py-4 space-y-4 border-t border-border">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href.replace("#", ""))}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium bg-transparent border-none cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 space-y-3 border-t border-border">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@sre-energie.fr</span>
              </div>
              <Button variant="default" size="sm" className="w-full">
                Devis gratuit
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
