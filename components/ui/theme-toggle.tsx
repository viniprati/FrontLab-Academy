'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { useMounted } from '@/hooks/useMounted';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <div className="h-9 w-9 rounded-lg border border-slate-700/70 bg-slate-800/70 light:border-slate-300 light:bg-white" aria-hidden />;
  }

  const dark = theme === 'dark';

  return (
    <button
      type="button"
      aria-label="Alternar tema"
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/70 bg-slate-800/70 text-slate-100 transition-colors hover:bg-slate-700/75 light:border-slate-300 light:bg-white light:text-slate-700 light:hover:bg-slate-100"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};
