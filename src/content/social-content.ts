export interface SocialHeroMockup {
  id: string;
  title: string;
  type: "reels" | "profile" | "photo" | "custom";
  imageUrl?: string; // Suporta imagem enviada no painel admin
  badge?: {
    text: string;
    highlight?: string;
  };
  data?: {
    handle?: string;
    sublabel?: string;
    postsCount?: string;
    followers?: string;
    following?: string;
    tag?: string;
  };
}

export interface SocialProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: "strategy" | "planning" | "copywriting" | "production" | "analytics";
}

export interface SocialFormatItem {
  id: string;
  title: string;
  description: string;
  iconName: "image" | "video" | "stories" | "carousel";
  tone: "lavender" | "magenta" | "white" | "deep-magenta";
}

export interface SocialProjectCase {
  id: string;
  client: string;
  description: string;
  href: string;
  coverTone: "violet" | "plum" | "lilac" | "wine";
  detail?: {
    eyebrow: string;
    title: string;
    summary: string;
    context: string;
    approach: string;
  };
}

export interface SocialMetricItem {
  value: string;
  label: string;
}

export const SOCIAL_CONTENT = {
  hero: {
    eyebrow: "SOCIAL MEDIA",
    title: "Estratégia que gera conexões.",
    subtitle:
      "Planejamento, criação e gestão de conteúdo para redes sociais, com posicionamento de marca, copywriting, artes e vídeos, tudo alinhado aos seus objetivos.",
    primaryCta: {
      label: "Fale comigo",
      href: "/orcamento",
    },
    secondaryCta: {
      label: "Ver projetos",
      href: "#projetos",
    },
    leftPhoneBadge: {
      text: "Conteúdo que atrai clientes reais.",
      stat: "1,4M",
    },
    rightPhoneBadge: {
      text: "Estratégia que gera resultado.",
    },
    mockups: [
      {
        id: "mockup-reels",
        title: "Reels & Vídeos Estratégicos",
        type: "reels",
        imageUrl: "", // Pode ser substituído por imagem real no painel admin
        badge: {
          text: "Conteúdo que atrai clientes reais.",
          highlight: "1,4M",
        },
        data: {
          tag: "Em alta",
          handle: "reels",
        },
      },
      {
        id: "mockup-profile",
        title: "Perfil & Posicionamento Oficial",
        type: "profile",
        imageUrl: "", // Pode ser substituído por imagem real no painel admin
        data: {
          handle: "tsvap.oficial",
          postsCount: "334",
          followers: "12,4 mil",
          following: "680",
        },
      },
      {
        id: "mockup-case",
        title: "Conteúdo & Autoridade de Marca",
        type: "photo",
        imageUrl: "/images/eloisa-cunha.jpg", // Pode ser substituído por imagem real no painel admin
        badge: {
          text: "Estratégia que gera resultado.",
          highlight: "M & S",
        },
        data: {
          handle: "eloisa.cunha",
          sublabel: "Marketing & Comunicação",
        },
      },
    ] as SocialHeroMockup[],
  },

  servicesBar: [
    { label: "Estratégia de conteúdo", icon: "target" as const },
    { label: "Copywriting estratégico", icon: "pencil" as const },
    { label: "Calendário e planejamento", icon: "calendar" as const },
    { label: "Criação de artes e vídeos", icon: "video" as const },
    { label: "Gestão e análise de resultados", icon: "chart" as const },
  ],

  process: {
    eyebrow: "COMO EU TRABALHO",
    title: "Do planejamento à performance.",
    subtitle:
      "Um processo completo para que seu conteúdo tenha propósito, consistência e gere resultados nas redes sociais.",
    cta: {
      label: "Conheça o processo",
      href: "/orcamento",
    },
    steps: [
      {
        step: "1. Estratégia",
        title: "Estratégia",
        description: "Entendimento da marca, público e objetivos.",
        iconName: "strategy",
      },
      {
        step: "2. Planejamento",
        title: "Planejamento",
        description: "Definição de pilares, calendário e formatos.",
        iconName: "planning",
      },
      {
        step: "3. Copywriting",
        title: "Copywriting",
        description:
          "Criação de legendas estratégicas que conectam e geram engajamento.",
        iconName: "copywriting",
      },
      {
        step: "4. Produção",
        title: "Produção",
        description: "Criação de artes, vídeos e elementos visuais.",
        iconName: "production",
      },
      {
        step: "5. Análise",
        title: "Análise",
        description: "Acompanhamento de resultados e otimizações.",
        iconName: "analytics",
      },
    ] as SocialProcessStep[],
  },

  formats: {
    eyebrow: "TIPOS DE CONTEÚDO",
    title: "Formatos que se conectam com seu público.",
    subtitle:
      "Conteúdos pensados para cada etapa da jornada, fortalecendo sua marca e aumentando o engajamento.",
    items: [
      {
        id: "posts",
        title: "Posts Estratégicos",
        description: "Artes informativas, educacionais e de posicionamento.",
        iconName: "image",
        tone: "lavender",
      },
      {
        id: "reels",
        title: "Reels e Vídeos",
        description: "Conteúdos audiovisuais que geram alcance e engajamento.",
        iconName: "video",
        tone: "magenta",
      },
      {
        id: "stories",
        title: "Stories",
        description:
          "Conexão diária, bastidores e interação com a audiência.",
        iconName: "stories",
        tone: "white",
      },
      {
        id: "carousels",
        title: "Carrosséis",
        description: "Conteúdos aprofundados para educar e gerar valor.",
        iconName: "carousel",
        tone: "deep-magenta",
      },
    ] as SocialFormatItem[],
  },

  copywriting: {
    eyebrow: "COPYWRITING",
    title: "Copywriting em destaque.",
    subtitle: "Conteúdo que conecta, convence e transforma.",
    postTitle: "Palavras certas criam conexões.",
    postSupport: "Mais que legendas, estratégia para aproximar sua marca das pessoas.",
    captionTitle: "Exemplo de legenda estratégica",
    caption: [
      "Uma boa legenda não apenas descreve. Ela desperta interesse, cria identificação e convida à ação.",
      "No digital, palavras têm poder: informam, envolvem e transformam seguidores em clientes.",
      "Cada legenda é pensada para falar com as pessoas certas e apoiar os objetivos da marca. Vamos transformar a comunicação da sua marca?",
    ],
    services: "Legendas estratégicas, tom de voz e CTAs.",
  },

  projects: {
    eyebrow: "PROJETOS",
    title: "Projetos em destaque.",
    subtitle:
      "Alguns dos trabalhos que desenvolvi envolvendo estratégia, conteúdo, copywriting e gestão de redes sociais.",
    items: [
      {
        id: "rvops",
        client: "Rvops",
        description:
          "Estratégia e gestão de redes sociais com foco em autoridade e geração de demanda.",
        href: "/social-midia/projetos/rvops",
        coverTone: "violet",
      },
      {
        id: "luz-da-luna",
        client: "Luz da Luna Joinville",
        description:
          "Conteúdo e posicionamento para fortalecer a marca no digital.",
        href: "/social-midia/projetos/luz-da-luna",
        coverTone: "plum",
        detail: {
          eyebrow: "PROJETO",
          title: "Luz da Luna Joinville.",
          summary:
            "Conteúdo e posicionamento para fortalecer a presença da marca no digital.",
          context:
            "Este case reúne a atuação em conteúdo e posicionamento digital para Luz da Luna Joinville.",
          approach:
            "A página será atualizada com o desafio, as peças aprovadas e a descrição das entregas assim que esse material for disponibilizado.",
        },
      },
      {
        id: "easycon",
        client: "EasyCon",
        description:
          "Planejamento e gestão de conteúdo para lançamentos e eventos.",
        href: "/social-midia/projetos/easycon",
        coverTone: "lilac",
      },
      {
        id: "bagueira",
        client: "Bagueira Seguros",
        description:
          "Conteúdo com foco em posicionamento e relacionamento com o público.",
        href: "/social-midia/projetos/bagueira",
        coverTone: "wine",
      },
    ] as SocialProjectCase[],
  },

  metrics: {
    eyebrow: "RESULTADOS",
    title: "Mais que conteúdo, resultados.",
    items: [
      {
        value: "+120%",
        label: "de aumento no alcance orgânico",
      },
      {
        value: "+5 mil",
        label: "novos seguidores em projetos",
      },
      {
        value: "3x",
        label: "mais engajamento em campanhas",
      },
      {
        value: "+50",
        label: "peças de conteúdo desenvolvidas",
      },
      {
        value: "+10",
        label: "marcas atendidas",
      },
      {
        value: "100%",
        label: "foco em estratégia e resultado",
      },
    ] as SocialMetricItem[],
  },
};
