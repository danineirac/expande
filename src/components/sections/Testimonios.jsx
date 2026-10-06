import { useState } from "react";
import FadeInSection from "../ui/FadeInSection";

// Aquí pondrás los IDs de los videos de YouTube y las rutas de las imágenes de portada
const testimoniosData = [
  {
    id: "1",
    youtubeId: "muJHc6cwUik", // Cambia esto por el ID real de YouTube
    portada: "/images/test-2.jpeg", // La foto que subas a public/images/
    descripcion: "Asistente Mujer Origen 2025"
  },
  {
    id: "2",
    youtubeId: "MU-wp4EXxXQ", 
    portada: "/images/test-1.jpeg",
    descripcion: "Asistente Mujer Origen 2025"
  },
  {
    id: "3",
    youtubeId: "erTAYvLkHbY", 
    portada: "/images/test-3.jpeg",
    descripcion: "Asistente Mujer Origen 2025"
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
    <section className="py-24 px-4 bg-[#050505] text-white font-sans border-t border-gray-900/50 relative overflow-hidden">
      
      {/* Brillo de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-[#e6b981] opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ENCABEZADO */}
        <FadeInSection>
          <div className="mb-16 text-center">
            <span className="text-[#e6b981] font-bold tracking-[0.2em] uppercase text-xs md:text-sm block mb-4">
              Voces de Expansión
            </span>
            <h2 className="font-['Oswald',sans-serif] text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Historias reales, transformaciones reales
            </h2>
          </div>
        </FadeInSection>

        {/* GRID DE VIDEOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimoniosData.map((testimonio, index) => (
            <FadeInSection delay={0.1 * index} key={testimonio.id}>
              <VideoCard testimonio={testimonio} />
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  );
}

/* =========================================
   COMPONENTE HIJO: TARJETA DE VIDEO INDIVIDUAL
   ========================================= */
const VideoCard = ({ testimonio }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col group">
      <div className="relative w-full aspect-9/16 bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-800 shadow-lg mb-4">
        
        {!isPlaying ? (
          <div 
            className="absolute inset-0 w-full h-full cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
            <img 
              src={testimonio.portada} 
              alt={`Testimonio ${testimonio.nombre}`} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 bg-gray-900"
              onError={(e) => {
                e.target.onerror = null; // <--- ESTO PREVIENE EL BUCLE INFINITO
                e.target.src = "https://images.unsplash.com/photo-1540039155732-680874b8344e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"; 
              }}
            />
            
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-16 h-16 bg-[#050505]/70 backdrop-blur-sm border border-[#e6b981]/50 rounded-full flex items-center justify-center text-[#e6b981] group-hover:scale-110 group-hover:bg-[#e6b981] group-hover:text-[#050505] transition-all duration-300 shadow-xl">
                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
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
            title={`Testimonio ${testimonio.nombre}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className="px-2">
        <h4 className="font-['Oswald',sans-serif] text-xl font-bold uppercase tracking-tight text-white mb-1">
          {testimonio.nombre}
        </h4>
        <p className="text-[#e6b981] text-xs uppercase tracking-widest font-medium">
          {testimonio.descripcion}
        </p>
      </div>
    </div>
  );
};
  
