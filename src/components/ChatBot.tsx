import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

export default function ChatBot() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [usedKeys, setUsedKeys] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const options = [
    { key: 'opt_profile', answerKey: 'ans_profile' },
    { key: 'opt_experience', answerKey: 'ans_experience' },
    { key: 'opt_tech', answerKey: 'ans_tech' },
    { key: 'opt_projects', answerKey: 'ans_projects' },
    { key: 'opt_analytics', answerKey: 'ans_analytics' },
    { key: 'opt_contact', answerKey: 'ans_contact' },
  ];

  // Filtra las opciones para desaparecer las preguntas ya respondidas
  const availableOptions = options.filter((opt) => !usedKeys.includes(opt.key));

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSelectOption = (option: (typeof options)[0]) => {
    if (isTyping) return;

    // Registra la pregunta como utilizada para hacerla desaparecer
    setUsedKeys((prev) => [...prev, option.key]);

    setMessages((prev) => [
      ...prev,
      {
        id: `user-${prev.length}`,
        sender: 'user',
        text: t(`chatbot.${option.key}`),
      },
    ]);
    setIsTyping(true);

    // Simulación de procesamiento de comando real en terminal
    setTimeout(() => {
      const botMsg: Message = {
        id: `bot-${option.key}`,
        sender: 'bot',
        text: t(`chatbot.${option.answerKey}`),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setUsedKeys([]);
    setIsTyping(false);
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text: t('chatbot.welcome'),
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono select-none">
      
      {/* Estilos CSS Inyectados para Scrollbar & Cursor Terminal */}
      <style>{`
        .cli-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .cli-scrollbar::-webkit-scrollbar-track {
          background: #020617;
        }
        .cli-scrollbar::-webkit-scrollbar-thumb {
          background: #059669;
          border-radius: 9999px;
        }
        .cli-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #10b981;
        }
      `}</style>

      {/* VENTANA CONSOLA TERMINAL CLI */}
      {isOpen ? (
        <div
          className={`rounded-2xl border-2 border-emerald-500/50 bg-slate-950 text-slate-100 shadow-[0_0_40px_rgba(16,185,129,0.25)] flex flex-col overflow-hidden animate-fadeIn transition-all duration-300 cursor-crosshair ${
            isMaximized
              ? 'w-[95vw] sm:w-[620px] h-[88vh] max-h-[780px]'
              : 'w-[92vw] sm:w-[430px] h-[80vh] max-h-[600px]'
          }`}
        >
          {/* BARRA SUPERIOR CON BOTONES DE TRAFFIC LIGHTS FUNCIONALES */}
          <div className="px-4 py-2.5 bg-slate-900 border-b border-emerald-500/30 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              {/* Botón Rojo: Cierra la ventana */}
              <button
                onClick={() => setIsOpen(false)}
                title="Close Terminal"
                className="w-3 h-3 rounded-full bg-red-500/90 hover:bg-red-400 hover:scale-125 transition-all shadow-sm flex items-center justify-center text-[8px] text-slate-950 font-bold group"
              >
                <span className="opacity-0 group-hover:opacity-100">✕</span>
              </button>

              {/* Botón Amarillo: Limpia historial y restaura preguntas */}
              <button
                onClick={handleReset}
                title="Clear History & Reset"
                className="w-3 h-3 rounded-full bg-amber-500/90 hover:bg-amber-400 hover:scale-125 transition-all shadow-sm flex items-center justify-center text-[8px] text-slate-950 font-bold group"
              >
                <span className="opacity-0 group-hover:opacity-100">‒</span>
              </button>

              {/* Botón Verde: Maximiza / Expande tamaño */}
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                title="Toggle Maximize"
                className="w-3 h-3 rounded-full bg-emerald-500/90 hover:bg-emerald-400 hover:scale-125 transition-all shadow-sm flex items-center justify-center text-[8px] text-slate-950 font-bold group"
              >
                <span className="opacity-0 group-hover:opacity-100">⤢</span>
              </button>

              <span className="text-xs font-bold text-emerald-400 ml-2 tracking-wider">
                {t('chatbot.title')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-emerald-400/70 font-bold hidden sm:inline">
                {t('chatbot.status')}
              </span>
            </div>
          </div>

          {/* ÁREA DE SALIDA DE TEXTO CON SCROLLBAR PERSONALIZADO */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs leading-relaxed font-mono cli-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[92%] p-3.5 rounded-xl whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-500/50 font-bold rounded-tr-none'
                      : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Indicador de ejecución cuando el bot está respondiendo */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-900/90 text-emerald-400 border border-emerald-500/30 p-3 rounded-xl rounded-tl-none flex items-center gap-2">
                  <span className="animate-spin text-xs">⚙</span>
                  <span className="text-[11px] font-bold">
                    [EXECUTING_PROCESS...]
                  </span>
                  <span className="w-1.5 h-3 bg-emerald-400 animate-pulse inline-block" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* PREGUNTAS INTERACTIVAS DINÁMICAS (VAN DESAPARECIENDO) */}
          <div className="p-3 bg-slate-900/95 border-t border-emerald-500/30 space-y-2 shrink-0">
            <div className="flex items-center justify-between text-[10px] text-emerald-400 font-bold">
              <span>// AVAILABLE_COMMANDS ({availableOptions.length}):</span>
              <span className="text-slate-400">CLICK_TO_EXECUTE</span>
            </div>

            {availableOptions.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-36 overflow-y-auto pr-1 cli-scrollbar">
                {availableOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => handleSelectOption(opt)}
                    disabled={isTyping}
                    className="px-2.5 py-2 rounded-lg text-[11px] font-bold text-emerald-300 bg-slate-950 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-500/15 transition-all text-left truncate active:scale-95 flex items-center justify-between group disabled:opacity-50"
                  >
                    <span className="truncate">{t(`chatbot.${opt.key}`)}</span>
                    <span className="text-[10px] text-emerald-500 group-hover:text-emerald-300 shrink-0 ml-1">
                      ↵
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-2 text-center text-[11px] text-emerald-400/80 bg-slate-950 rounded-lg border border-emerald-500/20">
                [ALL_COMMANDS_EXECUTED] — Usa el comando de limpiar abajo para reiniciar.
              </div>
            )}

            {usedKeys.length > 0 && (
              <button
                onClick={handleReset}
                className="w-full py-1 text-[10px] font-bold text-amber-400 hover:text-amber-300 hover:underline text-center block pt-1"
              >
                {t('chatbot.reset')}
              </button>
            )}
          </div>

          {/* BARRA INFERIOR DE PROMPT Y CURSOR PARPADEANTE */}
          <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono shrink-0">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="font-bold">valeria@dev:~$</span>
              <span className="w-1.5 h-3 bg-emerald-400 animate-pulse inline-block" />
            </div>
            <span>PORT_8080 // CLI</span>
          </div>
        </div>
      ) : (
        /* BOTÓN FLOTANTE INDEPENDIENTE (NO INTERFIERE CON LA VENTANA) */
        <button
          onClick={() => {
            setIsOpen(true);
            if (messages.length === 0) {
              setMessages([
                {
                  id: 'welcome',
                  sender: 'bot',
                  text: t('chatbot.welcome'),
                },
              ]);
            }
          }}
          className="group relative px-4 py-3 rounded-2xl bg-slate-950 text-emerald-400 border-2 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 font-mono font-bold cursor-pointer"
          aria-label="Open Terminal Assistant"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-400 font-bold">&gt;_</span>
          <span className="text-xs text-slate-100 tracking-wider">Valeria.sh</span>
        </button>
      )}

    </div>
  );
}