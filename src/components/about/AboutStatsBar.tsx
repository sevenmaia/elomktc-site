"use strict";

import React from "react";
import { Users, TrendingUp, Target, Star } from "lucide-react";
import { ABOUT_CONTENT } from "@/content/about-content";
import { ScrollReveal } from "@/components/ScrollReveal";

const ICON_MAP = {
  Users: Users,
  TrendingUp: TrendingUp,
  Target: Target,
  Star: Star,
};

export function AboutStatsBar() {
  const { stats } = ABOUT_CONTENT;

  return (
    <section
      aria-label="Indicadores de experiência"
      className="relative z-20 mt-4 sm:mt-6 mb-12 sm:mb-20 max-w-[1240px] mx-auto px-5 sm:px-8"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
        {stats.map((stat, idx) => {
          const IconComponent = ICON_MAP[stat.iconName] || Users;
          return (
            <ScrollReveal
              key={stat.label}
              animation="fade-up"
              delay={idx * 80}
              duration={600}
            >
              <div className="h-full bg-white/95 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-[#E9E2EE] shadow-[0_10px_30px_rgba(20,0,40,0.06)] hover:shadow-[0_14px_40px_rgba(164,13,219,0.12)] hover:border-[#D5A0F5] transition-all duration-300 flex flex-col justify-between group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#F8F2FD] border border-[#EBD2FA] flex items-center justify-center text-[#A40DDB] group-hover:bg-[#A40DDB] group-hover:text-white transition-colors duration-300 shadow-xs">
                    <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </div>
                </div>

                <div>
                  <span className="block font-heading font-black text-[22px] min-[375px]:text-[26px] sm:text-[30px] lg:text-[32px] text-[#0B0B0F] tracking-tight leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="block font-sans text-[12px] sm:text-[13px] font-medium text-[#646475] leading-snug">
                    {stat.label}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
