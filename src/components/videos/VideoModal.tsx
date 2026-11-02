"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Play, Clock, Tag } from "lucide-react";
import { VideoCatalogItem } from "@/content/videos-content";

interface VideoModalProps {
  video: VideoCatalogItem | null;
  onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (video) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#12111A] border border-white/15 rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#161420]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-[#A40DDB]/20 border border-[#A40DDB]/40 text-[#EBD2FA] text-[11px] font-bold">
              {video.category}
            </span>
            <h3 className="font-heading font-bold text-[16px] sm:text-[18px] text-white truncate max-w-md">
              {video.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Fechar vídeo"
            className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          {video.videoUrl ? (
            <video
              src={video.videoUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="relative w-full h-full flex items-center justify-center group">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/45" />

              {/* Pulsing Play Button */}
              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#A40DDB] text-white flex items-center justify-center shadow-[0_0_40px_rgba(164,13,219,0.8)] cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>

              {/* Duration and Status overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs">
                <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-[#C677E0]" />
                  <span>Duração: {video.duration}</span>
                </div>
                <span className="text-[11px] text-white/70">
                  {video.orientation === "vertical" ? "Vídeo Vertical (9:16)" : "Vídeo Horizontal (16:9)"}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Details Footer */}
        {video.description && (
          <div className="p-4 sm:p-5 bg-[#12111A] text-sm text-[#A0A0B0] border-t border-white/5">
            <p>{video.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
