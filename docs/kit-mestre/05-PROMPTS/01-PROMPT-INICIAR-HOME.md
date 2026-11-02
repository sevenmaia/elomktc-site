# PROMPT DE EXECUÇÃO 01 — INICIAR O SITE PELA HOME

Implemente a **primeira sprint do site público ELOMKT C**. Não crie painel administrativo neste passo nem implemente as outras páginas completas.

## Leia primeiro
- `05-PROMPTS/00-PROMPT-MESTRE-GLOBAL.md`
- `02-SITE-PUBLICO/02-HOME-BRIEF-DE-IMPLEMENTACAO.md`
- Design System completo `01-DESIGN-SYSTEM/`
- Mockup `07-REFERENCIAS/01-HOME-APROVADA.webp`.

## Objetivo
Criar a home real em Next.js, visualmente equivalente à referência aprovada, com código responsivo e componentes reutilizáveis; preparar navegação sem inventar conteúdo de páginas ainda não implementadas.

## Seções a desenvolver nesta ordem
1. Header: Home/Sobre mim/Social Media/Vídeos/Sites/Artigos + redes + CTA.
2. Hero lavanda de alto impacto, texto **centralizado**, H1 `Estratégia que conecta pessoas.` sem qualquer foto ou mockup nessa área.
3. Faixa de especialidades com ícones discretos.
4. Barra preta com ferramentas (logos oficiais autorizados ou placeholders de texto temporários).
5. Sobre mim em branco: título `Marketing com propósito.`, foto real se estiver disponível, texto aprovado, CTA trajetória e indicadores verdadeiros ou qualitativos.
6. Seção de 6 serviços em fundo preto.
7. `Meus projetos.` com quatro cards em forma de **pasta**, com abas visíveis, alternando preto/lilás/magenta, alinhamento impecável.
8. CTA final lavanda e footer.

## Comportamento
- `/orcamento` ainda não implementado: prepare rota de placeholder acessível informativo ou plano de navegação consistente, não deixar âncora vazia.
- Renderizar componentes a partir de modelos tipados configuráveis; facilitar futura conexão com Supabase sem refazer UI.
- Criar estilos em tokens, sem hex aleatórios espalhados; `next/font` para Poppins e Inter; ícones por biblioteca consistente.
- Hover, focus, teclado, 44px de toque, `prefers-reduced-motion`, alt e tamanho de imagens corretos.
- Não publicar `50+`, `120%`, número de clientes ou resultados sem confirmação.

## Critérios de aceite visuais
- Hero sem imagem, centrada e com espaço negativo, sem colunas divididas.
- Foto aparece só em seção Sobre mim, sem mudar rosto ou criar segunda pessoa.
- Seção serviços 3×2 desktop, 1 col mobile, cards sem texto espremido.
- Pastas idênticas em shape e altura por linha, CTA/links legíveis.
- Fundo: lavanda → preto faixa → branco Sobre → preto serviços → branco pastas → lavanda CTA.
- Layout consistente em 360, 390, 768, 1024 e 1440px.

## Entrega
Arquivos criados/alterados, instruções de execução, screenshot desktop/mobile quando possível, resultados de lint/typecheck/build, lista de assets originais ainda pendentes. Não começar o painel antes da revisão da Home.
