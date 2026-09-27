import FadeInSection from "../ui/FadeInSection";

export default function Hero() {
  return (
    <section className="bg-[#050505] text-white pt-4 pb-16 min-h-screen flex flex-col items-center font-sans">
      
      <FadeInSection>
        <div className="max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
          
          {/* TOP TEXT */}
          <div className="bg-[linear-gradient(92deg,#F8CE5A,#F08000,#E0400A)] bg-clip-text text-transparent text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-1">
            La Cumbre vuelve · Medellín · 31 de octubre y 1 de noviembre
          </div>

          {/* HEADLINE */}
          <h1 className="font-['Oswald',_sans-serif] text-[40px] md:text-6xl lg:text-[60px] font-bold uppercase leading-[1.12] tracking-tight mb-1 max-w-4xl mx-auto">
            Tu 3x1 a los 2 días que valen <br />
            <span className="bg-[linear-gradient(92deg,#F8CE5A,#F08000,#E0400A)] bg-clip-text text-transparent">
              10 años
            </span> está por cerrarse.
          </h1>
          
          {/* SUBTITLE */}
          <p className="text-[#b6aea6] text-sm md:text-base mb-6 mt-0 max-w-2xl mx-auto font-light">
            Pagas 1, entran 3. Asegura los tres lugares antes de que la preventa suba a precio full.
          </p>
          
          {/* BADGE 3X1 */}
          <div className="inline-flex items-center gap-2 bg-[#121212] border border-gray-800 rounded-full px-4 py-1.5 text-xs md:text-sm mb-3 shadow-sm">
            <span className="bg-[linear-gradient(92deg,#F08000,#F8CE5A,#E0400A)] bg-clip-text text-transparent font-bold">3X1</span> 
            <span className="text-gray-500">·</span>
            <span className="text-gray-300">pagas 1 entrada y <b>entran 3 personas</b></span>
          </div>

          {/* PLAY INSTRUCTIONS */}
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-300 mb-6 max-w-lg mx-auto text-center leading-snug">
            {/* Ícono SVG en lugar de emoji para evitar problemas de renderizado */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#f04e23] mt-0.5">
              <path d="M5 3l14 9-18 9V3z" />
            </svg>
            <p>
              Súbele el volumen. Ya sabes de qué va esto —déjame mostrarte por qué este año es distinto.
            </p>
          </div>

          {/* VIDEO PLAYER REPLICA */}
          {/* Usamos una imagen de Unsplash temporal de fondo y le ponemos un overlay rojizo */}
          <div 
            className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden bg-cover bg-center border border-gray-800 shadow-2xl flex flex-col items-center justify-center text-white"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}
          >
            {/* Capa roja superpuesta simulando el diseño original */}
            <div className="absolute inset-0 bg-[#8c2a2a]/85 backdrop-blur-[1px]"></div>
            
            {/* Contenido del reproductor sobre el video */}
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-2xl md:text-[32px] font-bold mb-10">
                Ya comenzaste a ver este video
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-14">
                {/* Botón Seguir viendo */}
                <button className="flex items-center gap-3 text-lg font-medium hover:text-gray-300 transition-colors group">
                  <div className="w-12 h-12 rounded-full border-[1.5px] border-white flex items-center justify-center group-hover:border-gray-300 transition-colors">
                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
                  </div>
                  Seguir viendo
                </button>

                {/* Botón Volver a empezar */}
                <button className="flex items-center gap-3 text-lg font-medium hover:text-gray-300 transition-colors group">
                  <div className="w-12 h-12 rounded-full border-[1.5px] border-white flex items-center justify-center group-hover:border-gray-300 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                  </div>
                  Volver a empezar
                </button>
              </div>
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="mt-12 flex flex-col items-center">
            <a 
              href="#entradas" 
              className="bg-gradient-to-r from-[#d96a11] to-[#f29124] hover:from-[#f29124] hover:to-[#d96a11] text-[#050505] font-extrabold uppercase tracking-wide px-8 md:px-14 py-4 md:py-5 rounded-full text-base md:text-lg transition-all duration-300 shadow-[0_0_40px_rgba(235,122,1,0.3)] hover:shadow-[0_0_60px_rgba(235,122,1,0.5)] hover:-translate-y-1 transform"
            >
              Quiero mi entrada a la cumbre →
            </a>
            
            {/* TEXTO INFERIOR */}
            <p className="text-gray-200 text-[11px] md:text-sm mt-4 text-center max-w-lg font-light leading-relaxed">
              Pago seguro · plazas limitadas · el precio de preventa sube pronto. Elige tu <br className="hidden md:block" />
              entrada aquí abajo.
            </p>
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}