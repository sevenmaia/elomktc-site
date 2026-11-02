# PROMPT MESTRE 02 — Páginas públicas após aprovação da Home

Continue o projeto aprovado sem reescrever a Home, suas pastas ou tokens. Leia `05-PROMPTS/00-PROMPT-MESTRE-GLOBAL.md` e os briefs das páginas `02-SITE-PUBLICO/03-...` até `/09-...`.

Implementar **uma página por vez** na sequência: Sobre mim → Social Media → Vídeos → Sites e Landing Pages → Artigos & Copywriting → Link na Bio → Orçamento. Depois de cada página, pedir revisão visual/apresentar screenshot comparativo, tests e só então seguir.

### Regras por página
- Sobre mim: foto real da Eloisa, competências, trajetória cronológica, formação, idiomas, ferramentas e contato. Dados e datas devem ser confirmados.
- Social Media: serviço de **copywriting incluído**, 5 etapas, carrossel verdadeiro de posts e não vídeo que simula a interação.
- Vídeos: layout preto, hero com exemplos 9:16 e 16:9, formatos, filtros e players com mídias reais.
- Sites: case principal largo + 3 cards secundários regulares, com gap; a versão antiga comprimida está descartada.
- Artigos: filtros Sites, Landing Pages, Campanhas, Redes Sociais, E-mails, Artigos; grid 2 col sem esmagar texto; usar artigos existentes e imagens autorizadas.
- Bio: mobile-first e QR; blocos ordenáveis após CMS, sem inventar localização ou links.
- Orçamento: formulário com validação, salva lead antes de abrir WhatsApp, respeita LGPD e mostra feedback real.

### Componentes compartilhados
Header, Footer, CTA, Buttons, Cards, Player, ScrollCarousel, ContentGrid, SectionHeading, FormFields. Nunca duplicar CSS de cada página se token/componente resolver.

### Conteúdo e responsabilidades
Mockups são referências, números são ilustrativos e não provas. Autorias, contratos, depoimentos, resultados e sites de clientes devem ser confirmados antes de publicar. Use dados reais, e placeholders identificados só em ambiente dev.

### Verificação
QA mobile/desktop, links, SEO metadata, AA keyboard, scroll, no XSS, vídeos não autoplay com som, carrossel não autoplay, sem overflow, sem queda no build. Resumir arquivos, testes e dúvidas materiais que impedem publicação.
