import { cn } from '@/lib/utils';

export const ProgressBar = ({ value, className }: { value: number; className?: string }) => (
  <div className={cn('h-2 w-full overflow-hidden rounded-full bg-white/10', className)}>
    <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300 transition-all" style={{ width: `${value}%` }} />
  </div>
);
