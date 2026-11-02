# Taxonomias, validação e modelos editoriais

## Serviços
`planejamento_estrategico`, `producao_de_conteudo`, `gestao_de_redes`, `copywriting`, `seo_geo`, `campanhas_trafego`, `videos`, `sites_landing_pages`, `eventos`, `consultoria` — habilitar apenas os confirmados.

## Categorias de portfólio
`site`, `landing_page`, `article`, `campaign`, `social_media`, `video`, `email`, `other`.

## Orientação de mídia
`vertical_9_16`, `horizontal_16_9`, `square_1_1`, `portrait_4_5`.

## Status
Conteúdo: `draft`, `scheduled`, `published`, `archived`. Leads: `new`, `contacted`, `proposal_sent`, `negotiating`, `won`, `lost`, `archived`.

## Validação editorial
- Título: até ~100 caracteres para UI, mais se artigo precisar; ajustar layout, não cortar significado.
- Resumo: até ~160–240 caracteres em cards.
- Slug: 3–120 caracteres, lowercase, hífen, transliteração de acentos, único.
- Tags: 0–8 por item, sem duplicatas, rótulos consistentes.
- Links: URL absoluta `https` ou interna relativa permitida, testar acessibilidade.
- Imagem: alt conciso com significado; crédito e licença.
- Datas: sempre com timezone quando calendário/agendamento.
- **Fonte de verdade:** conteúdo real autorizado; nunca tomar texto legível no mockup como corpo completo de artigo.

## Esquema de featured
Cada entrada pode ocupar uma ou mais vitrines: `home_folders`, `site_primary`, `site_secondary`, `social_carousel`, `video_featured`, `article_grid`, `bio_featured`, `about_featured`. Constraints: 1 primary em Sites, até 3 secondary, até 4 home folder cards, etc. O mesmo item não precisa ser duplicado no banco.

## Diretrizes de migração
1. Levantar URLs e capturas atuais.
2. Associar cada item à fonte original e evidência de autoria/licença.
3. Importar em staging com status draft.
4. Confirmar copy, link e imagem com a cliente.
5. Publicar e mapear redirect de slug quando necessário.
