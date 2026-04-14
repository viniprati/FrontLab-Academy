import Link from 'next/link';

import { Card } from '@/components/ui/card';

const steps = [
  {
    title: '1. Estude por blocos curtos',
    text: 'Use blocos de 25 a 40 minutos por modulo. Feche cada bloco com um pequeno resumo em suas palavras.'
  },
  {
    title: '2. Pratique logo apos ler',
    text: 'Nao acumule teoria. Sempre execute o exemplo do modulo e depois crie uma variacao propria.'
  },
  {
    title: '3. Revise erros frequentes',
    text: 'Os erros comuns da trilha funcionam como checklist para evitar retrabalho em projeto real.'
  },
  {
    title: '4. Avance com criterio',
    text: 'So passe para o proximo modulo quando conseguir explicar o conceito e aplicar sem copiar o passo a passo.'
  }
];

export default function ComoEstudarPage() {
  return (
    <div className="space-y-6">
      <Card>
        <h1 className="mb-3 text-3xl font-bold text-slate-100 light:text-slate-900">Como estudar na plataforma</h1>
        <p className="text-slate-300">
          Este guia foi feito para ajudar voce a transformar cada trilha em aprendizado real. O foco e entender,
          praticar e revisar, nao apenas consumir conteudo.
        </p>
      </Card>

      <section className="grid gap-4 md:grid-cols-2">
        {steps.map((step) => (
          <Card key={step.title}>
            <h2 className="mb-2 text-lg font-semibold text-slate-100 light:text-slate-900">{step.title}</h2>
            <p className="text-sm text-slate-300">{step.text}</p>
          </Card>
        ))}
      </section>

      <Card>
        <h2 className="mb-2 text-xl font-semibold text-slate-100 light:text-slate-900">Rotina sugerida por semana</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>3 dias: estudo de modulo (teoria + exemplo + mini exercicio)</li>
          <li>1 dia: revisao e correcoes</li>
          <li>1 dia: desafio prático integrado</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/trilhas" className="text-sm text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600">
            Ir para trilhas
          </Link>
          <Link href="/exercicios-desafios" className="text-sm text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600">
            Ver exercicios e desafios
          </Link>
        </div>
      </Card>
    </div>
  );
}

