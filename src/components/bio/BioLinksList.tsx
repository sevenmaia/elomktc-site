"use client";

import React from "react";
import Link from "next/link";
import {
  Monitor,
  Folder,
  PlaySquare,
  BookOpen,
  Users,
  ChevronRight,
} from "lucide-react";
import { BIO_CONTENT, BioLinkItem } from "@/content/bio-content";

export function BioLinksList() {
  const { links } = BIO_CONTENT;

  const getIcon = (iconName: BioLinkItem["iconName"]) => {
    const props = { className: "w-5 h-5 text-[#D444BC]" };
    switch (iconName) {
      case "services":
        return <Monitor {...props} />;
      case "portfolio":
        return <Folder {...props} />;
      case "videos":
        return <PlaySquare {...props} />;
      case "articles":
        return <BookOpen {...props} />;
      case "testimonials":
        return <Users {...props} />;
      default:
        return <Monitor {...props} />;
    }
  };

  return (
    <div className="flex flex-col gap-2.5 sm:gap-3 my-4">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#181028]/80 hover:bg-[#22163B]/90 backdrop-blur-md border border-white/10 hover:border-[#D444BC]/45 shadow-md hover:shadow-purple-950/40 transition-all duration-200 group active:scale-[0.99]"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            {/* Icon Square */}
            <div className="w-11 h-11 rounded-xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-[#9400D3]/20 transition-all">
              {getIcon(link.iconName)}
            </div>

            {/* Labels */}
            <div className="text-left min-w-0">
              <h3 className="font-heading font-black text-[14px] sm:text-[15px] text-white group-hover:text-[#D444BC] transition-colors leading-tight">
                {link.title}
              </h3>
              <p className="text-[12px] sm:text-[12.5px] text-white/60 truncate mt-0.5">
                {link.subtitle}
              </p>
            </div>
          </div>

          <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white flex-shrink-0 transition-transform group-hover:translate-x-1 ml-2" />
        </Link>
      ))}
    </div>
  );
}
