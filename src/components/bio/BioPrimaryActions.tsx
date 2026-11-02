"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { BIO_CONTENT } from "@/content/bio-content";

export function BioPrimaryActions() {
  const { primaryActions } = BIO_CONTENT;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 my-5 sm:my-6">
      {/* 1. WhatsApp Button (Gradient Purple to Magenta Pill) */}
      <a
        href={primaryActions.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-between px-4 sm:px-4.5 py-3.5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#9400D3] via-[#AF00DB] to-[#D444BC] hover:opacity-95 active:scale-[0.98] text-white shadow-lg shadow-purple-900/30 transition-all group"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-4 h-4 fill-white" />
          </div>
          <span className="font-heading font-black text-[13px] sm:text-[13px] tracking-tight whitespace-nowrap">
            {primaryActions.whatsapp.label}
          </span>
        </div>
        <ArrowRight className="w-4 h-4 text-white/90 transition-transform group-hover:translate-x-1 flex-shrink-0 ml-1.5" />
      </a>

      {/* 2. Schedule Conversation Button (Dark Translucent with Purple Border Pill) */}
      <Link
        href={primaryActions.schedule.href}
        className="w-full flex items-center justify-between px-4 sm:px-4.5 py-3.5 sm:py-3.5 rounded-full bg-[#130E22]/90 hover:bg-[#1A1230] active:scale-[0.98] text-white border border-[#9400D3]/50 hover:border-[#D444BC] shadow-lg backdrop-blur-md transition-all group"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-[#D444BC]">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="font-heading font-black text-[13px] sm:text-[13px] tracking-tight whitespace-nowrap">
            {primaryActions.schedule.label}
          </span>
        </div>
        <ArrowRight className="w-4 h-4 text-white/70 transition-transform group-hover:translate-x-1 group-hover:text-white flex-shrink-0 ml-1.5" />
      </Link>
    </div>
  );
}
