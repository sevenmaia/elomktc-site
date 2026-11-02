"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Shield, TrendingUp, Layers } from "lucide-react";
import { SITES_CONTENT, SiteProjectItem } from "@/content/sites-content";
import { LaptopMockup } from "./LaptopMockup";
import { BagueiraScreenMockup } from "./BagueiraScreenMockup";

export function SitesProjectsSection() {
  const { projectsSection } = SITES_CONTENT;
  const { primaryCase, secondaryCases } = projectsSection;

  // Custom in-screen text and framing config matching the approved reference
  const projectScreenMeta: Record<
    string,
    { screenTitle: string; screenSubtitle: string; objectPosition?: string }
  > = {
    "vogue-portas": {
      screenTitle: "Vogue Portas",
      screenSubtitle: "Portas sob medida para o seu projeto",
      objectPosition: "object-right",
    },
    easycon: {
      screenTitle: "EasyCon",
      screenSubtitle: "Planejamento que vira aquisição.",
      objectPosition: "object-center",
    },
    "luz-da-luna": {
      screenTitle: "Luz da Luna",
      screenSubtitle: "Cuidado e carinho para o seu melhor amigo",
      objectPosition: "object-right",
    },
  };

  return (
    <section
      id="projetos-em-destaque"
      className="bg-[#0A0910] text-white py-20 sm:py-28 relative overflow-hidden"
      aria-label="Projetos de Sites e Landing Pages em Destaque"
    >
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/4 -left-32 w-[460px] h-[460px] bg-[#A40DDB]/15 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-[420px] h-[420px] bg-[#7D2AE8]/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Cabeçalho da Seção com Linha Roxa Decorativa e Botão Pílula */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-18 pb-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] sm:text-[12px] font-heading font-black tracking-[0.25em] text-[#C677E0] uppercase">
                {projectsSection.eyebrow}
              </span>
              <span className="w-8 sm:w-12 h-[2px] bg-[#A40DDB] rounded-full inline-block" />
            </div>

            <h2 className="font-heading font-black text-[34px] sm:text-[46px] lg:text-[50px] text-white leading-[1.05] tracking-tight">
              Projetos em destaque<span className="text-[#A40DDB]">.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:max-w-xl">
            <p className="text-[14.5px] sm:text-[15.5px] text-[#A0A0B0] leading-relaxed font-sans">
              {projectsSection.subtitle}
            </p>
            <Link
              href={projectsSection.viewAllCta.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#A40DDB] hover:bg-[#8B09B8] text-white font-heading font-bold text-[13.5px] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex-shrink-0 self-start sm:self-auto"
            >
              <span>{projectsSection.viewAllCta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Composição Editorial Aprovada: 2 Colunas com Separador Vertical */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* ========================================================= */}
          {/* COLUNA ESQUERDA: Notebook Grande da Bagueira Seguros      */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-start relative">
            {/* Glow roxo/magenta semi-circular sutil atrás do notebook */}
            <div
              className="absolute top-8 -left-12 sm:-left-16 w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] rounded-full bg-gradient-to-r from-[#7B129E]/50 via-[#A40DDB]/30 to-transparent blur-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Laptop Mockup Grande com Frame Profissional Real */}
            <div className="w-full transition-transform duration-500 hover:scale-[1.01] mb-6 sm:mb-8">
              <LaptopMockup
                id="bagueira-laptop"
                projectTitle="Bagueira Seguros"
                priority
              >
                <BagueiraScreenMockup />
              </LaptopMockup>
            </div>

            {/* Informações do Case Principal Abaixo do Mockup */}
            <div className="flex flex-col items-start max-w-xl">
              <span className="text-[11px] sm:text-[12px] font-heading font-black tracking-widest uppercase text-[#C677E0] mb-2 block">
                {primaryCase.category}
              </span>

              <h3 className="font-heading font-black text-[30px] sm:text-[38px] text-white tracking-tight leading-tight mb-3">
                {primaryCase.title}
              </h3>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#A0A0B0] leading-relaxed mb-6 font-sans">
                {primaryCase.description}
              </p>

              {/* 3 Pilares com Ícones Oficiais (Credibilidade, Conversão, Posicionamento) */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-1">
                <div className="flex items-center gap-2.5 text-white/90 font-medium text-[13.5px] sm:text-[14.5px]">
                  <div className="w-7 h-7 rounded-lg bg-[#A40DDB]/15 border border-[#A40DDB]/30 flex items-center justify-center text-[#C677E0] flex-shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span>Credibilidade</span>
                </div>

                <div className="flex items-center gap-2.5 text-white/90 font-medium text-[13.5px] sm:text-[14.5px]">
                  <div className="w-7 h-7 rounded-lg bg-[#A40DDB]/15 border border-[#A40DDB]/30 flex items-center justify-center text-[#C677E0] flex-shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span>Conversão</span>
                </div>

                <div className="flex items-center gap-2.5 text-white/90 font-medium text-[13.5px] sm:text-[14.5px]">
                  <div className="w-7 h-7 rounded-lg bg-[#A40DDB]/15 border border-[#A40DDB]/30 flex items-center justify-center text-[#C677E0] flex-shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span>Posicionamento</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUNA DIREITA: 3 Projetos Menores Empilhados Verticalmente */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-start lg:pl-4 xl:pl-6 lg:border-l lg:border-white/10">
            {secondaryCases.map((project: SiteProjectItem, index: number) => {
              const meta = projectScreenMeta[project.id] || {
                screenTitle: project.title,
                screenSubtitle: project.description,
              };

              return (
                <div key={project.id} className="w-full">
                  <div className="flex items-center gap-3.5 sm:gap-6 py-2 group">
                    {/* Mockup do Notebook Menor */}
                    <div className="w-[145px] sm:w-[185px] lg:w-[205px] flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.03]">
                      <LaptopMockup
                        id={project.id}
                        projectTitle={project.title}
                        image={project.image}
                        altText={`Captura real do projeto ${project.title}`}
                        screenTitle={meta.screenTitle}
                        screenSubtitle={meta.screenSubtitle}
                        objectPosition={meta.objectPosition}
                      />
                    </div>

                    {/* Detalhes do Projeto */}
                    <div className="flex flex-col items-start flex-1 min-w-0 pr-1 sm:pr-2">
                      <span className="text-[10px] sm:text-[11px] font-heading font-black tracking-widest uppercase text-[#C677E0] mb-1 block">
                        {project.category}
                      </span>

                      <h4 className="font-heading font-black text-[18px] sm:text-[22px] lg:text-[23px] text-white tracking-tight leading-tight mb-1.5 whitespace-nowrap">
                        {project.title}
                      </h4>

                      <p className="text-[12px] sm:text-[13px] text-[#A0A0B0] leading-relaxed mb-3 line-clamp-2 font-sans">
                        {project.description}
                      </p>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] font-heading font-bold text-[#C677E0] hover:text-white transition-colors inline-flex items-center gap-1 group/link"
                      >
                        <span>Ver site</span>
                      </a>
                    </div>

                    {/* Botão Circular com Seta no Canto Direito */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Acessar site de ${project.title}`}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200 flex-shrink-0 group-hover:scale-110 group-hover:border-[#A40DDB] group-hover:text-white ml-1"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Separador Discreto entre Projetos */}
                  {index < secondaryCases.length - 1 && (
                    <div className="w-full border-b border-white/10 my-4 sm:my-6" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
