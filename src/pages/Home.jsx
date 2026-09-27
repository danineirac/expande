import Hero from "../components/sections/Hero";
import Inversion from "../components/sections/Inversion";
import Ubicacion from "../components/sections/Ubicacion";
import Experiencia from "../components/sections/Experiencia";
import Prueba from "../components/sections/Prueba";
import Conferencistas from "../components/sections/Conferencista";
import FAQ from "../components/sections/FAQ";
import CierreCTA from "../components/sections/CierreCTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="font-sans selection:bg-orange-500 selection:text-white bg-slate-950 min-h-screen">
      <Hero />
      {/* <Estadisticas /> */}
      <Inversion />
      <Ubicacion />
      <Experiencia />
      <Prueba />
      <Conferencistas />
      <FAQ />
      <CierreCTA />
      <Footer />
    </div>
  );
}