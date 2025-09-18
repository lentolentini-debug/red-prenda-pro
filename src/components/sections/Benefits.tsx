import { Zap, Headphones, AlertTriangle, BarChart3 } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Más ventas sin que el cliente vaya a sucursal",
      description: "Proceso 100% digital que permite cerrar operaciones desde tu agencia, aumentando tus ventas y mejorando la experiencia del cliente."
    },
    {
      icon: Headphones,
      title: "Onboarding y soporte en Car First",
      description: "Te capacitamos y acompañamos en cada paso del proceso, desde la configuración inicial hasta el dominio completo de la plataforma."
    },
    {
      icon: AlertTriangle,
      title: "Menos errores, más velocidad",
      description: "Nuestro acompañamiento reduce significativamente los errores de carga y acelera los tiempos de aprobación."
    },
    {
      icon: BarChart3,
      title: "Trazabilidad por etapas",
      description: "Seguimiento completo del proceso con visibilidad total de cada etapa, estados y posibles correcciones necesarias."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Beneficios para tu agencia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Optimizamos tu operatoria para que puedas ofrecer más y mejor servicio 
            a tus clientes, incrementando tus ventas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group flex items-start space-x-4 p-6 bg-background border border-border rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;