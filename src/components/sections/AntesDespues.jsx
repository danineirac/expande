import FadeInSection from "../ui/FadeInSection";

export default function AntesDespues() {
  // Datos extraídos exactamente del PDF del cliente
  const antesList = [
    "Sabes que puedes más, pero te frenas.",
    "Decides desde el miedo.",
    "Te cuestionas y te comparas.",
    "Aceptas menos de lo que realmente quieres.",
    "Sientes que debes esforzarte de más para merecer.",
    "Te cuesta poner límites y elegirte.",
    "Quieres ganar más, pero no sabes cómo expandir tu capacidad económica.",
    "Intentas controlarlo todo y te cuesta confiar.",
    "Vives desconectado de Dios."
  ];

  const despuesList = [
    "Confianza y seguridad interna.",
    "Sales con claridad y certeza.",
    "Reconoces tu valor y elevas tus estándares.",
    "Te permites recibir y construir más.",
    "Pones límites y te eliges sin culpa.",
    "Desarrollas habilidades para expandir tu capacidad económica.",
    "Eliges rodearte relaciones y contextos que te expanden.",
    "Haces tu parte y aprendes a confiar en Dios con lo que no controlas."
  ];

  return (
    <section className="bg-[#050505] py-24 px-4 font-sans relative -mt-15">
      <div className="max-w-6xl mx-auto -mt-15">
        
        {/* =========================================
            ENCABEZADO Y TEXTO INTRODUCTORIO
            ========================================= */}
        <FadeInSection>
          <div className="text-center max-w-4xl mx-auto mb-16 ">
            <h2 className="font-['Oswald',sans-serif] text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-6">
              Antes y Después
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              <strong className="text-white font-normal">ANTES DE EXPANDE</strong> puedes saber que eres capaz de más y aun así seguir eligiendo desde el miedo. <strong className="text-[#e6b981] font-normal">DESPUÉS DE EXPANDE</strong> empiezas a construir desde una versión de ti que reconoce su valor, eleva sus estándares y se atreve a ir por más.
            </p>
          </div>
        </FadeInSection>

        {/* =========================================
            TARJETAS DE CONTRASTE (Grid)
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          
          {/* TARJETA 1: ANTES (Oscura y tenue) */}
          <FadeInSection delay={0.1}>
            <div className="bg-[#0a0a0a] border border-gray-800/60 rounded-xl p-8 md:p-12 h-full flex flex-col hover:border-gray-700 transition-colors">
              <div className="mb-10">
                <p className="text-gray-600 text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-3">
                  ANTES · DE VIVIR EXPANDE
                </p>
                <h3 className="font-['Oswald',sans-serif] text-3xl md:text-4xl font-bold text-gray-200 uppercase tracking-tight">
                  Vivir desde la repetición
                </h3>
              </div>

              <ul className="flex flex-col grow">
                {antesList.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-4 py-4 border-b border-gray-800/50 last:border-0 text-gray-400 text-xs md:text-sm font-light"
                  >
                    <span className="text-gray-600 text-[10px] shrink-0">■</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>

          {/* TARJETA 2: DESPUÉS (Iluminada y resaltada) */}
          <FadeInSection delay={0.2}>
            <div className="bg-[#0a0a0a] border border-[#e6b981]/30 rounded-xl p-8 md:p-12 h-full flex flex-col shadow-[0_0_40px_rgba(230,185,129,0.05)] hover:shadow-[0_0_50px_rgba(230,185,129,0.1)] transition-all">
              <div className="mb-10">
                <p className="text-[#e6b981]/70 text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-3">
                  DESPUÉS · DE VIVIR EXPANDE
                </p>
                <h3 className="font-['Oswald',sans-serif] text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                  Crear desde la elección
                </h3>
              </div>

              <ul className="flex flex-col grow">
                {despuesList.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-4 py-4 border-b border-gray-800/50 last:border-0 text-gray-200 text-xs md:text-sm font-light"
                  >
                    <svg className="w-4 h-4 text-[#e6b981] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
}