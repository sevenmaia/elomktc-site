"use client";

import React from "react";
import { Layout, Building2, Target, PenTool, Sparkles } from "lucide-react";
import { SITES_CONTENT, type SiteBenefitItem } from "@/content/sites-content";

const iconMap = {
  Layout: Layout,
  Building2: Building2,
  Target: Target,
  PenTool: PenTool,
  Sparkles: Sparkles,
};

export function SitesBenefitsBar() {
  const { benefitsBar } = SITES_CONTENT;

  return (
    <section className="bg-white border-y border-[#EDEAF5] py-6 sm:py-7 relative z-20">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-center">
          {benefitsBar.map((item, idx) => {
            const Icon = iconMap[item.iconName];
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 group transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F6ECFC] flex items-center justify-center text-[#A40DDB] flex-shrink-0 group-hover:bg-[#A40DDB] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[13.5px] text-[#14121E] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11.5px] text-[#696479] leading-tight mt-0.5 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
