import React, { useState } from 'react';
import { Volume2, ChevronDown, ChevronUp, Languages } from 'lucide-react';

interface InteractiveSentenceProps {
  spanish: string;
  armenian: string;
  notes?: string;
  className?: string;
  highlight?: boolean;
  onSentenceClick?: () => void;
  forceOpen?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSpeakerButton?: boolean;
  speakerName?: string;
  badgeLabel?: string;
}

export const InteractiveSentence: React.FC<InteractiveSentenceProps> = ({
  spanish,
  armenian,
  notes,
  className = '',
  highlight = false,
  onSentenceClick,
  forceOpen = false,
  size = 'md',
  showSpeakerButton = true,
  speakerName,
  badgeLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const isRevealed = forceOpen || isOpen;

  const toggleTranslation = (e: React.MouseEvent) => {
    // If the click came from speaker button, don't toggle
    if ((e.target as HTMLElement).closest('.tts-button')) {
      return;
    }
    setIsOpen(prev => !prev);
    if (onSentenceClick) {
      onSentenceClick();
    }
  };

  const speakSpanish = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(spanish);
    utterance.lang = 'es-AR'; // Argentine Spanish or standard fallback
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  };

  const sizeClasses = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl font-medium',
    lg: 'text-xl sm:text-2xl font-semibold',
    xl: 'text-2xl sm:text-3xl font-bold',
  }[size];

  return (
    <div
      onClick={toggleTranslation}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsOpen(prev => !prev);
        }
      }}
      aria-expanded={isRevealed}
      aria-label={`Frase en español: ${spanish}. Haz clic para ver u ocultar la traducción en armenio.`}
      className={`group relative select-text transition-all duration-200 cursor-pointer rounded-xl border text-left outline-none ${
        highlight
          ? 'bg-amber-950/60 border-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/50'
          : 'bg-[#2A080C]/80 border-amber-900/40 hover:border-amber-500/60 hover:bg-[#390B11]/90 hover:shadow-lg'
      } p-3.5 sm:p-4 ${className}`}
    >
      {/* Header bar: Speaker or Badge and Translation Hint */}
      <div className="flex items-center justify-between gap-2 mb-1.5 text-xs text-amber-300/80 font-medium">
        <div className="flex items-center gap-2 flex-wrap">
          {speakerName && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full font-bold uppercase tracking-wider text-[11px] bg-red-950 border border-amber-600/40 text-amber-200">
              {speakerName}
            </span>
          )}
          {badgeLabel && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] bg-orange-950/70 border border-orange-500/30 text-orange-200">
              {badgeLabel}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 ml-auto shrink-0">
          {showSpeakerButton && (
            <button
              type="button"
              onClick={speakSpanish}
              className="tts-button p-1.5 rounded-lg bg-red-950/80 hover:bg-amber-500 hover:text-red-950 text-amber-300 transition-colors border border-amber-600/30"
              title="Escuchar pronunciación (Español)"
              aria-label="Escuchar pronunciación en español"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          )}

          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] bg-amber-500/15 border border-amber-500/30 text-amber-300 group-hover:bg-amber-500/25 transition-colors">
            <Languages className="w-3 h-3 text-amber-400" />
            <span className="hidden sm:inline">
              {isRevealed ? 'Ocultar armenio' : 'Traducir al armenio 🇦🇲'}
            </span>
            <span className="sm:hidden">🇦🇲</span>
            {isRevealed ? (
              <ChevronUp className="w-3 h-3 ml-0.5 text-amber-400" />
            ) : (
              <ChevronDown className="w-3 h-3 ml-0.5 text-amber-400" />
            )}
          </span>
        </div>
      </div>

      {/* Spanish sentence (default view) */}
      <div className={`text-stone-100 tracking-wide font-normal leading-relaxed break-words [overflow-wrap:anywhere] ${sizeClasses}`}>
        {spanish}
      </div>

      {/* Armenian translation (revealed on tap/click) */}
      {isRevealed && (
        <div className="mt-3 pt-3 border-t border-amber-500/25 animate-fadeIn">
          <div className="flex items-start gap-2 bg-gradient-to-r from-amber-950/40 to-orange-950/30 p-2.5 rounded-lg border border-amber-500/30">
            <span className="shrink-0 mt-0.5 px-2 py-0.5 rounded bg-amber-500 text-stone-950 font-bold text-[10px] uppercase tracking-wider font-armenian flex items-center gap-1 shadow-sm">
              <span>🇦🇲</span>
              <span>Հայերեն</span>
            </span>
            <p className="text-amber-200 text-base sm:text-lg font-medium leading-relaxed font-armenian break-words [overflow-wrap:anywhere]">
              {armenian}
            </p>
          </div>

          {notes && (
            <p className="mt-2 text-xs sm:text-sm text-stone-300/90 italic pl-1 flex items-center gap-1.5">
              <span className="text-orange-400">💡</span>
              <span>{notes}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};
