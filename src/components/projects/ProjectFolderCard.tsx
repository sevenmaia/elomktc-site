import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type FolderTone = "dark" | "lavender" | "magenta";

export interface ProjectFolderCardProps {
  category: string;
  title: string;
  description: string;
  tone: FolderTone;
  href: string;
  disableShadow?: boolean;
  className?: string;
}

export const FOLDER_TONE_CONFIG = {
  dark: {
    bgClass: "bg-[#14131A] border border-[#282634]/60",
    svgColor: "#14131A",
    categoryColor: "text-[#8E8A99]",
    titleColor: "text-white",
    descColor: "text-[#B5B2C0]",
    btnBg: "bg-[#25232E] text-white group-hover:bg-[#A40DDB]",
  },
  lavender: {
    bgClass: "bg-[#A855F7]",
    svgColor: "#A855F7",
    categoryColor: "text-[#F5E6FF]",
    titleColor: "text-white",
    descColor: "text-[#F8F0FF]",
    btnBg: "bg-[#8A30E0] text-white group-hover:bg-[#0B0B0F]",
  },
  magenta: {
    bgClass: "bg-[#C013B9]",
    svgColor: "#C013B9",
    categoryColor: "text-[#FFE6FA]",
    titleColor: "text-white",
    descColor: "text-[#FFF0FC]",
    btnBg: "bg-[#9A0D95] text-white group-hover:bg-[#0B0B0F]",
  },
};

export function ProjectFolderCard({
  category,
  title,
  description,
  tone,
  href,
  disableShadow = false,
  className = "",
}: ProjectFolderCardProps) {
  const config = FOLDER_TONE_CONFIG[tone] || FOLDER_TONE_CONFIG.dark;

  return (
    <Link
      href={href}
      className={`group flex flex-col w-full h-full transition-all duration-300 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#A40DDB] rounded-b-xl ${
        disableShadow ? "shadow-none" : ""
      } ${className}`}
      aria-label={`${category}: ${title}`}
    >
      {/* SVG Folder Tab Header - Official Geometry with Smooth Concave Shoulder */}
      <div className="w-full relative h-[36px] overflow-hidden -mb-[1px]">
        <svg
          viewBox="0 0 300 36"
          preserveAspectRatio="none"
          className="w-full h-full block"
          style={{ color: config.svgColor }}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M 0 36 L 0 16 Q 0 0 16 0 L 126 0 Q 140 0 150 14 Q 158 24 172 24 L 284 24 Q 300 24 300 36 Z" />
        </svg>
      </div>

      {/* Folder Card Body - 100% Solid Opaque Background */}
      <div
        className={`flex-1 ${config.bgClass} rounded-b-xl p-6 sm:p-8 flex flex-col justify-between min-h-[250px] sm:min-h-[280px] ${
          disableShadow
            ? "shadow-none"
            : "shadow-lg group-hover:shadow-[0_20px_40px_rgba(164,13,219,0.22)]"
        } transition-all duration-300`}
      >
        <div>
          {/* Category */}
          <span
            className={`text-[11px] font-bold tracking-[0.14em] uppercase block mb-2.5 sm:mb-3 ${config.categoryColor}`}
          >
            {category}
          </span>

          {/* Title */}
          <h3
            className={`font-heading font-extrabold text-[22px] sm:text-[24px] leading-tight tracking-tight mb-2.5 sm:mb-3 ${config.titleColor}`}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className={`text-[13px] sm:text-[14px] leading-relaxed font-normal ${config.descColor}`}
          >
            {description}
          </p>
        </div>

        {/* Action Button with Arrow at bottom-left */}
        <div className="pt-6 sm:pt-8 flex items-center">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${config.btnBg} shadow-sm group-hover:scale-105`}
            aria-hidden="true"
          >
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
