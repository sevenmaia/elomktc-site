export interface ArticleSection {
  id: string;
  title: string;
  paragraphs: string[];
  quote?: string;
  quoteAuthor?: string;
  bulletPoints?: string[];
  highlightBox?: {
    title: string;
    description: string;
  };
}

export interface ArticleDetail {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  coverImageAlt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  tags: string[];
  sections: ArticleSection[];
  relatedSlugs: string[];
}

export const ARTICLES_DATABASE: Record<string, ArticleDetail> = {
  "do-primeiro-contato-a-expansao": {
    slug: "do-primeiro-contato-a-expansao",
    category: "ESTRATÉGIA DE RECEITA",
    title: "Do primeiro contato à expansão: a jornada de receita que o funil tradicional não mostra.",
    subtitle:
      "Por que olhar apenas para o topo do funil é o caminho mais rápido para queimar orçamento e como desenhar uma jornada contínua focada em LTV, retenção e expansão.",
    publishedAt: "28 de Outubro, 2026",
    readTime: "6 min de leitura",
    coverImage: "/images/articles/article-funil.webp",
    coverImageAlt: "Painel de métricas analíticas representando a jornada de receita e taxas de conversão",
    author: {
      name: "Eloisa Cunha",
      role: "Estrategista de Marketing & Copywriting",
      avatar: "/images/eloisa-cunha.jpg",
      bio: "Especialista em posicionamento de marca, copywriting estratégico e arquitetura de conteúdo que conecta e converte para empresas B2B e marcas de alto padrão.",
    },
    tags: ["SEO", "RevOps", "Educação", "Autoridade", "Conversão"],
    relatedSlugs: ["diga-adeus-ao-velho-crm", "campanha-revops"],
    sections: [
      {
        id: "a-ilusao-do-funil-linear",
        title: "1. A ilusão do funil linear no mercado contemporâneo",
        paragraphs: [
          "Durante décadas, fomos ensinados que marketing e vendas funcionavam como uma linha de montagem rígida: você atrai centenas de pessoas no topo, nutre uma fração no meio e converte um punhado no fundo. No entanto, quem opera negócios no mercado atual percebe diariamente que essa dinâmica simplesmente não reflete o comportamento real do comprador.",
          "O cliente moderno não caminha em fila indiana. Ele consome um post no LinkedIn, visita o site, pesquisa avaliações no Google, conversa com colegas de setor, esquece a sua solução por três semanas e, de repente, retorna diretamente pelo WhatsApp com uma pergunta específica sobre implementação.",
        ],
        quote:
          "O funil tradicional trata o cliente como um número que cai por gravidade; a jornada real de receita trata o cliente como um relacionamento que exige valor antes mesmo do primeiro aperto de mão.",
        quoteAuthor: "Eloisa Cunha",
      },
      {
        id: "os-gargalos-invisiveis",
        title: "2. Onde a maioria das empresas perde dinheiro sem perceber",
        paragraphs: [
          "Quando analisamos diagnósticos de receita em empresas que investem forte em anúncios e tráfego pago, o padrão se repete com frequência alarmante: o problema quase nunca está no volume de cliques, mas na desconexão entre o que foi prometido no anúncio e a experiência textual da landing page.",
          "Se a sua mensagem não comunica clareza, relevância e segurança nos primeiros cinco segundos, o visitante vai embora — e o seu custo de aquisição (CAC) dispara. É por isso que o copywriting não pode ser tratado como mero embelezamento visual: ele é a infraestrutura de persuasão do negócio.",
        ],
        bulletPoints: [
          "Falta de coerência de mensagem entre canais de atração e páginas de destino.",
          "Páginas com excesso de jargões técnicos que distanciam o decisor de compra.",
          "Ausência de pontos de contato estruturados após o fechamento da primeira venda.",
          "Falta de materiais educativos que acelerem o ciclo de decisão sem depender de insistência comercial.",
        ],
      },
      {
        id: "arquitetura-de-expansao",
        title: "3. Construindo uma máquina de retenção e upsell",
        paragraphs: [
          "A verdadeira rentabilidade de uma empresa saudável não está na primeira transação, mas na capacidade de manter o cliente satisfeito e expandir sua conta ao longo do tempo (LTV).",
          "Para que isso aconteça, a comunicação pós-venda precisa ser tão estratégica quanto a atração. Isso envolve e-mails de onboarding bem redigidos, artigos de autoridade que continuem educando o cliente e uma narrativa de marca que faça o consumidor ter orgulho de fazer parte da sua comunidade.",
        ],
        highlightBox: {
          title: "Princípio de Ouro da Receita Contínua",
          description:
            "Vender para quem já confia na sua entrega custa até 7 vezes menos do que adquirir um cliente novo do zero. Seu conteúdo precisa alimentar essa relação todos os dias.",
        },
      },
      {
        id: "conclusao-e-proximos-passos",
        title: "4. Como começar a aplicar hoje na sua empresa",
        paragraphs: [
          "Se você deseja transformar o seu marketing em um motor sustentável de receita, o primeiro passo é auditar os pontos de contato da sua marca. Avalie se o seu site responde com clareza o que você faz, para quem faz e qual resultado concreto você viabiliza.",
          "Quando o texto trabalha a favor da estratégia, cada visitante passa a enxergar valor real — e as conversões tornam-se consequência natural de um posicionamento sólido.",
        ],
      },
    ],
  },

  "diga-adeus-ao-velho-crm": {
    slug: "diga-adeus-ao-velho-crm",
    category: "TECNOLOGIA & PROCESSOS",
    title: "Diga adeus ao velho CRM: a evolução do relacionamento para gerar receita sustentável.",
    subtitle:
      "Por que planilhas estáticas e softwares engessados estão drenando a energia da sua equipe comercial e como transformar dados em inteligência conversacional.",
    publishedAt: "22 de Outubro, 2026",
    readTime: "5 min de leitura",
    coverImage: "/images/articles/article-crm.webp",
    coverImageAlt: "Equipe trabalhando em ambiente corporativo moderno com computadores",
    author: {
      name: "Eloisa Cunha",
      role: "Estrategista de Marketing & Copywriting",
      avatar: "/images/eloisa-cunha.jpg",
      bio: "Especialista em posicionamento de marca, copywriting estratégico e arquitetura de conteúdo que conecta e converte para empresas B2B e marcas de alto padrão.",
    },
    tags: ["CRM", "SEO", "Educação", "Conversão", "B2B"],
    relatedSlugs: ["do-primeiro-contato-a-expansao", "campanha-revops"],
    sections: [
      {
        id: "o-problema-dos-dados-mortos",
        title: "1. O cemitério de contatos que muitas empresas chamam de base",
        paragraphs: [
          "Quase toda empresa média possui milhares de contatos cadastrados em seus sistemas. Nomes, e-mails, telefones, anotações esquecidas de reuniões que aconteceram há dois anos. No entanto, quando chega o final do mês e a meta precisa ser batida, esses dados simplesmente não se convertem em novas oportunidades.",
          "O erro clássico foi tratar o CRM apenas como uma ferramenta de controle gerencial, em vez de uma plataforma viva de relacionamento estratégico e comunicação orientada por contexto.",
        ],
        quote:
          "Dados sem contexto são apenas custo de armazenamento. É o copywriting e a sensibilidade do timing que transformam registros em receita real.",
        quoteAuthor: "Eloisa Cunha",
      },
      {
        id: "comunicacao-contextual",
        title: "2. Como estruturar abordagens que geram resposta",
        paragraphs: [
          "Ninguém gosta de receber mensagens genéricas com aparência de mala direta automatizada. Em um mundo inundado de notificações frias, a personalização de alto nível tornou-se o maior diferencial competitivo de quem vende.",
          "Quando sua equipe se comunica demonstrando conhecimento profundo sobre o momento, as dores e os desafios reais daquele negócio, as barreiras de desconfiança caem imediatamente.",
        ],
        bulletPoints: [
          "Mapeamento claro das etapas de maturidade do lead antes do primeiro contato.",
          "Roteiros e cadências de e-mails redigidos com tom consultivo e natural.",
          "Alinhamento estrito entre time de marketing (geração) e time de vendas (fechamento).",
        ],
      },
      {
        id: "conclusao",
        title: "3. O futuro pertence a quem gera valor contínuo",
        paragraphs: [
          "A tecnologia evolui em ritmo acelerado, mas a psicologia humana por trás de qualquer decisão de compra permanece a mesma: as pessoas compram de quem elas confiam, entendem e respeitam. Construa sua comunicação sobre essa base e seus resultados serão inevitáveis.",
        ],
      },
    ],
  },

  "campanha-revops": {
    slug: "campanha-revops",
    category: "CAMPANHA B2B",
    title: "RevOps: quanto vale uma decisão tomada no tempo certo na sua empresa?",
    subtitle:
      "A anatomia de uma campanha B2B concebida para desafiar o status quo corporativo e alinhar Marketing, Vendas e Sucesso do Cliente em torno de um único indicador: receita líquida.",
    publishedAt: "19 de Outubro, 2026",
    readTime: "7 min de leitura",
    coverImage: "/images/articles/article-revops.webp",
    coverImageAlt: "Arranha-céus corporativos modernos representando visão estratégica e governança",
    author: {
      name: "Eloisa Cunha",
      role: "Estrategista de Marketing & Copywriting",
      avatar: "/images/eloisa-cunha.jpg",
      bio: "Especialista em posicionamento de marca, copywriting estratégico e arquitetura de conteúdo que conecta e converte para empresas B2B e marcas de alto padrão.",
    },
    tags: ["Estratégia", "Copy", "Performance", "B2B"],
    relatedSlugs: ["do-primeiro-contato-a-expansao", "o-que-faz-uma-empresa-ser-vista-como-referencia"],
    sections: [
      {
        id: "o-custo-da-hesitacao",
        title: "1. O custo silencioso da hesitação corporativa",
        paragraphs: [
          "Em mercados dinâmicos, empresas não quebram apenas por falta de clientes ou crises externas; muitas vezes, elas perdem relevância pela lentidão em tomar decisões fundamentadas. Informações descentralizadas, silos entre departamentos e métricas conflitantes criam um ambiente de paralisia gerencial.",
          "A proposta da campanha RevOps nasceu exatamente para provocar esse desconforto: 'Decisões que hoje envelhecem na sua empresa precisam acontecer em tempo real.'",
        ],
        quote:
          "Uma campanha de posicionamento B2B não deve agradar a todos; ela deve reverberar profundamente com o decisor que sente aquela dor todos os dias.",
        quoteAuthor: "Eloisa Cunha",
      },
      {
        id: "os-pilares-da-mensagem",
        title: "2. Os pilares de copy que sustentaram a campanha",
        paragraphs: [
          "Para conversar com C-levels e diretores, abandonamos a linguagem rasa de 'mais produtividade' e focamos no impacto financeiro direto: previsibilidade de caixa, redução de fricção operacional e clareza no ROI de cada investimento.",
        ],
        bulletPoints: [
          "Diagnóstico visual instantâneo dos gargalos operacionais.",
          "Narrativa focada em dados e segurança jurídica/financeira.",
          "Chamadas diretas que estimulam a reflexão estratégica antes do pitch comercial.",
        ],
      },
    ],
  },

  "o-que-faz-uma-empresa-ser-vista-como-referencia": {
    slug: "o-que-faz-uma-empresa-ser-vista-como-referencia",
    category: "BRANDING & AUTORIDADE",
    title: "O que faz uma empresa ser vista como referência de mercado?",
    subtitle:
      "A diferença entre ser apenas mais uma opção no comparador de preços e ocupar o topo da mente do consumidor como a escolha incontestável.",
    publishedAt: "15 de Outubro, 2026",
    readTime: "5 min de leitura",
    coverImage: "/images/articles/article-referencia.webp",
    coverImageAlt: "Microfone no palco com iluminação suave representando liderança e autoridade",
    author: {
      name: "Eloisa Cunha",
      role: "Estrategista de Marketing & Copywriting",
      avatar: "/images/eloisa-cunha.jpg",
      bio: "Especialista em posicionamento de marca, copywriting estratégico e arquitetura de conteúdo que conecta e converte para empresas B2B e marcas de alto padrão.",
    },
    tags: ["SEO", "Educação", "Autoridade", "Posicionamento"],
    relatedSlugs: ["o-papel-do-branding-nas-vendas", "arthur-vidal-marcas-em-referencias"],
    sections: [
      {
        id: "alem-da-visibilidade",
        title: "1. Ser conhecido é diferente de ser respeitado",
        paragraphs: [
          "Muitas marcas investem fortunas para obter alcance, curtidas e visualizações passageiras. No entanto, quando um potencial cliente precisa fechar um contrato de alto valor, ele não escolhe a empresa mais engraçada das redes sociais; ele escolhe a mais confiável.",
          "Autoridade não se compra com tráfego: constrói-se com consistência editorial, argumentos sólidos e entrega impecável demonstrada de forma transparente.",
        ],
        quote:
          "Preço é o que você cobra quando não conseguiu comunicar o valor que entrega. Autoridade é o que permite precificar com soberania.",
        quoteAuthor: "Eloisa Cunha",
      },
      {
        id: "os-tres-pilares-da-autoridade",
        title: "2. Os 3 pilares inegociáveis para se tornar referência",
        paragraphs: [
          "Para se consolidar como referência no seu segmento, sua presença digital precisa demonstrar competência em três dimensões complementares:",
        ],
        bulletPoints: [
          "Ponto de vista autoral: opiniões fundamentadas sobre para onde o seu mercado está indo.",
          "Provas tangíveis de execução: cases reais, bastidores da entrega e resultados verificáveis.",
          "Design e comunicação premium: cuidar dos detalhes visuais e textuais para transmitir sofisticação.",
        ],
      },
    ],
  },

  "o-papel-do-branding-nas-vendas": {
    slug: "o-papel-do-branding-nas-vendas",
    category: "ESTRATÉGIA DE MARCA",
    title: "O papel do Branding nas vendas é maior do que você imagina.",
    subtitle:
      "Como uma marca forte encurta o ciclo de vendas, reduz o esforço comercial e permite cobrar até 3 vezes mais pelo mesmo serviço.",
    publishedAt: "10 de Outubro, 2026",
    readTime: "6 min de leitura",
    coverImage: "/images/articles/article-branding.webp",
    coverImageAlt: "Mesa de trabalho com laptops e equipe analisando planejamento de marca",
    author: {
      name: "Eloisa Cunha",
      role: "Estrategista de Marketing & Copywriting",
      avatar: "/images/eloisa-cunha.jpg",
      bio: "Especialista em posicionamento de marca, copywriting estratégico e arquitetura de conteúdo que conecta e converte para empresas B2B e marcas de alto padrão.",
    },
    tags: ["Branding", "Estratégia", "Educação", "Vendas"],
    relatedSlugs: ["o-que-faz-uma-empresa-ser-vista-como-referencia", "arthur-vidal-marcas-em-referencias"],
    sections: [
      {
        id: "a-falsa-divisao",
        title: "1. A falsa divisão entre 'performance' e 'branding'",
        paragraphs: [
          "Durante anos o mercado tentou separar os investimentos em marketing entre duas caixas isoladas: de um lado, 'branding' como algo etéreo e intangível; do outro, 'performance' como cliques imediatos. Esse pensamento causou prejuízos monumentais.",
          "Na prática, o melhor anúncio de performance não converte se o lead entrar em uma página sem alma, sem identidade e que parece amadora. O branding é o multiplicador de todos os seus esforços de vendas.",
        ],
      },
    ],
  },

  "por-que-sua-empresa-nao-deve-estar-em-todas-as-redes": {
    slug: "por-que-sua-empresa-nao-deve-estar-em-todas-as-redes",
    category: "MÍDIAS SOCIAIS",
    title: "Por que sua empresa não deve estar em todas as redes sociais.",
    subtitle:
      "A armadilha da ubiquidade: como a obsessão por estar em todos os canais pulveriza sua energia e por que dominar os canais certos gera 10x mais resultados.",
    publishedAt: "05 de Outubro, 2026",
    readTime: "5 min de leitura",
    coverImage: "/images/articles/article-redes-sociais.webp",
    coverImageAlt: "Ícones de redes sociais em 3D modernos representando escolha estratégica de canais",
    author: {
      name: "Eloisa Cunha",
      role: "Estrategista de Marketing & Copywriting",
      avatar: "/images/eloisa-cunha.jpg",
      bio: "Especialista em posicionamento de marca, copywriting estratégico e arquitetura de conteúdo que conecta e converte para empresas B2B e marcas de alto padrão.",
    },
    tags: ["Estratégia", "Educação", "Performance", "Social Media"],
    relatedSlugs: ["do-primeiro-contato-a-expansao", "o-que-faz-uma-empresa-ser-vista-como-referencia"],
    sections: [
      {
        id: "a-pressao-do-algoritmo",
        title: "1. A pressão insustentável de postar por postar",
        paragraphs: [
          "Quantas empresas você conhece que começam com empolgação no Instagram, TikTok, LinkedIn, YouTube e Pinterest, e após três meses têm perfis abandonados ou cheios de posts automáticos de datas comemorativas sem nenhum engajamento real?",
          "O algoritmo recompensa consistência e profundidade. Se a sua equipe não tem fôlego para produzir conteúdos originais e relevantes em cinco plataformas ao mesmo tempo, você estará apenas espalhando ruído.",
        ],
      },
      {
        id: "como-escolher-seu-canal-mestre",
        title: "2. Como identificar onde o seu cliente realmente toma decisões",
        paragraphs: [
          "Para um escritório de advocacia ou consultoria B2B, um artigo semanal bem fundamentado no LinkedIn ou um site otimizado com SEO e GEO gera infinitamente mais negócios do que trinta vídeos de dança em redes visuais. O segredo é mapear onde o dinheiro do seu cliente está sendo decidido.",
        ],
      },
    ],
  },

  "85-anos-construindo-confianca": {
    slug: "85-anos-construindo-confianca",
    category: "CASE INSTITUCIONAL",
    title: "85 anos construindo confiança e relacionamentos duradouros.",
    subtitle:
      "Como traduzir uma história quase centenária em uma narrativa digital contemporânea que honra o legado e atrai a nova geração de decisores patrimoniais.",
    publishedAt: "01 de Outubro, 2026",
    readTime: "6 min de leitura",
    coverImage: "/images/articles/article-85-anos.webp",
    coverImageAlt: "Biblioteca circular clássica representando história, confiança e solidez",
    author: {
      name: "Eloisa Cunha",
      role: "Estrategista de Marketing & Copywriting",
      avatar: "/images/eloisa-cunha.jpg",
      bio: "Especialista em posicionamento de marca, copywriting estratégico e arquitetura de conteúdo que conecta e converte para empresas B2B e marcas de alto padrão.",
    },
    tags: ["Autoridade", "Posicionamento", "História", "Storytelling"],
    relatedSlugs: ["o-que-faz-uma-empresa-ser-vista-como-referencia", "arthur-vidal-marcas-em-referencias"],
    sections: [
      {
        id: "o-desafio-do-legado",
        title: "1. O desafio de comunicar solidez sem parecer antiquado",
        paragraphs: [
          "Completar mais de oito décadas de atuação contínua é um feito extraordinário em qualquer mercado. No entanto, na hora de construir a presença digital, surge um desafio delicado: como equilibrar a tradição e o respeito histórico com a inovação e o dinamismo que os clientes de hoje exigem?",
          "O copywriting para marcas centenárias não pode soar como um museu. Ele precisa demonstrar que a longevidade da empresa é exatamente a maior garantia de segurança para o futuro do cliente.",
        ],
        quote:
          "Tradição não é sobre cultuar o passado; é sobre comprovar que seus princípios foram testados pelo tempo e continuam imbatíveis.",
        quoteAuthor: "Eloisa Cunha",
      },
      {
        id: "pilares-da-narrativa",
        title: "2. Os pilares da narrativa de gestão patrimonial",
        paragraphs: [
          "Para o case Bagueira Seguros, estruturamos a comunicação em torno de dois eixos complementares: proteção familiar e estratégia patrimonial. Cada parágrafo foi lapidado para transmitir solidez institucional, governança e proximidade humana.",
        ],
      },
    ],
  },
};

// Fallback generator for any other slug
export function getArticleBySlug(slug: string): ArticleDetail {
  if (ARTICLES_DATABASE[slug]) {
    return ARTICLES_DATABASE[slug];
  }

  // Smart fallback using title casing and clean defaults
  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    slug,
    category: "ARTIGO & COPYWRITING",
    title: `${formattedTitle}.`,
    subtitle:
      "Reflexões estratégicas sobre posicionamento, arquitetura de conteúdo e comunicação orientada para resultados reais.",
    publishedAt: "24 de Outubro, 2026",
    readTime: "5 min de leitura",
    coverImage: "/images/articles/article-funil.webp",
    coverImageAlt: `Capa editorial do artigo ${formattedTitle}`,
    author: {
      name: "Eloisa Cunha",
      role: "Estrategista de Marketing & Copywriting",
      avatar: "/images/eloisa-cunha.jpg",
      bio: "Especialista em posicionamento de marca, copywriting estratégico e arquitetura de conteúdo que conecta e converte para empresas B2B e marcas de alto padrão.",
    },
    tags: ["Estratégia", "Copywriting", "Conteúdo", "Posicionamento"],
    relatedSlugs: ["do-primeiro-contato-a-expansao", "o-que-faz-uma-empresa-ser-vista-como-referencia"],
    sections: [
      {
        id: "introducao",
        title: "1. Introdução à estratégia",
        paragraphs: [
          "No cenário competitivo contemporâneo, a clareza da comunicação é a moeda mais valiosa de qualquer negócio. Quando uma marca se expressa com precisão, ela não apenas atrai a atenção: ela constrói pontes duradouras de confiança.",
          "Cada palavra presente em uma página, anúncio ou artigo deve cumprir um propósito deliberado: informar, inspirar ou conduzir o leitor para o próximo passo da sua jornada.",
        ],
        quote:
          "Comunicar bem não é falar muito; é dizer exatamente o que precisa ser dito para a pessoa certa no momento oportuno.",
        quoteAuthor: "Eloisa Cunha",
      },
      {
        id: "desenvolvimento",
        title: "2. Princípios práticos de execução",
        paragraphs: [
          "Para garantir que seus conteúdos gerem impacto mensurável, mantenha sempre o foco na dor e no objetivo do seu leitor. Evite construções rebuscadas que dificultem a leitura e privilegie frases diretas, com ritmo e dinamismo.",
        ],
        bulletPoints: [
          "Defina um objetivo único e claro para cada conteúdo publicado.",
          "Elimine ruídos e promessas exageradas que gerem desconfiança.",
          "Conecte cada argumento a um aprendizado prático aplicável pelo leitor.",
        ],
      },
      {
        id: "conclusao",
        title: "3. Conclusão e próximos passos",
        paragraphs: [
          "Construir autoridade é um trabalho contínuo. Invista em consistência e mantenha seus canais digitais sempre alinhados à essência do seu negócio.",
        ],
      },
    ],
  };
}

export function getAllArticleSlugs(): string[] {
  return Object.keys(ARTICLES_DATABASE);
}

export function getRelatedArticles(slug: string): ArticleDetail[] {
  const current = getArticleBySlug(slug);
  return current.relatedSlugs.map((s) => getArticleBySlug(s));
}
