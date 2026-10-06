import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "../ui/FadeInSection";


export default function Conferencistas() {
  // Lista de imágenes para el carrusel
  const carruselImagenes = [
    "/images/danna-neira-2.webp",
    "/images/danna-neira-3.webp", // Cambia esto por tus imágenes reales
    "/images/danna-neira-4.webp"
  ];

  const [currentImg, setCurrentImg] = useState(0);

  // Cambiar imagen cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % carruselImagenes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 px-4 bg-[#050505] text-white font-sans relative overflow-hidden border-t border-gray-900/50 -mt-15">
      
      {/* Brillo de fondo sutil */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-[#e6b981] opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-[#e6b981] opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto -mt-15">
        
        {/* ENCABEZADO */}
        <FadeInSection>
          <div className="mb-16 md:mb-24 text-center">
            <span className="text-[#e6b981] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              Quién está detrás de EXPANDE
            </span>
            <h2 className="font-['Oswald',sans-serif] text-5xl md:text-7xl font-bold uppercase mt-3 tracking-tighter text-white">
              Danna Neira
            </h2>
            <p className="text-gray-500 text-xs md:text-sm uppercase tracking-[0.2em] mt-4 font-semibold">
              @dannaneira17
            </p>
          </div>
        </FadeInSection>

        {/* =========================================
            BLOQUE 1: IMAGEN IZQUIERDA / TEXTO DERECHA
            ========================================= */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-20 lg:mb-32">
          
          {/* Imagen 1 (Izquierda) */}
          <div className="w-full lg:w-1/2">
            <FadeInSection>
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_40px_rgba(230,185,129,0.05)] group">
                <img 
                  src="/images/danna-neira-1.webp"  
                  alt="Danna Neira Retrato" 
                  className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <p className="text-[#e6b981] text-[10px] uppercase tracking-widest font-bold mb-2">
                    Formadora de Alto Impacto
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Texto 1 (Derecha) */}
          <div className="w-full lg:w-1/2 text-gray-400 text-sm md:text-base font-light leading-relaxed space-y-6">
            <FadeInSection delay={0.1}>
              <p className="text-xl md:text-2xl text-white font-medium leading-snug mb-6">
                Soy formadora internacional de alto impacto, mentora, terapeuta holística, speaker y profesional en Marketing y Publicidad Digital.
              </p>
              <p>
                He acompañado a cientos de personas a través de experiencias presenciales, formaciones y procesos de transformación enfocados en conciencia, sanación emocional, relaciones, identidad y expansión personal.
              </p>
              <p>
                Mi trabajo integra dos mundos que para mí no deberían estar separados: <strong className="text-white font-normal">la transformación del mundo interno y la expansión de los resultados externos.</strong> Porque no basta con saber qué hacer si el miedo, las heridas o la percepción que tienes de ti siguen decidiendo por ti.
              </p>
              <p>
                Por eso mi enfoque integra sanación emocional, conciencia, identidad, espiritualidad, relaciones, propósito y acción.
              </p>
            </FadeInSection>
          </div>

        </div>

        {/* =========================================
            BLOQUE 2: TEXTO IZQUIERDA / IMAGEN DERECHA
            ========================================= */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-20 lg:mb-24">
          
          {/* Texto 2 (Izquierda) */}
          <div className="w-full lg:w-1/2 text-gray-400 text-sm md:text-base font-light leading-relaxed space-y-6 order-2 lg:order-1">
            <FadeInSection delay={0.1}>
              <div className="py-6 border-l-2 border-[#e6b981] pl-6 mb-8 bg-linear-to-r from-[#e6b981]/5 to-transparent">
                <p className="text-gray-200 text-lg italic">
                  "Pero hubo otra pieza que transformó profundamente mi manera de ver el crecimiento: el contexto."
                </p>
              </div>
              <p>
                Cuando empecé a entrar en espacios diferentes y a rodearme de personas que pensaban, decidían y vivían de una manera distinta, también empezó a expandirse lo que yo creía posible para mi propia vida.
              </p>
              <p>
                Entendí que tu contexto no solamente son las personas que tienes cerca. Son las conversaciones que escuchas, las preguntas que empiezas a hacerte, los estándares que normalizas y la realidad que empiezas a creer posible para ti.
              </p>
              <p className="font-medium text-white mt-8">
                Y esa es una de las razones por las que creé EXPANDE como una experiencia presencial.
              </p>
              <p>
                No quiero que solamente recibas información. Quiero que durante un día salgas de tu contexto habitual, entres en una sala con personas que también quieren crecer y puedas reordenar tu mundo interno para empezar a expandir tus resultados externos.
              </p>
            </FadeInSection>
          </div>

          {/* Imagen 2 (Derecha - Ahora como Carrusel) */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <FadeInSection>
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_40px_rgba(230,185,129,0.05)] group bg-[#050505]">
                
                <AnimatePresence>
                  <motion.img 
                    key={currentImg}
                    src={carruselImagenes[currentImg]}
                    alt="Danna Neira en Tarima"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }} // Duración del degradado
                    className="absolute inset-0 w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700"
                  />
                </AnimatePresence>

                {/* Sombra de degradado estática encima de las imágenes */}
                <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
              </div>
            </FadeInSection>
          </div>

        </div>

        {/* =========================================
            BLOQUE 3: TEXTO CENTRAL Y FRASE FINAL
            ========================================= */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <FadeInSection delay={0.1}>
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              Mi propósito es acompañar a más personas a reconocer su valor, elevar su conciencia, sanar aquello que todavía limita sus decisiones, poner sus dones al servicio de algo más grande y construir una vida con más paz, mejores relaciones, mayor expansión económica y una relación más profunda con Dios.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <p className="p-6 md:p-8 bg-[#0a0a0a] border border-[#e6b981]/20 rounded-xl text-gray-300 text-sm md:text-base font-light leading-relaxed shadow-lg inline-block">
              <strong className="text-[#e6b981]">EXPANDE</strong> reúne en un mismo lugar todo aquello en lo que creo: conciencia y acción, espiritualidad y resultados, mundo interno y mundo externo.
            </p>
          </FadeInSection>

          {/* FRASE DE CIERRE GIGANTE */}
          <FadeInSection delay={0.3}>
            <div className="mt-20 pt-16 border-t border-gray-800/60 relative">
              <h3 className="font-['Oswald',sans-serif] text-3xl md:text-5xl font-bold uppercase tracking-tight text-white leading-[1.2] max-w-3xl mx-auto">
                Tu historia puede explicar quién has sido. <br className="hidden md:block" />
                <span className="text-[#e6b981]">Pero no tiene por qué decidir hasta dónde puedes llegar.</span>
              </h3>
              <p className="mt-8 text-gray-500 uppercase tracking-widest text-xs font-bold">
                — Danna Neira
              </p>
            </div>
          </FadeInSection>

        </div>

      </div>
    </section>
  );
}