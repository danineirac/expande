export default function Footer() {
  return (
    <footer className="bg-[#030303] py-16 px-4 border-t border-gray-900">
      <div className="max-w-5xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
        
        {/* DESCARGO DE RESPONSABILIDAD */}
        <p className="text-gray-500 text-[10px] md:text-xs font-light leading-relaxed mb-6 max-w-4xl">
          Cumbre de los Millonarios Conscientes es un evento educativo y de desarrollo personal y profesional. No promete ni garantiza resultados económicos ni ingresos: los resultados dependen de cada persona, su compromiso y sus circunstancias. Los testimonios, cuando se muestran, son experiencias individuales y no representan resultados típicos ni garantizados. El contenido y los marcos presentados (incluida la obra de David Hawkins) se ofrecen como referencia conceptual, no como afirmación científica ni consejo médico, psicológico o financiero.
        </p>
        
        {/* ENLACES LEGALES */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 text-[#d96a11] text-[11px] md:text-xs mb-8 font-medium tracking-wide">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          <span className="text-gray-700">·</span>
          <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          <span className="text-gray-700">·</span>
          <a href="#" className="hover:text-white transition-colors">Contacto</a>
        </div>

        {/* COPYRIGHT */}
        <div className="font-['Oswald',_sans-serif] text-gray-300 text-xs md:text-sm uppercase tracking-widest font-bold">
          Cumbre de los <span className="text-[#d96a11]">Millonarios Conscientes</span> <span className="text-gray-700 font-sans font-normal mx-1">·</span> © 2026 <span className="text-gray-700 font-sans font-normal mx-1">·</span> Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}