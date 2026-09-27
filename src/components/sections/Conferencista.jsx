import FadeInSection from "../ui/FadeInSection";

export default function Conferencistas() {
  return (
    <section className="py-24 px-4 bg-[#050505] text-white font-sans border-t border-gray-900 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* ENCABEZADO */}
        <FadeInSection>
          <div className="mb-20 text-center md:text-left">
            <span className="text-[#f04e23] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              Quiénes te guían en la sala
            </span>
            <h2 className="font-['Oswald',_sans-serif] text-4xl md:text-5xl font-bold uppercase mt-3 tracking-tight">
              Quiénes están detrás de la cumbre
            </h2>
          </div>
        </FadeInSection>

        {/* ==========================================
            PERFIL 1: JAVI RODRÍGUEZ (Naranja/Fuego)
            ========================================== */}
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center mb-32 group">
          
          {/* Imagen de Javi */}
          <FadeInSection delay={0.1}>
            <div className="w-full max-w-[320px] md:max-w-none md:w-[380px] relative shrink-0">
              {/* Glow de fondo naranja */}
              <div className="absolute inset-0 bg-[#f04e23] blur-[80px] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
              
              {/* Contenedor de la foto */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-gray-800 group-hover:border-[#f04e23]/50 transition-all duration-500 shadow-2xl group-hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Javi Rodríguez" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
              </div>
            </div>
          </FadeInSection>

          {/* Textos de Javi */}
          <FadeInSection delay={0.2}>
            <div className="w-full">
              <h3 className="font-['Oswald',_sans-serif] text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                JAVI RODRÍGUEZ
              </h3>
              <p className="text-gray-500 text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-6">
                Formador Internacional · Empresario Visionario
              </p>
              
              <div className="text-gray-400 text-sm md:text-base font-light leading-relaxed space-y-4 mb-8">
                <p>
                  Si estás aquí, es porque algo de lo que comparto ya te resonó. Déjame decírtelo claro: lo que cambió mi vida no fue una técnica. Fue meterme, físicamente, en otro contexto —rodeado de gente que ya vivía donde yo quería llegar—.
                </p>
                <p>
                  Lo que me costaba años empezó a moverse en meses. No fue magia. Fue la tierra. La Cumbre existe para darte eso mismo en dos días. Y este año quiero que estés dentro.
                </p>
                <p className="text-[#f04e23] font-bold">— Javi</p>
              </div>

              {/* Estadísticas de Javi */}
              <div className="flex flex-wrap gap-8 pt-6 border-t border-gray-800/80">
                <StatItem numero="+30.000" texto="personas formadas" color="text-[#f04e23]" />
                <StatItem numero="15" texto="países" color="text-[#f04e23]" />
                <StatItem numero="+17" texto="eventos sold out" color="text-[#f04e23]" />
              </div>
            </div>
          </FadeInSection>

        </div>

        {/* ==========================================
            PERFIL 2: VALENTINA ORTIZ (Azul/Índigo)
            ========================================== */}
        <div className="flex flex-col md:flex-row-reverse gap-10 lg:gap-16 items-center group">
          
          {/* Imagen de Valentina */}
          <FadeInSection delay={0.1}>
            <div className="w-full max-w-[320px] md:max-w-none md:w-[380px] relative shrink-0">
              {/* Glow de fondo azul */}
              <div className="absolute inset-0 bg-[#6953ff] blur-[80px] opacity-15 rounded-full group-hover:opacity-30 transition-opacity duration-700"></div>
              
              {/* Contenedor de la foto */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-gray-800 group-hover:border-[#6953ff]/50 transition-all duration-500 shadow-2xl group-hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Valentina Ortiz" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
              </div>
            </div>
          </FadeInSection>

          {/* Textos de Valentina */}
          <FadeInSection delay={0.2}>
            <div className="w-full">
              <h3 className="font-['Oswald',_sans-serif] text-4xl md:text-5xl font-bold text-[#97a9eb] mb-2 tracking-tight">
                VALENTINA ORTIZ
              </h3>
              <p className="text-gray-500 text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-6">
                Formadora de mujeres · Empresaria
              </p>
              
              <div className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-8">
                <p>
                  Formadora internacional enfocada en el crecimiento y la expansión de las mujeres. Su trabajo hace que salgas operando distinta —no solo motivada—. Comparte escenario con Javi en la Cumbre.
                </p>
              </div>

              {/* Estadísticas de Valentina */}
              <div className="flex flex-wrap gap-8 pt-6 border-t border-gray-800/80">
                <StatItem numero="+8 AÑOS" texto="en formación" color="text-[#97a9eb]" />
                <StatItem numero="6" texto="países" color="text-[#97a9eb]" />
                <StatItem numero="100%" texto="enfoque en mujeres" color="text-[#97a9eb]" />
              </div>
            </div>
          </FadeInSection>

        </div>

      </div>
    </section>
  );
}

/* =========================================
   COMPONENTE REUTILIZABLE: STAT ITEM
   ========================================= */
const StatItem = ({ numero, texto, color }) => (
  <div>
    <p className={`font-['Oswald',_sans-serif] text-3xl font-bold mb-1 tracking-tight ${color} drop-shadow-md`}>
      {numero}
    </p>
    <p className="text-gray-500 text-[9px] uppercase tracking-widest max-w-[80px] leading-tight">
      {texto}
    </p>
  </div>
);