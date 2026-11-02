"use client";

import React from "react";
import Image from "next/image";

export interface LaptopMockupProps {
  id?: string;
  projectTitle: string;
  image?: string;
  altText?: string;
  children?: React.ReactNode;
  screenTitle?: string;
  screenSubtitle?: string;
  objectPosition?: string;
  className?: string;
  priority?: boolean;
}

export function LaptopMockup({
  projectTitle,
  image,
  altText,
  children,
  screenTitle,
  screenSubtitle,
  objectPosition = "object-center",
  className = "",
  priority = false,
}: LaptopMockupProps) {
  return (
    <div
      className={`relative w-full aspect-[800/489] select-none ${className}`}
      data-testid="laptop-mockup"
    >
      {/* Screen Content Layer (Fitted exactly within the transparent display cutout) */}
      <div
        className="absolute overflow-hidden bg-[#0A0910] z-0 rounded-t-[3px] sm:rounded-t-[4px]"
        style={{
          left: "9.625%",
          top: "4.294%",
          width: "80.75%",
          height: "85.072%",
        }}
      >
        {children ? (
          <div className="w-full h-full relative overflow-hidden">{children}</div>
        ) : image ? (
          <div className="relative w-full h-full overflow-hidden group">
            <Image
              src={image}
              alt={altText || `Captura real do projeto ${projectTitle}`}
              fill
              className={`object-cover ${objectPosition} transition-transform duration-700 group-hover:scale-105`}
              sizes="(max-width: 768px) 100vw, 700px"
              priority={priority}
            />
            {/* Subtle contrast gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10 pointer-events-none" />

            {/* In-screen simulated project headline & subtitle matching reference */}
            {(screenTitle || screenSubtitle) && (
              <div className="absolute inset-0 p-[7%] sm:p-[8%] flex flex-col justify-center text-white pointer-events-none bg-gradient-to-r from-black/75 via-black/40 to-transparent">
                {screenTitle && (
                  <p className="font-heading font-black text-[9px] sm:text-[11px] lg:text-[12.5px] leading-tight text-white drop-shadow-md mb-0.5">
                    {screenTitle}
                  </p>
                )}
                {screenSubtitle && (
                  <p className="text-[6.5px] sm:text-[7.5px] lg:text-[9px] text-white/90 leading-tight drop-shadow-sm font-sans max-w-[75%]">
                    {screenSubtitle}
                  </p>
                )}
              </div>
            )}
          </div>
        ) : null}
      </div>

      {/* Professional Realistic Laptop Frame Asset (Real Apple hardware render with transparent screen & background) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <Image
          src="/images/mockups/macbook-pro-transparent.png"
          alt="Moldura profissional de notebook"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 800px"
          priority={priority}
        />
      </div>
    </div>
  );
}
