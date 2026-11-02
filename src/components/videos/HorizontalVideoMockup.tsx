"use client";

import React from "react";
import { VideoPlayer } from "./VideoPlayer";
import type { HeroVideoSlot } from "@/types/videos-hero";

export interface HorizontalVideoMockupProps {
  slot: HeroVideoSlot | null;
  isPlaying: boolean;
  onPlayToggle: () => void;
  onPause?: () => void;
  className?: string;
}

export function HorizontalVideoMockup({
  slot,
  isPlaying,
  onPlayToggle,
  onPause,
  className = "",
}: HorizontalVideoMockupProps) {
  const speakerName = slot?.speakerOrTag?.split(" ")[0] || "Bruno";
  const speakerSurname = slot?.speakerOrTag?.split(" ").slice(1).join(" ") || "Quant";

  return (
    <div
      className={`relative z-10 w-[320px] sm:w-[410px] lg:w-[450px] h-[195px] sm:h-[250px] lg:h-[275px] bg-[#161522] rounded-[20px] sm:rounded-[24px] p-1 sm:p-1.5 border border-[#3E3A4E] ring-1 ring-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.85)] transition-all duration-500 ${className}`}
      data-testid="horizontal-mockup-frame"
    >
      {/* Outer Border Highlight */}
      <div
        className="absolute inset-[1px] rounded-[18px] sm:rounded-[22px] pointer-events-none border border-white/5"
        aria-hidden="true"
      />

      {/* Screen Area (16:9) with ultra-slim bezels */}
      <div className="relative w-full h-full rounded-[16px] sm:rounded-[20px] overflow-hidden bg-[#0A0910]">
        <VideoPlayer
          src={slot?.videoUrl}
          poster={slot?.posterUrl}
          aspectRatio="16/9"
          title={slot?.title || "Vídeo Horizontal"}
          caption={slot?.caption}
          altText={slot?.altText}
          isPlaying={isPlaying}
          onPlayToggle={onPlayToggle}
          onPause={onPause}
        />

        {/* Speaker Tag in top-left (visible when poster/video is active) */}
        {slot && (
          <div className="absolute top-3 left-3.5 z-20 pointer-events-none text-left drop-shadow-md">
            <p className="text-[11px] sm:text-[12.5px] font-black text-white leading-tight">
              {speakerName}
            </p>
            {speakerSurname && (
              <p className="text-[9px] sm:text-[10px] font-bold text-[#C677E0] leading-tight">
                {speakerSurname}
              </p>
            )}
          </div>
        )}

        {/* Duration pill in bottom-right (above scrubber) */}
        {slot?.duration && (
          <div className="absolute bottom-8 right-3 z-20 pointer-events-none bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[9.5px] font-mono font-medium text-white/90 border border-white/10">
            {slot.duration}
          </div>
        )}
      </div>
    </div>
  );
}
