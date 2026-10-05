export default function Footer() {
  return (
    <footer className="bg-[#030303] py-16 px-4 border-t border-gray-900/50">
      <div className="max-w-5xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
        
        {/* DESCARGO DE RESPONSABILIDAD (TEXTO LEGAL DEL PDF) */}
        <p className="text-gray-500 text-[10px] md:text-xs font-light leading-relaxed mb-8 max-w-5xl md:text-justify text-left">
          EXPANDE es una experiencia educativa de desarrollo personal, conciencia y crecimiento personal y profesional. No promete ni garantiza resultados económicos, personales, emocionales o relacionales específicos; los resultados dependen de cada persona, su nivel de participación, aplicación, compromiso y circunstancias. Los testimonios, cuando se presenten, corresponden a experiencias individuales y no representan resultados típicos ni garantizados. El contenido, herramientas y marcos presentados durante la experiencia tienen fines educativos y de desarrollo personal y no sustituyen atención médica, psicológica, financiera, legal ni ningún otro servicio profesional especializado. Las referencias al Mapa de los Niveles de Conciencia de David R. Hawkins se presentan como un marco conceptual y educativo, no como una afirmación científica.
        </p>
        
        {/* ENLACES LEGALES */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 text-[#e6b981] text-[11px] md:text-xs mb-8 font-medium tracking-wide uppercase">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          <span className="text-gray-700">·</span>
          <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          <span className="text-gray-700">·</span>
          <a href="#" className="hover:text-white transition-colors">Contacto</a>
        </div>

        {/* COPYRIGHT */}
        <div className="font-['Oswald',sans-serif] text-gray-300 text-xs md:text-sm uppercase tracking-widest font-bold">
          <span className="text-[#e6b981]">EXPANDE</span> <span className="text-gray-700 font-sans font-normal mx-1">·</span> © 2026 <span className="text-gray-700 font-sans font-normal mx-1">·</span> Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}