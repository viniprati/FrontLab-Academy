'use client';

import { useEffect, useState } from 'react';

import { storageKeys } from '@/lib/storage';

export type AccessibilityPreferences = {
  fontScale: 'normal' | 'large' | 'xlarge';
  contrast: 'default' | 'high';
  reduceMotion: boolean;
  readableFont: boolean;
};

const defaultPreferences: AccessibilityPreferences = {
  fontScale: 'normal',
  contrast: 'default',
  reduceMotion: false,
  readableFont: false
};

const sanitizePreferences = (value: unknown): AccessibilityPreferences => {
  if (!value || typeof value !== 'object') return defaultPreferences;

  const candidate = value as Partial<AccessibilityPreferences>;
  const fontScale = candidate.fontScale === 'large' || candidate.fontScale === 'xlarge' ? candidate.fontScale : 'normal';
  const contrast = candidate.contrast === 'high' ? 'high' : 'default';

  return {
    fontScale,
    contrast,
    reduceMotion: Boolean(candidate.reduceMotion),
    readableFont: Boolean(candidate.readableFont)
  };
};

export const useAccessibilityPreferences = () => {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(defaultPreferences);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKeys.accessibility);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      setPreferences(sanitizePreferences(parsed));
    } catch {
      setPreferences(defaultPreferences);
    }
  }, []);

  useEffect(() => {
    document.body.dataset.fontScale = preferences.fontScale;
    document.body.dataset.contrast = preferences.contrast;
    document.body.dataset.reduceMotion = preferences.reduceMotion ? 'true' : 'false';
    document.body.dataset.readableFont = preferences.readableFont ? 'true' : 'false';

    try {
      window.localStorage.setItem(storageKeys.accessibility, JSON.stringify(preferences));
    } catch {
      // Ignore storage errors in restricted browsers.
    }
  }, [preferences]);

  return {
    preferences,
    setPreferences,
    setFontScale: (fontScale: AccessibilityPreferences['fontScale']) => setPreferences((current) => ({ ...current, fontScale })),
    setContrast: (contrast: AccessibilityPreferences['contrast']) => setPreferences((current) => ({ ...current, contrast })),
    toggleReduceMotion: () => setPreferences((current) => ({ ...current, reduceMotion: !current.reduceMotion })),
    toggleReadableFont: () => setPreferences((current) => ({ ...current, readableFont: !current.readableFont }))
  };
};
