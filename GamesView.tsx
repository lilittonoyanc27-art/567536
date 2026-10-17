import React, { useState } from 'react';
import {
  Gamepad2,
  Users,
  PenTool,
  CheckCircle,
  HelpCircle,
  ArrowUpDown,
  BookOpen,
  Film,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Play,
  Volume2,
} from 'lucide-react';
import {
  WHO_SAID_DATA,
  FILL_BLANK_DATA,
  TRUE_FALSE_DATA,
  DIALOGUE_ORDER_DATA,
  EXPRESSIONS_DATA,
  WHAT_HAPPENS_NEXT_DATA,
} from './data.ts';
import { InteractiveSentence } from './InteractiveSentence.tsx';
import { checkOrderSequence } from './logic.ts';

interface GamesViewProps {
  onPlayVideoSegment?: (fromSeconds: number) => void;
}

export const GamesView: React.FC<GamesViewProps> = ({ onPlayVideoSegment }) => {
  const [activeGameId, setActiveGameId] = useState<number>(1);

  // Game 1 State: ¿Quién lo dijo?
  const [game1Index, setGame1Index] = useState(0);
  const [game1Answers, setGame1Answers] = useState<Record<number, string>>({});
  const [game1Checked, setGame1Checked] = useState<Record<number, boolean>>({});

  // Game 2 State: Completa la frase
  const [game2Index, setGame2Index] = useState(0);
  const [game2Answers, setGame2Answers] = useState<Record<number, string>>({});
  const [game2Checked, setGame2Checked] = useState<Record<number, boolean>>({});

  // Game 3 State: Verdadero o Falso
  const [game3Answers, setGame3Answers] = useState<Record<number, boolean>>({});
  const [game3Checked, setGame3Checked] = useState<Record<number, boolean>>({});

  // Game 4 State: Ordena el diálogo
  const initialShuffledOrder = React.useMemo(() => {
    return [...DIALOGUE_ORDER_DATA].sort(() => Math.random() - 0.5);
  }, []);
  const [game4CurrentList, setGame4CurrentList] = useState(initialShuffledOrder);
  const [game4IsSuccess, setGame4IsSuccess] = useState<boolean | null>(null);

  // Game 5 State: ¿Qué significa?
  const [game5Index, setGame5Index] = useState(0);
  const [game5Answers, setGame5Answers] = useState<Record<number, number>>({});
  const [game5Checked, setGame5Checked] = useState<Record<number, boolean>>({});

  // Game 6 State: ¿Qué pasa después?
  const [game6Index, setGame6Index] = useState(0);
  const [game6Answers, setGame6Answers] = useState<Record<number, string>>({});
  const [game6Checked, setGame6Checked] = useState<Record<number, boolean>>({});

  // Reset helpers
  const resetGame1 = () => {
    setGame1Index(0);
    setGame1Answers({});
    setGame1Checked({});
  };

  const resetGame2 = () => {
    setGame2Index(0);
    setGame2Answers({});
    setGame2Checked({});
  };

  const resetGame3 = () => {
    setGame3Answers({});
    setGame3Checked({});
  };

  const resetGame4 = () => {
    setGame4CurrentList([...DIALOGUE_ORDER_DATA].sort(() => Math.random() - 0.5));
    setGame4IsSuccess(null);
  };

  const resetGame5 = () => {
    setGame5Index(0);
    setGame5Answers({});
    setGame5Checked({});
  };

  const resetGame6 = () => {
    setGame6Index(0);
    setGame6Answers({});
    setGame6Checked({});
  };

  // Reorder helpers for Game 4
  const moveStep = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= game4CurrentList.length) return;
    const updated = [...game4CurrentList];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;
    setGame4CurrentList(updated);
    setGame4IsSuccess(null);
  };

  const verifyOrder = () => {
    const userOrder = game4CurrentList.map(item => item.order);
    const targetOrder = DIALOGUE_ORDER_DATA.map(item => item.order);
    const isCorrect = checkOrderSequence(userOrder, targetOrder);
    setGame4IsSuccess(isCorrect);
  };

  const gameTabs = [
    { id: 1, label: 'Juego 1: ¿Quién lo dijo?', icon: Users },
    { id: 2, label: 'Juego 2: Completa la frase', icon: PenTool },
    { id: 3, label: 'Juego 3: Verdadero o falso', icon: CheckCircle },
    { id: 4, label: 'Juego 4: Ordena el diálogo', icon: ArrowUpDown },
    { id: 5, label: 'Juego 5: ¿Qué significa?', icon: BookOpen },
    { id: 6, label: 'Juego 6: ¿Qué pasa después?', icon: Film },
  ];

  return (
    <div className="space-y-6 max-w-5xl w-full mx-auto">
      {/* Games Header */}
      <div className="bg-gradient-to-r from-red-950 via-amber-950/70 to-red-950 p-5 rounded-2xl border border-amber-600/30 shadow-xl w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-2xl">
              🎮
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-amber-200">
                Juegos Interactivos (6 actividades)
              </h2>
              <p className="text-sm text-stone-300 mt-1">
                Aprende jugando con las réplicas reales de Esperanza, Martín y Sebastián. Toca cualquier texto para ver armenio (🇦🇲).
              </p>
            </div>
          </div>
        </div>

        {/* Tab navigation for 6 games */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-5">
          {gameTabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeGameId === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveGameId(tab.id)}
                className={`p-2.5 rounded-xl text-xs font-semibold flex flex-col items-center justify-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 font-bold shadow-lg ring-2 ring-amber-300 scale-[1.02]'
                    : 'bg-[#220508] text-amber-200/80 hover:bg-[#340A0F] border border-amber-900/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-center line-clamp-1">{tab.label.split(':')[1]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ============================================================== */}
      {/* JUEGO 1: ¿QUIÉN LO DIJO? */}
      {/* ============================================================== */}
      {activeGameId === 1 && (
        <div className="bg-[#2A080C]/90 border border-amber-800/40 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-amber-900/40 pb-3">
            <div>
              <h3 className="text-lg font-bold text-amber-200 flex items-center gap-2">
                <span>¿Quién lo dijo?</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {game1Index + 1} de {WHO_SAID_DATA.length}
                </span>
              </h3>
              <p className="text-xs text-stone-300">
                Adivina quién pronunció esta frase: Martín, Esperanza o Sebastián.
              </p>
            </div>
            <button
              type="button"
              onClick={resetGame1}
              className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar</span>
            </button>
          </div>

          {/* Current Quote */}
          {(() => {
            const q = WHO_SAID_DATA[game1Index];
            const selected = game1Answers[q.id];
            const isChecked = !!game1Checked[q.id];
            const isCorrect = selected === q.speaker;

            return (
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-xs uppercase text-amber-400 font-bold">
                    Cita original (toca para traducir al armenio 🇦🇲):
                  </div>
                  <InteractiveSentence
                    spanish={q.quoteEs}
                    armenian={q.quoteHy}
                    size="xl"
                    className="border-amber-500/50 bg-[#350A10]"
                  />
                </div>

                {/* Character options */}
                <div className="space-y-2">
                  <div className="text-xs uppercase text-stone-400 font-semibold">
                    Selecciona al personaje que pronunció la frase:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { name: 'Martín', desc: 'El empresario enamorado', role: 'Martín', icon: '👔' },
                      { name: 'Esperanza', desc: '«La Monita», boxeadora y asistente', role: 'Esperanza', icon: '🥊' },
                      { name: 'Sebastián', desc: 'El nuevo guardaespaldas seductor', role: 'Sebastián', icon: '🕶️' },
                    ].map(char => {
                      const isChosen = selected === char.name;
                      let btnClass = 'bg-[#1C0407] border-amber-900/50 hover:border-amber-500/60 text-stone-200';
                      if (isChecked) {
                        if (char.name === q.speaker) {
                          btnClass = 'bg-emerald-950/70 border-emerald-400 text-emerald-200 ring-2 ring-emerald-500';
                        } else if (isChosen) {
                          btnClass = 'bg-rose-950/70 border-rose-400 text-rose-200';
                        }
                      } else if (isChosen) {
                        btnClass = 'bg-amber-500 text-stone-950 font-bold border-amber-300 ring-2 ring-amber-400';
                      }

                      return (
                        <button
                          key={char.name}
                          type="button"
                          disabled={isChecked}
                          onClick={() => setGame1Answers(prev => ({ ...prev, [q.id]: char.name }))}
                          className={`p-4 rounded-xl border text-left transition-all ${btnClass}`}
                        >
                          <div className="text-2xl mb-1">{char.icon}</div>
                          <div className="font-bold text-base">{char.name}</div>
                          <div className="text-xs text-stone-400 mt-0.5">{char.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Confirm or Next */}
                <div className="flex items-center justify-between pt-3 border-t border-amber-900/40">
                  <button
                    type="button"
                    disabled={game1Index === 0}
                    onClick={() => setGame1Index(game1Index - 1)}
                    className="px-4 py-2 rounded-xl bg-red-950 text-amber-200 text-xs border border-amber-800/40 disabled:opacity-30"
                  >
                    Anterior
                  </button>

                  {!isChecked ? (
                    <button
                      type="button"
                      disabled={!selected}
                      onClick={() => setGame1Checked(prev => ({ ...prev, [q.id]: true }))}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold text-sm shadow-md disabled:opacity-40"
                    >
                      Comprobar
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        if (game1Index < WHO_SAID_DATA.length - 1) {
                          setGame1Index(game1Index + 1);
                        } else {
                          alert('¡Completaste todas las frases de ¿Quién lo dijo?!');
                        }
                      }}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-stone-950 font-bold text-sm shadow-md flex items-center gap-1"
                    >
                      <span>Siguiente frase</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Feedback */}
                {isChecked && (
                  <div className={`p-4 rounded-xl border ${isCorrect ? 'bg-emerald-950/30 border-emerald-500' : 'bg-rose-950/30 border-rose-500'}`}>
                    <div className="font-bold text-sm mb-1">
                      {isCorrect ? '🎉 ¡Exacto!' : `❌ No. Esta frase la dijo ${q.speaker}.`}
                    </div>
                    <div className="text-xs text-stone-300">
                      Contexto: {q.contextEs}
                    </div>
                    <div className="text-xs text-amber-300/90 mt-1 font-armenian">
                      Համատեքստ՝ {q.contextHy}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* ============================================================== */}
      {/* JUEGO 2: COMPLETA LA FRASE */}
      {/* ============================================================== */}
      {activeGameId === 2 && (
        <div className="bg-[#2A080C]/90 border border-amber-800/40 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-amber-900/40 pb-3">
            <div>
              <h3 className="text-lg font-bold text-amber-200 flex items-center gap-2">
                <span>Completa la frase</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {game2Index + 1} de {FILL_BLANK_DATA.length}
                </span>
              </h3>
              <p className="text-xs text-stone-300">
                Elige la palabra auténtica dicha en la telenovela. Toca para ver la traducción al armenio.
              </p>
            </div>
            <button
              type="button"
              onClick={resetGame2}
              className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar</span>
            </button>
          </div>

          {(() => {
            const item = FILL_BLANK_DATA[game2Index];
            const selected = game2Answers[item.id];
            const isChecked = !!game2Checked[item.id];
            const isCorrect = selected === item.missingWord;

            return (
              <div className="space-y-6">
                {/* Sentence with blank */}
                <div className="space-y-2">
                  <div className="text-xs uppercase text-amber-400 font-bold">
                    Frase con hueco (toca para ver traducción):
                  </div>
                  <InteractiveSentence
                    spanish={item.sentenceWithBlankEs}
                    armenian={item.sentenceHy}
                    size="xl"
                    className="border-amber-500/40 bg-[#350A10]"
                  />
                </div>

                {/* Option words */}
                <div className="space-y-2">
                  <div className="text-xs uppercase text-stone-400 font-semibold">
                    ¿Cuál es la palabra que falta?
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {item.optionsEs.map((word, wIdx) => {
                      const isChosen = selected === word;
                      let btnStyle = 'bg-[#1B0306] border-amber-900/50 hover:border-amber-500/60 text-stone-100';
                      if (isChecked) {
                        if (word === item.missingWord) {
                          btnStyle = 'bg-emerald-950/80 border-emerald-400 text-emerald-200 ring-2 ring-emerald-500';
                        } else if (isChosen) {
                          btnStyle = 'bg-rose-950/80 border-rose-400 text-rose-200';
                        }
                      } else if (isChosen) {
                        btnStyle = 'bg-amber-500 text-stone-950 font-bold border-amber-300 ring-2 ring-amber-400';
                      }

                      return (
                        <button
                          key={word}
                          type="button"
                          disabled={isChecked}
                          onClick={() => setGame2Answers(prev => ({ ...prev, [item.id]: word }))}
                          className={`p-4 rounded-xl border text-center transition-all ${btnStyle}`}
                        >
                          <div className="text-lg font-bold">{word}</div>
                          <div className="text-xs text-amber-300/70 mt-1 font-armenian">
                            {item.optionsHy[wIdx]}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between pt-3 border-t border-amber-900/40">
                  <button
                    type="button"
                    disabled={game2Index === 0}
                    onClick={() => setGame2Index(game2Index - 1)}
                    className="px-4 py-2 rounded-xl bg-red-950 text-amber-200 text-xs border border-amber-800/40 disabled:opacity-30"
                  >
                    Anterior
                  </button>

                  {!isChecked ? (
                    <button
                      type="button"
                      disabled={!selected}
                      onClick={() => setGame2Checked(prev => ({ ...prev, [item.id]: true }))}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold text-sm shadow-md disabled:opacity-40"
                    >
                      Comprobar palabra
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        if (game2Index < FILL_BLANK_DATA.length - 1) {
                          setGame2Index(game2Index + 1);
                        } else {
                          alert('¡Completaste todas las frases del Juego 2!');
                        }
                      }}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-stone-950 font-bold text-sm shadow-md flex items-center gap-1"
                    >
                      <span>Siguiente frase</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Complete reveal after check */}
                {isChecked && (
                  <div className="p-4 rounded-xl bg-stone-950/60 border border-amber-500/40 space-y-2">
                    <div className="text-xs uppercase text-amber-400 font-bold">
                      Frase completa en el vídeo:
                    </div>
                    <div className="text-base text-amber-200 font-semibold">
                      {item.sentenceCompleteEs}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* ============================================================== */}
      {/* JUEGO 3: VERDADERO O FALSO */}
      {/* ============================================================== */}
      {activeGameId === 3 && (
        <div className="bg-[#2A080C]/90 border border-amber-800/40 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-amber-900/40 pb-3">
            <div>
              <h3 className="text-lg font-bold text-amber-200 flex items-center gap-2">
                <span>Verdadero o Falso (10 afirmaciones)</span>
              </h3>
              <p className="text-xs text-stone-300">
                Lee cada afirmación en español y decide si es Verdadera o Falsa. Toca para ver la traducción al armenio.
              </p>
            </div>
            <button
              type="button"
              onClick={resetGame3}
              className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar todo</span>
            </button>
          </div>

          <div className="space-y-4">
            {TRUE_FALSE_DATA.map(tf => {
              const selected = game3Answers[tf.id];
              const isChecked = !!game3Checked[tf.id];
              const hasSelection = typeof selected === 'boolean';
              const isCorrect = selected === tf.isTrue;

              return (
                <div
                  key={tf.id}
                  className="p-4 rounded-xl bg-[#1D0407] border border-amber-900/40 space-y-3"
                >
                  <InteractiveSentence
                    spanish={tf.statementEs}
                    armenian={tf.statementHy}
                    size="md"
                    className="border-transparent bg-transparent p-0 shadow-none hover:bg-transparent"
                  />

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-amber-950">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        disabled={isChecked}
                        onClick={() => {
                          setGame3Answers(prev => ({ ...prev, [tf.id]: true }));
                          setGame3Checked(prev => ({ ...prev, [tf.id]: true }));
                        }}
                        className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                          isChecked && tf.isTrue
                            ? 'bg-emerald-600 text-white border-emerald-400 ring-2 ring-emerald-500'
                            : selected === true
                            ? 'bg-amber-500 text-stone-950 border-amber-300'
                            : 'bg-red-950/80 text-amber-200 border-amber-800/40 hover:bg-amber-950'
                        }`}
                      >
                        ✓ Verdadero
                      </button>

                      <button
                        type="button"
                        disabled={isChecked}
                        onClick={() => {
                          setGame3Answers(prev => ({ ...prev, [tf.id]: false }));
                          setGame3Checked(prev => ({ ...prev, [tf.id]: true }));
                        }}
                        className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                          isChecked && !tf.isTrue
                            ? 'bg-emerald-600 text-white border-emerald-400 ring-2 ring-emerald-500'
                            : selected === false
                            ? 'bg-amber-500 text-stone-950 border-amber-300'
                            : 'bg-red-950/80 text-amber-200 border-amber-800/40 hover:bg-amber-950'
                        }`}
                      >
                        ✗ Falso
                      </button>
                    </div>

                    {isChecked && (
                      <span
                        className={`text-xs font-bold ${
                          isCorrect ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {isCorrect ? '¡Correcto!' : `Incorrecto. Era ${tf.isTrue ? 'Verdadero' : 'Falso'}.`}
                      </span>
                    )}
                  </div>

                  {isChecked && (
                    <div className="p-3 rounded-lg bg-stone-950/40 border border-amber-900/40 text-xs">
                      <InteractiveSentence
                        spanish={tf.explanationEs}
                        armenian={tf.explanationHy}
                        size="sm"
                        className="bg-transparent border-transparent p-0 shadow-none"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* JUEGO 4: ORDENA EL DIÁLOGO */}
      {/* ============================================================== */}
      {activeGameId === 4 && (
        <div className="bg-[#2A080C]/90 border border-amber-800/40 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-amber-900/40 pb-3">
            <div>
              <h3 className="text-lg font-bold text-amber-200 flex items-center gap-2">
                <span>Ordena el diálogo cronológicamente</span>
              </h3>
              <p className="text-xs text-stone-300">
                Usa las flechas «▲ Subir» y «▼ Bajar» para colocar las frases en el orden exacto de la escena.
              </p>
            </div>
            <button
              type="button"
              onClick={resetGame4}
              className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Desordenar de nuevo</span>
            </button>
          </div>

          <div className="space-y-3">
            {game4CurrentList.map((step, idx) => (
              <div
                key={step.id}
                className="p-3 sm:p-4 rounded-xl bg-[#1C0407] border border-amber-900/50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 transition-all"
              >
                <div className="flex items-start gap-3 flex-1">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 font-bold text-xs flex items-center justify-center shrink-0 mt-1">
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <InteractiveSentence
                      spanish={step.textEs}
                      armenian={step.textHy}
                      speakerName={step.speaker}
                      size="sm"
                      className="bg-transparent border-transparent p-0 shadow-none hover:bg-transparent"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <button
                    type="button"
                    disabled={idx === 0}
                    onClick={() => moveStep(idx, 'up')}
                    className="px-2.5 py-1.5 rounded-lg bg-red-950 hover:bg-amber-950 text-amber-200 text-xs border border-amber-800/40 disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Subir posición"
                  >
                    ▲ Subir
                  </button>
                  <button
                    type="button"
                    disabled={idx === game4CurrentList.length - 1}
                    onClick={() => moveStep(idx, 'down')}
                    className="px-2.5 py-1.5 rounded-lg bg-red-950 hover:bg-amber-950 text-amber-200 text-xs border border-amber-800/40 disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Bajar posición"
                  >
                    ▼ Bajar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-amber-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={verifyOrder}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold text-sm shadow-xl"
            >
              Comprobar orden cronológico
            </button>

            {game4IsSuccess !== null && (
              <div
                className={`p-3 rounded-xl border text-sm font-bold flex items-center gap-2 ${
                  game4IsSuccess
                    ? 'bg-emerald-950/70 border-emerald-400 text-emerald-200'
                    : 'bg-rose-950/70 border-rose-400 text-rose-200'
                }`}
              >
                {game4IsSuccess
                  ? '🎉 ¡Perfecto! El orden del diálogo es 100% exacto.'
                  : '⚠️ Hay frases fuera de su orden temporal original. ¡Ajusta sus posiciones!'}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* JUEGO 5: ¿QUÉ SIGNIFICA? (EXPRESSIONS) */}
      {/* ============================================================== */}
      {activeGameId === 5 && (
        <div className="bg-[#2A080C]/90 border border-amber-800/40 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-amber-900/40 pb-3">
            <div>
              <h3 className="text-lg font-bold text-amber-200 flex items-center gap-2">
                <span>¿Qué significa? (Expresiones argentinas)</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {game5Index + 1} de {EXPRESSIONS_DATA.length}
                </span>
              </h3>
              <p className="text-xs text-stone-300">
                Aprende el significado real de las frases más coloridas del diálogo.
              </p>
            </div>
            <button
              type="button"
              onClick={resetGame5}
              className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar</span>
            </button>
          </div>

          {(() => {
            const expr = EXPRESSIONS_DATA[game5Index];
            const selected = game5Answers[expr.id];
            const isChecked = typeof game5Checked[expr.id] === 'boolean';
            const isCorrect = selected === expr.correctOptionIndex;

            return (
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-xs uppercase text-amber-400 font-bold">
                    Expresión destacada (toca para ver armenio):
                  </div>
                  <InteractiveSentence
                    spanish={expr.phraseEs}
                    armenian={expr.phraseHy}
                    size="xl"
                    className="border-amber-500/50 bg-[#350A10]"
                  />
                  {expr.exampleEs && (
                    <div className="text-xs text-stone-300 italic pt-1">
                      Ejemplo en la escena: {expr.exampleEs}
                    </div>
                  )}
                </div>

                {/* Multiple choice meanings */}
                <div className="space-y-3">
                  <div className="text-xs uppercase text-stone-400 font-semibold">
                    ¿Cuál es el significado correcto?
                  </div>
                  {expr.optionsEs.map((optEs, optIdx) => {
                    const isChosen = selected === optIdx;
                    let borderClass = 'border-amber-900/40 hover:border-amber-500/60 bg-[#1D0407]';
                    if (isChecked) {
                      if (optIdx === expr.correctOptionIndex) {
                        borderClass = 'bg-emerald-950/70 border-emerald-400 text-emerald-200 ring-2 ring-emerald-500';
                      } else if (isChosen) {
                        borderClass = 'bg-rose-950/70 border-rose-400 text-rose-200';
                      }
                    } else if (isChosen) {
                      borderClass = 'bg-amber-500 text-stone-950 font-bold border-amber-300 ring-2 ring-amber-400';
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-3.5 rounded-xl border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 transition-all ${borderClass}`}
                      >
                        <div className="flex-1">
                          <InteractiveSentence
                            spanish={optEs}
                            armenian={expr.optionsHy[optIdx]}
                            size="sm"
                            className="bg-transparent border-transparent p-0 shadow-none hover:bg-transparent"
                          />
                        </div>
                        <button
                          type="button"
                          disabled={isChecked}
                          onClick={() => setGame5Answers(prev => ({ ...prev, [expr.id]: optIdx }))}
                          className="px-4 py-2 rounded-lg bg-red-950 hover:bg-amber-950 text-amber-200 text-xs font-bold border border-amber-800/40 sm:self-center"
                        >
                          {isChosen ? '✓ Elegida' : 'Seleccionar'}
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between pt-3 border-t border-amber-900/40">
                  <button
                    type="button"
                    disabled={game5Index === 0}
                    onClick={() => setGame5Index(game5Index - 1)}
                    className="px-4 py-2 rounded-xl bg-red-950 text-amber-200 text-xs border border-amber-800/40 disabled:opacity-30"
                  >
                    Anterior
                  </button>

                  {!isChecked ? (
                    <button
                      type="button"
                      disabled={typeof selected !== 'number'}
                      onClick={() => setGame5Checked(prev => ({ ...prev, [expr.id]: true }))}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold text-sm shadow-md disabled:opacity-40"
                    >
                      Comprobar significado
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        if (game5Index < EXPRESSIONS_DATA.length - 1) {
                          setGame5Index(game5Index + 1);
                        } else {
                          alert('¡Has completado todas las expresiones!');
                        }
                      }}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-stone-950 font-bold text-sm shadow-md flex items-center gap-1"
                    >
                      <span>Siguiente expresión</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {isChecked && (
                  <div className="p-4 rounded-xl bg-stone-950/60 border border-amber-500/40 space-y-1">
                    <div className="text-xs uppercase text-amber-400 font-bold">
                      Explicación cultural:
                    </div>
                    <div className="text-sm text-stone-200">{expr.meaningEs}</div>
                    <div className="text-sm text-amber-300 font-armenian pt-1">{expr.meaningHy}</div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}

      {/* ============================================================== */}
      {/* JUEGO 6: ¿QUÉ PASA DESPUÉS? (VIDEO SCENE PREDICTION) */}
      {/* ============================================================== */}
      {activeGameId === 6 && (
        <div className="bg-[#2A080C]/90 border border-amber-800/40 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-amber-900/40 pb-3">
            <div>
              <h3 className="text-lg font-bold text-amber-200 flex items-center gap-2">
                <span>¿Qué pasa después? (Predicción de escena)</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {game6Index + 1} de {WHAT_HAPPENS_NEXT_DATA.length}
                </span>
              </h3>
              <p className="text-xs text-stone-300">
                Pausamos el vídeo en un momento decisivo. Adivina qué réplica sigue a continuación.
              </p>
            </div>
            <button
              type="button"
              onClick={resetGame6}
              className="text-xs text-stone-400 hover:text-amber-300 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar</span>
            </button>
          </div>

          {(() => {
            const item = WHAT_HAPPENS_NEXT_DATA[game6Index];
            const selected = game6Answers[item.id];
            const isChecked = !!game6Checked[item.id];
            const correctOpt = item.options.find(o => o.isCorrect);
            const isCorrect = selected === correctOpt?.key;

            return (
              <div className="space-y-6">
                {/* Preceding context and play button */}
                <div className="p-4 rounded-xl bg-[#1C0407] border border-amber-700/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                      Momento de la escena (pausa a los {item.pauseAtSeconds}s)
                    </span>
                    {onPlayVideoSegment && (
                      <button
                        type="button"
                        onClick={() => onPlayVideoSegment(Math.max(0, item.pauseAtSeconds - 4))}
                        className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center gap-1 shadow"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Ver este fragmento en el vídeo</span>
                      </button>
                    )}
                  </div>

                  <InteractiveSentence
                    spanish={item.promptEs}
                    armenian={item.promptHy}
                    size="md"
                    className="border-transparent bg-transparent p-0 shadow-none hover:bg-transparent"
                  />
                </div>

                {/* Options for next line */}
                <div className="space-y-3">
                  <div className="text-xs uppercase text-stone-400 font-semibold">
                    ¿Qué dice el personaje a continuación?
                  </div>
                  {item.options.map(opt => {
                    const isChosen = selected === opt.key;
                    let style = 'bg-[#1C0407] border-amber-900/40 hover:border-amber-600/50';
                    if (isChecked) {
                      if (opt.isCorrect) {
                        style = 'bg-emerald-950/70 border-emerald-400 text-emerald-200 ring-2 ring-emerald-500';
                      } else if (isChosen) {
                        style = 'bg-rose-950/70 border-rose-400 text-rose-200';
                      }
                    } else if (isChosen) {
                      style = 'bg-amber-500 text-stone-950 font-bold border-amber-300 ring-2 ring-amber-400';
                    }

                    return (
                      <div
                        key={opt.key}
                        className={`p-3.5 rounded-xl border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 transition-all ${style}`}
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <span className="w-6 h-6 rounded-full bg-stone-900 border border-stone-700 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                            {opt.key}
                          </span>
                          <div className="flex-1">
                            <InteractiveSentence
                              spanish={opt.textEs}
                              armenian={opt.textHy}
                              size="sm"
                              className="bg-transparent border-transparent p-0 shadow-none hover:bg-transparent"
                            />
                          </div>
                        </div>

                        <button
                          type="button"
                          disabled={isChecked}
                          onClick={() => setGame6Answers(prev => ({ ...prev, [item.id]: opt.key }))}
                          className="px-4 py-2 rounded-lg bg-red-950 hover:bg-amber-950 text-amber-200 text-xs font-bold border border-amber-800/40 self-end sm:self-center"
                        >
                          {isChosen ? '✓ Elegida' : 'Elegir esta'}
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between pt-3 border-t border-amber-900/40">
                  <button
                    type="button"
                    disabled={game6Index === 0}
                    onClick={() => setGame6Index(game6Index - 1)}
                    className="px-4 py-2 rounded-xl bg-red-950 text-amber-200 text-xs border border-amber-800/40 disabled:opacity-30"
                  >
                    Anterior
                  </button>

                  {!isChecked ? (
                    <button
                      type="button"
                      disabled={!selected}
                      onClick={() => setGame6Checked(prev => ({ ...prev, [item.id]: true }))}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold text-sm shadow-md disabled:opacity-40"
                    >
                      Comprobar predicción
                    </button>
                  ) : (
                    <div className="flex items-center gap-3">
                      {onPlayVideoSegment && (
                        <button
                          type="button"
                          onClick={() => onPlayVideoSegment(item.continueAtSeconds)}
                          className="px-4 py-2 rounded-xl bg-amber-500 text-stone-950 text-xs font-bold flex items-center gap-1.5 shadow"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Ver continuación en vídeo</span>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          if (game6Index < WHAT_HAPPENS_NEXT_DATA.length - 1) {
                            setGame6Index(game6Index + 1);
                          } else {
                            alert('¡Completaste todos los desafíos de predicción!');
                          }
                        }}
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-stone-950 font-bold text-sm shadow-md flex items-center gap-1"
                      >
                        <span>Siguiente escena</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {isChecked && (
                  <div className="p-4 rounded-xl bg-stone-950/60 border border-amber-500/40 space-y-1">
                    <div className="text-xs uppercase text-amber-400 font-bold">
                      {isCorrect ? '🎯 ¡Excelente deducción!' : '💡 En el vídeo ocurre lo siguiente:'}
                    </div>
                    <div className="text-sm text-stone-200">{item.revealExplanationEs}</div>
                    <div className="text-sm text-amber-300 font-armenian pt-1">{item.revealExplanationHy}</div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
