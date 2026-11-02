"use client";

import React from "react";
import { CheckCircle2, Sparkles, Quote } from "lucide-react";
import { ArticleDetail } from "@/content/article-detail-content";
import { ArticleShareBar } from "./ArticleShareBar";

interface ArticleBodyProps {
  article: ArticleDetail;
}

export function ArticleBody({ article }: ArticleBodyProps) {
  return (
    <article className="w-full max-w-[720px] mx-auto text-[#262030] font-sans">
      {article.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-28 mb-12 sm:mb-16"
        >
          {/* Section Heading */}
          <h2 className="font-heading font-black text-[22px] sm:text-[26px] lg:text-[28px] leading-[1.22] tracking-tight text-[#0F0D17] mb-5 pt-2">
            {section.title}
          </h2>

          {/* Section Paragraphs */}
          <div className="space-y-5 text-[16px] sm:text-[17.5px] leading-[1.78] text-[#342D40] font-normal">
            {section.paragraphs.map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}
          </div>

          {/* Pull Quote Highlight */}
          {section.quote && (
            <figure className="relative my-8 sm:my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FAF2FD] to-[#F5E6FC] border-l-4 border-[#9400D3] shadow-xs">
              <Quote className="w-8 h-8 text-[#9400D3]/30 mb-2 fill-current" />
              <blockquote className="font-heading font-extrabold text-[18px] sm:text-[21px] leading-[1.4] text-[#1E092B] italic">
                &ldquo;{section.quote}&rdquo;
              </blockquote>
              {section.quoteAuthor && (
                <figcaption className="mt-3 text-[13px] font-bold text-[#8617AE] tracking-wide not-italic">
                  &mdash; {section.quoteAuthor}
                </figcaption>
              )}
            </figure>
          )}

          {/* Bullet Points */}
          {section.bulletPoints && section.bulletPoints.length > 0 && (
            <div className="my-7 p-6 sm:p-7 rounded-2xl bg-[#FCFAFE] border border-[#EFE2F8] shadow-2xs">
              <ul className="space-y-3">
                {section.bulletPoints.map((point, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-3 text-[15px] sm:text-[16px] leading-[1.6] text-[#3B3347]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#9400D3] flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Dark Highlight Box */}
          {section.highlightBox && (
            <div className="my-8 p-6 sm:p-8 rounded-2xl bg-[#0F0E17] text-white border border-white/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#9400D3]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#9400D3]/30 border border-[#9400D3]/50 text-[#E0A8F8] text-[11px] font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3 h-3" />
                  <span>Destaque</span>
                </div>
                <h4 className="font-heading font-black text-[18px] sm:text-[20px] text-white mb-2">
                  {section.highlightBox.title}
                </h4>
                <p className="text-[14px] sm:text-[15.5px] text-zinc-300 leading-[1.6]">
                  {section.highlightBox.description}
                </p>
              </div>
            </div>
          )}
        </section>
      ))}

      {/* Article Footer: Tags & Share */}
      <div className="pt-8 pb-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        {/* Tags */}
        <div className="flex items-center flex-wrap gap-2">
          <span className="text-[12px] font-bold text-[#655D73] uppercase tracking-wider mr-1">
            Tags:
          </span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-[12px] px-3 py-1 rounded-full bg-[#F5E8FB] text-[#711693] font-semibold border border-[#E7CEF5]"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Share */}
        <ArticleShareBar title={article.title} slug={article.slug} />
      </div>
    </article>
  );
}