# SEO, GEO/AEO, mensuração e desempenho

## Padrões técnicos
- SSR/SSG de conteúdo público importante; metadata por rota e por artigo; canonical absoluto em `https://elomktc.com/`.
- Open Graph e Twitter Card com imagens originais autorizadas; `sitemap.xml` gerado dinamicamente incluindo só publicados e indexáveis; `robots.txt` bloqueando `/admin` e preview (mais autenticação/noindex).
- Schema JSON-LD apropriado: `WebSite`, `Person` (biografia), `Article` (artigo), `BreadcrumbList` quando breadcrumbs existirem. Não simular LocalBusiness ou Review sem evidência real.
- Redirecionamento 301 mapeado quando mudar rota/slug; 404 real para conteúdo inexistente.

## Conteúdo para mecanismos de busca e IA
- Clareza sobre serviços e autoria da profissional; seções que respondem intenção de busca, FAQ útil somente se real, informação de projetos creditada, dados verificáveis e links adequados.
- GEO/AEO: textos semanticamente claros, headings corretos, fontes/autoria/atualização, conteúdo acessível sem JS complexo. **Não prometer que chatbots vão recomendar o site**; não existe garantia de descoberta/ranking.
- Título/descrição para cada rota; atualização `dateModified` coerente; links internos entre serviços, cases e artigos.

## Checklist por página
| Critério | Aceite |
|---|---|
| H1 | um, específico, legível |
| Title | único, atraente e dentro da largura usual, sem truncagem sistemática |
| Description | descrição humana e exclusiva, não keyword stuffing |
| URLs | slug conciso, lowercase, sem mudar à toa |
| Imagens | dimensões, alt e formatos modernos |
| Links | internos úteis, externos seguros, sem broken links |
| Core Web Vitals | medir e otimizar LCP/CLS/INP |
| Canonical | domínio correto, sem conflitos |
| Estruturados | somente dados verdadeiros e elegíveis |

## Analytics de verdade
`page_view`, `bio_link_click`, `project_click`, `contact_cta_click`, `lead_created`, `whatsapp_open_attempted` com nomes de eventos consistentes. Eventos públicos nunca incluem nome, email, telefone, briefing ou IDs sensíveis. Mapeamento de referers por regras transparentes; UTMs são origem declarada, não prova definitiva de atribuição.

## SEO Dashboard: linguagem permitida
- `Checklist SEO 8/10 itens` (heurístico próprio e explicável) é aceitável.
- `Posição Google 3,4` somente se Search Console/consulta real estiver conectada e período definido.
- `Tráfego orgânico 52%` somente com coleta legitimamente registrada.
- Sem integração, exibir `Conecte Search Console` ou `Dados indisponíveis`.

## Performance
Fontes otimizadas; sem JS para layouts estáticos; content streaming cuidadoso; imagens responsivas, preload apenas da hero quando há imagem relevante (Home sem imagem), lazy-load em vídeos e abaixo da dobra, preconnect parcimonioso, `aspect-ratio` para evitar layout shift.
