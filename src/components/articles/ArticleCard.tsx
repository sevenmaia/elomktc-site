"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ArticleItem } from "@/content/articles-content";
import { LaptopMockup } from "@/components/sites/LaptopMockup";
import { BagueiraScreenMockup } from "@/components/sites/BagueiraScreenMockup";
import { LuzDaLunaScreenMockup } from "./LuzDaLunaScreenMockup";

interface ArticleCardProps {
  item: ArticleItem;
}

export function ArticleCard({ item }: ArticleCardProps) {
  const isDark = item.theme === "dark";
  const isArticleLink = item.categoryKey === "artigos";
  const linkText = isArticleLink ? "Ler artigo" : "Ver projeto";
  const isExternal = item.url.startsWith("http");

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        isDark
          ? "bg-[#100F1A] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.45)] hover:border-white/20"
          : "bg-[#F8F1FD] border border-[#E4CAFB] shadow-[0_8px_25px_rgba(180,120,220,0.15)] hover:border-[#D5B0F5]"
      }`}
      data-testid={`article-card-${item.id}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[290px] h-full">
        {/* Left Visual Area (Mockup or Editorial Photography) */}
        <div
          className={`md:col-span-5 relative flex items-center justify-center overflow-hidden min-h-[220px] md:min-h-full ${
            item.mockupType === "laptop"
              ? isDark
                ? "bg-[#0A0910] p-4 sm:p-5"
                : "bg-[#F3E5FA] p-4 sm:p-5"
              : "bg-black"
          }`}
        >
          {item.mockupType === "laptop" ? (
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-none">
              <LaptopMockup projectTitle={item.title}>
                {item.id === "bagueira-seguros" ? (
                  <BagueiraScreenMockup isHero={false} />
                ) : item.id === "luz-da-luna" ? (
                  <LuzDaLunaScreenMockup mode="laptop" />
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                )}
              </LaptopMockup>
            </div>
          ) : (
            <div className="relative w-full h-full min-h-[220px] md:min-h-[290px]">
              <Image
                src={item.image}
                alt={`Imagem do projeto ${item.title}`}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 360px"
              />
              <div
                className={`absolute inset-0 pointer-events-none ${
                  isDark
                    ? "bg-gradient-to-t from-[#100F1A] via-black/20 to-transparent"
                    : "bg-gradient-to-t from-black/40 via-transparent to-transparent"
                }`}
              />

              {/* In-Screen Overlay Badge/Headline for Special Cases */}
              {item.inScreenOverlay && (
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end pointer-events-none z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white">
                  {item.inScreenOverlay.title && (
                    <p className="font-heading font-black text-[12px] sm:text-[13px] leading-tight text-white drop-shadow-md mb-2 max-w-[90%]">
                      {item.inScreenOverlay.title}
                    </p>
                  )}
                  {item.inScreenOverlay.buttonText && (
                    <div className="inline-flex items-center gap-1 bg-[#D48DF0]/90 text-[#1F072B] text-[9px] font-bold px-2.5 py-1 rounded-sm shadow-xs self-start">
                      <span>{item.inScreenOverlay.buttonText}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Info Area */}
        <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between">
          <div>
            {/* Category Eyebrow */}
            <span
              className={`text-[10px] sm:text-[11px] font-heading font-black tracking-[0.2em] uppercase mb-2 block ${
                isDark ? "text-[#C677E0]" : "text-[#9400D3]"
              }`}
            >
              {item.categoryLabel}
            </span>

            {/* Title */}
            <h3
              className={`font-heading font-black text-[19px] sm:text-[21px] leading-[1.18] tracking-tight mb-2.5 ${
                isDark ? "text-white" : "text-[#120F1D]"
              }`}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className={`text-[13.5px] sm:text-[14px] leading-[1.5] mb-5 ${
                isDark ? "text-zinc-300" : "text-[#4F485C]"
              }`}
            >
              {item.description}
            </p>
          </div>

          <div>
            {/* Tags Badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-[11px] sm:text-[11.5px] px-3 py-1 rounded-full font-medium ${
                    isDark
                      ? "bg-white/10 text-white/90 border border-white/5"
                      : "bg-[#EED8FA] text-[#4F2169] border border-[#E2BFF5]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Call to Action Link */}
            {isExternal ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-[13px] font-bold transition-all duration-200 group-hover:gap-2 ${
                  isDark
                    ? "text-[#D48DF0] hover:text-white"
                    : "text-[#9400D3] hover:text-[#640090]"
                }`}
              >
                <span>{linkText}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <Link
                href={item.url}
                className={`inline-flex items-center gap-1.5 text-[13px] font-bold transition-all duration-200 group-hover:gap-2 ${
                  isDark
                    ? "text-[#D48DF0] hover:text-white"
                    : "text-[#9400D3] hover:text-[#640090]"
                }`}
              >
                <span>{linkText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}