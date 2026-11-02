export interface SiteBenefitItem {
  iconName: "Layout" | "Building2" | "Target" | "PenTool" | "Sparkles";
  title: string;
  description: string;
}

export interface SiteProjectItem {
  id: string;
  title: string;
  category: "SITE INSTITUCIONAL" | "LANDING PAGE";
  description: string;
  image: string;
  url: string;
  isFeatured?: boolean;
}

export interface SeoPillarItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  iconName: "FileText" | "Link2" | "Bot" | "Settings";
}

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
  iconName: "Search" | "Layers" | "PenTool" | "Monitor";
}

export const SITES_CONTENT = {
  hero: {
    eyebrow: "SITES E LANDING PAGES",
    title: "Sites e Landing Pages que convertem.",
    subtitle:
      "Criação de sites e landing pages com copywriting orientado por SEO on-page, off-page, técnico e local, alinhado aos objetivos da marca e à experiência do usuário.",
    primaryCta: {
      label: "Fale comigo",
      href: "/orcamento",
    },
    secondaryCta: {
      label: "Ver projetos",
      href: "#projetos-em-destaque",
    },
    floatingBadges: {
      top: {
        title: "Estratégias",
        subtitle: "que geram resultados.",
      },
      bottom: {
        title: "Sites",
        subtitle: "que conectam pessoas.",
      },
    },
  },

  benefitsBar: [
    {
      iconName: "Layout",
      title: "Landing pages",
      description: "Páginas focadas em conversão.",
    },
    {
      iconName: "Building2",
      title: "Sites institucionais",
      description: "Credibilidade e posicionamento.",
    },
    {
      iconName: "Target",
      title: "SEO & GEO",
      description: "Mais visibilidade e tráfego qualificado.",
    },
    {
      iconName: "PenTool",
      title: "Copywriting",
      description: "Conteúdos que convertem e vendem.",
    },
    {
      iconName: "Sparkles",
      title: "UX e conversão",
      description: "Experiências que geram resultados.",
    },
  ] as SiteBenefitItem[],

  projectsSection: {
    eyebrow: "MEUS PROJETOS",
    title: "Projetos em destaque.",
    subtitle:
      "Sites e landing pages desenvolvidos com estratégia, design e conteúdo para gerar resultados reais.",
    viewAllCta: {
      label: "Ver todos os projetos",
      href: "#projetos-em-destaque",
    },
    primaryCase: {
      id: "bagueira-seguros",
      title: "Bagueira Seguros",
      category: "SITE INSTITUCIONAL" as const,
      description:
        "Site institucional com foco em credibilidade, conversão e posicionamento digital para uma marca com mais de 85 anos de história.",
      image: "/images/sites/bagueira-case.webp",
      url: "https://bagueiraseguros.com.br",
      isFeatured: true,
    },
    secondaryCases: [
      {
        id: "vogue-portas",
        title: "Vogue Portas",
        category: "SITE INSTITUCIONAL" as const,
        description: "Portas sob medida com design exclusivo em Joinville.",
        image: "/images/sites/vogue-portas.webp",
        url: "https://vogueportas.com.br",
      },
      {
        id: "easycon",
        title: "EasyCon",
        category: "SITE INSTITUCIONAL" as const,
        description: "Planejamento que vira aquisição.",
        image: "/images/sites/easycon.webp",
        url: "https://easycon.com.br",
      },
      {
        id: "luz-da-luna",
        title: "Luz da Luna",
        category: "LANDING PAGE" as const,
        description: "Cuidado e carinho para o seu melhor amigo em Joinville!",
        image: "/images/sites/luz-da-luna.webp",
        url: "https://luzdaluna.com.br",
      },
    ] as SiteProjectItem[],
  },

  seoSection: {
    eyebrow: "ESTRATÉGIA DE CONTEÚDO",
    title: "Conteúdo pensado para ser encontrado.",
    subtitle:
      "Uma abordagem completa de SEO e GEO para aumentar sua visibilidade, atrair o público certo e gerar resultados consistentes.",
    pillars: [
      {
        id: "seo-on-page",
        tag: "SEO ON-PAGE",
        title: "SEO On-page",
        description:
          "Otimização de conteúdos, palavras-chave, títulos e estrutura das páginas.",
        iconName: "FileText" as const,
      },
      {
        id: "seo-off-page",
        tag: "SEO OFF-PAGE",
        title: "SEO Off-page",
        description:
          "Estratégias para fortalecer a autoridade e a relevância da marca fora do site.",
        iconName: "Link2" as const,
      },
      {
        id: "geo",
        tag: "GEO",
        title: "GEO",
        description:
          "Conteúdos claros e confiáveis para mecanismos de busca e ferramentas de IA generativa.",
        iconName: "Bot" as const,
      },
      {
        id: "seo-tecnico",
        tag: "SEO TÉCNICO",
        title: "SEO Técnico",
        description:
          "Boas práticas de estrutura, rastreamento, indexação e desempenho do site.",
        iconName: "Settings" as const,
      },
    ] as SeoPillarItem[],
  },

  processSection: {
    eyebrow: "MEU PROCESSO",
    title: "Estrutura pensada para gerar resultado.",
    subtitle:
      "Do planejamento à entrega, um processo completo para criar sites e landing pages que atraem, engajam e convertem.",
    steps: [
      {
        step: "01",
        title: "Pesquisa e estratégia",
        description:
          "Análise de mercado, público e definição de palavras-chave.",
        iconName: "Search" as const,
      },
      {
        step: "02",
        title: "Arquitetura e UX",
        description:
          "Estrutura de páginas e experiência de navegação intuitiva.",
        iconName: "Layers" as const,
      },
      {
        step: "03",
        title: "Copywriting e SEO",
        description:
          "Conteúdos estratégicos otimizados para pessoas e mecanismos de busca.",
        iconName: "PenTool" as const,
      },
      {
        step: "04",
        title: "Design e desenvolvimento",
        description:
          "Sites responsivos, rápidos e focados em conversão.",
        iconName: "Monitor" as const,
      },
    ] as ProcessStepItem[],
  },

  finalCta: {
    eyebrow: "VAMOS CONVERSAR?",
    title: "Tem uma ideia, projeto ou desafio?",
    subtitle:
      "Vamos transformar estratégias em conexões, criatividade em resultados e ideias em experiências que fazem a diferença.",
    buttonLabel: "FALE COMIGO",
    buttonHref: "/orcamento",
  },
};
