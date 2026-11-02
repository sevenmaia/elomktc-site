"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, Clock } from "lucide-react";
import { ArticleDetail } from "@/content/article-detail-content";
import { ArticleShareBar } from "./ArticleShareBar";

interface ArticleHeaderProps {
  article: ArticleDetail;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="pt-28 pb-10 sm:pt-36 sm:pb-12 bg-gradient-to-b from-[#F3E2FA] via-[#F8EEFC] to-white">
      <div className="max-w-[1020px] mx-auto px-5 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Navegação estrutural"
          className="flex items-center gap-1.5 text-[12px] sm:text-[13px] text-[#635B70] mb-6 flex-wrap"
        >
          <Link
            href="/"
            className="hover:text-[#9400D3] transition-colors font-medium"
          >
            Início
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#A59CB3]" />
          <Link
            href="/artigos"
            className="hover:text-[#9400D3] transition-colors font-medium"
          >
            Artigos
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#A59CB3]" />
          <span className="text-[#14121E] font-bold line-clamp-1 max-w-[280px] sm:max-w-md">
            {article.title}
          </span>
        </nav>

        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#D9B4F0] mb-5 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9400D3]" />
          <span className="text-[10.5px] sm:text-[11.5px] font-heading font-black tracking-[0.22em] text-[#78129C] uppercase">
            {article.category}
          </span>
        </div>

        {/* Article H1 Headline */}
        <h1 className="font-heading font-black text-[30px] min-[400px]:text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.08] tracking-[-0.03em] text-[#0E0C17] mb-5">
          {article.title.endsWith(".") ? (
            <>
              {article.title.slice(0, -1)}
              <span className="text-[#9400D3]">.</span>
            </>
          ) : (
            <>
              {article.title}
              <span className="text-[#9400D3]">.</span>
            </>
          )}
        </h1>

        {/* Subtitle / Lead Paragraph */}
        <p className="font-sans text-[16px] sm:text-[18.5px] leading-[1.58] text-[#3E384D] max-w-[840px] mb-8 font-normal">
          {article.subtitle}
        </p>

        {/* Author Metadata & Share Row */}
        <div className="pt-6 border-t border-[#E8D6F5] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          {/* Author Details */}
          <div className="flex items-center gap-3.5">
            <Link
              href="/sobre-mim"
              className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-xs ring-1 ring-[#D9B4F0] flex-shrink-0 group"
            >
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                sizes="50px"
              />
            </Link>

            <div>
              <Link
                href="/sobre-mim"
                className="font-heading font-bold text-[14px] sm:text-[15px] text-[#14121E] hover:text-[#9400D3] transition-colors block leading-tight"
              >
                {article.author.name}
              </Link>
              <div className="flex items-center gap-3 text-[12px] sm:text-[12.5px] text-[#696175] mt-1 flex-wrap">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#9400D3]" />
                  {article.publishedAt}
                </span>
                <span className="w-1 h-1 rounded-full bg-zinc-300" />
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#9400D3]" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Social Share Bar */}
          <ArticleShareBar title={article.title} slug={article.slug} />
        </div>
      </div>
    </header>
  );
}