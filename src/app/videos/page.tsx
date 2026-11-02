import { Metadata } from "next";
import { HeroVideoSection } from "@/components/videos/HeroVideoSection";
import { VideosServicesBar } from "@/components/videos/VideosServicesBar";
import { VideosFormatsSection } from "@/components/videos/VideosFormatsSection";
import { VideosCatalogSection } from "@/components/videos/VideosCatalogSection";
import { ContactBanner } from "@/components/ContactBanner";

export const metadata: Metadata = {
  title: "Vídeos e Audiovisual | Eloisa Cunha — Marketing & Comunicação",
  description:
    "Produção e edição de vídeos estratégicos para comunicar ideias, fortalecer marcas e transformar mensagens em experiências reais (9:16 e 16:9).",
  openGraph: {
    title: "Vídeos e Audiovisual | Eloisa Cunha",
    description:
      "Produção, captação, roteiro e edição de vídeos verticais e horizontais para eventos, cases e redes sociais.",
    url: "https://elomktc.com/videos",
    images: [
      {
        url: "/images/videos/video-thumb-1.webp",
        width: 1200,
        height: 630,
        alt: "Vídeos - Eloisa Cunha",
      },
    ],
  },
};

export default function VideosPage() {
  return (
    <main className="w-full min-h-screen bg-[#0A0910] text-white selection:bg-[#A40DDB] selection:text-white">
      {/* 1. Hero com Composição Dupla (Vertical 9:16 + Horizontal 16:9) */}
      <HeroVideoSection />

      {/* 2. Faixa Lavanda com 5 Objetivos e Pilares */}
      <VideosServicesBar />

      {/* 3. Seção Tipos de Formatos (Cards Verticais e Horizontais) */}
      <VideosFormatsSection />

      {/* 4. Catálogo de Todos os Vídeos com Filtro e Player Modal */}
      <VideosCatalogSection />

      {/* 5. CTA Final Padrão com Fundo Lavanda */}
      <ContactBanner />
    </main>
  );
}
