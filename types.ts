export interface Subtitle {
  id: number;
  timecode: string;
  seconds: number;
  endSeconds: number;
  speaker: 'Martín' | 'Esperanza' | 'Sebastián' | 'Esperanza & Sebastián';
  spanish: string;
  armenian: string;
  notes?: string;
}

export interface QuizQuestion {
  id: number;
  questionEs: string;
  questionHy: string;
  options: {
    key: string;
    textEs: string;
    textHy: string;
  }[];
  correctKey: string;
  explanationEs: string;
  explanationHy: string;
}

export interface WhoSaidQuestion {
  id: number;
  quoteEs: string;
  quoteHy: string;
  speaker: 'Martín' | 'Esperanza' | 'Sebastián';
  contextEs: string;
  contextHy: string;
}

export interface FillBlankQuestion {
  id: number;
  sentenceWithBlankEs: string;
  sentenceCompleteEs: string;
  sentenceHy: string;
  missingWord: string;
  optionsEs: string[];
  optionsHy: string[];
}

export interface TrueFalseQuestion {
  id: number;
  statementEs: string;
  statementHy: string;
  isTrue: boolean;
  explanationEs: string;
  explanationHy: string;
}

export interface DialogueOrderStep {
  id: number;
  order: number;
  speaker: string;
  textEs: string;
  textHy: string;
}

export interface ExpressionItem {
  id: number;
  phraseEs: string;
  phraseHy: string;
  literalEs?: string;
  literalHy?: string;
  meaningEs: string;
  meaningHy: string;
  exampleEs: string;
  exampleHy: string;
  optionsEs: string[];
  optionsHy: string[];
  correctOptionIndex: number;
}

export interface WhatHappensNextQuestion {
  id: number;
  pauseAtSeconds: number;
  continueAtSeconds: number;
  promptEs: string;
  promptHy: string;
  precedingDialogueEs: string;
  precedingDialogueHy: string;
  options: {
    key: string;
    textEs: string;
    textHy: string;
    isCorrect: boolean;
  }[];
  revealExplanationEs: string;
  revealExplanationHy: string;
}

export interface FinalExamQuestion {
  id: number;
  category: 'comprensión' | 'vocabulario' | 'gramática' | 'expresión_argentina';
  questionEs: string;
  questionHy: string;
  options: {
    key: string;
    textEs: string;
    textHy: string;
  }[];
  correctKey: string;
  explanationEs: string;
  explanationHy: string;
}
