import { cn } from '@/lib/utils';

export const Badge = ({ label, className }: { label: string; className?: string }) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full border border-slate-600/70 bg-slate-800/70 px-2.5 py-1 text-xs font-medium text-slate-200 light:border-slate-300 light:bg-slate-50 light:text-slate-700',
      className
    )}
  >
    {label}
  </span>
);
