import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";

const Hero = () => {
  const metrics = [
    { label: "Agencias", value: "150+" },
    { label: "Años", value: "10+" },
    { label: "Operaciones", value: "5000+" },
  ];

  const features = [
    { icon: Clock, text: "Aprobación rápida" },
    { icon: Shield, text: "Proceso seguro" },
    { icon: CheckCircle, text: "Sin errores" },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background via-muted/30 to-primary-muted/20">
      <div className="container-padding">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 animate-fade-in-up">
            Préstamos prendarios para tus clientes{" "}
            <span className="text-gradient">a la mejor tasa</span>,{" "}
            de forma digital, ágil y simple
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-4xl mx-auto animate-fade-in-up">
            Somos el nexo entre ICBC, Car First y tu agencia: te acompañamos en cada etapa 
            para que la operación salga bien, rápido y sin errores.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm border border-border rounded-full py-2 px-4 shadow-soft"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mb-12 animate-fade-in-up">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg h-14 px-10"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quiero operar con RED PRENDARIA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background/60 backdrop-blur-sm border border-border rounded-2xl shadow-soft"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;