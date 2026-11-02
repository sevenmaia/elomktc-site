"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ARTICLES_CONTENT, ArticleItem } from "@/content/articles-content";
import { ArticlesFilterBar } from "./ArticlesFilterBar";
import { ArticleCard } from "./ArticleCard";
import { ScrollReveal } from "@/components/ScrollReveal";

function ArticlesGridContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categoria") || "todos";
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  useEffect(() => {
    const categoryParam = searchParams.get("categoria");
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory("todos");
    }
  }, [searchParams]);

  const filteredItems: ArticleItem[] =
    activeCategory === "todos"
      ? ARTICLES_CONTENT.items
      : ARTICLES_CONTENT.items.filter(
          (item) => item.categoryKey === activeCategory
        );

  return (
    <section
      id="projetos"
      className="py-12 sm:py-16 lg:py-20 bg-white relative"
      aria-label="Catálogo de Projetos e Artigos"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Filter Navigation Bar */}
        <ArticlesFilterBar
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Counter & Status Info */}
        <div className="flex items-center justify-between mb-8 sm:mb-10 pt-2 border-b border-gray-100 pb-4">
          <p className="text-[13px] sm:text-[14px] text-[#60596E] font-medium">
            Exibindo{" "}
            <span className="font-bold text-[#14121E]">
              {filteredItems.length}
            </span>{" "}
            {filteredItems.length === 1 ? "projeto" : "projetos e artigos"}
          </p>

          {activeCategory !== "todos" && (
            <button
              type="button"
              onClick={() => setActiveCategory("todos")}
              className="text-[12px] sm:text-[13px] font-bold text-[#9400D3] hover:underline cursor-pointer"
            >
              Ver todos os projetos
            </button>
          )}
        </div>

        {/* 2-Column Responsive Card Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {filteredItems.map((item, index) => (
              <ScrollReveal
                key={item.id}
                animation="fade-up"
                delay={(index % 4) * 80}
                duration={550}
              >
                <ArticleCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#FAF5FD] rounded-2xl border border-[#E9D4F7] p-8 max-w-lg mx-auto">
            <h4 className="font-heading font-bold text-[18px] text-[#1E1229] mb-2">
              Nenhum projeto encontrado nesta categoria
            </h4>
            <p className="text-[14px] text-[#554C61] mb-6">
              Em breve novos projetos e conteúdos serão adicionados aqui.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory("todos")}
              className="inline-flex items-center justify-center bg-[#9400D3] text-white text-[13px] font-bold px-6 py-2.5 rounded-lg shadow-xs hover:bg-[#7D00B3] transition-colors"
            >
              Mostrar todos os projetos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export function ArticlesGridSection() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-zinc-500 text-sm">
          Carregando catálogo de projetos...
        </div>
      }
    >
      <ArticlesGridContent />
    </Suspense>
  );
}