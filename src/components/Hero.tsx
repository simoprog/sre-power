import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, CheckCircle } from "lucide-react";
import heroImage from "@/assets/industrie-header-image.jpg";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const Hero = () => {
  const { scrollToSection } = useSmoothScroll();

  const features = [
    "Expertise technique reconnue",
    "Solutions sur mesure",
    "Support 24/7",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-overlay z-10" />
        <img
          src={heroImage}
          alt="Solutions énergétiques industrielles"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">
              Expert en solutions énergétiques
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Solutions Énergétiques
            <span className="block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Innovantes & Durables
            </span>
          </h1>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2"
              >
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              size="lg"
              className="min-w-[200px] h-12 text-base font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              Demander un devis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[200px] h-12 text-base font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              onClick={() => scrollToSection("about")}
            >
              <Shield className="w-5 h-5 mr-2" />
              Nos réalisations
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">
              Plus de 20 entreprises nous font confiance
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">20+</div>
              <div className="w-1 h-8 bg-white/30" />
              <div className="text-2xl font-bold">10 ans</div>
              <div className="w-1 h-8 bg-white/30" />
              <div className="text-2xl font-bold">24/7</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default Hero;
