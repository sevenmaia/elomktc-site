# PROMPT MESTRE 05 — Formulário, WhatsApp, leads, origem de visitas

Implemente a jornada `/orcamento` e os módulos `/admin/leads` e analytics conforme os documentos `02-SITE-PUBLICO/09-ORCAMENTO-WHATSAPP.md` e `03-PAINEL-ADMIN/04-LEADS-ANALYTICS-INTEGRACOES.md`.

Exigir validação frontend/backend, anti-spam, idempotência, persistência no PostgreSQL, consentimento/versão, fonte e UTM sanitizadas. Em sucesso, API retorna `leadId` e WhatsApp URL codificada para número confirmado no backend. Abrir WhatsApp **só após** persistir; se falhar, exibir erro recuperável e opção de copiar dados. Não declarar `mensagem enviada` sem webhook real. Não salvar briefing em query analytics ou logs.

Central de leads com status configurável, histórico, filtros e export seguro. Métricas: pageviews e cliques efetivos, origens, conversão de lead com denominador explicado, CTR de bio, sem duplicação de eventos e sem PII. GA4/Search Console somente opcionais e conectados; sem chave, UI mostra aviso `Conecte a integração`.

Criar testes E2E: sucesso, validação falha, DB indisponível, double submit, URL WhatsApp, idempotência, roles e recuperação. Não usar valores fictícios dos mockups.
