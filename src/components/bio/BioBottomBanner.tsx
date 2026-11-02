"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BIO_CONTENT } from "@/content/bio-content";

export function BioBottomBanner() {
  const { banner } = BIO_CONTENT;

  return (
    <div className="my-6 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#1B1030] via-[#2A1448] to-[#1B1030] border border-purple-500/30 relative overflow-hidden backdrop-blur-md shadow-2xl">
      {/* Subtle interior glow */}
      <div
        className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#D444BC]/15 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 sm:gap-5 relative z-10 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
          {/* Eloisa Authentic Photo */}
          <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border border-purple-400/40 shadow-lg flex-shrink-0 mx-auto sm:mx-0">
            <Image
              src="/images/eloisa-cunha.jpg"
              alt="Eloisa Cunha"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 80px, 88px"
            />
          </div>

          {/* Text Content */}
          <div className="min-w-0">
            <h3 className="font-heading font-black text-[18px] sm:text-[20px] text-white leading-tight mb-1.5 tracking-tight">
              Estratégia que{" "}
              <br className="sm:hidden" />
              <span className="text-[#D444BC]">conecta pessoas.</span>
            </h3>
            <p className="text-[12px] sm:text-[12.5px] leading-relaxed text-white/70 max-w-xs sm:max-w-sm mx-auto sm:mx-0 font-normal">
              {banner.description}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={banner.ctaHref}
          className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 active:scale-[0.98] text-gray-950 text-xs sm:text-[12.5px] font-black tracking-wider uppercase px-5 py-3 rounded-full shadow-lg transition-all group flex-shrink-0 sm:ml-2 mx-auto sm:mx-0"
        >
          <span>{banner.ctaLabel}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
