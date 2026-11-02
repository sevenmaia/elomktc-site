# Arquitetura recomendada (pragmática para primeiro release)

## Stack padrão sugerida
- **Next.js App Router** versão estável compatível no início da implementação; TypeScript com `strict: true`.
- **Tailwind CSS** + CSS variables de Design System; componentes próprios com primitives acessíveis.
- **Supabase:** PostgreSQL, Auth (admin), Storage (assets). RLS obrigatória, chaves segregadas.
- **Vercel:** hospedagem front/server endpoints com domínio `elomktc.com`.
- Analytics: eventos próprios mínimos + GA4 / Google Search Console **opcionais**. Não é obrigatório conectar tudo na Fase Home.
- Imagens: Supabase Storage/CDN ou solução de mídia adequada; `next/image` e formatos WebP/AVIF. Vídeos grandes podem precisar de serviço de vídeo/CDN específico.
- Editor: rich text estruturado + validação Zod. DnD via biblioteca acessível compatível quando chegar ao CMS.

## Estrutura proposta do repositório (código futuro)
```text
app/
  (public)/
    page.tsx
    sobre-mim/page.tsx
    social-midia/page.tsx
    videos/page.tsx
    sites/page.tsx
    artigos/page.tsx
    artigos/[slug]/page.tsx
    bio/page.tsx
    orcamento/page.tsx
    privacidade/page.tsx
  admin/
    login/page.tsx
    (private)/
      page.tsx
      artigos/page.tsx
      projetos/page.tsx
      social/page.tsx
      videos/page.tsx
      sites/page.tsx
      sobre/page.tsx
      bio/page.tsx
      leads/page.tsx
      analytics/page.tsx
      seo/page.tsx
      midia/page.tsx
      personalizacao/page.tsx
      configuracoes/page.tsx
  api/leads/route.ts
  api/events/route.ts
components/
  site/{header,footer,section,hero,service-card,folder-card,contact-banner}/
  portfolio/{work-card,project-carousel,article-card,video-card}/
  admin/{sidebar,data-table,editor,stats-card,media-picker}/
lib/{supabase,auth,validators,seo,analytics,whatsapp,content}/
styles/{tokens.css,globals.css}/
public/{favicon,brand-placeholder}/
content/{fallback-copy.ts}/
tests/{e2e,unit}/
```
Use `/src` se preferido, mas manter paths consistentes no projeto. Separar públicos e privados por layouts.

## Camadas
1. **Presentation:** componentes e layouts, sem acesso a secrets.
2. **Domain:** validação, regra de destaque, ordem, status e formatação.
3. **Data:** queries Supabase, contratos tipados, cache/revalidation.
4. **Security:** admin auth, autorização em DB, rate limiting, audit log.
5. **Integrations:** tracking, Search Console/GA4, WhatsApp links e webhooks quando autorizados.

## Conteúdo na primeira sprint
A Home pode começar com objetos tipados em `content/fallback-copy.ts` e fotos fornecidas. Planejar migração ao CMS sem reescrever UI: consumir modelos como `HomeContent`, `Service`, `PortfolioFolder`. Nunca hardcode números inventados. Inicializar DB/Storage quando começar CRUD ou leads.

## Variáveis de ambiente sugeridas
```dotenv
NEXT_PUBLIC_SITE_URL=https://elomktc.com
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=        # SERVER ONLY; nunca no client, nem no Git
ELOISA_WHATSAPP_E164=             # configurado/validado server-side
GA4_PROPERTY_ID=                  # opcional
GOOGLE_OAUTH_CREDENTIALS=         # opcional, server-side, nunca versionado
```
A chave `anon` só é segura com RLS corretamente configurada. Service role não deve ser usado para renderizações públicas sem necessidade; proteção de secrets, vazamento em logs e revisão de variáveis de deploy obrigatória.

## Cache e atualização
ISR/revalidate tags em páginas públicas; ao publicar, invalidar somente as rotas impactadas. Draft previews server-side autenticados, cookies seguros e `noindex`. Eventos analíticos não bloqueiam a renderização.

## Limites de escopo
O painel gerencia o **portfólio de sites** da Eloisa, não o conteúdo de cada domínio de cliente. Marketing externo e automações de redes só após integrar provedores e termos adequados.
