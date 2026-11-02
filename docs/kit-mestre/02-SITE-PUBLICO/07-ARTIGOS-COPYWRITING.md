# Artigos & Portfólio de Copy — `/artigos`

**Referência:** `06-ARTIGOS-PORTFOLIO-COPY.webp` (esta foi a versão aprovada).  
**Ponto canônico:** mostrar **projetos reais já realizados** e os artigos autorais, não só exemplos genéricos inventados.

## Composição
1. Hero lavanda com H1 `Textos que conectam e convertem.` e mockup de site/copy autorizado; intro concisa `Copywriting estratégico para sites, landing pages, redes sociais, campanhas e conteúdos que geram resultado para marcas reais.`
2. Chips de filtro em linha com query params: Todos, Sites, Landing Pages, Campanhas, Redes Sociais, E-mails, Artigos. Filtragem client ou server conforme volume, mas URL compartilhável.
3. Grid com 2 cards por linha desktop, alternando tema escuro e lilás, cada um dividindo imagem e copy (não mini-cards de texto comprimido).
4. Cada card: imagem real, categoria, título, 2–3 linhas descritivas, tags, link `Ver projeto` ou `Ler artigo`. Não inventar resultados ou escopo.
5. Paginação/Carregar mais e CTA final.

## Inventário para migrar da página de artigos original
**Títulos identificados nas capturas (revisar título exato, autoria, consentimento e URL antes da importação):**
- `Você sabe o que realmente gera receita na sua empresa?`
- `Do primeiro contato à expansão: a jornada de receita que o funil tradicional não mostra.`
- `Diga adeus ao velho CRM.`
- `O que faz uma empresa ser vista como referência?`
- `O papel do Branding nas vendas é maior do que você imagina.`
- `Arthur & Vidal: transformando marcas em referências de mercado.`
- `A decisão do STJ mudou o jogo para quem investe em Short Stay.`
- `85 anos construindo confiança e relacionamentos duradouros.`
- `Contabilidade em Jundiaí e São Paulo.`
- `A pressa de dar certo na internet.`
- `Por que sua empresa não deve estar em todas as redes sociais.`

Os cartões de Bagueira Seguros, Vogue Portas, EasyCon e Luz da Luna são bons exemplos de `Sites/LP` **somente depois de confirmar qual copy foi realmente desenvolvida pela profissional**. Nunca atribuir a Eloisa o trabalho de terceiros apenas por estar em mockups.

## Artigo individual
`/artigos/[slug]`: h1, data, autor, imagem de capa, corpo estruturado (H2/H3, parágrafos, listas, links), CTA para contato, relacionados. Compartilhamento social; canonical e Article JSON-LD se válido. Publicar apenas texto autorizado, sem copiar corpo não fornecido.

## Modelo de dado
`articles` e `projects` compartilham uma camada de vitrine `portfolio_entries` (ver arquitetura). `entry_kind: article | site | landing_page | campaign | social_copy | email`, tags, categoria, imagens, créditos, `sort_order`, `is_featured`, status e slug.

## QA
Filtros sem reset indevido; grid não espremido; captions legíveis; `Ver projeto` navega; URL compartilhável; imagens com ALT contextual; metadados exclusivos por artigo.
