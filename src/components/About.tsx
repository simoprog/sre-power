import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, Target, ArrowRight } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Clients satisfaits",
      description: "Entreprises industrielles"
    },
    {
      icon: Award,
      number: "15",
      label: "Années d'expérience",
      description: "Dans l'énergie industrielle"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support technique",
      description: "Assistance continue"
    },
    {
      icon: Target,
      number: "98%",
      label: "Taux de satisfaction",
      description: "Qualité reconnue"
    }
  ];

  const certifications = [
    "Certification ISO 9001",
    "Habilitation électrique",
    "Qualibat RGE",
    "Certification QualiPAC"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">À Propos de SRE</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Votre Partenaire
              <span className="block text-primary">Énergétique de Confiance</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Depuis plus de 15 ans, <strong className="text-foreground">SRE</strong> accompagne 
              les entreprises industrielles dans leurs projets énergétiques. Notre expertise 
              technique et notre approche personnalisée nous permettent de concevoir des 
              solutions innovantes et durables.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Spécialisés dans les installations électriques industrielles, les systèmes 
              HVAC et l'optimisation énergétique, nous intervenons sur tous types 
              d'environnements industriels avec un engagement qualité constant.
            </p>

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-4">Nos certifications :</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="energy" size="lg">
                Découvrir nos réalisations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Télécharger notre présentation
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft border hover:shadow-medium transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-energy-gradient rounded-lg flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-foreground text-sm mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-industrial-gradient rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
            Notre Mission
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Accompagner la transition énergétique des entreprises industrielles en proposant 
            des solutions techniques innovantes, durables et parfaitement adaptées à leurs besoins. 
            Notre engagement : la qualité, la performance et le service client au cœur de chaque projet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;