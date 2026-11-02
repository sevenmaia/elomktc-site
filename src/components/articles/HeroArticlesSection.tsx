"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ARTICLES_CONTENT } from "@/content/articles-content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LaptopMockup } from "@/components/sites/LaptopMockup";
import { BagueiraScreenMockup } from "@/components/sites/BagueiraScreenMockup";
import { PhoneMockup } from "./PhoneMockup";
import { LuzDaLunaScreenMockup } from "./LuzDaLunaScreenMockup";

export function HeroArticlesSection() {
  const { hero } = ARTICLES_CONTENT;

  return (
    <section
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F2DEFA] via-[#F8EEFC] to-white"
      aria-label="Apresentação do Portfólio de Copywriting"
    >
      {/* Soft Ambient Lilac Lighting */}
      <div
        className="absolute top-10 left-1/4 w-[520px] h-[520px] bg-[#E2B3F5]/35 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-24 w-[460px] h-[460px] bg-[#D48DF0]/25 rounded-full blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start z-10">
            <ScrollReveal animation="fade-up" duration={600}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[#D9B4F0] mb-4 shadow-2xs">
                <Sparkles className="w-3 h-3 text-[#9400D3]" />
                <span className="text-[10px] sm:text-[11px] font-heading font-black tracking-[0.22em] text-[#7D12A4] uppercase">
                  {hero.eyebrow}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100} duration={650}>
              <h1 className="font-heading font-black text-[36px] min-[400px]:text-[44px] sm:text-[52px] lg:text-[58px] leading-[1.05] tracking-[-0.035em] text-[#0E0C17] mb-5">
                Textos que
                <br />
                conectam
                <br />
                e convertem
                <span className="text-[#9400D3]">.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150} duration={650}>
              <p className="font-sans text-[15.5px] sm:text-[17px] leading-[1.58] text-[#3E384D] max-w-[480px] mb-8">
                {hero.subtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200} duration={650}>
              <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
                <Link
                  href={hero.primaryCta.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0B0B0F] hover:bg-[#201F29] active:scale-[0.98] text-white text-[13px] font-bold tracking-[0.08em] uppercase px-7 py-3.5 rounded-lg transition-all duration-200 shadow-md group"
                >
                  <span>{hero.primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={hero.secondaryCta.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/70 hover:bg-white text-[#15121E] active:scale-[0.98] border border-[#C677E0]/40 text-[13px] font-bold tracking-[0.04em] px-6 py-3.5 rounded-lg transition-all duration-200 shadow-2xs"
                >
                  <span>{hero.secondaryCta.label}</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Duo of Hardware Mockups (7 cols) */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end mt-14 sm:mt-16 lg:mt-0">
            <ScrollReveal animation="zoom-in" delay={200} duration={800} className="w-full max-w-[620px] relative pb-6 pr-2">
              {/* Main Laptop (Bagueira Seguros Case) */}
              <div className="relative w-full max-w-[540px] mx-auto lg:mr-12">
                <LaptopMockup
                  projectTitle="Bagueira Seguros"
                  className="w-full drop-shadow-[0_20px_40px_rgba(25,12,38,0.22)]"
                  priority
                >
                  <BagueiraScreenMockup isHero />
                </LaptopMockup>
              </div>

              {/* Overlapping Phone Mockup (Luz da Luna PetShop Mobile Case) */}
              <div className="absolute bottom-0 right-2 sm:right-4 lg:right-2 z-20">
                <PhoneMockup className="w-[125px] min-[400px]:w-[150px] sm:w-[180px] lg:w-[195px] drop-shadow-[0_22px_40px_rgba(25,8,35,0.4)]">
                  <LuzDaLunaScreenMockup mode="mobile" />
                </PhoneMockup>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}