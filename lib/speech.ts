const SPEECH_REPLACEMENTS: Array<[RegExp, string]> = [
  [/\bTS\b/gi, 'TypeScript'],
  [/\bJS\b/gi, 'JavaScript'],
  [/\bCSS\b/gi, 'cê ésse ésse'],
  [/\bHTML\b/gi, 'agá tê eme ele'],
  [/=>/g, ' seta '],
  [/===/g, ' estritamente igual a '],
  [/==/g, ' igual a '],
  [/!==/g, ' diferente de '],
  [/\{\s*\}/g, ' bloco vazio '],
  [/\*/g, ' vezes '],
  [/\//g, ' barra '],
  [/_/g, ' ']
];

export const normalizeSpeechText = (value: string) => {
  let normalized = value.replace(/[`~^<>|\\]/g, ' ');

  for (const [pattern, replacement] of SPEECH_REPLACEMENTS) {
    normalized = normalized.replace(pattern, replacement);
  }

  return normalized
    .replace(/\s+/g, ' ')
    .replace(/[;:]+/g, '. ')
    .trim();
};

export const splitSpeechText = (text: string, maxLength = 220) => {
  const clean = normalizeSpeechText(text);
  if (!clean) return [];

  const sentenceLikeParts = clean.split(/(?<=[.!?])\s+/);
  const chunks: string[] = [];

  for (const part of sentenceLikeParts) {
    const sentence = part.trim();
    if (!sentence) continue;

    if (sentence.length <= maxLength) {
      chunks.push(sentence);
      continue;
    }

    const words = sentence.split(' ');
    let current = '';

    for (const word of words) {
      const candidate = current ? `${current} ${word}` : word;
      if (candidate.length > maxLength) {
        if (current) chunks.push(current);
        current = word;
      } else {
        current = candidate;
      }
    }

    if (current) chunks.push(current);
  }

  return chunks;
};

export const resolvePreferredVoice = (voices: SpeechSynthesisVoice[]) => {
  if (!voices.length) return undefined;

  const ptBR = voices.filter((voice) => voice.lang.toLowerCase().startsWith('pt-br'));
  const ptAny = voices.filter((voice) => voice.lang.toLowerCase().startsWith('pt'));
  const pool = ptBR.length ? ptBR : ptAny;
  if (!pool.length) return voices[0];

  const premiumHints = ['google', 'microsoft', 'luciana', 'francisca', 'helena'];
  const premium = pool.find((voice) => premiumHints.some((hint) => voice.name.toLowerCase().includes(hint)));

  return premium ?? pool[0];
};
