import { useState } from "react";
import { motion } from "framer-motion";
import FadeInSection from "../ui/FadeInSection";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Reemplaza este ID por el ID real de tu video de YouTube
  const videoId = "_z8NLJ6C5vs"; 

  return (
    <section id="experiencia" className="bg-[#050505] py-24 md:py-32 px-4 font-sans relative overflow-hidden">
      
      {/* Brillo de fondo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-[#e6b981] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ENCABEZADO */}
        <FadeInSection>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            
            <div className="max-w-3xl">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-gray-600"></span> EL PUNTO DE PARTIDA
              </p>
              <h2 className="font-['Oswald',sans-serif] text-5xl md:text-7xl font-bold text-white uppercase leading-[1.05] tracking-tighter">
                Tu vida no se expande <br />
                hasta que tú te <br />
                <span className="text-[#e6b981]">expandes.</span>
              </h2>
            </div>
            
            <div className="max-w-xs border-l border-gray-800 pl-6 lg:mb-3">
              <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                No se trata de hacer más. Se trata de ampliar la consciencia desde la que eliges, sostienes y creas cada parte de tu vida.[cite: 23]
              </p>
            </div>

          </div>
        </FadeInSection>

        {/* CONTENEDOR DEL VIDEO */}
        <FadeInSection delay={0.2}>
          <div className="flex flex-col items-center">
            
            <p className="text-[#e6b981] text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
              <span className="animate-pulse">►</span> Súbele el volumen
            </p>

            <div className="relative w-full aspect-video bg-[#0a0a0a] rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
              
              {!isPlaying ? (
                <div 
                  className="absolute inset-0 w-full h-full group cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Video VSL Expande" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-[#050505]/70 backdrop-blur-md border border-[#e6b981]/30 rounded-full flex items-center justify-center text-[#e6b981] group-hover:scale-110 group-hover:bg-[#e6b981] group-hover:text-[#050505] transition-all duration-300 shadow-2xl">
                      <svg className="w-8 h-8 md:w-10 md:h-10 ml-1.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4l12 6-12 6z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#050505] to-transparent opacity-90"></div>
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

            </div>

            {/* CALL TO ACTION */}
            <div className="mt-12 flex flex-col items-center">
              <a 
                href="#entradas" 
                className="inline-block bg-[#e6b981] hover:bg-white text-[#050505] font-extrabold uppercase tracking-[0.15em] px-10 md:px-14 py-4 md:py-5 rounded-md text-xs md:text-sm transition-all duration-300 shadow-[0_0_30px_rgba(230,185,129,0.2)] hover:shadow-[0_0_50px_rgba(230,185,129,0.4)] hover:-translate-y-1"
              >
                Quiero vivir expande →
              </a>
              
              <div className="flex items-center gap-2 mt-6 text-gray-500 text-[10px] md:text-xs uppercase tracking-widest font-medium">
                <span className="text-[#e6b981]">●</span> Paipa, Boyacá <span className="mx-2 border-l border-gray-700 h-3"></span> Cupos limitados
              </div>
            </div>

          </div>
        </FadeInSection>

      </div>
    </section>
  );
}