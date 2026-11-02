export interface BioLinkItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: "services" | "portfolio" | "videos" | "articles" | "testimonials";
  href: string;
  isExternal?: boolean;
}

export interface BioFeaturedProject {
  id: string;
  title: string;
  category: string;
  image: string;
  url: string;
}

export const BIO_CONTENT = {
  profile: {
    name: "Eloisa Cunha",
    badgeText: "Marketing & Comunicação",
    headline: "Marketing & Comunicação",
    bio: "Estratégia, conteúdo e posicionamento para marcas que querem gerar conexão e resultados reais.",
    avatar: "/images/eloisa-cunha.jpg",
    verified: true,
  },

  socials: [
    {
      platform: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/elo.mktc/",
    },
    {
      platform: "tiktok",
      label: "TikTok",
      href: "https://www.tiktok.com/@elo.mktc",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "http://www.linkedin.com/in/elo%C3%ADsa-cunha",
    },
    {
      platform: "youtube",
      label: "YouTube",
      href: "https://www.youtube.com/@elo.mktc",
    },
  ],

  primaryActions: {
    whatsapp: {
      label: "Fale comigo no WhatsApp",
      href: "https://wa.me/5511947851293?text=Ol%C3%A1%20Eloisa,%20vim%20pelo%20link%20da%20bio!",
    },
    schedule: {
      label: "Agendar uma conversa",
      href: "/orcamento",
    },
  },

  links: [
    {
      id: "servicos",
      title: "Conheça meus serviços",
      subtitle: "Sites, landing pages, conteúdo e estratégia",
      iconName: "services",
      href: "/sites",
    },
    {
      id: "portfolio",
      title: "Ver meu portfólio",
      subtitle: "Projetos e cases reais",
      iconName: "portfolio",
      href: "/sites#projetos-em-destaque",
    },
    {
      id: "videos",
      title: "Assistir meus vídeos",
      subtitle: "Dicas, bastidores e estratégias",
      iconName: "videos",
      href: "/videos",
    },
    {
      id: "artigos",
      title: "Ler meus artigos",
      subtitle: "Conteúdos sobre marketing e negócios",
      iconName: "articles",
      href: "/artigos",
    },
    {
      id: "depoimentos",
      title: "Depoimentos de clientes",
      subtitle: "Resultados que geram confiança",
      iconName: "testimonials",
      href: "/sobre-mim",
    },
  ] as BioLinkItem[],

  featuredProjects: [
    {
      id: "bagueira-seguros",
      title: "Bagueira Seguros",
      category: "Site institucional",
      image: "/images/sites/bagueira-bio.webp",
      url: "/sites",
    },
    {
      id: "vogue-portas",
      title: "Vogue Portas",
      category: "Site institucional",
      image: "/images/sites/vogue-portas.webp",
      url: "/sites",
    },
    {
      id: "luz-da-luna",
      title: "Luz da Luna Pets",
      category: "Landing page",
      image: "/images/sites/luz-da-luna.webp",
      url: "/sites",
    },
  ] as BioFeaturedProject[],

  banner: {
    title: "Estratégia que conecta pessoas.",
    description:
      "Vamos transformar seu projeto em uma marca mais forte, com conteúdo, posicionamento e comunicação que geram resultado.",
    ctaLabel: "Fale comigo agora",
    ctaHref: "/orcamento",
    handwrittenText: "Mais que sites, marcas reais. ♡",
  },

  footer: {
    location: "Joinville, SC",
    email: "elo.mktc@gmail.com",
    copyright: "© 2026 Eloisa Cunha. Todos os direitos reservados.",
  },
};
