import { motion } from "framer-motion";

// Las palabras que se repetirán
const words = [
  "ABUNDANCIA", "RELACIONES", "LIDERAZGO", "EXPANDE", 
  "CONSCIENCIA", "IDENTIDAD", "PROPÓSITO"
];

export default function Marquee() {
  // Duplicamos el array varias veces para crear el efecto infinito sin cortes
  const duplicatedWords = [...words, ...words, ...words, ...words];

  return (
    <div className="w-full bg-[#e6b981] py-3 md:py-4 overflow-hidden border-y border-[#d4a872] relative z-20">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-6 md:gap-10 items-center pl-6 md:pl-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 60 }} // Ajusta 'duration' para más rápido/lento
        >
          {duplicatedWords.map((word, index) => (
            <div key={index} className="flex items-center gap-6 md:gap-10">
              <span className="text-[#050505] text-xs md:text-sm font-bold uppercase tracking-[0.15em]">
                {word}
              </span>
              <span className="text-[#050505]/60 text-[10px]">●</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}