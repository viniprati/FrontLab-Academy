import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export const Card = ({ children, className }: { children: ReactNode; className?: string }) => (
  <article
    className={cn(
      'rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-5 shadow-[0_16px_56px_rgba(2,8,20,0.45)] backdrop-blur',
      className
    )}
  >
    {children}
  </article>
);
