import { 
  UserPlus, 
  FileCheck, 
  Search, 
  DollarSign, 
  FileText, 
  CheckCircle2 
} from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Asistencia en Car First",
      description: "Te acompañamos en el proceso de alta y configuración en la plataforma Car First."
    },
    {
      icon: FileCheck,
      title: "Alta de cliente",
      description: "Gestiona el alta del cliente con todos los datos necesarios para el proceso."
    },
    {
      icon: Search,
      title: "Carga y validación",
      description: "Validamos y verificamos todos los datos cargados para evitar errores posteriores."
    },
    {
      icon: DollarSign,
      title: "Generación de oferta",
      description: "Creamos la oferta con condiciones, monto y plan de cuotas personalizado."
    },
    {
      icon: FileText,
      title: "Documentación",
      description: "Recopilamos DNI, comprobantes de ingresos y toda la documentación requerida."
    },
    {
      icon: CheckCircle2,
      title: "Seguimiento completo",
      description: "Monitoreamos el proceso hasta la aprobación o devolución por correcciones."
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Cómo trabajamos con tu agencia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un proceso simple y estructurado en 6 pasos para garantizar 
            el éxito de cada operación prendaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-background border border-border rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-4 pt-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;