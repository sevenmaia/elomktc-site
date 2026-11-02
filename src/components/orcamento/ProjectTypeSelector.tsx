"use client";

import React from "react";
import {
  Smartphone,
  Layout,
  PenTool,
  Video,
  Megaphone,
  MessageSquare,
  Check,
} from "lucide-react";
import { orcamentoContent, OrcamentoServiceOption } from "@/content/orcamento-content";

interface ProjectTypeSelectorProps {
  selectedServices: string[];
  onToggleService: (serviceTitle: string) => void;
}

export function ProjectTypeSelector({
  selectedServices,
  onToggleService,
}: ProjectTypeSelectorProps) {
  const { title, subtitle, options } = orcamentoContent.projectSelector;

  const renderIcon = (name: OrcamentoServiceOption["iconName"]) => {
    switch (name) {
      case "smartphone":
        return <Smartphone className="w-5 h-5" />;
      case "layout":
        return <Layout className="w-5 h-5" />;
      case "pen-tool":
        return <PenTool className="w-5 h-5" />;
      case "video":
        return <Video className="w-5 h-5" />;
      case "megaphone":
        return <Megaphone className="w-5 h-5" />;
      case "message-square":
        return <MessageSquare className="w-5 h-5" />;
      default:
        return <Layout className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-[#12111A] border border-[#242133] rounded-2xl p-6 sm:p-7 shadow-xl">
      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-2">
        Que tipo de projeto você quer desenvolver<span className="text-[#9400D3]">?.</span>
      </h2>
      <p className="text-xs sm:text-sm text-gray-400 mb-6 font-medium">
        {subtitle}
      </p>

      {/* Grid of 6 interactive service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {options.map((option) => {
          const isSelected = selectedServices.includes(option.title);

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onToggleService(option.title)}
              className={`text-left p-4 rounded-xl border transition-all duration-200 relative flex flex-col justify-between group cursor-pointer ${
                isSelected
                  ? "bg-[#211638] border-[#9400D3] shadow-md shadow-[#9400D3]/15"
                  : "bg-[#181622]/90 border-white/10 hover:border-white/20 hover:bg-[#1E1B2B]"
              }`}
            >
              {/* Top row: Icon and Selection Circle */}
              <div className="flex items-center justify-between w-full mb-3">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                    isSelected
                      ? "bg-[#9400D3] text-white"
                      : "bg-white/5 text-[#D444BC] group-hover:text-white group-hover:bg-white/10"
                  }`}
                >
                  {renderIcon(option.iconName)}
                </div>

                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                    isSelected
                      ? "bg-[#9400D3] border-[#9400D3] text-white"
                      : "border-white/25 group-hover:border-white/40"
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
              </div>

              {/* Text content */}
              <div>
                <h3 className="text-sm font-bold text-white leading-tight mb-1">
                  {option.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed font-normal">
                  {option.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
