"use strict";

import React from "react";
import { Briefcase } from "lucide-react";
import { ABOUT_CONTENT } from "@/content/about-content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function AboutTimelineSection() {
  const { timeline } = ABOUT_CONTENT;

  return (
    <section
      aria-label="Trajetória profissional"
      className="py-16 sm:py-24 bg-[#FAFAFD] relative overflow-hidden border-t border-[#F0EAF5]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-12 sm:mb-16">
          <div>
            <ScrollReveal animation="fade-down" duration={550}>
              <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#A40DDB] mb-3">
                {timeline.eyebrow}
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={80} duration={650}>
              <h2 className="font-heading font-black text-[38px] sm:text-[48px] lg:text-[54px] leading-[1.05] tracking-tight text-[#0B0B0F]">
                {timeline.title}
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-left" delay={150} duration={650}>
            <p className="text-[15px] sm:text-[16px] text-[#555160] max-w-md font-sans leading-relaxed">
              {timeline.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline List */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div
            className="absolute left-[15px] sm:left-[170px] lg:left-[210px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#A40DDB] via-[#C677E0] to-[#EBD2FA]"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-10">
            {timeline.items.map((item, idx) => (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                delay={idx * 60}
                duration={600}
              >
                <div className="relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 lg:gap-14 group">
                  {/* Left Column: Date & Timeline Dot */}
                  <div className="flex items-center sm:items-start sm:w-[150px] lg:w-[180px] flex-shrink-0 pt-1 pl-10 sm:pl-0 sm:text-right">
                    {/* Glowing Timeline Dot */}
                    <div
                      className="absolute left-[9px] sm:left-[164px] lg:left-[204px] top-1.5 sm:top-2 w-3.5 h-3.5 rounded-full bg-[#A40DDB] border-2 border-white shadow-sm ring-4 ring-[#A40DDB]/20 group-hover:ring-[#A40DDB]/40 group-hover:scale-125 transition-all duration-300 z-10"
                      aria-hidden="true"
                    />

                    {/* Date Badge */}
                    <span className="inline-block px-3 py-1 rounded-md bg-[#F3E8FF] border border-[#E9D5FF] text-[12px] sm:text-[13px] font-bold text-[#6B21A8] tracking-tight sm:ml-auto">
                      {item.period}
                    </span>
                  </div>

                  {/* Right Column: Experience Card */}
                  <div className="flex-1 ml-10 sm:ml-0 bg-white p-5 sm:p-7 rounded-xl border border-[#E9E2EE] shadow-[0_4px_20px_rgba(20,0,40,0.03)] hover:shadow-[0_8px_30px_rgba(164,13,219,0.08)] hover:border-[#D5A0F5] transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h3 className="font-heading font-black text-[18px] sm:text-[20px] text-[#0B0B0F] tracking-tight">
                        {item.role}{" "}
                        <span className="text-[#A40DDB] font-bold">
                          — {item.company}
                        </span>
                      </h3>

                      {item.model && (
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#F0E6F6] text-[#7C3AED]">
                          {item.model}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2">
                      {item.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-[#4A4458] leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A40DDB] mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
