import Link from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type BaseProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type AnchorProps = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string };

const styles = {
  primary: 'bg-accent-strong text-white hover:bg-blue-500',
  secondary:
    'border border-slate-700/70 bg-slate-800/65 text-slate-100 hover:border-slate-500/80 hover:bg-slate-700/75 light:border-slate-300 light:bg-white light:text-slate-700 light:hover:border-slate-400 light:hover:bg-slate-50',
  ghost: 'text-slate-200 hover:bg-slate-800/70 light:text-slate-700 light:hover:bg-slate-100'
};

export const Button = (props: ButtonProps | AnchorProps) => {
  const { children, variant = 'primary', className } = props;
  const classes = cn(
    'inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70',
    styles[variant],
    className
  );

  if ('href' in props && typeof props.href === 'string') {
    const { href, ...anchorProps } = props;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { type = 'button', ...buttonProps } = props as ButtonProps;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
};
