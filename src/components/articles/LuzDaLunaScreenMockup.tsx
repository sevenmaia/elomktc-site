"use client";

import React from "react";
import Image from "next/image";
import { Heart, ArrowRight, Calendar, Sparkles } from "lucide-react";

interface LuzDaLunaScreenMockupProps {
  mode?: "laptop" | "mobile";
  className?: string;
}

export function LuzDaLunaScreenMockup({
  mode = "laptop",
  className = "",
}: LuzDaLunaScreenMockupProps) {
  if (mode === "mobile") {
    return (
      <div
        className={`relative w-full h-full bg-[#FCF8FF] text-[#14121E] flex flex-col justify-between p-2.5 sm:p-3 select-none overflow-hidden ${className}`}
      >
        {/* Subtle decorative background gradient */}
        <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#E8BFF8]/30 rounded-full blur-xl pointer-events-none" />

        {/* Mobile Header */}
        <div className="flex items-center justify-between pt-3 pb-1.5 z-10 border-b border-[#F0DDF8]">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-[#D444BC] flex items-center justify-center text-white">
              <Heart className="w-2 h-2 fill-white" />
            </div>
            <span className="font-heading font-black text-[9.5px] tracking-tight text-[#301642]">
              Luz da Luna
            </span>
          </div>
          <span className="text-[7.5px] font-bold text-[#D444BC] bg-[#F8E8FB] px-1.5 py-0.5 rounded-full">
            PetShop
          </span>
        </div>

        {/* Mobile Content */}
        <div className="flex-1 flex flex-col justify-center py-1.5 z-10 text-center">
          <span className="text-[7px] font-bold tracking-[0.15em] uppercase text-[#A40DDB] mb-1">
            CUIDADO & CARINHO
          </span>
          <h4 className="font-heading font-black text-[11px] sm:text-[12px] leading-[1.15] tracking-tight text-[#1E0F2B] mb-1.5 px-0.5">
            Cuidado e carinho para o seu melhor amigo em Joinville!
          </h4>
          <p className="text-[7.5px] text-[#695873] leading-tight mb-2 max-w-[95%] mx-auto line-clamp-2">
            Banho, tosa especializada e atendimento com afeto e responsabilidade.
          </p>

          <div className="inline-flex items-center justify-center gap-1 bg-[#D444BC] text-white text-[8px] font-bold px-2.5 py-1 rounded-full shadow-xs mx-auto">
            <span>Agende uma consulta</span>
            <ArrowRight className="w-2 h-2" />
          </div>
        </div>

        {/* Mobile Photo Frame (Round Circle with Pet) */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0 z-10 mb-1">
          <Image
            src="/images/sites/luz-da-luna.webp"
            alt="Pet atendido no Luz da Luna PetShop"
            fill
            className="object-cover object-center"
            priority
            sizes="100px"
          />
        </div>
      </div>
    );
  }

  // Laptop view for Card 2
  return (
    <div
      className={`relative w-full h-full bg-[#FCF8FF] text-[#14121E] overflow-hidden select-none flex flex-col ${className}`}
    >
      {/* 1. Header Navigation */}
      <div className="h-6 sm:h-7 bg-white border-b border-[#F4E3FB] px-2.5 sm:px-4 flex items-center justify-between flex-shrink-0 z-10 shadow-2xs">
        {/* Brand Logo */}
        <div className="flex items-center gap-1">
          <div className="w-3.5 h-3.5 rounded-full bg-[#D444BC] flex items-center justify-center text-white flex-shrink-0">
            <Heart className="w-2 h-2 fill-white" />
          </div>
          <span className="font-heading font-black text-[9px] sm:text-[10px] tracking-tight text-[#301642]">
            Luz da Luna
          </span>
        </div>

        {/* Header CTA Button */}
        <div className="inline-flex items-center gap-1 bg-[#D444BC] text-white text-[7px] sm:text-[8px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
          <span>Agendar consulta</span>
          <ArrowRight className="w-1.5 h-1.5" />
        </div>
      </div>

      {/* 2. Hero Body: Two Columns */}
      <div className="flex-1 p-2 sm:p-3 flex items-center justify-between gap-2 relative overflow-hidden bg-gradient-to-br from-white via-[#FAF3FC] to-[#F5E6F8]">
        {/* Left Column: Headlines & Actions */}
        <div className="w-[58%] flex flex-col justify-center z-10">
          <span className="text-[6px] sm:text-[7.5px] font-bold tracking-[0.14em] uppercase text-[#D444BC] mb-0.5 block">
            PETSHOP EM JOINVILLE
          </span>

          <h4 className="font-heading font-black text-[9px] sm:text-[11px] leading-[1.12] tracking-tight text-[#250F33] mb-1">
            Cuidado e carinho para o seu melhor amigo em Joinville!
          </h4>

          <p className="text-[6.5px] sm:text-[8px] text-[#695873] leading-tight mb-1.5 line-clamp-2">
            Landing page com foco em agendamentos rápidos e conexão emocional.
          </p>

          <div className="inline-flex items-center gap-1 bg-[#D444BC] text-white text-[6.5px] sm:text-[8px] font-bold px-2 py-0.5 rounded-full shadow-xs self-start">
            <span>Agendar consulta</span>
            <ArrowRight className="w-1.5 h-1.5" />
          </div>
        </div>

        {/* Right Column: Pet Photo */}
        <div className="w-[38%] h-[80%] relative rounded-md overflow-hidden shadow-xs border border-[#F2DEFA] flex-shrink-0">
          <Image
            src="/images/sites/luz-da-luna.webp"
            alt="Pet atendido no Luz da Luna PetShop"
            fill
            className="object-cover object-center"
            priority
            sizes="150px"
          />
        </div>
      </div>
    </div>
  );
}