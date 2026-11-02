export interface ArticleItem {
  id: string;
  categoryKey: "sites" | "landing-pages" | "campanhas" | "redes-sociais" | "emails" | "artigos";
  categoryLabel: string;
  title: string;
  description: string;
  tags: string[];
  theme: "dark" | "lavender";
  mockupType: "laptop" | "image";
  image: string;
  url: string;
  inScreenOverlay?: {
    title?: string;
    subtitle?: string;
    buttonText?: string;
  };
}

export interface ArticleCategoryFilter {
  key: string;
  label: string;
  iconName: "grid" | "monitor" | "layout" | "megaphone" | "message-circle" | "mail" | "file-text";
}

export const ARTICLES_CONTENT = {
  hero: {
    eyebrow: "PORTFÓLIO DE COPYWRITING",
    title: "Textos que conectam e convertem.",
    subtitle:
      "Copywriting estratégico para sites, landing pages, redes sociais, campanhas e conteúdos que geram resultado para marcas reais.",
    primaryCta: {
      label: "Fale comigo",
      href: "/orcamento",
    },
    secondaryCta: {
      label: "Ver todos os projetos",
      href: "#projetos",
    },
  },

  filters: [
    { key: "todos", label: "Todos", iconName: "grid" },
    { key: "sites", label: "Sites", iconName: "monitor" },
    { key: "landing-pages", label: "Landing Pages", iconName: "layout" },
    { key: "campanhas", label: "Campanhas", iconName: "megaphone" },
    { key: "redes-sociais", label: "Redes Sociais", iconName: "message-circle" },
    { key: "emails", label: "E-mails", iconName: "mail" },
    { key: "artigos", label: "Artigos", iconName: "file-text" },
  ] as ArticleCategoryFilter[],

  items: [
    {
      id: "bagueira-seguros",
      categoryKey: "sites",
      categoryLabel: "SITE INSTITUCIONAL",
      title: "Bagueira Seguros",
      description:
        "Copy para site institucional com foco em credibilidade, conversão e posicionamento digital.",
      tags: ["SEO", "Posicionamento", "Conversão"],
      theme: "dark",
      mockupType: "laptop",
      image: "/images/sites/bagueira-case.webp",
      url: "https://bagueiraseguros.com.br",
    },
    {
      id: "luz-da-luna",
      categoryKey: "landing-pages",
      categoryLabel: "LANDING PAGE",
      title: "Luz da Luna PetShop",
      description:
        "Landing page com copy focado em conexão emocional e agendamento de consultas.",
      tags: ["Copy", "Conversão", "UX"],
      theme: "lavender",
      mockupType: "laptop",
      image: "/images/sites/luz-da-luna.webp",
      url: "https://luzdaluna.com.br",
    },
    {
      id: "vogue-portas",
      categoryKey: "sites",
      categoryLabel: "SITE INSTITUCIONAL",
      title: "Vogue Portas",
      description:
        "Copy para site institucional com posicionamento de marca e destaque para diferenciais.",
      tags: ["Autoridade", "SEO", "Conversão"],
      theme: "dark",
      mockupType: "image",
      image: "/images/sites/vogue-portas.webp",
      inScreenOverlay: {
        title: "Portas sob medida com design exclusivo em Joinville",
        buttonText: "Orçamento Rápido",
      },
      url: "https://vogueportas.com.br",
    },
    {
      id: "easycon",
      categoryKey: "sites",
      categoryLabel: "SITE INSTITUCIONAL",
      title: "EasyCon",
      description:
        "Copy para site institucional com foco em aquisição de clientes e apresentação de serviços.",
      tags: ["Estratégia", "SEO", "Performance"],
      theme: "dark",
      mockupType: "image",
      image: "/images/sites/easycon.webp",
      inScreenOverlay: {
        title: "Planejamento que vira aquisição.",
      },
      url: "https://easycon.com.br",
    },
    {
      id: "campanha-revops",
      categoryKey: "campanhas",
      categoryLabel: "CAMPANHA",
      title: "RevOps",
      description:
        "Copy para campanha de lançamento e posicionamento de marca no mercado B2B.",
      tags: ["Estratégia", "Copy", "Performance"],
      theme: "lavender",
      mockupType: "image",
      image: "/images/articles/article-revops.webp",
      inScreenOverlay: {
        title: "QUANTO VALE UMA DECISÃO NA SUA EMPRESA?",
      },
      url: "/artigos/campanha-revops",
    },
    {
      id: "do-primeiro-contato-a-expansao",
      categoryKey: "artigos",
      categoryLabel: "ARTIGO",
      title: "Do primeiro contato à expansão",
      description:
        "Copy para artigo sobre jornada de receita, com foco em autoridade e educação de mercado.",
      tags: ["SEO", "Educação", "Autoridade"],
      theme: "dark",
      mockupType: "image",
      image: "/images/articles/article-funil.webp",
      url: "/artigos/do-primeiro-contato-a-expansao",
    },
    {
      id: "diga-adeus-ao-velho-crm",
      categoryKey: "artigos",
      categoryLabel: "ARTIGO",
      title: "Diga adeus ao velho CRM",
      description:
        "Copy para artigo sobre transformação digital e modernização de processos com foco em receita sustentável.",
      tags: ["SEO", "Educação", "Conversão"],
      theme: "dark",
      mockupType: "image",
      image: "/images/articles/article-crm.webp",
      url: "/artigos/diga-adeus-ao-velho-crm",
    },
    {
      id: "o-que-faz-uma-empresa-ser-vista-como-referencia",
      categoryKey: "artigos",
      categoryLabel: "ARTIGO",
      title: "O que faz uma empresa ser vista como referência?",
      description:
        "Copy para artigo sobre branding, posicionamento e autoridade de valor no mercado.",
      tags: ["SEO", "Educação", "Autoridade"],
      theme: "lavender",
      mockupType: "image",
      image: "/images/articles/article-referencia.webp",
      url: "/artigos/o-que-faz-uma-empresa-ser-vista-como-referencia",
    },
    {
      id: "o-papel-do-branding-nas-vendas",
      categoryKey: "artigos",
      categoryLabel: "ARTIGO",
      title: "O papel do Branding nas vendas é maior do que você imagina",
      description:
        "Copy para artigo com foco em estratégia de marca e impacto direto nas vendas.",
      tags: ["Branding", "Estratégia", "Educação"],
      theme: "lavender",
      mockupType: "image",
      image: "/images/articles/article-branding.webp",
      url: "/artigos/o-papel-do-branding-nas-vendas",
    },
    {
      id: "arthur-vidal-marcas-em-referencias",
      categoryKey: "artigos",
      categoryLabel: "ARTIGO",
      title: "Arthur & Vidal: transformando marcas em referências de mercado",
      description:
        "Copy para artigo sobre case de posicionamento e crescimento com marca sólida.",
      tags: ["Case", "Branding", "Resultados"],
      theme: "dark",
      mockupType: "image",
      image: "/images/articles/article-arthur-vidal.webp",
      url: "/artigos/arthur-vidal-marcas-em-referencias",
    },
    {
      id: "decisao-stj-short-stay",
      categoryKey: "artigos",
      categoryLabel: "ARTIGO",
      title: "A decisão do STJ mudou o jogo para quem investe em Short Stay",
      description:
        "Copy para artigo jurídico/estratégico com foco em educação e análise de mercado.",
      tags: ["SEO", "Educação", "Mercado"],
      theme: "dark",
      mockupType: "image",
      image: "/images/articles/article-stj-shortstay.webp",
      url: "/artigos/decisao-stj-short-stay",
    },
    {
      id: "85-anos-construindo-confianca",
      categoryKey: "artigos",
      categoryLabel: "ARTIGO",
      title: "85 anos construindo confiança e relacionamentos duradouros",
      description:
        "Copy para artigo institucional com foco em história, valores e credibilidade de marca.",
      tags: ["Autoridade", "Posicionamento", "História"],
      theme: "lavender",
      mockupType: "image",
      image: "/images/articles/article-85-anos.webp",
      url: "/artigos/85-anos-construindo-confianca",
    },
    {
      id: "contabilidade-em-jundiai-e-sao-paulo",
      categoryKey: "artigos",
      categoryLabel: "ARTIGO",
      title: "Contabilidade em Jundiaí e São Paulo",
      description:
        "Copy para artigo sobre parceria contábil, decisões e resultados para empresas.",
      tags: ["SEO", "Educação", "Autoridade"],
      theme: "lavender",
      mockupType: "image",
      image: "/images/articles/article-contabilidade.webp",
      url: "/artigos/contabilidade-em-jundiai-e-sao-paulo",
    },
    {
      id: "por-que-sua-empresa-nao-deve-estar-em-todas-as-redes",
      categoryKey: "redes-sociais",
      categoryLabel: "ARTIGO",
      title: "Por que sua empresa não deve estar em todas as redes sociais",
      description:
        "Copy para artigo sobre estratégia de conteúdo e foco nos canais certos para melhores resultados.",
      tags: ["Estratégia", "Educação", "Performance"],
      theme: "dark",
      mockupType: "image",
      image: "/images/articles/article-redes-sociais.webp",
      url: "/artigos/por-que-sua-empresa-nao-deve-estar-em-todas-as-redes",
    },
  ] as ArticleItem[],
};
