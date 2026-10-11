import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "myRBvaNEzGc"; 

  useEffect(() => {
    const targetDate = new Date("2026-11-29T08:00:00").getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
          hours: String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
          minutes: String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
          seconds: String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, '0')
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Redujimos el padding superior en desktop a md:pt-16
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505] font-sans pb-24 md:pb-28 pt-10 md:pt-16">
      
      {/* IMAGEN DE FONDO Y OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1533137098665-47ca60257cec?q=80&w=1740&auto=format&fit=crop" 
          alt="Escenario Expande" 
          className="w-full h-full object-cover opacity-30 grayscale-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#050505]/90 via-black/50 to-[#050505]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-80"></div>
      </div>

      {/* BARRA SUPERIOR MINIMALISTA */}
      <div className="absolute top-0 left-0 w-full p-6 md:p-5 flex justify-between items-center z-20 text-[9px] md:text-xs text-gray-400 tracking-[0.2em] uppercase font-light sm:flex ">
        <span>Una experiencia de alto impacto</span>
        <span>Colombia · 2026</span>
      </div>

      {/* CONTENIDO PRINCIPAL CENTRAL */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center flex flex-col items-center mt-6 md:mt-0">
        
        {/* ETIQUETAS SUPERIORES */}
        {/* Redujimos el gap y el margen inferior */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="mb-4 md:mb-5 flex flex-col items-center gap-3 md:gap-4 w-full">
          
          <span className="bg-[#e6b981]/10 border border-[#e6b981]/30 text-[#e6b981] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full text-[10px] md:text-[11px] shadow-[0_0_15px_rgba(230,185,129,0.15)] inline-block">
            2x1 Compra tu entrada antes que suba el precio
          </span>

          <div className="flex items-center justify-center border border-gray-600 bg-[#0a0a0a]/60 backdrop-blur-md rounded-full px-4 md:px-5 py-1.5 md:py-2 text-[10px] md:text-[13px] text-gray-200 font-semibold tracking-widest uppercase shadow-lg w-[90%] md:w-auto mx-auto text-center leading-tight">
            <span className="text-[#e6b981] mr-1.5 md:mr-2">29 DE NOVIEMBRE</span> <span className="hidden md:inline">·</span><span className="md:hidden"><br/></span> HOTEL SOCHAGOTA · PAIPA, BOYACÁ
          </div>

        </motion.div>

        {/* TITULAR PRINCIPAL */}
        {/* Redujimos un poco el texto en lg y el margen inferior */}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }} className="text-2xl md:text-4xl lg:text-[42px] font-black uppercase text-white tracking-tight max-w-4xl mx-auto mb-3 md:mb-4 leading-snug drop-shadow-md">
          UN DÍA PARA TRANSFORMAR LA FORMA EN LA QUE VIVES, AMAS Y CREAS RESULTADOS.
        </motion.h1>

        {/* SUBTÍTULO DESCRIPTIVO */}
        {/* Redujimos margen inferior (mb-10 a mb-6) */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }} className="text-[#e6b981] text-sm md:text-base font-medium tracking-wider max-w-3xl mx-auto mb-6 md:mb-6 uppercase">
          Sanación, conciencia, relaciones y dinero en una experiencia presencial de alto impacto.
        </motion.p>

        {/* TEXTO LLAMATIVO PARA EL VIDEO */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mb-4 md:mb-5 flex justify-center w-full relative z-20"
        >
          <div className="flex items-center gap-2 md:gap-3 text-[#e6b981] font-light uppercase tracking-[0.2em] text-[10px] md:text-xs bg-[#e6b981]/10 border border-[#e6b981]/30 px-5 py-2 md:py-2.5 rounded-full shadow-[0_0_20px_rgba(230,185,129,0.15)] backdrop-blur-md -mb-3">
            
            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e6b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-[#e6b981]"></span>
            </span>
            
            Reproduce el video y entenderás
            
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#e6b981] animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            
          </div>
        </motion.div>

        {/* REPRODUCTOR DE VIDEO INCORPORADO */}
        {/* CLAVE AQUÍ: max-w-3xl en lugar de max-w-4xl para que no sea tan alto en PC */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="w-full max-w-3xl mx-auto relative aspect-video bg-[#0a0a0a] rounded-2xl md:rounded-3xl overflow-hidden border border-[#e6b981]/30 shadow-[0_0_50px_rgba(230,185,129,0.1)] mb-6 md:mb-8"
        >
          {!isPlaying ? (
            <div 
              className="absolute inset-0 w-full h-full group cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <img 
                src="./images/expande-1.webp" 
                alt="Video Expande" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#050505]/80 backdrop-blur-md border border-[#e6b981]/40 rounded-full flex items-center justify-center text-[#e6b981] group-hover:scale-110 group-hover:bg-[#e6b981] group-hover:text-[#050505] transition-all duration-300 shadow-2xl">
                  <svg className="w-6 h-6 md:w-8 md:h-8 ml-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4l12 6-12 6z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="EXPANDE Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </motion.div>

        {/* BOTÓN CTA */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} className="flex flex-col items-center">
          <div className="flex flex-col items-center w-full px-2">
            <a 
              href="#entradas" 
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto bg-[#ffa83b] hover:bg-white text-[#050505] font-extrabold uppercase tracking-[0.1em] px-6 md:px-12 py-3.5 md:py-4 rounded-md text-xs md:text-sm transition-all duration-300 shadow-[0_0_30px_rgba(230,185,129,0.2)] hover:shadow-[0_0_50px_rgba(230,185,129,0.4)] hover:-translate-y-1 text-center"
            >
              VER ENTRADAS Y APROVECHAR EL 2×1
            </a>
            <p className="mt-2 text-[10px] md:text-[11px] text-gray-400 font-light flex items-center gap-1.5 opacity-90 mb-4 md:mb-6">
              <span className="text-[#e6b981]">🔒</span> Atención personalizada por WhatsApp.
            </p>
          </div>
        </motion.div>
        
      </div>

      {/* =========================================
          BARRA INFERIOR: CONTADOR Y FLECHA
          ========================================= */}
      <div className="absolute bottom-0 left-0 w-full border-t border-gray-800/80 px-6 md:px-12 py-3 md:py-4 flex justify-between items-center z-20 bg-linear-to-t from-[#050505] to-transparent">
        
        {/* Contador */}
        <div className="flex flex-col">
          <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1 font-medium">
            Comienza en
          </span>
          <div className="flex gap-4 md:gap-6 text-white font-['Oswald',sans-serif] text-base md:text-lg tracking-widest">
            <div className="flex items-baseline gap-1.5"><span className="font-bold text-[#e6b981]">{timeLeft.days}</span><span className="text-[9px] text-gray-500 uppercase font-sans tracking-widest">Días</span></div>
            <div className="flex items-baseline gap-1.5"><span className="font-bold text-[#e6b981]">{timeLeft.hours}</span><span className="text-[9px] text-gray-500 uppercase font-sans tracking-widest">Horas</span></div>
            <div className="flex items-baseline gap-1.5"><span className="font-bold text-[#e6b981]">{timeLeft.minutes}</span><span className="text-[9px] text-gray-500 uppercase font-sans tracking-widest">Min</span></div>
            <div className="flex items-baseline gap-1.5"><span className="font-bold text-[#e6b981]">{timeLeft.seconds}</span><span className="text-[9px] text-gray-500 uppercase font-sans tracking-widest">Seg</span></div>
          </div>
        </div>

        {/* Botón Flecha Abajo */}
        <a href="#experiencia" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#e6b981] hover:border-[#e6b981] transition-all duration-300 relative z-30">
          <svg className="w-3.5 h-3.5 md:w-4 md:h-4 animate-bounce mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

    </section>
  );
}