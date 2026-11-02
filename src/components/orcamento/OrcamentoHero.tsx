import React from "react";
import Image from "next/image";
import { MessageSquare, FileText, Zap, ShieldCheck, Quote } from "lucide-react";
import { orcamentoContent } from "@/content/orcamento-content";

export function OrcamentoHero() {
  const { eyebrow, title, subtitle, highlights, profilePhoto } = orcamentoContent;

  const highlightIcons = [
    <MessageSquare key="msg" className="w-5 h-5 text-[#9400D3]" />,
    <FileText key="file" className="w-5 h-5 text-[#9400D3]" />,
    <Zap key="zap" className="w-5 h-5 text-[#9400D3]" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-[#9400D3]" />,
  ];

  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 overflow-hidden">
      {/* Background soft ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF2FD] via-[#FAF6FE]/70 to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#9400D3]/8 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading and Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider text-[#9400D3] uppercase mb-3">
              {eyebrow}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.1] mb-5">
              {title}{" "}
              <span className="text-gray-950">
                juntos<span className="text-[#9400D3]">?.</span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
              {subtitle}
            </p>

            {/* 4 Mini highlight cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-sm border border-purple-100/80 rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start gap-2"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#FAF2FD] border border-purple-100 flex items-center justify-center flex-shrink-0">
                    {highlightIcons[idx]}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Eloisa's Portrait in Signature Folder Card Model */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] group">
              {/* Lilac playful doodle accent on top-left of the photo */}
              <div
                aria-hidden="true"
                className="absolute -top-5 -left-3 w-10 h-10 text-[#C677E0] pointer-events-none z-20"
              >
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M 12 18 L 4 22" />
                  <path d="M 16 12 L 12 4" />
                  <path d="M 22 14 L 28 8" />
                </svg>
              </div>

              {/* SVG Folder Tab Header */}
              <div className="w-full relative h-[36px] overflow-hidden -mb-[1px]">
                <svg
                  viewBox="0 0 340 38"
                  preserveAspectRatio="none"
                  className="w-full h-full block text-[#0B0B0F]"
                  fill="currentColor"
                >
                  <path d="M 0 38 L 0 16 Q 0 0 18 0 L 142 0 Q 156 0 166 14 Q 176 26 192 26 L 322 26 Q 340 26 340 38 Z" />
                </svg>
                {/* Tab Label with pulse */}
                <div className="absolute top-2 left-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A40DDB] animate-pulse" />
                  <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-white/90">
                    ELOISA CUNHA
                  </span>
                </div>
              </div>

              {/* Folder Card Body holding the photo */}
              <div className="relative aspect-[4/4.5] sm:aspect-[4/4.6] w-full rounded-b-2xl overflow-hidden shadow-2xl bg-[#0B0B0F] border-2 border-t-0 border-[#0B0B0F]">
                <Image
                  src={profilePhoto.src}
                  alt={profilePhoto.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

                {/* Floating Quote Card matching Home and Sobre Mim */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#EBD2FA] border border-[#DFC3F2] text-[#1B1B20] p-3 sm:p-3.5 rounded-xl shadow-lg max-w-[210px] flex items-start gap-2.5 backdrop-blur-sm z-20">
                  <div className="p-1 bg-[#A40DDB]/15 rounded-md text-[#A40DDB] flex-shrink-0 mt-0.5">
                    <Quote className="w-3.5 h-3.5 text-[#A40DDB] fill-[#A40DDB]/30" />
                  </div>
                  <p className="text-[11px] sm:text-[12px] font-semibold leading-snug tracking-tight text-[#16151D] italic">
                    &ldquo;{profilePhoto.floatingBadge}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
