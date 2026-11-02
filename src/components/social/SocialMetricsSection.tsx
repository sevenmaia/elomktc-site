"use client";

import React from "react";
import { SOCIAL_CONTENT, SocialMetricItem } from "@/content/social-content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function SocialMetricsSection() {
  const { metrics } = SOCIAL_CONTENT;

  return (
    <section
      aria-label="Resultados comprovados em social media"
      className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden border-t border-[#F0EAF5]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Title */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="fade-down" duration={550}>
              <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#A40DDB] mb-3">
                {metrics.eyebrow}
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={80} duration={650}>
              <h2 className="font-heading font-black text-[36px] sm:text-[48px] lg:text-[54px] leading-[1.05] tracking-tight text-[#0B0B0F] mb-5">
                Mais que conteúdo,{" "}
                <span className="text-[#0B0B0F]">
                  resultados<span className="text-[#A40DDB]">.</span>
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={160} duration={650}>
              <p className="text-[15px] sm:text-[16px] text-[#555160] leading-relaxed max-w-md font-sans">
                Métricas reais geradas através de posicionamento estruturado, copywriting persuasivo e consistência na entrega visual.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: 6 Metric Cards (3x2 grid) with reduced curvature (rounded-xl) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {metrics.items.map((item: SocialMetricItem, idx: number) => (
                <ScrollReveal
                  key={idx}
                  animation="fade-up"
                  delay={idx * 60}
                  duration={600}
                >
                  <div className="bg-[#FAF7FC] p-5 sm:p-6 rounded-xl border border-[#EFE5F5] hover:border-[#D5A0F5] transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-sm">
                    <p className="font-heading font-black text-[32px] sm:text-[38px] text-[#0B0B0F] tracking-tight leading-none mb-2">
                      {item.value}
                    </p>
                    <p className="text-[13px] font-medium text-[#555160] leading-snug">
                      {item.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
