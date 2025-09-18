import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, TrendingUp, ArrowRight } from "lucide-react";

const InfoWidgets = () => {
  const widgets = [
    {
      icon: Clock,
      title: "Aprobación inmediata",
      description: "Conocé el flujo para la aprobación inmediata y cómo optimizar los tiempos de respuesta para tus clientes.",
      cta: "Leer cómo funciona",
      link: "/manual#aprobacion-inmediata",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: TrendingUp,
      title: "Mejores condiciones",
      description: "Ofrecemos las mejores condiciones en tasas y plazos para que todos tus clientes puedan adquirir tu automóvil.",
      cta: "Ver condiciones",
      link: "#contacto",
      gradient: "from-accent/10 to-accent/5"
    }
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {widgets.map((widget, index) => {
            const Icon = widget.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${widget.gradient} border border-border rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-background/80 backdrop-blur-sm border border-border rounded-xl flex items-center justify-center shadow-soft">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    {widget.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {widget.description}
                  </p>

                  {/* CTA Button */}
                  <Button 
                    variant="outline" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                    asChild
                  >
                    {widget.link.startsWith('#') ? (
                      <button 
                        onClick={() => document.getElementById(widget.link.substring(1))?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        {widget.cta}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    ) : (
                      <Link to={widget.link}>
                        {widget.cta}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    )}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoWidgets;