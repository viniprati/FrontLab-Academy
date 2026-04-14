import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
      <h1 className="mb-2 text-3xl font-bold text-white">Conteudo nao encontrado</h1>
      <p className="mb-4 text-slate-300">A trilha solicitada nao existe ou foi movida.</p>
      <Link href="/trilhas" className="text-cyan-200 hover:text-cyan-100">
        Voltar para trilhas
      </Link>
    </div>
  );
}
