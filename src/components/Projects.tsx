import { useLanguage } from '../hooks/useLanguage';

interface Project {
  id: string;
  titleKey: string;
  tagKey: string;
  purposeKey: string;
  contributionKey: string;
  url: string;
  imageSrc: string;
  techs: string[];
}

export default function Projects() {
  const { t } = useLanguage();

  const projectList: Project[] = [
    {
      id: 'ana_sofia',
      titleKey: 'projects.ana_sofia.title',
      tagKey: 'projects.ana_sofia.tag',
      purposeKey: 'projects.ana_sofia.purpose',
      contributionKey: 'projects.ana_sofia.contribution',
      url: 'https://anasofi.albehge.com/',
      imageSrc: '/ana.png',
      techs: ['React / HTML5', 'Tailwind CSS', 'UI/UX Design', 'Responsive Web'],
    },
    {
      id: 'las_fresas',
      titleKey: 'projects.las_fresas.title',
      tagKey: 'projects.las_fresas.tag',
      purposeKey: 'projects.las_fresas.purpose',
      contributionKey: 'projects.las_fresas.contribution',
      url: 'https://lasfresas.mx/',
      imageSrc: '/lasfresas.png',
      techs: ['PHP', 'MariaDB', 'E-Commerce', 'Custom Orders', 'Admin Dashboard'],
    },
    {
      id: 'jackie',
      titleKey: 'projects.jackie.title',
      tagKey: 'projects.jackie.tag',
      purposeKey: 'projects.jackie.purpose',
      contributionKey: 'projects.jackie.contribution',
      url: 'https://jackie.mx/',
      imageSrc: '/jackie.png',
      techs: ['PHP', 'MySQL', 'PetMatch Module', 'Order Tracking', 'Real-Time Admin'],
    },
    {
      id: 'intamx',
      titleKey: 'projects.intamx.title',
      tagKey: 'projects.intamx.tag',
      purposeKey: 'projects.intamx.purpose',
      contributionKey: 'projects.intamx.contribution',
      url: 'https://intamx.com/',
      imageSrc: '/inta.png',
      techs: ['HTML5 / CSS3', 'Institutional UI', 'Content Layout', 'ALBEH Consulting'],
    },
  ];

  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-6 py-20 border-t border-vp-blue/15 dark:border-vp-lime/15 transition-colors duration-300">
      
      {/* Luz ambiental sutil */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-vp-teal/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* ENCABEZADO DE LA SECCIÓN */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-vp-blue/20 dark:border-vp-gold/30 bg-vp-blue/5 dark:bg-vp-gold/10 font-mono text-xs font-bold text-vp-blue dark:text-vp-gold uppercase tracking-widest shadow-sm">
            <svg className="w-3.5 h-3.5 stroke-current fill-none text-vp-teal dark:text-vp-gold" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h7" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>{t('projects.section_label')}</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wide text-vp-blue dark:text-vp-lime uppercase leading-tight">
            {t('projects.title')}
          </h2>
          <p className="font-poppins text-xs sm:text-sm text-vp-blue/80 dark:text-white/80">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="shrink-0 font-mono text-xs text-vp-blue dark:text-vp-lime bg-white dark:bg-vp-blue/40 border border-vp-blue/15 dark:border-vp-lime/30 px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-vp-teal animate-pulse" />
          <span className="font-semibold">4 LIVE_PLATFORMS</span>
        </div>
      </div>

      {/* REJILLA DE PROYECTOS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="p-7 rounded-2xl border border-vp-blue/15 dark:border-vp-lime/20 bg-white dark:bg-vp-blue/30 backdrop-blur-md shadow-sm hover:shadow-xl dark:hover:border-vp-gold transition-all duration-300 flex flex-col justify-between space-y-6 group"
          >
            {/* MOCKUP DE NAVEGADOR Y CAPTURA CLICABLE */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl border border-vp-blue/15 dark:border-vp-lime/20 bg-slate-100 dark:bg-vp-amethyst shadow-inner">
                
                {/* Barra superior del navegador */}
                <div className="flex items-center justify-between px-3.5 py-2 bg-slate-200/80 dark:bg-vp-blue/60 border-b border-vp-blue/10 dark:border-vp-lime/10 font-mono text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-vp-blue/60 dark:text-vp-teal truncate max-w-[200px] sm:max-w-[280px]">
                    {project.url}
                  </span>
                  <div className="w-8" />
                </div>

                {/* Contenedor de Imagen Clicable */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-video w-full flex items-center justify-center bg-slate-100 dark:bg-vp-blue/20 overflow-hidden cursor-pointer group/img block"
                >
                  <img
                    src={project.imageSrc}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />
                  
                  {/* Overlay indicativo al pasar el cursor */}
                  <div className="absolute inset-0 bg-vp-blue/40 dark:bg-vp-amethyst/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="font-mono text-xs font-bold text-white bg-vp-blue/90 dark:bg-vp-lime dark:text-vp-amethyst px-3.5 py-2 rounded-xl border border-white/20 dark:border-vp-lime shadow-xl flex items-center gap-2 transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                      <span>{t('projects.visit_site')}</span>
                      <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="15 3 21 3 21 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="10" y1="14" x2="21" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </a>

              </div>

              {/* Titular y Tag */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                <h3 className="font-mono text-lg font-bold text-vp-blue dark:text-vp-gold">
                  {t(project.titleKey)}
                </h3>
                <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-vp-teal/10 text-vp-teal border border-vp-teal/30">
                  {t(project.tagKey)}
                </span>
              </div>

              {/* Propósito y Aportación */}
              <div className="space-y-3 font-poppins text-xs sm:text-sm text-vp-blue/85 dark:text-white/90 leading-relaxed text-justify">
                <p>
                  <strong className="font-mono text-xs text-vp-teal dark:text-vp-lime block mb-1 uppercase">
                    {t('projects.purpose_label')}
                  </strong>
                  {t(project.purposeKey)}
                </p>
                <p>
                  <strong className="font-mono text-xs text-vp-gold block mb-1 uppercase">
                    {t('projects.contribution_label')}
                  </strong>
                  {t(project.contributionKey)}
                </p>
              </div>
            </div>

            {/* Badges Técnicos y Botón de Enlace Directo */}
            <div className="pt-4 border-t border-vp-blue/10 dark:border-vp-lime/10 space-y-4">
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded bg-vp-blue/5 dark:bg-vp-amethyst border border-vp-blue/15 dark:border-vp-lime/20 text-vp-blue dark:text-vp-lime font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold text-vp-blue dark:text-vp-lime bg-vp-blue/5 dark:bg-vp-lime/10 border border-vp-blue/20 dark:border-vp-lime/30 hover:bg-vp-blue hover:text-white dark:hover:bg-vp-lime dark:hover:text-vp-amethyst transition-all shadow-sm group/btn"
              >
                <span>{t('projects.visit_site')}</span>
                <svg className="w-4 h-4 stroke-current fill-none transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="15 3 21 3 21 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="10" y1="14" x2="21" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}