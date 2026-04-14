import { BookOpenCheck, ChartLine, Fingerprint, Laptop2 } from 'lucide-react';

import { Card } from '@/components/ui/card';

const benefits = [
  {
    title: 'Didatica orientada a produto',
    text: 'Cada modulo conecta teoria a cenarios reais de desenvolvimento.',
    icon: BookOpenCheck
  },
  {
    title: 'Playground integrado',
    text: 'Teste codigo com preview e snippets sem alternar ferramentas.',
    icon: Laptop2
  },
  {
    title: 'Progresso local inteligente',
    text: 'Acompanhe modulos concluidos, favoritos e historico recente.',
    icon: ChartLine
  },
  {
    title: 'Arquitetura pronta para escalar',
    text: 'Estrutura modular preparada para novas trilhas, quizzes e CMS.',
    icon: Fingerprint
  }
];

export const BenefitsSection = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-white">Por que estudar aqui?</h2>
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {benefits.map(({ title, text, icon: Icon }) => (
        <Card key={title} className="h-full">
          <Icon className="mb-4 h-5 w-5 text-cyan-300" />
          <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-slate-300">{text}</p>
        </Card>
      ))}
    </div>
  </section>
);
