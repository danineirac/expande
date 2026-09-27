import FadeInSection from "../ui/FadeInSection";

export default function Inversion() {
  return (
    <section id="entradas" className="py-6 px-4 bg-[#050505] text-white font-sans border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* ENCABEZADO */}
        <FadeInSection>
          <div className="text-center mb-10">
            <span className="text-[#ffa93d] font-bold tracking-[0.15em] uppercase text-xs md:text-sm">
              Entradas disponibles · plazas limitadas
            </span>
            <h2 className="font-['Oswald',_sans-serif] text-4xl md:text-5xl font-bold uppercase mt-4 tracking-tight">
              Elige cómo quieres vivir la Cumbre
            </h2>
          </div>
        </FadeInSection>

        {/* GRID DE TICKETS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-8">
          
          {/* ================= TICKET 1: GENERAL ================= */}
          <FadeInSection delay={0.1}>
            <div className="bg-gradient-to-b from-[#0f0f0f] to-[#050505] border border-gray-800 rounded-3xl p-8 hover:border-gray-500 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-2xl">
              
              <div className="text-center mb-6">
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest bg-gray-900/80 border border-gray-700 px-4 py-1.5 rounded-full">
                  Plazas limitadas
                </span>
                <p className="text-gray-500 mt-6 text-xs uppercase tracking-widest">Entrada</p>
                <h3 className="font-['Oswald',_sans-serif] text-4xl font-bold uppercase mt-1 tracking-tight">General</h3>
              </div>
              
              {/* ESPACIO PARA MAPA (Con fondo elegante por si no hay imagen aún) */}
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-gray-700 shadow-inner">
                <img src="/mapa-general.png" alt="Mapa General" className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="text-center mb-8 pb-8 border-b border-gray-800">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Precio preventa</p>
                <div className="flex items-baseline justify-center gap-2">
                  <p className="font-['Oswald',_sans-serif] text-5xl font-bold text-white">$60</p>
                  <p className="text-sm text-gray-500 line-through">Luego $90</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 text-[13px] text-gray-300 flex-grow">
                <li className="flex gap-3 items-start"><IconCheckGreen /><span>Acceso presencial a los <b>2 días de evento</b></span></li>
                <li className="flex gap-3 items-start"><IconCheckGreen /><span><b>Zona General</b> · entrada al recinto</span></li>
                <li className="flex gap-3 items-start"><IconStarYellow /><span>Kit Vivencial Cumbre 2026</span></li>
                <li className="flex gap-3 items-start"><IconStarYellow /><span>Kit Digital Cumbre 2026 · herramientas y plantillas</span></li>
              </ul>
              
              <button className="w-full bg-[#1a1a1a] hover:bg-white hover:text-black border border-gray-700 text-white font-bold py-4 rounded-xl transition-all duration-300 uppercase tracking-wide text-sm">
                Asegurar mi lugar
              </button>
            </div>
          </FadeInSection>

          {/* ================= TICKET 2: VIP (DESTACADO & FLOTANTE) ================= */}
          <FadeInSection delay={0.2}>
            <div className="bg-gradient-to-b from-[#2a1305] to-[#0a0a0a] border-2 border-[#f5a623] rounded-3xl p-8 transform lg:-translate-y-8 shadow-[0_0_40px_rgba(245,166,35,0.15)] hover:shadow-[0_0_60px_rgba(245,166,35,0.3)] transition-all duration-300 flex flex-col h-full relative z-10">
              
              {/* CINTA "MÁS POPULAR" (Estilo V2) */}
              <div className="absolute top-6 -right-12 bg-gradient-to-r from-[#f5a623] to-[#e08e0b] text-black text-[10px] font-black uppercase py-1.5 px-12 rotate-45 tracking-widest shadow-xl">
                Más popular
              </div>
              
              <div className="text-center mb-6 mt-2">
                <span className="text-[10px] text-[#f5a623] font-semibold uppercase tracking-widest bg-[#f5a623]/10 border border-[#f5a623]/30 px-4 py-1.5 rounded-full">
                  Plazas limitadas
                </span>
                <p className="text-[#f5a623]/80 mt-6 text-xs uppercase tracking-widest">Entrada</p>
                <h3 className="font-['Oswald',_sans-serif] text-5xl font-bold uppercase mt-1 tracking-tight text-[#f5a623] drop-shadow-md">VIP</h3>
              </div>
              
              {/* ESPACIO PARA MAPA */}
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-800 to-[#2a1305] rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-[#f5a623]/40 shadow-inner">
                <img src="/mapa-vip.png" alt="Mapa VIP" className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="text-center mb-8 pb-8 border-b border-[#f5a623]/30">
                <p className="text-[#f5a623]/80 text-xs uppercase tracking-widest mb-2">Precio preventa</p>
                <div className="flex items-baseline justify-center gap-2">
                  <p className="font-['Oswald',_sans-serif] text-6xl font-bold text-white drop-shadow-lg">$400</p>
                  <p className="text-sm text-[#f5a623]/60 line-through">Luego $500</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 text-[13px] text-gray-200 flex-grow">
                <li className="flex gap-3 items-start"><IconCheckGreen /><span>Acceso presencial a los <b>2 días de evento</b></span></li>
                <li className="flex gap-3 items-start"><IconCheckGreen /><span><b>Ingreso privilegiado</b> · zona VIP diferenciada</span></li>
                <li className="flex gap-3 items-start"><IconCheckGreen /><span><b>Escarapela VIP</b> de identificación</span></li>
                <li className="flex gap-3 items-start"><IconCheckGreen /><span><b>Grabación completa</b> de los 2 días de contenido</span></li>
                <li className="flex gap-3 items-start"><IconCheckGreen /><span><b>Desayuno exclusivo con Javi</b> · Día 2 · 8AM a 11AM</span></li>
                <li className="flex gap-3 items-start"><IconStarYellow /><span>Kit Vivencial Cumbre 2026</span></li>
                <li className="flex gap-3 items-start"><IconStarYellow /><span>Kit Digital Cumbre 2026</span></li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-[#f5a623] to-[#d97c0b] hover:from-[#d97c0b] hover:to-[#f5a623] text-black font-extrabold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(245,166,35,0.4)] uppercase tracking-wide text-sm transform hover:-translate-y-1">
                Quiero mi entrada VIP
              </button>
            </div>
          </FadeInSection>

          {/* ================= TICKET 3: PLATINO ================= */}
          <FadeInSection delay={0.3}>
            <div className="bg-gradient-to-b from-[#0f0f15] to-[#050505] border border-gray-800 rounded-3xl p-8 hover:border-[#6953ff] transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-[0_0_30px_rgba(105,83,255,0.15)] relative">
              
              <div className="text-center mb-6">
                <span className="text-[10px] text-gray-300 font-semibold uppercase tracking-widest bg-gray-800 px-3 py-1 rounded-full mb-2 inline-block">
                  Sin acompañante
                </span>
                <br/>
                <span className="text-[10px] text-white bg-red-600/90 font-bold uppercase tracking-widest px-3 py-1.5 rounded-full inline-block shadow-md">
                  Plazas muy limitadas
                </span>
                <p className="text-gray-500 mt-6 text-xs uppercase tracking-widest">Experiencia</p>
                <h3 className="font-['Oswald',_sans-serif] text-4xl font-bold uppercase mt-1 tracking-tight text-[#97a9eb]">Platino</h3>
              </div>
              
              {/* ESPACIO PARA MAPA */}
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-800 to-[#10101f] rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-[#6953ff]/30 shadow-inner">
                <img src="/mapa-platino.png" alt="Mapa Platino" className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="text-center mb-8 pb-8 border-b border-gray-800">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Precio preventa</p>
                <div className="flex items-baseline justify-center gap-2">
                  <p className="font-['Oswald',_sans-serif] text-5xl font-bold text-white">$1.200</p>
                  <p className="text-sm text-gray-500 line-through">Único $2.000</p>
                </div>
              </div>
              
              <div className="flex-grow">
                {/* SECCIÓN DURANTE */}
                <h4 className="text-[11px] text-[#97a9eb] font-bold uppercase tracking-widest mb-4">Durante la cumbre</h4>
                <ul className="space-y-4 mb-8 text-[13px] text-gray-300">
                  <li className="flex gap-3 items-start"><IconCheckBlue /><span><b>Todo lo incluido en VIP</b></span></li>
                  <li className="flex gap-3 items-start"><IconPinBlue /><span><b>Ubicación exclusiva Platino</b> · experiencia premium</span></li>
                  <li className="flex gap-3 items-start"><IconUserBlue /><span><b>Acceso backstage con Javi</b> · camerino · máx. 20 personas</span></li>
                  <li className="flex gap-3 items-start"><IconStarYellow /><span>Kits Cumbre, Vivencial y Digital</span></li>
                </ul>

                {/* SECCIÓN POST */}
                <h4 className="text-[11px] text-[#97a9eb] font-bold uppercase tracking-widest mb-4 border-t border-gray-800 pt-6">Post cumbre</h4>
                <ul className="space-y-4 mb-10 text-[13px] text-gray-300">
                  <li className="flex gap-3 items-start"><IconCupBlue /><span><b>Cena privada con Javi</b> · Día 3 · solo Platinos</span></li>
                  <li className="flex gap-3 items-start"><IconNetworkBlue /><span><b>Red Privada Platino</b> · 1 año · networking de alto nivel</span></li>
                </ul>
              </div>
              
              <button className="w-full bg-gradient-to-r from-[#6953ff] to-[#4d6bfe] hover:from-[#5741e6] hover:to-[#3e56d4] text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(105,83,255,0.3)] uppercase tracking-wide text-sm flex flex-col items-center transform hover:-translate-y-1">
                <span>Quiero la experiencia Platino</span>
              </button>
            </div>
            
          </FadeInSection>

        </div>
        {/* =========================================================
            NUEVA SECCIÓN: ESTADÍSTICAS Y VIDEOS (ConverteAI mockup)
            ========================================================= */}
        <FadeInSection delay={0.4}>
          <div className="mt-5 flex flex-col items-center">
            
            <p className="text-gray-400 text-sm font-light mb-8">
              Hay descuentos reales por venir en grupo o con tu familia.
            </p>

            {/* BARRA DE ESTADÍSTICAS */}
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs md:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-[#f04e23] text-[10px]">●</span>
                <span><b>+20.000 personas</b> se han sumado en dos años</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f04e23] text-[10px]">●</span>
                <span><b>11 países</b></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f04e23] text-[10px]">●</span>
                <span><b>9 de 11 ciudades</b> llenaron o superaron el aforo en 2025</span>
              </div>
            </div>

            {/* CARRUSEL DE VIDEOS (Estilo Reels/TikTok) */}
            <div className="w-full mt-8 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 md:px-0">
              
              {/* VIDEO 1 */}
              <div className="relative min-w-[220px] md:min-w-[260px] aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden snap-center flex-shrink-0 border border-gray-800 group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Testimonio" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute top-4 left-4 bg-[#f5a623] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-10">
                  Argentina · 2025
                </div>
                {/* Botón Play ConverteAI */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 bg-[#6953ff] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
                  </div>
                </div>
              </div>

              {/* VIDEO 2 */}
              <div className="relative min-w-[220px] md:min-w-[260px] aspect-[9/16] bg-black rounded-2xl overflow-hidden snap-center flex-shrink-0 border border-gray-800 group cursor-pointer">
                {/* Simulando un video oscuro que no ha cargado imagen */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
                <div className="absolute top-4 left-4 bg-[#f5a623] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-10">
                  Argentina · 2025
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  {/* Este botón parece ser verde en tu captura, pero puedes unificar el color */}
                  <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
                  </div>
                </div>
              </div>

              {/* VIDEO 3 */}
              <div className="relative min-w-[220px] md:min-w-[260px] aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden snap-center flex-shrink-0 border border-gray-800 group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Testimonio" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute top-4 left-4 bg-[#f5a623] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-10">
                  Argentina · 2025
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 bg-[#86C232] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
                  </div>
                </div>
              </div>

              {/* VIDEO 4 */}
              <div className="relative min-w-[220px] md:min-w-[260px] aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden snap-center flex-shrink-0 border border-gray-800 group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Testimonio" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute top-4 left-4 bg-[#f5a623] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-10">
                  Chile · 2025
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 bg-[#4A90E2] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>
                  </div>
                </div>
              </div>

            </div>

            {/* TEXTO DE CIERRE */}
            <p className="text-gray-400 text-sm md:text-base font-light text-center max-w-3xl mt-0 leading-relaxed">
              No es magia. Es contexto. Dos días de inmersión presencial donde trabajas tu mente, tus relaciones y tu negocio en el mismo lugar y al mismo tiempo. Con amor y con poder, cero humo.
            </p>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

/* =========================================
   ÍCONOS SVG REUTILIZABLES
   ========================================= */
const IconCheckGreen = () => (
  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconStarYellow = () => (
  <svg className="w-4 h-4 text-[#f5a623] flex-shrink-0 mt-0.5 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const IconCheckBlue = () => (
  <svg className="w-5 h-5 text-[#6953ff] flex-shrink-0 mt-0.5 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconPinBlue = () => (
  <svg className="w-5 h-5 text-[#6953ff] flex-shrink-0 mt-0.5 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconUserBlue = () => (
  <svg className="w-5 h-5 text-[#6953ff] flex-shrink-0 mt-0.5 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const IconCupBlue = () => (
  <svg className="w-5 h-5 text-[#6953ff] flex-shrink-0 mt-0.5 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
  </svg>
);

const IconNetworkBlue = () => (
  <svg className="w-5 h-5 text-[#6953ff] flex-shrink-0 mt-0.5 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);