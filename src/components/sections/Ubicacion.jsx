import FadeInSection from "../ui/FadeInSection";

export default function Ubicacion() {
  return (
    <section className="py-24 px-4 bg-[#050505] text-white font-sans -mt-15">
      <div className="max-w-5xl mx-auto">
        
        {/* ENCABEZADO */}
        <FadeInSection>
          <div className="text-center mb-10">
            <span className="text-[#e6b981] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              Dónde nos vemos
            </span>
            <h2 className="font-['Oswald',sans-serif] text-3xl md:text-5xl font-bold uppercase mt-4 tracking-tight">
              Paipa, Boyacá
            </h2>
          </div>
        </FadeInSection>

        {/* TARJETA DE UBICACIÓN */}
        <FadeInSection delay={0.2}>
          <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-[#e6b981]/20 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(230,185,129,0.05)] hover:shadow-[0_0_50px_rgba(230,185,129,0.1)] transition-all">
            
            {/* IMAGEN DEL EVENTO */}
            <div className="w-full h-48 md:h-80 bg-gray-900 relative">
              {/* Sugerencia: Puedes cambiar esta foto por una del Hotel Sochagota o de Paipa */}
              <img 
                src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1170&auto=format&fit=crop" 
                alt="Paipa Boyacá" 
                className="w-full h-full object-cover opacity-60 grayscale-20"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] to-transparent"></div>
            </div>

            {/* CONTENIDO DE LA TARJETA */}
            <div className="p-8 md:p-12 relative -mt-8 md:-mt-12 z-10">
              
              {/* TÍTULO CIUDAD CON BANDERA */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#050505] border border-[#e6b981]/30 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                  <span className="text-2xl" title="Colombia">🇨🇴</span>
                </div>
                <h3 className="font-['Oswald',sans-serif] text-5xl md:text-6xl font-bold text-white tracking-tight">
                  Paipa
                </h3>
              </div>

              {/* DETALLES DE FECHA Y DIRECCIÓN */}
              <div className="space-y-5 mb-10 text-sm md:text-base text-gray-400">
                
                {/* Fechas y Horario */}
                <div className="flex items-start gap-4">
                  <IconCalendar />
                  <p className="mt-0.5 leading-relaxed">
                    <strong className="text-gray-200">29 de Noviembre</strong> <br className="md:hidden" />
                    <span className="hidden md:inline"> · </span>
                    inmersión completa 8:00 AM a 8:00 pm
                  </p>
                </div>
                
                {/* Dirección y Hotel */}
                <div className="flex items-start gap-4">
                  <IconLocation />
                  <p className="mt-0.5 leading-relaxed">
                    <strong className="text-gray-200">D'Acosta Hotel Sochagota</strong>
                  </p>
                </div>

              </div>

              {/* BOTÓN GOOGLE MAPS */}
              <a 
                href="https://maps.app.goo.gl/otBKHgvH9NDSPDhbA?g_st=ic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#e6b981]/10 border border-[#e6b981]/30 hover:bg-[#e6b981]/20 text-[#e6b981] font-medium py-3 px-6 rounded-md transition-all duration-300 text-sm md:text-base"
              >
                <IconMapPin />
                Visualizar en Google Maps
              </a>

            </div>
          </div>
        </FadeInSection>

      </div>
    </section>
  );
}

/* =========================================
   ÍCONOS SVG PARA LA UBICACIÓN (Actualizados al nuevo color dorado)
   ========================================= */
const IconCalendar = () => (
  <svg className="w-6 h-6 text-[#e6b981] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconLocation = () => (
  <svg className="w-6 h-6 text-[#e6b981] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconMapPin = () => (
  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);