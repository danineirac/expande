import FadeInSection from "../ui/FadeInSection";

export default function Experiencia() {
  const mananaList = [
    "Reconoce las heridas y patrones que siguen influyendo en tu vida.",
    "Eleva tu nivel de conciencia y transforma la forma en la que percibes tu realidad.",
    "Cuestiona las creencias que hoy limitan lo que crees posible para ti.",
    "Redefine tu identidad y empieza a construir desde la persona que eliges ser.",
    "Fortalece tu valor y empieza a construir verdadera seguridad interna.",
    "Deja de decidir desde el miedo y aprende a elegir desde la certeza y la claridad.",
    "Suelta el personaje y las versiones de ti que ya no corresponden con la vida que quieres construir."
  ];

  const tardeList = [
    "Descubre el poder del contexto y rodéate de personas que eleven tu visión.",
    "Eleva la forma en la que eliges, construyes y sostienes tus relaciones.",
    "Expande tu capacidad económica desde principios de riqueza y conciencia.",
    "Reconoce tus dones y talentos y ponlos al servicio de un propósito mayor.",
    "Desarrolla habilidades y estrategias que te permitan crear resultados diferentes.",
    "Convierte una nueva forma de pensar y elegir en acciones que transformen tus resultados."
  ];

  const dia2List = [
    "Mayor cercanía con Danna Neira en un espacio íntimo y exclusivo.",
    "Encuentro privado para profundizar e integrar lo vivido durante EXPANDE.",
    "Conversaciones de expansión sobre identidad, relaciones, dinero y propósito.",
    "Claridad y dirección para llevar lo vivido a decisiones y acciones concretas.",
    "Networking consciente con personas comprometidas con su crecimiento y expansión."
  ];

  return (
    <section className="bg-[#050505] py-24 px-4 font-sans relative">
      <div className="max-w-6xl mx-auto">
        
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-[#e6b981] font-bold tracking-[0.2em] uppercase text-xs md:text-sm block mb-4">
              Eleva tu conciencia, transforma tu realidad
            </span>
            <h2 className="font-['Oswald',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
              Cronograma de la Experiencia
            </h2>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
          
          {/* ================= MAÑANA ================= */}
          <FadeInSection delay={0.1}>
            <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-8 md:p-10 h-full flex flex-col hover:border-[#e6b981]/30 transition-all">
              <div className="mb-8 border-b border-gray-800/80 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-gray-800 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm font-bold">Día 1</span>
                  <span className="text-[#e6b981] text-xs font-bold uppercase tracking-widest">Mañana</span>
                </div>
                <h3 className="font-['Oswald',sans-serif] text-3xl font-bold text-white uppercase tracking-tight mt-3 mb-2">
                  Reordena tu mundo interno
                </h3>
                <p className="text-gray-400 text-sm font-light">
                  Reconoce, libera y haz espacio para la vida que quieres construir.
                </p>
              </div>

              <ul className="space-y-4 grow mb-8">
                {mananaList.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </ul>

              {/* GALERÍA MAÑANA (3 Fotos) */}
              <div className="mt-auto pt-6 border-t border-gray-800/50 grid grid-cols-2 gap-3">
                <div className="col-span-2 aspect-21/9 rounded-lg overflow-hidden border border-gray-800/50 group/img bg-gray-900">
                  <img src="/images/manana-11.JPG" alt="Jornada Mañana" className="w-full h-full object-cover grayscale-30 opacity-80 group-hover/img:grayscale-0 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-500" />
                </div>
                <div className="aspect-video rounded-lg overflow-hidden border border-gray-800/50 group/img bg-gray-900">
                  <img src="/images/manana-2.webp" alt="Jornada Mañana" className="w-full h-full object-cover grayscale-30 opacity-80 group-hover/img:grayscale-0 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-500" />
                </div>
                <div className="aspect-video rounded-lg overflow-hidden border border-gray-800/50 group/img bg-gray-900">
                  <img src="/images/manana-3.webp" alt="Jornada Mañana" className="w-full h-full object-cover grayscale-30 opacity-80 group-hover/img:grayscale-0 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-500" />
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* ================= TARDE ================= */}
          <FadeInSection delay={0.2}>
            <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-8 md:p-10 h-full flex flex-col hover:border-[#e6b981]/30 transition-all">
              <div className="mb-8 border-b border-gray-800/80 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-gray-800 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm font-bold">Día 1</span>
                  <span className="text-[#e6b981] text-xs font-bold uppercase tracking-widest">Tarde</span>
                </div>
                <h3 className="font-['Oswald',sans-serif] text-3xl font-bold text-white uppercase tracking-tight mt-3 mb-2">
                  Expande tu mundo externo
                </h3>
                <p className="text-gray-400 text-sm font-light">
                  Convierte una nueva forma de verte, elegir y actuar en resultados diferentes.
                </p>
              </div>

              <ul className="space-y-4 grow mb-8">
                {tardeList.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </ul>

              {/* GALERÍA TARDE (2 Fotos) */}
              <div className="mt-auto pt-6 border-t border-gray-800/50 grid grid-cols-2 gap-3">
                <div className="aspect-square md:aspect-4/5 rounded-lg overflow-hidden border border-gray-800/50 group/img bg-gray-900">
                  <img src="/images/tarde-1.webp" alt="Jornada Tarde" className="w-full h-full object-cover grayscale-30 opacity-80 group-hover/img:grayscale-0 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-500" />
                </div>
                <div className="aspect-square md:aspect-4/5 rounded-lg overflow-hidden border border-gray-800/50 group/img bg-gray-900">
                  <img src="/images/tarde-2.jpg" alt="Jornada Tarde" className="w-full h-full object-cover grayscale-30 opacity-80 group-hover/img:grayscale-0 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-500" />
                </div>
              </div>
            </div>
          </FadeInSection>

        </div>

        <FadeInSection delay={0.3}>
          <div className="max-w-3xl mx-auto text-center py-8 mb-12 border-y border-gray-800/50">
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
              No puedes construir una vida nueva mientras sigues cargando todo aquello que pertenece a la anterior. <strong className="text-white font-normal">Primero haces espacio. Después, EXPANDES.</strong>
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <div className="max-w-4xl mx-auto bg-linear-to-br from-[#110e0a] to-[#050505] border border-[#e6b981]/40 rounded-xl p-8 md:p-12 mb-20 shadow-[0_0_40px_rgba(230,185,129,0.05)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#e6b981]/20 via-[#e6b981] to-[#e6b981]/20"></div>
            <div className="text-center mb-10">
              <span className="bg-[#e6b981]/10 text-[#e6b981] text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full font-bold mb-4 inline-block border border-[#e6b981]/30">
                Día 2 · Lunes
              </span>
              <h3 className="font-['Oswald',sans-serif] text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mt-2">
                Experiencia Privada
              </h3>
              <p className="text-[#e6b981] text-xs md:text-sm uppercase tracking-[0.2em] mt-3 font-semibold">
                Para Entradas Platino e Inner Circle
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-4">
                {dia2List.map((item, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <span className="text-[#e6b981] shrink-0 mt-0.5">✦</span>
                    <span className="text-gray-300 text-sm font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.5}>
          <div className="text-center max-w-4xl mx-auto">
            <h4 className="font-['Oswald',sans-serif] text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter leading-[1.1] mb-6">
              Detrás de aquello que llevas <br className="hidden md:block"/> tiempo evitando <br className="hidden md:block"/> 
              <span className="text-[#e6b981]">puede estar el siguiente nivel <br className="hidden md:block"/> que llevas tiempo buscando.</span>
            </h4>
            <p className="text-gray-500 text-xs md:text-sm font-light max-w-2xl mx-auto leading-relaxed">
              EXPANDE fue creado para ayudarte a mirar aquello que hoy no estás viendo, hacer espacio y empezar a construir desde una versión diferente de ti.
            </p>
          </div>
        </FadeInSection>

      </div>
    </section>
  );
}

const ListItem = ({ children }) => (
  <li className="flex gap-4 items-start group">
    <svg className="w-5 h-5 text-[#e6b981]/70 shrink-0 mt-0.5 group-hover:text-[#e6b981] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span className="text-gray-300 text-xs md:text-sm font-light leading-relaxed">
      {children}
    </span>
  </li>
);