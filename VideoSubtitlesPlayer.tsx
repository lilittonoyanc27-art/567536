import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  SkipForward,
  SkipBack,
  Search,
  CheckCircle,
  ExternalLink,
  SlidersHorizontal,
  Flame,
} from 'lucide-react';
import { Subtitle } from './types.ts';
import { SUBTITLES_DATA } from './data.ts';
import { InteractiveSentence } from './InteractiveSentence.tsx';
import { timecodeToSeconds } from './logic.ts';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface VideoSubtitlesPlayerProps {
  onSelectTimecode?: (seconds: number) => void;
  externalCurrentTime?: number;
}

export const VideoSubtitlesPlayer: React.FC<VideoSubtitlesPlayerProps> = ({
  onSelectTimecode,
  externalCurrentTime,
}) => {
  const [player, setPlayer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [activeSubIndex, setActiveSubIndex] = useState<number>(0);
  const [speakerFilter, setSpeakerFilter] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoopingCurrent, setIsLoopingCurrent] = useState<boolean>(false);
  const [allTranslationsRevealed, setAllTranslationsRevealed] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isApiReady, setIsApiReady] = useState<boolean>(false);

  const listContainerRef = useRef<HTMLDivElement>(null);
  const activeCardRef = useRef<HTMLDivElement>(null);
  const timeTrackerRef = useRef<any>(null);

  const videoId = 'MSgano3apyQ';

  // Load YouTube Iframe API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else {
      initPlayer();
    }

    return () => {
      if (timeTrackerRef.current) {
        clearInterval(timeTrackerRef.current);
      }
    };
  }, []);

  const initPlayer = () => {
    try {
      if (window.YT && window.YT.Player) {
        const ytPlayer = new window.YT.Player('youtube-player-container', {
          videoId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            modestbranding: 1,
            rel: 0,
            playsinline: 1,
            enablejsapi: 1,
          },
          events: {
            onReady: (event: any) => {
              setPlayer(event.target);
              setIsApiReady(true);
            },
            onStateChange: (event: any) => {
              // 1: playing, 2: paused, 0: ended
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2 || event.data === 0) {
                setIsPlaying(false);
              }
            },
          },
        });
      }
    } catch (e) {
      console.warn('Could not initialize YouTube Player API directly', e);
    }
  };

  // Poll current time while playing
  useEffect(() => {
    if (player && typeof player.getCurrentTime === 'function') {
      timeTrackerRef.current = setInterval(() => {
        const time = player.getCurrentTime();
        if (typeof time === 'number' && !isNaN(time)) {
          setCurrentTime(time);
        }
      }, 250);
    }

    return () => {
      if (timeTrackerRef.current) clearInterval(timeTrackerRef.current);
    };
  }, [player]);

  // Update external time if passed
  useEffect(() => {
    if (typeof externalCurrentTime === 'number' && player) {
      seekToSeconds(externalCurrentTime);
    }
  }, [externalCurrentTime]);

  // Find active subtitle
  useEffect(() => {
    const idx = SUBTITLES_DATA.findIndex(
      sub => currentTime >= sub.seconds && currentTime < sub.endSeconds
    );
    if (idx !== -1) {
      setActiveSubIndex(idx);

      // Handle looping current subtitle
      if (isLoopingCurrent) {
        const currentSub = SUBTITLES_DATA[idx];
        if (currentTime >= currentSub.endSeconds - 0.2) {
          seekToSeconds(currentSub.seconds);
        }
      }
    } else {
      // Find closest previous
      for (let i = SUBTITLES_DATA.length - 1; i >= 0; i--) {
        if (currentTime >= SUBTITLES_DATA[i].seconds) {
          setActiveSubIndex(i);
          break;
        }
      }
    }
  }, [currentTime, isLoopingCurrent]);

  // Auto-scroll active card into view in transcript
  useEffect(() => {
    if (activeCardRef.current && listContainerRef.current) {
      const container = listContainerRef.current;
      const card = activeCardRef.current;
      const topPos = card.offsetTop - container.offsetTop - 60;
      container.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
    }
  }, [activeSubIndex]);

  const seekToSeconds = (seconds: number) => {
    if (player && typeof player.seekTo === 'function') {
      player.seekTo(seconds, true);
      player.playVideo?.();
      setIsPlaying(true);
    }
    setCurrentTime(seconds);
    if (onSelectTimecode) {
      onSelectTimecode(seconds);
    }
  };

  const togglePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo?.();
        setIsPlaying(false);
      } else {
        player.playVideo?.();
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const jumpToPrevious = () => {
    const prevIdx = Math.max(0, activeSubIndex - 1);
    seekToSeconds(SUBTITLES_DATA[prevIdx].seconds);
  };

  const jumpToNext = () => {
    const nextIdx = Math.min(SUBTITLES_DATA.length - 1, activeSubIndex + 1);
    seekToSeconds(SUBTITLES_DATA[nextIdx].seconds);
  };

  const changePlaybackSpeed = (speed: number) => {
    setPlaybackSpeed(speed);
    if (player && typeof player.setPlaybackRate === 'function') {
      player.setPlaybackRate(speed);
    }
  };

  // Filtered subtitles
  const filteredSubtitles = SUBTITLES_DATA.filter(sub => {
    const matchesSpeaker =
      speakerFilter === 'todos' ||
      (speakerFilter === 'Martin' && sub.speaker === 'Martín') ||
      (speakerFilter === 'Esperanza' && sub.speaker === 'Esperanza') ||
      (speakerFilter === 'Sebastian' && sub.speaker === 'Sebastián');

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      sub.spanish.toLowerCase().includes(q) ||
      sub.armenian.toLowerCase().includes(q) ||
      sub.speaker.toLowerCase().includes(q);

    return matchesSpeaker && matchesSearch;
  });

  const currentSub = SUBTITLES_DATA[activeSubIndex] || SUBTITLES_DATA[0];

  return (
    <div className="space-y-6 w-full max-w-full overflow-hidden">
      {/* Top Banner with Instruction */}
      <div className="bg-gradient-to-r from-red-950 via-amber-950/70 to-red-950 p-4 sm:p-5 rounded-2xl border border-amber-600/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-full">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-2xl">
            🎬
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-amber-200 tracking-wide flex items-center gap-2">
              Vídeo y Subtítulos Interactivos
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-900 text-amber-300 border border-amber-500/30">
                01:27 min
              </span>
            </h2>
            <p className="text-sm text-stone-300 mt-1">
              Haz clic en cualquier frase para revelar su traducción al armenio (🇦🇲). Usa los controles para saltar o repetir réplicas.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setAllTranslationsRevealed(!allTranslationsRevealed)}
            className="px-3.5 py-2 rounded-xl bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/40 text-amber-200 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
          >
            <span>{allTranslationsRevealed ? '🙈 Ocultar traducciones' : '👁️ Ver todo en armenio'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Video + Live Subtitle on Left, Full Transcript on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full max-w-full">
        {/* Left Column: Player & Active Live Subtitle (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden bg-black border-2 border-amber-900/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] aspect-video">
            <div id="youtube-player-container" className="w-full h-full" />
            
            {/* Fallback iframe in case API script isn't ready or user prefers standard iframe */}
            {!isApiReady && (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&rel=0&modestbranding=1`}
                title="Muñeca Brava Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>

          {/* Quick Player Control Bar */}
          <div className="bg-[#2D0A10] border border-amber-900/50 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={jumpToPrevious}
                className="p-2 rounded-lg bg-amber-950/60 hover:bg-amber-800/80 text-amber-200 border border-amber-700/40 transition-colors"
                title="Réplica anterior"
                aria-label="Réplica anterior"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={togglePlayPause}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold transition-all shadow-md flex items-center gap-1.5"
                aria-label={isPlaying ? "Pausar vídeo" : "Reproducir vídeo"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                <span className="text-xs sm:text-sm">{isPlaying ? 'Pausar' : 'Reproducir'}</span>
              </button>

              <button
                type="button"
                onClick={jumpToNext}
                className="p-2 rounded-lg bg-amber-950/60 hover:bg-amber-800/80 text-amber-200 border border-amber-700/40 transition-colors"
                title="Siguiente réplica"
                aria-label="Siguiente réplica"
              >
                <SkipForward className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsLoopingCurrent(!isLoopingCurrent)}
                className={`p-2 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
                  isLoopingCurrent
                    ? 'bg-amber-500 text-stone-950 border-amber-400 font-bold'
                    : 'bg-amber-950/60 text-amber-200 border-amber-700/40 hover:bg-amber-900'
                }`}
                title="Repetir esta réplica en bucle"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Bucle</span>
              </button>
            </div>

            {/* Playback speed selector */}
            <div className="flex items-center gap-1 text-xs">
              <span className="text-stone-400 mr-1 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Velocidad:
              </span>
              {[0.75, 1, 1.25].map(speed => (
                <button
                  key={speed}
                  type="button"
                  onClick={() => changePlaybackSpeed(speed)}
                  className={`px-2 py-1 rounded text-xs transition-colors ${
                    playbackSpeed === speed
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'bg-amber-950/40 text-stone-300 hover:bg-amber-900'
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>

          {/* ACTIVE SUBTITLE BOX (High visibility, prominent) */}
          <div className="bg-gradient-to-b from-[#380E14] to-[#220508] p-4 sm:p-5 rounded-2xl border-2 border-amber-500/60 shadow-xl">
            <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-amber-500/20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
                  Subtítulo en vivo ({currentSub.timecode})
                </span>
              </div>
              <span className="text-xs text-stone-400">
                Réplica {activeSubIndex + 1} de {SUBTITLES_DATA.length}
              </span>
            </div>

            {/* Live Interactive Sentence */}
            <InteractiveSentence
              key={`active-${currentSub.id}`}
              spanish={currentSub.spanish}
              armenian={currentSub.armenian}
              notes={currentSub.notes}
              speakerName={currentSub.speaker}
              badgeLabel={`⏱️ ${currentSub.timecode}`}
              highlight={true}
              size="xl"
              forceOpen={allTranslationsRevealed}
            />

            <div className="mt-3 flex items-center justify-between text-xs text-amber-300/70 pt-2 border-t border-amber-900/40">
              <span className="flex items-center gap-1">
                💡 <em>Toca la frase para ver la traducción al armenio.</em>
              </span>
              <button
                type="button"
                onClick={() => seekToSeconds(currentSub.seconds)}
                className="text-amber-400 hover:text-amber-200 underline flex items-center gap-1"
              >
                <span>Repetir réplica actual</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Full Scrollable Transcript (5 cols on lg) */}
        <div className="lg:col-span-5 bg-[#25060A]/90 border border-amber-800/40 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col h-[640px]">
          <div className="mb-3 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-amber-100 flex items-center gap-2">
                <span>📜 Transcripción completa</span>
                <span className="text-xs bg-red-950 text-amber-300 px-2 py-0.5 rounded-full border border-amber-700/30">
                  {filteredSubtitles.length}
                </span>
              </h3>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar palabra en español o armenio..."
                className="w-full bg-[#180306] border border-amber-900/50 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Speaker Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              {[
                { id: 'todos', label: 'Todos' },
                { id: 'Martin', label: 'Martín' },
                { id: 'Esperanza', label: 'Esperanza' },
                { id: 'Sebastian', label: 'Sebastián' },
              ].map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setSpeakerFilter(f.id)}
                  className={`px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap ${
                    speakerFilter === f.id
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'bg-red-950/70 text-stone-300 hover:bg-red-900/70 border border-amber-900/30'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Subtitles Scrollable List */}
          <div
            ref={listContainerRef}
            className="flex-1 overflow-y-auto space-y-2.5 pr-1.5 custom-scrollbar"
          >
            {filteredSubtitles.map((sub, index) => {
              const isCurrent = SUBTITLES_DATA[activeSubIndex]?.id === sub.id;
              return (
                <div
                  key={sub.id}
                  ref={isCurrent ? activeCardRef : undefined}
                  className={`relative group transition-all rounded-xl p-2 ${
                    isCurrent
                      ? 'bg-amber-950/40 border border-amber-400/70 shadow-md'
                      : 'hover:bg-red-950/30'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-amber-400/80 mb-1 px-1">
                    <button
                      type="button"
                      onClick={() => seekToSeconds(sub.seconds)}
                      className="flex items-center gap-1 hover:text-amber-200 font-mono text-[11px] bg-red-950 px-2 py-0.5 rounded border border-amber-700/30"
                    >
                      <Play className="w-2.5 h-2.5 fill-current" />
                      <span>{sub.timecode}</span>
                    </button>
                    <span className="text-[11px] text-stone-400">
                      {sub.speaker}
                    </span>
                  </div>

                  <InteractiveSentence
                    spanish={sub.spanish}
                    armenian={sub.armenian}
                    notes={sub.notes}
                    highlight={isCurrent}
                    size="sm"
                    forceOpen={allTranslationsRevealed}
                    onSentenceClick={() => seekToSeconds(sub.seconds)}
                  />
                </div>
              );
            })}

            {filteredSubtitles.length === 0 && (
              <div className="p-8 text-center text-stone-400 text-sm">
                No se encontraron frases con ese criterio de búsqueda.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
