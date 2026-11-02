# Página Sobre mim — `/sobre-mim`

**Referência:** `02-SOBRE-MIM-APROVADA.webp`.

## Estrutura
1. Hero lilás com nome **Eloisa Cunha.**, área de especialidade, introdução curta, contatos aprovados, foto original real e botões Contato/Baixar currículo.
2. Indicadores horizontais (tempo, abordagens, formação etc.); apenas reais.
3. Corpo branco dividido: perfil profissional à esquerda e competências em barras à direita. Barras percentuais requerem critério explícito de avaliação; preferir níveis qualitativos se não houver fundamentação.
4. Seção `Minha trajetória.` com linha do tempo cronológica e empresas/cargos/datas reais, preservando conteúdo confirmado.
5. Cartões: Formação acadêmica, Idiomas, Ferramentas. Logos apenas quando autorizados.
6. Faixa `Projetos em destaque` com cards de pasta; CTA final padrão.

## Inventário de experiências da captura original (verificar antes da publicação)
- Content Strategy — Rvops / RevOps (grafia a validar; jul–out/2026 na captura).
- Copywriter — Agência Arthur & Vidal (ago/2025–jul/2026).
- Redatora SEO & Copywriter — Agência 23A Digital, remoto (jan/2023–jul/2025).
- Estágio em Comunicação Interna — Roca Brasil (abr/2022–jan/2023).
- Estágio em E-commerce e Redes Sociais — HustShop (ago/2021–mar/2022).
- Estágio em Atendimento Publicitário e Social Media — Laser Press (fev/2021–mai/2021).

A captura registra bacharelado em Comunicação Social, UNIP, 2020–2024. Não presumir datas/identidades atualizadas sem revisão.

## Modelo CMS
`profile`: `name`, `role`, `summary`, `about_body`, `hero_image_asset_id`, `cv_asset_id`, `public_contact`, `social_links`.  
`career_entries`: `company`, `position`, `start_date`, `end_date?`, `description_blocks`, `sort_order`, `visible`.  
`skills`: `name`, `description`, `display_level?`, `sort_order`.  
`education_entries`, `languages`, `tools` com ordenação independente.

## QA
Retrato real preservado; nenhum texto espremido; experiência legível; datas coerentes; download de CV funciona ou CTA oculto. Limitar densidade de informação mobile com accordions acessíveis, sem esconder dados essenciais.
