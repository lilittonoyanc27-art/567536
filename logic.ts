/**
 * Pure functions for Muñeca Brava app
 */

export function timecodeToSeconds(timecode: string): number {
  const parts = timecode.trim().split(':');
  if (parts.length === 2) {
    const minutes = parseInt(parts[0], 10) || 0;
    const seconds = parseInt(parts[1], 10) || 0;
    return minutes * 60 + seconds;
  }
  if (parts.length === 3) {
    const hours = parseInt(parts[0], 10) || 0;
    const minutes = parseInt(parts[1], 10) || 0;
    const seconds = parseInt(parts[2], 10) || 0;
    return hours * 3600 + minutes * 60 + seconds;
  }
  return 0;
}

export function secondsToTimecode(totalSeconds: number): string {
  const rounded = Math.floor(Math.max(0, totalSeconds));
  const m = Math.floor(rounded / 60);
  const s = rounded % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

export function findActiveSubtitleIndex(
  currentTime: number,
  subtitles: { seconds: number; endSeconds: number }[]
): number {
  if (!subtitles || subtitles.length === 0) return -1;
  for (let i = 0; i < subtitles.length; i++) {
    const sub = subtitles[i];
    if (currentTime >= sub.seconds && currentTime < sub.endSeconds) {
      return i;
    }
  }
  // If slightly past the last sub or between gaps, find the closest preceding subtitle
  for (let i = subtitles.length - 1; i >= 0; i--) {
    if (currentTime >= subtitles[i].seconds) {
      return i;
    }
  }
  return 0;
}

export function calculatePercentage(score: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((score / total) * 100);
}

export function checkOrderSequence(userOrder: number[], targetOrder: number[]): boolean {
  if (userOrder.length !== targetOrder.length) return false;
  return userOrder.every((val, index) => val === targetOrder[index]);
}

export function getPerformanceFeedback(percentage: number): {
  titleEs: string;
  titleHy: string;
  messageEs: string;
  messageHy: string;
  level: 'excelente' | 'bueno' | 'regular';
} {
  if (percentage >= 85) {
    return {
      titleEs: '¡Excelente! ¡Sos un verdadero porteño!',
      titleHy: 'Հիանալի՜ է։ Դու իսկական արգենտինացի ես։',
      messageEs: '¡Dominás el diálogo, el lunfardo y los giros de Esperanza y Martín a la perfección!',
      messageHy: 'Դու կատարյալ կերպով տիրապետում ես երկխոսությանը, արգենտինյան ժարգոնին և Մոնիտայի ու Մարտինի արտահայտություններին։',
      level: 'excelente',
    };
  } else if (percentage >= 60) {
    return {
      titleEs: '¡Muy buen trabajo! Vas por buen camino.',
      titleHy: 'Շատ լավ աշխատանք։ Դու ճիշտ ուղու վրա ես։',
      messageEs: 'Entendiste los puntos clave del conflicto y las intenciones de los personajes.',
      messageHy: 'Դու հասկացար կոնֆլիկտի գլխավոր կետերն ու հերոսների նպատակները։',
      level: 'bueno',
    };
  } else {
    return {
      titleEs: '¡Buen intento! Te sugerimos repasar el vídeo.',
      titleHy: 'Լավ փորձ էր։ Առաջարկում ենք կրկին դիտել տեսանյութը։',
      messageEs: 'Mirá la escena una vez más prestando atención a los subtítulos y expresiones.',
      messageHy: 'Մեկ անգամ ևս դիտիր տեսարանը՝ ուշադրություն դարձնելով սուբտիտրերին և արտահայտություններին։',
      level: 'regular',
    };
  }
}
