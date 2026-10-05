import FadeInSection from "../ui/FadeInSection";

export default function CierreCTA() {
  return (
    <section className="relative py-32 px-4 bg-[#050505] text-white font-sans border-t border-gray-900/50 overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
      
      {/* =========================================
          EFECTO DE ILUMINACIÓN DE FONDO (GRADIENTE)
          ========================================= */}
      {/* Resplandor cálido central que cae desde arriba, ajustado al dorado de EXPANDE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-[#e6b981] opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        <FadeInSection>
          {/* TÍTULO PRINCIPAL */}
          <h2 className="font-['Oswald',sans-serif] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.1] mb-10 max-w-4xl mx-auto text-white drop-shadow-md">
            Un día puede cambiar la dirección <br className="hidden md:block" />
            de los próximos años de tu vida.
          </h2>

          {/* PÁRRAFOS PERSUASIVOS */}
          <div className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-12 max-w-3xl mx-auto space-y-5">
            <p>
              <strong className="text-white font-normal">EXPANDE</strong> es una inmersión presencial de un día completo diseñada para que salgas de tu contexto habitual, reordenes tu mundo interno y hagas espacio para construir resultados diferentes afuera.
            </p>
            <p className="text-gray-300 text-lg md:text-xl font-medium italic">
              No se trata de cuánto puede cambiar tu vida en un día.<br />
              Se trata de cuánto puede cambiar la dirección de tu vida a partir de un día.
            </p>
            <p className="text-[#e6b981]">
              Los cupos son limitados y el valor de las entradas aumentará a medida que avancemos de etapa.
            </p>
          </div>

          {/* BOTÓN DE LLAMADO A LA ACCIÓN */}
          <a 
            href="#entradas" 
            className="inline-block bg-[#e6b981] hover:bg-white text-[#050505] font-extrabold uppercase tracking-[0.15em] px-10 md:px-14 py-4 md:py-5 rounded-md text-xs md:text-sm transition-all duration-300 shadow-[0_0_30px_rgba(230,185,129,0.15)] hover:shadow-[0_0_50px_rgba(230,185,129,0.3)] hover:-translate-y-1 transform"
          >
            Asegurar mi entrada →
          </a>
          
          {/* TEXTO DE GARANTÍA / CIERRE */}
          <p className="text-gray-500 text-[11px] md:text-xs mt-8 font-light max-w-lg mx-auto leading-relaxed">
            <strong className="text-gray-400">Pago seguro.</strong> Tu siguiente nivel no empieza cuando desaparece el miedo. <br className="hidden md:block" />
            Empieza cuando decides avanzar a pesar de él.
          </p>
        </FadeInSection>

      </div>
    </section>
  );
}