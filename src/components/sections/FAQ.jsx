import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "../ui/FadeInSection";

// Array con los datos de las preguntas y respuestas
const faqs = [
  {
    pregunta: "Ya te sigo / ya fui antes. ¿Por qué ir ESTE año y no esperar?",
    respuesta: "Porque lo que se pierde si no vienes no se repite: la sala de este año, con la gente de este año. Y hay diferencial concreto para 2026: el Día 2 incorpora inteligencia artificial aplicada a tu negocio —no la teníamos antes—, más marca personal, ventas, liderazgo y oratoria trabajados en vivo. Cada edición es única y no se graba para revenderla: o estás en la sala, o te la perdiste."
  },
  {
    pregunta: "¿Qué incluye cada entrada?",
    respuesta: "General: los dos días completos + Kit Vivencial + Kit Digital. VIP: todo lo de General + ingreso privilegiado, zona diferenciada, grabación completa y desayuno de mesa redonda con Javi. Platino (muy limitadas): todo lo de VIP + ubicación exclusiva, backstage, cena privada con Javi y un año en la Red Privada Platino. El detalle completo y los precios están en las entradas de arriba."
  },
  {
    pregunta: "¿Puedo llevar a alguien?",
    respuesta: "Sí. Hay descuentos reales por venir en grupo o con tu familia; escríbenos y te pasamos las opciones para que nadie se quede por fuera del contexto."
  },
  {
    pregunta: "¿Vale la pena el VIP?",
    respuesta: "El VIP no es estatus, es cercanía al contexto: más cerca de Javi y de la gente correcta es donde ocurre lo que no se te olvida. Si puedes, elígelo."
  },
  {
    pregunta: "¿En qué ciudad y fecha es?",
    respuesta: "La fecha y el recinto de tu ciudad están indicados en la parte superior de esta misma página. El aforo es limitado y varias ediciones se agotan antes de tiempo, así que asegura la tuya pronto."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 px-4 bg-[#050505] text-white font-sans border-t border-gray-900">
      <div className="max-w-3xl mx-auto">
        
        {/* ENCABEZADO */}
        <FadeInSection>
          <div className="mb-12 text-left">
            <span className="text-[#f04e23] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              Preguntas Frecuentes
            </span>
            <h2 className="font-['Oswald',_sans-serif] text-4xl md:text-5xl font-bold uppercase mt-3 tracking-tight">
              Preguntas Frecuentes
            </h2>
          </div>
        </FadeInSection>

        {/* LISTA DE ACORDEONES */}
        <div className="border-t border-gray-800">
          {faqs.map((faq, index) => (
            <FadeInSection delay={0.1 * index} key={index}>
              <FAQItem pregunta={faq.pregunta} respuesta={faq.respuesta} />
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  );
}

/* =========================================
   COMPONENTE HIJO: ITEM DE ACORDEÓN (ANIMADO)
   ========================================= */
const FAQItem = ({ pregunta, respuesta }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-base md:text-lg font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
          {pregunta}
        </span>
        
        {/* Ícono animado que gira de + a x */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-[#f04e23] text-2xl font-light flex-shrink-0"
        >
          +
        </motion.div>
      </button>

      {/* Contenedor animado de la respuesta con Framer Motion */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 text-sm md:text-base font-light leading-relaxed">
              {respuesta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};