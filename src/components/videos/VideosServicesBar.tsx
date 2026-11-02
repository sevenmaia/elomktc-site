"use client";

import React from "react";
import { VIDEOS_CONTENT } from "@/content/videos-content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function VideosServicesBar() {
  const { servicesBar } = VIDEOS_CONTENT;

  return (
    <section
      aria-label="Objetivos de vídeos"
      className="bg-[#D88DF2] py-14 sm:py-16 text-[#0B0B0F] relative overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Top Content Row: Title and Supporting Paragraph */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-xl">
            <ScrollReveal animation="fade-right" duration={550}>
              <h2 className="font-heading font-black text-[32px] sm:text-[42px] lg:text-[46px] leading-[1.06] tracking-tight text-[#0B0B0F]">
                {servicesBar.title.replace(".", "")}
                <span className="text-[#0B0B0F]">.</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-left" delay={100} duration={650}>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#241F2B] font-medium max-w-md leading-relaxed">
              {servicesBar.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Chips Bar: 5 black pill badges */}
        <ScrollReveal animation="fade-up" delay={150} duration={600}>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            {servicesBar.chips.map((chip, idx) => (
              <span
                key={idx}
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#0B0B0F] text-white text-[12.5px] sm:text-[13.5px] font-bold shadow-xs hover:bg-[#1F1D2B] transition-colors cursor-default"
              >
                {chip}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
