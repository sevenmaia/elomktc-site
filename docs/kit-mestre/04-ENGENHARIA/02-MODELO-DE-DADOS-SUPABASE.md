# Banco de dados Supabase — modelo lógico e contratos

> Modelo proposto, a transformar em migrações SQL revisionadas. UUIDs, `created_at`, `updated_at`, `created_by` e `status` devem ser padronizados; usar tipos/enum com cuidado para facilitar evolução. **Não colocar credenciais ou dados reais sensíveis em documentação pública.**

## Tabelas principais

### Controle de acesso
- `admin_profiles(id uuid PK references auth.users, display_name, role enum(owner, editor, analyst, viewer), active bool)`.
- `audit_events(id, actor_user_id, action, entity_type, entity_id, before_jsonb, after_jsonb, occurred_at)`; acesso restrito, retenção definida.

### Configurações e páginas
- `site_settings(id singleton, brand_name, tagline, public_email, social_links jsonb, whatsapp_config_id, theme_id, updated_at)`.
- `themes(id, name, tokens jsonb, active, draft_tokens jsonb, version)` com allowlist de tokens para evitar CSS arbitrário.
- `site_pages(id, route unique, title, seo_title, seo_description, og_asset_id, canonical, indexable, status, template, updated_at)`.
- `page_sections(id, page_id FK, section_type, content jsonb, is_visible, sort_order, published_at)`.

### Perfil
- `profile(id singleton, name, role_title, summary, about_richtext, image_asset_id, cv_asset_id, email_public)`.
- `career_entries(id, employer, role, from_date, to_date, details jsonb, sort_order, is_visible)`.
- `skills(id, label, level_label nullable, sort_order)`; `education_entries`, `language_entries`, `tool_entries` similares.

### Conteúdo e vitrine
- `articles(id, slug unique, title, excerpt, body jsonb, cover_asset_id, category_id, seo jsonb, status, published_at, updated_at)`.
- `projects(id, slug unique, client_name, title, summary, body jsonb, kind, project_url, cover_asset_id, credits jsonb, status, published_at)`.
- `social_items(id, project_id nullable, platform, format, caption, slides jsonb, status, published_at)`.
- `videos(id, slug unique, title, summary, orientation enum(vertical,horizontal), video_asset_id nullable, external_url nullable, poster_asset_id, duration_seconds nullable, platform, status)`.
- `portfolio_entries(id, source_type, source_id, display_title, summary_override, cover_override_asset_id, category, tags jsonb, visibility)`; `UNIQUE(source_type,source_id)`.
- `showcase_slots(id, surface enum(home,sites,social,videos,articles,bio,about), slot_name, max_items)`.
- `showcase_items(id, slot_id, entry_id, sort_order, featured boolean, UNIQUE(slot_id,entry_id), UNIQUE(slot_id,sort_order) DEFERRABLE)`; transações de reorder.

### Assets
- `media_assets(id, storage_bucket, storage_path unique, mime_type, size_bytes, width, height, duration_seconds nullable, alt_text, rights_status, uploaded_by, deleted_at)`.
- `media_usage(id, asset_id, entity_type, entity_id, field_name)` para prevenir exclusão acidental de arquivo referenciado.

### Bio
- `bio_profile(id singleton, heading, subtitle, description, portrait_asset_id, theme_overrides jsonb, published_at)`.
- `bio_blocks(id, block_type, label, subtitle, url, icon, image_asset_id, enabled, sort_order, start_at, end_at, config jsonb)`.

### Leads e analytics
- `leads(id uuid PK, idempotency_key unique, name, email, phone_e164, organization nullable, services text[], goal text, budget_range nullable, deadline_range nullable, source_reported nullable, utm_* nullable, referrer_domain nullable, consent_version, consented_at, status, internal_notes, whatsapp_open_attempted_at, created_at)`.
- `pageview_events(id, route, occurred_at, referrer_domain, utm_* nullable, device_class nullable, session_id_hash nullable)` com limitação de retenção.
- `click_events(id, target_type, target_id, occurred_at, source_route, utm_source nullable)` sem armazenar PII.
- `daily_analytics_rollup(day, metric, dimension, dimension_value, count)` para dashboards sem leitura massiva de eventos.
- `integration_connections(id, provider, encrypted_token_ref, state, last_synced_at)` apenas admin/back-end. Tokens não em texto puro no DB se puder usar secret manager.

## Políticas RLS (exemplos de intenção)
- Público: `SELECT` apenas sobre views públicas de conteúdo `published`, respeitando datas, visibilidade e autorização. Preferir views/queries próprias em vez de expor tabelas admin com campos internos.
- Autenticado owner/editor: CRUD conforme role validada por função segura/claims controlados; nunca confiar em role passada pelo client.
- `leads`: sem `SELECT` público; `INSERT` somente por backend validado e rate-limited; acesso admin restrito a `owner/editor` e outros autorizados.
- `audit_events`, `integration_connections`: somente owner/admin autorizado; jamais client.
- Storage: bucket público apenas de assets publicados e explicitamente liberados, bucket privado para currículo não público, drafts e originais sensíveis; uploads somente admin autenticado.

## Invariantes
- `slug` estável e único; redirects quando alterado.
- `featured` sem published → não aparece no site.
- `sort_order` por vitrine, não global.
- Nenhum número analítico hardcoded.
- `created_at` UTC, timezone só na UI; `updated_at` atualizado no DB.
- `deleted_at` ou status archived para lixeira, evitando perda imediata.

## Migrações e seeds
Seeds reais somente de conteúdo autorizado. Exemplos mockup podem existir no ambiente `development` com prefixo `DEMO`, nunca em produção. Criar `migration` + `seed_dev` separados. Testar que token anônimo não lê leads, rascunhos nem configurações secretas.
