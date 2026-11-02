import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Phone, Mail, Quote } from "lucide-react";
import { ABOUT_CONTENT } from "@/content/about-content";

export function HeroAboutSection() {
  const { hero } = ABOUT_CONTENT;

  return (
    <section
      aria-label="Apresentação de Eloisa Cunha"
      className="relative pt-28 sm:pt-32 pb-10 sm:pb-14 overflow-hidden bg-gradient-to-b from-[#EBD2FA] via-[#F4E4FC] to-[#FFFFFF]"
    >
      {/* Soft ambient background glows */}
      <div
        className="absolute top-10 left-1/4 w-[420px] h-[420px] bg-[#D89EF8]/20 rounded-full blur-[100px] pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-24 right-12 w-[360px] h-[360px] bg-[#A40DDB]/12 rounded-full blur-[90px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & Content (~55% width -> Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Simple editorial eyebrow - Clean typography without pill or border */}
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#6B21A8] mb-3">
              {hero.eyebrow}
            </p>

            <h1 className="font-heading font-black text-[44px] min-[375px]:text-[50px] sm:text-[60px] lg:text-[66px] leading-[1.0] tracking-[-0.035em] text-[#0B0B0F] mb-3">
              {hero.title}
            </h1>

            <p className="text-[19px] sm:text-[22px] lg:text-[24px] font-bold text-[#2A2338] tracking-tight mb-3.5">
              {hero.subtitle}
            </p>

            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#4A4458] max-w-[500px] mb-6 font-sans">
              {hero.intro}
            </p>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-7 text-[13px] sm:text-[14px] font-medium text-[#2C2735]">
              <a
                href={hero.contacts.phoneHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/80 hover:bg-white border border-[#E0B8F5]/70 hover:border-[#A40DDB] text-[#1F1D2B] transition-all duration-200 shadow-xs hover:shadow-sm group"
                aria-label="Conversar no WhatsApp"
              >
                <Phone className="w-4 h-4 text-[#A40DDB] transition-transform group-hover:scale-110" />
                <span>{hero.contacts.phone}</span>
              </a>

              <a
                href={hero.contacts.emailHref}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/80 hover:bg-white border border-[#E0B8F5]/70 hover:border-[#A40DDB] text-[#1F1D2B] transition-all duration-200 shadow-xs hover:shadow-sm group"
                aria-label="Enviar e-mail para Eloisa"
              >
                <Mail className="w-4 h-4 text-[#A40DDB] transition-transform group-hover:scale-110" />
                <span>{hero.contacts.email}</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0B0B0F] hover:bg-[#201F29] active:scale-[0.98] text-white text-[13px] sm:text-[14px] font-bold tracking-[0.08em] uppercase px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg transition-all duration-200 shadow-md group"
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={hero.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/70 hover:bg-white active:scale-[0.98] border border-[#1F1D2B]/30 hover:border-[#0B0B0F] text-[#0B0B0F] text-[13px] sm:text-[14px] font-bold tracking-tight px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg transition-all duration-200 shadow-xs"
              >
                <Download className="w-4 h-4 text-[#0B0B0F]" />
                <span>{hero.secondaryCta.label}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Exact Folder Moldura from Home with Balanced Proportions (~45% width -> Cols 8-12) */}
          <div className="lg:col-span-5 w-full flex justify-center relative mt-4 lg:mt-0">
            {/* Proportional width container: ~360-380px desktop, matching left column height */}
            <div className="w-full max-w-[320px] min-[420px]:max-w-[340px] sm:max-w-[360px] lg:max-w-[375px] relative">
              {/* Playful Accent Spark Lines on top-left (Exact same as Home) */}
              <div className="absolute -top-6 -left-6 text-[#A40DDB]/70 pointer-events-none">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M 12 18 L 4 22" />
                  <path d="M 16 12 L 12 4" />
                  <path d="M 22 14 L 28 8" />
                </svg>
              </div>

              {/* SVG Folder Tab Header (Exact same as Home) */}
              <div className="w-full relative h-[36px] overflow-hidden -mb-[1px]">
                <svg
                  viewBox="0 0 340 38"
                  preserveAspectRatio="none"
                  className="w-full h-full block text-[#0B0B0F]"
                  fill="currentColor"
                >
                  <path d="M 0 38 L 0 16 Q 0 0 18 0 L 142 0 Q 156 0 166 14 Q 176 26 192 26 L 322 26 Q 340 26 340 38 Z" />
                </svg>
                {/* Tab Label with pulse */}
                <div className="absolute top-2 left-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A40DDB] animate-pulse" />
                  <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/90">
                    ELOISA CUNHA
                  </span>
                </div>
              </div>

              {/* Folder Card Body holding the photo - Sized proportionally to button baseline */}
              <div className="relative w-full h-[370px] min-[420px]:h-[390px] sm:h-[410px] lg:h-[420px] rounded-b-xl overflow-hidden shadow-xl bg-[#0B0B0F] border-2 border-t-0 border-[#0B0B0F]">
                <Image
                  src="/images/eloisa-cunha.jpg"
                  alt="Eloisa Cunha - Marketing & Comunicação"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                {/* Floating Quote Card: Positioned safely at bottom-right corner, INSIDE the photo frame */}
                <div className="absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 bg-[#EBD2FA] border border-[#DFC3F2] text-[#1B1B20] p-3 sm:p-3.5 rounded-xl shadow-lg max-w-[195px] sm:max-w-[215px] flex items-start gap-2 sm:gap-2.5 backdrop-blur-sm z-20">
                  <div className="p-1 bg-[#A40DDB]/15 rounded-md text-[#A40DDB] flex-shrink-0 mt-0.5">
                    <Quote className="w-3.5 h-3.5 text-[#A40DDB] fill-[#A40DDB]/30" />
                  </div>
                  <p className="text-[11px] sm:text-[12px] font-semibold leading-snug tracking-tight text-[#16151D] italic">
                    &ldquo;Estratégia que conecta pessoas.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
