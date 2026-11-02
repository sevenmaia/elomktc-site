# Biblioteca de componentes, slots e estados

## Camada base
- `SiteHeader`: logo/wordmark, links [Home, Sobre mim, Social Media, Vídeos, Sites, Artigos], social links e CTA Fale comigo; ativo por rota, mobile menu acessível.
- `SiteFooter`: CTA lavanda, redes e contato; sem endereço físico se não validado.
- `SectionShell`: container e padding vertical padronizado, modo light/dark/lavender.
- `Eyebrow`: pequena etiqueta editorial uppercase com tracking.
- `SectionHeading`: label, H2, descrição opcional, CTA opcional.
- `Button`: primary/secondary/outline/icon, loading/disabled.
- `MediaFigure`: `next/image`, proporção, legenda e placeholder para não provocar layout shift.
- `Badge`: tags de categoria, sem usar como substituto de estados de acessibilidade.
- `FolderCard`: categoria, título, subtítulo, tema, link, ordem; formato pasta obrigatório.
- `WorkCard`: miniatura 16:9, tipo, título, descrição, link, tags, sem métricas falsas.
- `ArticleCard`: capa, título, data, categoria, resumo, leitura estimada opcional.
- `HorizontalScrollCarousel`: controle anterior/próximo, `aria-label`, rolagem horizontal e scroll snap; interações de teclado e swipe.
- `VideoPlayer`: usa `video` nativo ou player de plataforma consentido, poster, pausa, controles, ratio 16:9 ou 9:16.
- `FAQ`/`Accordion` opcional quando existir conteúdo real.
- `LeadForm`: seleção multi-serviço, validação, mensagem, consentimento, envio e estado de sucesso/erro.
- `EmptyState`, `Skeleton`, `ConfirmDialog`, `Toast` e `Pagination` para o admin.

## Variantes e comportamento
### SiteHeader
- Desktop `position: sticky` opcional após comparação visual; mantém links em linha e roxo no link ativo.
- Mobile: logo + menu hamburger botão com `aria-expanded`; drawer/foco preso dentro; Escape fecha.
- O CTA para contato direciona `/orcamento` (não uma URL falsa).

### FolderCard / ProjectFolderCard (Regra Oficial de Reutilização)
> **DIRETRIZ MANDATÓRIA DE COMPONENTE OFICIAL:**
> `ProjectFolderCard` (`src/components/projects/ProjectFolderCard.tsx`) é um componente oficial do projeto Eloisa Cunha. Sempre que o mesmo padrão visual for solicitado em outra página, reutilizar a implementação original. Não recriar nem aproximar o design.
> Essa regra também vale para botões, cards de serviços, indicadores, cabeçalhos e outros componentes compartilhados.

- Localização oficial: `src/components/projects/ProjectFolderCard.tsx` e `src/components/projects/FeaturedProjectsSection.tsx`.
- Geometria oficial: SVG tab recortada idêntica com viewBox `0 0 300 36` e path `M 0 36 L 0 16 Q 0 0 16 0 L 126 0 Q 140 0 150 14 Q 158 24 172 24 L 284 24 Q 300 24 300 36 Z`.
- `data-tone: dark | lavender | magenta`; tab recortada igual em todos.
- Conteúdo padronizado: Categoria em uppercase tracking, H3 título, parágrafo de descrição e botão circular com ícone seta no canto inferior.
- Hover translateY(-4px) + transição leve; focus-visible outline; motion reduzido desliga deslocamento.
- Navegação inteira clicável, sem `button` dentro de `a`.
- A ordem é configurável pelo CMS; esconder não-publicados automaticamente.

### Artigos / projetos
- Cards podem usar preto/lilás alternados sem alterar quantidade ou ordem real.
- Scroll carousel usa dados CMS, não vídeo demonstrativo.
- Área mínima de toque 44×44px.
- Filtros atualizam URL (`?categoria=...`) e lista, mantendo histórico navegável.

### Mockups de Dispositivos (Regra Obrigatória de Assets Profissionais)
> **DIRETRIZ MANDATÓRIA — MOCKUPS DE DISPOSITIVOS:**
> - **Não criar mockups do zero com CSS:** É terminantemente proibido desenhar notebooks ou smartphones utilizando divs, bordas artificiais, sombras sintéticas ou vetores desenhados manualmente.
> - **Priorizar assets profissionais existentes:** Utilizar molduras fotográficas/renderizadas de hardware real (MacBook Pro / iPhone), em alta resolução, com fundo transparente e área de tela com canal alfa independente.
> - **Componente oficial `LaptopMockup` (`src/components/sites/LaptopMockup.tsx`):**
>   - Recebe a captura real do projeto (`image`), texto alternativo (`altText`), identificação (`id`), configuração de enquadramento (`objectPosition`) ou renderização interna rica (`children`).
>   - A moldura do notebook permanece independente da imagem exibida na tela.
>   - Área de tela calculada matematicamente (área útil de 80.75% × 85.07%, proporção 16:10).
>   - Nunca utilizar capturas recortadas de baixa resolução ("prints") ou imagens geradas por IA no lugar de fotografias e capturas reais dos projetos.

### Form e admin
- Inputs com label visível, `aria-invalid` e descrição do erro específica.
- `saveDraft`, `publish`, `unpublish`, `reorder`, `setFeatured`, `deleteToTrash` separados; cada operação exige feedback real da API.
- Upload indica limites/formato/progresso, aplica verificação de arquivo, permite alt.
- Todas as ações destrutivas exigem confirmação; undo ou lixeira onde possível.

## Estados obrigatórios
1. Padrão.
2. Hover.
3. Foco por teclado.
4. Pressionado/selecionado.
5. Loading com prevenção de duplo envio.
6. Disabled com justificativa.
7. Erro específico + opção de tentar novamente.
8. Vazio com instrução produtiva.
9. Sucesso confirmado **após** resposta do servidor.

## Semântica
1 H1 por documento, seções com H2, cards H3 quando fizer sentido. Imagens com alt contextual, decorativas com alt vazio. Não usar tabs falsas, botões sem ação ou emojis no lugar de ícones oficiais. Ícones Lucide, Tabler ou logos oficiais de marca conforme licença; manter um único conjunto predominante.
