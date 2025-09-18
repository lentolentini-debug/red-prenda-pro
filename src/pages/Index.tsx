import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Benefits from "@/components/sections/Benefits";
import InfoWidgets from "@/components/sections/InfoWidgets";
import ContactQuick from "@/components/sections/ContactQuick";
import FAQs from "@/components/sections/FAQs";

const Index = () => {
  useEffect(() => {
    document.title = "RED PRENDARIA - Préstamos Prendarios para Agencias | Proceso Digital y Ágil";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Somos el nexo entre ICBC, Car First y tu agencia para préstamos prendarios. Proceso digital, rápido y sin errores. ¡Operá con las mejores condiciones!');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Process />
        <Benefits />
        <InfoWidgets />
        <ContactQuick />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
