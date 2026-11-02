"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles, Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { SOCIAL_CONTENT, SocialHeroMockup } from "@/content/social-content";

export function SocialHeroPhones() {
  const mockups = SOCIAL_CONTENT.hero.mockups || [];
  // Start with index 1 (Profile) as center, matching the approved reference
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % mockups.length);
  }, [mockups.length]);

  // Looping animation between the 3 phones
  useEffect(() => {
    if (isPaused || mockups.length === 0) return;
    const interval = setInterval(nextSlide, 3800);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, mockups.length]);

  return (
    <div
      className="relative w-full max-w-[560px] mx-auto h-[510px] sm:h-[550px] flex items-center justify-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Composição interativa de mockups de redes sociais"
    >
      {/* Background radial glow */}
      <div
        className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-[#EBD2FA]/60 via-[#F3E8FF]/40 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Decorative spark rays */}
      <div
        className="absolute -top-3 right-8 pointer-events-none text-[#C677E0] animate-pulse"
        aria-hidden="true"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <line x1="20" y1="2" x2="20" y2="10" stroke="#C677E0" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="33" y1="7" x2="27" y2="13" stroke="#C677E0" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="38" y1="20" x2="30" y2="20" stroke="#C677E0" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      <div
        className="absolute top-12 left-4 pointer-events-none text-[#C677E0] hidden sm:block"
        aria-hidden="true"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <line x1="14" y1="2" x2="14" y2="8" stroke="#C677E0" strokeWidth="2" strokeLinecap="round" />
          <line x1="4" y1="12" x2="10" y2="12" stroke="#C677E0" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* 3 Interactive Phone Mockups swapping positions in a loop */}
      <div className="relative w-full h-full flex items-center justify-center">
        {mockups.map((mockup: SocialHeroMockup, idx: number) => {
          // Calculate relative slot: 1 = center, 0 = left, 2 = right
          const slot = (idx - activeIndex + mockups.length) % mockups.length;
          const isCenter = slot === 1;
          const isLeft = slot === 0;
          const isRight = slot === 2;

          return (
            <div
              key={mockup.id}
              onClick={() => {
                if (!isCenter) setActiveIndex(idx);
              }}
              className={`absolute top-1/2 left-1/2 -translate-y-1/2 rounded-[36px] sm:rounded-[40px] p-2.5 sm:p-3 transition-all duration-700 ease-[cubic-bezier(0.34,1.15,0.64,1)] ${
                isCenter
                  ? "-translate-x-1/2 scale-100 rotate-0 z-30 opacity-100 bg-[#111116] border-[4.5px] border-[#383748] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_35px_rgba(164,13,219,0.22)] cursor-default w-[230px] sm:w-[260px] h-[440px] sm:h-[480px]"
                  : isLeft
                  ? "-translate-x-[calc(50%+70px)] sm:-translate-x-[calc(50%+120px)] translate-y-3 sm:translate-y-5 scale-[0.82] sm:scale-[0.86] -rotate-6 z-10 opacity-75 sm:opacity-90 bg-[#111116] border-[3.5px] border-[#2A2A35] shadow-xl cursor-pointer hover:opacity-100 hover:scale-[0.89] w-[210px] sm:w-[235px] h-[410px] sm:h-[450px]"
                  : "-translate-x-[calc(50%-70px)] sm:-translate-x-[calc(50%-120px)] translate-y-3 sm:translate-y-5 scale-[0.82] sm:scale-[0.86] rotate-6 z-10 opacity-75 sm:opacity-90 bg-[#111116] border-[3.5px] border-[#2A2A35] shadow-xl cursor-pointer hover:opacity-100 hover:scale-[0.89] w-[210px] sm:w-[235px] h-[410px] sm:h-[450px]"
              }`}
              style={{
                willChange: "transform, opacity",
              }}
            >
              {/* Dynamic Island / Notch */}
              <div className="absolute top-3 sm:top-3.5 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-3.5 sm:h-4 bg-black rounded-full z-30 flex items-center justify-center pointer-events-none">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1A1A24] mr-1.5 sm:mr-2" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#0F223D]" />
              </div>

              {/* Inner Smartphone Screen Frame */}
              <div className="w-full h-full bg-[#0D0C12] rounded-[26px] sm:rounded-[30px] overflow-hidden flex flex-col justify-between text-white relative pt-4 sm:pt-5 border border-white/5">
                {/* 1. If an image is configured (from CMS / Admin), render it directly */}
                {mockup.imageUrl ? (
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={mockup.imageUrl}
                      alt={mockup.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 240px, 300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 pointer-events-none" />

                    {/* Header bar on top of image, positioned below notch */}
                    {mockup.data?.handle && (
                      <div className="absolute top-7 sm:top-8 left-2.5 right-2.5 flex items-center gap-2 z-10 bg-black/50 backdrop-blur-md p-1.5 rounded-full border border-white/10">
                        <div className="w-5 h-5 rounded-full overflow-hidden border border-[#A40DDB] flex-shrink-0">
                          <Image
                            src="/images/eloisa-cunha.jpg"
                            alt="Eloisa Cunha"
                            width={20}
                            height={20}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <div className="leading-none truncate">
                          <p className="text-[8.5px] font-bold truncate">{mockup.data.handle}</p>
                          {mockup.data.sublabel && (
                            <p className="text-[7px] text-[#A0A0B0] truncate">{mockup.data.sublabel}</p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Floating interactive actions */}
                    <div className="absolute bottom-16 sm:bottom-18 left-3 right-3 flex items-center justify-between text-white/90 z-10">
                      <div className="flex items-center gap-2">
                        <Heart className="w-3.5 h-3.5 fill-[#FF477E] text-[#FF477E]" />
                        <MessageCircle className="w-3.5 h-3.5" />
                        <Send className="w-3.5 h-3.5" />
                      </div>
                      <Bookmark className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ) : mockup.type === "reels" ? (
                  /* 2. Fallback: Authentic Reels Mockup Screen */
                  <div className="w-full h-full flex flex-col justify-between p-2.5 pb-16 text-white">
                    <div className="flex items-center justify-between text-[9px] text-[#A0A0B0] pb-1 border-b border-white/10">
                      <span className="font-semibold">Reels</span>
                      <span className="text-emerald-400 font-bold">&bull; {mockup.data?.tag || "Em alta"}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 my-auto">
                      <div className="aspect-[9/14] rounded-lg bg-gradient-to-br from-[#7D2AE8] to-[#A40DDB] p-2 flex flex-col justify-between">
                        <span className="text-[8px] font-bold tracking-tight">Estratégia B2B</span>
                        <div className="flex items-center gap-1 text-[7px] opacity-90">
                          <Heart className="w-2 h-2 fill-white" /> 2,4k
                        </div>
                      </div>
                      <div className="aspect-[9/14] rounded-lg bg-gradient-to-br from-[#1F1D2B] to-[#3B1F54] p-2 flex flex-col justify-between border border-white/10">
                        <span className="text-[8px] font-bold tracking-tight">Conteúdo Orgânico</span>
                        <div className="flex items-center gap-1 text-[7px] text-[#C677E0]">
                          <span>124k views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : mockup.type === "profile" ? (
                  /* 3. Fallback: Authentic Profile Mockup Screen */
                  <div className="w-full h-full flex flex-col text-white">
                    <div className="px-3 pt-1 pb-2 border-b border-white/10">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] sm:text-[11px] font-bold tracking-tight">
                          {mockup.data?.handle || "tsvap.oficial"}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>

                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#FBBC05] via-[#E1306C] to-[#C13584] flex-shrink-0">
                          <div className="w-full h-full rounded-full bg-[#1F1D2B] flex items-center justify-center text-[10px] font-black text-[#EBD2FA]">
                            TSV
                          </div>
                        </div>
                        <div className="flex-1 flex justify-around text-center">
                          <div>
                            <p className="text-[10px] sm:text-[11px] font-bold leading-none">
                              {mockup.data?.postsCount || "334"}
                            </p>
                            <p className="text-[7px] text-[#A0A0B0] mt-0.5">posts</p>
                          </div>
                          <div>
                            <p className="text-[10px] sm:text-[11px] font-bold leading-none">
                              {mockup.data?.followers || "12,4 mil"}
                            </p>
                            <p className="text-[7px] text-[#A0A0B0] mt-0.5">seguidores</p>
                          </div>
                          <div>
                            <p className="text-[10px] sm:text-[11px] font-bold leading-none">
                              {mockup.data?.following || "680"}
                            </p>
                            <p className="text-[7px] text-[#A0A0B0] mt-0.5">seguindo</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5">
                        <button className="h-5 sm:h-6 rounded-md bg-[#0095F6] text-[8.5px] sm:text-[9px] font-bold text-white flex items-center justify-center shadow-xs">
                          Seguir
                        </button>
                        <button className="h-5 sm:h-6 rounded-md bg-white/10 text-[8.5px] sm:text-[9px] font-bold text-white flex items-center justify-center">
                          Mensagem
                        </button>
                      </div>
                    </div>

                    <div className="px-3 py-1.5 flex items-center gap-2 border-b border-white/10 overflow-hidden">
                      {["Resultados", "B2B", "Cases", "Equipe"].map((h, i) => (
                        <div key={i} className="flex flex-col items-center flex-shrink-0">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 p-[1px] flex items-center justify-center bg-white/5">
                            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C677E0]" />
                          </div>
                          <span className="text-[6.5px] sm:text-[7px] text-[#A0A0B0] mt-0.5">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-0.5 p-0.5 flex-1 bg-black/40">
                      <div className="aspect-square bg-gradient-to-br from-[#7D2AE8] to-[#A40DDB] flex items-center justify-center p-1 text-center">
                        <span className="text-[6.5px] sm:text-[7px] font-extrabold leading-tight">Autoridade</span>
                      </div>
                      <div className="aspect-square bg-[#1A1824] flex items-center justify-center p-1 text-center border border-white/5">
                        <span className="text-[6.5px] sm:text-[7px] font-bold text-[#EBD2FA] leading-tight">Posicionamento</span>
                      </div>
                      <div className="aspect-square bg-gradient-to-tr from-[#A40DDB] to-[#E1306C] flex items-center justify-center p-1 text-center">
                        <span className="text-[6.5px] sm:text-[7px] font-extrabold leading-tight">Demanda B2B</span>
                      </div>
                      <div className="aspect-square bg-[#221D2E] flex items-center justify-center p-1 text-center">
                        <span className="text-[6.5px] sm:text-[7px] font-medium text-white/80 leading-tight">GTM</span>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-[#591475] to-[#7D2AE8] flex items-center justify-center p-1 text-center">
                        <span className="text-[6.5px] sm:text-[7px] font-black leading-tight">Copywriting</span>
                      </div>
                      <div className="aspect-square bg-[#1A1824] flex items-center justify-center p-1 text-center border border-white/5">
                        <span className="text-[6.5px] sm:text-[7px] font-bold text-[#EBD2FA] leading-tight">Reels 100k+</span>
                      </div>
                      <div className="aspect-square bg-gradient-to-tr from-[#A40DDB] to-[#7D2AE8] flex items-center justify-center p-1 text-center">
                        <span className="text-[6.5px] sm:text-[7px] font-extrabold leading-tight">Engajamento</span>
                      </div>
                      <div className="aspect-square bg-[#1A1824] flex items-center justify-center p-1 text-center">
                        <span className="text-[6.5px] sm:text-[7px] font-medium text-white/80 leading-tight">SEO Social</span>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-[#7D2AE8] to-[#C677E0] flex items-center justify-center p-1 text-center">
                        <span className="text-[6.5px] sm:text-[7px] font-bold leading-tight">Conversão</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* 4. Fallback: Photo Post Mockup Screen */
                  <div className="w-full h-full flex flex-col justify-between text-white relative">
                    <div className="p-2 sm:p-2.5 flex items-center gap-2 border-b border-white/10">
                      <div className="w-6 h-6 rounded-full overflow-hidden border border-[#A40DDB]">
                        <Image
                          src="/images/eloisa-cunha.jpg"
                          alt="Eloisa Cunha"
                          width={24}
                          height={24}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="leading-none">
                        <p className="text-[9px] font-bold">{mockup.data?.handle || "eloisa.cunha"}</p>
                        <p className="text-[7.5px] text-[#A0A0B0]">{mockup.data?.sublabel || "Marketing & Comunicação"}</p>
                      </div>
                    </div>

                    <div className="relative flex-1 overflow-hidden">
                      <Image
                        src="/images/eloisa-cunha.jpg"
                        alt="Case Eloisa Cunha"
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white/90">
                        <div className="flex items-center gap-2">
                          <Heart className="w-3.5 h-3.5 fill-[#FF477E] text-[#FF477E]" />
                          <MessageCircle className="w-3.5 h-3.5" />
                          <Send className="w-3.5 h-3.5" />
                        </div>
                        <Bookmark className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Floating Bottom Badge */}
                {mockup.badge && (
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#FAF7FC] text-[#0B0B0F] p-2 sm:p-2.5 rounded-xl border border-[#EFE5F5] shadow-lg pointer-events-none z-20">
                    <p className="text-[9px] sm:text-[10px] font-bold leading-tight mb-1 text-[#1F1D2B]">
                      {mockup.badge.text}
                    </p>
                    {mockup.badge.highlight && (
                      <div className="inline-flex items-center gap-1 bg-[#A40DDB] text-white text-[8px] sm:text-[9px] font-black px-2 py-0.5 rounded-full">
                        <span>✦</span> {mockup.badge.highlight}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
