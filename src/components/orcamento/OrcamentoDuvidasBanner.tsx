import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

export function OrcamentoDuvidasBanner() {
  const whatsappHref =
    "https://wa.me/5511947851293?text=Ol%C3%A1%20Eloisa,%20ainda%20estou%20com%20d%C3%BAvidas%20sobre%20os%20servi%C3%A7os%20e%20gostaria%20de%20conversar!";

  return (
    <section
      aria-label="Ainda está com dúvidas? Chame no WhatsApp"
      className="bg-gradient-to-r from-[#F0DCFA] via-[#E4BDF8] to-[#DCABF5] text-[#0B0B0F] py-12 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-16">
          {/* Left: Eyebrow + Heading */}
          <div className="w-full lg:max-w-[580px]">
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#4F2169] mb-3">
              AINDA COM DÚVIDAS?
            </p>
            <h2 className="font-heading font-extrabold text-[32px] min-[375px]:text-[36px] sm:text-[44px] lg:text-[54px] leading-[1.08] lg:leading-[1.05] tracking-[-0.03em] text-[#0B0B0F]">
              Ainda está com dúvidas<span className="text-[#9400D3]">?.</span>
              <br />
              Me chame no WhatsApp.
            </h2>
          </div>

          {/* Right: Description & WhatsApp CTA Button */}
          <div className="w-full lg:max-w-[480px] flex flex-col items-start lg:items-end">
            <p className="font-sans text-[15px] sm:text-[16.5px] leading-[1.5] text-[#2C2735] text-left mb-6">
              Se preferir tirar dúvidas antes de enviar o briefing ou quiser falar diretamente sobre o seu projeto, estou à disposição para conversar.
            </p>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0B0B0F] hover:bg-[#201F29] active:scale-[0.98] text-white text-[13px] sm:text-[14px] font-bold tracking-[0.08em] uppercase px-8 sm:px-10 min-h-[56px] rounded-xl transition-all duration-200 shadow-md group cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#D444BC]" />
              <span>Chamar no WhatsApp</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
