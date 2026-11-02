"use client";

import React from "react";
import Image from "next/image";
import { Shield, ArrowRight, MessageCircle } from "lucide-react";

interface BagueiraScreenMockupProps {
  className?: string;
  isHero?: boolean;
}

export function BagueiraScreenMockup({ className = "", isHero = false }: BagueiraScreenMockupProps) {
  return (
    <div
      className={`relative w-full h-full bg-[#FAFAFD] text-[#0C0B14] overflow-hidden select-none flex flex-col ${className}`}
    >
      {/* 1. Website Header Navigation */}
      <div
        className={`${
          isHero ? "h-7 sm:h-9 px-3 sm:px-5" : "h-5 sm:h-6 px-2 sm:px-3"
        } bg-white border-b border-gray-100 flex items-center justify-between flex-shrink-0 z-10 shadow-2xs`}
      >
        {/* Brand Logo */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <div
            className={`${
              isHero ? "w-4 h-4 sm:w-5 sm:h-5" : "w-3 h-3 sm:w-3.5 sm:h-3.5"
            } rounded-xs bg-[#0F5132] flex items-center justify-center text-white flex-shrink-0`}
          >
            <Shield className={isHero ? "w-2.5 h-2.5 sm:w-3 sm:h-3" : "w-1.5 h-1.5 sm:w-2 sm:h-2"} />
          </div>
          <span
            className={`font-heading font-black ${
              isHero ? "text-[10px] sm:text-[13px]" : "text-[8px] sm:text-[9.5px]"
            } tracking-tight text-[#0A2616]`}
          >
            Bagueira
          </span>
          <span
            className={`hidden min-[480px]:inline ${
              isHero ? "text-[8px] sm:text-[10px]" : "text-[6.5px] sm:text-[7.5px]"
            } font-bold text-[#0F5132] uppercase tracking-wider`}
          >
            Seguros
          </span>
        </div>

        {/* Navigation Links (Hero only) */}
        {isHero && (
          <div className="hidden sm:flex items-center gap-3.5 text-[9px] sm:text-[11px] font-semibold text-gray-600">
            <span className="text-[#0F5132] font-bold">Início</span>
            <span>Soluções</span>
            <span>História</span>
            <span>Contato</span>
          </div>
        )}

        {/* Header CTA Button */}
        <div
          className={`inline-flex items-center gap-1 bg-[#0F5132] text-white ${
            isHero ? "text-[8px] sm:text-[10px] px-2 sm:px-3 py-0.5 sm:py-1" : "text-[6.5px] sm:text-[7.5px] px-1.5 py-0.5"
          } font-bold rounded-sm shadow-2xs`}
        >
          <span>Quero consultoria</span>
          <ArrowRight className={isHero ? "w-2 h-2 sm:w-2.5 sm:h-2.5" : "w-1.5 h-1.5"} />
        </div>
      </div>

      {/* 2. Hero Body: Two Columns */}
      <div
        className={`flex-1 ${
          isHero ? "p-3 sm:p-5 sm:py-4 gap-3 sm:gap-4" : "p-2 sm:p-2.5 gap-2"
        } flex items-center justify-between relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAF9] to-[#EFF6F2]`}
      >
        {/* Left Column: Headlines & Actions */}
        <div className="w-[56%] sm:w-[54%] flex flex-col justify-center z-10">
          <span
            className={`${
              isHero ? "text-[7px] sm:text-[9px] mb-1" : "text-[5.5px] sm:text-[6.5px] mb-0.5"
            } font-bold tracking-[0.16em] uppercase text-[#0F5132] block`}
          >
            GESTÃO PATRIMONIAL &bull; 85 ANOS
          </span>

          <h4
            className={`font-heading font-black ${
              isHero
                ? "text-[11px] min-[400px]:text-[13px] sm:text-[17px] lg:text-[19px] mb-1 sm:mb-2"
                : "text-[8.5px] sm:text-[10.5px] mb-1"
            } leading-[1.08] tracking-tight text-[#081F13]`}
          >
            Proteção e estratégia para o seu patrimônio financeiro.
          </h4>

          {isHero && (
            <p className="hidden min-[480px]:block text-[8px] sm:text-[10.5px] text-[#4B5563] leading-snug mb-2.5 line-clamp-2">
              Soluções personalizadas em seguros corporativos, sucessão familiar e blindagem patrimonial de alta performance.
            </p>
          )}

          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 mt-0.5">
            <div
              className={`inline-flex items-center gap-1 bg-[#0F5132] text-white ${
                isHero ? "text-[7.5px] sm:text-[9.5px] px-2 sm:px-3 py-1 sm:py-1.5" : "text-[6px] sm:text-[7.5px] px-1.5 py-0.5"
              } font-bold rounded-sm shadow-xs`}
            >
              <span>Consultoria gratuita</span>
              <ArrowRight className={isHero ? "w-2 h-2 sm:w-2.5 sm:h-2.5" : "w-1.5 h-1.5"} />
            </div>

            {isHero && (
              <div className="hidden sm:inline-flex items-center gap-1 bg-white border border-gray-300 text-gray-700 text-[8px] sm:text-[9.5px] font-semibold px-2 py-1 rounded-sm">
                <MessageCircle className="w-2.5 h-2.5 text-[#0F5132]" />
                <span>WhatsApp</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Real High-Res Family Photography */}
        <div className="w-[42%] sm:w-[44%] h-[90%] relative rounded-sm sm:rounded-md overflow-hidden shadow-xs border border-gray-200/80 flex-shrink-0">
          <Image
            src="/images/sites/bagueira-hero-family.webp"
            alt="Família protegida pela Bagueira Seguros"
            fill
            className="object-cover object-center"
            priority={isHero}
            sizes="(max-width: 768px) 150px, 240px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Floating Pill on the photo: +85 anos de história */}
          <div
            className={`absolute top-1 left-1 bg-black/75 backdrop-blur-md px-1 sm:px-1.5 py-0.5 rounded-full border border-white/20 text-white ${
              isHero ? "text-[7px] sm:text-[8.5px]" : "text-[5.5px] sm:text-[6.5px]"
            } font-bold tracking-tight`}
          >
            +85 anos
          </div>

          {/* Floating Pill at bottom of photo: +2 bi assegurados */}
          <div
            className={`absolute bottom-1 right-1 bg-[#0F5132]/90 backdrop-blur-md px-1 sm:px-1.5 py-0.5 rounded-full border border-emerald-400/30 text-white ${
              isHero ? "text-[7px] sm:text-[8.5px]" : "text-[5.5px] sm:text-[6.5px]"
            } font-bold tracking-tight`}
          >
            +2 bi
          </div>
        </div>
      </div>
    </div>
  );
}