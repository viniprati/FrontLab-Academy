import { cn } from '@/lib/utils';

export const ProgressBar = ({ value, className, ariaLabel }: { value: number; className?: string; ariaLabel?: string }) => (
  <div
    role="progressbar"
    aria-valuemin={0}
    aria-valuemax={100}
    aria-valuenow={Math.round(value)}
    aria-label={ariaLabel ?? 'Progresso'}
    className={cn('h-2 w-full overflow-hidden rounded-full bg-slate-700/70 light:bg-slate-200', className)}
  >
    <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all" style={{ width: `${value}%` }} />
  </div>
);
