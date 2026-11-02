import { Metadata } from "next";
import { HeroSitesSection } from "@/components/sites/HeroSitesSection";
import { SitesBenefitsBar } from "@/components/sites/SitesBenefitsBar";
import { SitesProjectsSection } from "@/components/sites/SitesProjectsSection";
import { SitesSeoSection } from "@/components/sites/SitesSeoSection";
import { SitesProcessSection } from "@/components/sites/SitesProcessSection";
import { ContactBanner } from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "Sites, Landing Pages e SEO | Eloisa Cunha — Marketing & Comunicação",
  description:
    "Criação de sites e landing pages com copywriting orientado por SEO on-page, off-page, técnico e GEO, alinhado aos objetivos da marca e à experiência do usuário.",
  openGraph: {
    title: "Sites, Landing Pages e SEO | Eloisa Cunha",
    description:
      "Confira projetos reais de sites e landing pages com foco em copywriting estratégico e conteúdo orientado por SEO.",
    url: "https://elomktc.com/sites",
    images: [
      {
        url: "/images/sites/bagueira-case.webp",
        width: 1200,
        height: 630,
        alt: "Sites e Landing Pages - Eloisa Cunha",
      },
    ],
  },
};

export default function SitesPage() {
  return (
    <main className="w-full min-h-screen bg-white text-[#14121E] selection:bg-[#A40DDB] selection:text-white">
      {/* 1. Hero com Fundo Lavanda, Mockup de Laptop e Badges Flutuantes */}
      <HeroSitesSection />

      {/* 2. Faixa de Benefícios (5 Pilares / Soluções) */}
      <SitesBenefitsBar />

      {/* 3. Seção Projetos em Destaque (Case Principal Bagueira Seguros + 3 Cases Secundários) */}
      <SitesProjectsSection />

      {/* 4. Estratégia de Conteúdo / Diagrama Central de SEO & GEO */}
      <SitesSeoSection />

      {/* 5. Processo de Execução (4 Fases Estratégicas) */}
      <SitesProcessSection />

      {/* 6. Banner de Contato & Conversão Final */}
      <ContactBanner />
    </main>
  );
}
