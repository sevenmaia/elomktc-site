"use strict";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Tag,
  Search,
  Megaphone,
  Sparkles,
  BarChart3,
} from "lucide-react";
import { HOME_CONTENT } from "@/content/home-content";
import { ScrollReveal } from "@/components/ScrollReveal";

const ICON_MAP = {
  Tag: Tag,
  Search: Search,
  Megaphone: Megaphone,
  Sparkles: Sparkles,
  BarChart3: BarChart3,
};

export function HeroCentered() {
  const { hero } = HOME_CONTENT;

  return (
    <section
      aria-label="Introdução principal"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F2DCFC] via-[#E8C5F8] to-[#DFC2F5]"
    >
      {/* Subtle background glow/soft radial gradient for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(255,255,255,0.45)_0%,rgba(235,210,250,0)_80%)]"
      />

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        {/* Eyebrow, H1, and Lead with smooth scroll entrance */}
        <ScrollReveal animation="fade-up" duration={700}>
          <p className="text-[11px] sm:text-[12px] md:text-[13px] font-bold tracking-[0.2em] uppercase text-[#3A3546] mb-6">
            {hero.eyebrow}
          </p>

          <h1 className="font-heading font-extrabold text-[44px] sm:text-[62px] md:text-[84px] lg:text-[96px] leading-[0.98] tracking-[-0.03em] text-[#0B0B0F] max-w-[1020px] mb-6 sm:mb-8 mx-auto">
            <span>{hero.titleLine1}</span>
            <br className="hidden sm:inline" />{" "}
            <span>{hero.titleLine2}</span>
            <span className="text-[#A40DDB] inline-block">.</span>
          </h1>

          <p className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-[#2B2735] max-w-[660px] mb-8 sm:mb-10 font-normal mx-auto">
            {hero.lead}
          </p>
        </ScrollReveal>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-16 sm:mb-20">
          <Link
            href={hero.primaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B0B0F] hover:bg-[#201F29] active:scale-[0.98] text-white text-[14px] sm:text-[15px] font-bold px-8 py-3.5 rounded-lg transition-all shadow-md group min-h-[48px]"
          >
            <span>{hero.primaryCta.label}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href={hero.secondaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#E5BFF5]/80 hover:bg-[#DFAFF3] active:scale-[0.98] text-[#0B0B0F] border border-[#2B2735]/25 hover:border-[#2B2735]/40 text-[14px] sm:text-[15px] font-bold px-8 py-3.5 rounded-lg transition-all min-h-[48px]"
          >
            <span>{hero.secondaryCta.label}</span>
          </Link>
        </div>

        {/* Friso de Especialidades */}
        <div
          aria-label="Especialidades em destaque"
          className="w-full pt-8 border-t border-[#2B2735]/15 flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-4 text-[13px] sm:text-[14px] font-medium text-[#2E2A38]"
        >
          {hero.expertise.map((item) => {
            const Icon = ICON_MAP[item.iconName];
            return (
              <div
                key={item.label}
                className="flex items-center gap-2 group transition-colors"
              >
                {Icon && (
                  <Icon className="w-4 h-4 text-[#433D50] group-hover:text-[#A40DDB] transition-colors" />
                )}
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
