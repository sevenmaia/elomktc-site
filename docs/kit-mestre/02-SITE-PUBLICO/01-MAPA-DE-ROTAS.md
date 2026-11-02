# Mapa do site e contratos de navegação

| Rota | Título de menu | Objetivo | Tipo de dado |
|---|---|---|---|
| `/` | Home | posicionamento, serviços, resumo do portfólio | conteúdo global + featured |
| `/sobre-mim` | Sobre mim | perfil, trajetória, competências | perfil + experiências |
| `/social-midia` | Social Media | serviço, copywriting e portfólio de posts | social_cases + projects |
| `/videos` | Vídeos | portfólio audiovisual vertical/horizontal | videos |
| `/sites` | Sites | sites e landing pages, cases e SEO/GEO | projects, kind site/lp |
| `/artigos` | Artigos | portfólio de copy e artigos autorais | articles + copy_cases |
| `/artigos/[slug]` | artigo específico | leitura editorial completa | articles |
| `/projetos/[slug]` | case específico (opcional) | contexto, escopo, provas reais | projects |
| `/bio` | — | link na bio, celular primeiro | bio_links, bio_profile, featured |
| `/orcamento` | CTA Fale comigo | briefing que salva lead e abre WhatsApp | leads |
| `/privacidade` | footer | informação LGPD, cookies e formulário | legal_content |
| `/termos` | footer (se aplicável) | termos de uso | legal_content |
| `/admin` | painel privado | dashboard e módulos abaixo | dados privados |
| `/admin/login` | — | autenticação | auth |
| `/admin/artigos`, `/admin/projetos`, `/admin/social`, `/admin/videos`, `/admin/sites` | menu painel | CRUD por tipo | CMS |
| `/admin/sobre`, `/admin/seo`, `/admin/midia` | menu painel | edição e ativos | CMS |
| `/admin/personalizacao`, `/admin/configuracoes` | menu painel | estilo e preferências | CMS |
| `/admin/bio`, `/admin/leads`, `/admin/analytics` | menu painel | link bio, leads, visitas | CMS |

**Compatibilidade:** manter as rotas antigas verificadas `https://elomktc.com/`, `/sobre-mim`, `/social-midia`, `/videos`, `/sites`, `/artigos`. Configurar redirects 301 para URLs descontinuadas somente com mapeamento validado para não perder SEO.

## Navigation model
- Desktop: Home · Sobre mim · Social Media · Vídeos · Sites · Artigos + sociais + Fale comigo.
- Mobile: abre menu acessível, conserva mesmas opções, CTA destacado.
- No admin: Visão geral, Artigos, Projetos, Social Media, Vídeos, Sites e Landing Pages, Sobre mim, Link na Bio, Leads, Analytics, SEO, Mídia/Imagens, Personalização, Configurações.
- A seleção de Destaque não altera o conteúdo publicado; controla só a vitrine. Os itens são ordenados por `sort_order`, com regras por página.

## Dados visíveis ao público
Somente registros publicados (`status=published` e `published_at <= agora`, se agendado), não privados, com autorização de exibição. Admin nunca aparece no sitemap. Os cards vazios devem sumir ou exibir estado intencional, nunca conteúdo fictício.

## Metadados base
Título padrão `Eloisa Cunha | Marketing & Comunicação`; descrições individuais aprovadas, OG title/description/image, canonical absoluto no domínio oficial, `sitemap.xml`, `robots.txt` e JSON-LD adequado para `Person`/`WebSite`, e `Article` quando houver artigo real. Não usar schema de avaliações sem avaliações reais elegíveis.
