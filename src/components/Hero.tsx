import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-energy-solutions.jpg";

const Hero = () => {
  const features = [
    "Expertise technique reconnue",
    "Solutions sur mesure",
    "Support 24/7",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-gradient opacity-90 z-10" />
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
            <span className="text-sm font-medium">Expert en solutions énergétiques</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Solutions Énergétiques
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Innovantes & Durables
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Conception, installation et maintenance de systèmes électriques, 
            HVAC et solutions énergétiques pour l'industrie moderne.
          </p>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="min-w-[200px] h-12 text-base font-semibold"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[200px] h-12 text-base font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              <Shield className="w-5 h-5 mr-2" />
              Nos réalisations
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Plus de 500 entreprises nous font confiance</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">500+</div>
              <div className="w-1 h-8 bg-white/30" />
              <div className="text-2xl font-bold">15 ans</div>
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