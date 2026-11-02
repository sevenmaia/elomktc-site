"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { ArticleDetail } from "@/content/article-detail-content";

interface RelatedArticlesSectionProps {
  articles: ArticleDetail[];
}

export function RelatedArticlesSection({ articles }: RelatedArticlesSectionProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section
      aria-label="Artigos recomendados"
      className="py-16 sm:py-20 bg-[#FAF7FC] border-t border-[#EFE5F7]"
    >
      <div className="max-w-[1020px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-[10px] sm:text-[11px] font-heading font-black tracking-[0.2em] uppercase text-[#78129C] mb-2 block">
            CONTINUE EXPLORANDO
          </span>
          <h2 className="font-heading font-black text-[26px] sm:text-[32px] text-[#120F1D] tracking-tight">
            Artigos recomendados
            <span className="text-[#9400D3]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {articles.map((item) => (
            <Link
              key={item.slug}
              href={`/artigos/${item.slug}`}
              className="group bg-white rounded-2xl border border-[#E9D9F7] overflow-hidden shadow-xs hover:shadow-md hover:border-[#D9B4F0] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cover Preview */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0A0910]">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-purple-200 text-[#78129C] text-[10px] font-black uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-black text-[18px] sm:text-[20px] leading-[1.25] text-[#14121E] group-hover:text-[#9400D3] transition-colors mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] leading-[1.55] text-[#554C61] line-clamp-2 mb-4">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between text-[12.5px] font-bold">
                <span className="text-[#6D657A] flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#9400D3]" />
                  {item.readTime}
                </span>

                <span className="text-[#9400D3] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Ler artigo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}