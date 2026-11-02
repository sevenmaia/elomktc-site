"use client";

import React from "react";
import { GraduationCap, Languages, Layers } from "lucide-react";
import { ABOUT_CONTENT } from "@/content/about-content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AboutToolBadge } from "@/components/about/AboutToolBadges";

export function AboutCredentialsSection() {
  const { credentials } = ABOUT_CONTENT;

  return (
    <section
      id="credentials"
      aria-label="Formação acadêmica, idiomas e ferramentas"
      className="py-16 sm:py-20 bg-[#FFFFFF] relative overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 space-y-6">
        {/* Linha Superior: Formação Acadêmica & Idiomas (2 cards lado a lado com bordas reduzidas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: Formação Acadêmica */}
          <ScrollReveal animation="fade-up" delay={0} duration={600} className="h-full">
            <div className="h-full bg-[#FAF7FC] p-6 sm:p-7 rounded-xl border border-[#EFE5F5] shadow-xs flex flex-col justify-between hover:border-[#D5A0F5] transition-all duration-300">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#F0DCFA] text-[#A40DDB] flex items-center justify-center shadow-xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.16em] uppercase text-[#6B21A8]">
                    {credentials.education.eyebrow}
                  </p>
                </div>

                <h3 className="font-heading font-black text-[18px] sm:text-[20px] text-[#0B0B0F] tracking-tight leading-snug mb-2">
                  {credentials.education.degree}
                </h3>
                <p className="text-[14px] font-medium text-[#4A4458] mb-1">
                  {credentials.education.institution}
                </p>
                <p className="text-[13px] font-bold text-[#A40DDB]">
                  {credentials.education.period}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#E8DCF0] flex items-center gap-2 text-[12px] text-[#646475]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Graduação concluída</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Idiomas */}
          <ScrollReveal animation="fade-up" delay={80} duration={600} className="h-full">
            <div className="h-full bg-[#FAF7FC] p-6 sm:p-7 rounded-xl border border-[#EFE5F5] shadow-xs flex flex-col justify-between hover:border-[#D5A0F5] transition-all duration-300">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#F0DCFA] text-[#A40DDB] flex items-center justify-center shadow-xs">
                    <Languages className="w-5 h-5" />
                  </div>
                  <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.16em] uppercase text-[#6B21A8]">
                    {credentials.languages.eyebrow}
                  </p>
                </div>

                <div className="space-y-4">
                  {credentials.languages.items.map((item) => (
                    <div key={item.language}>
                      <div className="flex items-center justify-between text-[13px] font-semibold text-[#1F1D2B] mb-1.5">
                        <span>
                          {item.language}{" "}
                          <span className="text-[#646475] font-normal">
                            — {item.level}
                          </span>
                        </span>
                      </div>
                      <div className="h-2 w-full bg-[#EBE0F2] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#A40DDB] to-[#C677E0] rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#E8DCF0] flex items-center gap-2 text-[12px] text-[#646475]">
                <span className="w-2 h-2 rounded-full bg-[#A40DDB]" />
                <span>Fluência comunicativa</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Linha Inferior: Ferramentas Que Utilizo (Card Amplo, sem ficar espremido, 20 ferramentas) */}
        <ScrollReveal animation="fade-up" delay={150} duration={600}>
          <div className="bg-[#FAF7FC] p-6 sm:p-8 rounded-xl border border-[#EFE5F5] shadow-xs hover:border-[#D5A0F5] transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F0DCFA] text-[#A40DDB] flex items-center justify-center shadow-xs">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.16em] uppercase text-[#6B21A8]">
                    {credentials.tools.eyebrow}
                  </p>
                  <p className="text-[12px] sm:text-[13px] text-[#646475]">
                    Stack estratégica diária com softwares, plataformas, CRMs e inteligências artificiais
                  </p>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-2 text-[12px] text-[#6B21A8] font-semibold bg-[#F0DCFA]/60 px-3 py-1 rounded-md">
                <span className="w-2 h-2 rounded-full bg-[#A40DDB]" />
                <span>20 ferramentas ativas</span>
              </div>
            </div>

            {/* 20 Ferramentas em Grid Amplo (5 colunas desktop, 4 colunas tablet, 2 colunas mobile) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 pt-1">
              {credentials.tools.items.map((tool) => (
                <div
                  key={tool.name}
                  title={tool.name}
                  className="h-12 px-3 rounded-lg bg-white border border-[#E8DCF0] hover:border-[#A40DDB] hover:shadow-xs transition-all flex items-center justify-center group select-none"
                >
                  <div className="transition-transform duration-200 group-hover:scale-105 flex items-center justify-center w-full">
                    <AboutToolBadge name={tool.name} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#E8DCF0] flex items-center justify-between text-[12px] text-[#646475]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A40DDB]" />
                <span>Aplicações diárias da estratégia à mensuração de performance</span>
              </div>
              <span className="text-[11px] text-[#8E869B] hidden sm:inline">
                Go-to-Market &bull; CRM &bull; Design &bull; SEO &bull; Conteúdo
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
