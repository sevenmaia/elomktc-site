---
name: avsm-performance
description: Quality gate de performance e acessibilidade para AVSM LP e Web Pro. Use para controlar bundle, imagens, fontes, motion, 3D/WebGL, Core Web Vitals, reduced-motion e fallback.
---

# AVSM Performance

## LP
Priorizar:
- HTML/CSS leve;
- imagens otimizadas;
- lazy loading abaixo da dobra;
- poucas fontes/pesos;
- JS mínimo.

## Web Pro
Separar:
- core content;
- enhancement;
- cinematic layer.

O core precisa continuar funcional se o enhancement falhar.

## Bundle
Evitar:
- duas libs de animação sem necessidade;
- várias libs de UI sobrepostas;
- importar módulos inteiros quando há import granular;
- 3D no bundle inicial quando aparece muito abaixo da dobra.

## Fontes
- usar pesos necessários;
- preload somente crítico;
- fallback aceitável.

## Motion
- reduced motion;
- evitar layout thrashing;
- preferir transform/opacity.

## 3D
Consultar `avsm-3d`.

## Accessibility
- semântica;
- keyboard;
- focus;
- contrast;
- alt;
- conteúdo principal fora de Canvas;
- estados reduzidos de motion.

## Gate final

```text
[ ] página funciona sem animação
[ ] conteúdo principal está acessível
[ ] não há dependência redundante
[ ] imagens têm tamanho adequado
[ ] mobile foi testado
[ ] motion possui fallback
[ ] 3D possui fallback quando aplicável
```
