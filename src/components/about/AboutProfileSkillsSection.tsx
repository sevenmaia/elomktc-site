"use client";

import React from "react";
import { BarChart3, PenLine, Rocket, UsersRound, Award, Layers3, Target, TrendingUp } from "lucide-react";
import { ABOUT_CONTENT, CompetencyGroup } from "@/content/about-content";
import { ScrollReveal } from "@/components/ScrollReveal";

const GROUP_ICONS = {
  strategy: BarChart3,
  content: PenLine,
  growth: Rocket,
  operations: UsersRound,
};

const PROFILE_HIGHLIGHTS = [
  { label: "+5 anos", description: "de experiência", icon: Award },
  { label: "B2B e B2C", description: "em diferentes mercados", icon: Layers3 },
  { label: "Visão 360°", description: "da estratégia à execução", icon: Target },
  { label: "Foco em resultados", description: "com impacto no negócio", icon: TrendingUp },
];

function CompetencyRow({ group }: { group: CompetencyGroup }) {
  const Icon = GROUP_ICONS[group.iconName];

  return (
    <article className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3.5 rounded-xl border border-[#ECDDF3] bg-white p-3 sm:p-3.5 transition-all hover:border-[#D5A0F5]">
      <div className="flex items-center gap-2.5 sm:w-[175px] shrink-0">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F2E2FA] text-[#A40DDB]">
          <Icon className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        <h3 className="font-heading text-[14.5px] sm:text-[15.5px] font-black leading-tight tracking-tight text-[#0B0B0F]">
          {group.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:border-l sm:border-[#F0E5F5] sm:pl-3.5 flex-1">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-md bg-[#F6EAFE] px-2.5 py-1 text-[11px] sm:text-[11.5px] font-bold leading-none text-[#6B2389]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export function AboutProfileSkillsSection() {
  const { profile, skills } = ABOUT_CONTENT;

  return (
    <section
      aria-label="Perfil profissional e competências"
      className="relative overflow-hidden bg-[#FEFCFF] py-10 sm:py-14 lg:py-16"
    >
      <div className="pointer-events-none absolute left-[-10%] top-[-22%] h-[400px] w-[400px] rounded-full bg-[#EED8F8]/30 blur-3xl" />
      <div className="pointer-events-none absolute right-[-15%] top-[12%] h-[360px] w-[360px] rounded-full bg-[#F0E2F8]/35 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12 items-start">
          <div>
            <ScrollReveal animation="fade-right" duration={550}>
              <p className="mb-2 text-[11px] font-bold tracking-[0.2em] text-[#A40DDB] sm:text-[12px] uppercase">
                {profile.eyebrow}
              </p>
              <h2 className="font-heading text-[30px] font-black leading-[1.08] tracking-tight text-[#0B0B0F] sm:text-[36px] lg:text-[40px]">
                {profile.title.replace(".", "")}
                <span className="text-[#A40DDB]">.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={80} duration={600}>
              <div className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-[#554F60] sm:text-[14.5px]">
                {profile.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3">
              {PROFILE_HIGHLIGHTS.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <ScrollReveal key={highlight.label} animation="fade-up" delay={index * 60} duration={500}>
                    <div className="flex items-center gap-2.5 sm:gap-3 rounded-xl border border-[#EBDCF3] bg-white/90 p-2.5 sm:p-3.5 shadow-2xs hover:border-[#D5A0F5] transition-all">
                      <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-[#F2E2FA] text-[#A40DDB]">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-heading text-[13.5px] sm:text-[16px] font-black leading-tight tracking-tight text-[#0B0B0F] truncate">
                          {highlight.label}
                        </p>
                        <p className="mt-0.5 text-[10px] sm:text-[12px] leading-tight text-[#655D6E] line-clamp-1">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <ScrollReveal animation="fade-left" duration={600}>
            <div className="rounded-2xl border border-[#E9DBF0] bg-[#FBF7FD]/95 p-4 sm:p-5 shadow-xs">
              <h2 className="px-1 pb-3.5 pt-0.5 font-heading text-[20px] font-black leading-tight tracking-tight text-[#0B0B0F] sm:text-[22px]">
                {skills.title}
              </h2>
              <div className="space-y-2 sm:space-y-2.5">
                {skills.groups.map((group) => (
                  <CompetencyRow key={group.title} group={group} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
