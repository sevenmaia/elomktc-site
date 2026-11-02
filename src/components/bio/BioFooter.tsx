"use client";

import React from "react";
import { MapPin, Mail } from "lucide-react";
import { BIO_CONTENT } from "@/content/bio-content";

export function BioFooter() {
  const { footer } = BIO_CONTENT;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-6 pb-12 text-center text-white/50 text-xs border-t border-white/10 mt-6">
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5 flex-wrap">
        <span className="inline-flex items-center gap-1.5 font-medium text-white/70">
          <MapPin className="w-3.5 h-3.5 text-[#D444BC]" />
          {footer.location}
        </span>
        <span className="text-white/20">&bull;</span>
        <a
          href={`mailto:${footer.email}`}
          className="inline-flex items-center gap-1.5 font-medium text-white/70 hover:text-[#D444BC] transition-colors"
        >
          <Mail className="w-3.5 h-3.5 text-[#D444BC]" />
          {footer.email}
        </a>
      </div>

      <p className="text-[11.5px] text-white/40 font-sans">
        &copy; {currentYear} Eloisa Cunha. Todos os direitos reservados.
      </p>
    </footer>
  );
}
