"use client";

import React from "react";
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

  return (
    <section
      id="servicos"
      aria-label="Serviços"
      className="bg-[#0B0B0F] text-white py-14 sm:py-24 relative border-t border-[#1C1B24] overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header Row */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-end mb-8 sm:mb-16">
            <div className="lg:col-span-7">
              <span className="text-[12px] font-bold text-[#A40DDB] tracking-[0.2em] uppercase mb-3 inline-block">
                {services.eyebrow}
              </span>
              <h2 className="font-heading font-black text-[30px] sm:text-[42px] lg:text-[46px] leading-[1.1] tracking-tight">
                {services.titleLine1}
                <br />
                {services.titleLine2}
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pb-2">
              <p className="font-sans text-[14px] sm:text-[16px] leading-relaxed text-[#9E9CA8] max-w-[460px]">
                {services.lead}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 1. MOBILE ONLY (até 767px): Fluid Touch Carousel (Smooth Native 60 FPS, No Scroll-Jacking) */}
        <div className="md:hidden w-full -mx-5 px-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex gap-4">
          {services.items.map((service, idx) => {
            const Icon = ICON_MAP[service.iconName];
            return (
              <div
                key={`mobile-svc-${service.title}-${idx}`}
                className="w-[280px] sm:w-[320px] flex-shrink-0 snap-start flex flex-col"
              >
                <Link
                  href={service.href}
                  className="group bg-[#16161B] hover:bg-[#1C1C22] border border-[#27252F] hover:border-[#A40DDB]/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 h-full min-h-[260px] shadow-sm"
                >
                  <div>
                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl bg-[#A40DDB]/15 border border-[#A40DDB]/25 flex items-center justify-center text-[#C677E0] group-hover:text-white group-hover:bg-[#A40DDB] transition-all mb-4">
                      {Icon && <Icon className="w-5 h-5" />}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-[18px] text-white tracking-tight mb-2 group-hover:text-[#EBD2FA] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] leading-relaxed text-[#8E8A99] font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 flex items-center text-white/90 group-hover:text-white text-[13px] font-semibold transition-colors">
                    <span className="mr-2">Saiba mais</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C677E0] group-hover:text-white" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* 2. DESKTOP ONLY (>= 768px): 6-Card Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.items.map((service, idx) => {
            const Icon = ICON_MAP[service.iconName];
            return (
              <ScrollReveal
                key={service.title}
                animation="fade-up"
                delay={idx * 50}
                duration={500}
              >
                <Link
                  href={service.href}
                  className="group bg-[#16161B] hover:bg-[#1C1C22] border border-[#27252F] hover:border-[#A40DDB]/50 rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl h-full"
                >
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#A40DDB]/15 border border-[#A40DDB]/25 flex items-center justify-center text-[#C677E0] group-hover:text-white group-hover:bg-[#A40DDB] transition-all mb-6">
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

                  {/* Action Link */}
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
