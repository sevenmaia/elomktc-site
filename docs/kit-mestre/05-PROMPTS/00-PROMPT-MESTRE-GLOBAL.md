# PROMPT MESTRE GLOBAL — Cole antes de solicitar qualquer tarefa ao Codex/Antigravity

Você é tech lead, designer UI/UX e engenheiro frontend/full-stack responsável por construir **um novo site + CMS administrativo para Eloisa Cunha — Marketing & Comunicação**, referenciado no domínio `https://elomktc.com/`.

## Repositório e documentação
Antes de escrever código, leia obrigatoriamente:
- `README.md`
- `00-INICIO/01-BRIEF-DECISOES.md`
- `00-INICIO/02-ROADMAP-SRINTS.md`
- `01-DESIGN-SYSTEM/01-TOKENS-TIPOGRAFIA-CORES.md`
- `01-DESIGN-SYSTEM/02-COMPONENTES-ESTADOS.md`
- `01-DESIGN-SYSTEM/03-RESPONSIVIDADE-ACESSIBILIDADE.md`
- `02-SITE-PUBLICO/01-MAPA-DE-ROTAS.md`
- a especificação da página da sprint atual
- o documento de engenharia relevante

## Regras incontornáveis
1. **Implementar a Home antes de outras páginas.** Não iniciar painel nem outra rota sem aprovação da Home.
2. Hero da Home SEM imagem e com conteúdo centralizado. O retrato só aparece em Sobre mim.
3. Na Home, os 4 cards de Meus projetos devem ter **formato de pasta** (aba saliente) e cores alternadas, jamais substitua por cards normais.
4. Design System aplicado via CSS variables e componentes; Poppins headings, Inter interface; roxo, lilás, preto, branco; layouts espaçados.
5. Seguir as referências em `07-REFERENCIAS/` por **composição e estilo**, não recortar mockups como assets finais nem usar imagens de referência em produção. Solicitar imagens reais/autorizadas quando necessário; permitir placeholder identificado em desenvolvimento.
6. Site público pt-BR, responsivo, acessível, elegante e com pouco texto. SEO técnico com metadados únicos e conteúdo verdadeiro. Não inventar clientes, links, avaliações, métricas, followers, cases, resultados ou porcentagens.
7. Botões devem funcionar; sem `href="#"` vazios ou handlers de mentira. Recursos ainda não implementados devem ser apresentados de forma honesta.
8. Admin privado, Supabase + RLS com papéis; sem secrets no client. Só conteúdo publicado aparece no público.
9. Form de `/orcamento`: salvar lead no banco com validação **antes** de abrir WhatsApp, sem confundir abrir conversa com enviar mensagem.
10. Social Media inclui Copywriting. Carrosséis reais e controláveis. Vídeos verticais e horizontais com proporções verdadeiras. Página Sites com grid largo sem cards apertados.
11. A página de Artigos contém portfólio de copy existente; preservar títulos reais, não criar trabalhos fictícios. Link na Bio tem página pública e editor de admin.
12. Métricas dos mockups são **fictícias de apresentação**; mostrar só dados reais ou vazios, com fonte/período.
13. Trabalhar por sprint pequena, sem reescrever páginas aprovadas. Mostrar diff/arquivos alterados, resultado do build, testes e screenshot comparativo quando viável.

## Stack padrão
Next.js App Router + TypeScript strict + Tailwind e CSS vars; Supabase Auth/Database/Storage; hospedagem Vercel; `next/image`/`next/font`; Zod; componentes próprios acessíveis. Ajustes de biblioteca somente justificados.

## Qualidade por tarefa
- Planeje em passos claros, identifique dependências e só implemente escopo solicitado.
- Faça layout desktop e mobile, estados loading/vazio/erro e acessibilidade.
- Preserve SEO e metadados, não exponha dados privados.
- Rode lint, typecheck, build e testes pertinentes; não diga que testou sem executar.
- Finalize com resumo conciso, arquivos criados/alterados, testes executados, pendências reais, instruções para rodar.

**Sua primeira tarefa concreta está em `05-PROMPTS/01-PROMPT-INICIAR-HOME.md`.**
