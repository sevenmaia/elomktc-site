"use strict";

import React from "react";
import { FeaturedProjectsSection } from "@/components/projects/FeaturedProjectsSection";

export function FolderProjectsSection() {
  return (
    <FeaturedProjectsSection
      theme="light"
      enableMobileSticky={true}
      sectionId="projetos"
    />
  );
}
