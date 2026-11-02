"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, Heart, Sparkles } from "lucide-react";
import { SITES_CONTENT } from "@/content/sites-content";
import { LaptopMockup } from "./LaptopMockup";
import { BagueiraScreenMockup } from "./BagueiraScreenMockup";

export function HeroSitesSection() {
  const { hero } = SITES_CONTENT;

  return (
    <section className="relative bg-[#EBD2FA] pt-32 pb-20 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Decorative background glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-white/40 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna Esquerda: Conteúdo & Copy */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[12px] font-heading font-black tracking-widest text-[#A40DDB] uppercase">
                {hero.eyebrow}
              </span>
            </div>

            {/* H1 Principal */}
            <h1 className="font-heading font-black text-[38px] sm:text-[50px] lg:text-[56px] text-[#14121E] leading-[1.08] tracking-tight mb-5">
              Sites e<br />
              Landing Pages<br />
              que convertem<span className="text-[#A40DDB]">.</span>
            </h1>

            {/* Subtítulo / Lead */}
            <p className="text-[15px] sm:text-[16px] text-[#403B52] leading-relaxed max-w-[500px] mb-8 font-sans">
              {hero.subtitle}
            </p>

            {/* Ações / Botões */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#14121E] text-white font-heading font-bold text-[14px] hover:bg-[#2A243D] transition-all duration-200 shadow-md group"
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center px-7 py-3.5 rounded-lg bg-transparent border border-[#14121E]/30 text-[#14121E] font-heading font-bold text-[14px] hover:border-[#14121E] hover:bg-white/30 transition-all duration-200"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Coluna Direita: Mockup do Laptop & Cards Flutuantes */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Floating Badge Top-Left: Estratégias */}
            <div className="absolute -top-6 sm:-top-8 left-0 sm:left-4 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md p-3 px-4 rounded-xl shadow-[0_12px_30px_rgba(40,10,70,0.12)] border border-white/60 select-none animate-float-slow">
              <div className="w-8 h-8 rounded-lg bg-[#F4E8FC] flex items-center justify-center text-[#A40DDB] flex-shrink-0">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-[12px] text-[#14121E] leading-tight">
                  {hero.floatingBadges.top.title}
                </p>
                <p className="text-[11px] text-[#696479] leading-tight font-sans">
                  {hero.floatingBadges.top.subtitle}
                </p>
              </div>

              {/* Setinha lilás curvada apontando para a tela */}
              <svg
                className="absolute -bottom-5 right-2 w-8 h-8 overflow-visible pointer-events-none text-[#A40DDB]"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M4 2 C12 2 24 10 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M19 20 L24 25 L27 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Laptop Mockup Wrapper with Professional Hardware Asset */}
            <div className="relative w-full max-w-[520px] z-10 transition-transform duration-500 hover:scale-[1.01]">
              <LaptopMockup
                id="hero-bagueira"
                projectTitle="Bagueira Seguros"
                priority
              >
                <BagueiraScreenMockup isHero={true} />
              </LaptopMockup>
            </div>

            {/* Floating Badge Right: Sites que conectam pessoas */}
            <div className="absolute -bottom-4 sm:-bottom-6 right-1 sm:-right-4 z-20 flex items-center gap-3 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 px-3.5 sm:px-4 rounded-xl shadow-[0_12px_30px_rgba(40,10,70,0.12)] border border-white/60 select-none">
              <div className="w-8 h-8 rounded-lg bg-[#F4E8FC] flex items-center justify-center text-[#A40DDB] flex-shrink-0">
                <Heart className="w-4 h-4 fill-[#A40DDB]" />
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-[12px] text-[#14121E] leading-tight">
                  {hero.floatingBadges.bottom.title}
                </p>
                <p className="text-[11px] text-[#696479] leading-tight font-sans">
                  {hero.floatingBadges.bottom.subtitle}
                </p>
              </div>

              {/* Sparkles / Brilho lilás decorativo */}
              <Sparkles className="w-4 h-4 text-[#A40DDB] absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
