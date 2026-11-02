import React from "react";
import Link from "next/link";
import { ArrowLeft, MessageSquare } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  badge?: string;
}

export function PlaceholderPage({
  title,
  description,
  badge = "Em desenvolvimento — Próxima Sprint",
}: PlaceholderPageProps) {
  return (
    <div className="min-h-[70vh] pt-36 pb-20 flex flex-col items-center justify-center text-center px-5 bg-gradient-to-b from-[#FAF5FF] to-white">
      <div className="max-w-[620px] mx-auto flex flex-col items-center">
        <span className="text-[12px] font-bold tracking-[0.16em] uppercase text-[#A40DDB] bg-[#A40DDB]/10 px-4 py-1.5 rounded-md mb-6">
          {badge}
        </span>

        <h1 className="font-heading font-extrabold text-[36px] sm:text-[48px] text-[#0B0B0F] tracking-tight mb-4">
          {title}
        </h1>

        <p className="font-sans text-[16px] sm:text-[18px] text-[#555160] leading-relaxed mb-8">
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#0B0B0F] hover:bg-[#201F29] text-white text-[14px] font-semibold px-6 py-3 rounded-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a Home</span>
          </Link>

          <a
            href="https://wa.me/5511947851293?text=Ol%C3%A1%2C%20Eloisa!%20Vim%20pelo%20seu%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#A40DDB] text-[#A40DDB] hover:bg-[#A40DDB]/10 text-[14px] font-semibold px-6 py-3 rounded-lg transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
