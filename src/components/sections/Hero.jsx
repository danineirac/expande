import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  // Estado para el contador hacia el 29 de Noviembre de 2026
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

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
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505] font-sans pb-16 md:pb-24">
      
      {/* IMAGEN DE FONDO Y OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1533137098665-47ca60257cec?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Escenario Expande" 
          className="w-full h-full object-cover opacity-40 grayscale-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#050505]/80 via-black/40 to-[#050505]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-80"></div>
      </div>

      {/* BARRA SUPERIOR MINIMALISTA */}
      <div className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-20 text-[9px] md:text-xs text-gray-400 tracking-[0.2em] uppercase font-light sm:flex">
        <span>Una experiencia de alto impacto</span>
        <span>Colombia · 2026</span>
      </div>

      {/* CONTENIDO PRINCIPAL CENTRAL */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center flex flex-col items-center mt-12 md:mt-0">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="mb-8">
          <span className="bg-[#e6b981]/10 border border-[#e6b981]/30 text-[#e6b981] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full text-[10px] md:text-xs shadow-[0_0_15px_rgba(230,185,129,0.15)]">
            2x1 Compra tu entrada antes que suba el precio
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="font-['Oswald',sans-serif] text-7xl md:text-[130px] lg:text-[160px] leading-[0.85] font-bold text-[#f5f4f0] tracking-tighter mb-6 drop-shadow-2xl">
          EXPANDE
        </motion.h1>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }} className="text-xl md:text-3xl lg:text-4xl font-bold uppercase text-gray-200 tracking-tight max-w-4xl mx-auto mb-8 leading-snug drop-shadow-md">
          Sabes que hay más disponible para ti.<br className="hidden md:block" /> 
          La pregunta es: ¿Qué te está impidiendo vivirlo?
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-gray-400 text-sm md:text-base font-light max-w-2xl mx-auto mb-12 leading-relaxed border-t border-gray-800 pt-8">
          Una inmersión de alto impacto de un día para reordenar tu mundo interno y expandir tus resultados externos en tus relaciones, dinero, propósito y vida.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
          <a href="#entradas" className="inline-block bg-[#e6b981] hover:bg-white text-[#050505] font-extrabold uppercase tracking-[0.15em] px-10 md:px-14 py-4 md:py-5 rounded-md text-xs md:text-sm transition-all duration-300 shadow-[0_0_30px_rgba(230,185,129,0.2)] hover:shadow-[0_0_50px_rgba(230,185,129,0.4)] hover:-translate-y-1">
            Quiero vivir expande →
          </a>
        </motion.div>
        {/* Badges de Información Inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap justify-center gap-3 md:gap-6 mt-10"
        >
          <div className="flex items-center gap-2 border border-gray-800 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-full px-5 py-2 text-[10px] md:text-xs text-gray-400 font-medium tracking-wide">
            <span className="text-[#e6b981]">29 NOV</span> · Paipa, Boyacá
          </div>
          <div className="flex items-center gap-2 border border-gray-800 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-full px-5 py-2 text-[10px] md:text-xs text-gray-400 font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e6b981]"></span>
            Cupos limitados
          </div>
        </motion.div>
      </div>

      {/* =========================================
          NUEVA BARRA INFERIOR: CONTADOR Y FLECHA
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
        <a href="#experiencia" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#e6b981] hover:border-[#e6b981] transition-all duration-300">
          <svg className="w-4 h-4 animate-bounce mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

    </section>
  );
}