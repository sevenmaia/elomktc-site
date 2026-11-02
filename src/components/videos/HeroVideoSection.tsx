"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Video, Sliders, Target, Monitor, Sparkles } from "lucide-react";
import { VerticalVideoMockup } from "./VerticalVideoMockup";
import { HorizontalVideoMockup } from "./HorizontalVideoMockup";
import type { HeroVideoSlot, HeroVideosData } from "@/types/videos-hero";
import initialHeroData from "@/content/videos-hero-data.json";

export interface HeroVideoSectionProps {
  initialData?: HeroVideosData;
}

export function HeroVideoSection({ initialData }: HeroVideoSectionProps) {
  const [heroData, setHeroData] = useState<HeroVideosData>(
    initialData || (initialHeroData as unknown as HeroVideosData)
  );

  // Active playing video: only one at a time (mutual exclusivity)
  const [activePlaying, setActivePlaying] = useState<"vertical" | "horizontal" | null>(null);

  // Looping spotlight swap between Vertical and Horizontal, matching Social Media hero behavior
  const [spotlight, setSpotlight] = useState<"vertical" | "horizontal">("vertical");
  const [isPaused, setIsPaused] = useState(false);

  // Check URL query param if present for initial testing/spotlight selection
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("spotlight=horizontal")) {
      setSpotlight("horizontal");
    }
  }, []);

  // Fetch latest published data from API (revalidating on client)
  useEffect(() => {
    let isMounted = true;
    async function loadPublishedHero() {
      try {
        const res = await fetch("/api/admin/videos/hero", { cache: "no-store" });
        if (res.ok) {
          const json = await res.json();
          if (isMounted && json?.published) {
            setHeroData(json);
          }
        }
      } catch (err) {
        console.warn("Usando dados iniciais locais da Hero:", err);
      }
    }

    loadPublishedHero();
    return () => {
      isMounted = false;
    };
  }, []);

  const toggleSpotlight = useCallback(() => {
    setSpotlight((prev) => (prev === "vertical" ? "horizontal" : "vertical"));
  }, []);

  // Looping animation every 4 seconds (pauses on hover or when video is actively playing)
  useEffect(() => {
    if (isPaused || activePlaying !== null) return;
    const interval = setInterval(toggleSpotlight, 4200);
    return () => clearInterval(interval);
  }, [isPaused, activePlaying, toggleSpotlight]);

  const verticalSlot: HeroVideoSlot | null = heroData?.published?.vertical || null;
  const horizontalSlot: HeroVideoSlot | null = heroData?.published?.horizontal || null;

  const handlePlayToggle = (slot: "vertical" | "horizontal") => {
    // Bring clicked device into spotlight immediately
    setSpotlight(slot);
    if (activePlaying === slot) {
      setActivePlaying(null);
    } else {
      setActivePlaying(slot);
    }
  };

  const isVerticalSpotlight = spotlight === "vertical";

  return (
    <section
      aria-label="Hero de Vídeos"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 bg-[#0A0910] text-white overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#A40DDB]/25 via-[#7D2AE8]/15 to-transparent blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 left-[-10%] w-[420px] h-[420px] rounded-full bg-[#A40DDB]/15 blur-[110px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna Esquerda: Textos, Ações e os 3 Micro-Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.25em] uppercase text-[#C677E0] mb-3">
              V Í D E O S
            </p>

            {/* H1 Title */}
            <h1 className="font-heading font-black text-[38px] sm:text-[52px] lg:text-[58px] leading-[1.04] tracking-tight text-white mb-6">
              Narrativas que conectam{" "}
              <span>
                pessoas<span className="text-[#A40DDB]">.</span>
              </span>
            </h1>

            {/* Subtitle / Lead */}
            <p className="text-[15px] sm:text-[16.5px] text-[#A0A0B0] leading-relaxed max-w-[520px] mb-8 font-sans">
              Produção e edição de vídeos estratégicos para comunicar ideias, fortalecer
              marcas e transformar mensagens em experiências reais.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <Link
                href="/orcamento"
                className="inline-flex items-center justify-center gap-2.5 h-11 sm:h-12 px-6 sm:px-7 rounded-lg bg-[#A40DDB] text-white font-semibold text-[13px] sm:text-[14px] hover:bg-[#8B09B8] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Fale comigo</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="#todos-os-videos"
                className="inline-flex items-center justify-center h-11 sm:h-12 px-6 sm:px-7 rounded-lg bg-white/5 text-white font-semibold text-[13px] sm:text-[14px] border border-white/20 hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                <span>Ver meus projetos</span>
              </Link>
            </div>

            {/* 3 Micro-Cards Abaixo dos Botões (Produção, Edição, Estratégia) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-white/5">
              {/* Micro-Card 1: Produção */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-200 group">
                <div className="w-10 h-10 rounded-lg bg-[#231333] border border-[#A40DDB]/30 flex items-center justify-center text-[#C677E0] group-hover:scale-105 transition-transform flex-shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading font-bold text-[13px] text-white leading-tight">
                    Produção
                  </p>
                  <p className="text-[11px] text-[#A0A0B0] leading-tight mt-0.5 font-sans">
                    da ideia à entrega
                  </p>
                </div>
              </div>

              {/* Micro-Card 2: Edição */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-200 group">
                <div className="w-10 h-10 rounded-lg bg-[#231333] border border-[#A40DDB]/30 flex items-center justify-center text-[#C677E0] group-hover:scale-105 transition-transform flex-shrink-0">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading font-bold text-[13px] text-white leading-tight">
                    Edição
                  </p>
                  <p className="text-[11px] text-[#A0A0B0] leading-tight mt-0.5 font-sans">
                    com foco em resultado
                  </p>
                </div>
              </div>

              {/* Micro-Card 3: Estratégia */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-200 group">
                <div className="w-10 h-10 rounded-lg bg-[#231333] border border-[#A40DDB]/30 flex items-center justify-center text-[#C677E0] group-hover:scale-105 transition-transform flex-shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading font-bold text-[13px] text-white leading-tight">
                    Estratégia
                  </p>
                  <p className="text-[11px] text-[#A0A0B0] leading-tight mt-0.5 font-sans">
                    para diferentes canais
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Composição Interativa com Animação em Looping de Troca */}
          <div
            className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[480px] sm:min-h-[560px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            role="region"
            aria-label="Composição dinâmica de vídeos em destaque"
          >
            {/* Floating Badge 1 (Topo Esquerda: Vídeos verticais) */}
            <div
              onClick={() => setSpotlight("vertical")}
              className={`absolute top-4 sm:top-6 -left-4 sm:-left-8 lg:-left-12 z-40 select-none cursor-pointer hidden md:flex items-center gap-3 backdrop-blur-md p-2.5 px-3.5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-500 ${
                isVerticalSpotlight
                  ? "bg-[#1B172C] border-2 border-[#A40DDB] scale-105 shadow-[0_0_20px_rgba(164,13,219,0.4)]"
                  : "bg-[#13111E]/90 border border-[#2D2A42] opacity-80 hover:opacity-100"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                  isVerticalSpotlight ? "bg-[#A40DDB] text-white" : "bg-[#2B123D] text-[#C677E0]"
                }`}
              >
                <Video className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-[12.5px] text-white leading-tight">
                  Vídeos verticais
                </p>
                <p className="text-[10.5px] text-[#C677E0] leading-tight font-sans">
                  para redes sociais
                </p>
              </div>
            </div>

            {/* Mockup Composition Container */}
            <div className="relative w-full h-[460px] sm:h-[530px] flex items-center justify-center overflow-hidden sm:overflow-visible">
              {/* Horizontal Mockup (Slot 2, 16:9) */}
              <div
                onClick={() => {
                  if (!isVerticalSpotlight) {
                    handlePlayToggle("horizontal");
                  } else {
                    setSpotlight("horizontal");
                  }
                }}
                className={`absolute transition-all duration-700 ease-[cubic-bezier(0.34,1.15,0.64,1)] ${
                  !isVerticalSpotlight
                    ? "opacity-100 scale-100 z-20 pointer-events-auto sm:z-30 sm:right-2 sm:right-4 sm:bottom-12 sm:bottom-16 sm:scale-[1.03] sm:opacity-100 cursor-default"
                    : "opacity-0 scale-90 pointer-events-none z-10 sm:z-10 sm:right-0 sm:right-2 sm:bottom-6 sm:bottom-10 sm:scale-[0.91] sm:opacity-75 sm:hover:opacity-100 sm:pointer-events-auto cursor-pointer"
                } left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:left-auto sm:top-auto sm:translate-x-0 sm:translate-y-0`}
                style={{ willChange: "transform, opacity, z-index" }}
              >
                <HorizontalVideoMockup
                  slot={horizontalSlot}
                  isPlaying={activePlaying === "horizontal"}
                  onPlayToggle={() => handlePlayToggle("horizontal")}
                  onPause={() => {
                    if (activePlaying === "horizontal") setActivePlaying(null);
                  }}
                />
              </div>

              {/* Vertical Mockup (Slot 1, 9:16) */}
              <div
                onClick={() => {
                  if (isVerticalSpotlight) {
                    handlePlayToggle("vertical");
                  } else {
                    setSpotlight("vertical");
                  }
                }}
                className={`absolute transition-all duration-700 ease-[cubic-bezier(0.34,1.15,0.64,1)] ${
                  isVerticalSpotlight
                    ? "opacity-100 scale-100 z-20 pointer-events-auto sm:z-30 sm:left-4 sm:left-6 lg:left-8 sm:top-1/2 sm:-translate-y-1/2 sm:scale-[1.02] sm:opacity-100 cursor-default"
                    : "opacity-0 scale-90 pointer-events-none z-10 sm:z-10 sm:left-2 sm:left-4 lg:left-6 sm:top-1/2 sm:-translate-y-[42%] sm:scale-[0.90] sm:opacity-75 sm:hover:opacity-100 sm:pointer-events-auto cursor-pointer"
                } left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:translate-x-0`}
                style={{ willChange: "transform, opacity, z-index" }}
              >
                <VerticalVideoMockup
                  slot={verticalSlot}
                  isPlaying={activePlaying === "vertical"}
                  onPlayToggle={() => handlePlayToggle("vertical")}
                  onPause={() => {
                    if (activePlaying === "vertical") setActivePlaying(null);
                  }}
                />
              </div>
            </div>

            {/* Floating Badge 2 (Base Direita: Vídeos horizontais) */}
            <div
              onClick={() => setSpotlight("horizontal")}
              className={`absolute bottom-3 sm:bottom-5 -right-2 sm:-right-6 lg:-right-8 z-40 select-none cursor-pointer hidden md:flex items-center gap-3 backdrop-blur-md p-2.5 px-3.5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-500 ${
                !isVerticalSpotlight
                  ? "bg-[#1B172C] border-2 border-[#A40DDB] scale-105 shadow-[0_0_20px_rgba(164,13,219,0.4)]"
                  : "bg-[#13111E]/90 border border-[#2D2A42] opacity-80 hover:opacity-100"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                  !isVerticalSpotlight ? "bg-[#A40DDB] text-white" : "bg-[#2B123D] text-[#C677E0]"
                }`}
              >
                <Monitor className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-[12.5px] text-white leading-tight">
                  Vídeos horizontais
                </p>
                <p className="text-[10.5px] text-[#C677E0] leading-tight font-sans">
                  para eventos, cases e conteúdos longos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
