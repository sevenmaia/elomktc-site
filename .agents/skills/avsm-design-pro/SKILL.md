---
name: avsm-design-pro
description: Diretor de arte e revisor visual da suíte AVSM. Use para corrigir hierarquia, composição, grid, tipografia, espaçamento, imagens, iconografia e qualidade percebida, evitando layouts espremidos e aparência genérica de IA/template.
---

# AVSM Design Pro

## Regra principal
Design precisa respirar.

## Revisão de hierarquia
- H1 é dominante?
- CTA principal está evidente?
- informação secundária recua?
- existe uma ordem visual?

## Grid
- alinhamento;
- largura;
- colunas;
- margens;
- consistência.

## Espaçamento
Sinais de problema:
- tudo cabe "perfeitamente" numa tela;
- cards têm parágrafos apertados;
- títulos encostam no conteúdo;
- muitas colunas;
- pouco padding vertical.

Corrigir aumentando:
- section spacing;
- card padding;
- gutters;
- line-height;
- max-width adequado.

## Anti-template
Evitar:
- card em toda seção;
- border em tudo;
- badge em tudo;
- microtexto;
- tudo centralizado;
- ícones sem função;
- gradientes gratuitos;
- sombras pesadas.

## Geometria Criativa de Componentes (Cards & Superfícies)

**Regra principal:** Cards não precisam ser sempre retângulos idênticos com `border-radius`. O design deve dominar diferentes geometrias e escolher o formato com maior aderência e intenção para a narrativa do projeto.

### Formatos e variações
- **Square Cards:** cards quadrados, com cantos retos e precisão técnica.
- **Rounded Cards:** arredondamentos sutis ou acentuados com proporções harmônicas.
- **Outlined Cards:** foco em contornos e bordas visíveis, simples ou duplas.
- **Folder Cards:** formato de pasta com aba superior recortada (estilo assinatura de arquivos/cases).
- **Asymmetric Cards:** cantos com raios e curvaturas desiguais para dinamismo.
- **Cut-Corner Cards:** cantos chanfrados ou recortados geometricamente.
- **Notched Cards:** recortes entalhados internos e externos.
- **Ticket Cards:** formato de bilhete/ingresso com recortes circulares ou serrilhados nas laterais.
- **Editorial Cards:** composições assimétricas com contrastes fortes e tipografia marcante.
- **Split Cards:** divisões diagonais, blocos ou contrastes criativos entre imagem e conteúdo.
- **Overlapping Cards:** camadas sobrepostas e planos em profundidade.
- **Custom-Shaped Cards:** silhuetas orgânicas ou personalizadas via SVG, `clip-path` ou máscaras CSS.

### Regras obrigatórias de geometria
1. **Sem piloto automático:** não aplicar mecanicamente o mesmo card arredondado em todos os projetos.
2. **Exploração consciente:** avaliar alternativas geométricas durante a etapa de wireframe e direção de arte.
3. **Ergonomia e legibilidade:** a geometria nunca pode espremer textos, ocultar botões ou prejudicar contraste e acessibilidade.
4. **Técnicas limpas:** usar `clip-path`, `border-radius` assimétrico, pseudoelementos CSS ou cabeçalhos SVG perfeitos conforme a complexidade.
5. **Responsividade total:** garantir que formas recortadas mantenham alinhamento estável em desktop, tablet e mobile sem quebras de layout.
6. **Intenção sobre decoração:** toda variação geométrica deve reforçar o conceito da marca ou do conteúdo.
7. **Consistência de sistema:** componentes com formatos especiais ainda devem respeitar a grade, paleta de cores e tipografia global.
8. **Anti-repetição de tendências:** Folder Cards e outros formatos expressivos são ferramentas de repertório, não um novo padrão para ser replicado indiscriminadamente.

### Referência aprovada
- **Seção "Meus projetos" (Eloisa Cunha):** 4 cards em formato de pasta (*Folder Cards*) com aba superior assimétrica e curva de transição suave, alternando superfícies preto profundo e lilás/magenta, tipografia editorial e botão circular de navegação. Exemplo prático de quebra de monotonia de templates.
- **Diretriz de Reutilização de Componentes Oficiais:** `ProjectFolderCard` é um componente oficial do projeto Eloisa Cunha. Sempre que o mesmo padrão visual for solicitado em outra página, reutilizar a implementação original (`src/components/projects/ProjectFolderCard.tsx`). Não recriar nem aproximar o design. Essa regra também vale para botões, cards de serviços, indicadores, cabeçalhos e outros componentes compartilhados.

## Quality Gate

```text
[ ] Hierarquia clara
[ ] H1 forte
[ ] CTA dominante
[ ] Seções respiram
[ ] Cards não estão comprimidos
[ ] Geometria e formato dos cards intencionais (sem monotonia de template)
[ ] Parágrafos legíveis
[ ] Imagem parece intencional
[ ] Mobile tem composição própria
[ ] Não parece template genérico
[ ] Não parece "feito por IA"
```
