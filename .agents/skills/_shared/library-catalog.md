# Curated Web Library Catalog

Este catálogo é um ponto de partida, não uma ordem para instalar.

**Sempre verificar documentação, repositório, licença, manutenção, compatibilidade e necessidade atual antes de usar.**

## Motion / animation

### GSAP
Uso:
- timelines complexas;
- ScrollTrigger;
- pin/scrub;
- SVG;
- storytelling;
- sequencing.

Fonte:
`https://github.com/greensock/GSAP`

### Motion
Uso:
- React/UI motion;
- layout animation;
- gestures;
- microinterações;
- animações declarativas.

Fonte:
`https://github.com/motiondivision/motion`

## Smooth scroll

### Lenis
Uso:
- smooth scroll;
- sincronização com WebGL;
- experiências editoriais.

Fonte:
`https://github.com/darkroomengineering/lenis`

Não instalar apenas porque o projeto é "premium".

## 3D / WebGL

### Three.js
Uso:
- WebGL/3D;
- câmera;
- materiais;
- partículas;
- shaders;
- experiências de produto.

Fonte:
`https://github.com/mrdoob/three.js`

### React Three Fiber
Uso:
- Three.js dentro de apps React;
- composição declarativa;
- integração com estado React.

Fonte:
`https://github.com/pmndrs/react-three-fiber`

### Drei
Helpers para React Three Fiber.

Fonte:
`https://github.com/pmndrs/drei`

### OGL
Considerar para experiências WebGL menores/mais diretas quando o projeto não precisa do ecossistema completo do Three.js.

Fonte:
`https://github.com/oframe/ogl`

## Creative 2D / Canvas

### PixiJS
Uso:
- Canvas/WebGL/WebGPU 2D;
- partículas;
- composição gráfica;
- interações visuais 2D.

Fonte:
`https://github.com/pixijs/pixijs`

## Timeline / creative tooling

### Theatre.js
Uso:
- animação de alta fidelidade;
- sequenciamento visual;
- animação de cenas 3D.

Fonte:
`https://github.com/theatre-js/theatre`

Verificar estado atual do projeto antes de adotar.

## UI

### Radix UI
Primitivos acessíveis para React.

Fonte:
`https://github.com/radix-ui/primitives`

### shadcn/ui
Componentes reutilizáveis que entram no código do projeto.

Fonte:
`https://github.com/shadcn-ui/ui`

Não deixar todo site com "cara de shadcn".

## Ícones

### Lucide
Fonte:
`https://github.com/lucide-icons/lucide`

## Sliders

### Swiper
Use somente quando carousel/slider realmente for necessário.

Fonte:
`https://github.com/nolimits4web/swiper`

## Rich media

### Rive
Para animações interativas criadas no ecossistema Rive.

Fonte:
`https://github.com/rive-app/rive-wasm`

### Lottie
Para assets Lottie quando já houver animação exportada.

Antes de escolher runtime, verificar o ecossistema atual.

## Física

### Matter.js
Para física 2D quando a interação justificar.

Fonte:
`https://github.com/liabru/matter-js`

## Regra de ouro

```text
CSS nativo
↓
API nativa da plataforma
↓
biblioteca já instalada
↓
biblioteca pequena e especializada
↓
biblioteca avançada
↓
3D/WebGL
```

Subir essa escada somente quando necessário.
