"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  LayoutGrid,
  Monitor,
  Layout,
  Megaphone,
  MessageCircle,
  Mail,
  FileText,
} from "lucide-react";
import { ARTICLES_CONTENT, ArticleCategoryFilter } from "@/content/articles-content";

interface ArticlesFilterBarProps {
  activeCategory: string;
  onSelectCategory: (key: string) => void;
}

export function ArticlesFilterBar({
  activeCategory,
  onSelectCategory,
}: ArticlesFilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { filters } = ARTICLES_CONTENT;

  const getIcon = (iconName: ArticleCategoryFilter["iconName"]) => {
    const props = { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" };
    switch (iconName) {
      case "grid":
        return <LayoutGrid {...props} />;
      case "monitor":
        return <Monitor {...props} />;
      case "layout":
        return <Layout {...props} />;
      case "megaphone":
        return <Megaphone {...props} />;
      case "message-circle":
        return <MessageCircle {...props} />;
      case "mail":
        return <Mail {...props} />;
      case "file-text":
        return <FileText {...props} />;
      default:
        return <LayoutGrid {...props} />;
    }
  };

  const handleFilterClick = (key: string) => {
    onSelectCategory(key);
    const params = new URLSearchParams(searchParams.toString());
    if (key === "todos") {
      params.delete("categoria");
    } else {
      params.set("categoria", key);
    }
    const query = params.toString();
    router.replace(query ? `?${query}` : "/artigos", { scroll: false });
  };

  // Group for mobile into 3 perfectly balanced rows so nothing ever cuts off on any screen size
  const mobileRow1 = filters.filter((f) =>
    ["todos", "sites", "artigos"].includes(f.key)
  );
  const mobileRow2 = filters.filter((f) =>
    ["landing-pages", "emails"].includes(f.key)
  );
  const mobileRow3 = filters.filter((f) =>
    ["campanhas", "redes-sociais"].includes(f.key)
  );

  const renderFilterButton = (filter: ArticleCategoryFilter, isMobile = false) => {
    const isActive = activeCategory === filter.key;
    return (
      <button
        key={filter.key}
        type="button"
        onClick={() => handleFilterClick(filter.key)}
        className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-xl font-bold transition-all duration-200 active:scale-95 cursor-pointer ${
          isMobile
            ? `px-3.5 py-2 text-[12px] shadow-xs ${
                isActive
                  ? "bg-[#9400D3] text-white border border-[#9400D3] shadow-sm shadow-[#9400D3]/20"
                  : "bg-white text-[#383244] border border-[#E5CEF8] hover:bg-[#FAF2FD]"
              }`
            : `px-4 py-2.5 text-[13px] ${
                isActive
                  ? "bg-[#9400D3] text-white shadow-xs"
                  : "bg-transparent text-[#383244] hover:bg-[#F8EEFC] hover:text-[#181522]"
              }`
        }`}
        aria-pressed={isActive}
      >
        {getIcon(filter.iconName)}
        <span>{filter.label}</span>
      </button>
    );
  };

  return (
    <div className="w-full flex justify-center py-4 sm:py-8" id="filtros">
      <div className="w-full max-w-5xl px-4 sm:px-6">
        {/* Mobile View (< md): 3 perfectly balanced rows, zero clipping on any mobile phone */}
        <div className="flex md:hidden flex-col items-center gap-2 w-full max-w-sm mx-auto">
          {/* Row 1: Todos, Sites, Artigos */}
          <div className="flex items-center justify-center gap-2 w-full">
            {mobileRow1.map((filter) => renderFilterButton(filter, true))}
          </div>

          {/* Row 2: Landing Pages, E-mails */}
          <div className="flex items-center justify-center gap-2 w-full">
            {mobileRow2.map((filter) => renderFilterButton(filter, true))}
          </div>

          {/* Row 3: Campanhas, Redes Sociais */}
          <div className="flex items-center justify-center gap-2 w-full">
            {mobileRow3.map((filter) => renderFilterButton(filter, true))}
          </div>
        </div>

        {/* Desktop & Tablet View (>= md): The approved unified horizontal capsule */}
        <div className="hidden md:inline-flex items-center gap-2 bg-white/95 backdrop-blur-md p-2 rounded-2xl border border-[#E5CEF8] shadow-sm mx-auto">
          {filters.map((filter) => renderFilterButton(filter, false))}
        </div>
      </div>
    </div>
  );
}
