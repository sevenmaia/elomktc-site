"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowRightLeft, Calendar, PenTool, Palette, BarChart3 } from "lucide-react";
import { SOCIAL_CONTENT, SocialProcessStep } from "@/content/social-content";
import { ScrollReveal } from "@/components/ScrollReveal";

const STEP_ICONS = {
  strategy: ArrowRightLeft,
  planning: Calendar,
  copywriting: PenTool,
  production: Palette,
  analytics: BarChart3,
};

export function SocialProcessSection() {
  const { process } = SOCIAL_CONTENT;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add("(max-width: 639px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-process-stack-card]");
        cards.forEach((card, index) => {
          const content = card.querySelector<HTMLElement>("[data-process-card-motion]");
          if (!content) return;
          gsap.fromTo(content,
            { xPercent: index % 2 === 0 ? -105 : 105, opacity: 0 },
            {
              xPercent: 0, opacity: 1, ease: "none",
              scrollTrigger: { trigger: card, start: "top 95%", end: "top 38%", scrub: true },
            }
          );
        });
      });
      return () => media.revert();
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Metodologia e processo de social media"
      className="py-20 sm:py-28 bg-[#0A0910] text-white relative overflow-x-clip overflow-y-visible sm:overflow-hidden"
    >
      {/* Background ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#A40DDB]/10 blur-[130px] rounded-full pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <ScrollReveal animation="fade-down" duration={550}>
              <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#C677E0] mb-3">
                {process.eyebrow}
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={80} duration={650}>
              <h2 className="font-heading font-black text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.06] tracking-tight text-white">
                Do planejamento à{" "}
                <span className="text-white">
                  performance<span className="text-[#A40DDB]">.</span>
                </span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4 max-w-md">
            <ScrollReveal animation="fade-left" delay={150} duration={650}>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#A0A0B0] font-sans leading-relaxed text-left lg:text-right">
                {process.subtitle}
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-left" delay={220} duration={650}>
              <Link
                href={process.cta.href}
                className="inline-flex items-center gap-2 h-10 px-5 rounded-lg border border-white/25 text-[13px] font-semibold text-white hover:border-[#A40DDB] hover:text-[#C677E0] hover:bg-white/5 transition-all duration-200"
              >
                <span>{process.cta.label}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* 5 Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {process.steps.map((stepItem: SocialProcessStep, idx: number) => {
            const IconComp = STEP_ICONS[stepItem.iconName] || ArrowRightLeft;

            return (
              <div
                key={stepItem.step}
                data-process-stack-card
                className="sticky h-full motion-reduce:static sm:static"
                style={{ top: `${88 + idx * 14}px`, zIndex: idx + 1 }}
              >
              <div data-process-card-motion className="h-full">
              <ScrollReveal animation="fade-up" delay={idx * 70} duration={600} className="h-full">
                <div className="h-full bg-[#13121A] p-5 sm:p-6 rounded-xl border border-white/10 hover:border-[#A40DDB] hover:bg-[#181622] transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#C677E0] flex items-center justify-center mb-6 group-hover:bg-[#A40DDB] group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>

                    {/* Step Title */}
                    <h3 className="font-heading font-bold text-[16px] sm:text-[17px] text-white tracking-tight mb-2">
                      {stepItem.step}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] text-[#9090A0] leading-relaxed font-sans">
                      {stepItem.description}
                    </p>
                  </div>

                  {/* Circular action button */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-end">
                    <div className="w-7 h-7 rounded-md border border-white/20 text-[#A0A0B0] flex items-center justify-center group-hover:border-[#A40DDB] group-hover:text-white group-hover:translate-x-0.5 transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
