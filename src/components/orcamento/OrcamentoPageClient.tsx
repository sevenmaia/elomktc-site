"use client";

import React, { useState } from "react";
import { ProjectTypeSelector } from "./ProjectTypeSelector";
import { HowItWorksSteps } from "./HowItWorksSteps";
import { OrcamentoForm } from "./OrcamentoForm";

export function OrcamentoPageClient() {
  // Pre-selected "Social Media" matching approved reference 08-FORMULARIO-ORCAMENTO.webp
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Social Media",
  ]);

  const handleToggleService = (serviceTitle: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceTitle)
        ? prev.filter((s) => s !== serviceTitle)
        : [...prev, serviceTitle]
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* Left Column (Desktop: 5 cols / Mobile: stacked) */}
      <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
        {/* Hidden on mobile to avoid duplicating the services already present inside the form */}
        <div className="hidden lg:block">
          <ProjectTypeSelector
            selectedServices={selectedServices}
            onToggleService={handleToggleService}
          />
        </div>

        <HowItWorksSteps />
      </div>

      {/* Right Column: The Main Form (Desktop: 7 cols / Mobile: prioritized) */}
      <div className="lg:col-span-7 order-1 lg:order-2">
        <OrcamentoForm
          selectedServices={selectedServices}
          onToggleService={handleToggleService}
        />
      </div>
    </div>
  );
}
