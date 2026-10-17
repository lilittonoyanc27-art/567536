import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2, Globe, CheckCircle2 } from 'lucide-react';
import { ARGENTINE_LESSONS } from './data.ts';
import { InteractiveSentence } from './InteractiveSentence.tsx';

export const ArgentineSpanishView: React.FC = () => {
  const [revealedAll, setRevealedAll] = useState(false);

  return (
    <div className="space-y-6 max-w-4xl w-full mx-auto">
      {/* Header banner */}
      <div className="bg-gradient-to-r from-red-950 via-amber-950/70 to-red-950 p-5 rounded-2xl border border-amber-600/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-2xl">
            🇦🇷
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-amber-200">
              Español Argentino (Rioplatense)
            </h2>
            <p className="text-sm text-stone-300 mt-1">
              Descubre los secretos del voseo, la pronunciación porteña y el lunfardo presentes en el vídeo.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setRevealedAll(!revealedAll)}
          className="px-4 py-2 rounded-xl bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/40 text-amber-200 text-xs sm:text-sm font-semibold transition-all shrink-0"
        >
          {revealedAll ? '🙈 Ocultar armenio' : '👁️ Ver todo en armenio'}
        </button>
      </div>

      {/* Main Lessons Cards */}
      <div className="space-y-6">
        {ARGENTINE_LESSONS.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-[#2A080C]/90 border border-amber-800/40 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-4"
          >
            {/* Lesson Title & Badge */}
            <div className="flex items-center justify-between gap-2 border-b border-amber-900/40 pb-3">
              <h3 className="text-lg sm:text-xl font-bold text-amber-100 flex items-center gap-2">
                <span>{lesson.titleEs}</span>
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold shrink-0">
                {lesson.badge}
              </span>
            </div>

            {/* Armenian title subtitle */}
            <div className="text-sm text-amber-400 font-armenian">
              {lesson.titleHy}
            </div>

            {/* Explanation with Interactive sentence */}
            <InteractiveSentence
              spanish={lesson.explanationEs}
              armenian={lesson.explanationHy}
              size="md"
              forceOpen={revealedAll}
              className="bg-[#1C0407] border-amber-900/50"
            />

            {/* Comparison examples */}
            <div className="space-y-2 pt-2">
              <div className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                Ejemplos del vídeo y comparativa con el español estándar:
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {lesson.examples.map((eg, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#180306] border border-amber-900/40 space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs text-stone-400">
                      <span>Estándar (España/LatAm)</span>
                      <span className="text-stone-500">{eg.standardEs}</span>
                    </div>

                    <div className="pt-1">
                      <InteractiveSentence
                        spanish={eg.argentineEs}
                        armenian={eg.armenian}
                        badgeLabel="🇦🇷 Rioplatense"
                        size="sm"
                        forceOpen={revealedAll}
                        className="bg-[#2D0A10] border-amber-700/40 p-2.5"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mini Vocab Cheat Sheet Table */}
      <div className="bg-[#2A080C]/90 border border-amber-800/40 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-4">
        <h3 className="text-lg font-bold text-amber-200 flex items-center gap-2">
          <span>📚 Glosario Rápido del Fragmento</span>
        </h3>
        <p className="text-xs text-stone-300">
          Toca cualquier término para ver su significado cultural en armenio:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {[
            {
              term: 'Chabón',
              meaningEs: 'Tipo, chico, hombre joven (lunfardo)',
              meaningHy: 'Տղա, երիտասարդ, մարդ (լունֆարդո ժարգոն)',
            },
            {
              term: 'Canchero',
              meaningEs: 'Que se cree seguro, seductor o astuto',
              meaningHy: 'Ինքնավստահ, շողոքորթ, իրեն գայթակղիչ համարող',
            },
            {
              term: 'Grasa',
              meaningEs: 'De mal gusto, vulgar, ordinario',
              meaningHy: 'Անճաշակ, վուլգար, անտաշ',
            },
            {
              term: 'Cortala',
              meaningEs: '¡Basta!, no sigas con ese tema',
              meaningHy: 'Վե՛րջ տուր, բավակա՛ն է',
            },
            {
              term: 'Copetín',
              meaningEs: 'Aperitivo o cóctel con bocaditos',
              meaningHy: 'Ապերիտիվ, կոկտեյլ թեթև նախուտեստով',
            },
            {
              term: 'Chau',
              meaningEs: 'Adiós / Hasta luego informal',
              meaningHy: 'Ցտեսություն, չաո',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-1">
              <InteractiveSentence
                spanish={`${item.term} — ${item.meaningEs}`}
                armenian={item.meaningHy}
                size="sm"
                forceOpen={revealedAll}
                className="bg-[#1C0407] border-amber-900/50"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
