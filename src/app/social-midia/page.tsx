import { Metadata } from "next";
import { HeroSocialMedia } from "@/components/social/HeroSocialMedia";
import { SocialServicesBar } from "@/components/social/SocialServicesBar";
import { SocialProcessSection } from "@/components/social/SocialProcessSection";
import { SocialFormatsSection } from "@/components/social/SocialFormatsSection";
import { SocialCopywritingSection } from "@/components/social/SocialCopywritingSection";
import { SocialProjectsSection } from "@/components/social/SocialProjectsSection";
import { SocialMetricsSection } from "@/components/social/SocialMetricsSection";
import { ContactBanner } from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "Social Mídia & Copywriting | Eloisa Cunha — Marketing & Comunicação",
  description:
    "Planejamento, criação e gestão de conteúdo para redes sociais, com posicionamento de marca, copywriting estratégico, artes e vídeos alinhados a resultados reais.",
  openGraph: {
    title: "Social Mídia & Copywriting | Eloisa Cunha",
    description:
      "Planejamento, criação e gestão estratégica de redes sociais, copywriting e autoridade digital.",
    url: "https://elomktc.com/social-midia",
    images: [
      {
        url: "/images/eloisa-cunha.jpg",
        width: 800,
        height: 1000,
        alt: "Social Mídia - Eloisa Cunha",
      },
    ],
  },
};

export default function SocialMidiaPage() {
  return (
    <main className="w-full min-h-screen bg-[#FFFFFF] text-[#0B0B0F] selection:bg-[#A40DDB] selection:text-white">
      {/* 1. Hero com Composição de Smartphones, Chamada e CTAs */}
      <HeroSocialMedia />

      {/* 2. Faixa Horizontal de Especialidades */}
      <SocialServicesBar />

      {/* 3. Seção Escura: Do Planejamento à Performance (5 Etapas) */}
      <SocialProcessSection />

      {/* 4. Seção Clara: Formatos que Conectam (Folder Cards) */}
      <SocialFormatsSection />

      {/* 5. Seção Clara: Exemplo de Copywriting */}
      <SocialCopywritingSection />

      {/* 6. Seção Escura: Projetos em Destaque */}
      <SocialProjectsSection />

      {/* 7. Seção de Resultados e Indicadores */}
      <SocialMetricsSection />

      {/* 8. CTA Final Padrão */}
      <ContactBanner />
    </main>
  );
}
