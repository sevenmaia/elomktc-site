export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  model?: string; // e.g. "Remoto"
  bullets: string[];
}

export interface CompetencyGroup {
  title: string;
  iconName: "strategy" | "content" | "growth" | "operations";
  items: string[];
}

export interface LanguageItem {
  language: string;
  level: string;
  percentage: number;
}

export interface ToolItem {
  name: string;
  category?: string;
  icon?: string;
}

export const ABOUT_CONTENT = {
  hero: {
    eyebrow: "ELOISA CUNHA | MARKETING & COMUNICAÇÃO",
    title: "Eloisa Cunha.",
    subtitle: "Marketing & Comunicação",
    intro:
      "Conecto estratégia, conteúdo e criatividade para aproximar marcas dos seus públicos e gerar resultados reais nos negócios B2B e B2C.",
    contacts: {
      phone: "(11) 94785 - 1293",
      phoneHref: "https://wa.me/5511947851293",
      email: "elo.mktc@gmail.com",
      emailHref: "mailto:elo.mktc@gmail.com",
    },
    primaryCta: {
      label: "Fale comigo",
      href: "/orcamento",
    },
    secondaryCta: {
      label: "Baixar currículo",
      href: "/cv-eloisa-cunha.pdf",
    },
    floatingBadge: {
      text: "Estratégia que conecta pessoas.",
    },
  },

  stats: [
    {
      value: "+5 anos",
      label: "de experiência no mercado",
      iconName: "Users" as const,
    },
    {
      value: "B2B e B2C",
      label: "estratégias que geram resultado",
      iconName: "TrendingUp" as const,
    },
    {
      value: "360°",
      label: "da estratégia à execução",
      iconName: "Target" as const,
    },
    {
      value: "50+",
      label: "projetos e marcas atendidas",
      iconName: "Star" as const,
    },
  ],

  profile: {
    eyebrow: "SOBRE MIM",
    title: "Perfil profissional.",
    paragraphs: [
      "Com mais de 5 anos de atuação em Marketing e Comunicação, desenvolvo estratégias de marketing 360° e Go-to-Market (GTM), conectando posicionamento de marca, geração de demanda e objetivos de negócio.",
      "Combino visão estratégica, capacidade analítica e foco em resultados para fortalecer marcas, identificar oportunidades de crescimento e impulsionar aquisição, conversão e retenção.",
    ],
  },

  skills: {
    title: "Competências principais",
    groups: [
      {
        title: "Estratégia",
        iconName: "strategy",
        items: [
          "Planejamento Estratégico",
          "GTM",
          "Posicionamento",
          "Geração de Demanda",
        ],
      },
      {
        title: "Conteúdo & Marca",
        iconName: "content",
        items: [
          "Copywriting",
          "Produção de Conteúdo",
          "Autoridade de Marca",
          "Comunicação Integrada",
        ],
      },
      {
        title: "Growth & Performance",
        iconName: "growth",
        items: [
          "SEO",
          "GEO",
          "CRM",
          "Automação",
          "Mídia Paga",
          "Análise de Performance",
        ],
      },
      {
        title: "Operação & Gestão",
        iconName: "operations",
        items: [
          "Gestão de Projetos",
          "Gestão de Eventos",
          "Gestão de Redes Sociais",
          "Gestão de Marketplace",
        ],
      },
    ] as CompetencyGroup[],
  },

  timeline: {
    eyebrow: "EXPERIÊNCIA PROFISSIONAL",
    title: "Minha trajetória.",
    subtitle:
      "Uma jornada construída com estratégia, aprendizado contínuo e resultados reais em marketing e comunicação.",
    items: [
      {
        period: "Jul/2026 – Out/2026",
        role: "Content Strategy",
        company: "Rvops",
        bullets: [
          "Planejamento e execução de ações de marketing B2B com foco em posicionamento de marca, geração de demanda e públicos C-level.",
          "Produção de conteúdo, gestão de redes, criação de materiais e apoio estratégico a campanhas.",
        ],
      },
      {
        period: "Ago/2025 – Jul/2026",
        role: "Copywriter",
        company: "Agência Arthur & Vidal",
        bullets: [
          "Desenvolvimento de conteúdos alinhados aos objetivos de comunicação e posicionamento de marca.",
          "Redação para sites, blogs, landing pages e redes sociais, com aplicação de técnicas de SEO e copywriting.",
        ],
      },
      {
        period: "Jan/2023 – Jul/2025",
        role: "Redatora SEO & Copywriter",
        company: "Agência 23A Digital",
        model: "Remoto",
        bullets: [
          "Produção de conteúdos para estratégias de marketing digital B2B e B2C.",
          "Aplicação de técnicas de SEO e copywriting e desenvolvimento de materiais para blogs, sites e redes sociais.",
        ],
      },
      {
        period: "Abr/2022 – Jan/2023",
        role: "Estágio em Comunicação Interna",
        company: "Roca Brasil",
        bullets: [
          "Desenvolvimento de conteúdos institucionais e ações de comunicação interna.",
          "Apoio ao planejamento e execução de eventos e iniciativas de comunicação corporativa.",
        ],
      },
      {
        period: "Ago/2021 – Mar/2022",
        role: "Estágio em E-commerce e Redes Sociais",
        company: "HustShop",
        bullets: [
          "Apoio à gestão de e-commerce, produção de conteúdos digitais e execução de campanhas para redes sociais.",
          "Acompanhamento de indicadores e suporte às ações de marketing digital.",
        ],
      },
      {
        period: "Fev/2021 – Mai/2021",
        role: "Estágio em Atendimento Publicitário e Social Media",
        company: "Laser Press",
        bullets: [
          "Atendimento a clientes, organização de demandas e acompanhamento de entregas de comunicação.",
          "Produção de conteúdos para redes sociais e apoio às atividades de marketing digital.",
        ],
      },
    ] as TimelineItem[],
  },

  credentials: {
    education: {
      eyebrow: "FORMAÇÃO ACADÊMICA",
      degree: "Bacharelado em Comunicação Social",
      institution: "Universidade Paulista (UNIP)",
      period: "2020 – 2024",
    },
    languages: {
      eyebrow: "IDIOMAS",
      items: [
        { language: "Português", level: "Nativo", percentage: 100 },
        { language: "Inglês", level: "Intermediário", percentage: 65 },
        { language: "Espanhol", level: "Básico", percentage: 40 },
      ] as LanguageItem[],
    },
    tools: {
      eyebrow: "FERRAMENTAS QUE UTILIZO",
      items: [
        // Linha 1 (conforme referência)
        { name: "ActiveCampaign" },
        { name: "CapCut" },
        { name: "Bitrix24" },
        { name: "ChatGPT" },
        { name: "Google Search Console" },
        // Linha 2
        { name: "Mailchimp" },
        { name: "Wix.com" },
        { name: "Trello" },
        { name: "Affinity" },
        { name: "Google Workspace" },
        // Linha 3
        { name: "Notion" },
        { name: "Canva" },
        { name: "Meta" },
        { name: "Claude" },
        { name: "SEMRUSH" },
        // Linha 4
        { name: "Clarity" },
        { name: "mLabs" },
        { name: "Linktree" },
        { name: "Google Analytics" },
        { name: "Loja Integrada" },
      ],
    },
  },

  featuredProjects: {
    eyebrow: "MEUS PROJETOS",
    title: "Projetos em destaque",
    items: [
      {
        title: "Social Media",
        tone: "lavender" as const,
        href: "/social-midia",
      },
      {
        title: "Artigos",
        tone: "magenta" as const,
        href: "/artigos",
      },
      {
        title: "Site & Landing Page",
        tone: "lavender" as const,
        href: "/sites",
      },
      {
        title: "Vídeos",
        tone: "magenta" as const,
        href: "/videos",
      },
    ],
  },
};
