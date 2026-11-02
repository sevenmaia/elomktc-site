---
name: avsm-3d
description: Direciona experiências 3D/WebGL AVSM para sites Web Pro. Use quando Three.js, React Three Fiber, shaders, GLTF/GLB, partículas ou câmera 3D tiverem função real de produto, narrativa ou identidade.
---

# AVSM 3D

## Quando usar
3D precisa cumprir pelo menos uma função:
- demonstrar produto;
- explorar objeto;
- explicar forma;
- construir narrativa;
- reforçar identidade;
- permitir interação espacial.

## Quando não usar
Não usar para:
- esfera aleatória;
- cubo girando;
- fundo "tech" genérico;
- preencher espaço;
- parecer avançado.

## Stack

### React existente
Considere:
- Three.js;
- `@react-three/fiber`;
- `@react-three/drei`.

### Não React / runtime menor
Avalie:
- Three.js direto;
- OGL quando escopo for realmente menor.

## Assets
- GLTF/GLB preferencial;
- comprimir geometria/texturas quando adequado;
- limitar resolução;
- lazy-load;
- placeholder enquanto carrega.

## Render
- controlar DPR;
- evitar render contínuo se cena estática;
- pausar quando invisível;
- reduzir pós-processamento em mobile.

## UX
DOM continua responsável por conteúdo principal sempre que possível.

Nunca colocar texto essencial exclusivamente dentro do canvas.

## Fallback
Para dispositivo fraco/reduced motion:
- poster;
- imagem;
- vídeo curto;
- cena simplificada;
- estado estático.

## Camera storytelling
Se scroll controla câmera:
- movimento previsível;
- evitar enjoo;
- não prender o usuário;
- permitir conteúdo acessível fora da cena.
