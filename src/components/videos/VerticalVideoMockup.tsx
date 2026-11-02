"use client";

import React from "react";
import { VideoPlayer } from "./VideoPlayer";
import type { HeroVideoSlot } from "@/types/videos-hero";

export interface VerticalVideoMockupProps {
  slot: HeroVideoSlot | null;
  isPlaying: boolean;
  onPlayToggle: () => void;
  onPause?: () => void;
  className?: string;
}

export function VerticalVideoMockup({
  slot,
  isPlaying,
  onPlayToggle,
  onPause,
  className = "",
}: VerticalVideoMockupProps) {
  return (
    <div
      className={`relative z-20 w-[220px] sm:w-[255px] lg:w-[270px] h-[440px] sm:h-[510px] lg:h-[540px] bg-[#161522] rounded-[34px] sm:rounded-[40px] p-1 sm:p-1.5 border border-[#3E3A4E] ring-1 ring-white/10 shadow-[0_25px_55px_rgba(0,0,0,0.85),0_0_35px_rgba(164,13,219,0.3)] transition-all duration-500 ${className}`}
      data-testid="vertical-mockup-frame"
    >
      {/* Outer Phone Highlight Rim (Subtle titanium chamfer) */}
      <div
        className="absolute inset-[1px] rounded-[32px] sm:rounded-[38px] pointer-events-none border border-white/5"
        aria-hidden="true"
      />

      {/* Dynamic Island / Sleek Camera Notch */}
      <div
        className="absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-2.5 bg-black rounded-full z-30 flex items-center justify-between px-2 pointer-events-none shadow-sm ring-1 ring-white/10"
        aria-hidden="true"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#181822]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#0C1E38] border border-blue-900/40" />
      </div>

      {/* Screen Area (9:16) with ultra-slim bezels */}
      <div className="relative w-full h-full rounded-[29px] sm:rounded-[35px] overflow-hidden bg-[#0A0910]">
        <VideoPlayer
          src={slot?.videoUrl}
          poster={slot?.posterUrl}
          aspectRatio="9/16"
          title={slot?.title || "Vídeo Vertical"}
          caption={slot?.caption || "o posicionamento de marca é o que diferencia você"}
          altText={slot?.altText}
          isPlaying={isPlaying}
          onPlayToggle={onPlayToggle}
          onPause={onPause}
        />
      </div>
    </div>
  );
}
