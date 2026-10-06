import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "../ui/FadeInSection";

// Array con los datos exactos del PDF del cliente
const faqs = [
  {
    pregunta: "¿EXPANDE es para hombres y mujeres?",
    respuesta: "Sí. EXPANDE es una experiencia mixta, creada para personas que quieren transformar su mundo interno y expandir sus resultados en áreas como relaciones, dinero, propósito y bienestar."
  },
  {
    pregunta: "¿Necesito haber hecho antes terapia, procesos de sanación o desarrollo personal?",
    respuesta: "No. Puedes llegar tanto si este es tu primer acercamiento como si llevas años trabajando en ti. La experiencia está diseñada para que puedas vivirla desde el punto en el que te encuentras hoy."
  },
  {
    pregunta: "¿EXPANDE es una conferencia o un evento donde solo voy a escuchar?",
    respuesta: "No. EXPANDE es una experiencia vivencial. Habrá formación, pero también momentos de reflexión, ejercicios y dinámicas que te permitirán llevar lo aprendido a tu propia vida. Aquí no vienes solamente a tomar notas; vienes a vivir la experiencia."
  },
  {
    pregunta: "¿EXPANDE es solamente espiritualidad y sanación?",
    respuesta: "No. Durante la mañana trabajaremos principalmente el mundo interno y durante la tarde llevaremos esa transformación hacia el mundo externo: relaciones, dinero, propósito, contexto, habilidades, estrategias y acción."
  },
  {
    pregunta: "¿Tengo que tener un negocio o ser emprendedor para asistir?",
    respuesta: "No. EXPANDE es para empleados, profesionales, independientes, emprendedores y empresarios. No importa desde dónde estés construyendo hoy; importa que quieras crecer y expandir diferentes áreas de tu vida."
  },
  {
    pregunta: "¿Qué pasa si voy solo/a?",
    respuesta: "Puedes hacerlo. De hecho, parte de EXPANDE es precisamente entrar en un contexto diferente y compartir el espacio con personas que también están comprometidas con su crecimiento. No necesitas conocer a nadie previamente."
  },
  {
    pregunta: "¿Qué debo llevar?",
    respuesta: "Ropa cómoda, disposición para participar y una mente abierta a vivir la experiencia. Sin embargo días antes te haremos llegar toda la información necesaria."
  },
  {
    pregunta: "¿Dónde y cuándo será EXPANDE?",
    respuesta: "EXPANDE será el 29 de noviembre de 2026 en el Hotel Sochagota, Paipa, Boyacá, en uno de los destinos turísticos más especiales de la región. Será una inmersión presencial completa de un día entero, diseñada para que salgas de tu rutina y de tu contexto habitual, y te permitas vivir profundamente cada etapa de la experiencia. Porque en EXPANDE, el lugar y el contexto también hacen parte de la transformación."
  },
  {
    pregunta: "¿Cómo sé si EXPANDE es para mí?",
    // Nota: Retiramos la frase final de aquí para ponerla como cierre estelar de la sección
    respuesta: "Si sabes que hay más disponible para ti y estás dispuesto a entregarte por completo a la experiencia, EXPANDE es para ti. Un solo día puede acelerar comprensiones y decisiones que podrían tomarte años, siempre que estés dispuesto a aplicar lo aprendido."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 px-4 bg-[#050505] text-white font-sans -mt-15">
      <div className="max-w-3xl mx-auto">
        
        {/* ENCABEZADO */}
        <FadeInSection>
          <div className="mb-12 text-left -mt-15">
            <span className="text-[#e6b981] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              Preguntas Frecuentes
            </span>
            <h2 className="font-['Oswald',sans-serif] text-4xl md:text-5xl font-bold uppercase mt-3 tracking-tight text-white">
              Resuelve tus dudas
            </h2>
          </div>
        </FadeInSection>

        {/* LISTA DE ACORDEONES */}
        <div className="border-t border-gray-800/80">
          {faqs.map((faq, index) => (
            <FadeInSection delay={0.1 * index} key={index}>
              <FAQItem pregunta={faq.pregunta} respuesta={faq.respuesta} />
            </FadeInSection>
          ))}
        </div>

        {/* =========================================
            FRASE DE CIERRE (NUEVA)
            ========================================= */}
        <FadeInSection delay={0.4}>
          <div className="mt-16 text-center border-t border-gray-800/50 pt-10">
            <p className="text-xl md:text-2xl font-light text-gray-300">
              "Tu transformación será <strong className="text-[#e6b981] font-medium">proporcional a tu nivel de entrega.</strong>"
            </p>
          </div>
        </FadeInSection>

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
    <div className="border-b border-gray-800/80">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-base md:text-lg font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
          {pregunta}
        </span>
        
        {/* Ícono animado que gira de + a x */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-[#e6b981] text-2xl font-light shrink-0"
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