export interface VideoCatalogItem {
  id: string;
  title: string;
  category: "Evento" | "Cobertura" | "Institucional" | "Depoimento" | "Bastidores" | "Entrevista" | "Palestra";
  orientation: "vertical" | "horizontal";
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  description?: string;
}

export interface VideoFormatCard {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  filterKey: "vertical" | "horizontal";
  previewImage: string;
  iconName: "smartphone" | "monitor";
}

export const VIDEOS_CONTENT = {
  hero: {
    eyebrow: "VÍDEOS",
    title: "Narrativas que conectam pessoas.",
    subtitle:
      "Produção e edição de vídeos estratégicos para comunicar ideias, fortalecer marcas e transformar mensagens em experiências reais.",
    primaryCta: {
      label: "Fale comigo",
      href: "/orcamento",
    },
    secondaryCta: {
      label: "Ver meus projetos",
      href: "#todos-os-videos",
    },
    annotations: {
      vertical: "Vídeos verticais para redes sociais",
      horizontal: "Vídeos horizontais para eventos, cases e conteúdos longos",
    },
  },

  servicesBar: {
    title: "Vídeos para diferentes objetivos.",
    subtitle:
      "Estratégia, roteiro, captação e edição para conteúdos que geram conexão, engajamento e resultados.",
    chips: [
      "Estratégia e roteiro",
      "Captação",
      "Edição e pós-produção",
      "Conteúdo para redes",
      "Eventos e coberturas",
    ],
  },

  formats: {
    title: "Tipos de formatos.",
    subtitle:
      "Produzo vídeos nos formatos ideais para cada canal e objetivo, com adaptações de roteiro, linguagem e edição.",
    cards: [
      {
        id: "verticais",
        title: "Vídeos verticais",
        description:
          "Reels, Tiktok, Shorts e stories com foco em descoberta, engajamento e conversão.",
        ctaLabel: "Ver exemplos",
        filterKey: "vertical",
        previewImage: "/images/videos/format-vertical-phones.webp",
        iconName: "smartphone",
      },
      {
        id: "horizontais",
        title: "Vídeos horizontais",
        description:
          "Para YouTube, eventos, cases, palestras e conteúdos mais completos que posicionam sua marca.",
        ctaLabel: "Ver exemplos",
        filterKey: "horizontal",
        previewImage: "/images/videos/format-horizontal-player.webp",
        iconName: "monitor",
      },
    ] as VideoFormatCard[],
  },

  catalog: {
    title: "Todos os vídeos.",
    categories: [
      "Todos os projetos",
      "Evento",
      "Cobertura",
      "Institucional",
      "Depoimento",
      "Bastidores",
      "Entrevista",
      "Palestra",
    ],
    items: [
      {
        id: "1",
        title: "Implantação autônoma com IA",
        category: "Evento",
        orientation: "horizontal",
        duration: "01:28",
        thumbnail: "/images/videos/video-thumb-1.webp",
        description: "Painel executivo sobre IA e estratégias autônomas de negócios.",
      },
      {
        id: "2",
        title: "Cobertura evento Cortex",
        category: "Cobertura",
        orientation: "horizontal",
        duration: "02:14",
        thumbnail: "/images/videos/video-thumb-2.webp",
        description: "Cobertura dinâmica com melhores momentos e engajamento da plenária.",
      },
      {
        id: "3",
        title: "Story institucional",
        category: "Institucional",
        orientation: "horizontal",
        duration: "00:58",
        thumbnail: "/images/videos/video-thumb-3.webp",
        description: "Vídeo manifesto de marca com estética cinematográfica e tom inspirador.",
      },
      {
        id: "4",
        title: "Depoimentos e cases reais",
        category: "Depoimento",
        orientation: "horizontal",
        duration: "01:36",
        thumbnail: "/images/videos/video-thumb-4.webp",
        description: "Entrevistas reais com participantes e clientes gerando prova social.",
      },
      {
        id: "5",
        title: "Lançamento de marca",
        category: "Institucional",
        orientation: "horizontal",
        duration: "02:33",
        thumbnail: "/images/videos/video-thumb-5.webp",
        description: "Vídeo de apresentação e posicionamento para novos produtos e serviços.",
      },
      {
        id: "6",
        title: "Bastidores do evento",
        category: "Bastidores",
        orientation: "horizontal",
        duration: "01:17",
        thumbnail: "/images/videos/video-thumb-6.webp",
        description: "Tom descontraído de bastidores com dinamismo e conexão humana.",
      },
      {
        id: "7",
        title: "Painel: inovação e mercado",
        category: "Evento",
        orientation: "horizontal",
        duration: "01:09",
        thumbnail: "/images/videos/video-thumb-7.webp",
        description: "Debate com líderes sobre tendências e futuro do marketing.",
      },
      {
        id: "8",
        title: "Entrevistas no evento",
        category: "Entrevista",
        orientation: "horizontal",
        duration: "01:45",
        thumbnail: "/images/videos/video-thumb-8.webp",
        description: "Captação rápida de insights nos corredores do evento corporativo.",
      },
      {
        id: "9",
        title: "Palestra: estratégia e branding",
        category: "Palestra",
        orientation: "horizontal",
        duration: "02:27",
        thumbnail: "/images/videos/video-thumb-9.webp",
        description: "Apresentação de case prático sobre construção de valor de marca.",
      },
    ] as VideoCatalogItem[],
  },
};
