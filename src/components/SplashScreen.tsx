import { useState, useEffect, useCallback } from 'react';

interface SplashScreenProps {
  onEnter: () => void;
}

const softwarePhases = [
  "INICIALIZANDO ENTORNO",
  "CARGANDO ARQUITECTURA FRONTEND",
  "CONECTANDO SERVICIOS BACKEND",
  "OPTIMIZANDO RENDIMIENTO UI/UX",
  "DESPLIEGUE COMPLETADO"
];

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);

  const handleEnter = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(onEnter, 1000);
  }, [isExiting, onEnter]);

  // Control de fases de texto
  useEffect(() => {
    if (isExiting) return;
    const interval = setInterval(() => {
      setPhaseIndex((prev) => {
        if (prev < softwarePhases.length - 1) return prev + 1;
        return prev;
      });
    }, 850);
    return () => clearInterval(interval);
  }, [isExiting]);

  // Barra de progreso
  useEffect(() => {
    if (isExiting) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          
          setTimeout(handleEnter, 400); 
          return 100;
        }
        return prev + 0.8;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [isExiting, handleEnter]);

  // Animación de entrada
  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 100);
    const t2 = setTimeout(() => setStep(2), 500);
    const t3 = setTimeout(() => setStep(3), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#F8F9FA] select-none overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isExiting ? 'opacity-0 scale-110 filter blur-lg pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* LUCES ORBITALES DE FONDO */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#E6F9AF]/60 rounded-full blur-[120px] mix-blend-multiply animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#8BBEB2]/30 rounded-full blur-[150px] mix-blend-multiply animate-[pulse_8s_ease-in-out_infinite]" />

      {/* MALLA DE PUNTOS INFINITA */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#18314F 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      {/* TARJETA CENTRAL DE CRISTAL */}
      <div 
        className={`relative z-10 w-full max-w-md sm:max-w-lg p-10 sm:p-14 flex flex-col items-center justify-center rounded-[2.5rem] bg-white/60 backdrop-blur-2xl border border-white shadow-[0_20px_60px_rgba(24,49,79,0.08)] transition-all duration-[1200ms] ease-out ${
          step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#CAAC4B]/40 to-transparent" />

        {/* LOGO */}
        <div 
          className={`relative w-48 sm:w-56 flex justify-center mb-10 transition-all duration-1000 delay-200 ${
            step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <img
            src="/tarjeta.png"
            alt="Valeria Peña"
            className="w-full h-auto object-contain drop-shadow-[0_8px_16px_rgba(24,49,79,0.1)]"
          />
        </div>

        {/* TEXTOS CENTRALES */}
        <div 
          className={`flex flex-col items-center w-full transition-all duration-1000 delay-500 ${
            step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="font-poppins text-xs sm:text-sm text-[#18314F] uppercase tracking-[0.4em] sm:tracking-[0.5em] font-bold text-center mb-6">
            Desarrollo de Software
          </h1>

          <div className="h-4 overflow-hidden flex items-center justify-center mb-8">
            <p className="font-mono text-[9px] sm:text-[10px] text-[#18314F]/70 uppercase tracking-widest font-bold text-center">
              {softwarePhases[phaseIndex]}...
            </p>
          </div>

          {/* BARRA DE PROGRESO */}
          <div className="w-full">
            <div className="flex justify-between items-end mb-2 font-mono text-[9px] text-[#CAAC4B] font-bold tracking-widest">
              <span>SYSTEM.BOOT</span>
              <span className="text-[#8BBEB2]">{Math.floor(progress)}%</span>
            </div>
            
            <div className="w-full h-[3px] bg-[#18314F]/10 rounded-full overflow-hidden relative">
              <div 
                className="h-full bg-gradient-to-r from-[#8BBEB2] via-[#CAAC4B] to-[#18314F] transition-all duration-75 ease-linear rounded-full"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute top-0 right-0 h-full w-4 bg-white blur-[2px] shadow-[0_0_8px_rgba(255,255,255,1)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}