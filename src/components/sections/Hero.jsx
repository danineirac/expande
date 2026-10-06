import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  // Estado para el contador hacia el 29 de Noviembre de 2026
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  
  // Estado para el reproductor de video
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "myRBvaNEzGc"; // Reemplaza con el ID real de YouTube

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
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505] font-sans pb-24 md:pb-32 pt-20">
      
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
      <div className="absolute top-0 left-0 w-full p-6 md:p-5 flex justify-between items-center z-20 text-[9px] md:text-xs text-gray-400 tracking-[0.2em] uppercase font-light sm:flex">
        <span>Una experiencia de alto impacto</span>
        <span>Colombia · 2026</span>
      </div>

      {/* CONTENIDO PRINCIPAL CENTRAL */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-center flex flex-col items-center mt-8 md:-mt-5">
        
        {/* ETIQUETA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="mb-6 md:mb-8">
          <span className="bg-[#e6b981]/10 border border-[#e6b981]/30 text-[#e6b981] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full text-[10px] md:text-xs shadow-[0_0_15px_rgba(230,185,129,0.15)]">
            2x1 Compra tu entrada antes que suba el precio
          </span>
        </motion.div>

        {/* SUBTÍTULO */}
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }} className="text-lg md:text-2xl lg:text-3xl font-bold uppercase text-gray-200 tracking-tight max-w-4xl mx-auto mb-8 leading-snug drop-shadow-md">
          Sabes que hay más disponible para ti.<br className="hidden md:block" /> 
          La pregunta es: ¿Qué te está impidiendo vivirlo?
        </motion.h2>

        {/* 👇 NUEVO TEXTO LLAMATIVO PARA EL VIDEO 👇 */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mb-6 flex justify-center w-full relative z-20"
        >
          <div className="flex items-center gap-3 text-[#e6b981] font-light uppercase tracking-[0.2em] text-[10px] md:text-s bg-[#e6b981]/10 border border-[#e6b981]/30 px-5 md:px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(230,185,129,0.15)] backdrop-blur-md -mb-3">
            
            {/* Punto parpadeante */}
            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e6b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-[#e6b981]"></span>
            </span>
            
            Reproduce el video y entenderás
            
            {/* Flecha rebotando hacia abajo */}
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#e6b981] animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            
          </div>
        </motion.div>
        {/* 👆 FIN DEL NUEVO TEXTO 👆 */}

        {/* REPRODUCTOR DE VIDEO INCORPORADO */}

        {/* REPRODUCTOR DE VIDEO INCORPORADO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="w-full max-w-4xl mx-auto relative aspect-video bg-[#0a0a0a] rounded-2xl md:rounded-3xl overflow-hidden border border-[#e6b981]/30 shadow-[0_0_50px_rgba(230,185,129,0.1)] mb-10"
        >
          {!isPlaying ? (
            <div 
              className="absolute inset-0 w-full h-full group cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              {/* Miniatura del video - Puedes cambiar la ruta por una imagen tuya */}
              <img 
                src="./images/expande-1.webp" 
                alt="Video Expande" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-[#050505]/80 backdrop-blur-md border border-[#e6b981]/40 rounded-full flex items-center justify-center text-[#e6b981] group-hover:scale-110 group-hover:bg-[#e6b981] group-hover:text-[#050505] transition-all duration-300 shadow-2xl">
                  <svg className="w-8 h-8 md:w-10 md:h-10 ml-1.5" fill="currentColor" viewBox="0 0 20 20">
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
        {/* DESCRIPCIÓN Y BOTÓN */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} className="flex flex-col items-center">
          <p className="text-gray-400 text-sm md:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed -mt-8">
            Una inmersión de alto impacto de un día para reordenar tu mundo interno y expandir tus resultados externos en tus relaciones, dinero, propósito y vida.
          </p>

          <div className="flex flex-col items-center">
            <a 
              href="#entradas" 
              rel="noopener noreferrer"
              className="inline-block bg-[#ffa83b] hover:bg-white text-[#050505] font-extrabold uppercase tracking-[0.15em] px-10 md:px-14 py-4 md:py-5 rounded-md text-xs md:text-sm transition-all duration-300 shadow-[0_0_30px_rgba(230,185,129,0.2)] hover:shadow-[0_0_50px_rgba(230,185,129,0.4)] hover:-translate-y-1 text-center"
            >
              Obtener mi entrada de Preventa
            </a>
            <p className="mt-3 text-[10px] md:text-xs text-gray-400 font-light flex items-center gap-1.5 opacity-80">
              <span className="text-[#e6b981]">🔒</span> Reserva segura y atención personalizada vía WhatsApp
            </p>
          </div>
          
          {/* Badges Inferiores */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-8">
            <div className="flex items-center gap-2 border border-gray-800 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-full px-5 py-2 text-[10px] md:text-xs text-gray-400 font-medium tracking-wide">
              <span className="text-[#e6b981]">29 NOV</span> · Paipa, Boyacá
            </div>
            <div className="flex items-center gap-2 border border-gray-800 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-full px-5 py-2 text-[10px] md:text-xs text-gray-400 font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6b981]"></span>
              Cupos limitados
            </div>
          </div>
        </motion.div>
        
      </div>

      {/* =========================================
          BARRA INFERIOR: CONTADOR Y FLECHA
          ========================================= */}
      <div className="absolute bottom-0 left-0 w-full border-t border-gray-800/80 px-6 md:px-12 py-5 flex justify-between items-center z-20 bg-linear-to-t from-[#050505] to-transparent">
        
        {/* Contador */}
        <div className="flex flex-col">
          <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 font-medium">
            Comienza en
          </span>
          <div className="flex gap-4 md:gap-6 text-white font-['Oswald',sans-serif] text-base md:text-xl tracking-widest">
            <div className="flex items-baseline gap-1.5"><span className="font-bold text-[#e6b981]">{timeLeft.days}</span><span className="text-[9px] md:text-[10px] text-gray-500 uppercase font-sans tracking-widest">Días</span></div>
            <div className="flex items-baseline gap-1.5"><span className="font-bold text-[#e6b981]">{timeLeft.hours}</span><span className="text-[9px] md:text-[10px] text-gray-500 uppercase font-sans tracking-widest">Horas</span></div>
            <div className="flex items-baseline gap-1.5"><span className="font-bold text-[#e6b981]">{timeLeft.minutes}</span><span className="text-[9px] md:text-[10px] text-gray-500 uppercase font-sans tracking-widest">Min</span></div>
            <div className="flex items-baseline gap-1.5"><span className="font-bold text-[#e6b981]">{timeLeft.seconds}</span><span className="text-[9px] md:text-[10px] text-gray-500 uppercase font-sans tracking-widest">Seg</span></div>
          </div>
        </div>

        {/* Botón Flecha Abajo */}
        <a href="#experiencia" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#e6b981] hover:border-[#e6b981] transition-all duration-300 relative z-30">
          <svg className="w-4 h-4 animate-bounce mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

    </section>
  );
}