"use strict";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { HOME_CONTENT } from "@/content/home-content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function AboutSection() {
  const { about } = HOME_CONTENT;

  return (
    <section
      aria-label="Sobre mim"
      className="bg-[#FFFFFF] text-[#0B0B0F] py-20 sm:py-28 relative"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Two Columns: Content + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-14 sm:mb-20">
          {/* Left Column: Text & Desktop CTA */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <ScrollReveal animation="fade-right" duration={650}>
              <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.18em] uppercase text-[#646475] mb-4">
                {about.eyebrow}
              </p>

              <h2 className="font-heading font-extrabold text-[40px] sm:text-[54px] lg:text-[62px] leading-[1.05] tracking-[-0.03em] text-[#0B0B0F] mb-6">
                Marketing
                <br />
                com propósito<span className="text-[#A40DDB]">.</span>
              </h2>

              <div className="space-y-3.5 font-sans text-[15px] sm:text-[16.5px] leading-relaxed text-[#373540] mb-8 max-w-[540px]">
                {about.paragraphs ? (
                  about.paragraphs.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p>{about.description}</p>
                )}
              </div>

              {/* Desktop CTA Button (hidden on mobile, placed after photo on mobile) */}
              <div className="hidden lg:block">
                <Link
                  href={about.cta.href}
                  className="inline-flex items-center gap-2 bg-[#0B0B0F] hover:bg-[#201F29] active:scale-[0.98] text-white text-[14px] sm:text-[15px] font-bold px-8 py-3.5 rounded-full transition-all shadow-sm group min-h-[48px]"
                >
                  <span>{about.cta.label}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Real Photo of Eloisa in Folder-Shaped Card + Floating Badge */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end">
            <ScrollReveal animation="fade-left" delay={120} duration={650} className="w-full max-w-[460px]">
              <div className="relative w-full group">
                {/* Playful lilac doodle burst accent on top-left of photo */}
                <div
                  aria-hidden="true"
                  className="absolute -top-6 -left-4 w-12 h-12 text-[#C677E0] pointer-events-none z-20"
                >
                  <svg
                    viewBox="0 0 40 40"
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

                {/* SVG Folder Tab Header */}
                <div className="w-full relative h-[38px] overflow-hidden -mb-[1px]">
                  <svg
                    viewBox="0 0 340 38"
                    preserveAspectRatio="none"
                    className="w-full h-full block text-[#0B0B0F]"
                    fill="currentColor"
                  >
                    <path d="M 0 38 L 0 16 Q 0 0 18 0 L 142 0 Q 156 0 166 14 Q 176 26 192 26 L 322 26 Q 340 26 340 38 Z" />
                  </svg>
                  {/* Tab Label */}
                  <div className="absolute top-2 left-5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#A40DDB] animate-pulse" />
                    <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/90">
                      ELOISA CUNHA
                    </span>
                  </div>
                </div>

                {/* Folder Card Body holding the photo */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-b-[28px] overflow-hidden shadow-2xl bg-[#0B0B0F] border-2 border-t-0 border-[#0B0B0F]">
                  <Image
                    src={about.photo.src}
                    alt={about.photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 460px)"
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Quote Card at bottom-right */}
                <div className="absolute -bottom-5 -right-2 sm:-bottom-7 sm:-right-5 bg-[#EBD2FA] border border-[#DFC3F2] text-[#1B1B20] p-3 sm:p-4 rounded-xl shadow-xl max-w-[210px] sm:max-w-[240px] flex items-start gap-2.5 sm:gap-3 backdrop-blur-sm z-10">
                  <div className="p-1.5 bg-[#A40DDB]/15 rounded-md text-[#A40DDB] flex-shrink-0 mt-0.5">
                    <Quote className="w-3.5 h-3.5 text-[#A40DDB] fill-[#A40DDB]/30" />
                  </div>
                  <p className="text-[12px] sm:text-[13px] font-semibold leading-snug tracking-tight text-[#16151D] italic">
                    &ldquo;{about.badgeText}&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Mobile CTA Button: Positioned AFTER the photo container */}
            <div className="lg:hidden w-full flex justify-center mt-12 mb-2">
              <ScrollReveal animation="fade-up" delay={150} className="w-full flex justify-center">
                <Link
                  href={about.cta.href}
                  className="inline-flex items-center justify-center gap-2 bg-[#0B0B0F] hover:bg-[#201F29] active:scale-[0.98] text-white text-[14px] sm:text-[15px] font-bold px-8 py-3.5 rounded-lg transition-all shadow-md group min-h-[48px] w-full max-w-[340px]"
                >
                  <span>{about.cta.label}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* 4 Stats Cards in 2x2 grid on mobile and 4-column row on desktop */}
        <div
          aria-label="Indicadores de experiência"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 pt-6"
        >
          {about.stats.map((stat, idx) => (
            <ScrollReveal
              key={stat.label}
              animation="fade-up"
              delay={idx * 70}
              duration={550}
            >
              <div className="bg-[#F8F2FD] border border-[#EFE6F7] hover:border-[#DFC5F4] rounded-xl p-4 sm:p-7 flex flex-col justify-center transition-all hover:shadow-sm h-full">
                <span className="font-heading font-extrabold text-[24px] sm:text-[38px] tracking-tight text-[#0B0B0F] mb-1">
                  {stat.value}
                </span>
                <span className="text-[12px] sm:text-[14px] text-[#555160] leading-snug font-medium">
                  {stat.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
