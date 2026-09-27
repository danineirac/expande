import FadeInSection from "../ui/FadeInSection";

export default function Prueba() {
  return (
    <section className="py-10 px-4 bg-[#050505] text-white font-sans border-t border-gray-900 relative">
      
      <div className="max-w-5xl mx-auto">
        
        {/* ENCABEZADO */}
        <FadeInSection>
          <div className="mb-10 text-center md:text-left">
            <span className="text-[#f5a623] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              Prueba
            </span>
            <h2 className="font-['Oswald',_sans-serif] text-4xl md:text-5xl font-bold uppercase mt-3 tracking-tight">
              Lo que pasa cuando la sala se llena
            </h2>
          </div>
        </FadeInSection>

        {/* TARJETAS DE ESTADÍSTICAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
          
          <FadeInSection delay={0.1}>
            <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full hover:border-gray-700 transition-colors shadow-lg">
              <h3 className="font-['Oswald',_sans-serif] text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#f5a623] to-[#e04e0b] bg-clip-text text-transparent mb-3">
                +20.000
              </h3>
              <p className="text-gray-400 text-xs md:text-sm font-light max-w-sm">
                personas se han sumado a la Cumbre en los últimos dos años
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full hover:border-gray-700 transition-colors shadow-lg">
              <h3 className="font-['Oswald',_sans-serif] text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#f5a623] to-[#e04e0b] bg-clip-text text-transparent mb-3">
                11
              </h3>
              <p className="text-gray-400 text-xs md:text-sm font-light max-w-sm">
                países en 2025 · 9 de 11 ciudades llenaron o superaron el aforo en un solo fin de semana
              </p>
            </div>
          </FadeInSection>

        </div>

        {/* GRID DE VIDEOS TESTIMONIALES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* VIDEO 1 */}
          <FadeInSection delay={0.3}>
            <VideoCard 
              etiqueta="Colombia · 2025" 
              imagen="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              colorProgress="bg-green-500"
            />
          </FadeInSection>

          {/* VIDEO 2 */}
          <FadeInSection delay={0.4}>
            <VideoCard 
              etiqueta="Colombia · 2025" 
              imagen="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              colorProgress="bg-blue-500"
            />
          </FadeInSection>

          {/* VIDEO 3 */}
          <FadeInSection delay={0.5}>
            <VideoCard 
              etiqueta="Panamá · 2025" 
              imagen="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              colorProgress="bg-[#f5a623]"
            />
          </FadeInSection>

          {/* VIDEO 4 */}
          <FadeInSection delay={0.6}>
            <VideoCard 
              etiqueta="España · 2025" 
              imagen="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              colorProgress="bg-purple-500"
            />
          </FadeInSection>

        </div>

      </div>
    </section>
  );
}

/* =========================================
   COMPONENTE REUTILIZABLE: TARJETA DE VIDEO
   ========================================= */
const VideoCard = ({ etiqueta, imagen, colorProgress }) => (
  <div className="relative w-full aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 group cursor-pointer hover:border-[#f04e23]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(240,78,35,0.15)]">
    
    {/* Imagen de fondo */}
    <img 
      src={imagen} 
      alt="Testimonio Cumbre" 
      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" 
    />
    
    {/* Gradiente oscuro inferior para que destaquen las barras */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

    {/* Etiqueta superior */}
    <div className="absolute top-3 left-3 bg-[#f5a623] text-black text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md z-10">
      {etiqueta}
    </div>

    {/* Botón Play central con efecto Glassmorphism */}
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#f04e23] group-hover:border-[#f04e23] group-hover:scale-110 transition-all duration-300">
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4l12 6-12 6z" />
        </svg>
      </div>
    </div>

    {/* Barra de progreso inferior simulada */}
    <div className="absolute bottom-3 left-0 w-full px-3 flex gap-1 z-10">
      <div className={`h-1 flex-1 rounded-full ${colorProgress}`}></div>
      <div className="h-1 flex-1 rounded-full bg-white/30"></div>
    </div>

  </div>
);