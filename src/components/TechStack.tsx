import { useLanguage } from '../hooks/useLanguage';

interface TechCategory {
  titleKey: string;
  icon: string;
  accentColorLight: string;
  accentColorDark: string;
  badgeBgLight: string;
  badgeBgDark: string;
  borderColor: string;
  items: string[];
}

export default function TechStack() {
  const { t } = useLanguage();

  const categories: TechCategory[] = [
    {
      titleKey: 'tech.frontend',
      icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
      accentColorLight: 'text-teal-700',
      accentColorDark: 'dark:text-vp-lime',
      badgeBgLight: 'bg-teal-50 text-teal-950 border-teal-200/80',
      badgeBgDark: 'dark:bg-vp-amethyst/80 dark:text-vp-lime dark:border-vp-lime/30',
      borderColor: 'border-teal-200 dark:border-vp-lime/30',
      items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
    },
    {
      titleKey: 'tech.backend',
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2',
      accentColorLight: 'text-amber-800',
      accentColorDark: 'dark:text-vp-gold',
      badgeBgLight: 'bg-amber-50 text-amber-950 border-amber-200/80',
      badgeBgDark: 'dark:bg-vp-amethyst/80 dark:text-vp-gold dark:border-vp-gold/30',
      borderColor: 'border-amber-200 dark:border-vp-gold/30',
      items: ['Node.js', 'NestJS', 'PHP', 'XAMPP', 'FileZilla', 'Adminer', 'Túneles de Red & Servidor'],
    },
    {
      titleKey: 'tech.databases',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      accentColorLight: 'text-emerald-800',
      accentColorDark: 'dark:text-vp-lime',
      badgeBgLight: 'bg-emerald-50 text-emerald-950 border-emerald-200/80',
      badgeBgDark: 'dark:bg-vp-amethyst/80 dark:text-vp-lime dark:border-vp-lime/30',
      borderColor: 'border-emerald-200 dark:border-vp-lime/30',
      items: ['MySQL', 'MariaDB', 'PostgreSQL', 'SQLite', 'TypeORM'],
    },
    {
      titleKey: 'tech.mobile',
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
      accentColorLight: 'text-indigo-800',
      accentColorDark: 'dark:text-vp-teal',
      badgeBgLight: 'bg-indigo-50 text-indigo-950 border-indigo-200/80',
      badgeBgDark: 'dark:bg-vp-amethyst/80 dark:text-vp-teal dark:border-vp-teal/30',
      borderColor: 'border-indigo-200 dark:border-vp-teal/30',
      items: ['React Native', 'Expo', 'Google Play Store Deploy'],
    },
    {
      titleKey: 'tech.apis_tools',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      accentColorLight: 'text-slate-900',
      accentColorDark: 'dark:text-vp-gold',
      badgeBgLight: 'bg-slate-100 text-slate-900 border-slate-300',
      badgeBgDark: 'dark:bg-vp-amethyst/80 dark:text-vp-gold dark:border-vp-gold/30',
      borderColor: 'border-slate-300 dark:border-vp-gold/30',
      items: ['REST APIs', 'GraphQL', 'Git', 'GitHub', 'VS Code', 'Insomnia', 'npm'],
    },
    {
      titleKey: 'tech.ecosystem',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      accentColorLight: 'text-cyan-800',
      accentColorDark: 'dark:text-vp-lime',
      badgeBgLight: 'bg-cyan-50 text-cyan-950 border-cyan-200/80',
      badgeBgDark: 'dark:bg-vp-amethyst/80 dark:text-vp-lime dark:border-vp-lime/30',
      borderColor: 'border-cyan-200 dark:border-vp-lime/30',
      items: [
        'i18next / react-i18next',
        'Lucide React',
        'Expo Vector Icons',
        'Axios / Fetch API',
        'Formspree',
        'Stripe SDK / API',
        'Custom React Hooks',
      ],
    },
  ];

  return (
    <section id="tech-stack" className="relative max-w-6xl mx-auto px-6 py-16 border-t border-slate-200 dark:border-vp-lime/15 transition-colors duration-300">
      
      {/* GLOWS ATMOSFÉRICOS */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-vp-teal/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-vp-gold/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* ENCABEZADO PRINCIPAL */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 dark:border-vp-gold/30 bg-slate-100 dark:bg-vp-gold/10 font-mono text-xs font-bold text-slate-800 dark:text-vp-gold uppercase tracking-widest shadow-sm">
            <svg className="w-3.5 h-3.5 stroke-current fill-none text-slate-700 dark:text-vp-gold" viewBox="0 0 24 24">
              <polyline points="16 18 22 12 16 6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="8 6 2 12 8 18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{t('tech.section_label')}</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wide text-slate-900 dark:text-vp-lime uppercase leading-tight">
            {t('tech.title')}
          </h2>
        </div>

        <div className="shrink-0 font-mono text-xs text-slate-800 dark:text-vp-lime bg-white dark:bg-vp-blue/40 border border-slate-200 dark:border-vp-lime/30 px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-vp-gold dark:bg-vp-lime animate-pulse" />
          <span className="font-semibold">{t('tech.counter')}</span>
        </div>
      </div>

      {/* TARJETAS DE CATEGORÍAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((cat) => (
          <div
            key={cat.titleKey}
            className={`p-6 rounded-2xl border ${cat.borderColor} bg-white dark:bg-vp-blue/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden group`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-vp-lime/10">
              <span className={`font-mono text-xs font-bold ${cat.accentColorLight} ${cat.accentColorDark} uppercase tracking-wider flex items-center gap-2`}>
                <svg className="w-4 h-4 stroke-current fill-none shrink-0" viewBox="0 0 24 24">
                  <path d={cat.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t(cat.titleKey)}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-medium transition-transform group-hover:scale-[1.01] ${cat.badgeBgLight} ${cat.badgeBgDark}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* BLOQUE INTACTO: CHROME DEVTOOLS (AHORA CON TRADUCCIÓN) */}
      <div className="p-8 rounded-2xl border-2 border-vp-gold bg-vp-blue/5 dark:bg-vp-amethyst shadow-lg space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-vp-gold/30 pb-4 gap-3">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold text-vp-blue dark:text-vp-gold uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4 stroke-current fill-none text-vp-teal dark:text-vp-lime" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" strokeWidth="2" />
                <line x1="21.17" y1="8" x2="12" y2="8" strokeWidth="2" />
                <line x1="3.95" y1="6.06" x2="8.54" y2="14" strokeWidth="2" />
                <line x1="10.88" y1="21.94" x2="15.46" y2="14" strokeWidth="2" />
              </svg>
              {t('tech.extensions_title')}
            </span>
            <p className="font-poppins text-xs text-slate-700 dark:text-white/80">
              {t('tech.extensions_desc')}
            </p>
          </div>
          <span className="font-mono text-[11px] px-3 py-1 rounded-lg bg-vp-blue text-white dark:bg-vp-blue/60 dark:text-vp-lime border border-vp-gold/40 font-bold shrink-0">
            CHROME_DEVTOOLS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-poppins text-xs">
          
          <div className="p-4 rounded-xl bg-white dark:bg-vp-blue/30 border border-slate-200 dark:border-vp-lime/20 shadow-sm space-y-2">
            <span className="font-mono font-bold text-vp-blue dark:text-vp-gold block">
              {t('tech.json_debug_title')}
            </span>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['JSON Formatter', 'JSON Viewer Pro', 'Seven JSON Viewer', 'JSON Response Viewer'].map((ext) => (
                <span key={ext} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-vp-amethyst border border-slate-200 dark:border-vp-lime/30 text-slate-800 dark:text-vp-lime font-mono text-[10px]">
                  {ext}
                </span>
              ))}
            </div>
            <p className="text-slate-600 dark:text-white/70 text-[11px] pt-1 text-justify">
              {t('tech.json_debug_desc')}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-vp-blue/30 border border-slate-200 dark:border-vp-lime/20 shadow-sm space-y-2">
            <span className="font-mono font-bold text-vp-blue dark:text-vp-gold block">
              {t('tech.audit_seo_title')}
            </span>
            <div className="pt-1">
              <span className="px-2.5 py-0.5 rounded bg-slate-100 dark:bg-vp-amethyst border border-slate-200 dark:border-vp-lime/30 text-slate-800 dark:text-vp-lime font-mono text-[10px] font-semibold">
                Google Lighthouse
              </span>
            </div>
            <p className="text-slate-600 dark:text-white/70 text-[11px] pt-1 text-justify">
              {t('tech.audit_seo_desc')}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-vp-blue/30 border border-slate-200 dark:border-vp-lime/20 shadow-sm space-y-2">
            <span className="font-mono font-bold text-vp-blue dark:text-vp-gold block">
              {t('tech.social_preview_title')}
            </span>
            <div className="pt-1">
              <span className="px-2.5 py-0.5 rounded bg-slate-100 dark:bg-vp-amethyst border border-slate-200 dark:border-vp-lime/30 text-slate-800 dark:text-vp-lime font-mono text-[10px] font-semibold">
                Social Share Preview
              </span>
            </div>
            <p className="text-slate-600 dark:text-white/70 text-[11px] pt-1 text-justify">
              {t('tech.social_preview_desc')}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}