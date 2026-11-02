import { Metadata } from "next";
import { HeroArticlesSection } from "@/components/articles/HeroArticlesSection";
import { ArticlesGridSection } from "@/components/articles/ArticlesGridSection";
import { ContactBanner } from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "Artigos & Portfólio de Copywriting | Eloisa Cunha",
  description:
    "Textos que conectam e convertem. Copywriting estratégico para sites, landing pages, campanhas, redes sociais e artigos de autoridade por Eloisa Cunha.",
  openGraph: {
    title: "Artigos & Portfólio de Copywriting | Eloisa Cunha",
    description:
      "Copywriting estratégico para marcas reais: sites, landing pages, campanhas e conteúdos de alto impacto.",
    url: "https://eloisacunha.com.br/artigos",
  },
};

export default function ArtigosPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section with Laptop and Smartphone Mockups */}
      <HeroArticlesSection />

      {/* 2. Interactive Filter Bar and 2-Column Responsive Card Grid */}
      <ArticlesGridSection />

      {/* 3. Global Canonical Contact CTA Banner */}
      <ContactBanner />
    </main>
  );
}