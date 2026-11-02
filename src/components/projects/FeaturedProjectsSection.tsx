"use strict";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_CONTENT } from "@/content/home-content";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  ProjectFolderCard,
  ProjectFolderCardProps,
} from "./ProjectFolderCard";

// Staggered top offsets for the 4 sticky cards on mobile (under fixed navbar)
const MOBILE_STICKY_TOPS = [75, 95, 115, 135];
const MOBILE_Z_INDEXES = [10, 20, 30, 40];

export interface FeaturedProjectsSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  viewAllCta?: {
    label: string;
    href: string;
  };
  folders?: ProjectFolderCardProps[];
  theme?: "light" | "dark";
  enableMobileSticky?: boolean;
  sectionId?: string;
}

export function FeaturedProjectsSection({
  eyebrow,
  title,
  description,
  viewAllCta,
  folders,
  theme = "light",
  enableMobileSticky = false,
  sectionId = "projetos",
}: FeaturedProjectsSectionProps) {
  const defaultProjects = HOME_CONTENT.projects;

  const currentEyebrow = eyebrow ?? defaultProjects.eyebrow;
  const currentTitle = title ?? defaultProjects.title;
  const currentDescription = description ?? defaultProjects.description;
  const currentViewAllCta = viewAllCta ?? defaultProjects.viewAllCta;
  const currentFolders = folders ?? defaultProjects.folders;

  const isDark = theme === "dark";

  return (
    <section
      id={sectionId}
      aria-label={currentTitle}
      className={`py-16 sm:py-24 lg:py-28 relative ${
        isDark ? "bg-[#0B0B0F] text-white" : "bg-[#FFFFFF] text-[#0B0B0F]"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={650}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-16">
            <div>
              <p
                className={`text-[11px] sm:text-[12px] font-bold tracking-[0.18em] uppercase mb-3 ${
                  isDark ? "text-[#C677E0]" : "text-[#646475]"
                }`}
              >
                {currentEyebrow}
              </p>
              <h2
                className={`font-heading font-extrabold text-[38px] sm:text-[50px] lg:text-[58px] leading-[1.05] tracking-[-0.03em] ${
                  isDark ? "text-white" : "text-[#0B0B0F]"
                }`}
              >
                {currentTitle}
                <span className="text-[#A40DDB]">.</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 lg:gap-8">
              {currentDescription && (
                <p
                  className={`font-sans text-[14px] sm:text-[15px] leading-relaxed max-w-[380px] ${
                    isDark ? "text-[#A09CAE]" : "text-[#555160]"
                  }`}
                >
                  {currentDescription}
                </p>
              )}

              {currentViewAllCta && (
                <Link
                  href={currentViewAllCta.href}
                  className={`inline-flex items-center justify-center gap-2 border text-[13px] sm:text-[14px] font-bold px-6 py-3 rounded-lg transition-all duration-200 group flex-shrink-0 ${
                    isDark
                      ? "border-white/30 text-[#EBD2FA] hover:text-white hover:border-white hover:bg-white/10"
                      : "border-[#0B0B0F] hover:bg-[#0B0B0F] hover:text-white text-[#0B0B0F]"
                  }`}
                >
                  <span>{currentViewAllCta.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* 1. MOBILE ONLY (quando ativado, ex: Home com Sticky Stacking Cards) */}
        {enableMobileSticky ? (
          <div className="md:hidden flex flex-col relative pb-8">
            {currentFolders.map((folder, index) => {
              const isLast = index === currentFolders.length - 1;

              return (
                <div
                  key={`mobile-sticky-folder-${folder.category}-${index}`}
                  className={`sticky w-full ${!isLast ? "mb-6" : "mb-0"}`}
                  style={{
                    top: `${MOBILE_STICKY_TOPS[index]}px`,
                    zIndex: MOBILE_Z_INDEXES[index],
                  }}
                >
                  <ProjectFolderCard
                    category={folder.category}
                    title={folder.title}
                    description={folder.description}
                    tone={folder.tone}
                    href={folder.href}
                    disableShadow={true}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          /* Mobile padrão em grid quando sticky não for solicitado */
          <div className="md:hidden grid grid-cols-1 gap-6">
            {currentFolders.map((folder, index) => (
              <ScrollReveal
                key={`mobile-grid-${folder.category}-${index}`}
                animation="fade-up"
                delay={index * 60}
                duration={550}
              >
                <ProjectFolderCard
                  category={folder.category}
                  title={folder.title}
                  description={folder.description}
                  tone={folder.tone}
                  href={folder.href}
                />
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* 2. DESKTOP GRID (>= 768px): 4-Column Grid oficial reutilizado */}
        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {currentFolders.map((folder, index) => (
            <ScrollReveal
              key={`desktop-grid-${folder.category}-${index}`}
              animation="fade-up"
              delay={index * 80}
              duration={600}
              className="flex flex-col h-full"
            >
              <ProjectFolderCard
                category={folder.category}
                title={folder.title}
                description={folder.description}
                tone={folder.tone}
                href={folder.href}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
