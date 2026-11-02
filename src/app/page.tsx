import React from "react";
import { HeroCentered } from "@/components/HeroCentered";
import { ToolsBar } from "@/components/ToolsBar";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FolderProjectsSection } from "@/components/FolderProjectsSection";
import { ContactBanner } from "@/components/ContactBanner";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Lavanda Centralizada (SEM imagem, tipografia pura) */}
      <HeroCentered />

      {/* 2. Faixa de Ferramentas (Preto total com logos) */}
      <ToolsBar />

      {/* 3. Sobre Mim (Fundo branco, foto real de Eloisa, indicadores) */}
      <AboutSection />

      {/* 4. Soluções / Serviços (Fundo preto, 6 cards com ícones) */}
      <ServicesSection />

      {/* 5. Meus Projetos (4 cards em formato de PASTA com abas recortadas) */}
      <FolderProjectsSection />

      {/* 6. CTA Final (Fundo lavanda, Vamos Conversar?) */}
      <ContactBanner />
    </>
  );
}
