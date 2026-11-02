"use strict";

import React from "react";
import { FeaturedProjectsSection } from "@/components/projects/FeaturedProjectsSection";

export function AboutFeaturedProjectsSection() {
  return (
    <FeaturedProjectsSection
      eyebrow="MEUS PROJETOS"
      title="Projetos em destaque"
      description="Seleção de projetos estratégicos em social media, redação SEO, audiovisual e desenvolvimento web."
      viewAllCta={{
        label: "Ver todos na Home",
        href: "/",
      }}
      theme="dark"
      enableMobileSticky={true}
      sectionId="projetos-destaque"
    />
  );
}
