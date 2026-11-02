# Roadmap por fases e critérios de aprovação

## Fase 0 — Fundação
- Preparar repositório Next.js + TypeScript + Tailwind + tokens CSS; estruturar `src/app`, `components`, `lib`, `content`, `tests`.
- Instalar fontes via `next/font/google` (ou local licenciado), utilitários de imagem, biblioteca de ícones consistente, lint e formatação.
- Criar Header, Footer, Button, Container, SectionTitle, Cards e tokens globais.
- Definir ambiente `.env.example` sem valores secretos. Preparar rotas e placeholder apenas quando necessário.
- **Aceite:** inicia localmente, responsividade básica e design tokens em uso sem valores soltos.

## Fase 1 — **HOME, primeiro**
1. Header responsivo + menu ativo + CTA.
2. Hero roxa centralizada (sem imagem) + botões + faixa de especialidades.
3. Barra escura com ferramentas aprovadas.
4. Sobre mim com retrato real autorizado, frase e quatro indicadores com dados confirmados; omitir números sem fonte.
5. Seção serviços preta com cards 3×2.
6. Meus projetos: 4 pastas com topo recortado, cores alternadas, estado hover/focus, links reais.
7. CTA final lavanda e footer com redes.
8. SEO, Open Graph, mobile e acessibilidade.
- **Aceite:** comparação visual com referência Home, 360/390/768/1024/1440 px; sem overflow; sem imagem na hero; pastas reais em CSS/SVG (não screenshot); CTA coerente.

## Fase 2 — Páginas públicas
Ordem recomendada: Sobre mim → Social Media → Vídeos → Sites e Landing Pages → Artigos/Copywriting → Bio → Orçamento → privacidade/termos → estados 404/erro.  
**Aceite:** links e filtros funcionam; projetos vêm de fonte única; carrossel real; vídeos por orientação; páginas consistentes.

## Fase 3 — CMS privado
- Autenticação e autorização; dashboard; artigos; projetos; social media; vídeos; sites e LP; Sobre mim; SEO; mídia; personalização; Link na Bio; leads; configurações.
- Editor com rascunho/publicar, upload e preview, ordenação drag-and-drop acessível com alternativa por botões.
- Logs de publicação, operações destrutivas com confirmação, lixeira/restauração conforme política.
- **Aceite:** cada CRUD cria/edita/oculta/reordena um item sem editar código; visitante só vê publicados.

## Fase 4 — Operação e integrações
- Formulário salva lead e abre WhatsApp; central de leads e exportação; métricas first-party adequadas e/ou GA4/Search Console.
- LGPD: aviso, consentimento quando aplicável, retenção, exclusão e acesso.
- Configurar domínio, SSL, sitemap, robots, Search Console, backups, monitoramento.
- **Aceite:** teste ponta-a-ponta, teste de permissão, não há vazamento de token, nenhum número de dashboard é simulado.

## Estrutura de tickets para cada implementação
Cada tarefa deve ter: objetivo, páginas impactadas, componentes reutilizados, dados necessários, estados (vazio/loading/erro), breakpoints, teste, acessibilidade, screenshot antes/depois, riscos e critérios de aceite. Não iniciar próxima tela sem revisão da anterior.
