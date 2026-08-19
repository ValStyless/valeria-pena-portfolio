import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vale23996@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareSite = async () => {
    const shareData = {
      title: 'Valeria Peña | Portfolio',
      text: 'Conoce el portafolio profesional de Valeria Peña.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
      }
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('No se pudo compartir el sitio:', error);
      }
    }
  };

  const navLinks = [
    { href: '#about', labelKey: 'footer.nav_about' },
    { href: '#experience', labelKey: 'footer.nav_experience' },
    { href: '#tech-stack', labelKey: 'footer.nav_tech' },
    { href: '#analytics', labelKey: 'footer.nav_business' },
    { href: '#projects', labelKey: 'footer.nav_projects' },
    { href: '#contact', labelKey: 'footer.nav_contact' },
  ];

  return (
    <footer className="relative max-w-6xl mx-auto px-6 pb-12 pt-6 font-poppins select-none">
      
      {/* GLOW ATMOSFÉRICO IDÉNTICO AL NAV */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-vp-teal/10 dark:bg-vp-lime/5 blur-[120px] pointer-events-none -z-10" />

      {/* CONTENEDOR FLOTANTE STYLE NAV (GLASSMORPHISM BENTO) */}
      <div className="p-8 sm:p-10 rounded-3xl border-2 border-vp-blue/15 dark:border-vp-lime/20 bg-white/80 dark:bg-vp-blue/30 backdrop-blur-xl shadow-xl space-y-10">
        
{/* FILA PRINCIPAL */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

  {/* COLUMNA 1: MARCA & IDENTIDAD */}
  <div className="md:col-span-5 space-y-4">

    <div className="flex items-center justify-center w-full">

      <a
        href="#"
        className="group flex items-center justify-center"
      >

        {/* CONTENEDOR DEL LOGO DINÁMICO */}
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">

          {/* Logo Modo Claro */}
          <img
            src="/logo-c.png"
            alt="Valeria Peña Logo"
            className="absolute inset-0 w-full h-full object-contain object-center
                       dark:hidden group-hover:scale-110
                       transition-transform duration-300 drop-shadow-sm"
          />

          {/* Logo Modo Oscuro */}
          <img
            src="/logo-o.png"
            alt="Valeria Peña Logo"
            className="absolute inset-0 w-full h-full object-contain object-center
                       hidden dark:block group-hover:scale-110
                       transition-transform duration-300 drop-shadow-sm"
          />

        </div>

      </a>

    </div>

            <p className="text-xs sm:text-sm text-vp-blue/80 dark:text-white/80 leading-relaxed text-justify">
              {t('footer.bio')}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-vp-teal/30 dark:border-vp-lime/30 bg-vp-teal/10 dark:bg-vp-lime/10 font-mono text-[11px] font-bold text-vp-teal dark:text-vp-lime">
              <span>{t('footer.degree')}</span>
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN RÁPIDA ESTILO PILLS (3 COLUMNAS) */}
          <div className="md:col-span-3 space-y-3">
            <span className="inline-block font-mono text-xs font-bold text-vp-blue dark:text-vp-gold uppercase tracking-wider">
              // {t('footer.nav_title')}
            </span>

            <ul className="space-y-1.5 font-mono text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block py-1 text-vp-blue/70 dark:text-white/70 hover:text-vp-teal dark:hover:text-vp-lime hover:translate-x-1 transition-all"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: CONECTIVIDAD & REDES (4 COLUMNAS) */}
          <div className="md:col-span-4 space-y-3">
            <span className="inline-block font-mono text-xs font-bold text-vp-blue dark:text-vp-gold uppercase tracking-wider">
              // {t('footer.connect_title')}
            </span>

            <div className="space-y-2 font-mono text-xs">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/valeria-pe%C3%B1a-romero-354a96379/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-2xl border border-vp-blue/15 dark:border-vp-lime/20 bg-white/60 dark:bg-vp-amethyst/60 hover:border-blue-500 hover:bg-blue-500/10 transition-all shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 fill-current text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span className="font-bold text-vp-blue dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    LinkedIn
                  </span>
                </div>
                <span className="text-[10px] text-vp-blue/50 dark:text-vp-teal font-bold">CONNECT ↗</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ValStyless"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-2xl border border-vp-blue/15 dark:border-vp-lime/20 bg-white/60 dark:bg-vp-amethyst/60 hover:border-slate-800 dark:hover:border-white hover:bg-slate-900/10 dark:hover:bg-white/10 transition-all shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 fill-current text-slate-800 dark:text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                  <span className="font-bold text-vp-blue dark:text-white transition-colors">
                    GitHub
                  </span>
                </div>
                <span className="text-[10px] text-vp-blue/50 dark:text-vp-teal font-bold">@ValStyless</span>
              </a>

              {/* Email con función de COPIAR */}
              <div
                onClick={handleCopyEmail}
                className="group flex items-center justify-between p-3 rounded-2xl border border-vp-blue/15 dark:border-vp-lime/20 bg-white/60 dark:bg-vp-amethyst/60 hover:border-vp-gold hover:bg-vp-gold/10 transition-all shadow-sm cursor-pointer"
              >
                <div className="flex items-center gap-2.5 truncate mr-2">
                  <svg className="w-4 h-4 stroke-current fill-none text-vp-gold shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22,6 12,13 2,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-bold text-vp-blue dark:text-white truncate group-hover:text-vp-gold transition-colors">
                    vale23996@gmail.com
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold text-vp-gold bg-vp-gold/10 px-2 py-0.5 rounded border border-vp-gold/30 shrink-0">
                  {copied ? '¡COPIADO!' : 'COPIAR'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BARRA INFERIOR DE CRÉDITOS Y BACK TO TOP */}
        <div className="pt-6 border-t border-vp-blue/10 dark:border-vp-lime/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-vp-blue/70 dark:text-vp-teal">
          <p className="text-center sm:text-left">{t('footer.rights')}</p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShareSite}
              className="px-3.5 py-1.5 rounded-full border border-vp-blue/15 dark:border-vp-lime/20 bg-white/60 dark:bg-vp-amethyst/60 hover:border-vp-teal hover:text-vp-teal dark:hover:text-vp-lime transition-all font-bold flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="18" cy="5" r="3" strokeWidth="2" />
                <circle cx="6" cy="12" r="3" strokeWidth="2" />
                <circle cx="18" cy="19" r="3" strokeWidth="2" />
                <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>{shared ? t('footer.shared') : t('footer.share')}</span>
            </button>

            <a
              href="#"
              className="px-3.5 py-1.5 rounded-full border border-vp-blue/15 dark:border-vp-lime/20 bg-white/60 dark:bg-vp-amethyst/60 hover:border-vp-gold hover:text-vp-gold transition-all font-bold flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <span>↑ BACK_TO_TOP</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}