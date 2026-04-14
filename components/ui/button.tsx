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
  primary: 'bg-accent text-slate-900 hover:bg-accent-soft',
  secondary: 'border border-white/20 bg-white/5 text-slate-100 hover:border-white/40 hover:bg-white/10',
  ghost: 'text-slate-200 hover:bg-white/10'
};

export const Button = (props: ButtonProps | AnchorProps) => {
  const { children, variant = 'primary', className } = props;
  const classes = cn(
    'inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
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
