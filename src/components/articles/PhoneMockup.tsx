"use client";

import React from "react";

interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function PhoneMockup({
  children,
  className = "",
  glow = true,
}: PhoneMockupProps) {
  return (
    <div
      className={`relative w-[180px] min-[400px]:w-[210px] sm:w-[240px] aspect-[9/19] select-none ${className}`}
      data-testid="phone-mockup"
    >
      {/* Ambient Phone Glow */}
      {glow && (
        <div
          className="absolute inset-0 bg-[#A40DDB]/20 rounded-[38px] blur-xl -z-10 pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Outer Titanium Phone Shell */}
      <div className="relative w-full h-full bg-[#181622] rounded-[38px] sm:rounded-[42px] p-[6px] sm:p-[7px] border border-[#3E384D] shadow-[0_20px_50px_rgba(15,10,25,0.45),0_4px_12px_rgba(0,0,0,0.3)]">
        {/* Subtle Chamfer Highlight Line */}
        <div
          className="absolute inset-[1px] rounded-[36px] sm:rounded-[40px] pointer-events-none border border-white/10"
          aria-hidden="true"
        />

        {/* Dynamic Island / Speaker Pill */}
        <div
          className="absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-3 bg-black rounded-full z-30 flex items-center justify-between px-2 pointer-events-none shadow-xs border border-white/5"
          aria-hidden="true"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#1F1F2B]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#0A2240]" />
        </div>

        {/* Inner Screen Area */}
        <div className="relative w-full h-full rounded-[31px] sm:rounded-[35px] overflow-hidden bg-white z-10">
          {children}
        </div>
      </div>
    </div>
  );
}