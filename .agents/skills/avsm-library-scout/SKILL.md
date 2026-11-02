---
name: avsm-library-scout
description: Pesquisa, compara e seleciona bibliotecas e repositórios para AVSM Web Pro. Use antes de instalar novas dependências para motion, 3D, WebGL, UI, Canvas, physics ou creative coding. Avalia fonte oficial, licença, manutenção, compatibilidade, bundle e necessidade.
---

# AVSM Library Scout

## Regra
Não confundir "popular" com "correto para o projeto".

## Processo

```text
problema
↓
browser/CSS resolve?
↓
já existe solução no projeto?
↓
há biblioteca especializada?
↓
pesquisar fonte oficial + GitHub
↓
verificar manutenção/licença
↓
comparar peso e compatibilidade
↓
escolher
↓
instalar apenas com justificativa
```

## Critérios
- origem oficial;
- licença;
- atividade;
- documentação;
- releases;
- issues críticas;
- compatibilidade;
- React/SSR se aplicável;
- TypeScript;
- bundle;
- dependências;
- accessibility;
- performance;
- risco de abandono.

## Pesquisa
Quando internet estiver disponível:
- preferir documentação oficial;
- preferir repositório oficial;
- evitar posts antigos como fonte principal;
- verificar status atual antes de adotar.

## Catálogo
Consultar:
`../_shared/library-catalog.md`

Se o path relativo não estiver acessível no ambiente, localizar `_shared/library-catalog.md` na raiz da suíte.

## Agent Skills oficiais
Consultar:
`../_shared/vendor-agent-skills.md`

## Saída curta
Quando houver dúvida entre opções:

```text
Necessidade:
Escolha:
Por quê:
Custo/risco:
Alternativa:
```

Não gerar relatório grande se não for necessário.
