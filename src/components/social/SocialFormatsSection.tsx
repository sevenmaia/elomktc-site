"use client";

import React, { useEffect, useRef } from "react";
import { Image as ImageIcon, Play, Radio, Layers } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SOCIAL_CONTENT, SocialFormatItem } from "@/content/social-content";
import { ScrollReveal } from "@/components/ScrollReveal";

const FORMAT_ICONS = {
  image: ImageIcon,
  video: Play,
  stories: Radio,
  carousel: Layers,
};

const FORMAT_THEMES = {
  lavender: {
    tabColor: "#EBD2FA",
    bodyBg: "bg-[#EBD2FA] border border-[#DEBEF2]",
    iconBg: "bg-white text-[#A40DDB]",
    titleColor: "text-[#1F1D2B]",
    descColor: "text-[#4A4458]",
  },
  magenta: {
    tabColor: "#A40DDB",
    bodyBg: "bg-[#A40DDB] border border-[#910BC2]",
    iconBg: "bg-white/20 text-white",
    titleColor: "text-white",
    descColor: "text-white/90",
  },
  white: {
    tabColor: "#FAF7FC",
    bodyBg: "bg-[#FAF7FC] border border-[#EFE5F5]",
    iconBg: "bg-[#F0DCFA] text-[#A40DDB]",
    titleColor: "text-[#1F1D2B]",
    descColor: "text-[#555160]",
  },
  "deep-magenta": {
    tabColor: "#7D2AE8",
    bodyBg: "bg-[#7D2AE8] border border-[#6F21D4]",
    iconBg: "bg-white/20 text-white",
    titleColor: "text-white",
    descColor: "text-white/90",
  },
};

export function SocialFormatsSection() {
  const { formats } = SOCIAL_CONTENT;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add(
        {
          mobile: "(max-width: 639px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (matchContext) => {
          const { mobile, reduceMotion } = matchContext.conditions as {
            mobile: boolean;
            reduceMotion: boolean;
          };

          if (!mobile || reduceMotion) return;

          const cards = Array.from(
            section.querySelectorAll<HTMLElement>("[data-format-stack-card]")
          );

          cards.slice(0, -1).forEach((card, index) => {
            const nextCard = cards[index + 1];

            gsap.to(card, {
              autoAlpha: 0.72,
              scale: 0.96,
              y: -8,
              transformOrigin: "center top",
              ease: "none",
              scrollTrigger: {
                trigger: nextCard,
                start: "top 72%",
                end: "top 30%",
                scrub: 0.3,
              },
            });
          });
        }
      );

      return () => media.revert();
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Formatos de conteúdo para redes sociais"
      className="relative overflow-visible bg-[#FFFFFF] py-20 sm:overflow-hidden sm:py-28"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-12 max-w-xl sm:mb-16">
          <ScrollReveal animation="fade-down" duration={550}>
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#A40DDB] mb-3">
              {formats.eyebrow}
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={80} duration={650}>
            <h2 className="font-heading font-black text-[34px] sm:text-[46px] lg:text-[50px] leading-[1.06] tracking-tight text-[#0B0B0F]">
              Formatos que se conectam com seu{" "}
              <span className="text-[#0B0B0F]">
                público<span className="text-[#A40DDB]">.</span>
              </span>
            </h2>
          </ScrollReveal>
        </div>

        {/* 4 Formatos em Folder Cards */}
        <div className="grid grid-cols-1 gap-5 overflow-visible sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {formats.items.map((item: SocialFormatItem, idx: number) => {
            const IconComp = FORMAT_ICONS[item.iconName] || Layers;
            const theme = FORMAT_THEMES[item.tone] || FORMAT_THEMES.lavender;

            return (
              <div
                key={item.id}
                data-format-stack-card
                className="sticky h-[292px] will-change-transform sm:static sm:h-auto"
                style={{ top: `${86 + idx * 18}px`, zIndex: idx + 1 }}
              >
                <div className="group flex flex-col w-full h-full transition-all duration-300 hover:-translate-y-1.5 rounded-b-xl shadow-xs hover:shadow-md">
                  {/* SVG Folder Tab Header */}
                  <div className="w-full relative h-[32px] overflow-hidden -mb-[1px]">
                    <svg
                      viewBox="0 0 300 32"
                      preserveAspectRatio="none"
                      className="w-full h-full block"
                      style={{ color: theme.tabColor }}
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M 0 32 L 0 14 Q 0 0 14 0 L 115 0 Q 128 0 138 12 Q 146 22 160 22 L 286 22 Q 300 22 300 32 Z" />
                    </svg>
                  </div>

                  {/* Folder Body with reduced curvature (rounded-b-xl) */}
                  <div
                    className={`flex-1 ${theme.bodyBg} rounded-b-xl p-6 sm:p-7 flex flex-col justify-between min-h-[240px] sm:min-h-[260px] transition-all`}
                  >
                    <div>
                      {/* Icon */}
                      <div
                        className={`w-10 h-10 rounded-lg ${theme.iconBg} flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>

                      {/* Title */}
                      <h3
                        className={`font-heading font-black text-[21px] sm:text-[23px] tracking-tight leading-snug mb-2.5 ${theme.titleColor}`}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-[13.5px] leading-relaxed font-sans ${theme.descColor}`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
