import { cn } from '@/lib/utils';

export const ProgressBar = ({ value, className }: { value: number; className?: string }) => (
  <div className={cn('h-2 w-full overflow-hidden rounded-full bg-slate-700/70 light:bg-slate-200', className)}>
    <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all" style={{ width: `${value}%` }} />
  </div>
);
