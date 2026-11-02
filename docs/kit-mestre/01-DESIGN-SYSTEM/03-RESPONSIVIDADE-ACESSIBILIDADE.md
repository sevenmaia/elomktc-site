# Responsividade, motion, acessibilidade e QA visual

## Breakpoints de projeto (não depender de aparelho específico)
| Largura | Container | Grids | Observações |
|---|---|---|---|
| 320–479px | 100%, 20px margem | 1 col. | Hero 42px, botões empilhados, pastas em lista |
| 480–767px | 100%, 24px | 1–2 col. | Carrossel 1.15 card/viewport |
| 768–1023px | 100%, 32px | 2 col. | Navbar colapsa conforme espaço |
| 1024–1279px | 100%, 40px | 2–3 col. | Site grid secundário 3 col se couber |
| ≥1280px | max 1200px | 3/4 col. | Hero centrada e linhas completas |

### Regras por página
- Home: hero `min-height` orientado pelo conteúdo, não travar em `100vh`; especialidades com wrap ou scroll acessível; Sobre com foto e texto lado a lado desktop, empilhados mobile; serviços 3×2 → 2×3 → 1×6; pastas 4×1 → 2×2 → 1×4.
- Sites: case em destaque 2 col internas, três mini-cases 3 col desktop, 1 col mobile; miniaturas não podem esmagar texto nem sofrer crop inapropriado.
- Artigos: 2 col desktop com imagens e texto equilibrados, 1 col mobile; filtros com overflow e labels curtas.
- Vídeos: proporções reais 16:9 e 9:16; nunca tratar vertical como thumb horizontal cortada. Slider com cards visíveis e botões.
- Bio: conteúdo mobile-first até ~680px em desktop; CTA full width.
- Admin: sidebar colapsável; tabela com scroll horizontal controlado e alternativa lista/cartões para mobile.

## Acessibilidade
WCAG 2.2 AA como objetivo; testar 4.5:1 em texto normal, 3:1 em títulos grandes e componentes/controles quando aplicável. Foco visível, landmarks, hierarquia de heading, contraste de texto em lavanda, não depender apenas de cor para status. Tab, Enter, Space e Escape; formulários com validação textual.

## Motion
Duração micro 160–240ms; entradas por scroll discretas e não essenciais. Respeitar `prefers-reduced-motion`. Evitar parallax pesado, background video automático, autoplay de áudio e animações piscantes. Carrossel não avança sozinho; usuário escolhe.

## Performance
Meta inicial Lighthouse (laboratório) ≥90 em Performance/Accessibility/Best Practices/SEO como objetivo, não garantia. LCP bom (≤2,5s p75), CLS ≤0,1 e INP ≤200ms, medidos em usuários reais se possível. Hero sem mídia favorece LCP. Fontes `next/font`, imagens responsivas, lazyload nas seções abaixo da dobra.

## Checklist de revisão
- [ ] 320/375/390/768/1024/1280/1440/1920px sem overflow.
- [ ] Header sem itens apertados e menus acessíveis.
- [ ] Hero alinhada, sem foto e sem desnível; copy aprovada.
- [ ] Cards pasta com a mesma altura por linha, aba correta e CTA navegável.
- [ ] Sem truncamento que esconda informação importante.
- [ ] Teclado e leitor de tela (NVDA/VoiceOver) verificados.
- [ ] SEO e metadata por página.
- [ ] Layout comparado lado a lado com referência visual aprovada.
