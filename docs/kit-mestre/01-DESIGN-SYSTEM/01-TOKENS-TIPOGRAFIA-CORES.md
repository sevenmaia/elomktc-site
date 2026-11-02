# Design System ELOMKT C — v1.0

> Especificação-alvo baseada nas telas visuais aprovadas. Códigos de cores e fontes abaixo são **tokens propostos** para implementação coerente, não extração comprovada do CSS do site atual. Ajustes finos por comparação visual são permitidos sem descaracterizar a identidade.

## 1. Personalidade visual
Editorial, criativo e elegante; contrastes altos; hero tipográfica; formas simples; gradientes leves; cards de leitura rápida; preto profundo, roxo vibrante, lilás translúcido e branco. Evitar estética genérica de template SaaS no site público.

## 2. Paleta oficial (sRGB/HEX)
| Token | Valor | Aplicação |
|---|---|---|
| `--color-ink` | `#0B0B0F` | fundo preto, textos fortes |
| `--color-ink-soft` | `#1B1B20` | cards dark |
| `--color-primary` | `#A40DDB` | roxo principal, CTA, ícones |
| `--color-primary-hover` | `#8F08C0` | hover ativo |
| `--color-magenta` | `#C013B9` | detalhes de impacto, acento alternativo |
| `--color-lavender` | `#C677E0` | grandes superfícies claras |
| `--color-lavender-soft` | `#EBD2FA` | hero, faixas, fundos suaves |
| `--color-lilac-50` | `#F8F2FD` | áreas claras e cards auxiliares |
| `--color-white` | `#FFFFFF` | corpo do site, textos escuros invertidos |
| `--color-muted` | `#646475` | texto secundário |
| `--color-border` | `#E9E2EE` | bordas em fundo claro |
| `--color-dark-border` | `#2C2932` | bordas em fundo escuro |
| `--color-success` | `#159A67` | status no admin, nunca decorativo |
| `--color-warning` | `#B87405` | status de rascunho, atenção |
| `--color-danger` | `#C63F4D` | ações destrutivas |

**Gradientes:** `linear-gradient(120deg, #F6E7FF 0%, #DCACF8 55%, #C977E8 100%)` (hero e CTA); `linear-gradient(135deg, #A40DDB, #C013B9)` em ação primária curta. Evitar sobreposição pesada de brilho ou neon.

### Tokens CSS iniciais
```css
:root {
  --color-ink: #0B0B0F;
  --color-ink-soft: #1B1B20;
  --color-primary: #A40DDB;
  --color-primary-hover: #8F08C0;
  --color-magenta: #C013B9;
  --color-lavender: #C677E0;
  --color-lavender-soft: #EBD2FA;
  --color-lilac-50: #F8F2FD;
  --color-white: #FFFFFF;
  --color-muted: #646475;
  --color-border: #E9E2EE;
  --color-dark-border: #2C2932;
  --radius-sm: 8px;
  --radius-card: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;
  --content-max: 1200px;
  --gutter: clamp(20px, 4.8vw, 64px);
  --section-y: clamp(72px, 8vw, 128px);
  --shadow-soft: 0 14px 44px rgba(20,0,40,.08);
  --transition-ui: 180ms ease;
  --focus: 3px solid #8F08C0;
}
```

## 3. Fontes e pesos
**Títulos:** `Poppins` 600–800, preferência 700/800 em headlines. **Texto de interface e parágrafos:** `Inter` 400/500/600/700. Fallback `Arial, sans-serif`. Usar `next/font` ou carregamento otimizado local, sem fontes enviadas em pacotes.

| Estilo | Desktop | Mobile | Peso | Line-height |
|---|---|---|---|---|
| Display Hero | `clamp(54px, 7.0vw, 108px)` | 42–60px | 800 | 0.98–1.04 |
| H1 internas | `clamp(48px, 6vw, 80px)` | 40–54px | 800 | 1.02 |
| H2 seções | `clamp(38px, 4.2vw, 64px)` | 30–42px | 750–800 | 1.07 |
| H3 cards | 20–26px | 18–22px | 650–700 | 1.16 |
| Lead | 18–21px | 16–18px | 400 | 1.5 |
| Parágrafo | 15–17px | 15–16px | 400 | 1.55 |
| Label editorial | 11–12px | 11px | 700 | 1.4; letter-spacing 0.16em |
| Botão | 14–15px | 14px | 600–700 | 1.2 |

Não usar texto com `justify`. Max-width para hero ~920px e para parágrafos 56–64ch; conteúdo de card até 4 linhas. Letras maiúsculas só labels e tags curtas.

## 4. Escala espacial
Base 4/8px: `4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128`.  
Containers: 1200px público e até 1600px admin. Margem lateral 20px mobile, 32px tablet, 48–64px desktop. Gap grid: 20–28px; não encostar cards. Seções alternadas preto, branco e lavanda sem criar excesso de divisórias.

## 5. Hierarquia e ordem de ênfase
1. Hero / título principal (uma ideia, impacto máximo).
2. Frase descritiva curta e CTA primário.
3. Demonstração visual com prova real (case/portfólio).
4. Benefícios tangíveis e informação complementar.
5. CTA final.

Na Home, o elemento principal da hero é **texto centralizado**, nunca retrato, mockup de notebook ou animação que o desloque.

## 6. Botões
- Primário: tinta preta ou roxo em fundo claro; branco em fundo escuro apenas com contraste verificado; `min-height: 44px`.
- Secundário: fundo transparente + contorno 1px; hover com fundo suave.
- Link textual: underline seletivo, ícone seta, foco visível.
- Nunca botões puramente visuais: direcionar a rota, modal ou ação real.

## 7. Cards pasta (assinatura do projeto)
- Aba superior recortada à esquerda; bordas arredondadas, `border-radius` 16px.
- Altura automática com mínimo de 200px desktop; **mesma altura por linha**.
- Conteúdo label 11px + título ~20px + descrição 2–3 linhas + seta.
- Cores intercaladas: preto, lilás, preto, magenta/roxo; não usar degradês exagerados.
- Criar forma com CSS `clip-path: path(...)` apenas se responsivo, ou com `::before` + `border-radius`, preferencialmente DOM acessível sem mascarar conteúdo.
- Ícone/seta só serve como detalhe; card inteiro é link navegável com foco.

## 8. Fotografia e mídia
Fotos originais, sem alterar aparência, preferir crop cover com `object-position` validado. Imagens preview reais, sem recortar arte gerada para simular telas. `next/image` com sizes adequados; thumbnail 16:9 para sites, 9:16 para reels, 1:1 para posts; preservar formatos corretos e alt descritivo.
