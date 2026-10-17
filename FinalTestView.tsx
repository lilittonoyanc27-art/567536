import React, { useState } from 'react';
import {
  Trophy,
  RotateCcw,
  Video,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  XCircle,
  HelpCircle,
  AlertTriangle,
  Award,
} from 'lucide-react';
import { FINAL_TEST_QUESTIONS } from './data.ts';
import { InteractiveSentence } from './InteractiveSentence.tsx';
import { calculatePercentage, getPerformanceFeedback } from './logic.ts';

interface FinalTestViewProps {
  onBackToVideo: () => void;
}

export const FinalTestView: React.FC<FinalTestViewProps> = ({ onBackToVideo }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [showOnlyMistakes, setShowOnlyMistakes] = useState<boolean>(false);

  const currentQ = FINAL_TEST_QUESTIONS[currentIndex];
  const selectedKey = selectedAnswers[currentQ.id];

  const handleSelect = (key: string) => {
    setSelectedAnswers(prev => ({ ...prev, [currentQ.id]: key }));
  };

  const nextQuestion = () => {
    if (currentIndex < FINAL_TEST_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const restartTest = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
    setShowOnlyMistakes(false);
  };

  // Stats
  const correctCount = FINAL_TEST_QUESTIONS.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctKey ? acc + 1 : acc;
  }, 0);

  const percentage = calculatePercentage(correctCount, FINAL_TEST_QUESTIONS.length);
  const feedback = getPerformanceFeedback(percentage);

  const incorrectQuestions = FINAL_TEST_QUESTIONS.filter(
    q => selectedAnswers[q.id] !== q.correctKey
  );

  return (
    <div className="space-y-6 max-w-4xl w-full mx-auto">
      {/* Banner */}
      <div className="bg-gradient-to-r from-red-950 via-amber-950/70 to-red-950 p-5 rounded-2xl border border-amber-600/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-amber-200 flex items-center gap-2">
            <span>🏆 El Desafío de Muñeca Brava</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 font-bold">
              20 preguntas
            </span>
          </h2>
          <p className="text-sm text-stone-300 mt-1">
            Examen final integral: comprensión, léxico, gramática y modismos rioplatenses. Toca cualquier texto para ver armenio (🇦🇲).
          </p>
        </div>

        <button
          type="button"
          onClick={restartTest}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-950/60 hover:bg-amber-900 border border-amber-700/50 text-amber-300 text-xs sm:text-sm font-medium transition-colors shrink-0"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Comenzar de nuevo</span>
        </button>
      </div>

      {!isCompleted ? (
        <div className="bg-[#2A080C]/90 border border-amber-800/40 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-6">
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-amber-300/90 pb-3 border-b border-amber-900/40">
            <div className="flex items-center gap-2">
              <span className="font-semibold">
                Pregunta {currentIndex + 1} de {FINAL_TEST_QUESTIONS.length}
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-red-950 border border-amber-700/30 text-amber-300 uppercase">
                {currentQ.category.replace('_', ' ')}
              </span>
            </div>
            <span className="text-stone-400">
              Respondidas: <strong className="text-amber-400">{Object.keys(selectedAnswers).length}</strong> / {FINAL_TEST_QUESTIONS.length}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 rounded-full bg-stone-900 overflow-hidden border border-amber-950">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / FINAL_TEST_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Question Box */}
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

          {/* Options */}
          <div className="space-y-3 pt-2">
            <div className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
              Opciones: toca el texto para ver armenio 🇦🇲, o presiona «Elegir» para responder
            </div>

            {currentQ.options.map(option => {
              const isSelected = selectedKey === option.key;

              return (
                <div
                  key={option.key}
                  className={`rounded-xl border p-3.5 transition-all flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 ${
                    isSelected
                      ? 'border-amber-400 bg-amber-950/40 ring-1 ring-amber-400/50'
                      : 'border-amber-900/40 hover:border-amber-600/50 bg-[#1D0407]/80'
                  }`}
                >
                  <div className="flex-1 flex items-start gap-3">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 border mt-1 ${
                        isSelected
                          ? 'bg-amber-500 text-stone-950 font-bold border-amber-300'
                          : 'bg-stone-900 text-stone-300 border-stone-700'
                      }`}
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

                  <div className="sm:shrink-0 flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => handleSelect(option.key)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer active:scale-95 ${
                        isSelected
                          ? 'bg-amber-500 text-stone-950 border border-amber-300'
                          : 'bg-red-950 hover:bg-amber-950 text-amber-200 border border-amber-800/40'
                      }`}
                    >
                      {isSelected ? '✓ Seleccionado' : 'Elegir esta'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
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

            <button
              type="button"
              disabled={!selectedKey}
              onClick={nextQuestion}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold text-sm shadow-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-1"
            >
              <span>
                {currentIndex === FINAL_TEST_QUESTIONS.length - 1
                  ? 'Finalizar examen y ver nota'
                  : 'Siguiente pregunta'}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="bg-[#2A080C] border-2 border-amber-500/60 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
          {/* Top Score Summary */}
          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-orange-600 p-1 shadow-2xl animate-bounce">
              <div className="w-full h-full rounded-full bg-red-950 flex items-center justify-center text-5xl">
                {percentage >= 80 ? '🥇' : percentage >= 50 ? '🥈' : '🥉'}
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-200">
                Resultado de «El Desafío de Muñeca Brava»
              </h3>
              <p className="text-amber-400 text-sm font-armenian mt-1">
                «Մունյեկա Բրավայի մարտահրավեր» արդյունքները
              </p>
            </div>

            {/* Score & Percentage Badges */}
            <div className="inline-flex items-center gap-6 p-4 rounded-2xl bg-black/50 border border-amber-600/40 shadow-inner">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-amber-300">
                  {correctCount} / {FINAL_TEST_QUESTIONS.length}
                </div>
                <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">
                  Aciertos totales
                </div>
              </div>
              <div className="w-px h-12 bg-amber-700/40" />
              <div className="text-center">
                <div className="text-4xl font-extrabold text-orange-400">
                  {percentage}%
                </div>
                <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">
                  Porcentaje de éxito
                </div>
              </div>
            </div>

            {/* Personalized Feedback Sentence with Armenian translation */}
            <div className="max-w-xl mx-auto pt-2">
              <InteractiveSentence
                spanish={feedback.messageEs}
                armenian={feedback.messageHy}
                badgeLabel={feedback.titleEs}
                size="lg"
                className="bg-[#380A10] border-amber-500/50"
              />
            </div>
          </div>

          {/* Action Buttons: Repetir & Volver al vídeo */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-amber-900/40">
            <button
              type="button"
              onClick={restartTest}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Repetir examen (Կրկնել)</span>
            </button>

            <button
              type="button"
              onClick={onBackToVideo}
              className="px-6 py-3 rounded-xl bg-red-950 hover:bg-amber-950 border border-amber-600/60 text-amber-200 font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Video className="w-4 h-4" />
              <span>Volver al vídeo (Վերադառնալ տեսանյութին)</span>
            </button>
          </div>

          {/* Mistakes Breakdown (if any) */}
          <div className="space-y-4 pt-4 border-t border-amber-900/40">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-lg text-amber-100 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <span>
                  Revisión de respuestas ({incorrectQuestions.length} falladas de {FINAL_TEST_QUESTIONS.length})
                </span>
              </h4>

              <button
                type="button"
                onClick={() => setShowOnlyMistakes(!showOnlyMistakes)}
                className="text-xs text-amber-400 hover:underline"
              >
                {showOnlyMistakes ? 'Ver todas las preguntas' : 'Filtrar solo errores'}
              </button>
            </div>

            <div className="space-y-4">
              {(showOnlyMistakes ? incorrectQuestions : FINAL_TEST_QUESTIONS).map(q => {
                const userChoice = selectedAnswers[q.id];
                const isCorrect = userChoice === q.correctKey;
                const correctOpt = q.options.find(o => o.key === q.correctKey);
                const userOpt = q.options.find(o => o.key === userChoice);

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border space-y-3 ${
                      isCorrect
                        ? 'bg-[#180306]/80 border-emerald-900/40'
                        : 'bg-[#250409] border-rose-900/60 ring-1 ring-rose-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-amber-400">Pregunta #{q.id}</span>
                      {isCorrect ? (
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Correcta
                        </span>
                      ) : (
                        <span className="text-rose-400 flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> Fallada
                        </span>
                      )}
                    </div>

                    <InteractiveSentence
                      spanish={q.questionEs}
                      armenian={q.questionHy}
                      size="sm"
                      className="bg-transparent border-transparent p-0 shadow-none hover:bg-transparent"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                      <div className="p-2.5 rounded-lg bg-black/40 border border-stone-800">
                        <div className="text-stone-400 mb-0.5">Tu respuesta:</div>
                        <div className={isCorrect ? 'text-emerald-300 font-bold' : 'text-rose-300 font-bold'}>
                          {userChoice ? `${userChoice}) ${userOpt?.textEs}` : 'Sin responder'}
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-black/40 border border-amber-900/40">
                        <div className="text-amber-400 mb-0.5">Respuesta correcta:</div>
                        <div className="text-amber-200 font-bold">
                          {q.correctKey}) {correctOpt?.textEs}
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-stone-950/40 border border-amber-950">
                      <div className="text-[11px] text-stone-400 mb-1">
                        Explicación (toca para ver armenio):
                      </div>
                      <InteractiveSentence
                        spanish={q.explanationEs}
                        armenian={q.explanationHy}
                        size="sm"
                        className="bg-transparent border-transparent p-0 shadow-none"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
