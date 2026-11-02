---
name: avsm-motion
description: Sistema de motion AVSM para microinterações, GSAP, ScrollTrigger, timelines e experiências de scroll. Use de Motion Level 0 a 5 e ajuste complexidade a UX, performance e acessibilidade.
---

# AVSM Motion

## Motion Level 0
Sem animação.

## Level 1 — Micro
- button feedback;
- focus;
- hover;
- state transition.

## Level 2 — Page motion
- fade;
- short slide;
- stagger;
- section reveal;
- image reveal.

## Level 3 — Advanced
- GSAP;
- ScrollTrigger;
- timeline;
- pin;
- scrub;
- masks;
- kinetic type;
- SVG animation.

## Level 4 — Cinematic
- sequências interligadas;
- transições;
- audiovisual;
- scroll narrative extenso.

## Level 5 — Immersive
- 3D;
- WebGL;
- shader;
- camera;
- particles;
- interactive scene.

## GSAP rules
- preferir timelines;
- centralizar cleanup;
- preferir transform/opacity;
- evitar dezenas de triggers independentes;
- usar matchMedia quando comportamento muda por viewport.

## CSS first
Se CSS resolve bem, CSS é preferível.

## Reduced motion
Para Level 3+:
- respeitar `prefers-reduced-motion`;
- remover scrub/pin excessivo;
- mostrar conteúdo em estado final legível.

## Mobile
Reduzir:
- blur;
- parallax;
- número de objetos;
- partículas;
- shader complexity;
- long timelines.
