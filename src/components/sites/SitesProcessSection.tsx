"use client";

import React from "react";
import { Search, Layers, PenTool, Monitor, ArrowRight } from "lucide-react";
import { SITES_CONTENT } from "@/content/sites-content";

const processIconMap = {
  Search: Search,
  Layers: Layers,
  PenTool: PenTool,
  Monitor: Monitor,
};

export function SitesProcessSection() {
  const { processSection } = SITES_CONTENT;

  return (
    <section className="bg-[#0C0A14] text-white py-24 sm:py-28 relative overflow-hidden border-t border-[#1C1A29]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div>
            <span className="text-[12px] font-heading font-black tracking-widest text-[#C677E0] uppercase block mb-3">
              {processSection.eyebrow}
            </span>
            <h2 className="font-heading font-black text-[32px] sm:text-[44px] text-white leading-tight tracking-tight">
              Estrutura pensada para gerar resultado<span className="text-[#A40DDB]">.</span>
            </h2>
          </div>

          <p className="text-[14px] sm:text-[15px] text-[#A29DB5] max-w-[420px] leading-relaxed font-sans">
            {processSection.subtitle}
          </p>
        </div>

        {/* 4 Cards em Grid de 4 Colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSection.steps.map((step, idx) => {
            const Icon = processIconMap[step.iconName];
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-[#141222] border border-[#2B2742] shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between hover:border-[#A40DDB]/50 transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#231333] border border-[#A40DDB]/30 flex items-center justify-center text-[#C677E0] group-hover:scale-105 group-hover:bg-[#A40DDB] group-hover:text-white transition-all duration-200 mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading font-black text-[18px] sm:text-[19px] text-white mb-2 leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-[13px] text-[#8E899F] leading-relaxed font-sans mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[#C677E0] group-hover:text-white transition-colors">
                  <span className="text-[11px] font-mono text-[#676378]">FASE {step.step}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
