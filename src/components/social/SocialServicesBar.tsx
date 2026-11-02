"use client";

import React from "react";
import { Target, PenTool, Calendar, Video, BarChart3 } from "lucide-react";
import { SOCIAL_CONTENT } from "@/content/social-content";
import { ScrollReveal } from "@/components/ScrollReveal";

const ICON_MAP = {
  target: Target,
  pencil: PenTool,
  calendar: Calendar,
  video: Video,
  chart: BarChart3,
};

export function SocialServicesBar() {
  const { servicesBar } = SOCIAL_CONTENT;

  return (
    <section
      aria-label="Especialidades em social media"
      className="w-full bg-[#FFFFFF] border-y border-[#EFE5F5] py-4 sm:py-5 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <ScrollReveal animation="fade-up" duration={550}>
          <div className="flex items-center justify-between gap-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1">
            {servicesBar.map((item, index) => {
              const IconComp = ICON_MAP[item.icon] || Target;

              return (
                <div
                  key={index}
                  className="flex items-center gap-2.5 flex-shrink-0 px-3 py-1.5 rounded-lg hover:bg-[#FAF7FC] transition-colors group cursor-default"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F0DCFA]/70 text-[#A40DDB] flex items-center justify-center flex-shrink-0 group-hover:bg-[#A40DDB] group-hover:text-white transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className="text-[12.5px] sm:text-[13.5px] font-semibold text-[#1F1D2B] whitespace-nowrap tracking-tight">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
