"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { FileText, Link2, Bot, Settings } from "lucide-react";

export interface SeoPillarData {
  id: string;
  tag: string;
  title: string;
  description: string;
  iconName: "FileText" | "Link2" | "Bot" | "Settings";
}

interface SeoGeoDiagramProps {
  pillars: SeoPillarData[];
}

const ICON_MAP = {
  FileText: FileText,
  Link2: Link2,
  Bot: Bot,
  Settings: Settings,
};

export function SeoGeoDiagram({ pillars }: SeoGeoDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const cardTLRef = useRef<HTMLDivElement>(null);
  const cardTRRef = useRef<HTMLDivElement>(null);
  const cardBLRef = useRef<HTMLDivElement>(null);
  const cardBRRef = useRef<HTMLDivElement>(null);

  const [paths, setPaths] = useState<{
    p1: { d: string; start: { x: number; y: number }; dotNearPill: { x: number; y: number } };
    p2: { d: string; start: { x: number; y: number }; dotNearPill: { x: number; y: number } };
    p3: { d: string; start: { x: number; y: number }; dotNearPill: { x: number; y: number } };
    p4: { d: string; start: { x: number; y: number }; dotNearPill: { x: number; y: number } };
  } | null>(null);

  const onPage = pillars.find((p) => p.id === "seo-on-page") || pillars[0];
  const offPage = pillars.find((p) => p.id === "seo-off-page") || pillars[1];
  const geo = pillars.find((p) => p.id === "geo") || pillars[2];
  const tecnico = pillars.find((p) => p.id === "seo-tecnico") || pillars[3];

  const updateConnections = useCallback(() => {
    if (
      !containerRef.current ||
      !pillRef.current ||
      !cardTLRef.current ||
      !cardTRRef.current ||
      !cardBLRef.current ||
      !cardBRRef.current
    ) {
      return;
    }

    const cBox = containerRef.current.getBoundingClientRect();
    const pillBox = pillRef.current.getBoundingClientRect();
    const tlBox = cardTLRef.current.getBoundingClientRect();
    const trBox = cardTRRef.current.getBoundingClientRect();
    const blBox = cardBLRef.current.getBoundingClientRect();
    const brBox = cardBRRef.current.getBoundingClientRect();

    if (cBox.width === 0 || pillBox.width === 0) return;

    // Corner radius for the 90-degree filleted curves
    const R = 26;

    // 1. Top-Left Card (SEO ON-PAGE): Starts at bottom edge ~82% across
    const p1StartX = tlBox.left - cBox.left + tlBox.width * 0.82;
    const p1StartY = tlBox.bottom - cBox.top;
    const p1EndX = pillBox.left - cBox.left + 2;
    const p1EndY = pillBox.top - cBox.top + pillBox.height * 0.36;
    const p1DotX = p1EndX - 16;
    const p1DotY = p1EndY;
    const p1D = `M ${p1StartX} ${p1StartY} L ${p1StartX} ${p1EndY - R} A ${R} ${R} 0 0 0 ${p1StartX + R} ${p1EndY} L ${p1EndX} ${p1EndY}`;

    // 2. Top-Right Card (SEO OFF-PAGE): Starts at bottom edge ~18% across
    const p2StartX = trBox.left - cBox.left + trBox.width * 0.18;
    const p2StartY = trBox.bottom - cBox.top;
    const p2EndX = pillBox.right - cBox.left - 2;
    const p2EndY = pillBox.top - cBox.top + pillBox.height * 0.36;
    const p2DotX = p2EndX + 16;
    const p2DotY = p2EndY;
    const p2D = `M ${p2StartX} ${p2StartY} L ${p2StartX} ${p2EndY - R} A ${R} ${R} 0 0 1 ${p2StartX - R} ${p2EndY} L ${p2EndX} ${p2EndY}`;

    // 3. Bottom-Left Card (GEO): Starts at top edge ~82% across
    const p3StartX = blBox.left - cBox.left + blBox.width * 0.82;
    const p3StartY = blBox.top - cBox.top;
    const p3EndX = pillBox.left - cBox.left + 2;
    const p3EndY = pillBox.top - cBox.top + pillBox.height * 0.64;
    const p3DotX = p3EndX - 16;
    const p3DotY = p3EndY;
    const p3D = `M ${p3StartX} ${p3StartY} L ${p3StartX} ${p3EndY + R} A ${R} ${R} 0 0 1 ${p3StartX + R} ${p3EndY} L ${p3EndX} ${p3EndY}`;

    // 4. Bottom-Right Card (SEO TÉCNICO): Starts at top edge ~18% across
    const p4StartX = brBox.left - cBox.left + brBox.width * 0.18;
    const p4StartY = brBox.top - cBox.top;
    const p4EndX = pillBox.right - cBox.left - 2;
    const p4EndY = pillBox.top - cBox.top + pillBox.height * 0.64;
    const p4DotX = p4EndX + 16;
    const p4DotY = p4EndY;
    const p4D = `M ${p4StartX} ${p4StartY} L ${p4StartX} ${p4EndY + R} A ${R} ${R} 0 0 0 ${p4StartX - R} ${p4EndY} L ${p4EndX} ${p4EndY}`;

    setPaths({
      p1: { d: p1D, start: { x: p1StartX, y: p1StartY }, dotNearPill: { x: p1DotX, y: p1DotY } },
      p2: { d: p2D, start: { x: p2StartX, y: p2StartY }, dotNearPill: { x: p2DotX, y: p2DotY } },
      p3: { d: p3D, start: { x: p3StartX, y: p3StartY }, dotNearPill: { x: p3DotX, y: p3DotY } },
      p4: { d: p4D, start: { x: p4StartX, y: p4StartY }, dotNearPill: { x: p4DotX, y: p4DotY } },
    });
  }, []);

  useEffect(() => {
    updateConnections();

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateConnections, 50);
    };

    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(() => {
      updateConnections();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      clearTimeout(resizeTimer);
    };
  }, [updateConnections]);

  const renderCard = (
    pillar: SeoPillarData,
    ref?: React.Ref<HTMLDivElement>,
    extraClass: string = ""
  ) => {
    const IconComp = ICON_MAP[pillar.iconName] || FileText;

    return (
      <div
        ref={ref}
        className={`bg-white rounded-[24px] p-6 sm:p-7 border border-[#EDE4F5] shadow-[0_12px_36px_rgba(140,110,180,0.06)] hover:shadow-[0_16px_40px_rgba(164,13,219,0.12)] hover:border-[#D5A0F5] transition-all duration-300 flex flex-col justify-start relative z-10 group ${extraClass}`}
      >
        <div className="flex items-center gap-3.5 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#F5EAFA] border border-[#ECDDF7] text-[#A40DDB] flex items-center justify-center flex-shrink-0 group-hover:bg-[#A40DDB] group-hover:text-white transition-colors duration-200 shadow-2xs">
            <IconComp className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-black text-[15.5px] sm:text-[16.5px] text-[#0B0B0F] tracking-tight uppercase">
            {pillar.tag}
          </h3>
        </div>
        <p className="text-[13.5px] sm:text-[14px] text-[#555066] leading-[1.6] font-sans">
          {pillar.description}
        </p>
      </div>
    );
  };

  return (
    <div className="relative w-full">
      {/* Soft circular/elliptical lavender ambient shape behind the diagram */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[600px] lg:w-[680px] h-[520px] sm:h-[600px] lg:h-[680px] rounded-full bg-[radial-gradient(circle_at_center,rgba(240,224,252,0.85)_0%,rgba(245,236,255,0.45)_50%,transparent_72%)] -z-0"
      />

      {/* DESKTOP & TABLET VIEW (>= 768px): 2x2 Grid with Centered SEO & GEO Capsule and SVG Connector Lines */}
      <div
        ref={containerRef}
        className="hidden md:block relative w-full max-w-[760px] mx-auto py-6"
      >
        {/* SVG Connector Lines */}
        {paths && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-500"
            style={{ overflow: "visible" }}
            aria-hidden="true"
          >
            {/* Top-Left filleted curve */}
            <path
              d={paths.p1.d}
              fill="none"
              stroke="#D5A0F5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx={paths.p1.start.x} cy={paths.p1.start.y} r="3" fill="#A40DDB" />
            <circle cx={paths.p1.dotNearPill.x} cy={paths.p1.dotNearPill.y} r="3" fill="#A40DDB" />

            {/* Top-Right filleted curve */}
            <path
              d={paths.p2.d}
              fill="none"
              stroke="#D5A0F5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx={paths.p2.start.x} cy={paths.p2.start.y} r="3" fill="#A40DDB" />
            <circle cx={paths.p2.dotNearPill.x} cy={paths.p2.dotNearPill.y} r="3" fill="#A40DDB" />

            {/* Bottom-Left filleted curve */}
            <path
              d={paths.p3.d}
              fill="none"
              stroke="#D5A0F5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx={paths.p3.start.x} cy={paths.p3.start.y} r="3" fill="#A40DDB" />
            <circle cx={paths.p3.dotNearPill.x} cy={paths.p3.dotNearPill.y} r="3" fill="#A40DDB" />

            {/* Bottom-Right filleted curve */}
            <path
              d={paths.p4.d}
              fill="none"
              stroke="#D5A0F5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx={paths.p4.start.x} cy={paths.p4.start.y} r="3" fill="#A40DDB" />
            <circle cx={paths.p4.dotNearPill.x} cy={paths.p4.dotNearPill.y} r="3" fill="#A40DDB" />
          </svg>
        )}

        {/* 2x2 Grid Layout for the 4 Cards with generous gaps */}
        <div className="grid grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-28 lg:gap-y-32 relative z-10">
          {/* Card 1: SEO ON-PAGE (Top Left) */}
          {renderCard(onPage, cardTLRef)}

          {/* Card 2: SEO OFF-PAGE (Top Right) */}
          {renderCard(offPage, cardTRRef)}

          {/* Card 3: GEO (Bottom Left) */}
          {renderCard(geo, cardBLRef)}

          {/* Card 4: SEO TÉCNICO (Bottom Right) */}
          {renderCard(tecnico, cardBRRef)}
        </div>

        {/* Central "SEO & GEO" Pill (Perfect Centering) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
          <div
            ref={pillRef}
            className="relative inline-flex items-center justify-center px-10 py-3.5 sm:px-12 sm:py-4 rounded-full bg-gradient-to-r from-[#7B129E] via-[#A40DDB] to-[#C72DE8] text-white font-heading font-black text-[18px] sm:text-[20px] tracking-wide shadow-[0_12px_32px_rgba(164,13,219,0.40)] border-2 border-white select-none whitespace-nowrap transition-transform duration-300 hover:scale-[1.04]"
          >
            <span className="relative z-10 drop-shadow-xs">SEO &amp; GEO</span>
            {/* Subtle controlled glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-1.5 rounded-full bg-[#A40DDB]/35 blur-md -z-10 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* MOBILE VIEW (< 768px): Central Capsule First, then Single Column of 4 Cards */}
      <div className="md:hidden flex flex-col items-center w-full relative z-10 space-y-4">
        {/* Central Capsule */}
        <div className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7B129E] via-[#A40DDB] to-[#C72DE8] text-white font-heading font-black text-[17px] tracking-wide shadow-[0_8px_24px_rgba(164,13,219,0.38)] border-2 border-white my-3">
          <span>SEO &amp; GEO</span>
        </div>

        {/* 4 Cards stacked cleanly in single column */}
        <div className="w-full flex flex-col gap-3.5">
          {renderCard(onPage)}
          {renderCard(offPage)}
          {renderCard(geo)}
          {renderCard(tecnico)}
        </div>
      </div>
    </div>
  );
}
