/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Video,
  HelpCircle,
  Gamepad2,
  BookOpen,
  Trophy,
  Sparkles,
  Heart,
  Volume2,
  Info,
  Flame,
} from 'lucide-react';
import { VideoSubtitlesPlayer } from './VideoSubtitlesPlayer.tsx';
import { QuizView } from './QuizView.tsx';
import { GamesView } from './GamesView.tsx';
import { ArgentineSpanishView } from './ArgentineSpanishView.tsx';
import { FinalTestView } from './FinalTestView.tsx';

export default function App() {
  const [activeTab, setActiveTab] = useState<'video' | 'quiz' | 'games' | 'argentino' | 'final'>('video');
  const [videoSeekTarget, setVideoSeekTarget] = useState<number | undefined>(undefined);

  const handlePlayVideoSegment = (seconds: number) => {
    setVideoSeekTarget(seconds);
    setActiveTab('video');
  };

  const navItems = [
    { id: 'video', label: 'Vídeo y Subtítulos', icon: Video, sub: 'Тեսանյութ և սուբտիտրեր' },
    { id: 'quiz', label: 'Comprensión (15)', icon: HelpCircle, sub: 'Ըմբռնման հարցեր' },
    { id: 'games', label: 'Juegos (6)', icon: Gamepad2, sub: 'Ինտերակտիվ խաղեր' },
    { id: 'argentino', label: 'Español Argentino', icon: BookOpen, sub: 'Արգենտինյան իսպաներեն' },
    { id: 'final', label: 'El Desafío (20)', icon: Trophy, sub: 'Եզրափակիչ թեստ' },
  ] as const;

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-gradient-to-b from-[#220408] via-[#1A0307] to-[#120104] text-stone-100 flex flex-col selection:bg-amber-500 selection:text-stone-950 relative">
      {/* Decorative Warm Lighting Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden max-w-full z-0">
        <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-red-700/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-amber-600/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-orange-700/15 rounded-full blur-[100px]" />
      </div>

      {/* Main Header */}
      <header className="relative z-10 w-full max-w-full border-b border-amber-900/40 bg-[#1D0307]/90 backdrop-blur-md sticky top-0 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-red-600 p-0.5 shadow-md flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-[#200408] rounded-[10px] flex items-center justify-center text-xl">
                💃
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-lg sm:text-xl text-amber-200 tracking-wide font-cinzel">
                  Muñeca Brava
                </h1>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-950 border border-amber-600/40 text-amber-300 font-semibold">
                  🇪🇸 🇦🇲 Español Interactivo
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-amber-400/80 font-armenian">
                Իսպաներենի ինտերակտիվ դասընթաց՝ հայերեն թարգմանությամբ ըստ սեղմման
              </p>
            </div>
          </div>

          {/* Quick info badges */}
          <div className="flex items-center gap-2 text-xs">
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-950/40 border border-amber-800/40 text-amber-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Toca cualquier frase para traducir al armenio</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 pt-1 overflow-x-auto custom-scrollbar">
          <nav className="flex space-x-2 min-w-max" aria-label="Tabs">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2.5 px-4.5 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 shadow-md ring-1 ring-amber-300 font-bold scale-[1.02]'
                      : 'bg-[#29070D]/80 text-amber-200/90 hover:bg-[#3D0A13] hover:text-amber-100 border border-amber-900/40'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="w-4.5 h-4.5 shrink-0" />
                  <div className="text-left">
                    <div className="leading-tight">{item.label}</div>
                    <div className={`text-xs font-armenian font-normal mt-0.5 ${isActive ? 'text-stone-900 font-medium' : 'text-amber-300/80'}`}>
                      {item.sub}
                    </div>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content Viewport */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'video' && (
          <VideoSubtitlesPlayer
            externalCurrentTime={videoSeekTarget}
            onSelectTimecode={(sec) => setVideoSeekTarget(sec)}
          />
        )}

        {activeTab === 'quiz' && <QuizView />}

        {activeTab === 'games' && (
          <GamesView onPlayVideoSegment={handlePlayVideoSegment} />
        )}

        {activeTab === 'argentino' && <ArgentineSpanishView />}

        {activeTab === 'final' && (
          <FinalTestView onBackToVideo={() => setActiveTab('video')} />
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-amber-900/40 bg-[#160205] py-6 text-center text-xs text-stone-400">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="flex items-center justify-center gap-1.5 text-amber-300/90 font-medium">
            <span>Aprende Español con Muñeca Brava</span>
            <span className="text-red-500">❤️</span>
            <span>Իսպաներենի ուսուցում հայերենով</span>
          </p>
          <p className="text-stone-500 text-[11px]">
            Natalia Oreiro (Esperanza «Monita» Muñoz) & Facundo Arana (Martín Quesada). Todos los diálogos originales sincronizados.
          </p>
        </div>
      </footer>
    </div>
  );
}
