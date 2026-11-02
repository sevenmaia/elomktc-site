"use strict";
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
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

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dynamic theme adaptation: /videos has a dark #0A0910 hero background
  const isDarkTheme = pathname === "/videos";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  // Hide public header on admin and bio pages
  if (pathname?.startsWith("/admin") || pathname === "/bio") {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? isDarkTheme
            ? "bg-[#0A0910]/95 backdrop-blur-md shadow-sm border-b border-[#222030]/60 py-3"
            : "bg-[#EBD2FA]/95 backdrop-blur-md shadow-sm border-b border-[#E0B8F5]/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Left side: Brand Logo + Desktop Navigation */}
        <div className="flex items-center gap-6 lg:gap-9">
          {/* Brand Logo & Name (visible on both Desktop and Mobile) */}
          <Link
            href="/"
            className={`flex items-center gap-2.5 text-[17px] sm:text-[18px] font-heading font-black tracking-tight hover:opacity-90 transition-opacity flex-shrink-0 ${
              isDarkTheme ? "text-white" : "text-[#14121E]"
            }`}
          >
            <Image
              src="/images/logo-icon.png"
              alt="Logo Eloisa Cunha"
              width={28}
              height={28}
              className="w-7 h-7 rounded-full object-contain shadow-xs"
            />
            <span>Eloisa Cunha</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden md:flex items-center gap-3.5 lg:gap-7 text-[13px] lg:text-[14px] font-semibold tracking-tight ${
              isDarkTheme ? "text-white/80" : "text-[#1F1D2B]"
            }`}
            aria-label="Navegação principal"
          >
            {HOME_CONTENT.header.navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-150 ${
                    isActive
                      ? isDarkTheme
                        ? "text-white font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#A40DDB] after:rounded-full"
                        : "text-[#1F1D2B] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#A40DDB] after:rounded-full"
                      : isDarkTheme
                      ? "text-white/70 hover:text-[#C677E0]"
                      : "text-[#3D3A49] hover:text-[#A40DDB]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right side: Real Social Icons (Desktop only) & CTA */}
        <div className="flex items-center gap-2.5 sm:gap-6">
          {/* Social icons: visible on lg screens and up to give space on tablet */}
          <div className={`hidden lg:flex items-center gap-3 ${isDarkTheme ? "text-white/80" : "text-[#1F1D2B]"}`}>
            <a
              href="https://www.instagram.com/elo.mktc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Eloisa Cunha"
              className={`p-1.5 rounded-full hover:text-[#A40DDB] transition-colors ${
                isDarkTheme ? "hover:bg-white/10" : "hover:bg-[#A40DDB]/10"
              }`}
            >
              <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@elo.mktc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Eloisa Cunha"
              className={`p-1.5 rounded-full hover:text-[#A40DDB] transition-colors ${
                isDarkTheme ? "hover:bg-white/10" : "hover:bg-[#A40DDB]/10"
              }`}
            >
              <TikTokIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="http://www.linkedin.com/in/elo%C3%ADsa-cunha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Eloisa Cunha"
              className={`p-1.5 rounded-full hover:text-[#A40DDB] transition-colors ${
                isDarkTheme ? "hover:bg-white/10" : "hover:bg-[#A40DDB]/10"
              }`}
            >
              <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          {/* CTA Button */}
          <Link
            href="/orcamento"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#A40DDB] hover:bg-[#8F08C0] active:scale-[0.98] text-white text-[13px] sm:text-[14px] font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all shadow-sm group"
          >
            <span>Fale comigo</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          {/* Hamburger toggle for mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-1.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A40DDB] ${
              isDarkTheme
                ? "text-white hover:bg-white/10"
                : "text-[#1F1D2B] hover:bg-[#A40DDB]/10"
            }`}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu móvel"
          className="md:hidden fixed inset-0 top-[60px] bg-[#0B0B0F]/95 backdrop-blur-xl z-40 p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2.5 pb-4 mb-2 border-b border-[#2C2932]">
              <Image
                src="/images/logo-icon.png"
                alt="Logo Eloisa Cunha"
                width={28}
                height={28}
                className="w-7 h-7 rounded-full object-contain"
              />
              <span className="text-[18px] font-heading font-black text-white tracking-tight">
                Eloisa Cunha
              </span>
            </div>

            <nav className="flex flex-col gap-3 pt-2">
              {HOME_CONTENT.header.navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-black py-2.5 border-b border-[#2C2932] tracking-tight transition-colors ${
                    isActive ? "text-[#C677E0]" : "text-white hover:text-[#EBD2FA]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

          <div className="pt-6 border-t border-[#2C2932] flex flex-col gap-4">
            <Link
              href="/orcamento"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 bg-[#A40DDB] text-white font-bold rounded-lg text-base"
            >
              Fale comigo no WhatsApp
            </Link>
            <div className="flex justify-center gap-6 pt-2 text-white/70">
              <a
                href="https://www.instagram.com/elo.mktc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@elo.mktc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-6 h-6" />
              </a>
              <a
                href="http://www.linkedin.com/in/elo%C3%ADsa-cunha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
