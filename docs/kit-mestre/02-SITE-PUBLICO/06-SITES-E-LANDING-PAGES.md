# Página Sites e Landing Pages — `/sites`

**Referência refinada:** `05-SITES-GRID-CORRIGIDO.webp`. Esta é a referência principal, pois a primeira versão ficou espremida.

## Seções
1. Hero lavanda `Sites e Landing Pages que convertem.` com laptop/case em destaque ao lado, copy curta e CTAs.
2. Faixa de benefícios: Landing Pages, Sites Institucionais, SEO e GEO, Copywriting, UX e Conversão.
3. **Projetos em destaque** preto com H2 e CTA. Layout obrigatório:
   - 1 case principal `Bagueira Seguros` numa faixa própria de altura generosa, imagem 16:9 à esquerda (mockup responsivo real) e texto à direita.
   - Uma linha inferior com **3 cases de mesma altura**: `Vogue Portas`, `EasyCon`, `Luz da Luna` (confirmar links, nomes e autoria). Cada card: thumb no topo, label categoria, nome e link Ver site. Gap 20–28px, respiro interno ≥20px, bordas e proporções consistentes.
   - Mobile: destaque empilhado, casos secundários 1 col. Nunca empurrar imagem/texto para uma linha estreita.
4. Seção branca `Conteúdo pensado para ser encontrado.` com diagrama SEO central e quatro tópicos: SEO on-page, SEO off-page, GEO (visibilidade em IA generativa), SEO técnico. Texto correto: sem promessas de ranking.
5. Processo em fundo preto: Pesquisa e estratégia, Arquitetura e UX, Copywriting e SEO, Design e desenvolvimento. Caso Eloisa cuide apenas do conteúdo/copy de sites e não do desenvolvimento integral, ajustar a oferta à realidade.
6. CTA final lavanda.

## Dados
`projects`: tipo site/landing_page, cliente, capa 16:9, descrição, serviços executados, escopo/autoria, URL de acesso, destaque e ordem. Caso principal `featured_slot='hero'` e outros `featured_slot='secondary'`, com fallback definido.

## Aceite visual
Case principal tem destaque e espaço próprios; segunda linha três colunas regulares; cards não ficam achatados; nada cortado; tipografia e labels legíveis; links externos abrem com `noopener noreferrer` quando `target=_blank`.
