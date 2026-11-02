"use client";

import React, { useState } from "react";
import { Share2, Check, Copy, MessageCircle, Linkedin, Twitter } from "lucide-react";

interface ArticleShareBarProps {
  title: string;
  slug: string;
  className?: string;
}

export function ArticleShareBar({
  title,
  slug,
  className = "",
}: ArticleShareBarProps) {
  const [copied, setCopied] = useState(false);

  const getArticleUrl = () => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/artigos/${slug}`;
    }
    return `https://eloisacunha.com.br/artigos/${slug}`;
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getArticleUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
      setCopied(false);
    }
  };

  const url = encodeURIComponent(getArticleUrl());
  const encodedTitle = encodeURIComponent(title);

  return (
    <div
      className={`flex items-center flex-wrap gap-2 text-zinc-600 ${className}`}
      aria-label="Compartilhar artigo"
    >
      <span className="text-[12px] font-bold text-[#4B4458] uppercase tracking-wider flex items-center gap-1.5 mr-1">
        <Share2 className="w-3.5 h-3.5 text-[#9400D3]" />
        Compartilhar:
      </span>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] text-[12px] font-bold transition-colors"
        aria-label="Compartilhar no WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5 fill-current" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] text-[12px] font-bold transition-colors"
        aria-label="Compartilhar no LinkedIn"
      >
        <Linkedin className="w-3.5 h-3.5 fill-current" />
        <span className="hidden sm:inline">LinkedIn</span>
      </a>

      {/* X / Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-[12px] font-bold transition-colors"
        aria-label="Compartilhar no X"
      >
        <Twitter className="w-3.5 h-3.5 fill-current" />
        <span className="hidden sm:inline">X</span>
      </a>

      {/* Copy Link Button */}
      <button
        type="button"
        onClick={handleCopyLink}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold transition-all ${
          copied
            ? "bg-[#9400D3] text-white shadow-xs"
            : "bg-[#F3E5FA] hover:bg-[#EBD2FA] text-[#78129C]"
        }`}
        aria-label="Copiar link do artigo"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5" />
            <span>Link copiado!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>Copiar link</span>
          </>
        )}
      </button>
    </div>
  );
}