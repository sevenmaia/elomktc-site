"use client";

import React from "react";
import { SITES_CONTENT } from "@/content/sites-content";
import { SeoGeoDiagram } from "./SeoGeoDiagram";

export function SitesSeoSection() {
  const { seoSection } = SITES_CONTENT;

  return (
    <section
      id="seo-geo"
      aria-label="Estratégia de conteúdo, SEO e GEO"
      className="bg-white py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10 xl:gap-14">
          {/* Coluna Esquerda — 38%: Alinhamento vertical centralizado */}
          <div className="w-full lg:w-[38%] flex flex-col items-start justify-center flex-shrink-0">
            <span className="text-[12px] sm:text-[13px] font-heading font-black tracking-[0.2em] text-[#A40DDB] uppercase block mb-3 sm:mb-4">
              ESTRATÉGIA DE CONTEÚDO
            </span>

            <h2 className="font-heading font-black text-[38px] sm:text-[46px] lg:text-[48px] xl:text-[54px] text-[#0B0B0F] leading-[1.04] tracking-tight mb-6">
              Conteúdo<br />
              pensado para<br />
              <span className="whitespace-nowrap">
                ser encontrado<span className="text-[#A40DDB]">.</span>
              </span>
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#555066] leading-relaxed font-sans max-w-[430px]">
              {seoSection.subtitle}
            </p>
          </div>

          {/* Coluna Direita — 62%: Diagrama visual com os 4 cards e elemento central */}
          <div className="w-full lg:w-[62%] relative flex items-center justify-center">
            <SeoGeoDiagram pillars={seoSection.pillars} />
          </div>
        </div>
      </div>
    </section>
  );
}
