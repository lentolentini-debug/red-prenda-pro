import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock } from "lucide-react";

const ContactQuick = () => {
  const handlePhoneClick = () => {
    window.open("tel:+5491128655231", "_self");
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5491128655231";
    const message = "Hola! Me interesa obtener información sobre préstamos prendarios con RED PRENDARIA.";
    
    // Check if we're in development/preview environment
    const isPreview = window.location.hostname.includes('lovableproject.com') || 
                     window.location.hostname.includes('localhost');
    
    if (isPreview) {
      // In preview, show phone number and copy to clipboard
      navigator.clipboard.writeText(`+54 9 11 2865 5231`).then(() => {
        alert(`Número copiado: +54 9 11 2865 5231\n\nEn producción se abrirá WhatsApp automáticamente.`);
      }).catch(() => {
        alert(`WhatsApp: +54 9 11 2865 5231\n\nEn producción se abrirá WhatsApp automáticamente.`);
      });
    } else {
      // In production, open WhatsApp normally
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <section id="contacto" className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container-padding">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Contactanos
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Estamos aquí para ayudarte a comenzar a operar con RED PRENDARIA
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Phone */}
            <div className="group bg-background border border-border rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                Llamanos directamente
              </h3>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handlePhoneClick}
                className="w-full text-lg font-semibold"
              >
                +54 9 11 2865 5231
              </Button>
            </div>

            {/* WhatsApp */}
            <div className="group bg-background border border-border rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <MessageCircle className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                Escribinos por WhatsApp
              </h3>
              <Button 
                variant="accent" 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="w-full text-lg"
              >
                Enviar mensaje
              </Button>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-sm">
              Respondemos a agencias de lunes a viernes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactQuick;