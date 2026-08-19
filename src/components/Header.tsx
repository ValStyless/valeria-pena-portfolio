import { useLanguage } from '../hooks/useLanguage';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const { t, currentLanguage, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#F8F9FA]/85 dark:bg-vp-amethyst/85 border-b border-vp-blue/10 dark:border-vp-lime/15 transition-all duration-500 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
        
        {/* LOGO SIN FONDO CON TAMAÑO AJUSTADO */}
        <a href="#" className="flex items-center group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
            <img
              src={darkMode ? '/logo-o.png' : '/logo-c.png'}
              alt="Valeria Peña Logo"
              className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </a>

        {/* NAVEGACIÓN EN CÁPSULA FLOTANTE */}
        <nav className="hidden lg:flex items-center px-6 py-2 rounded-full border border-vp-blue/15 dark:border-vp-lime/20 bg-white/60 dark:bg-vp-blue/40 backdrop-blur-md space-x-6 text-xs xl:text-sm font-poppins font-medium tracking-wide shadow-inner">
          {[
            { href: '#about', label: t('nav.about') },
            { href: '#tech-stack', label: t('nav.tech_stack') },
            { href: '#projects', label: t('nav.projects') },
            { href: '#experience', label: t('nav.experience') },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative text-vp-blue/80 dark:text-vp-lime/90 hover:text-vp-gold dark:hover:text-vp-gold transition-colors duration-300 group py-1"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-vp-teal via-vp-gold to-vp-lime rounded-full transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CONTROLES DE IDIOMA, TEMA Y CONTACTO */}
        <div className="flex items-center space-x-3">
          
          {/* Selector de Idioma */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-vp-blue/20 dark:border-vp-lime/30 text-xs font-mono font-bold text-vp-blue dark:text-vp-lime hover:bg-vp-blue/10 dark:hover:bg-vp-lime/10 transition-all active:scale-95"
            title="Switch Language"
          >
            <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24">
              <path d="M5 8l6 6M4 14l6-6 2 2M2 5h12M7 2v3M11 19l4-9 4 9M13 17h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{currentLanguage === 'es' ? 'EN' : 'ES'}</span>
          </button>

          {/* Selector de Tema */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg border border-vp-blue/20 dark:border-vp-lime/30 text-vp-blue dark:text-vp-lime hover:bg-vp-blue/10 dark:hover:bg-vp-lime/10 transition-all active:scale-95"
            title="Toggle Theme"
          >
            {darkMode ? (
              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" strokeWidth="2" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>

          {/* Botón CTA Contacto */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 bg-vp-amethyst dark:bg-vp-lime text-vp-lime dark:text-vp-amethyst font-poppins text-xs xl:text-sm font-bold rounded-lg border border-vp-gold hover:bg-vp-gold dark:hover:bg-vp-gold hover:text-vp-amethyst dark:hover:text-vp-amethyst transition-all duration-300 shadow-md active:scale-95"
          >
            <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{t('nav.cta_contact')}</span>
          </a>

        </div>

      </div>
    </header>
  );
}