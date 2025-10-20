import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  FileCheck, 
  DollarSign, 
  FileText, 
  CheckCircle2, 
  BarChart3,
  ArrowRight,
  BookOpen
} from "lucide-react";

const Manual = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    document.title = "Manual para Agencias - RED PRENDARIA | Guía Completa de Uso";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Guía completa para agencias: alta en Car First, validación de datos, generación de ofertas, documentación y seguimiento de trámites prendarios.');
    }

    // Handle scroll to section if hash is present
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }

    // Intersection Observer for active section
    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      id: "alta-car-first",
      title: "Alta en Car First",
      icon: UserPlus,
      description: "Proceso de registro y configuración inicial en la plataforma"
    },
    {
      id: "carga-validacion",
      title: "Carga y validación de datos",
      icon: FileCheck,
      description: "Verificación y validación de información del cliente"
    },
    {
      id: "generacion-oferta",
      title: "Generación de oferta",
      icon: DollarSign,
      description: "Condiciones, montos y planes de cuotas personalizados"
    },
    {
      id: "documentacion",
      title: "Documentación requerida",
      icon: FileText,
      description: "DNI, comprobantes y documentos necesarios"
    },
    {
      id: "aprobacion-inmediata",
      title: "Aprobación inmediata",
      icon: CheckCircle2,
      description: "Flujo paso a paso para aprobaciones rápidas"
    },
    {
      id: "seguimiento",
      title: "Seguimiento del trámite",
      icon: BarChart3,
      description: "Etapas, estados y gestión de correcciones"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="section-padding">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Manual para Agencias
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Guía completa para operar con RED PRENDARIA. Todo lo que necesitás 
                saber para realizar operaciones exitosas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                    <h2 className="font-heading font-semibold text-foreground mb-4">
                      Índice de contenidos
                    </h2>
                    <nav className="space-y-2">
                      {sections.map((section) => {
                        const Icon = section.icon;
                        return (
                          <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                              activeSection === section.id
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "hover:bg-background text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <Icon className="h-4 w-4 flex-shrink-0" />
                            <span className="text-sm font-medium">{section.title}</span>
                          </button>
                        );
                      })}
                    </nav>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="space-y-16">
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <section key={section.id} id={section.id} className="scroll-mt-24">
                        <div className="bg-background border border-border rounded-2xl p-8 shadow-soft">
                          {/* Section Header */}
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h2 className="text-2xl font-heading font-bold text-foreground">
                                {index + 1}. {section.title}
                              </h2>
                              <p className="text-muted-foreground">
                                {section.description}
                              </p>
                            </div>
                          </div>

                          {/* Section Content */}
                          <div className="prose prose-gray max-w-none">
                            {section.id === "alta-car-first" && (
                              <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-foreground">Pasos para el alta:</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                  <li>• Completar formulario de registro con datos de la agencia</li>
                                  <li>• Validar documentación comercial y habilitaciones</li>
                                  <li>• Configurar perfil de usuario y permisos</li>
                                  <li>• Capacitación inicial en el uso de la plataforma</li>
                                  <li>• Pruebas de conectividad y funcionalidades</li>
                                </ul>
                                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                                  <p className="text-sm text-primary font-medium">
                                    💡 Tip: El proceso de alta toma aproximadamente 2-3 días hábiles. 
                                    Te acompañamos en cada paso para asegurar una configuración exitosa.
                                  </p>
                                </div>
                              </div>
                            )}

                            {section.id === "carga-validacion" && (
                              <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-foreground">Proceso de validación:</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                  <li>• Verificación de datos personales del cliente</li>
                                  <li>• Validación de ingresos y capacidad de pago</li>
                                  <li>• Chequeo de antecedentes crediticios</li>
                                  <li>• Confirmación de datos del vehículo</li>
                                  <li>• Revisión de documentación adjunta</li>
                                </ul>
                                <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
                                  <p className="text-sm text-accent font-medium">
                                    ⚠️ Importante: La validación incorrecta de datos es la principal causa de 
                                    devoluciones. Revisá cada campo cuidadosamente.
                                  </p>
                                </div>
                              </div>
                            )}

                            {section.id === "generacion-oferta" && (
                              <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-foreground">Elementos de la oferta:</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                  <li>• Monto máximo financiable según valuación</li>
                                  <li>• Tasa de interés aplicable</li>
                                  <li>• Opciones de plazo de financiación</li>
                                  <li>• Plan de cuotas detallado</li>
                                  <li>• Costos asociados y seguros</li>
                                </ul>
                              </div>
                            )}

                            {section.id === "documentacion" && (
                              <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-foreground">Documentos requeridos:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="font-medium text-foreground mb-2">Del cliente:</h4>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                      <li>• DNI (frente y dorso)</li>
                                      <li>• Constancia de CUIL/CUIT</li>
                                      <li>• Comprobante de domicilio</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-foreground mb-2">Del vehículo:</h4>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                      <li>• Título de propiedad</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            )}

                            {section.id === "aprobacion-inmediata" && (
                              <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-foreground">Criterios para aprobación inmediata:</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                  <li>• Cliente con historial crediticio excelente</li>
                                  <li>• Ingresos demostrables y estables</li>
                                  <li>• Vehículo dentro de parámetros estándar</li>
                                  <li>• Documentación completa y correcta</li>
                                  <li>• Monto dentro de límites preestablecidos</li>
                                </ul>
                                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                                  <p className="text-sm text-green-700 font-medium">
                                    ✅ Las aprobaciones inmediatas representan aproximadamente el 70% 
                                    de las operaciones cuando se siguen correctamente estos criterios.
                                  </p>
                                </div>
                              </div>
                            )}

                            {section.id === "seguimiento" && (
                              <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-foreground">Estados del trámite:</h3>
                                <div className="space-y-3">
                                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm font-medium text-blue-700">En revisión</span>
                                  </div>
                                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <span className="text-sm font-medium text-yellow-700">Requiere correcciones</span>
                                  </div>
                                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm font-medium text-green-700">Aprobado</span>
                                  </div>
                                  <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span className="text-sm font-medium text-red-700">Rechazado</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </section>
                    );
                  })}
                </div>

                {/* Contact CTA */}
                <div className="mt-16 text-center p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                    ¿Tenés dudas sobre algún proceso?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Nuestro equipo de soporte está disponible para ayudarte con cualquier 
                    consulta específica sobre el manual o los procesos.
                  </p>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contacto">
                      Contactanos
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Manual;