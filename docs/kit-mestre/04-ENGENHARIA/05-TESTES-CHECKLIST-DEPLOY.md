# Qualidade, testes, observabilidade e publicação

## Testes automáticos
- Unitários: normalização de slug, whitelist de tema, seleção de featured, sort_order, validação de lead, sanitização de rich text, geração WhatsApp safe.
- Integração: Supabase RLS (anon/editor/owner), upload, rascunho/publicar, revalidação cache, busca/filtro, idempotência dos leads.
- E2E (Playwright): jornada Home → Sites → projeto; Home → Artigos → artigo; Social Media → carrossel; Vídeos → filtros e player; Link Bio → click; Formulário → DB → abrir WhatsApp; Admin → editar e ver atualização pública.
- A11y axe + inspeção manual teclado/leitor de tela e `prefers-reduced-motion`.
- Visual regression dos breakpoints com imagens aprovadas.

## Testes críticos de segurança
1. Usuário não autenticado não entra em `/admin`.
2. Usuário editor não altera roles/segredos.
3. Não é possível ler leads, rascunhos ou URLs privadas pelo Supabase `anon`.
4. Não aceitar `javascript:` em URLs bio/portfólio.
5. Formulário não cria duplicatas ao reenviar.
6. Upload não aceita conteúdo malicioso, SVG com script, formatos incompatíveis.
7. Conteúdo rich-text não executa XSS.
8. Alterações de ordem são atômicas.

## Checklist de deploy
- [ ] `npm run lint`, `npm run typecheck`, `npm run build` e testes verdes.
- [ ] Variáveis configuradas no servidor, zero segredo em `NEXT_PUBLIC_` indevido.
- [ ] Site oficial/SSL, redirects e canonical corretos.
- [ ] Supabase Auth/RLS/backups e Storage verificados.
- [ ] SEO: sitemap/robots/meta OG, sem `/admin` indexado.
- [ ] LGPD: política, consentimentos e permissões, banner quando aplicável.
- [ ] Formulário validado em smartphone real e WhatsApp correto.
- [ ] Imagens com direitos, alt e compressão; nenhum conteúdo de exemplo.
- [ ] Metrics reais ou `Ainda sem dados` (não inventar).
- [ ] 404, 500, loading, empty states e preview.
- [ ] Mobile 360/390/768/1024/1440px, fontes sem corte.
- [ ] Log de erros com dados sensíveis mascarados e opção de rollback.

## Definição de pronto
O site publicado reproduz o layout aprovado, utiliza dados verdadeiros, mantém rotas e acessibilidade; o painel só mostra dados que existem e suas ações alteram conteúdo com segurança; o formulário salva os leads e abre o WhatsApp conforme o contrato. QA deve gerar relatório de telas e falhas remanescentes.
