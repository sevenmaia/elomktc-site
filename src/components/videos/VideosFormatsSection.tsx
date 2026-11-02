"use client";

import React from "react";
import Image from "next/image";
import { Smartphone, Monitor, ArrowRight } from "lucide-react";
import { VIDEOS_CONTENT } from "@/content/videos-content";
import { ScrollReveal } from "@/components/ScrollReveal";

interface VideosFormatsSectionProps {
  onSelectFilter?: (category: string) => void;
}

export function VideosFormatsSection({ onSelectFilter }: VideosFormatsSectionProps) {
  const { formats } = VIDEOS_CONTENT;

  const handleScrollToVideos = (category: string) => {
    if (onSelectFilter) {
      onSelectFilter(category);
    }
    const target = document.getElementById("todos-os-videos");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="Tipos de formatos de vídeos"
      className="py-20 sm:py-28 bg-[#0A0910] text-white relative overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <ScrollReveal animation="fade-right" duration={550}>
              <h2 className="font-heading font-black text-[34px] sm:text-[46px] lg:text-[50px] leading-[1.06] tracking-tight text-white">
                Tipos de formatos<span className="text-[#A40DDB]">.</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-left" delay={100} duration={650}>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#A0A0B0] font-sans max-w-sm leading-relaxed">
              {formats.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* 2 Big Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Vídeos Verticais */}
          <ScrollReveal animation="fade-up" duration={600}>
            <div className="h-full rounded-xl bg-[#12111A] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#A40DDB]/50 transition-all duration-300 shadow-xl group">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Left side: Texts & CTA */}
                <div className="sm:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-[#A40DDB]/15 border border-[#A40DDB]/40 text-[#C677E0] flex items-center justify-center mb-6">
                      <Smartphone className="w-5 h-5" />
                    </div>

                    <h3 className="font-heading font-black text-[22px] sm:text-[24px] text-white tracking-tight leading-snug mb-3">
                      Vídeos verticais
                    </h3>

                    <p className="text-[13.5px] text-[#A0A0B0] leading-relaxed mb-6 font-sans">
                      Reels, Tiktok, Shorts e stories com foco em descoberta, engajamento e conversão.
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => handleScrollToVideos("Todos os projetos")}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#A40DDB] text-white text-[13px] font-bold hover:bg-[#8B09B8] transition-colors cursor-pointer shadow-sm hover:shadow-md active:scale-95"
                    >
                      <span>Ver exemplos</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right side: 3 Overlapping Vertical Phones (Native Vector UI + High-Res Photography) */}
                <div className="sm:col-span-6 relative h-[230px] sm:h-[250px] flex items-center justify-center select-none">
                  {/* Left Phone */}
                  <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-[85px] sm:w-[98px] h-[160px] sm:h-[185px] rounded-[16px] bg-[#161522] p-1 border border-white/10 shadow-lg -rotate-6 opacity-80 group-hover:-translate-x-1 transition-transform duration-500">
                    <div className="relative w-full h-full rounded-[12px] overflow-hidden bg-black">
                      <Image
                        src="/images/videos/format-phone-1.webp"
                        alt="Reels e vídeos verticais"
                        fill
                        className="object-cover"
                        sizes="100px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    </div>
                  </div>

                  {/* Right Phone */}
                  <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-[85px] sm:w-[98px] h-[160px] sm:h-[185px] rounded-[16px] bg-[#161522] p-1 border border-white/10 shadow-lg rotate-6 opacity-80 group-hover:translate-x-1 transition-transform duration-500">
                    <div className="relative w-full h-full rounded-[12px] overflow-hidden bg-black">
                      <Image
                        src="/images/videos/format-phone-3.webp"
                        alt="Shorts e stories"
                        fill
                        className="object-cover"
                        sizes="100px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    </div>
                  </div>

                  {/* Center Phone (Featured) */}
                  <div className="relative z-10 w-[100px] sm:w-[115px] h-[190px] sm:h-[215px] rounded-[20px] bg-[#1A1828] p-1.5 border-[1.5px] border-[#A40DDB]/60 shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(164,13,219,0.3)] group-hover:scale-105 transition-transform duration-500">
                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-black rounded-full z-20" />
                    <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-black">
                      <Image
                        src="/images/videos/format-phone-2.webp"
                        alt="Vídeo vertical em destaque"
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                      {/* Play Icon */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/25 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                        <ArrowRight className="w-3.5 h-3.5 fill-white ml-0.5" />
                      </div>
                      {/* Bottom Caption Pill */}
                      <div className="absolute bottom-2 left-1.5 right-1.5 bg-black/60 backdrop-blur-md px-1.5 py-1 rounded text-[7.5px] text-white/90 text-center font-sans font-medium truncate">
                        Posicionamento
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Vídeos Horizontais */}
          <ScrollReveal animation="fade-up" delay={120} duration={600}>
            <div className="h-full rounded-xl bg-[#12111A] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#A40DDB]/50 transition-all duration-300 shadow-xl group">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Left side: Texts & CTA */}
                <div className="sm:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-[#A40DDB]/15 border border-[#A40DDB]/40 text-[#C677E0] flex items-center justify-center mb-6">
                      <Monitor className="w-5 h-5" />
                    </div>

                    <h3 className="font-heading font-black text-[22px] sm:text-[24px] text-white tracking-tight leading-snug mb-3">
                      Vídeos horizontais
                    </h3>

                    <p className="text-[13.5px] text-[#A0A0B0] leading-relaxed mb-6 font-sans">
                      Para YouTube, eventos, cases, palestras e conteúdos mais completos que posicionam sua marca.
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => handleScrollToVideos("Evento")}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#A40DDB] text-white text-[13px] font-bold hover:bg-[#8B09B8] transition-colors cursor-pointer shadow-sm hover:shadow-md active:scale-95"
                    >
                      <span>Ver exemplos</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right side: 16:9 Video Player Screen (Native Vector UI + High-Res Photography) */}
                <div className="sm:col-span-6 relative h-[190px] sm:h-[210px] flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#141320] shadow-xl group/player">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/videos/format-horizontal-cinema.webp"
                      alt="Exemplos de vídeos horizontais"
                      fill
                      className="object-cover group-hover/player:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[9px] font-mono font-medium text-white/90 pointer-events-none">
                      <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                        4K UHD
                      </span>
                      <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                        02:45
                      </span>
                    </div>

                    {/* Centered Glowing Play Button */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#A40DDB]/80 hover:bg-[#A40DDB] backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-[0_0_20px_rgba(164,13,219,0.6)] group-hover/player:scale-110 transition-all">
                      <ArrowRight className="w-4 h-4 fill-white ml-0.5" />
                    </div>

                    {/* Bottom Scrubber & Time */}
                    <div className="absolute bottom-2.5 left-3 right-3 pointer-events-none">
                      <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mb-1.5">
                        <div className="w-1/3 h-full bg-gradient-to-r from-[#A40DDB] to-[#D5A0F5] rounded-full" />
                      </div>
                      <div className="flex items-center justify-between text-[8px] font-mono text-white/70">
                        <span>00:54</span>
                        <span>02:45</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
