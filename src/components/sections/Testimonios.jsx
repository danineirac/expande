import { useState } from "react";
import FadeInSection from "../ui/FadeInSection";

const testimoniosData = [
  {
    id: "1",
    youtubeId: "muJHc6cwUik", 
    portada: "/images/test-2.jpeg", 
    descripcion: "Asistente Mujer Origen 2026"
  },
  {
    id: "2",
    youtubeId: "MU-wp4EXxXQ", 
    portada: "/images/test-1.jpeg",
    descripcion: "Asistente Mujer Origen 2026"
  },
  {
    id: "3",
    youtubeId: "erTAYvLkHbY", 
    portada: "/images/test-3.jpeg",
    descripcion: "Asistente Mujer Origen 2026"
  },
  {
    id: "4",
    youtubeId: "3GmnswFO19I", 
    portada: "/images/test-4.jpeg",
    descripcion: "Asistente Cumbre 2025"
  }
];

export default function Testimonios() {
  return (
    <section className="py-24 px-4 bg-[#050505] text-white font-sans border-t border-gray-900/50 relative overflow-hidden -mt-15">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-[#e6b981] opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <FadeInSection>
          <div className="mb-12 text-center -mt-15">
            <span className="text-[#e6b981] font-bold tracking-[0.2em] uppercase text-xs md:text-sm block mb-4">
              Voces de Expansión
            </span>
            <h2 className="font-['Oswald',sans-serif] text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Historias reales, transformaciones reales
            </h2>
          </div>
        </FadeInSection>

        {/* CARRUSEL MÓVIL / GRID DE ESCRITORIO */}
        {/* Cambiamos gap-6 a gap-4 en móvil para que estén más juntitos */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:pb-0 md:overflow-visible scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
          {testimoniosData.map((testimonio, index) => (
            // Cambiamos min-w-[85vw] a min-w-[65vw] para que los videos sean más angostos en celular
            <div key={testimonio.id} className="min-w-[65vw] sm:min-w-[45vw] snap-center shrink-0 md:min-w-0 md:w-auto md:shrink">
              <FadeInSection delay={0.1 * index}>
                <VideoCard testimonio={testimonio} />
              </FadeInSection>
            </div>
          ))}
        </div>

        {/* =========================================
            SECCIÓN PANTALLAZOS WHATSAPP
            ========================================= */}
        <FadeInSection delay={0.4}>
          <div className="mt-10 border-t border-gray-800/60 pt-16">
            
            <div className="text-center mb-12">
              <h3 className="font-['Oswald',sans-serif] text-2xl md:text-3xl font-bold uppercase tracking-tight text-white -mt-10">
                Impacto <span className="text-[#e6b981]">Real</span>
              </h3>
              <p className="text-gray-500 text-xs md:text-sm mt-3 font-light tracking-wide uppercase">
                Mensajes de quienes ya vivieron la experiencia
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto px-4">
              
              {/* Pantallazo 1 */}
              <div className="w-full max-w-[320px] rounded-2xl overflow-hidden border border-gray-700 hover:border-[#e6b981]/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(230,185,129,0.15)] hover:-translate-y-2 transition-all duration-500 bg-[#0a0a0a]">
                <img 
                  src="images/test-wa-1.webp" 
                  alt="Testimonio escrito 1" 
                  className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300 mix-blend-lighten" 
                />
              </div>

              {/* Pantallazo 2 (Ligeramente desfasado hacia abajo en PC para un look más moderno) */}
              <div className="w-full max-w-[320px] rounded-2xl overflow-hidden border border-gray-700 hover:border-[#e6b981]/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(230,185,129,0.15)] hover:-translate-y-2 transition-all duration-500 bg-[#0a0a0a] md:mt-16">
                <img 
                  src="images/test-wa-2.webp" 
                  alt="Testimonio escrito 2" 
                  className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300 mix-blend-lighten" 
                />
              </div>

            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

const VideoCard = ({ testimonio }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col group h-full">
      <div className="relative w-full aspect-9/16 bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-800 shadow-lg mb-4">
        
        {!isPlaying ? (
          <div 
            className="absolute inset-0 w-full h-full cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <img 
              src={testimonio.portada} 
              alt={`Testimonio ${testimonio.nombre || 'EXPANDE'}`} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 bg-gray-900"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://images.unsplash.com/photo-1540039155732-680874b8344e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"; 
              }}
            />
            
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#050505]/70 backdrop-blur-sm border border-[#e6b981]/50 rounded-full flex items-center justify-center text-[#e6b981] group-hover:scale-110 group-hover:bg-[#e6b981] group-hover:text-[#050505] transition-all duration-300 shadow-xl">
                <svg className="w-5 h-5 md:w-6 md:h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4l12 6-12 6z" />
                </svg>
              </div>
            </div>
            
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#050505] to-transparent opacity-90"></div>
          </div>
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${testimonio.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={`Testimonio ${testimonio.nombre || 'EXPANDE'}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className="px-2 mt-auto">
        {testimonio.nombre && (
          <h4 className="font-['Oswald',sans-serif] text-lg md:text-xl font-bold uppercase tracking-tight text-white mb-1">
            {testimonio.nombre}
          </h4>
        )}
        <p className="text-[#e6b981] text-[10px] md:text-xs uppercase tracking-widest font-medium">
          {testimonio.descripcion}
        </p>
      </div>
    </div>
  );
};