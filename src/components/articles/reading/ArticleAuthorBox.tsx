"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ArticleDetail } from "@/content/article-detail-content";

interface ArticleAuthorBoxProps {
  author: ArticleDetail["author"];
}

export function ArticleAuthorBox({ author }: ArticleAuthorBoxProps) {
  return (
    <div className="max-w-[720px] mx-auto my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FAF3FC] to-[#F5E6FC] border border-[#E9D5F7] shadow-sm">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left">
        {/* Author Avatar */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 border-white shadow-md ring-2 ring-[#D9B4F0] flex-shrink-0">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            className="object-cover object-top"
            sizes="100px"
          />
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <span className="text-[10px] sm:text-[11px] font-heading font-black tracking-[0.2em] uppercase text-[#78129C] mb-1 block">
            SOBRE A AUTORA
          </span>
          <h3 className="font-heading font-black text-[20px] sm:text-[22px] text-[#14121E] mb-1">
            {author.name}
          </h3>
          <p className="text-[13px] font-bold text-[#8617AE] mb-3">
            {author.role}
          </p>
          <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#4E475A] mb-5">
            {author.bio}
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <Link
              href="/sobre-mim"
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#9400D3] hover:text-[#640090] transition-colors"
            >
              <span>Conhecer trajetória completa</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <span className="hidden sm:inline text-zinc-300">&bull;</span>

            <Link
              href="/orcamento"
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#14121E] hover:text-[#9400D3] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#9400D3]" />
              <span>Solicitar consultoria</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}