"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ChevronDown, ArrowDown } from "lucide-react";
import { VIDEOS_CONTENT, VideoCatalogItem } from "@/content/videos-content";
import { ScrollReveal } from "@/components/ScrollReveal";
import { VideoModal } from "@/components/videos/VideoModal";

interface VideosCatalogSectionProps {
  initialCategory?: string;
}

export function VideosCatalogSection({ initialCategory = "Todos os projetos" }: VideosCatalogSectionProps) {
  const { catalog } = VIDEOS_CONTENT;
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [activeVideo, setActiveVideo] = useState<VideoCatalogItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(9);

  // Filter videos based on category
  const filteredVideos =
    selectedCategory === "Todos os projetos"
      ? catalog.items
      : catalog.items.filter((v) => v.category === selectedCategory);

  const displayedVideos = filteredVideos.slice(0, visibleCount);

  return (
    <section
      id="todos-os-videos"
      aria-label="Catálogo de vídeos"
      className="py-20 sm:py-28 bg-[#0A0910] text-white relative overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header Row: Title & Dropdown Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 sm:mb-16">
          <ScrollReveal animation="fade-right" duration={550}>
            <h2 className="font-heading font-black text-[34px] sm:text-[46px] lg:text-[50px] leading-[1.06] tracking-tight text-white">
              Todos os vídeos<span className="text-[#A40DDB]">.</span>
            </h2>
          </ScrollReveal>

          {/* Filter Dropdown */}
          <ScrollReveal animation="fade-left" delay={100} duration={650}>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setVisibleCount(9);
                }}
                aria-label="Filtrar vídeos por projeto ou categoria"
                className="appearance-none bg-[#12111A] text-white text-[13.5px] font-semibold pl-5 pr-10 py-2.5 sm:py-3 rounded-lg border border-white/20 hover:border-[#A40DDB] focus:border-[#A40DDB] focus:outline-none transition-colors cursor-pointer shadow-sm"
              >
                {catalog.categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#12111A] text-white">
                    {cat}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-white/70 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>

        {/* 9 Video Grid (3 columns desktop, 2 columns tablet, 1 mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {displayedVideos.map((video, idx) => (
            <ScrollReveal
              key={video.id}
              animation="fade-up"
              delay={(idx % 3) * 80}
              duration={600}
            >
              <div
                onClick={() => setActiveVideo(video)}
                className="group flex flex-col cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveVideo(video);
                  }
                }}
              >
                {/* 16:9 Thumbnail Box */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#161420] border border-white/10 group-hover:border-[#A40DDB]/60 transition-all duration-300 shadow-md group-hover:shadow-[0_10px_30px_rgba(164,13,219,0.25)] mb-3.5">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />

                  {/* Centered Play Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:scale-115 group-hover:bg-[#A40DDB] transition-all duration-300">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>

                  {/* Duration Badge (Bottom Right) */}
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-white text-[11px] font-bold tracking-wider">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info below thumbnail */}
                <div>
                  <h3 className="font-heading font-bold text-[16px] sm:text-[17px] text-white tracking-tight leading-snug group-hover:text-[#EBD2FA] transition-colors mb-2">
                    {video.title}
                  </h3>

                  <div className="flex items-center">
                    <span className="inline-block px-3 py-1 rounded-md bg-[#181622] border border-white/10 text-[11px] font-semibold text-[#A0A0B0] group-hover:text-white group-hover:border-[#A40DDB]/40 transition-colors">
                      {video.category}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-14 sm:mt-16 flex justify-center">
          <ScrollReveal animation="fade-up" delay={100} duration={600}>
            <button
              onClick={() => {
                if (visibleCount < catalog.items.length) {
                  setVisibleCount((prev) => prev + 3);
                }
              }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#0A0910] border border-white/20 text-white text-[13.5px] font-bold hover:border-white hover:bg-white/10 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <span>Carregar mais vídeos</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </ScrollReveal>
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}
