'use client';

import { Accessibility, Contrast, Pause, Play, Square, Type, Volume2, Waves, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

import { useAccessibilityPreferences } from '@/hooks/useAccessibilityPreferences';
import { resolvePreferredVoice, splitSpeechText } from '@/lib/speech';
import { useMounted } from '@/hooks/useMounted';
import { cn } from '@/lib/utils';

const fontOptions: { value: 'normal' | 'large' | 'xlarge'; label: string }[] = [
  { value: 'normal', label: 'Fonte normal' },
  { value: 'large', label: 'Fonte grande' },
  { value: 'xlarge', label: 'Fonte extra grande' }
];

export const AccessibilityControls = () => {
  const mounted = useMounted();
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speechRate, setSpeechRate] = useState(1);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState('');
  const { preferences, setFontScale, setContrast, toggleReadableFont, toggleReduceMotion } = useAccessibilityPreferences();

  const speechLabel = useMemo(() => {
    if (!speechSupported) return 'Nao suportado neste navegador';
    if (isReading && isPaused) return 'Leitura pausada';
    if (isReading) return 'Lendo agora';
    return 'Pronto para leitura';
  }, [isPaused, isReading, speechSupported]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setSpeechSupported('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !speechSupported) return;

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);
      if (!selectedVoiceURI) {
        const preferred = resolvePreferredVoice(voices);
        if (preferred) setSelectedVoiceURI(preferred.voiceURI);
      }
    };

    loadVoices();
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
  }, [selectedVoiceURI, speechSupported]);

  useEffect(() => {
    if (!open) return;

    const onClickOutside = (event: MouseEvent) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(event.target as Node)) setOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('mousedown', onClickOutside);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('mousedown', onClickOutside);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(
    () => () => {
      if (typeof window === 'undefined' || !speechSupported) return;
      window.speechSynthesis.cancel();
    },
    [speechSupported]
  );

  const stopReading = () => {
    if (typeof window === 'undefined' || !speechSupported) return;
    window.speechSynthesis.cancel();
    setIsReading(false);
    setIsPaused(false);
  };

  const resolveReadableContent = () => {
    const moduleMain = document.querySelector('#module-main-content');
    const main = document.querySelector('main');
    const source = moduleMain ?? main ?? document.body;
    const readableSelectors = 'h1, h2, h3, h4, p, li, summary';
    const collected = Array.from(source.querySelectorAll(readableSelectors))
      .map((node) => node.textContent?.trim() ?? '')
      .filter(Boolean)
      .join('. ');
    const text = collected.replace(/\s+/g, ' ').trim();
    return text ?? '';
  };

  const startReading = () => {
    if (typeof window === 'undefined' || !speechSupported) return;

    const text = resolveReadableContent();
    if (!text) return;

    window.speechSynthesis.cancel();
    const chunks = splitSpeechText(text);
    const selectedVoice = availableVoices.find((voice) => voice.voiceURI === selectedVoiceURI) ?? resolvePreferredVoice(availableVoices);
    let chunkIndex = 0;

    const speakChunk = () => {
      if (chunkIndex >= chunks.length) {
        setIsReading(false);
        setIsPaused(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(chunks[chunkIndex]);
      utterance.lang = selectedVoice?.lang ?? 'pt-BR';
      utterance.rate = speechRate;
      if (selectedVoice) utterance.voice = selectedVoice;

      utterance.onend = () => {
        chunkIndex += 1;
        speakChunk();
      };
      utterance.onerror = () => {
        setIsReading(false);
        setIsPaused(false);
      };

      window.speechSynthesis.speak(utterance);
    };

    setIsReading(true);
    setIsPaused(false);
    speakChunk();
  };

  const togglePauseReading = () => {
    if (typeof window === 'undefined' || !speechSupported || !isReading) return;
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      return;
    }
    window.speechSynthesis.pause();
    setIsPaused(true);
  };

  if (!mounted) return null;

  return (
    <div className="relative" ref={panelRef}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls="accessibility-panel"
        className="inline-flex items-center gap-2 rounded-xl border border-slate-600/70 bg-slate-800/65 px-3 py-2 text-sm font-semibold text-slate-100 transition-colors hover:bg-slate-700/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 light:border-slate-300 light:bg-white light:text-slate-700 light:hover:bg-slate-100"
      >
        <Accessibility className="h-4 w-4" aria-hidden="true" />
        <span className="hidden md:inline">Acessibilidade</span>
      </button>

      {open && (
        <div
          id="accessibility-panel"
          role="dialog"
          aria-modal="false"
          aria-label="Preferencias de acessibilidade"
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-[min(92vw,21rem)] rounded-2xl border border-slate-700/70 bg-slate-900/95 p-4 shadow-glow backdrop-blur-sm light:border-slate-200 light:bg-white"
        >
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-100 light:text-slate-900">Preferencias de acessibilidade</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1 text-slate-300 hover:bg-slate-800/70 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-900"
              aria-label="Fechar painel de acessibilidade"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <fieldset className="space-y-2">
            <legend className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-300 light:text-slate-600">
              <Type className="h-4 w-4" aria-hidden="true" /> Tamanho da fonte
            </legend>
            <div className="grid gap-2">
              {fontOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFontScale(option.value)}
                  aria-pressed={preferences.fontScale === option.value}
                  className={cn(
                    'rounded-lg border px-3 py-2 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70',
                    preferences.fontScale === option.value
                      ? 'border-blue-400/70 bg-blue-500/15 text-blue-200 light:border-blue-300 light:bg-blue-50 light:text-blue-700'
                      : 'border-slate-700/70 bg-slate-800/60 text-slate-200 hover:bg-slate-800 light:border-slate-200 light:bg-slate-50 light:text-slate-700 light:hover:bg-slate-100'
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-4 space-y-2">
            <div className="rounded-lg border border-slate-700/70 bg-slate-800/60 p-3 light:border-slate-200 light:bg-slate-50">
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-100 light:text-slate-900">
                <Volume2 className="h-4 w-4" aria-hidden="true" /> Leitor de audio
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={startReading}
                  disabled={!speechSupported}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-600/70 bg-slate-800/65 px-2.5 py-1.5 text-xs font-semibold text-slate-100 transition-colors hover:bg-slate-700/70 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 light:border-slate-300 light:bg-white light:text-slate-700 light:hover:bg-slate-100"
                >
                  <Play className="h-3.5 w-3.5" aria-hidden="true" /> Ler
                </button>
                <button
                  type="button"
                  onClick={togglePauseReading}
                  disabled={!speechSupported || !isReading}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-600/70 bg-slate-800/65 px-2.5 py-1.5 text-xs font-semibold text-slate-100 transition-colors hover:bg-slate-700/70 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 light:border-slate-300 light:bg-white light:text-slate-700 light:hover:bg-slate-100"
                >
                  <Pause className="h-3.5 w-3.5" aria-hidden="true" /> {isPaused ? 'Retomar' : 'Pausar'}
                </button>
                <button
                  type="button"
                  onClick={stopReading}
                  disabled={!speechSupported || !isReading}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-600/70 bg-slate-800/65 px-2.5 py-1.5 text-xs font-semibold text-slate-100 transition-colors hover:bg-slate-700/70 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 light:border-slate-300 light:bg-white light:text-slate-700 light:hover:bg-slate-100"
                >
                  <Square className="h-3.5 w-3.5" aria-hidden="true" /> Parar
                </button>
              </div>
              <label className="mt-2 flex items-center gap-2 text-xs text-slate-300 light:text-slate-700">
                Velocidade
                <select
                  value={speechRate}
                  onChange={(event) => setSpeechRate(Number(event.target.value))}
                  className="rounded-lg border border-slate-600/70 bg-slate-800/65 px-2 py-1 text-xs text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 light:border-slate-300 light:bg-white light:text-slate-700"
                  disabled={!speechSupported}
                >
                  <option value={0.85}>0.85x</option>
                  <option value={1}>1x</option>
                  <option value={1.15}>1.15x</option>
                  <option value={1.3}>1.3x</option>
                </select>
              </label>
              <label className="mt-2 flex items-center gap-2 text-xs text-slate-300 light:text-slate-700">
                Voz
                <select
                  value={selectedVoiceURI}
                  onChange={(event) => setSelectedVoiceURI(event.target.value)}
                  className="max-w-[12rem] rounded-lg border border-slate-600/70 bg-slate-800/65 px-2 py-1 text-xs text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 light:border-slate-300 light:bg-white light:text-slate-700"
                  disabled={!speechSupported}
                >
                  {availableVoices.length ? (
                    (availableVoices.filter((voice) => voice.lang.toLowerCase().startsWith('pt')).length
                      ? availableVoices.filter((voice) => voice.lang.toLowerCase().startsWith('pt'))
                      : availableVoices
                    ).map((voice) => (
                      <option key={voice.voiceURI} value={voice.voiceURI}>
                        {voice.name}
                      </option>
                    ))
                  ) : (
                    <option value="">Carregando...</option>
                  )}
                </select>
              </label>
              <p className="mt-2 text-xs text-slate-400" role="status" aria-live="polite">
                {speechLabel}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setContrast(preferences.contrast === 'high' ? 'default' : 'high')}
              aria-pressed={preferences.contrast === 'high'}
              className="flex w-full items-center justify-between rounded-lg border border-slate-700/70 bg-slate-800/60 px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 light:border-slate-200 light:bg-slate-50 light:text-slate-700 light:hover:bg-slate-100"
            >
              <span className="inline-flex items-center gap-2">
                <Contrast className="h-4 w-4" aria-hidden="true" /> Alto contraste
              </span>
              <span>{preferences.contrast === 'high' ? 'Ativo' : 'Inativo'}</span>
            </button>

            <button
              type="button"
              onClick={toggleReduceMotion}
              aria-pressed={preferences.reduceMotion}
              className="flex w-full items-center justify-between rounded-lg border border-slate-700/70 bg-slate-800/60 px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 light:border-slate-200 light:bg-slate-50 light:text-slate-700 light:hover:bg-slate-100"
            >
              <span className="inline-flex items-center gap-2">
                <Waves className="h-4 w-4" aria-hidden="true" /> Reduzir movimento
              </span>
              <span>{preferences.reduceMotion ? 'Ativo' : 'Inativo'}</span>
            </button>

            <button
              type="button"
              onClick={toggleReadableFont}
              aria-pressed={preferences.readableFont}
              className="flex w-full items-center justify-between rounded-lg border border-slate-700/70 bg-slate-800/60 px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 light:border-slate-200 light:bg-slate-50 light:text-slate-700 light:hover:bg-slate-100"
            >
              <span>Fonte de alta legibilidade</span>
              <span>{preferences.readableFont ? 'Ativo' : 'Inativo'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
