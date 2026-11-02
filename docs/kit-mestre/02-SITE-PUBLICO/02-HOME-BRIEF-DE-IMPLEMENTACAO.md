# HOME — Especificação definitiva para começar

**Rota:** `/`  
**Mockup:** `../07-REFERENCIAS/01-HOME-APROVADA.webp`  
**Prioridade:** P0 / primeira tela que será codificada  
**Regra especial:** NÃO COLOCAR FOTOGRAFIA NA HERO.

## 1. Estrutura visual — de cima para baixo
### Seção A. Header
Logo/wordmark e menus alinhados; Home ativa sublinhada em roxo; redes com ícones oficiais; botão Fale comigo. Fundo acompanha lavanda hero ou branco translúcido discreto, sem cabeçalho flutuante exagerado.

### Seção B. Hero full-width centralizada
Eyebrow: `ELOISA CUNHA | MARKETING & COMUNICAÇÃO`.  
H1, em 2–3 linhas dependendo do breakpoint: **Estratégia que conecta pessoas.** O ponto pode ser destaque roxo/magenta.  
Lead: `Conteúdo, posicionamento e comunicação para aproximar marcas dos seus públicos e gerar resultados reais.`  
CTA 1 escuro: `Fale comigo` → `/orcamento`; CTA 2 contornado: `Conheça minha trajetória` → `/sobre-mim`.  
Friso inferior de especialidades com iconografia leve: `Estratégia de marca`, `Conteúdo & SEO`, `Campanhas`, `Eventos`, `Análise de performance`.

**Tamanho/proporções:** hero tem padding superior 80–112px e inferior 70–100px; alinhamento horizontal e vertical central no texto; max-width 950px para H1, 600px para lead; fundo lavanda gradiente discreto. Sem retrato, sem laptop, sem cards colados à tipografia.

### Seção C. Ferramentas que utilizo
Faixa preta de largura total, com texto pequeno e logos oficiais permitidos: Notion, Canva, ChatGPT, Meta, Semrush, Bitrix24, CapCut (validar quais devem continuar). Espaço, alinhamento óptico e wrap mobile; evitar logos distorcidos e letras feitas à mão.

### Seção D. Sobre mim — retrato aqui
Fundo branco. Esquerda: label `SOBRE MIM`, H2 **Marketing com propósito.**, parágrafo introdutório e CTA `Conheça minha trajetória`. Direita: **foto original autorizada da Eloisa**, crop vertical confortável, decoração sutil e cartão pequeno `Estratégia também é sobre pessoas.`.  
Abaixo: quatro indicadores em cards leves. Exemplo de categorias: tempo de experiência, projetos, experiência B2B/B2C, visão 360º. **Não publicar `50+` sem dado confirmado.** Se faltar informação, usar frases qualitativas.

### Seção E. Serviços
Fundo preto profundo. Label `O QUE EU FAÇO`, H2 **Soluções para diferentes objetivos.** + texto curto à direita. Seis cartões 3 col ×2 linhas:  
1. Planejamento Estratégico; 2. Produção de Conteúdo; 3. Gestão de Redes Sociais; 4. SEO e GEO; 5. Campanhas e Tráfego; 6. Eventos e Experiências.  
Cards escuros com ícones violetas, título, 1–2 linhas e link/ação. Copywriting é detalhado nas páginas Social Media/Artigos e pode aparecer também em Produção de Conteúdo. Não insinuar que Eloisa presta gestão paga se não confirmado.

### Seção F. Meus projetos (PASTAS)
Fundo branco; label `PROJETOS`, H2 **Meus projetos.**, descrição pequena e link `Ver todos os projetos` (pode levar a seção/coleção ou página agregadora). Quatro cards **em pasta**:
- `Social Media` → `/social-midia`, cor preta, subtítulo breve.
- `Artigos` → `/artigos`, cor lilás, subtítulo sobre copy/estratégia.
- `Vídeos` → `/videos`, cor preta, subtítulo audiovisual.
- `Sites e Landing Pages` → `/sites`, cor roxo/magenta, subtítulo conversão.

Cada pasta exibe categoria, título, descrição curta, seta circular, aba recortada idêntica; iguais dimensões, alinhadas por base. **Não substituir por cards retangulares convencionais.** Se mobile 1 col, priorizar respiro.

### Seção G. CTA final
Fundo roxo/lavanda. Eyebrow `VAMOS CONVERSAR?`, título **Tem uma ideia, projeto ou desafio?**. Texto `Vamos transformar estratégias em conexões, criatividade em resultados e ideias em experiências que fazem a diferença.` Botão preto `Fale comigo` → `/orcamento`.

### Seção H. Footer
Branding, copyright dinâmico, redes, links de Privacidade/Termos e opcional Voltar ao topo. Não inserir cidade/telefone não verificados.

## 2. Contratos de conteúdo Home
`site_settings` controla brand e redes; `home_sections` controla mensagens e ordem; `services` até seis; `portfolio_links` até quatro; `trusted_tools` controla logos; `profile` controla foto e currículo; `featured_projects` apenas se forem mostrados adicionalmente.

## 3. Componentes obrigatórios
`SiteHeader`, `HeroCentered`, `ExpertiseStrip`, `ToolsMarqueeStaticOrWrap`, `AboutPreview`, `StatsRow`, `ServiceGrid`, `FolderPortfolioGrid`, `ContactBanner`, `SiteFooter`. Marquee só se leitura e acessibilidade continuarem boas; preferir fila estática.

## 4. Critérios de aceite da Home
- [ ] Hero SEM foto, eixos centralizados e copy exata, dois CTAs.
- [ ] Identidade coesa com mockup, sem elementos genéricos extras.
- [ ] Foto apenas em Sobre mim, original e sem distorções.
- [ ] 6 serviços com boa hierarquia, gap 20–28px.
- [ ] 4 pastas idênticas em shape e altura por linha.
- [ ] Links e social icons navegam corretamente; sem `href="#"`.
- [ ] 360, 390, 768, 1024, 1440px; keyboard; prefers-reduced-motion.
- [ ] Lighthouse, metadata, alt e CLS revisados.
- [ ] Nenhum número falso de projetos, resultado, alcance ou SEO.

## 5. Ordem de implementação e revisão
Primeiro estrutura sem conteúdo fake; depois CSS tokens; depois Home inteira; depois QA e screenshot comparativo; por fim integrar a Home a dados reais do CMS. Não construir o painel completo antes de validar layout Home.
