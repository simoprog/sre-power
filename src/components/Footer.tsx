import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "À propos", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Électricité industrielle",
    "Systèmes d'Air Comprimé, refroidissement et Ventilation",
    "Éclairage industriel",
  ];

  const legalLinks = [
    "Mentions légales",
    "Politique de confidentialité",
    "Conditions générales",
    "Plan du site",
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/sre-power/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 lg:px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/src/assets/LOGO SRE TRANSPARENT.png"
                  alt="SRE"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-2xl font-bold text-white">SRE</div>
                  <div className="text-sm text-white/70">
                    Solutions & Réalisations Énergétiques
                  </div>
                </div>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Votre partenaire de confiance pour tous vos projets énergétiques
                industriels. Plus de 5 ans d'expertise au service de
                l'innovation.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm text-white/90">+212 662-192954</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm text-white/90">
                    contact@srepower.ma
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-white/90">
                    Av des FAR, Kissariat Ennajah, N°51, 93000 Tétouan
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-white/90">
                    Lun-Ven 8h-18h, Urgences 24/7
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Navigation
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      className="text-white/80 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Nos Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-white/80 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Restez informé
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Recevez nos actualités et conseils techniques
              </p>
              <div className="flex space-x-2 mb-6">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="energy" size="sm">
                  OK
                </Button>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-white">Suivez-nous</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 group"
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5 text-white/80 group-hover:text-primary transition-colors duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4 lg:px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-white/60">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-white/60">
                  © 2024 SRE. Tous droits réservés.
                </span>
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors duration-300 group"
                  aria-label="Retour en haut"
                >
                  <ArrowUp className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
