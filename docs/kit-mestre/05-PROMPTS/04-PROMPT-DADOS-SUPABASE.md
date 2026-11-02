# PROMPT MESTRE 04 — Banco de dados, Auth e Storage

Implemente a camada Supabase do projeto ELOMKT C a partir de `04-ENGENHARIA/02-MODELO-DE-DADOS-SUPABASE.md` e `04-ENGENHARIA/04-SEGURANCA-LGPD-PRIVACIDADE.md`.

Crie migrações SQL completas, tipos TypeScript gerados, repositórios/query functions, controles de acesso com roles, RLS em todas as entidades, buckets com regras, índices para filtros/ordenação/slug, constraints e auditoria. Conteúdos públicos apenas de itens publicados. Negar por padrão e testar anon/editor/owner. Separar migrations e seeds locais de desenvolvimento; **não semear métricas inventadas em produção**.

Forneça `.env.example` sem secrets, instruções para rodar local e em produção, SQL para bootstrap seguro de 1 owner já cadastrado via Supabase Auth, procedimento de backup e recuperação, e testes que demonstrem que anon não lê `leads`, `admin_profiles` sensíveis nem `drafts`.

Implemente transação segura para reordenação de vitrines e featured slots. Proteja exclusões quando assets estiverem em uso, com lixeira/restauração. Não aceitar URL perigosa nem HTML arbitrário em rich text.

**Entregar:** migrações versionadas, RLS, fixtures de teste não pessoais, scripts de validação, resultados executados e pendências de configuração real.
