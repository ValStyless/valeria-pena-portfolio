import { useLanguage } from '../hooks/useLanguage';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative max-w-6xl mx-auto px-6 py-20 border-t border-vp-blue/15 dark:border-vp-lime/15 transition-colors duration-300 select-none">
      
      {/* GLOWS ATMOSFÉRICOS */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-vp-teal/10 dark:bg-vp-lime/5 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-vp-gold/10 dark:bg-vp-teal/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* ENCABEZADO Y WIDGET ACADÉMICO */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
        
        {/* Título */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-vp-blue/20 dark:border-vp-gold/30 bg-vp-blue/5 dark:bg-vp-gold/10 font-mono text-xs font-bold text-vp-blue dark:text-vp-gold uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-vp-teal dark:bg-vp-lime animate-pulse" />
            <span>{t('about.section_label')}</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wide text-vp-blue dark:text-vp-lime uppercase leading-tight">
            {t('about.title')}
          </h2>
        </div>

        {/* WIDGET DE TELEMETRÍA ACADÉMICA (HUD Style) */}
        <div className="shrink-0 relative group p-5 rounded-3xl border-2 border-vp-blue/15 dark:border-vp-lime/20 bg-white/90 dark:bg-vp-blue/30 backdrop-blur-xl shadow-lg hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(45,212,191,0.1)] transition-all duration-300 overflow-hidden min-w-[280px]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-vp-teal/10 dark:bg-vp-lime/10 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />
          
          <div className="relative z-10 space-y-3">
            <div className="flex items-center justify-between border-b border-vp-blue/10 dark:border-vp-lime/15 pb-2">
              <span className="font-mono text-xs font-bold text-vp-teal dark:text-vp-lime flex items-center gap-2">
                <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" strokeWidth="2" />
                </svg>
                STATUS ACADÉMICO
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-vp-blue/10 dark:bg-vp-lime/15 text-vp-blue dark:text-vp-lime border border-vp-blue/20 dark:border-vp-lime/40 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-vp-teal dark:bg-vp-lime animate-pulse" />
                EN CURSO
              </span>
            </div>

            <div className="space-y-1">
              <p className="font-poppins text-sm font-bold text-vp-blue dark:text-white">UTVT — Universidad Tecnológica</p>
              <div className="flex items-center justify-between">
                <p className="text-vp-blue/70 dark:text-vp-teal font-mono text-[11px] font-bold">TSU Software Multiplataforma</p>
                <span className="font-mono text-[10px] font-bold text-white bg-vp-blue dark:bg-vp-lime dark:text-vp-amethyst px-2 py-0.5 rounded-md">
                  6° SEMESTRE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DISPOSICIÓN BENTO: TRES TARJETAS DE ALTO IMPACTO */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        
        {/* MÓDULO 01: PERFIL & TRAYECTORIA (TEAL THEME) */}
        <div className="relative group p-8 rounded-3xl border border-vp-blue/15 dark:border-vp-lime/20 border-t-4 border-t-vp-teal bg-white/90 dark:bg-vp-blue/30 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 dark:hover:border-vp-teal dark:hover:shadow-[0_10px_30px_rgba(45,212,191,0.12)] transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-vp-teal/10 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

          <div className="space-y-5 relative z-10">
            <div className="flex items-center justify-between pb-4 border-b border-vp-blue/10 dark:border-vp-lime/15">
              <span className="font-mono text-xs font-bold text-vp-teal uppercase tracking-wider flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-vp-teal/10 text-vp-teal shadow-inner">
                  <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" />
                    <circle cx="12" cy="7" r="4" strokeWidth="2" />
                  </svg>
                </span>
                // 01. FORMACIÓN
              </span>
            </div>

            <p className="font-poppins text-xs sm:text-sm leading-relaxed text-vp-blue/85 dark:text-white/90 text-justify">
              {t('about.p1')}
            </p>
          </div>

          <div className="relative z-10 pt-4 border-t border-vp-blue/10 dark:border-vp-lime/15 flex items-center justify-between font-mono text-[11px] text-vp-blue/70 dark:text-vp-teal font-bold">
            <span>UTVT MULTIPLATAFORMA</span>
            <span className="text-vp-blue dark:text-vp-gold px-2.5 py-1 rounded-md bg-vp-blue/5 dark:bg-vp-gold/10 border border-vp-blue/10 dark:border-vp-gold/20">
              CLASS OF 2026
            </span>
          </div>
        </div>

        {/* MÓDULO 02: PASIÓN FRONTEND (GOLD THEME) */}
        <div className="relative group p-8 rounded-3xl border border-vp-blue/15 dark:border-vp-lime/20 border-t-4 border-t-vp-gold bg-white/90 dark:bg-vp-blue/30 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 dark:hover:border-vp-gold dark:hover:shadow-[0_10px_30px_rgba(245,158,11,0.12)] transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-vp-gold/10 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

          <div className="space-y-5 relative z-10">
            <div className="flex items-center justify-between pb-4 border-b border-vp-blue/10 dark:border-vp-lime/15">
              <span className="font-mono text-xs font-bold text-vp-gold uppercase tracking-wider flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-vp-gold/10 text-vp-gold shadow-inner">
                  <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
                    <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" />
                    <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" />
                  </svg>
                </span>
                // 02. FRONTEND
              </span>
              <span className="text-vp-blue dark:text-vp-gold text-[10px] font-mono border border-vp-gold/30 bg-vp-gold/15 dark:bg-vp-gold/10 px-2 py-0.5 rounded-full font-bold">
                UI / UX CREATIVE
              </span>
            </div>

            <div className="relative">
              <svg className="absolute -top-2 -left-2 w-6 h-6 text-vp-gold/20 fill-current" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="font-lora italic text-sm sm:text-base text-vp-blue dark:text-vp-gold font-medium leading-relaxed text-justify relative z-10 pl-4 border-l-2 border-vp-gold/40">
                {t('about.p2')}
              </blockquote>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-vp-blue/10 dark:border-vp-lime/15 flex items-center justify-between font-mono text-[11px] text-vp-blue/70 dark:text-vp-gold font-bold">
            <span>DISEÑO VISUAL</span>
            <span className="text-vp-blue dark:text-white px-2.5 py-1 rounded-md bg-vp-blue/5 dark:bg-white/10 border border-vp-blue/10 dark:border-white/20">
              PIXEL PERFECT
            </span>
          </div>
        </div>

        {/* MÓDULO 03: ESTRATEGIA & CRITERIO (LIME THEME) */}
        <div className="relative group p-8 rounded-3xl border border-vp-blue/15 dark:border-vp-lime/20 border-t-4 border-t-vp-blue dark:border-t-vp-lime bg-white/90 dark:bg-vp-blue/30 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 dark:hover:border-vp-lime dark:hover:shadow-[0_10px_30px_rgba(230,249,175,0.12)] transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-vp-blue/5 dark:bg-vp-lime/10 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

          <div className="space-y-5 relative z-10">
            <div className="flex items-center justify-between pb-4 border-b border-vp-blue/10 dark:border-vp-lime/15">
              <span className="font-mono text-xs font-bold text-vp-blue dark:text-vp-lime uppercase tracking-wider flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-vp-blue/10 dark:bg-vp-lime/10 text-vp-blue dark:text-vp-lime shadow-inner">
                  <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" strokeWidth="2" />
                    <polyline points="2 17 12 22 22 17" strokeWidth="2" />
                    <polyline points="2 12 12 17 22 12" strokeWidth="2" />
                  </svg>
                </span>
                // 03. METODOLOGÍA
              </span>
            </div>

            <p className="font-poppins text-xs sm:text-sm leading-relaxed text-vp-blue/85 dark:text-white/90 text-justify">
              {t('about.p3')}
            </p>
          </div>

          <div className="relative z-10 pt-4 border-t border-vp-blue/10 dark:border-vp-lime/15 flex items-center justify-between font-mono text-[11px] text-vp-blue/70 dark:text-vp-lime font-bold">
            <span>TRABAJO EN EQUIPO</span>
            <span className="text-vp-blue dark:text-vp-blue px-2.5 py-1 rounded-md bg-vp-teal/20 dark:bg-vp-lime border border-vp-teal/30 dark:border-vp-lime">
              SOLIDEZ TÉCNICA
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}