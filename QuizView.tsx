import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Languages,
  Award,
  Sparkles,
} from 'lucide-react';
import { QUIZ_QUESTIONS } from './data.ts';
import { InteractiveSentence } from './InteractiveSentence.tsx';
import { calculatePercentage } from './logic.ts';

export const QuizView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<number, boolean>>({});
  const [isAllCompleted, setIsAllCompleted] = useState<boolean>(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];
  const selectedKey = selectedAnswers[currentQ.id];
  const isSubmitted = !!submittedQuestions[currentQ.id];

  const handleSelectOption = (key: string) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [currentQ.id]: key }));
  };

  const handleConfirmAnswer = () => {
    if (!selectedKey) return;
    setSubmittedQuestions(prev => ({ ...prev, [currentQ.id]: true }));
  };

  const nextQuestion = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsAllCompleted(true);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const restartQuiz = () => {
    setSelectedAnswers({});
    setSubmittedQuestions({});
    setCurrentIndex(0);
    setIsAllCompleted(false);
  };

  // Score calculation
  const correctCount = QUIZ_QUESTIONS.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctKey ? acc + 1 : acc;
  }, 0);
  const percentage = calculatePercentage(correctCount, QUIZ_QUESTIONS.length);

  return (
    <div className="space-y-6 max-w-4xl w-full mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-950 via-amber-950/70 to-red-950 p-5 rounded-2xl border border-amber-600/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-amber-200 flex items-center gap-2">
            <span>📝 Comprensión del Vídeo</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 font-bold">
              15 preguntas
            </span>
          </h2>
          <p className="text-sm text-stone-300 mt-1">
            Pon a prueba tu comprensión auditiva y lectura. Toca cualquier texto en español para ver u ocultar su traducción al armenio.
          </p>
        </div>

        <button
          type="button"
          onClick={restartQuiz}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-950/60 hover:bg-amber-900 border border-amber-700/50 text-amber-300 text-xs sm:text-sm font-medium transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reiniciar cuestionario</span>
        </button>
      </div>

      {!isAllCompleted ? (
        <div className="bg-[#2A080C]/90 border border-amber-800/40 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-6">
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-amber-300/90 pb-3 border-b border-amber-900/40">
            <span className="font-semibold">
              Pregunta {currentIndex + 1} de {QUIZ_QUESTIONS.length}
            </span>
            <span className="text-stone-400">
              Aciertos: <strong className="text-amber-400">{correctCount}</strong> / {QUIZ_QUESTIONS.length}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 rounded-full bg-stone-900 overflow-hidden border border-amber-950">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Question Box (Interactive sentence for Spanish & Armenian) */}
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1">
              <HelpCircle className="w-4 h-4" />
              <span>Pregunta (toca para traducir)</span>
            </div>
            <InteractiveSentence
              spanish={currentQ.questionEs}
              armenian={currentQ.questionHy}
              size="lg"
              className="border-amber-500/40 bg-gradient-to-r from-[#3B0C13] to-[#2B080D]"
            />
          </div>

          {/* Options List */}
          <div className="space-y-3 pt-2">
            <div className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
              Opciones: toca el texto para ver armenio 🇦🇲, o presiona «Elegir» para seleccionar
            </div>

            {currentQ.options.map(option => {
              const isOptionSelected = selectedKey === option.key;
              const isCorrectOption = option.key === currentQ.correctKey;

              let cardBorderClass = 'border-amber-900/40 hover:border-amber-600/50';
              let badgeBg = 'bg-stone-900 text-stone-300 border-stone-700';

              if (isSubmitted) {
                if (isCorrectOption) {
                  cardBorderClass = 'border-emerald-500 bg-emerald-950/20 ring-1 ring-emerald-500/40';
                  badgeBg = 'bg-emerald-600 text-white border-emerald-400';
                } else if (isOptionSelected) {
                  cardBorderClass = 'border-rose-500 bg-rose-950/20';
                  badgeBg = 'bg-rose-600 text-white border-rose-400';
                }
              } else if (isOptionSelected) {
                cardBorderClass = 'border-amber-400 bg-amber-950/40 ring-1 ring-amber-400/50';
                badgeBg = 'bg-amber-500 text-stone-950 font-bold border-amber-300';
              }

              return (
                <div
                  key={option.key}
                  className={`rounded-xl border p-3.5 transition-all flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 ${cardBorderClass} bg-[#1D0407]/80`}
                >
                  {/* Option letter and interactive text */}
                  <div className="flex-1 flex items-start gap-3">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border mt-1 ${badgeBg}`}
                    >
                      {option.key}
                    </span>

                    <div className="flex-1">
                      <InteractiveSentence
                        spanish={option.textEs}
                        armenian={option.textHy}
                        size="md"
                        className="bg-transparent border-transparent p-0 hover:bg-transparent shadow-none"
                      />
                    </div>
                  </div>

                  {/* Separate button to select this option */}
                  <div className="sm:shrink-0 flex items-center justify-end">
                    <button
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => handleSelectOption(option.key)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-1.5 ${
                        isOptionSelected
                          ? 'bg-amber-500 text-stone-950 border border-amber-300'
                          : 'bg-red-950 hover:bg-amber-950 text-amber-200 border border-amber-800/40'
                      } ${isSubmitted ? 'opacity-80 cursor-default' : 'cursor-pointer active:scale-95'}`}
                    >
                      {isOptionSelected ? '✓ Seleccionado' : 'Elegir esta'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Confirm / Next controls */}
          <div className="pt-4 border-t border-amber-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={prevQuestion}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-red-950/70 hover:bg-red-900/80 text-amber-200 text-xs sm:text-sm border border-amber-800/40 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-1 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            {!isSubmitted ? (
              <button
                type="button"
                disabled={!selectedKey}
                onClick={handleConfirmAnswer}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold text-sm shadow-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Comprobar respuesta
              </button>
            ) : (
              <button
                type="button"
                onClick={nextQuestion}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-stone-950 font-bold text-sm shadow-lg flex items-center justify-center gap-1.5 transition-all"
              >
                <span>
                  {currentIndex === QUIZ_QUESTIONS.length - 1
                    ? 'Ver resultados finales'
                    : 'Siguiente pregunta'}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Explanation after submission */}
          {isSubmitted && (
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-amber-950/40 to-stone-950 border border-amber-500/40 space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold">
                {selectedKey === currentQ.correctKey ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    ¡Correcto! Respuesta {currentQ.correctKey}
                  </span>
                ) : (
                  <span className="text-rose-400 flex items-center gap-1">
                    <XCircle className="w-4 h-4" />
                    Incorrecto. La respuesta correcta era {currentQ.correctKey}
                  </span>
                )}
              </div>

              <div className="text-xs text-stone-400 mb-1">
                Explicación detallada (toca para ver traducción en armenio):
              </div>

              <InteractiveSentence
                spanish={currentQ.explanationEs}
                armenian={currentQ.explanationHy}
                size="sm"
                className="bg-transparent border-transparent p-0 shadow-none"
              />
            </div>
          )}
        </div>
      ) : (
        /* Final Completion Screen */
        <div className="bg-[#2A080C] border-2 border-amber-500/60 rounded-2xl p-6 sm:p-10 shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-orange-600 p-1 shadow-lg">
            <div className="w-full h-full rounded-full bg-red-950 flex items-center justify-center text-4xl">
              🏆
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-200">
              ¡Cuestionario completado!
            </h3>
            <p className="text-amber-400 text-base sm:text-lg mt-1 font-armenian">
              Հարցաշարն ավարտված է։
            </p>
          </div>

          <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-amber-600/40">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-300">
                {correctCount} / {QUIZ_QUESTIONS.length}
              </div>
              <div className="text-xs text-stone-400 uppercase tracking-wider">Aciertos</div>
            </div>
            <div className="w-px h-10 bg-amber-700/40" />
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-orange-400">
                {percentage}%
              </div>
              <div className="text-xs text-stone-400 uppercase tracking-wider">Porcentaje</div>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <InteractiveSentence
              spanish={
                percentage >= 80
                  ? '¡Excelente comprensión! Comprendiste cada matiz de la escena.'
                  : '¡Buen intento! Repasa las réplicas en el vídeo para alcanzar el 100%.'
              }
              armenian={
                percentage >= 80
                  ? 'Հիանալի՛ ընկալում։ Դուք հասկացաք տեսարանի յուրաքանչյուր նրբերանգ։'
                  : 'Լավ փորձ էր։ Կրկին դիտեք տեսանյութը՝ 100%-ի հասնելու համար։'
              }
              size="md"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              type="button"
              onClick={restartQuiz}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold transition-all shadow-md flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Repetir cuestionario</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
