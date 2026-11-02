---
name: avsm-token-saver
description: Mantém tarefas AVSM eficientes, reduzindo leitura de arquivos, chamadas, contexto, refactors e validações desnecessárias. Use junto de LP e Web Pro.
---

# AVSM Token Saver

## Fluxo
```text
localizar
→ entender
→ alterar
→ validar
→ parar
```

## Regras
- não ler repositório inteiro;
- não repetir leitura já suficiente;
- localizar página/componente primeiro;
- abrir apenas dependências relacionadas;
- alterar em lote;
- não refatorar código fora do escopo;
- não criar documentação sem pedido;
- não instalar pacote para efeito simples;
- não rodar múltiplas validações redundantes;
- não mexer em backend se a tarefa é visual;
- não fazer deploy sem pedido.

## Decisão
A menor alteração correta é preferível à maior refatoração elegante.
