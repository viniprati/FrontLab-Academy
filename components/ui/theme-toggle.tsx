'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { useMounted } from '@/hooks/useMounted';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <div className="h-9 w-9 rounded-lg border border-white/20 bg-white/5" aria-hidden />;
  }

  const dark = theme === 'dark';

  return (
    <button
      type="button"
      aria-label="Alternar tema"
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-slate-100 transition hover:bg-white/10"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};
