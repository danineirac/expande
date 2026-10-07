import FadeInSection from "../ui/FadeInSection";

export default function Inversion() {
  return (
    <section id="entradas" className="py-24 px-4 bg-[#050505] text-white font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* ENCABEZADO */}
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="font-['Oswald',sans-serif] text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Entradas
            </h2>
          </div>
        </FadeInSection>

        {/* GRID DE TICKETS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* ================= TICKET 1: GENERAL ================= */}
          <FadeInSection delay={0.1}>
            <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition-all duration-300 flex flex-col h-full shadow-lg">
              
              <div className="text-center mb-6">
                <span className="text-[10px] text-[#e6b981] font-semibold uppercase tracking-widest bg-[#e6b981]/10 border border-[#e6b981]/30 px-4 py-1.5 rounded-full inline-block mb-6">
                  2x1 · Plazas limitadas
                </span>
                <h3 className="font-['Oswald',sans-serif] text-4xl font-bold uppercase tracking-tight text-white">
                  General
                </h3>
              </div>

              <div className="w-full aspect-4/3 bg-[#050505] rounded-xl mb-8 flex items-center justify-center overflow-hidden border border-gray-800/80 group">
                <img 
                  src="/images/ent-general.webp" 
                  alt="Ubicación General" 
                  className="w-full h-full object-contain p-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </div>
              
              <div className="text-center mb-8 pb-8 border-b border-gray-800/80">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Precio lanzamiento grande</p>
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="font-['Oswald',sans-serif] text-5xl font-bold text-white">$200.000</p>
                  <p className="text-sm text-gray-500 line-through">Luego sube a $350.000</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 text-sm text-gray-300 grow">
                <li className="flex gap-3 items-start"><IconCheckGold /><span>Acceso presencial a todo el evento</span></li>
                <li className="flex gap-3 items-start"><IconCheckGold /><span><b>Entrada 2x1:</b> compra una y entra alguien gratis contigo</span></li>
                <li className="flex gap-3 items-start"><IconCheckGold /><span>Asiento en zona general</span></li>
                <li className="flex gap-3 items-start"><IconCheckGold /><span>Kit vivencial EXPANDE</span></li>
              </ul>
              
              {/* CTA GENERAL */}
              <div className="mt-auto flex flex-col items-center w-full">
                <a 
                  href="https://wa.me/573146936771?text=Hola,%20quiero%20asegurar%20mi%20entrada%20General%20para%20EXPANDE." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full text-center bg-[#ffa83b] hover:bg-white text-black font-extrabold py-4 rounded-md transition-all shadow-[0_0_20px_rgba(230,185,129,0.3)] uppercase tracking-wide text-sm transform hover:-translate-y-1 block"
                >
                  Asegurar mi cupo
                </a>
                <p className="mt-3 text-[10px] text-gray-400 font-light flex items-center gap-1.5 opacity-80">
                  <span className="text-gray-500">🔒</span> Reserva y pago seguro vía WhatsApp
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* ================= TICKET 2: VIP (DESTACADO) ================= */}
          <FadeInSection delay={0.2}>
            <div className="bg-[#0a0a0a] border border-[#e6b981] rounded-xl p-8 transform lg:-translate-y-4 shadow-[0_0_40px_rgba(230,185,129,0.1)] hover:shadow-[0_0_60px_rgba(230,185,129,0.2)] transition-all duration-300 flex flex-col h-full relative z-10">
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#e6b981] text-black text-[10px] font-black uppercase py-1.5 px-6 rounded-full tracking-widest shadow-xl whitespace-nowrap">
                Más popular en preventa
              </div>
              
              <div className="text-center mb-6 mt-4">
                <h3 className="font-['Oswald',sans-serif] text-5xl font-bold uppercase tracking-tight text-[#e6b981] drop-shadow-md">
                  VIP
                </h3>
              </div>

              <div className="w-full aspect-4/3 bg-[#050505] rounded-xl mb-8 flex items-center justify-center overflow-hidden border border-[#e6b981]/30 group">
                <img 
                  src="/images/ent-vip.webp" 
                  alt="Ubicación VIP" 
                  className="w-full h-full object-contain p-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </div>
              
              <div className="text-center mb-8 pb-8 border-b border-[#e6b981]/30">
                <p className="text-[#e6b981]/80 text-xs uppercase tracking-widest mb-2">Precio de lanzamiento grande</p>
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="font-['Oswald',sans-serif] text-5xl font-bold text-white drop-shadow-lg">$350.000</p>
                  <p className="text-sm text-[#e6b981]/60 line-through">Luego sube a $450.000</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 text-sm text-gray-200 grow">
                <li className="flex gap-3 items-start"><IconCheckGold /><span>Acceso presencial a todo el evento</span></li>
                <li className="flex gap-3 items-start"><IconCheckGold /><span><b>Entrada 2x1:</b> compras una entrada y vas gratis con otra persona</span></li>
                <li className="flex gap-3 items-start"><IconCheckGold /><span>Ingreso privilegiado y zona VIP</span></li>
                <li className="flex gap-3 items-start"><IconCheckGold /><span>Escarapela VIP de identificación</span></li>
                <li className="flex gap-3 items-start"><IconCheckGold /><span>Almuerzo</span></li>
                <li className="flex gap-3 items-start text-white font-medium"><IconStarGold /><span>Kit vivencia EXPANDE</span></li>
                <li className="flex gap-3 items-start text-white font-medium"><IconStarGold /><span>Recordatorio</span></li>
              </ul>
              
              {/* CTA VIP -> Tu número (Cambia el 573000000000) */}
              <div className="mt-auto flex flex-col items-center w-full">
                <a 
                  href="https://wa.me/573214633040?text=Hola,%20quiero%20asegurar%20mi%20entrada%20VIP%20para%20EXPANDE." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full text-center bg-[#ffa83b] hover:bg-white text-black font-extrabold py-4 rounded-md transition-all shadow-[0_0_20px_rgba(230,185,129,0.3)] uppercase tracking-wide text-sm transform hover:-translate-y-1 block"
                >
                  Asegurar mi cupo
                </a>
                <p className="mt-3 text-[10px] text-[#e6b981] font-light flex items-center gap-1.5 opacity-80">
                  <span>🔒</span> Reserva y pago seguro vía WhatsApp
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* ================= TICKET 3: PLATINO ================= */}
          <FadeInSection delay={0.3}>
            <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-8 hover:border-gray-500 transition-all duration-300 flex flex-col h-full shadow-lg relative">
              
              <div className="text-center mb-6">
                <span className="text-[10px] text-white font-semibold uppercase tracking-widest bg-red-900/50 border border-red-800/50 px-4 py-1.5 rounded-full inline-block mb-6">
                  Solo 15 cupos - no incluye 2x1
                </span>
                <h3 className="font-['Oswald',sans-serif] text-4xl font-bold uppercase tracking-tight text-white">
                  Platino
                </h3>
              </div>

              <div className="w-full aspect-4/3 bg-[#050505] rounded-xl mb-8 flex items-center justify-center overflow-hidden border border-gray-800/80 group">
                <img 
                  src="/images/ent-platino.webp" 
                  alt="Ubicación Platino" 
                  className="w-full h-full object-contain p-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </div>
              
              <div className="text-center mb-8 pb-8 border-b border-gray-800/80">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Precio lanzamiento grande</p>
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="font-['Oswald',sans-serif] text-5xl font-bold text-white">$550.000</p>
                  <p className="text-sm text-gray-500 line-through">Luego $750.000</p>
                </div>
              </div>
              
              <div className="grow">
                <ul className="space-y-4 mb-8 text-sm text-gray-300">
                  <li className="flex gap-3 items-start"><IconCheckGold /><span>Zona preferencial plazas únicas una experiencia premium</span></li>
                  <li className="flex gap-3 items-start"><IconCheckGold /><span>Ingreso Privilegiado</span></li>
                  <li className="flex gap-3 items-start"><IconCheckGold /><span>Escarapela PLATINO de identificación</span></li>
                  <li className="flex gap-3 items-start"><IconCheckGold /><span>Almuerzo</span></li>
                  <li className="flex gap-3 items-start text-white font-medium"><IconStarGold /><span>Recordatorio</span></li>
                  <li className="flex gap-3 items-start text-white font-medium"><IconStarGold /><span>Kit Digital EXPANDE</span></li>
                  <li className="flex gap-3 items-start text-white font-medium"><IconStarGold /><span>Kit vivencial especial EXPANDE</span></li>
                </ul>

                <h4 className="text-[11px] text-[#e6b981] font-bold uppercase tracking-widest mb-4 border-t border-gray-800/80 pt-6">
                  Post EXPANDE tienes acceso a:
                </h4>
                <ul className="space-y-4 mb-10 text-sm text-gray-300">
                  <li className="flex gap-3 items-start text-white font-medium"><IconStarGold /><span>Fullday profundo de Sanación (tu programas la fecha que más se te facilite)</span></li>
                  <li className="flex gap-3 items-start text-white font-medium"><IconStarGold /><span>Sesión 1:1 online con Danna Neira</span></li>
                  <li className="flex gap-3 items-start text-white font-medium"><IconStarGold /><span>Experiencia privada el lunes 30</span></li>
                </ul>
              </div>
              
              {/* CTA PLATINO -> Tu número (Cambia el 573214633040) */}
              <div className="mt-auto flex flex-col items-center w-full">
                <a 
                  href="https://wa.me/573214633040?text=Hola,%20quiero%20asegurar%20mi%20entrada%20Platino%20para%20EXPANDE." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full text-center bg-[#ffa83b] hover:bg-white text-black font-extrabold py-4 rounded-md transition-all shadow-[0_0_20px_rgba(230,185,129,0.3)] uppercase tracking-wide text-sm transform hover:-translate-y-1 block"
                >
                  Asegurar mi cupo
                </a>
                <p className="mt-3 text-[10px] text-gray-400 font-light flex items-center gap-1.5 opacity-80">
                  <span className="text-gray-500">🔒</span> Reserva y pago seguro vía WhatsApp
                </p>
              </div>
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
}

const IconCheckGold = () => (
  <svg className="w-5 h-5 text-[#e6b981] shrink-0 mt-0.5 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

/* NUEVO ICONO: Estrella brillante e intensa para beneficios VIP */
const IconStarGold = () => (
  <svg className="w-5 h-5 text-[#ffd700] shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(255,215,0,0.7)]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);