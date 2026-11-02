import { Metadata } from "next";
import { HeroAboutSection } from "@/components/about/HeroAboutSection";
import { AboutStatsBar } from "@/components/about/AboutStatsBar";
import { AboutProfileSkillsSection } from "@/components/about/AboutProfileSkillsSection";
import { AboutTimelineSection } from "@/components/about/AboutTimelineSection";
import { AboutCredentialsSection } from "@/components/about/AboutCredentialsSection";
import { AboutFeaturedProjectsSection } from "@/components/about/AboutFeaturedProjectsSection";
import { ContactBanner } from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "Sobre mim | Eloisa Cunha — Marketing & Comunicação",
  description:
    "Conheça a trajetória profissional, competências estratégicas, formação acadêmica e experiências de Eloisa Cunha em Marketing 360°, GTM, SEO e Conteúdo.",
  openGraph: {
    title: "Sobre mim | Eloisa Cunha — Marketing & Comunicação",
    description:
      "Conheça a trajetória profissional, competências estratégicas e experiências de Eloisa Cunha em Marketing e Comunicação.",
    url: "https://elomktc.com/sobre-mim",
    type: "profile",
    images: [
      {
        url: "/images/eloisa-cunha.jpg",
        width: 800,
        height: 1000,
        alt: "Eloisa Cunha - Marketing & Comunicação",
      },
    ],
  },
};

export default function SobreMimPage() {
  return (
    <main className="w-full min-h-screen bg-[#FFFFFF] text-[#0B0B0F] selection:bg-[#A40DDB] selection:text-white">
      {/* 1. Hero Section with authentic photo, contacts & CV download */}
      <HeroAboutSection />

      {/* 2. Horizontal Stats / Metrics Bar */}
      <AboutStatsBar />

      {/* 3. Perfil Profissional & Competências com barras de progresso */}
      <AboutProfileSkillsSection />

      {/* 4. Minha Trajetória (Linha do tempo cronológica com experiências reais) */}
      <AboutTimelineSection />

      {/* 5. Formação Acadêmica, Idiomas e Ferramentas que utilizo */}
      <AboutCredentialsSection />

      {/* 6. Projetos em Destaque (Folder Cards) */}
      <AboutFeaturedProjectsSection />

      {/* 7. CTA Final Padrão */}
      <ContactBanner />
    </main>
  );
}
