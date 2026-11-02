export interface OrcamentoServiceOption {
  id: string;
  title: string;
  description: string;
  iconName: "smartphone" | "layout" | "pen-tool" | "video" | "megaphone" | "message-square";
}

export interface OrcamentoStep {
  number: number;
  title: string;
  description: string;
  iconName: "file-text" | "eye" | "message-circle" | "rocket";
}

export interface OrcamentoHighlight {
  title: string;
  iconName: "message-square" | "file-text" | "zap" | "shield-check";
}

export interface OrcamentoContent {
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  highlights: OrcamentoHighlight[];
  profilePhoto: {
    src: string;
    alt: string;
    floatingBadge: string;
  };
  projectSelector: {
    title: string;
    subtitle: string;
    options: OrcamentoServiceOption[];
  };
  howItWorks: {
    title: string;
    steps: OrcamentoStep[];
  };
  form: {
    eyebrow: string;
    securityBadge: string;
    title: string;
    subtitle: string;
    fields: {
      name: { label: string; placeholder: string };
      whatsapp: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      company: { label: string; placeholder: string };
      servicesLabel: string;
      objective: { label: string; placeholder: string; maxChars: number };
      deadline: { label: string; options: string[] };
      budget: { label: string; options: string[] };
      source: { label: string; options: string[] };
      consentText: string;
      submitButton: string;
      securityNote: string;
    };
  };
}

export const orcamentoContent: OrcamentoContent = {
  eyebrow: "SOLICITAR ORÇAMENTO",
  title: "Vamos trabalhar",
  titleAccent: "juntos?.",
  subtitle:
    "Preencha o formulário com as informações do seu projeto. Assim consigo entender suas necessidades e preparar uma proposta personalizada.",
  highlights: [
    { title: "Atendimento personalizado", iconName: "message-square" },
    { title: "Proposta sob medida", iconName: "file-text" },
    { title: "Resposta rápida", iconName: "zap" },
    { title: "Seus dados são seguros", iconName: "shield-check" },
  ],
  profilePhoto: {
    src: "/images/eloisa-cunha.jpg",
    alt: "Eloisa Cunha - Especialista em Marketing e Comunicação",
    floatingBadge: "Estratégia que conecta pessoas.",
  },
  projectSelector: {
    title: "Que tipo de projeto você quer desenvolver?.",
    subtitle: "Selecione uma ou mais opções:",
    options: [
      {
        id: "social-media",
        title: "Social Media",
        description: "Estratégia e produção de conteúdo para redes sociais.",
        iconName: "smartphone",
      },
      {
        id: "sites-landing-pages",
        title: "Sites e Landing Pages",
        description: "Desenvolvimento de sites com copy e foco em conversão.",
        iconName: "layout",
      },
      {
        id: "copywriting",
        title: "Copywriting",
        description: "Textos estratégicos que conectam e vendem.",
        iconName: "pen-tool",
      },
      {
        id: "videos",
        title: "Vídeos",
        description: "Roteiro, edição e conteúdo audiovisual.",
        iconName: "video",
      },
      {
        id: "anuncios-campanhas",
        title: "Anúncios e Campanhas",
        description: "Copy para tráfego pago e campanhas.",
        iconName: "megaphone",
      },
      {
        id: "consultoria",
        title: "Consultoria",
        description: "Orientação estratégica para sua marca.",
        iconName: "message-square",
      },
    ],
  },
  howItWorks: {
    title: "Como funciona?.",
    steps: [
      {
        number: 1,
        title: "Você preenche o formulário",
        description: "Me conta sobre o seu projeto e objetivos.",
        iconName: "file-text",
      },
      {
        number: 2,
        title: "Eu analiso e preparo uma proposta",
        description: "Com base nas suas necessidades.",
        iconName: "eye",
      },
      {
        number: 3,
        title: "Entramos em contato",
        description: "A proposta é enviada diretamente no seu WhatsApp.",
        iconName: "message-circle",
      },
      {
        number: 4,
        title: "Projeto em andamento",
        description: "Com planejamento, estratégia e acompanhamento.",
        iconName: "rocket",
      },
    ],
  },
  form: {
    eyebrow: "FORMULÁRIO DE PROJETO",
    securityBadge: "Seus dados são seguros",
    title: "Me conte sobre o seu projeto.",
    subtitle: "Quanto mais detalhes você fornecer, mais precisa será a proposta.",
    fields: {
      name: { label: "Nome completo *", placeholder: "Seu nome" },
      whatsapp: { label: "WhatsApp *", placeholder: "(11) 91234-5678" },
      email: { label: "E-mail *", placeholder: "seu@email.com" },
      company: { label: "Nome da empresa / marca", placeholder: "Sua empresa (opcional)" },
      servicesLabel: "Qual tipo de projeto? *",
      objective: {
        label: "Qual é o seu objetivo? *",
        placeholder: "Ex.: atrair mais clientes, aumentar vendas, fortalecer a marca...",
        maxChars: 500,
      },
      deadline: {
        label: "Qual o prazo ideal?",
        options: [
          "Selecione...",
          "Urgente (até 7 dias)",
          "15 a 30 dias",
          "Mais de 30 dias",
          "Sem prazo fixo",
        ],
      },
      budget: {
        label: "Qual o orçamento previsto?",
        options: [
          "Selecione...",
          "Até R$ 2.000",
          "R$ 2.000 a R$ 5.000",
          "R$ 5.000 a R$ 10.000",
          "Acima de R$ 10.000",
          "Prefiro conversar",
        ],
      },
      source: {
        label: "Como nos conheceu?",
        options: [
          "Selecione...",
          "Instagram",
          "Google / Busca",
          "Indicação de amigos/parceiros",
          "LinkedIn",
          "TikTok",
          "Outro canal",
        ],
      },
      consentText:
        "Autorizo o envio das informações via WhatsApp e concordo com o armazenamento dos dados para fins de contato.",
      submitButton: "Enviar sugestão de projeto no WhatsApp",
      securityNote: "Todas as informações também ficam salvas no nosso sistema para acompanhamento.",
    },
  },
};
