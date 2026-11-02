"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, AlertCircle } from "lucide-react";

export interface VideoPlayerProps {
  src?: string | null;
  poster?: string | null;
  aspectRatio: "9/16" | "16/9";
  title?: string;
  caption?: string;
  altText?: string;
  isPlaying: boolean;
  onPlayToggle: () => void;
  onPause?: () => void;
  className?: string;
}

export function VideoPlayer({
  src,
  poster,
  aspectRatio,
  title,
  caption,
  altText,
  isPlaying,
  onPlayToggle,
  onPause,
  className = "",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Sync external isPlaying state with HTML5 video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      setHasStarted(true);
      video.play().catch((err) => {
        console.warn("Autoplay/play prevented by browser:", err);
      });
    } else {
      video.pause();
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current || duration === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatSeconds = (sec: number) => {
    if (!sec || isNaN(sec)) return "00:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Placeholder when no video is configured
  if (!src && !poster) {
    return (
      <div
        className={`relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#12111E] to-[#0A0910] text-[#A0A0B0] ${className}`}
      >
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C677E0] mb-3">
          <AlertCircle className="w-6 h-6" />
        </div>
        <p className="text-sm font-semibold text-white/80 mb-1">
          {aspectRatio === "9/16" ? "Slot Vertical Vazio" : "Slot Horizontal Vazio"}
        </p>
        <p className="text-xs text-white/40 max-w-[200px]">
          Configure este destaque através do painel administrativo.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none group bg-black ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onPlayToggle}
      role="button"
      tabIndex={0}
      aria-label={`Reproduzir ${title || "vídeo"}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onPlayToggle();
        }
      }}
    >
      {/* HTML5 Video Element */}
      {src && (
        <video
          ref={videoRef}
          src={src}
          poster={poster || undefined}
          playsInline
          muted={isMuted}
          loop
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => {
            if (onPause) onPause();
          }}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            hasStarted ? "opacity-100" : "opacity-0"
          }`}
          aria-label={altText || title || "Vídeo"}
        />
      )}

      {/* Poster Image (shown before starting or when no video src) */}
      {poster && !hasStarted && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={poster}
            alt={altText || title || "Thumbnail do vídeo"}
            fill
            sizes={aspectRatio === "9/16" ? "300px" : "480px"}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>
      )}

      {/* Dark gradient overlay for contrast */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35 pointer-events-none transition-opacity duration-300 ${
          isPlaying && !isHovering ? "opacity-30" : "opacity-80"
        }`}
      />

      {/* Center Play/Pause button */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 z-20 ${
          isPlaying && !isHovering
            ? "opacity-0 scale-90"
            : "opacity-100 scale-100 group-hover:scale-110"
        }`}
      >
        <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-[0_8px_25px_rgba(0,0,0,0.5)] group-hover:bg-[#A40DDB] group-hover:border-[#A40DDB] transition-all">
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-white" />
          ) : (
            <Play className="w-5 h-5 fill-white ml-0.5" />
          )}
        </div>
      </div>

      {/* Bottom Scrubber & Controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-3 z-20 flex flex-col gap-1.5 transition-opacity duration-300 ${
          isPlaying && !isHovering ? "opacity-60" : "opacity-100"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Caption text for 9:16 format */}
        {caption && aspectRatio === "9/16" && (
          <p className="text-[10px] sm:text-[11.5px] font-bold text-white leading-snug drop-shadow-md mb-0.5 pointer-events-none line-clamp-2">
            {caption}
          </p>
        )}

        {/* Progress bar line */}
        <div
          className="w-full h-1.5 rounded-full bg-white/25 overflow-hidden cursor-pointer hover:h-2 transition-all"
          onClick={handleSeek}
          role="slider"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-[#A40DDB] rounded-full transition-[width] duration-100"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Action icons & duration */}
        <div className="flex items-center justify-between text-white/90 text-[10px] pt-0.5">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPlayToggle();
              }}
              className="hover:text-[#C677E0] transition-colors focus:outline-none"
              aria-label={isPlaying ? "Pausar" : "Reproduzir"}
            >
              {isPlaying ? (
                <Pause className="w-3 h-3 fill-current" />
              ) : (
                <Play className="w-3 h-3 fill-current" />
              )}
            </button>

            <button
              type="button"
              onClick={toggleMute}
              className="hover:text-[#C677E0] transition-colors focus:outline-none"
              aria-label={isMuted ? "Ativar som" : "Desativar som"}
            >
              {isMuted ? (
                <VolumeX className="w-3 h-3" />
              ) : (
                <Volume2 className="w-3 h-3" />
              )}
            </button>
          </div>

          <span className="font-mono text-[9px] text-white/80 font-medium">
            {hasStarted && duration > 0
              ? `${formatSeconds(currentTime)} / ${formatSeconds(duration)}`
              : formatSeconds(duration || 0)}
          </span>
        </div>
      </div>
    </div>
  );
}
