import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white py-20 px-6 border-t border-gray-900 overflow-hidden font-sans -mt-15">
      
      {/* Brillo sutil de fondo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-[#e6b981] opacity-[0.02] blur-[150px] rounded-t-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >

        {/* LOGO CENTRADO */}
        {/* LOGO CENTRADO */}
        <div className="flex justify-center items-center mb-2 w-full">
          <img 
            src="/images/expande-footer.webp"
            alt="Expande" 
            className="h-20 md:h-28 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 mix-blend-screen"
            // Esta propiedad es la que hace el desvanecido en los bordes
            style={{
              maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
            }}
          />
        </div>

        {/* GRID DE 3 COLUMNAS */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left mb-16">

          {/* Columna 1: Evento */}
          <div className="space-y-4">
            <p className="text-[#e6b981] uppercase tracking-[0.2em] text-[10px] font-bold">
              Evento
            </p>
            <div className="space-y-2 text-gray-300 text-sm font-light">
              <p>29 de Noviembre, 2026</p>
              <p>Paipa – Boyacá, Colombia</p>
              <p className="text-gray-500 italic mt-2">Cupos estrictamente limitados</p>
            </div>
          </div>

          {/* Columna 2: Contacto & Redes (Iconos SVG) */}
          <div className="space-y-4 flex flex-col items-center text-center">
            <p className="text-[#e6b981] uppercase tracking-[0.2em] text-[10px] font-bold">
              Conecta con Danna
            </p>
            <div className="flex gap-6 mt-4">
              
              {/* Instagram */}
              <a href="https://www.instagram.com/dannaneira17" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#e6b981] hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              
              {/* TikTok */}
              <a href="https://www.tiktok.com/@dannaneira17" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#e6b981] hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
              </a>
              
              {/* WhatsApp (danna) */}
              <a href="https://wa.me/573214633040" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#e6b981] hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Columna 3: Mensaje */}
          <div className="space-y-4 md:text-right">
            <p className="text-[#e6b981] uppercase tracking-[0.2em] text-[10px] font-bold">
              El Punto de Partida
            </p>
            <p className="font-['Oswald',sans-serif] text-xl md:text-2xl text-gray-200 leading-snug tracking-wide">
              Tu vida no se expande <br/> hasta que tú te expandes.
            </p>
          </div>

        </div>

        {/* LEGALES (Disclaimer FB y Resultados) */}
        <div className="mt-16 pt-8 border-t border-gray-900/80 text-center text-[10px] text-gray-600 leading-relaxed max-w-5xl mx-auto space-y-4">
          <p>
            EXPANDE es una experiencia educativa de desarrollo personal, conciencia y
            crecimiento personal y profesional. No promete ni garantiza resultados económicos,
            personales, emocionales o relacionales específicos; los resultados dependen de cada
            persona, su nivel de participación, aplicación, compromiso y circunstancias. Los
            testimonios, cuando se presenten, corresponden a experiencias individuales y no
            representan resultados típicos ni garantizados. El contenido, herramientas y marcos
            presentados durante la experiencia tienen fines educativos y de desarrollo personal y
            no sustituyen atención médica, psicológica, financiera, legal ni ningún otro servicio
            profesional especializado. Las referencias al Mapa de los Niveles de Conciencia de
            David R. Hawkins se presentan como un marco conceptual y educativo, no como una
            afirmación científica.
          </p>

          <p className="pt-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} EXPANDE — Danna Neira. Todos los derechos reservados.
          </p>
        </div>

      </motion.div>
    </footer>
  );
}