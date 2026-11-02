import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] pt-36 pb-20 flex flex-col items-center justify-center text-center px-5">
      <span className="text-[14px] font-bold text-[#A40DDB] tracking-widest uppercase mb-2">
        Erro 404
      </span>
      <h1 className="font-heading font-extrabold text-[44px] text-[#0B0B0F] mb-4">
        Página não encontrada
      </h1>
      <p className="text-[16px] text-[#555160] max-w-md mb-8">
        O link que você tentou acessar não existe ou foi movido.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#0B0B0F] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#201F29] transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Voltar para o início</span>
      </Link>
    </div>
  );
}
