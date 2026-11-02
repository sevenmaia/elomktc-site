"use strict";
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { HOME_CONTENT } from "@/content/home-content";

// Authentic Social SVG Icons from Eloisa's live website
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 456.4 456.3"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M228.1,41.1c60.9,0,68.1,0.2,92.2,1.3c22.2,1,34.3,4.7,42.4,7.9c10.6,4.1,18.2,9.1,26.2,17.1 c8,8,12.9,15.6,17.1,26.2c3.1,8,6.8,20.1,7.9,42.4c1.1,24.1,1.3,31.3,1.3,92.2c0,60.9-0.2,68.1-1.3,92.2c-1,22.2-4.7,34.3-7.9,42.4 c-4.1,10.6-9.1,18.2-17.1,26.2c-8,8-15.6,12.9-26.2,17.1c-8,3.1-20.1,6.8-42.4,7.9c-24.1,1.1-31.3,1.3-92.2,1.3 c-60.9,0-68.1-0.2-92.2-1.3c-22.2-1-34.3-4.7-42.4-7.9c-10.6-4.1-18.2-9.1-26.2-17.1c-8-8-12.9-15.6-17.1-26.2 c-3.1-8-6.8-20.1-7.9-42.4c-1.1-24.1-1.3-31.3-1.3-92.2c0-60.9,0.2-68.1,1.3-92.2c1-22.2,4.7-34.3,7.9-42.4 c4.1-10.6,9.1-18.2,17.1-26.2c8-8,15.6-12.9,26.2-17.1c8-3.1,20.1-6.8,42.4-7.9C160,41.3,167.2,41.1,228.1,41.1 M228.1,0 c-62,0-69.7,0.3-94.1,1.4c-24.3,1.1-40.9,5-55.4,10.6c-15,5.8-27.7,13.6-40.4,26.3C25.6,51,17.8,63.7,12,78.7 c-5.6,14.5-9.5,31.1-10.6,55.4C0.3,158.4,0,166.2,0,228.1c0,62,0.3,69.7,1.4,94.1c1.1,24.3,5,40.9,10.6,55.4 c5.8,15,13.6,27.7,26.3,40.4c12.7,12.7,25.4,20.5,40.4,26.3c14.5,5.6,31.1,9.5,55.4,10.6c24.3,1.1,32.1,1.4,94.1,1.4 c62,0,69.7-0.3,94.1-1.4c24.3-1.1,40.9-5,55.4-10.6c15-5.8,27.7-13.6,40.4-26.3c12.7-12.7,20.5-25.4,26.3-40.4 c5.6-14.5,9.5-31.1,10.6-55.4c1.1-24.3,1.4-32.1,1.4-94.1c0-62-0.3-69.7-1.4-94.1c-1.1-24.3-5-40.9-10.6-55.4 c-5.8-15-13.6-27.7-26.3-40.4c-12.7-12.7-25.4-20.5-40.4-26.3c-14.5-5.6-31.1-9.5-55.4-10.6C297.9,0.3,290.1,0,228.1,0" />
      <path d="M228.1,111C163.4,111,111,163.4,111,228.1c0,64.7,52.5,117.2,117.2,117.2c64.7,0,117.2-52.4,117.2-117.2 C345.3,163.4,292.8,111,228.1,111 M228.1,304.2c-42,0-76-34-76-76c0-42,34-76,76-76c42,0,76,34,76,76 C304.2,270.1,270.1,304.2,228.1,304.2" />
      <path d="M377.3,106.4c0,15.1-12.3,27.4-27.4,27.4c-15.1,0-27.4-12.3-27.4-27.4c0-15.1,12.3-27.4,27.4-27.4 C365,79,377.3,91.2,377.3,106.4" />
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="-5.4 0.0 159.1 204.9"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M133.47,19.14a67.87,67.87,0,0,0-19.14-8.62L94.12,0H87.87V90.26a58.73,58.73,0,1,0,29.61,51V43.19c20.91,9,26.36,13.56,27.28,14.43l8.56,15.95.25-18.88C153.76,40.23,146.81,27.94,133.47,19.14Zm-19,12.14-6.76-2.76V141.26a48.94,48.94,0,1,1-18-37.91l8,6.54v-97l12.63,6.57.55.29.6.14a58.21,58.21,0,0,1,16.84,7.56c6.93,4.63,11.55,10.22,13.82,16.7A254.66,254.66,0,0,0,114.43,31.28Z" />
      <path d="M58.74,102.32a38.94,38.94,0,1,0,38.94,38.94A39,39,0,0,0,58.74,102.32Zm0,68.07a29.13,29.13,0,1,1,29.13-29.13A29.17,29.17,0,0,1,58.74,170.39Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 199.5 199.9"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="m183 0h-166.4c-9.2 0-16.6 7.5-16.6 16.6v166.7c0 9.2 7.5 16.6 16.6 16.6h166.3c9.2 0 16.6-7.5 16.6-16.6v-166.7c0.1-9.1-7.3-16.6-16.5-16.6zm-123.9 164.9h-29.5v-88.6h29.5v88.6zm-14.8-99.3c-9.3 0-16.8-7.5-16.8-16.8s7.5-16.8 16.8-16.8 16.8 7.5 16.8 16.8-7.5 16.8-16.8 16.8zm125.8 99.3h-29.6l-0.7-52.6s0.7-14-14.6-13.9-17.4 13.9-17.4 13.9v52.6h-29.8v-88.6h28.6v12.2s1.2-4 7.8-8.7 17.5-5.7 22.2-5.5 11.1-0.6 21.8 6.8c11.5 7.9 11.8 28.6 11.8 28.6l-0.1 55.2z" />
    </svg>
  );
}

export function SiteFooter() {
  const pathname = usePathname();
  const { footer, header } = HOME_CONTENT;

  // Hide public footer on admin and bio pages
  if (pathname?.startsWith("/admin") || pathname === "/bio") {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      aria-label="Rodapé do site"
      className="bg-[#0B0B0F] text-white pt-16 pb-12 border-t border-[#1C1B24]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-14 border-b border-[#22202C]">
          {/* Brand & Positioning */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-1.5">
              <Image
                src="/images/logo-icon.png"
                alt="Logo Eloisa Cunha"
                width={26}
                height={26}
                className="w-6 h-6 rounded-full object-contain"
              />
              <span className="font-heading font-extrabold text-[24px] tracking-tight text-white">
                {footer.brandName}
              </span>
            </div>
            <span className="text-[14px] text-[#A40DDB] font-semibold mb-4">
              {footer.brandSubtitle}
            </span>
            <p className="text-[14px] text-[#8C8899] max-w-[340px] leading-relaxed mb-6">
              Estratégia, conteúdo e posicionamento para marcas que querem gerar conexões e resultados reais.
            </p>

            {/* Authentic Social Icons from client */}
            <div className="flex items-center gap-3 text-white/80">
              <a
                href="https://www.instagram.com/elo.mktc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Eloisa Cunha"
                className="w-9 h-9 rounded-full bg-[#181720] hover:bg-[#A40DDB] flex items-center justify-center transition-colors text-white"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@elo.mktc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok de Eloisa Cunha"
                className="w-9 h-9 rounded-full bg-[#181720] hover:bg-[#A40DDB] flex items-center justify-center transition-colors text-white"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href="http://www.linkedin.com/in/elo%C3%ADsa-cunha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Eloisa Cunha"
                className="w-9 h-9 rounded-full bg-[#181720] hover:bg-[#A40DDB] flex items-center justify-center transition-colors text-white"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#6C677A] mb-4">
              Navegação
            </p>
            <ul className="grid grid-cols-2 gap-2.5 text-[14px]">
              {header.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#B5B0C2] hover:text-[#C677E0] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/orcamento"
                  className="text-[#A40DDB] hover:text-[#C677E0] font-semibold transition-colors"
                >
                  Orçamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#6C677A] mb-4">
              Contato Direto
            </p>
            <div className="flex flex-col gap-2.5 text-[14px] text-[#B5B0C2]">
              <a
                href={`mailto:${footer.email}`}
                className="hover:text-white transition-colors"
              >
                {footer.email}
              </a>
              <a
                href={footer.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A40DDB] transition-colors font-medium"
              >
                WhatsApp: {footer.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#716C7E]">
          <p>{footer.copyright}</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacidade"
              className="hover:text-white transition-colors"
            >
              Privacidade & Termos
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus-visible:outline-none"
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
