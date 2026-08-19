import { useState, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';

export default function ExperienceAlbeh() {
  const { t } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative max-w-6xl mx-auto px-6 py-20 border-t border-vp-blue/15 dark:border-vp-lime/15 transition-colors duration-300 select-none overflow-hidden"
    >
      
      {/* SPOTLIGHT INTERACTIVO QUE SIGUE AL CURSOR */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(45, 212, 191, 0.12), transparent 80%)`,
        }}
      />

      {/* Resplandor decorativo fijo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-vp-teal/10 dark:bg-vp-gold/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* ENCABEZADO DE LA SECCIÓN */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-vp-blue/20 dark:border-vp-gold/30 bg-vp-blue/5 dark:bg-vp-gold/10 font-mono text-xs font-bold text-vp-blue dark:text-vp-gold uppercase tracking-widest shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-vp-teal dark:bg-vp-lime animate-ping" />
          <span>{t('experience_albeh.section_label')}</span>
        </div>
        <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wide text-vp-blue dark:text-vp-lime uppercase leading-tight max-w-3xl">
          {t('experience_albeh.title')}
        </h2>
      </div>

      {/* BENTO GRID LAYOUT INTERACTIVO */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

        {/* 1. HERO LAUNCHPAD CARD INTERACTIVA (Al hacer clic redirige a Albeh GE) */}
        <a 
          href="https://albehge.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-12 group p-6 sm:p-10 rounded-[2rem] border-2 border-vp-blue/15 dark:border-vp-lime/20 hover:border-vp-gold dark:hover:border-vp-lime bg-white/90 dark:bg-vp-blue/30 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12 overflow-hidden relative cursor-pointer"
        >
          {/* Luz de radar en la esquina */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-vp-gold/10 dark:bg-vp-lime/10 rounded-bl-full pointer-events-none transition-transform duration-700 group-hover:scale-150" />

          {/* Badge Flotante "Click to Launch" */}
          <div className="absolute top-4 right-6 font-mono text-[10px] font-bold text-vp-gold dark:text-vp-lime bg-vp-blue/5 dark:bg-vp-amethyst px-3 py-1 rounded-full border border-vp-gold/30 dark:border-vp-lime/30 group-hover:bg-vp-gold group-hover:text-vp-blue transition-colors hidden sm:flex items-center gap-1.5">
            <span>PORTAL_ACTIVE</span>
            <span className="group-hover:translate-x-1 transition-transform">↗</span>
          </div>

          {/* Bloque del Logo Albeh Principal con Fondo Blanco Puro */}
          <div className="shrink-0 flex flex-col items-center justify-center p-8 rounded-3xl bg-white border-2 border-slate-200 dark:border-vp-gold/40 shadow-xl w-full lg:w-64 h-full min-h-[200px] group-hover:scale-105 group-hover:rotate-1 transition-all duration-500 z-10 relative">
            <img 
              src="/logo-albeh.png" 
              alt="Albeh Global Logo" 
              className="w-32 h-32 object-contain drop-shadow-md mb-3"
            />
            <span className="font-bebas text-2xl tracking-widest text-vp-blue text-center">
              ALBEH GLOBAL
            </span>
            <span className="font-mono text-[10px] text-vp-teal font-bold uppercase mt-1">
              // Enterprises
            </span>
          </div>

          {/* Texto Descriptivo */}
          <div className="flex-1 space-y-5 relative z-10">
            <h3 className="font-mono text-sm font-bold text-vp-teal dark:text-vp-lime uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-vp-teal dark:bg-vp-lime animate-pulse" />
              {t('experience_albeh.subtitle')}
            </h3>
            
            <p className="font-poppins text-lg sm:text-xl font-bold text-vp-blue dark:text-white leading-relaxed text-justify group-hover:text-vp-teal dark:group-hover:text-vp-gold transition-colors">
              {t('experience_albeh.intro_p1')}
            </p>
            
            <p className="font-poppins text-sm sm:text-base text-vp-blue/80 dark:text-white/80 leading-relaxed text-justify border-l-4 border-vp-gold/50 pl-4 py-1">
              {t('experience_albeh.intro_p2')}
            </p>
          </div>
        </a>

        {/* 2. PILAR 1: MARKETING */}
        <div className="md:col-span-12 lg:col-span-4 p-8 rounded-3xl border border-vp-blue/15 dark:border-vp-lime/20 border-t-4 border-t-vp-gold bg-white/90 dark:bg-vp-blue/20 backdrop-blur-md shadow-sm hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-[0_10px_30px_rgba(245,158,11,0.12)] transition-all duration-300 flex flex-col space-y-6 relative overflow-hidden group">
          <div className="flex items-center gap-3 relative z-10">
            <div className="p-3 rounded-xl bg-vp-gold/10 text-vp-gold border border-vp-gold/20">
              <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24">
                <path d="M23 6l-9.5 9.5-5-5L1 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="17 6 23 6 23 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h4 className="font-mono text-sm font-bold text-vp-gold uppercase tracking-wider">
              {t('experience_albeh.marketing_title')}
            </h4>
          </div>

          <p className="font-poppins text-sm text-vp-blue/85 dark:text-white/85 leading-relaxed text-justify relative z-10 flex-1">
            {t('experience_albeh.marketing_desc')}
          </p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-vp-blue/10 dark:border-vp-lime/10 relative z-10 font-mono text-[10px] font-bold">
            <span className="px-2.5 py-1 rounded-md bg-vp-gold/10 text-vp-blue dark:text-vp-gold border border-vp-gold/30">Meta Ads</span>
            <span className="px-2.5 py-1 rounded-md bg-vp-gold/10 text-vp-blue dark:text-vp-gold border border-vp-gold/30">Google Ads</span>
          </div>
        </div>

        {/* 3. PILAR 2: ANALÍTICA */}
        <div className="md:col-span-12 lg:col-span-4 p-8 rounded-3xl border border-vp-blue/15 dark:border-vp-lime/20 border-t-4 border-t-vp-teal bg-white/90 dark:bg-vp-blue/20 backdrop-blur-md shadow-sm hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-[0_10px_30px_rgba(45,212,191,0.12)] transition-all duration-300 flex flex-col space-y-6 relative overflow-hidden group">
          <div className="flex items-center gap-3 relative z-10">
            <div className="p-3 rounded-xl bg-vp-teal/10 text-vp-teal border border-vp-teal/20">
              <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24">
                <line x1="18" y1="20" x2="18" y2="10" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="20" x2="12" y2="4" strokeWidth="2" strokeLinecap="round" />
                <line x1="6" y1="20" x2="6" y2="14" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h4 className="font-mono text-sm font-bold text-vp-teal uppercase tracking-wider">
              {t('experience_albeh.analytics_title')}
            </h4>
          </div>

          <p className="font-poppins text-sm text-vp-blue/85 dark:text-white/85 leading-relaxed text-justify relative z-10 flex-1">
            {t('experience_albeh.analytics_desc')}
          </p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-vp-blue/10 dark:border-vp-lime/10 relative z-10 font-mono text-[10px] font-bold">
            <span className="px-2.5 py-1 rounded-md bg-vp-teal/10 text-vp-blue dark:text-vp-teal border border-vp-teal/30">Data Reports</span>
            <span className="px-2.5 py-1 rounded-md bg-vp-teal/10 text-vp-blue dark:text-vp-teal border border-vp-teal/30">Word/Excel</span>
          </div>
        </div>

        {/* 4. PILAR 3: ECOSISTEMA */}
        <div className="md:col-span-12 lg:col-span-4 p-8 rounded-3xl border border-vp-blue/15 dark:border-vp-lime/20 border-t-4 border-t-vp-lime bg-white/90 dark:bg-vp-blue/20 backdrop-blur-md shadow-sm hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-[0_10px_30px_rgba(230,249,175,0.12)] transition-all duration-300 flex flex-col space-y-6 relative overflow-hidden group">
          <div className="flex items-center gap-3 relative z-10">
            <div className="p-3 rounded-xl bg-vp-lime/15 text-vp-blue dark:text-vp-lime border border-vp-lime/30">
              <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" />
                <circle cx="9" cy="7" r="4" strokeWidth="2" />
              </svg>
            </div>
            <h4 className="font-mono text-sm font-bold text-vp-blue dark:text-vp-lime uppercase tracking-wider">
              {t('experience_albeh.workplace_title')}
            </h4>
          </div>

          <p className="font-poppins text-sm text-vp-blue/85 dark:text-white/85 leading-relaxed text-justify relative z-10 flex-1">
            {t('experience_albeh.workplace_desc')}
          </p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-vp-blue/10 dark:border-vp-lime/10 relative z-10 font-mono text-[10px] font-bold">
            <span className="px-2.5 py-1 rounded-md bg-vp-lime/15 text-vp-blue dark:text-vp-lime border border-vp-lime/40">Soft Skills</span>
            <span className="px-2.5 py-1 rounded-md bg-vp-lime/15 text-vp-blue dark:text-vp-lime border border-vp-lime/40">Agile Sync</span>
          </div>
        </div>

        {/* 5. RECOMENDACIÓN Y EL BOTÓN "QUANTUM ORBIT PORTAL" */}
        <div className="md:col-span-12 p-8 sm:p-10 rounded-[2rem] border-2 border-vp-gold/40 bg-white/70 dark:bg-vp-amethyst/90 backdrop-blur-xl shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative overflow-hidden mt-2">
          
          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-vp-gold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-vp-gold animate-ping" />
              <span>// RECOMENDACIÓN_PROFESIONAL</span>
            </div>

            <blockquote className="font-lora italic text-base sm:text-lg text-vp-blue dark:text-white/90 leading-relaxed text-justify border-l-2 border-vp-gold/40 pl-4">
              "{t('experience_albeh.recommendation')}"
            </blockquote>
          </div>

          {/* BOTÓN "QUANTUM ORBIT PORTAL" (CON ÓRBITA GIRATORIA Y MÁXIMO CONTESTE) */}
          <a
            href="https://albehge.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group shrink-0 inline-flex items-center justify-between gap-4 p-2 pr-6 rounded-full transition-all duration-500 active:scale-95 z-20
            /* Tema Claro: Fondo Azul Marino con sombra dorada */
            bg-vp-blue text-white shadow-xl hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]
            /* Tema Oscuro: Fondo Cristal Amethyst con borde neón verde lima */
            dark:bg-vp-amethyst dark:border-2 dark:border-vp-lime dark:text-vp-lime dark:hover:shadow-[0_0_35px_rgba(230,249,175,0.4)] dark:hover:bg-vp-blue"
          >
            {/* Anillo de Órbita Giratoria (Quantum Ring) */}
            <div className="relative w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-vp-gold animate-[spin_6s_linear_infinite] group-hover:border-vp-lime pointer-events-none" />
              
              {/* Isotipo con protección blanca total */}
              <img 
                src="/logo-albeh.png" 
                alt="Albeh Quantum Icon" 
                className="w-7 h-7 object-contain group-hover:rotate-[360deg] transition-transform duration-700"
              />
            </div>

            {/* Texto Interactivo */}
            <div className="flex flex-col text-left font-mono">
              <span className="text-[9px] uppercase tracking-widest text-vp-gold dark:text-vp-teal font-bold group-hover:text-vp-lime transition-colors">
                ENTERPRISE PORTAL
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-tight">
                {t('experience_albeh.visit_company')}
              </span>
            </div>

            {/* Icono de Disparo Holográfico */}
            <div className="w-8 h-8 rounded-full bg-white/10 dark:bg-vp-lime/20 flex items-center justify-center shrink-0 group-hover:translate-x-1.5 transition-transform">
              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="15 3 21 3 21 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="10" y1="14" x2="21" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

          </a>

        </div>

      </div>

    </section>
  );
}