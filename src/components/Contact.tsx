import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Estados para la simulación de terminal
  const [uploadProgress, setUploadProgress] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);
    setUploadProgress(0);
    setTerminalLogs([
      t('contact.terminal_init'),
      t('contact.terminal_tunnel'),
    ]);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Animación progresiva de subida de paquetes
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 85) {
          clearInterval(progressInterval);
          return 85;
        }
        return prev + 15;
      });
    }, 120);

    try {
      const response = await fetch('https://formspree.io/f/maewaezl', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      clearInterval(progressInterval);

      if (response.ok) {
        setUploadProgress(100);
        setTerminalLogs((prev) => [
          ...prev,
          t('contact.terminal_uploading'),
          t('contact.terminal_uploaded'),
          t('contact.terminal_sla'),
        ]);

        // Mantiene la vista en consola y activa el estado de éxito integrado
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          form.reset();
        }, 600);
      } else {
        setIsSubmitting(false);
        alert(t('contact.submit_error'));
      }
    } catch {
      clearInterval(progressInterval);
      setIsSubmitting(false);
      alert(t('contact.connection_error'));
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setUploadProgress(0);
    setTerminalLogs([]);
  };

  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-6 py-16 border-t border-vp-blue/15 dark:border-vp-lime/15 transition-colors duration-300">
      
      {/* Resplandor ambiental decorativo */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-vp-teal/10 dark:bg-vp-lime/5 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-vp-gold/10 dark:bg-vp-gold/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* ENCABEZADO */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-vp-blue/20 dark:border-vp-gold/30 bg-vp-blue/5 dark:bg-vp-gold/10 font-mono text-xs font-bold text-vp-blue dark:text-vp-gold uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-vp-teal dark:bg-vp-lime animate-pulse" />
            <span>{t('contact.section_label')}</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl tracking-wide text-vp-blue dark:text-vp-lime uppercase leading-tight">
            {t('contact.title')}
          </h2>
          <p className="font-poppins text-xs sm:text-sm text-vp-blue/80 dark:text-white/80 leading-relaxed text-justify">
            {t('contact.intro')}
          </p>
        </div>

        <div className="shrink-0 font-mono text-xs text-vp-blue dark:text-vp-lime bg-white dark:bg-vp-blue/40 border border-vp-blue/15 dark:border-vp-lime/30 px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-vp-gold animate-ping" />
          <span className="font-semibold">{t('contact.response_time')}</span>
        </div>
      </div>

      {/* GRID PRINCIPAL BENTO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* COLUMNA IZQUIERDA: CANALES DIRECTOS & CV */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/valeria-pe%C3%B1a-romero-354a96379/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl border border-vp-blue/15 dark:border-vp-lime/20 bg-white dark:bg-vp-blue/30 backdrop-blur-md hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400">{t('contact.linkedin_action')} ↗</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-vp-blue/60 dark:text-vp-teal uppercase font-bold">LinkedIn</span>
                <span className="block font-poppins text-xs font-semibold text-vp-blue dark:text-white truncate">Valeria Peña Romero</span>
              </div>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/ValStyless"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl border border-vp-blue/15 dark:border-vp-lime/20 bg-white dark:bg-vp-blue/30 backdrop-blur-md hover:border-slate-800 dark:hover:border-white hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-900/10 dark:bg-white/10 text-slate-800 dark:text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                </div>
                <span className="font-mono text-[10px] font-bold text-slate-700 dark:text-vp-lime">{t('contact.github_action')} ↗</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-vp-blue/60 dark:text-vp-teal uppercase font-bold">GitHub</span>
                <span className="block font-poppins text-xs font-semibold text-vp-blue dark:text-white truncate">ValStyless</span>
              </div>
            </a>

            {/* CORREO ELECTRÓNICO */}
            <div className="group p-4 rounded-2xl border border-vp-blue/15 dark:border-vp-lime/20 bg-white dark:bg-vp-blue/30 backdrop-blur-md hover:border-vp-gold hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-vp-gold/15 text-vp-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22,6 12,13 2,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('vale23996@gmail.com', 'email')}
                  className="font-mono text-[10px] font-bold text-vp-gold hover:underline"
                >
                  {copiedKey === 'email' ? t('contact.copied') : t('contact.copy')}
                </button>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-vp-blue/60 dark:text-vp-teal uppercase font-bold">{t('contact.email_direct')}</span>
                <span className="block font-poppins text-xs font-semibold text-vp-blue dark:text-white truncate">vale23996@gmail.com</span>
              </div>
            </div>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/527297237923"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl border border-vp-blue/15 dark:border-vp-lime/20 bg-white dark:bg-vp-blue/30 backdrop-blur-md hover:border-vp-lime hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-vp-lime/20 text-vp-teal dark:text-vp-lime flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] font-bold text-vp-teal dark:text-vp-lime">{t('contact.whatsapp_action')} ↗</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-vp-blue/60 dark:text-vp-teal uppercase font-bold">{t('contact.whatsapp_label')}</span>
                <span className="block font-poppins text-xs font-semibold text-vp-blue dark:text-white truncate">{t('contact.phone')}</span>
              </div>
            </a>

          </div>

          {/* TARJETA DE CURRICULUM VITAE */}
          <div className="group p-4 sm:p-5 rounded-2xl border border-vp-teal/30 dark:border-vp-lime/30 bg-vp-teal/5 dark:bg-vp-blue/40 backdrop-blur-md flex flex-col sm:flex-row items-center gap-4 sm:gap-5 hover:border-vp-teal dark:hover:border-vp-lime hover:shadow-lg transition-all duration-300">
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-24 h-28 rounded-xl overflow-hidden border border-vp-blue/15 dark:border-vp-lime/20 bg-white shadow-sm shrink-0 hover:border-vp-gold hover:shadow-md transition-all"
              aria-label={t('contact.cv_preview_aria')}
            >
              <img
                src="/CV.png"
                alt={t('contact.cv_preview_alt')}
                className="w-full h-full object-contain object-top"
              />
            </a>

            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl font-mono text-xs font-bold text-vp-blue dark:text-vp-lime bg-white dark:bg-vp-amethyst border border-vp-blue/20 dark:border-vp-lime/30 hover:border-vp-gold text-center transition-colors shadow-sm whitespace-nowrap"
              >
                {t('contact.cv_view')}
              </a>
              <a
                href="/CV.pdf"
                download
                className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl font-mono text-xs font-bold text-white dark:text-vp-amethyst bg-vp-teal dark:bg-vp-lime hover:opacity-90 transition-opacity text-center shadow-md whitespace-nowrap"
              >
                {t('contact.cv_download')}
              </a>
            </div>
          </div>

        </div>

        {/* COLUMNA DERECHA: FORMULARIO O TERMINAL INTEGRADA */}
        <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl border border-vp-blue/15 dark:border-vp-lime/20 bg-white dark:bg-vp-blue/30 backdrop-blur-md shadow-sm relative overflow-hidden min-h-[420px] flex flex-col justify-center">
          
          {isSubmitting || isSubmitted ? (
            /* CONSOLA TERMINAL UNIFICADA (TRANSMISIÓN + RESPUESTA DE ÉXITO INTEGRADA) */
            <div className="p-6 rounded-2xl bg-vp-blue/90 dark:bg-vp-amethyst text-vp-lime border border-vp-lime/30 font-mono text-xs space-y-5 shadow-2xl animate-fadeIn">
              
              {/* Header Terminal */}
              <div className="flex items-center justify-between border-b border-vp-lime/20 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
                  <span className="w-2.5 h-2.5 rounded-full bg-vp-gold" />
                  <span className="w-2.5 h-2.5 rounded-full bg-vp-lime" />
                  <span className="text-[11px] font-bold text-vp-gold ml-2">valeria@dev:~/dispatch_stream</span>
                </div>
                <span className="text-[10px] text-vp-teal font-bold">
                  {isSubmitting ? t('contact.terminal_transmitting') : t('contact.terminal_complete')}
                </span>
              </div>

              {/* Console Logs */}
              <div className="space-y-1.5 min-h-[90px] text-[11px]">
                {terminalLogs.map((log, idx) => (
                  <p key={idx} className="text-vp-lime leading-relaxed font-mono">
                    {log}
                  </p>
                ))}
              </div>

              {/* BARRA DE PROGRESO */}
              <div className="space-y-2 pt-2 border-t border-vp-lime/20">
                <div className="flex justify-between text-[10px] font-bold text-vp-gold">
                  <span>{t('contact.payload_progress')}</span>
                  <span>{uploadProgress}%</span>
                </div>

                <div className="w-full h-3 rounded-full bg-vp-blue dark:bg-vp-blue/80 border border-vp-lime/30 overflow-hidden p-0.5">
                  <div
                    className="h-full bg-vp-lime rounded-full transition-all duration-200 relative overflow-hidden"
                    style={{ width: `${uploadProgress}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* BLOQUE DE ÉXITO INTEGRADO EN TERMINAL (Aparece al terminar) */}
              {isSubmitted && (
                <div className="p-4 rounded-xl bg-vp-blue/60 dark:bg-vp-blue/40 border border-vp-lime/40 space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-2 text-vp-gold font-bold text-xs">
                    <span className="w-2 h-2 rounded-full bg-vp-lime animate-ping" />
                    <span>{t('contact.message_delivered')}</span>
                  </div>

                  <p className="font-poppins text-xs text-white/90 leading-relaxed text-justify">
                    {t('contact.success_thanks')} <strong className="text-vp-gold">{t('contact.success_hours')}</strong>.
                  </p>

                  <button
                    onClick={handleResetForm}
                    className="mt-2 w-full py-2 rounded-lg font-mono text-[11px] font-bold text-vp-amethyst bg-vp-lime hover:bg-vp-gold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{t('contact.reset_command')}</span>
                    <span>↵</span>
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* FORMULARIO DE CONTACTO */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-vp-blue/10 dark:border-vp-lime/10">
                <span className="font-mono text-xs font-bold text-vp-blue dark:text-vp-gold uppercase tracking-wider">
                  {t('contact.form_title')}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="font-mono text-[11px] font-bold text-vp-blue dark:text-vp-lime uppercase tracking-wider block">
                    {t('contact.form_name_label')}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder={t('contact.name_placeholder')}
                    className="w-full px-4 py-2.5 rounded-xl border border-vp-blue/15 dark:border-vp-lime/20 bg-slate-50 dark:bg-vp-amethyst/60 text-vp-blue dark:text-white text-xs font-poppins focus:outline-none focus:border-vp-gold transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="font-mono text-[11px] font-bold text-vp-blue dark:text-vp-lime uppercase tracking-wider block">
                    {t('contact.form_email_label')}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder={t('contact.email_placeholder')}
                    className="w-full px-4 py-2.5 rounded-xl border border-vp-blue/15 dark:border-vp-lime/20 bg-slate-50 dark:bg-vp-amethyst/60 text-vp-blue dark:text-white text-xs font-poppins focus:outline-none focus:border-vp-gold transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="font-mono text-[11px] font-bold text-vp-blue dark:text-vp-lime uppercase tracking-wider block">
                  {t('contact.form_message_label')}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder={t('contact.form_placeholder')}
                  className="w-full px-4 py-2.5 rounded-xl border border-vp-blue/15 dark:border-vp-lime/20 bg-slate-50 dark:bg-vp-amethyst/60 text-vp-blue dark:text-white text-xs font-poppins focus:outline-none focus:border-vp-gold transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl font-mono text-xs font-bold text-white dark:text-vp-amethyst bg-vp-blue dark:bg-vp-gold hover:bg-vp-teal dark:hover:bg-vp-lime transition-colors shadow-md active:scale-95 disabled:opacity-50"
              >
                <div className="flex items-center justify-center gap-2">
                  <span>{t('contact.form_submit')}</span>
                  <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24">
                    <line x1="22" y1="2" x2="11" y2="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>

            </form>
          )}

        </div>

      </div>

    </section>
  );
}