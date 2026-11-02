import { Metadata } from "next";
import { BioProfileHeader } from "@/components/bio/BioProfileHeader";
import { BioPrimaryActions } from "@/components/bio/BioPrimaryActions";
import { BioLinksList } from "@/components/bio/BioLinksList";
import { BioFeaturedProjects } from "@/components/bio/BioFeaturedProjects";
import { BioBottomBanner } from "@/components/bio/BioBottomBanner";
import { BioFooter } from "@/components/bio/BioFooter";

export const metadata: Metadata = {
  title: "Eloisa Cunha | Link na Bio - Marketing & Comunicação",
  description:
    "Estratégia, conteúdo e posicionamento para marcas que querem gerar conexão e resultados reais. Acesse contatos, portfólio, vídeos e artigos de Eloisa Cunha.",
  openGraph: {
    title: "Eloisa Cunha | Marketing & Comunicação",
    description:
      "Estratégia, conteúdo e posicionamento para marcas reais. Acesse todos os canais e projetos.",
    url: "https://eloisacunha.com.br/bio",
  },
};

export default function BioPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0B0813] bg-[url('/images/bio-background.webp')] bg-cover bg-[center_top] bg-no-repeat relative py-8 sm:py-12">
      {/* Main Centered Mobile-First Column */}
      <main className="max-w-[620px] mx-auto px-5 sm:px-6 relative z-10 w-full box-border">
        {/* 1. Profile Header with Photo, Name, Verified Badge, Accents & Socials */}
        <BioProfileHeader />

        {/* 2. Primary CTAs (WhatsApp & Agendar Conversa) */}
        <BioPrimaryActions />

        {/* 3. Navigation Links List */}
        <BioLinksList />

        {/* 4. Featured Projects (3 Cards with mobile touch carousel) */}
        <BioFeaturedProjects />

        {/* 5. Bottom Editorial Banner */}
        <BioBottomBanner />

        {/* 6. Footer */}
        <BioFooter />
      </main>
    </div>
  );
}
