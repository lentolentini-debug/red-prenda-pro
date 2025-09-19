import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { name: "Política de Privacidad", href: "#" },
    { name: "Términos y Condiciones", href: "#" },
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container-padding">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">RP</span>
                </div>
                <span className="font-heading font-bold text-lg text-foreground">
                  RED PRENDARIA
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                El nexo operativo entre ICBC, Car First y tu agencia para concretar 
                créditos prendarios de forma rápida, digital y sin errores.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Navegación
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/manual" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    Manual para Agencias
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contacto" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Seguinos
              </h3>
               <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-9 h-9 bg-background border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-sm">
                © {currentYear} RED PRENDARIA. Todos los derechos reservados.
              </p>
              <div className="flex items-center space-x-6">
                {legalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;