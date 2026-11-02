# CMS administrativo — estrutura e regras

## Acesso e layout
**Rota protegida:** `/admin` (login em `/admin/login`). Sidebar preta ~232px desktop, avatar/brand inferior e item ativo com fundo roxo translúcido. Área de trabalho branco/lavanda claro, cartões brancos, bordas suaves, accent roxo, fontes e estados do Design System; layout max ~1600px. Mobile com sidebar colapsável e cards alternativos às tabelas.

## Módulos e capacidades
| Módulo | O que administra |
|---|---|
| Visão geral | KPIs reais, artigos recentes, projetos e vídeos em destaque, preview do site |
| Artigos | editor de texto rico, capa, slug, categorias/tags, publicação, destaque, ordem, SEO, leitura |
| Projetos | cases, categorias, imagens, links, escopo da Eloisa, ordem, destaque, ocultar/publicar |
| Social Media | cards de trabalhos, carrosséis, legendas, plataformas, tags, ordem, destaque; **não agenda postagem externa sem integração** |
| Vídeos | orientação, arquivos/URLs, poster, duração, categoria, ordem, destaque |
| Sites e Landing Pages | administra entradas do portfólio e suas páginas de case; não modifica automaticamente sites hospedados de clientes |
| Sobre mim | foto, perfil, timeline, competências, idiomas, formação, ferramentas, currículo |
| Link na Bio | links, blocos, ordem, cores, CTA, preview e clicks |
| Leads | contatos do formulário, briefing, fonte/UTMs, status, notas, exportação sob permissão |
| Analytics | page views, únicos quando medidos de maneira legítima, fontes, páginas mais visitadas, cliques, leads |
| SEO | títulos/metas, OG, sitemap, redirects, indexabilidade, sugestões de checklist |
| Mídia/Imagens | pastas, upload, metadados/alt, otimização e referências de uso |
| Personalização | cores, fontes permitidas, ordem das seções, visibilidade, botões, preview |
| Configurações | domínio, contato, integrações, acessos, consentimentos, segurança, backups |

## Entidades de domínio (não duplicar dados à toa)
Uma única biblioteca `portfolio_entries` serve de vitrine para `/sites`, `/artigos`, `/social-midia`, Home e `/bio`, com relacionamentos a `articles`, `projects`, `social_items` e `videos` conforme tipo. Destaques são relações por superfície (`featured_slots`) e `sort_order` por vitrine; evita divergência.

## Editor / interação
- Pesquisa textual, filtros, ordenação; bulk actions com confirmação e rollback.
- Split view: lista (esquerda) + editor (direita); tabs Conteúdo, SEO, Mídia, Configurações, conforme módulo.
- Botões distintos `Salvar rascunho`, `Pré-visualizar`, `Publicar`/`Atualizar`, `Ocultar`, `Excluir`.
- Preview seguro em rota draft com token de uso curto, só ao admin, não indexável.
- Reordenação via drag and drop e botões `Mover para cima/baixo`; `sort_order` persistido transacionalmente.
- Destaque é boolean/configuração por seção, com limites (por exemplo, Home 4 pastas; em Sites 1 principal e até 3 secundários).
- Salvar confirma apenas após resposta `2xx` do servidor; log de auditoria registra usuário, item e mudança.

## Status e publicações
`draft` | `scheduled` | `published` | `archived`. Data de agendamento com timezone explícito (admin seleciona local, backend armazena UTC). Item `archived` não aparece em público; `featured` só mostra se `published` e elegível. Limpeza de mídia bloqueada quando asset ainda é referenciado, ou exige reassociação.

## Permissões sugeridas
- `owner`: todas as funções, inclusive membros e configurações.
- `editor`: cria/altera/publica conteúdo, mas não gerencia usuários e segredos.
- `analyst`: leitura de relatórios agregados; acesso a leads pessoais somente se expressamente concedido.
- `viewer`: leitura sem exportação sensível.

NÃO permitir signup público para `/admin`; convite/seed inicial seguro, MFA recomendada. Registros e uploads privados por padrão.

## Métricas do mockup
Percentuais, seguidores, posições Google, leads e score SEO nos screenshots são visuais fictícios. A implementação deve exibir `Sem integração`, `Sem dados` ou métricas efetivas e identificadas por origem/período; não colocar mock data em produção.
