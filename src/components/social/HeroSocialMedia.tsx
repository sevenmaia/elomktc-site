"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SOCIAL_CONTENT } from "@/content/social-content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SocialHeroPhones } from "@/components/social/SocialHeroPhones";

export function HeroSocialMedia() {
  const { hero } = SOCIAL_CONTENT;

  return (
    <section
      aria-label="Introdução Social Media"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-22 bg-[#FFFFFF] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna Esquerda: Textos, Chamada e Ações */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <ScrollReveal animation="fade-down" duration={550}>
              <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#A40DDB] mb-3">
                {hero.eyebrow}
              </p>
            </ScrollReveal>

            {/* H1 Title */}
            <ScrollReveal animation="fade-up" delay={80} duration={650}>
              <h1 className="font-heading font-black text-[38px] sm:text-[50px] lg:text-[58px] leading-[1.04] tracking-tight text-[#0B0B0F] mb-5">
                Estratégia que gera{" "}
                <span className="text-[#0B0B0F]">
                  conexões<span className="text-[#A40DDB]">.</span>
                </span>
              </h1>
            </ScrollReveal>

            {/* Subtitle / Lead */}
            <ScrollReveal animation="fade-up" delay={160} duration={650}>
              <p className="text-[15px] sm:text-[16px] text-[#4A4458] leading-relaxed max-w-[500px] mb-8 font-sans">
                {hero.subtitle}
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal animation="fade-up" delay={240} duration={650}>
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href={hero.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-6 sm:px-7 rounded-lg bg-[#0B0B0F] text-white font-semibold text-[13px] sm:text-[14px] hover:bg-[#1F1D2B] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>{hero.primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center justify-center h-11 sm:h-12 px-6 sm:px-7 rounded-lg bg-white text-[#0B0B0F] font-semibold text-[13px] sm:text-[14px] border border-[#E5E7EB] hover:border-[#A40DDB] hover:text-[#A40DDB] transition-all duration-200 shadow-2xs hover:shadow-xs"
                >
                  <span>{hero.secondaryCta.label}</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Coluna Direita: Composição dos Smartphones */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <ScrollReveal animation="zoom-in" delay={120} duration={750} className="w-full">
              <SocialHeroPhones />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
