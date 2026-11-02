# Segurança, LGPD, conteúdo e governança

## Auth/Admin
- Login privado com Supabase Auth e MFA recomendada; área `/admin` protegida server-side e no banco.
- Sessões em cookies seguros, `httpOnly`, `secure` quando possível, SameSite adequado; proteção CSRF em mutações pertinentes.
- Políticas de senha, revogação de sessão e convites controlados; nunca registrar credenciais em MD, commits ou prompts.
- Auditoria de publicar/excluir/exportar/alterar permissões; logs sanitizados.

## RLS e armazenamento
- RLS em todas as tabelas expostas; testar anon/read, authenticated/sem-role, editor, owner.
- Service role só no servidor e minimizada, sem aceitar entidades/roles arbitrários do client.
- Restringir MIME, tamanho, extensão real, risco de SVG/HTML/arquivo executável; usar proxy/processador confiável e saída sem scripts. Quarentena para arquivos suspeitos.
- Buckets privados por padrão e URLs assinadas temporárias; fotos públicas só publicadas/autorizadas.

## Formulário de orçamento
- Dados pessoais: nome, contato, briefing, origem declarada, consentimento, data. Base legal deve ser definida pela operadora/controladora com apoio adequado; usar aviso de privacidade claro.
- Captar só o necessário, controlar retenção (prazo a definir), proteger dados em repouso/em trânsito e limitar acessos.
- Cookie banner só quando cookies/tecnologias exigirem; não usar `consent` genérico como substituto de política legítima.
- Política com finalidade, controlador, terceiros (WhatsApp, hospedagem, Analytics), canais de direitos, período de retenção e exclusão.
- Se resposta for encaminhada ao WhatsApp via URL, explicar que o visitante será levado ao aplicativo de terceiros; não armazenar conteúdo da mensagem em analytics.

## Antispam e abuso
Rate limit por IP minimizado (sem retenção excessiva), honeypot, CAPTCHA se necessário, limites de tamanho, validação backend Zod, sanitização e cabeçalhos de segurança. Sem upload de arquivo por visitante na V1 (se ativar, verificar anexos).

## Direitos autorais e imagem
Não publicar fotos, nomes, logos ou trabalhos sem autorização. Maquetes fornecidas são referências; não reproduzir prints de mockup como se fossem fotos ou sites finais. Verificar créditos e autoria de cada projeto.

## Backups e continuidade
Rotina de backup testada, RPO/RTO realistas, migrações reversíveis, armazenamento seguro de segredos e plano de restauração; não confiar apenas em imagem de dashboard `Backup ativo`.
