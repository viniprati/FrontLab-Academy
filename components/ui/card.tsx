import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export const Card = ({ children, className }: { children: ReactNode; className?: string }) => (
  <article
    className={cn(
      'rounded-2xl border border-slate-700/70 bg-slate-900/72 p-5 shadow-[0_8px_28px_rgba(15,23,42,0.2)] backdrop-blur-sm light:border-slate-200 light:bg-white/95 light:shadow-[0_8px_24px_rgba(15,23,42,0.05)]',
      className
    )}
  >
    {children}
  </article>
);
