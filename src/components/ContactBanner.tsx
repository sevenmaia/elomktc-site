"use strict";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_CONTENT } from "@/content/home-content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ContactBanner() {
  const { ctaBanner } = HOME_CONTENT;

  return (
    <section
      aria-label="Chamada para contato"
      className="bg-gradient-to-r from-[#F0DCFA] via-[#E4BDF8] to-[#DCABF5] text-[#0B0B0F] py-10 sm:py-20 lg:py-24 relative overflow-visible lg:overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-16">
          {/* Left / Top: Eyebrow + Heading */}
          <div className="w-full lg:max-w-[580px]">
            <ScrollReveal animation="fade-right" duration={650}>
              <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#4F2169] mb-3">
                {ctaBanner.eyebrow}
              </p>
              <h2 className="font-heading font-extrabold text-[32px] min-[375px]:text-[36px] sm:text-[44px] lg:text-[54px] leading-[1.08] lg:leading-[1.05] tracking-[-0.03em] text-[#0B0B0F] mb-5 lg:mb-0">
                <span>{ctaBanner.titleLine1}</span>{" "}
                <br className="hidden lg:inline" />
                <span>{ctaBanner.titleLine2}</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Right / Bottom: Description & CTA Button */}
          <div className="w-full lg:max-w-[480px] flex flex-col items-start lg:items-end">
            <ScrollReveal
              animation="fade-left"
              delay={100}
              duration={650}
              className="w-full flex flex-col items-start lg:items-end"
            >
              <p className="font-sans text-[16px] sm:text-[17px] leading-[1.5] text-[#2C2735] text-left mb-7 lg:mb-6">
                {ctaBanner.description}
              </p>

              <Link
                href={ctaBanner.button.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0B0B0F] hover:bg-[#201F29] active:scale-[0.98] text-white text-[13px] sm:text-[14px] font-bold tracking-[0.08em] uppercase px-8 sm:px-10 min-h-[56px] rounded-lg transition-all duration-200 shadow-md group"
              >
                <span>{ctaBanner.button.label}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
