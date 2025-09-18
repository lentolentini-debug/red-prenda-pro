import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  ExternalLink
} from "lucide-react";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contacto - RED PRENDARIA | Conectate con Nosotros";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contactá a RED PRENDARIA. Teléfono, email, dirección y formulario de contacto. Atención personalizada para agencias de lunes a viernes.');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual webhook
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarte. Responderemos a la brevedad.",
      });

      // Reset form
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: ""
      });
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Hubo un problema. Intentá nuevamente o contactanos por teléfono.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Teléfono",
      value: "+54 9 11 2865 5231",
      action: () => window.open("tel:+5491128655231", "_self"),
      description: "Llamanos directamente"
    },
    {
      icon: Mail,
      label: "Email",
      value: "recepcion@coopredhipotecaria.com.ar",
      action: () => window.open("mailto:recepcion@coopredhipotecaria.com.ar", "_self"),
      description: "Escribinos un email"
    },
    {
      icon: MapPin,
      label: "Dirección",
      value: "Tte. Gral. Juan Domingo Perón 346, CABA",
      action: () => window.open("https://www.google.com/maps/place/Tte.+Gral.+Juan+Domingo+Per%C3%B3n+346,+C1038AAH+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6054821,-58.3741827,17z/data=!3m1!4b1!4m6!3m5!1s0x95a3352d4ca04689:0x3d6456ca6abdfbc5!8m2!3d-34.6054865!4d-58.3716078!16s%2Fg%2F11nnknl73j?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D", "_blank"),
      description: "Ver en Google Maps"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Contactanos
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Estamos aquí para ayudarte. Contactanos a través de cualquiera de 
                nuestros canales disponibles.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                    Información de contacto
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <div
                          key={index}
                          className="group bg-background border border-border rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer"
                          onClick={info.action}
                        >
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-heading font-semibold text-foreground mb-1">
                                {info.label}
                              </h3>
                              <p className="text-foreground font-medium mb-1">
                                {info.value}
                              </p>
                              <p className="text-sm text-muted-foreground flex items-center">
                                {info.description}
                                <ExternalLink className="ml-1 h-3 w-3" />
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-semibold text-foreground">
                      Horarios de atención
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lunes a Viernes:</span>
                      <span className="font-medium text-foreground">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sábados y Domingos:</span>
                      <span className="font-medium text-foreground">Cerrado</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Respondemos consultas de agencias en horario comercial
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-background border border-border rounded-2xl p-8 shadow-soft">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                    Envianos un mensaje
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre *</Label>
                        <Input
                          id="nombre"
                          name="nombre"
                          type="text"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          required
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono</Label>
                        <Input
                          id="telefono"
                          name="telefono"  
                          type="tel"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          placeholder="Tu número de teléfono"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="asunto">Asunto *</Label>
                      <Input
                        id="asunto"
                        name="asunto"
                        type="text"
                        value={formData.asunto}
                        onChange={handleInputChange}
                        required
                        placeholder="¿Sobre qué querés consultarnos?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Mensaje *</Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        required
                        placeholder="Contanos tu consulta en detalle..."
                        rows={5}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar mensaje
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Campos obligatorios. Responderemos a la brevedad en horario comercial.
                    </p>
                  </form>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Nuestra ubicación
                </h2>
                <p className="text-muted-foreground">
                  Visitanos en nuestras oficinas en el centro de Buenos Aires
                </p>
              </div>
              
              <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168756147756!2d-58.37418267517934!3d-34.60548458046214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3352d4ca04689%3A0x3d6456ca6abdfbc5!2sTte.%20Gral.%20Juan%20Domingo%20Per%C3%B3n%20346%2C%20C1038AAH%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1642789123456!5m2!1sen!2sar"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de RED PRENDARIA"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;