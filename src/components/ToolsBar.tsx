"use strict";

import React from "react";
import Image from "next/image";
import { HOME_CONTENT } from "@/content/home-content";
import { ScrollReveal } from "@/components/ScrollReveal";

interface ToolItem {
  name: string;
  icon: string;
  width: number;
  height: number;
  className: string;
  bold?: boolean;
  uppercase?: boolean;
  logoOnly?: boolean;
}

const TOOL_ITEMS: ToolItem[] = [
  {
    name: "Notion",
    icon: "/icons/notion.svg",
    width: 20,
    height: 20,
    className: "w-5 h-5 object-contain",
  },
  {
    name: "Canva",
    icon: "/icons/canva.svg",
    width: 22,
    height: 22,
    className: "w-5 h-5 object-contain",
    bold: true,
  },
  {
    name: "ChatGPT",
    icon: "/icons/chatgpt.svg",
    width: 20,
    height: 20,
    className: "w-5 h-5 object-contain",
  },
  {
    name: "Meta",
    icon: "/icons/meta.svg",
    width: 22,
    height: 22,
    className: "w-5 h-5 object-contain",
  },
  {
    name: "SEMRUSH",
    icon: "/icons/semrush.svg",
    width: 22,
    height: 22,
    className: "w-5 h-5 object-contain",
    uppercase: true,
  },
  {
    name: "Bitrix24",
    icon: "/icons/bitrix24.png",
    width: 96,
    height: 22,
    className: "h-5 w-auto object-contain brightness-0 invert",
    logoOnly: true,
  },
  {
    name: "CapCut",
    icon: "/icons/capcut.svg",
    width: 22,
    height: 22,
    className: "w-5 h-5 object-contain brightness-0 invert",
  },
];

function ToolBadge({ item }: { item: ToolItem }) {
  if (item.logoOnly) {
    return (
      <div className="flex items-center flex-shrink-0 hover:opacity-90 transition-opacity">
        <Image
          src={item.icon}
          alt={item.name}
          width={item.width}
          height={item.height}
          className={item.className}
        />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 flex-shrink-0 hover:opacity-90 transition-opacity">
      <Image
        src={item.icon}
        alt={item.name}
        width={item.width}
        height={item.height}
        className={item.className}
      />
      <span
        className={`text-[15px] tracking-tight ${
          item.bold
            ? "font-bold"
            : item.uppercase
            ? "font-extrabold uppercase tracking-wider"
            : "font-semibold"
        }`}
      >
        {item.name}
      </span>
    </div>
  );
}

export function ToolsBar() {
  const { tools } = HOME_CONTENT;

  return (
    <section
      aria-label="Ferramentas que utilizo"
      className="bg-[#0B0B0F] text-white py-5 sm:py-6 border-y border-[#1E1D24] relative z-10 overflow-hidden"
    >
      <ScrollReveal animation="fade" duration={600}>
        {/* Desktop View (Standard static row) */}
        <div className="hidden md:flex max-w-[1240px] mx-auto px-5 sm:px-8 items-center justify-between gap-8">
          <div className="flex-shrink-0">
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#9C97A8] leading-tight">
              {tools.eyebrowTop}
              <br />
              {tools.eyebrowBottom}
            </p>
          </div>

          <div className="flex items-center gap-x-8 lg:gap-x-12 text-white">
            {TOOL_ITEMS.map((item) => (
              <ToolBadge key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* Mobile View: Fixed phrase on left + Infinite auto-looping marquee */}
        <div className="md:hidden flex items-center relative overflow-hidden w-full">
          {/* Fixed phrase on the left */}
          <div className="flex-shrink-0 z-10 bg-[#0B0B0F] pl-4 pr-3.5 py-1 border-r border-[#26242F] shadow-[8px_0_16px_rgba(11,11,15,0.95)]">
            <p className="text-[10px] font-extrabold tracking-[0.14em] uppercase text-[#9C97A8] leading-tight whitespace-nowrap">
              FERRAMENTAS
              <br />
              QUE UTILIZO
            </p>
          </div>

          {/* Continuous looping marquee */}
          <div className="overflow-hidden relative flex-1">
            <div className="animate-marquee flex items-center gap-8 pl-4">
              {TOOL_ITEMS.map((item, idx) => (
                <ToolBadge key={`mob-1-${item.name}-${idx}`} item={item} />
              ))}
              {TOOL_ITEMS.map((item, idx) => (
                <ToolBadge key={`mob-2-${item.name}-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
