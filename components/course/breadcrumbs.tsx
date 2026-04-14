import Link from 'next/link';

export const Breadcrumbs = ({ items }: { items: { label: string; href?: string }[] }) => (
  <nav aria-label="breadcrumb" className="text-sm text-slate-400">
    <ol className="flex flex-wrap items-center gap-2">
      {items.map((item, index) => (
        <li key={item.label} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-slate-100 light:hover:text-slate-900">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-200 light:text-slate-700">{item.label}</span>
          )}
          {index < items.length - 1 && <span>/</span>}
        </li>
      ))}
    </ol>
  </nav>
);
