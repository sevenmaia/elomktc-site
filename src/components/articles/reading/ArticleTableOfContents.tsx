"use client";

import React, { useState } from "react";
import { List, ChevronDown } from "lucide-react";
import { ArticleSection } from "@/content/article-detail-content";

interface ArticleTableOfContentsProps {
  sections: ArticleSection[];
}

export function ArticleTableOfContents({
  sections,
}: ArticleTableOfContentsProps) {
  // Collapsed by default on mobile, always visible on desktop via CSS
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!sections || sections.length === 0) return null;

  return (
    <aside
      aria-label="Índice de conteúdo"
      className="bg-[#FAF5FD] border border-[#E9D7F7] rounded-2xl p-4 sm:p-5 lg:p-6 mb-6 lg:mb-0 lg:sticky lg:top-28 shadow-2xs"
    >
      <div
        className="flex items-center justify-between cursor-pointer select-none"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <div className="flex items-center gap-2">
          <List className="w-4 h-4 text-[#9400D3]" />
          <h3 className="font-heading font-bold text-[13px] sm:text-[14px] text-[#241334] uppercase tracking-wider">
            Neste artigo
          </h3>
          <span className="text-[11px] font-bold text-[#9400D3] bg-[#F1DDFB] px-2 py-0.5 rounded-full">
            {sections.length} tópicos
          </span>
        </div>
        <button
          type="button"
          aria-expanded={mobileOpen}
          className="lg:hidden p-1 text-[#78129C]"
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              mobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Toggleable / Desktop Always Visible */}
      <nav className={`mt-3.5 pt-3 border-t border-[#E8D6F5] ${mobileOpen ? "block" : "hidden lg:block"}`}>
        <ul className="space-y-2.5 text-[13px] sm:text-[13.5px]">
          {sections.map((section, idx) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={() => setMobileOpen(false)}
                className="text-[#554C61] hover:text-[#9400D3] hover:translate-x-1 transition-all flex items-start gap-2 group leading-snug"
              >
                <span className="text-[#9400D3] font-bold text-[11px] mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0">
                  {idx + 1}.
                </span>
                <span>{section.title.replace(/^\d+\.\s*/, "")}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}