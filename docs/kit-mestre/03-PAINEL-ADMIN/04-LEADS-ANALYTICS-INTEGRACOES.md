# Leads, origem do tráfego, métricas e integrações

## Central de leads — `/admin/leads`
Tabela com nome/empresa, serviços, data, origem, status, responsável, última atualização e ações. Filtros por intervalo, status, serviço, origem; exportação CSV limitada a papéis autorizados. Detalhes exibem briefing original, consentimento e notas internas com histórico. Status sugeridos: `novo`, `contatado`, `proposta_enviada`, `em_negociacao`, `fechado`, `sem_interesse`, `arquivado`.

## Indicadores de site
- Pageviews: páginas exibidas, contando sessões/visitas segundo método declarado.
- Usuários/visitantes únicos: apenas se há método legítimo de deduplicação; especificar janela e política de cookies.
- UTM e fontes: busca orgânica, redes sociais, campanhas, referência, acesso direto e desconhecido, sem atribuição inventada.
- Top páginas, cliques de CTA, cliques bio, formulários enviados com sucesso, eventos de abertura de WhatsApp.
- Leads por origem/campanha e taxa de conversão com denominador claro (`leads_salvos / sessões elegíveis` ou similar).

## Origem de dados
- Eventos próprios enviados a um endpoint com validação, rate limit e filtragem de bots; retenção curta e agregações, evitando coletar PII para pageviews.
- GA4 (se autorizado) para visitas/origem/dispositivos; Search Console para impressões, cliques e posição média. Integrar via APIs com tokens server-side.
- Metas com `data_source` + `last_synced_at`; se indisponíveis, mostrar não conectado. **Não adicionar números dos mockups como seed de analytics.**
- Social follower counts e engajamento exigem APIs oficiais e permissões; caso contrário, mostrar sem integração.

## SEO — distinção
`pontuacao_seo` pode existir como **checklist interno**, não é KPI oficial do Google. Posição, impressões e cliques precisam de Search Console real, com período e query/permissões pertinentes. Não apresentar domínio de cliente como propriedade de Eloisa sem autorização.

## Notificações
Quando lead for salvo, pode disparar notificação server-side por e-mail/WhatsApp Business API após configuração e base legal; não usar chave pública para serviços externos. Sem integração, lead fica visível no painel e fluxo WhatsApp do visitante abre via deep link; notificações não são garantidas.

## LGPD e segurança
Acesso aos leads apenas a roles autorizadas; não usar e-mail/telefone no tracking; ocultar valores sensíveis em logs. Registro de download/export e exclusão. Definir retenção, exclusão e atendimento a titulares em política. Medir apenas dados necessários e respeitar consentimento para cookies/tracking não essencial.

## Operações-chave
- `[Novo]` gerado apenas após DB commit do formulário.
- `[WhatsApp aberto]` significa tentativa do navegador, não mensagem entregue.
- `[Respondido]` só após ação manual ou webhook real de provedor.
- Estados de sincronização `[Conectado]`, `[Desconectado]`, `[Erro]`, `[Aguardando permissão]` por integração.
