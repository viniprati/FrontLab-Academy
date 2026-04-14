'use client';

import { ReactNode, useState } from 'react';

import { Card } from '@/components/ui/card';

export const TipBlock = ({ title, children }: { title: string; children: ReactNode }) => (
  <Card className="border-blue-400/25 bg-blue-500/10 light:border-blue-200 light:bg-blue-50">
    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-200 light:text-blue-700">{title}</h4>
    <div className="text-sm text-blue-100 light:text-blue-700">{children}</div>
  </Card>
);

export const WarningBlock = ({ title, children }: { title: string; children: ReactNode }) => (
  <Card className="border-amber-400/30 bg-amber-500/10 light:border-amber-200 light:bg-amber-50">
    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-200 light:text-amber-700">{title}</h4>
    <div className="text-sm text-amber-100 light:text-amber-700">{children}</div>
  </Card>
);

export const CodeBlock = ({ code }: { code: string }) => (
  <pre className="overflow-x-auto rounded-xl border border-slate-700/70 bg-slate-900/85 p-4 text-sm text-slate-200 light:border-slate-200 light:bg-slate-50 light:text-slate-700">
    <code>{code}</code>
  </pre>
);

export const Checklist = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 text-sm text-slate-300">
    {items.map((item) => (
      <li key={item} className="flex items-center gap-2">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-blue-400/40 text-xs text-blue-200 light:border-blue-300 light:text-blue-700">✓</span>
        {item}
      </li>
    ))}
  </ul>
);

export const SimpleTable = ({ rows }: { rows: { concept: string; useCase: string }[] }) => (
  <div className="overflow-x-auto rounded-xl border border-slate-700/70 light:border-slate-200">
    <table className="min-w-full text-left text-sm">
      <thead className="bg-slate-800/75 text-slate-200 light:bg-slate-100 light:text-slate-700">
        <tr>
          <th className="px-3 py-2">Conceito</th>
          <th className="px-3 py-2">Quando usar</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.concept} className="border-t border-slate-700/70 text-slate-300 light:border-slate-200">
            <td className="px-3 py-2">{row.concept}</td>
            <td className="px-3 py-2">{row.useCase}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const ComparisonCards = ({ items }: { items: { title: string; text: string }[] }) => (
  <div className="grid gap-3 md:grid-cols-2">
    {items.map((item) => (
      <Card key={item.title}>
        <h4 className="mb-2 font-semibold text-slate-100 light:text-slate-900">{item.title}</h4>
        <p className="text-sm text-slate-300">{item.text}</p>
      </Card>
    ))}
  </div>
);

export const AccordionBlock = ({ items }: { items: { title: string; content: string }[] }) => {
  const [open, setOpen] = useState(items[0]?.title);

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <Card key={item.title} className="p-0">
          <button
            type="button"
            onClick={() => setOpen((prev) => (prev === item.title ? '' : item.title))}
            className="w-full px-4 py-3 text-left text-sm font-semibold text-slate-100 light:text-slate-900"
          >
            {item.title}
          </button>
          {open === item.title && <p className="px-4 pb-4 text-sm text-slate-300">{item.content}</p>}
        </Card>
      ))}
    </div>
  );
};

export const TabsBlock = ({ tabs }: { tabs: { label: string; content: string }[] }) => {
  const [current, setCurrent] = useState(tabs[0]?.label);

  const active = tabs.find((tab) => tab.label === current) ?? tabs[0];

  if (!active) return null;

  return (
    <Card>
      <div className="mb-3 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setCurrent(tab.label)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
              tab.label === current
                ? 'bg-blue-500/15 text-blue-200 light:bg-blue-50 light:text-blue-700'
                : 'bg-slate-800/70 text-slate-300 light:bg-slate-100 light:text-slate-600'
            }`}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="text-sm text-slate-300">{active.content}</p>
    </Card>
  );
};
