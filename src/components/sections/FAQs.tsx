import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "¿Cuáles son los requisitos para que mi agencia pueda operar?",
      answer: "Tu agencia debe estar registrada como concesionario autorizado y contar con la documentación comercial correspondiente. Te acompañamos en todo el proceso de alta y verificación de requisitos."
    },
    {
      question: "¿Cuánto tiempo demora el proceso de aprobación?",
      answer: "Los tiempos varían según la complejidad del caso, pero en promedio las aprobaciones inmediatas se resuelven en minutos, mientras que casos más complejos pueden tomar entre 24 a 48 horas hábiles."
    },
    {
      question: "¿Qué documentación necesita el cliente final?",
      answer: "DNI actualizado, comprobantes de ingresos de los últimos 3 meses, constancia de CUIL/CUIT, y documentación específica del vehículo. Te proporcionamos una lista completa en el manual."
    },
    {
      question: "¿Qué sucede si hay correcciones o devoluciones?",
      answer: "Te notificamos inmediatamente con el detalle de las correcciones necesarias. Nuestro equipo te asiste para resolverlas rápidamente y reenviar la solicitud."
    },
    {
      question: "¿Cómo puedo hacer seguimiento del trámite?",
      answer: "A través de Car First puedes ver el estado en tiempo real de cada operación. Además, nuestro equipo te mantiene informado de cada etapa del proceso."
    },
    {
      question: "¿Qué canales de soporte están disponibles?",
      answer: "Ofrecemos soporte vía teléfono, WhatsApp y email de lunes a viernes en horario comercial. También incluimos capacitación inicial y seguimiento continuo."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Resolvemos las dudas más comunes sobre nuestro servicio
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-background shadow-soft hover:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="text-center mt-12 p-8 bg-muted/50 rounded-2xl border border-border">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
              ¿No encontraste lo que buscabas?
            </h3>
            <p className="text-muted-foreground mb-4">
              Nuestro equipo está disponible para resolver cualquier consulta específica
            </p>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors duration-200"
            >
              Contactanos directamente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;