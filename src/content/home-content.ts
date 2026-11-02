export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: 'instagram' | 'tiktok' | 'linkedin';
  label: string;
  href: string;
}

export interface ExpertiseItem {
  iconName: 'Tag' | 'Search' | 'Megaphone' | 'Sparkles' | 'BarChart3';
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: 'BarChart2' | 'PenTool' | 'Users' | 'Target' | 'Megaphone' | 'Calendar';
  href: string;
}

export interface FolderProjectItem {
  category: string;
  title: string;
  description: string;
  tone: 'dark' | 'lavender' | 'magenta';
  href: string;
}

export const HOME_CONTENT = {
  header: {
    navLinks: [
      { label: "Home", href: "/" },
      { label: "Sobre mim", href: "/sobre-mim" },
      { label: "Social Mídia", href: "/social-midia" },
      { label: "Vídeos", href: "/videos" },
      { label: "Sites", href: "/sites" },
      { label: "Artigos", href: "/artigos" },
    ] as NavLink[],
    socialLinks: [
      {
        platform: "instagram",
        label: "Instagram de Eloisa Cunha",
        href: "https://www.instagram.com/elo.mktc/",
      },
      {
        platform: "tiktok",
        label: "TikTok de Eloisa Cunha",
        href: "https://www.tiktok.com/@elo.mktc",
      },
      {
        platform: "linkedin",
        label: "LinkedIn de Eloisa Cunha",
        href: "http://www.linkedin.com/in/elo%C3%ADsa-cunha",
      },
    ] as SocialLink[],
    cta: {
      label: "Fale comigo",
      href: "/orcamento",
    },
  },

  hero: {
    eyebrow: "ELOISA CUNHA | MARKETING & COMUNICAÇÃO",
    titleLine1: "Estratégia que",
    titleLine2: "conecta pessoas",
    lead: "Conteúdo, posicionamento e comunicação para aproximar marcas dos seus públicos e gerar resultados reais.",
    primaryCta: {
      label: "Fale comigo",
      href: "/orcamento",
    },
    secondaryCta: {
      label: "Conheça minha trajetória",
      href: "/sobre-mim",
    },
    expertise: [
      { iconName: "Tag", label: "Estratégia de marca" },
      { iconName: "Search", label: "Conteúdo & SEO" },
      { iconName: "Megaphone", label: "Campanhas" },
      { iconName: "Sparkles", label: "Eventos" },
      { iconName: "BarChart3", label: "Análise de performance" },
    ] as ExpertiseItem[],
  },

  tools: {
    eyebrowTop: "FERRAMENTAS",
    eyebrowBottom: "QUE UTILIZO",
    items: [
      { name: "Notion", type: "notion" },
      { name: "Canva", type: "canva" },
      { name: "ChatGPT", type: "chatgpt" },
      { name: "Meta", type: "meta" },
      { name: "SEMRUSH", type: "semrush" },
      { name: "Bitrix24", type: "bitrix24" },
      { name: "CapCut", type: "capcut" },
    ],
  },

  about: {
    eyebrow: "SOBRE MIM",
    title: "Marketing com propósito",
    paragraphs: [
      "Com mais de 5 anos de atuação em Marketing e Comunicação, desenvolvo estratégias de marketing 360° e Go-to-Market (GTM), conectando posicionamento de marca, geração de demanda e objetivos de negócio.",
      "Minha experiência abrange planejamento estratégico, gestão de projetos, marketing de conteúdo, SEO, GEO, CRM, mídia paga, automação e análise de performance.",
      "Combino visão estratégica, capacidade analítica e foco em resultados para fortalecer marcas, identificar oportunidades de crescimento e impulsionar aquisição, conversão e retenção.",
    ],
    description:
      "Com mais de 5 anos de atuação em Marketing e Comunicação, desenvolvo estratégias de marketing 360° e Go-to-Market (GTM), conectando posicionamento de marca, geração de demanda e objetivos de negócio.",
    cta: {
      label: "Conheça minha trajetória",
      href: "/sobre-mim",
    },
    photo: {
      src: "/images/eloisa-cunha.jpg",
      alt: "Eloisa Cunha — Marketing & Comunicação",
    },
    badgeText: "Estratégia também é sobre pessoas.",
    stats: [
      { value: "+5 anos", label: "de experiência no mercado" },
      { value: "50+", label: "projetos e marcas atendidas" },
      { value: "B2B e B2C", label: "estratégias que geram resultado" },
      { value: "360°", label: "da estratégia à execução" },
    ] as StatItem[],
  },

  services: {
    eyebrow: "O QUE EU FAÇO",
    titleLine1: "Soluções para",
    titleLine2: "diferentes objetivos",
    lead: "Do planejamento à entrega, desenvolvo estratégias completas de marketing e comunicação para marcas que querem se destacar.",
    items: [
      {
        title: "Planejamento Estratégico",
        description: "Diagnóstico, posicionamento de marca e definição de objetivos claros.",
        iconName: "BarChart2",
        href: "/sobre-mim",
      },
      {
        title: "Produção de Conteúdo",
        description: "Conteúdos relevantes para redes sociais, blogs, sites e campanhas.",
        iconName: "PenTool",
        href: "/artigos",
      },
      {
        title: "Gestão de Redes Sociais",
        description: "Estratégia, calendário, criação e acompanhamento de performance.",
        iconName: "Users",
        href: "/social-midia",
      },
      {
        title: "SEO e GEO",
        description: "Conteúdos otimizados para buscadores e ferramentas de IA generativa.",
        iconName: "Target",
        href: "/sites",
      },
      {
        title: "Campanhas e Tráfego",
        description: "Planejamento e execução de campanhas pagas com foco em ROI.",
        iconName: "Megaphone",
        href: "/orcamento",
      },
      {
        title: "Eventos e Experiências",
        description: "Organização, divulgação e cobertura de eventos corporativos.",
        iconName: "Calendar",
        href: "/videos",
      },
    ] as ServiceItem[],
  },

  projects: {
    eyebrow: "PROJETOS",
    title: "Meus projetos",
    description: "Alguns dos trabalhos que desenvolvi envolvendo estratégia, conteúdo, redes sociais, sites e eventos.",
    viewAllCta: {
      label: "Ver todos os projetos",
      href: "/sites",
    },
    folders: [
      {
        category: "SOCIAL MEDIA",
        title: "Rvops",
        description: "Estratégia e gestão de redes sociais com foco em autoridade e geração de demanda.",
        tone: "dark",
        href: "/social-midia",
      },
      {
        category: "ARTIGOS",
        title: "Marketing B2B",
        description: "Conteúdos e artigos sobre estratégia, posicionamento e comunicação.",
        tone: "lavender",
        href: "/artigos",
      },
      {
        category: "VÍDEOS",
        title: "Eventos e Cobertura",
        description: "Produção e edição de vídeos para eventos e marcas.",
        tone: "dark",
        href: "/videos",
      },
      {
        category: "SITES E LANDING PAGE",
        title: "Marcas e Negócios",
        description: "Desenvolvimento de sites e landing pages com foco em conversão.",
        tone: "magenta",
        href: "/sites",
      },
    ] as FolderProjectItem[],
  },

  ctaBanner: {
    eyebrow: "VAMOS CONVERSAR?",
    titleLine1: "Tem uma ideia, projeto",
    titleLine2: "ou desafio?",
    description: "Vamos transformar estratégias em conexões, criatividade em resultados e ideias em experiências que fazem a diferença.",
    button: {
      label: "FALE COMIGO",
      href: "/orcamento",
    },
  },

  footer: {
    brandName: "Eloisa Cunha",
    brandSubtitle: "Marketing & Comunicação",
    email: "elo.mktc@gmail.com",
    phone: "(11) 94785-1293",
    whatsappHref: "https://wa.me/5511947851293",
    copyright: `© ${new Date().getFullYear()} Eloisa Cunha. Todos os direitos reservados.`,
    legalLinks: [
      { label: "Privacidade", href: "/privacidade" },
      { label: "Orçamento", href: "/orcamento" },
    ],
  },
};
