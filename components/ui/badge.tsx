import { cn } from '@/lib/utils';

export const Badge = ({ label, className }: { label: string; className?: string }) => (
  <span className={cn('inline-flex items-center rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-100', className)}>
    {label}
  </span>
);
