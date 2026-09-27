import FadeInSection from "../ui/FadeInSection";

export default function Experiencia() {
  return (
    <section className="py-10 px-4 bg-[#050505] text-white font-sans border-t border-gray-900 relative overflow-hidden">
      
      {/* Brillo sutil de fondo para darle ambiente */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f04e23] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* ENCABEZADO Y TEXTO INTRODUCTORIO */}
        <FadeInSection>
          <div className="max-w-3xl mb-10">
            <span className="text-[#f5a623] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              La experiencia
            </span>
            <h2 className="font-['Oswald',_sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold uppercase mt-4 tracking-tight leading-[1.1] mb-6">
              No se parece a nada que hayas visto antes
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
              Probablemente ya viste —o asististe a— decenas de eventos de desarrollo personal. 
              Aquí no vienes a escuchar. Vienes a transformarte, en vivo, en el cuerpo, en tiempo 
              real, con la sala llena de gente que va hacia donde tú vas.
            </p>
          </div>
        </FadeInSection>

        {/* TARJETAS DE LOS DÍAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          
          {/* ================= TARJETA DÍA 1 ================= */}
          <FadeInSection delay={0.1}>
            <div className="bg-gradient-to-br from-[#121212] to-[#080808] border border-gray-800 rounded-3xl p-8 md:p-10 hover:border-[#f04e23]/40 transition-all duration-500 h-full flex flex-col shadow-lg hover:shadow-[0_0_40px_rgba(240,78,35,0.08)] group">
              
              <div className="mb-3 pb-2 border-b border-gray-800/80">
                <h3 className="font-['Oswald',_sans-serif] text-4xl font-bold bg-gradient-to-r from-[#f5a623] to-[#e04e0b] bg-clip-text text-transparent mb-2">
                  DÍA 1
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-light">
                  Reordenar tu mundo interno y tu entorno
                </p>
              </div>

              <ul className="space-y-3 flex-grow">
                <ListItem>
                  <b>Tu identidad:</b> dejar de sentirte "el raro" y entender para qué naciste.
                </ListItem>
                <ListItem>
                  <b>Tu relación con el dinero</b> y la culpa que cargas sin darte cuenta.
                </ListItem>
                <ListItem>
                  <b>Tu linaje</b> y las creencias heredadas que te frenan.
                </ListItem>
                <ListItem>
                  <b>La gente que tienes cerca:</b> por qué tu entorno decide más que tu esfuerzo.
                </ListItem>
              </ul>
              
            </div>
          </FadeInSection>

          {/* ================= TARJETA DÍA 2 ================= */}
          <FadeInSection delay={0.2}>
            <div className="bg-gradient-to-br from-[#121212] to-[#080808] border border-gray-800 rounded-3xl p-8 md:p-10 hover:border-[#f04e23]/40 transition-all duration-500 h-full flex flex-col shadow-lg hover:shadow-[0_0_40px_rgba(240,78,35,0.08)] group">
              
              <div className="mb-3 pb-2 border-b border-gray-800/80">
                <h3 className="font-['Oswald',_sans-serif] text-4xl font-bold bg-gradient-to-r from-[#f5a623] to-[#e04e0b] bg-clip-text text-transparent mb-2">
                  DÍA 2
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-light">
                  Convertir ese contexto en resultados · <span className="text-gray-300 font-medium">5 habilidades</span>
                </p>
              </div>

              {/* Botones / Badges de Habilidades */}
              <div className="flex flex-wrap gap-3 mt-2">
                <SkillBadge>Ventas</SkillBadge>
                <SkillBadge>Marketing e inteligencia artificial</SkillBadge>
                <SkillBadge>Marca personal</SkillBadge>
                <SkillBadge>Liderazgo</SkillBadge>
                <SkillBadge>Oratoria</SkillBadge>
              </div>

              {/* Elemento decorativo visual para el Día 2 */}
              <div className="mt-auto pt-10 flex justify-end">
                <div className="w-16 h-16 rounded-full border border-gray-800 flex items-center justify-center text-gray-700 group-hover:border-[#f04e23]/30 group-hover:text-[#f04e23]/50 transition-colors">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              
            </div>
          </FadeInSection>

        </div>

        {/* TEXTO DE CIERRE */}
        <FadeInSection delay={0.3}>
          <p className="max-w-3xl mt-14 text-gray-400 text-base md:text-lg font-light leading-relaxed border-l-2 border-[#f04e23]/50 pl-6">
            Sales con herramientas en la mano, no con frases bonitas. <b className="text-white font-normal">Tu mente, tus relaciones y tu negocio, reordenados en el mismo lugar y al mismo tiempo.</b>
          </p>
        </FadeInSection>

      </div>
    </section>
  );
}

/* =========================================
   COMPONENTES HIJOS (Para mantener el código limpio)
   ========================================= */

// Componente para los items de la lista del Día 1
const ListItem = ({ children }) => (
  <li className="flex gap-4 items-start group/item">
    <svg className="w-5 h-5 text-[#f04e23] flex-shrink-0 mt-0.5 opacity-80 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span className="text-gray-300 text-sm md:text-[15px] leading-relaxed">
      {children}
    </span>
  </li>
);

// Componente para las habilidades del Día 2
const SkillBadge = ({ children }) => (
  <div className="px-5 py-2.5 bg-[#1a1a1a] border border-gray-700 rounded-full text-sm font-medium text-gray-300 hover:bg-gradient-to-r hover:from-[#f04e23] hover:to-[#f5a623] hover:text-black hover:border-transparent cursor-default transition-all duration-300 hover:shadow-[0_0_15px_rgba(240,78,35,0.4)] transform hover:-translate-y-0.5">
    {children}
  </div>
);