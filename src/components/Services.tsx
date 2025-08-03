import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Wind, Cog, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Installations Électriques",
      description: "Conception et installation de systèmes électriques industriels haute et basse tension.",
      features: [
        "Tableaux électriques industriels",
        "Automatismes et contrôle",
        "Mise aux normes",
        "Maintenance préventive"
      ],
      image: "/lovable-uploads/6b2df560-121c-4602-99bf-8d0366ac871b.png"
    },
    {
      icon: Wind,
      title: "Systèmes HVAC",
      description: "Solutions de chauffage, ventilation et climatisation pour environnements industriels.",
      features: [
        "Climatisation industrielle",
        "Ventilation spécialisée",
        "Systèmes de récupération",
        "Optimisation énergétique"
      ],
      image: "/lovable-uploads/cbdf2c2f-fe62-4a97-ad0e-26dae57b542a.png"
    },
    {
      icon: Cog,
      title: "Solutions Industrielles",
      description: "Intégration complète de systèmes énergétiques pour installations industrielles.",
      features: [
        "Audit énergétique",
        "Automatisation",
        "Systèmes de supervision",
        "Efficacité énergétique"
      ],
      image: "/lovable-uploads/1cc0cc67-7a9a-4c66-b84c-5ca127c6867f.png"
    }
  ];

  return (
    <section id="services" className="py-20 bg-industrial-gradient">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Cog className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nos Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Expertise Technique
            <span className="block text-primary">& Solutions Complètes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            De la conception à la maintenance, nous accompagnons vos projets énergétiques 
            avec une expertise technique reconnue et des solutions innovantes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 shadow-soft bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-energy-gradient rounded-lg flex items-center justify-center shadow-soft">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-medium">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Besoin d'une solution personnalisée ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nos experts analysent vos besoins et conçoivent des solutions 
            énergétiques adaptées à votre industrie et vos contraintes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="energy" size="lg">
              Consultation gratuite
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Télécharger notre brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;