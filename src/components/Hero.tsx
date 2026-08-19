import { useLanguage } from '../hooks/useLanguage';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-12 lg:py-20 overflow-hidden select-none">
      
      {/* GLOWS AMBIENTALES DE ALTO CONTRASTE */}
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-vp-gold/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-vp-lime/10 dark:bg-vp-teal/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        {/* COLUMNA IZQUIERDA: INFORMACIÓN Y ACCIONES (7 COLUMNAS) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">

          {/* TITULAR Y SUBTÍTULO */}
          <div className="space-y-2 text-left w-full">
            <h1 className="font-bebas text-6xl sm:text-7xl lg:text-8xl tracking-wider text-vp-blue dark:text-vp-lime leading-none">
              {t('hero.title')}
            </h1>
            <h2 className="font-lora italic text-xl sm:text-2xl text-vp-gold font-medium">
              {t('hero.subtitle')}
            </h2>
          </div>

          {/* BIO JUSTIFICADA */}
          <p className="font-poppins text-base sm:text-lg leading-relaxed text-vp-blue/85 dark:text-white/85 text-justify w-full">
            {t('hero.bio')}
          </p>

          {/* BOTONES DE ACCIÓN */}
          <div className="pt-2 flex flex-wrap gap-4 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-vp-gold text-vp-amethyst font-poppins font-bold text-sm rounded-2xl shadow-lg hover:shadow-2xl hover:bg-vp-lime hover:text-vp-blue transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 border border-vp-gold/40 flex-1 sm:flex-none"
            >
              <span>{t('hero.btn_contact')}</span>
              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a 
              href="/CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-vp-blue/20 dark:border-vp-lime/30 font-poppins font-bold text-sm rounded-2xl text-vp-blue dark:text-vp-lime hover:border-vp-gold hover:bg-vp-blue/5 dark:hover:bg-vp-amethyst/50 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5 shadow-sm flex-1 sm:flex-none"
            >
              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="14 2 14 8 20 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{t('hero.btn_cv')}</span>
            </a>
          </div>

        </div>

        {/* COLUMNA DERECHA: PORTRETO PROMINENTE DE ALTA DEFINICIÓN (5 COLUMNAS) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group w-full max-w-sm sm:max-w-md">
            
            {/* MARCO EXTERIOR CON CRISTAL BANDERIZADO */}
            <div className="p-3 sm:p-4 rounded-[2.5rem] border-2 border-vp-gold/40 bg-white/70 dark:bg-vp-amethyst/80 backdrop-blur-2xl shadow-2xl relative transition-transform duration-500 hover:scale-[1.01]">
              
              {/* BADGE SUPERIOR DE DISPONIBILIDAD */}
              <div className="absolute top-6 right-6 z-20 px-3.5 py-1.5 rounded-full bg-vp-blue/90 dark:bg-vp-amethyst/90 border border-vp-lime/50 text-vp-lime font-mono text-[10px] font-bold shadow-xl flex items-center gap-2 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-vp-lime animate-pulse" />
                <span>ONLINE // READY</span>
              </div>

              {/* CONTENEDOR PRINCIPAL DE LA FOTO (ALTO CONTRASTE Y LUZ NATURAL) */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-inner">
                <img
                  src="/profile.jpg"
                  alt="Valeria Peña Romero"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback si la imagen profile.jpg no se encuentra aún
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                  }}
                />

                {/* SUTIL DEGRADADO EN LA BASE PARA LECTURA DEL TEXTO */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-vp-blue/90 via-vp-blue/40 to-transparent pointer-events-none" />

                {/* OVERLAY DE DATOS DE LA DESARROLLADORA */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between font-mono">
                  <div className="space-y-0.5">
                    <p className="font-bold text-white text-sm sm:text-base tracking-wider uppercase drop-shadow-sm">
                      Valeria Peña
                    </p>
                    <p className="text-[11px] text-vp-gold font-bold">
                      Full-Stack Developer
                    </p>
                  </div>

                  <span className="px-2.5 py-1 rounded-lg bg-vp-gold/90 text-vp-amethyst font-bold text-[10px] shadow-md border border-vp-gold">
                    UTVT 2026
                  </span>
                </div>
              </div>

              {/* BADGE INFERIOR DE REDES RÁPIDAS */}
              <div className="mt-3 px-3 py-2 rounded-2xl bg-vp-blue/5 dark:bg-vp-blue/40 border border-vp-blue/10 dark:border-vp-lime/20 flex items-center justify-between font-mono text-[11px]">
                <span className="text-vp-teal dark:text-vp-lime font-bold">SOFTWARE_DEV</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}