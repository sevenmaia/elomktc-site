"use strict";
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  BarChart2,
  PenTool,
  Users,
  Target,
  Megaphone,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOME_CONTENT } from "@/content/home-content";
import { ScrollReveal } from "@/components/ScrollReveal";

const ICON_MAP = {
  BarChart2: BarChart2,
  PenTool: PenTool,
  Users: Users,
  Target: Target,
  Megaphone: Megaphone,
  Calendar: Calendar,
};

export function ServicesSection() {
  const { services } = HOME_CONTENT;
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Exclusively on mobile (up to 767px)
    mm.add("(max-width: 767px)", () => {
      // Respect prefers-reduced-motion: if enabled, allow natural overflow scroll without pinning
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      // Calculate horizontal distance: slide until the 6th card is fully visible
      const getScrollAmount = () => {
        return -(track.scrollWidth - window.innerWidth + 32);
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top+=65", // pinned just below the fixed header (60px)
          end: () => `+=${Math.max(track.scrollWidth - window.innerWidth + 60, 1100)}`,
          pin: true,
          scrub: 0.8, // silky smooth scrub
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      return () => {
        tween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Serviços"
      className="bg-[#0B0B0F] text-white py-14 sm:py-28 relative border-t border-[#1C1B24] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header Row */}
        <ScrollReveal animation="fade-up" duration={650}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-end mb-8 sm:mb-18">
            <div className="lg:col-span-7">
              <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.18em] uppercase text-[#A40DDB] mb-3 sm:mb-4">
                {services.eyebrow}
              </p>
              <h2 className="font-heading font-extrabold text-[32px] sm:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.03em] text-white">
                {services.titleLine1}
                <br />
                {services.titleLine2}
                <span className="text-[#A40DDB]">.</span>
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pb-2">
              <p className="font-sans text-[14px] sm:text-[17px] leading-relaxed text-[#9E9CA8] max-w-[460px]">
                {services.lead}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 1. MOBILE ONLY (até 767px): Pinned Horizontal Scroll on Vertical Scroll */}
        <div className="md:hidden w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-stretch gap-4 will-change-transform"
            style={{ width: "max-content" }}
          >
            {services.items.map((service, idx) => {
              const Icon = ICON_MAP[service.iconName];
              return (
                <div
                  key={`mobile-svc-${service.title}-${idx}`}
                  className="w-[calc(100vw-72px)] max-w-[330px] flex-shrink-0"
                >
                  <Link
                    href={service.href}
                    className="group bg-[#16161B] hover:bg-[#1C1C22] border border-[#27252F] hover:border-[#A40DDB]/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 h-full min-h-[250px] shadow-sm"
                  >
                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-lg bg-[#A40DDB]/15 border border-[#A40DDB]/25 flex items-center justify-center text-[#C677E0] group-hover:text-white group-hover:bg-[#A40DDB] transition-all mb-5">
                        {Icon && <Icon className="w-5 h-5" />}
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-bold text-[20px] text-white tracking-tight mb-2 group-hover:text-[#EBD2FA] transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[13.5px] leading-relaxed text-[#8E8A99] font-normal">
                        {service.description}
                      </p>
                    </div>

                    {/* Action Link: permanently visible as requested */}
                    <div className="pt-5 flex items-center text-white/90 group-hover:text-white text-[13px] font-semibold transition-colors">
                      <span className="mr-2">Saiba mais</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C677E0] group-hover:text-white" />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. DESKTOP ONLY (>= 768px): Original 6-Card Grid (100% untouched) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.items.map((service, idx) => {
            const Icon = ICON_MAP[service.iconName];
            return (
              <ScrollReveal
                key={service.title}
                animation="fade-up"
                delay={idx * 60}
                duration={550}
              >
                <Link
                  href={service.href}
                  className="group bg-[#16161B] hover:bg-[#1C1C22] border border-[#27252F] hover:border-[#A40DDB]/50 rounded-xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl h-full"
                >
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-[#A40DDB]/15 border border-[#A40DDB]/25 flex items-center justify-center text-[#C677E0] group-hover:text-white group-hover:bg-[#A40DDB] transition-all mb-6">
                      {Icon && <Icon className="w-5 h-5" />}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-[20px] sm:text-[22px] text-white tracking-tight mb-2.5 group-hover:text-[#EBD2FA] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] leading-relaxed text-[#8E8A99] font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Action Link: permanently visible as requested */}
                  <div className="pt-6 flex items-center text-white/90 group-hover:text-white text-[13px] sm:text-[14px] font-semibold transition-colors">
                    <span className="mr-2">Saiba mais</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C677E0] group-hover:text-white" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
