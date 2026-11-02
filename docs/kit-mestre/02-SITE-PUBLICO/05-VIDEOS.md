# Página Vídeos — `/videos`

**Referência:** `04-VIDEOS-VERTICAL-HORIZONTAL.webp`.

## Narrativa visual
- Tema predominantemente preto com roxo/lavanda de acento.
- Hero `Narrativas que conectam pessoas.` com texto objetivo e **dois formatos demonstrados**: celular com conteúdo vertical 9:16 e player/device largo com horizontal 16:9. Sem deformar ou cortar aleatoriamente.
- Uma faixa lavanda `Vídeos para diferentes objetivos.` e chips de Estratégia e roteiro, Captação, Edição e pós-produção, Conteúdo para redes, Eventos e coberturas.
- Seção `Tipos de formatos.` com dois cards grandes: Vídeos verticais (Reels/TikTok/Shorts) e horizontais (YouTube, eventos, cases, palestras).
- Seção preta `Todos os vídeos.` com grid 3 col desktop, 2 tablet, 1 mobile; miniatura, ícone play, título, categoria, tempo **real** e filtro de orientação/plataforma.
- CTA final padrão.

## Player
Usar `video` nativo quando o vídeo for hospedado no storage/CDN; integrar YouTube/Vimeo com embed permitido e consentimento quando necessário. Video não carregar autoplay com som. Thumb 16:9 ou 9:16 adequada e lazyload. Em celulares, tratar `playsinline`. Em vídeos externos, preservação de direitos/licença.

## Modelo CMS
`videos`: `id`, `title`, `slug`, `summary`, `category`, `orientation`, `platform`, `video_url | storage_key`, `poster_asset_id`, `duration_seconds`, `featured`, `sort_order`, `status`, `published_at` e `rights_approved`.

## QA
Cards com orientação certa, filtros funcionais, miniaturas reais, players acessíveis, overlays acionáveis, sem duração inventada. Se não houver formatos suficientes, seção se adapta ao acervo real.
