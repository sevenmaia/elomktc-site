import React from "react";
import { FileText, Eye, MessageCircle, Rocket } from "lucide-react";
import { orcamentoContent, OrcamentoStep } from "@/content/orcamento-content";

export function HowItWorksSteps() {
  const { title, steps } = orcamentoContent.howItWorks;

  const renderIcon = (name: OrcamentoStep["iconName"]) => {
    switch (name) {
      case "file-text":
        return <FileText className="w-5 h-5 text-[#9400D3]" />;
      case "eye":
        return <Eye className="w-5 h-5 text-[#9400D3]" />;
      case "message-circle":
        return <MessageCircle className="w-5 h-5 text-[#9400D3]" />;
      case "rocket":
        return <Rocket className="w-5 h-5 text-[#9400D3]" />;
      default:
        return <FileText className="w-5 h-5 text-[#9400D3]" />;
    }
  };

  return (
    <div className="pt-2 sm:pt-4">
      <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight mb-6">
        Como funciona<span className="text-[#9400D3]">?.</span>
      </h2>

      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex items-start gap-4 p-3.5 sm:p-4 rounded-xl bg-white/70 border border-purple-50 hover:border-purple-100 hover:bg-white transition-all shadow-xs"
          >
            {/* Step Icon */}
            <div className="w-10 h-10 rounded-xl bg-[#FAF2FD] border border-purple-100 flex items-center justify-center flex-shrink-0">
              {renderIcon(step.iconName)}
            </div>

            {/* Step Number pill */}
            <div className="w-7 h-7 rounded-lg bg-purple-100/80 text-[#9400D3] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-1">
              {step.number}
            </div>

            {/* Step text */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-0.5">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
