"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { BIO_CONTENT } from "@/content/bio-content";

// Authentic Social SVG Icons from Eloisa's live website
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 456.4 456.3" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M228.1,41.1c60.9,0,68.1,0.2,92.2,1.3c22.2,1,34.3,4.7,42.4,7.9c10.6,4.1,18.2,9.1,26.2,17.1 c8,8,12.9,15.6,17.1,26.2c3.1,8,6.8,20.1,7.9,42.4c1.1,24.1,1.3,31.3,1.3,92.2c0,60.9-0.2,68.1-1.3,92.2c-1,22.2-4.7,34.3-7.9,42.4 c-4.1,10.6-9.1,18.2-17.1,26.2c-8,8-15.6,12.9-26.2,17.1c-8,3.1-20.1,6.8-42.4,7.9c-24.1,1.1-31.3,1.3-92.2,1.3 c-60.9,0-68.1-0.2-92.2-1.3c-22.2-1-34.3-4.7-42.4-7.9c-10.6-4.1-18.2-9.1-26.2-17.1c-8-8-12.9-15.6-17.1-26.2 c-3.1-8-6.8-20.1-7.9-42.4c-1.1-24.1-1.3-31.3-1.3-92.2c0-60.9,0.2-68.1,1.3-92.2c1-22.2,4.7-34.3,7.9-42.4 c4.1-10.6,9.1-18.2,17.1-26.2c8-8,15.6-12.9,26.2-17.1c8-3.1,20.1-6.8,42.4-7.9C160,41.3,167.2,41.1,228.1,41.1 M228.1,0 c-62,0-69.7,0.3-94.1,1.4c-24.3,1.1-40.9,5-55.4,10.6c-15,5.8-27.7,13.6-40.4,26.3C25.6,51,17.8,63.7,12,78.7 c-5.6,14.5-9.5,31.1-10.6,55.4C0.3,158.4,0,166.2,0,228.1c0,62,0.3,69.7,1.4,94.1c1.1,24.3,5,40.9,10.6,55.4 c5.8,15,13.6,27.7,26.3,40.4c12.7,12.7,20.5-25.4,26.3-40.4c14.5,5.6,31.1,9.5,55.4,10.6c24.3,1.1,32.1,1.4,94.1,1.4 c62,0,69.7-0.3,94.1-1.4c24.3-1.1,40.9-5,55.4-10.6c15-5.8,27.7-13.6,40.4-26.3c12.7-12.7,20.5-25.4,26.3-40.4 c5.6-14.5,9.5-31.1,10.6-55.4c1.1-24.3,1.4-32.1,1.4-94.1c0-62-0.3-69.7-1.4-94.1c-1.1-24.3-5-40.9-10.6-55.4 c-5.8-15-13.6-27.7-26.3-40.4c-12.7-12.7-25.4-20.5-40.4-26.3c-14.5-5.6-31.1-9.5-55.4-10.6C297.9,0.3,290.1,0,228.1,0" />
      <path d="M228.1,111C163.4,111,111,163.4,111,228.1c0,64.7,52.5,117.2,117.2,117.2c64.7,0,117.2-52.4,117.2-117.2 C345.3,163.4,292.8,111,228.1,111 M228.1,304.2c-42,0-76-34-76-76c0-42,34-76,76-76c42,0,76,34,76,76 C304.2,270.1,270.1,304.2,228.1,304.2" />
      <path d="M377.3,106.4c0,15.1-12.3,27.4-27.4,27.4c-15.1,0-27.4-12.3-27.4-27.4c0-15.1,12.3-27.4,27.4-27.4 C365,79,377.3,91.2,377.3,106.4" />
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="-5.4 0.0 159.1 204.9" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M133.47,19.14a67.87,67.87,0,0,0-19.14-8.62L94.12,0H87.87V90.26a58.73,58.73,0,1,0,29.61,51V43.19c20.91,9,26.36,13.56,27.28,14.43l8.56,15.95.25-18.88C153.76,40.23,146.81,27.94,133.47,19.14Zm-19,12.14-6.76-2.76V141.26a48.94,48.94,0,1,1-18-37.91l8,6.54v-97l12.63,6.57.55.29.6.14a58.21,58.21,0,0,1,16.84,7.56c6.93,4.63,11.55,10.22,13.82,16.7A254.66,254.66,0,0,0,114.43,31.28Z" />
      <path d="M58.74,102.32a38.94,38.94,0,1,0,38.94,38.94A39,39,0,0,0,58.74,102.32Zm0,68.07a29.13,29.13,0,1,1,29.13-29.13A29.17,29.17,0,0,1,58.74,170.39Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 199.5 199.9" fill="currentColor" aria-hidden="true" className={className}>
      <path d="m183 0h-166.4c-9.2 0-16.6 7.5-16.6 16.6v166.7c0 9.2 7.5 16.6 16.6 16.6h166.3c9.2 0 16.6-7.5 16.6-16.6v-166.7c0.1-9.1-7.3-16.6-16.5-16.6zm-123.9 164.9h-29.5v-88.6h29.5v88.6zm-14.8-99.3c-9.3 0-16.8-7.5-16.8-16.8s7.5-16.8 16.8-16.8 16.8 7.5 16.8 16.8-7.5 16.8-16.8 16.8zm125.8 99.3h-29.6l-0.7-52.6s0.7-14-14.6-13.9-17.4 13.9-17.4 13.9v52.6h-29.8v-88.6h28.6v12.2s1.2-4 7.8-8.7 17.5-5.7 22.2-5.5 11.1-0.6 21.8 6.8c11.5 7.9 11.8 28.6 11.8 28.6l-0.1 55.2z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function BioProfileHeader() {
  const { profile, socials } = BIO_CONTENT;

  return (
    <div className="relative flex flex-col items-center text-center pt-2 sm:pt-4 pb-2">
      {/* Delicate Handwritten Calligraphy Accents (Desktop only) */}
      <div className="hidden sm:block absolute top-2 left-0 pointer-events-none select-none text-white/40 font-serif italic text-xs leading-tight text-left transform -rotate-6">
        Estratégia
        <br />
        Conteúdo
        <br />
        Resultados ♡
      </div>

      <Link
        href="/orcamento"
        className="hidden sm:block absolute top-2 right-0 text-white/50 hover:text-white font-serif italic text-xs leading-tight text-right transform rotate-6 transition-colors"
      >
        Vamos
        <br />
        conversar? ↗
      </Link>

      {/* Profile Photo with Floating Badge */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 mx-auto">
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-500/50 ring-4 ring-[#9400D3]/30 shadow-2xl">
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 640px) 112px, 128px"
          />
        </div>

        {/* Floating Pill Badge centered right under avatar */}
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#181028]/95 backdrop-blur-md px-3.5 py-1 rounded-full border border-purple-500/35 shadow-lg flex items-center gap-1.5 z-10 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-[#D444BC] shadow-[0_0_6px_#D444BC]" />
          <span className="text-[10.5px] sm:text-[11.5px] font-bold text-white tracking-wide">
            {profile.badgeText}
          </span>
        </div>
      </div>

      {/* Name with Verified Badge */}
      <div className="flex items-center justify-center gap-1.5 mt-2">
        <h1 className="font-heading font-black text-[26px] sm:text-[32px] text-white tracking-tight">
          {profile.name}
        </h1>
        {profile.verified && (
          <span className="w-5 h-5 rounded-full bg-[#9400D3] flex items-center justify-center text-white shadow-[0_0_10px_rgba(148,0,211,0.5)]">
            <Check className="w-3 h-3 stroke-[3]" />
          </span>
        )}
      </div>

      {/* Headline / Subtitle */}
      <div className="flex items-center gap-2 mt-1">
        <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#D444BC]/60" />
        <p className="text-[12px] sm:text-[13px] font-bold text-[#D444BC] tracking-wider uppercase">
          {profile.headline}
        </p>
        <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#D444BC]/60" />
      </div>

      {/* Short Bio */}
      <p className="text-[14px] sm:text-[15px] leading-relaxed text-white/80 max-w-[440px] mx-auto mt-2.5 px-2 font-normal">
        {profile.bio}
      </p>

      {/* Social Icons Row */}
      <div className="flex items-center justify-center gap-3 mt-5">
        {socials.map((social) => {
          let Icon = InstagramIcon;
          if (social.platform === "tiktok") Icon = TikTokIcon;
          if (social.platform === "linkedin") Icon = LinkedInIcon;
          if (social.platform === "youtube") Icon = YouTubeIcon;

          return (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 rounded-xl sm:rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D444BC]/60 shadow-md flex items-center justify-center text-white/90 hover:text-[#D444BC] transition-all hover:scale-105 active:scale-95 backdrop-blur-xs"
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
