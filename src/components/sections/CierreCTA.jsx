import FadeInSection from "../ui/FadeInSection";

export default function CierreCTA() {
  return (
    <section className="relative py-32 px-4 bg-[#050505] text-white font-sans border-t border-gray-900 overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
      
      {/* =========================================
          EFECTO DE ILUMINACIÓN DE FONDO (GRADIENTE)
          ========================================= */}
      {/* Este div crea el resplandor cálido central que cae desde arriba */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#f04e23] opacity-[0.06] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        <FadeInSection>
          {/* TÍTULO PRINCIPAL */}
          <h2 className="font-['Oswald',_sans-serif] text-4xl md:text-5xl lg:text-[55px] font-bold uppercase tracking-tight leading-[1.05] mb-8 max-w-3xl mx-auto text-white drop-shadow-md">
            La Cumbre que ya reunió a <br className="hidden md:block" />
            +20.000 personas en dos <br className="hidden md:block" />
            años vuelve a una sala <br className="hidden md:block" />
            cerca de ti.
          </h2>

          {/* PÁRRAFO PERSUASIVO */}
          <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            Dos días diseñados para que salgas viendo tu vida con diez años de claridad de 
            más —vivencia, no promesa—. Una vez al año. Las entradas suben por olas —el 
            precio de hoy no es el de mañana—, cada ciudad tiene un aforo que pone la 
            sala y una fecha que no se mueve. Busca tu ciudad, asegura tu entrada, y si 
            puedes, elige VIP: la cercanía es donde ocurre lo que no se te olvida.
          </p>

          {/* BOTÓN DE LLAMADO A LA ACCIÓN (IGUAL AL HERO) */}
          <a 
            href="#entradas" 
            className="inline-block bg-gradient-to-r from-[#d96a11] to-[#f29124] hover:from-[#f29124] hover:to-[#d96a11] text-[#050505] font-extrabold uppercase tracking-wide px-10 md:px-14 py-4 md:py-5 rounded-full text-base md:text-lg transition-all duration-300 shadow-[0_0_40px_rgba(235,122,1,0.3)] hover:shadow-[0_0_60px_rgba(235,122,1,0.5)] hover:-translate-y-1 transform"
          >
            Asegurar mi entrada →
          </a>
          
          {/* TEXTO DE GARANTÍA / CIERRE */}
          <p className="text-gray-500 text-[11px] md:text-xs mt-6 font-light max-w-lg mx-auto leading-relaxed">
            Pago seguro. No estás comprando un boleto: estás decidiendo cambiar de <br className="hidden md:block" />
            tierra. Nos vemos dentro, familia. El momento perfecto es este.
          </p>
        </FadeInSection>

      </div>
    </section>
  );
}