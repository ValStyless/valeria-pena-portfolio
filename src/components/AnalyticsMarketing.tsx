import { useLanguage } from '../hooks/useLanguage';

export default function AnalyticsMarketing() {
  const { t } = useLanguage();

  return (
    <section id="analytics" className="relative max-w-6xl mx-auto px-6 py-20 border-t border-vp-blue/15 dark:border-vp-lime/15 transition-colors duration-300 select-none">
      
      {/* GLOWS ATMOSFÉRICOS DE MARCA */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-vp-teal/10 dark:bg-vp-lime/5 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-vp-gold/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* ENCABEZADO PRINCIPAL HERO */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-vp-teal/30 dark:border-vp-gold/30 bg-vp-teal/5 dark:bg-vp-gold/10 font-mono text-xs font-bold text-vp-blue dark:text-vp-gold uppercase tracking-widest shadow-sm">
          <span className="w-2 h-2 rounded-full bg-vp-teal dark:bg-vp-lime animate-ping" />
          <span>{t('business.section_label')}</span>
        </div>

        <h2 className="font-bebas text-4xl sm:text-6xl tracking-wide text-vp-blue dark:text-vp-lime uppercase leading-none">
          {t('business.title')}
        </h2>

        <p className="font-poppins text-xs sm:text-sm text-vp-blue/80 dark:text-white/80 max-w-2xl mx-auto leading-relaxed">
          {t('business.subtitle')}
        </p>
      </div>

      {/* REJILLA BENTO SHOWCASE (4 TARJETAS CON ELEVACIÓN & GLOW) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* BLOQUE 01: PASARELAS DE PAGO & CONECTIVIDAD */}
        <div className="relative group p-8 rounded-3xl border border-vp-blue/15 dark:border-vp-lime/20 border-t-4 border-t-vp-teal bg-white/90 dark:bg-vp-blue/30 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 dark:hover:border-vp-teal dark:hover:shadow-[0_10px_30px_rgba(45,212,191,0.12)] transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-vp-teal/10 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

          <div className="space-y-6 relative z-10">
            {/* Cabecera */}
            <div className="flex items-center justify-between pb-4 border-b border-vp-blue/10 dark:border-vp-lime/10">
              <span className="font-mono text-xs font-bold text-vp-teal uppercase tracking-wider flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-vp-teal/10 text-vp-teal shadow-inner">
                  <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24">
                    <rect x="1" y="4" width="22" height="16" rx="2" strokeWidth="2" />
                    <line x1="1" y1="10" x2="23" y2="10" strokeWidth="2" />
                  </svg>
                </span>
                {t('business.payments_title')}
              </span>
              <span className="font-mono text-[10px] text-vp-teal font-bold px-3 py-1 rounded-full bg-vp-teal/10 border border-vp-teal/30">
                01 / GATEWAY
              </span>
            </div>

            {/* Lista de Puntos */}
            <div className="space-y-3 font-poppins text-xs sm:text-sm text-vp-blue/90 dark:text-white/90 leading-relaxed">
              <div className="flex items-start gap-3 text-justify">
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-vp-teal/10 text-vp-teal border border-vp-teal/30 mt-0.5 shrink-0">
                  01
                </span>
                <span>{t('business.payments_p1')}</span>
              </div>
              <div className="flex items-start gap-3 text-justify">
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-vp-teal/10 text-vp-teal border border-vp-teal/30 mt-0.5 shrink-0">
                  02
                </span>
                <span>{t('business.payments_p2')}</span>
              </div>
            </div>
          </div>

          {/* Badges de Tecnologías */}
          <div className="relative z-10 pt-4 border-t border-vp-blue/10 dark:border-vp-lime/10 flex flex-wrap gap-2 font-mono text-[11px]">
            {['Stripe API', 'REST Webhooks', 'Third-Party Services'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-slate-100 dark:bg-vp-amethyst/80 border border-slate-200 dark:border-vp-lime/20 text-vp-blue dark:text-vp-lime font-medium hover:border-vp-teal transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BLOQUE 02: MARKETING DIGITAL & SEO */}
        <div className="relative group p-8 rounded-3xl border border-vp-blue/15 dark:border-vp-lime/20 border-t-4 border-t-vp-gold bg-white/90 dark:bg-vp-blue/30 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 dark:hover:border-vp-gold dark:hover:shadow-[0_10px_30px_rgba(245,158,11,0.12)] transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-vp-gold/10 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

          <div className="space-y-6 relative z-10">
            {/* Cabecera */}
            <div className="flex items-center justify-between pb-4 border-b border-vp-blue/10 dark:border-vp-lime/10">
              <span className="font-mono text-xs font-bold text-vp-gold uppercase tracking-wider flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-vp-gold/10 text-vp-gold shadow-inner">
                  <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24">
                    <path d="M23 6l-9.5 9.5-5-5L1 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="17 6 23 6 23 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {t('business.marketing_title')}
              </span>
              <span className="font-mono text-[10px] text-vp-gold font-bold px-3 py-1 rounded-full bg-vp-gold/10 border border-vp-gold/30">
                02 / GROWTH
              </span>
            </div>

            {/* Lista de Puntos */}
            <div className="space-y-3 font-poppins text-xs sm:text-sm text-vp-blue/90 dark:text-white/90 leading-relaxed">
              <div className="flex items-start gap-3 text-justify">
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-vp-gold/10 text-vp-gold border border-vp-gold/30 mt-0.5 shrink-0">
                  01
                </span>
                <span>{t('business.marketing_p1')}</span>
              </div>
              <div className="flex items-start gap-3 text-justify">
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-vp-gold/10 text-vp-gold border border-vp-gold/30 mt-0.5 shrink-0">
                  02
                </span>
                <span>{t('business.marketing_p2')}</span>
              </div>
              <div className="flex items-start gap-3 text-justify">
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-vp-gold/10 text-vp-gold border border-vp-gold/30 mt-0.5 shrink-0">
                  03
                </span>
                <span>{t('business.marketing_p3')}</span>
              </div>
            </div>
          </div>

          {/* Badges de Tecnologías */}
          <div className="relative z-10 pt-4 border-t border-vp-blue/10 dark:border-vp-lime/10 flex flex-wrap gap-2 font-mono text-[11px]">
            {['Meta Ads', 'Google Ads', 'Open Graph', 'Brevo & Formspree'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-slate-100 dark:bg-vp-amethyst/80 border border-slate-200 dark:border-vp-lime/20 text-vp-blue dark:text-vp-gold font-medium hover:border-vp-gold transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BLOQUE 03: ANALÍTICA OPERATIVA Y GENERACIÓN DE REPORTES */}
        <div className="relative group p-8 rounded-3xl border border-vp-blue/15 dark:border-vp-lime/20 border-t-4 border-t-vp-lime bg-white/90 dark:bg-vp-blue/30 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 dark:hover:border-vp-lime dark:hover:shadow-[0_10px_30px_rgba(230,249,175,0.12)] transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-vp-lime/10 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

          <div className="space-y-6 relative z-10">
            {/* Cabecera */}
            <div className="flex items-center justify-between pb-4 border-b border-vp-blue/10 dark:border-vp-lime/10">
              <span className="font-mono text-xs font-bold text-vp-blue dark:text-vp-lime uppercase tracking-wider flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-vp-lime/15 text-vp-blue dark:text-vp-lime shadow-inner">
                  <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24">
                    <line x1="18" y1="20" x2="18" y2="10" strokeWidth="2" strokeLinecap="round" />
                    <line x1="12" y1="20" x2="12" y2="4" strokeWidth="2" strokeLinecap="round" />
                    <line x1="6" y1="20" x2="6" y2="14" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                {t('business.analytics_title')}
              </span>
              <span className="font-mono text-[10px] text-vp-blue dark:text-vp-lime font-bold px-3 py-1 rounded-full bg-vp-lime/15 border border-vp-lime/30">
                03 / INSIGHTS
              </span>
            </div>

            {/* Lista de Puntos */}
            <div className="space-y-3 font-poppins text-xs sm:text-sm text-vp-blue/90 dark:text-white/90 leading-relaxed">
              <div className="flex items-start gap-3 text-justify">
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-vp-lime/20 text-vp-blue dark:text-vp-lime border border-vp-lime/40 mt-0.5 shrink-0">
                  01
                </span>
                <span>{t('business.analytics_p1')}</span>
              </div>
              <div className="flex items-start gap-3 text-justify">
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-vp-lime/20 text-vp-blue dark:text-vp-lime border border-vp-lime/40 mt-0.5 shrink-0">
                  02
                </span>
                <span>{t('business.analytics_p2')}</span>
              </div>
            </div>
          </div>

          {/* Badges de Tecnologías */}
          <div className="relative z-10 pt-4 border-t border-vp-blue/10 dark:border-vp-lime/10 flex flex-wrap gap-2 font-mono text-[11px]">
            {['Data Processing', 'Word / Excel Export', 'KPI Metrics'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-slate-100 dark:bg-vp-amethyst/80 border border-slate-200 dark:border-vp-lime/20 text-vp-blue dark:text-vp-lime font-medium hover:border-vp-lime transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BLOQUE 04: DOCUMENTACIÓN TÉCNICA Y LEGAL */}
        <div className="relative group p-8 rounded-3xl border border-vp-blue/15 dark:border-vp-lime/20 border-t-4 border-t-vp-blue dark:border-t-vp-teal bg-white/90 dark:bg-vp-blue/30 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 dark:hover:border-vp-teal dark:hover:shadow-[0_10px_30px_rgba(45,212,191,0.12)] transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-vp-blue/10 dark:bg-vp-teal/10 rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

          <div className="space-y-6 relative z-10">
            {/* Cabecera */}
            <div className="flex items-center justify-between pb-4 border-b border-vp-blue/10 dark:border-vp-lime/10">
              <span className="font-mono text-xs font-bold text-vp-blue dark:text-vp-teal uppercase tracking-wider flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-vp-blue/10 dark:bg-vp-teal/10 text-vp-blue dark:text-vp-teal shadow-inner">
                  <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" />
                    <polyline points="14 2 14 8 20 8" strokeWidth="2" />
                  </svg>
                </span>
                {t('business.docs_title')}
              </span>
              <span className="font-mono text-[10px] text-vp-blue dark:text-vp-teal font-bold px-3 py-1 rounded-full bg-vp-blue/10 dark:bg-vp-teal/10 border border-vp-blue/20 dark:border-vp-teal/30">
                04 / COMPLIANCE
              </span>
            </div>

            {/* Lista de Puntos */}
            <div className="space-y-3 font-poppins text-xs sm:text-sm text-vp-blue/90 dark:text-white/90 leading-relaxed">
              <div className="flex items-start gap-3 text-justify">
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-vp-blue/10 dark:bg-vp-teal/10 text-vp-blue dark:text-vp-teal border border-vp-blue/20 dark:border-vp-teal/30 mt-0.5 shrink-0">
                  01
                </span>
                <span>{t('business.docs_p1')}</span>
              </div>
            </div>
          </div>

          {/* Badges de Tecnologías */}
          <div className="relative z-10 pt-4 border-t border-vp-blue/10 dark:border-vp-lime/10 flex flex-wrap gap-2 font-mono text-[11px]">
            {['User Manuals', 'Privacy Policy', 'Terms & Conditions'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-slate-100 dark:bg-vp-amethyst/80 border border-slate-200 dark:border-vp-lime/20 text-vp-blue dark:text-vp-lime font-medium hover:border-vp-teal transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}