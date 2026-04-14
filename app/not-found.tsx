import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-8 text-center light:border-slate-200 light:bg-white">
      <h1 className="mb-2 text-3xl font-bold text-slate-100 light:text-slate-900">Conteudo nao encontrado</h1>
      <p className="mb-4 text-slate-300">A trilha solicitada nao existe ou foi movida.</p>
      <Link href="/trilhas" className="text-blue-300 transition-colors hover:text-blue-200 light:text-blue-700 light:hover:text-blue-600">
        Voltar para trilhas
      </Link>
    </div>
  );
}
