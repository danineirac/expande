import FadeInSection from "../ui/FadeInSection";

export default function Prueba() {
  return (
    <section className="py-24 px-4 bg-[#050505] text-white font-sans border-t border-gray-900/50 relative">
      
      {/* Brillo sutil de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-[#e6b981] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* ENCABEZADO */}
        <FadeInSection>
          <div className="mb-16 text-center">
            <span className="text-[#e6b981] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              Impacto y Transformación
            </span>
            <h2 className="font-['Oswald',sans-serif] text-4xl md:text-5xl font-bold uppercase mt-3 tracking-tight text-white">
              Lo que pasa cuando la sala se llena
            </h2>
          </div>
        </FadeInSection>

        {/* TARJETAS DE ESTADÍSTICAS (Las 2 solicitadas por el cliente) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
          
          {/* STAT 1: PERSONAS IMPACTADAS */}
          <FadeInSection delay={0.1}>
            <div className="bg-[#0a0a0a] border border-[#e6b981]/20 rounded-2xl p-12 md:p-16 flex flex-col items-center justify-center text-center h-full hover:border-[#e6b981]/50 transition-all duration-500 shadow-[0_0_40px_rgba(230,185,129,0.03)] hover:shadow-[0_0_50px_rgba(230,185,129,0.1)] group">
              <h3 className="font-['Oswald',sans-serif] text-6xl md:text-7xl font-bold text-[#e6b981] mb-6 drop-shadow-md group-hover:scale-105 transition-transform duration-500">
                +1.000
              </h3>
              <p className="text-gray-300 text-sm md:text-base font-medium uppercase tracking-[0.2em] max-w-50">
                Personas impactadas
              </p>
            </div>
          </FadeInSection>

          {/* STAT 2: ENCUENTROS PRESENCIALES */}
          <FadeInSection delay={0.2}>
            <div className="bg-[#0a0a0a] border border-[#e6b981]/20 rounded-2xl p-12 md:p-16 flex flex-col items-center justify-center text-center h-full hover:border-[#e6b981]/50 transition-all duration-500 shadow-[0_0_40px_rgba(230,185,129,0.03)] hover:shadow-[0_0_50px_rgba(230,185,129,0.1)] group">
              <h3 className="font-['Oswald',sans-serif] text-6xl md:text-7xl font-bold text-[#e6b981] mb-6 drop-shadow-md group-hover:scale-105 transition-transform duration-500">
                +30
              </h3>
              <p className="text-gray-300 text-sm md:text-base font-medium uppercase tracking-[0.2em] max-w-62.5">
                Encuentros presenciales
              </p>
            </div>
          </FadeInSection>

        </div>

      </div>
    </section>
  );
}