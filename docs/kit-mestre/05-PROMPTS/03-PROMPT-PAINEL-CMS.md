# PROMPT MESTRE 03 — Construção do painel administrativo

Após aprovar o site público, desenvolva `/admin` conforme `03-PAINEL-ADMIN/*` e referências `10-...` a `19-...`. Preserve fielmente o design aprovado: sidebar escura, workspace branco/lavanda, cards arredondados, roxo para ações, tabelas limpas e editor lateral.

## Funcionalidade real, não protótipo estático
1. Auth e proteção `/admin/login`, roles e RLS; restringir export de leads.
2. Dashboard real com dados do banco e analytics, mostrando `Ainda sem dados` quando não coletado; nunca seed fictício em produção.
3. CRUD Artigos, Projetos, Social Media, Vídeos, Sites/LP, Sobre mim, Link na Bio, Mídia, SEO, Personalização, Configurações, Leads.
4. Listas com busca/filtros/paginação e editor lateral; estados de loading/erro/vazio.
5. Drag/drop de ordem por vitrine, com alternativa acessível; destaque liga/desliga e altera vitrine pública após revalidate.
6. Upload seguro com biblioteca e alt; preview draft não indexável; publicações transacionais.
7. Histórico/auditoria, confirmação para excluir, lixeira; RBAC efetivo.
8. Link Bio com preview de smartphone derivado dos mesmos dados e analytics por link, cores e QR.
9. Se um módulo depende de integração não conectada, exibir estado de conexão pendente e não simular números.

## Deliverables por módulo
UI fiel à referência + migrations/queries + RLS + tests + preview + actions reais + documentação do uso. Ao finalizar cada módulo, produzir teste ponta-a-ponta: criar item, salvar rascunho, publicar, mudar destaque/ordem, refletir no site e arquivar.

## Não escopo
Não implementar edição direta de domínio de cliente, publicação em redes sociais ou coleta de seguidores de redes sem OAuth e integração autorizada. O módulo Social Media é inicialmente um **catálogo de trabalhos do portfólio**.
