# Solicitar orçamento + salvamento + WhatsApp — `/orcamento`

**Referência:** `08-FORMULARIO-ORCAMENTO.webp`.

## Design
Hero lavanda com `Vamos trabalhar juntos?` e texto: `Conte sobre o seu projeto. Assim posso entender o que você precisa e preparar uma proposta personalizada.`. Se a foto original da cliente estiver aprovada, usá-la nesta página (diferente da Home, cuja hero é sem imagem).

À esquerda: cards de seleção de serviço em fundo preto e bloco simples `Como funciona?`. À direita: formulário branco com espaços adequados. Mobile empilha e prioriza o formulário, sem comprimir os inputs.

## Campos
| Campo | Obrigatório | Validação |
|---|---|---|
| Nome | sim | 2–120 caracteres |
| WhatsApp | sim | formato BR validado, salvar normalizado E.164 |
| E-mail | sim | e-mail plausível, ≤254 |
| Marca/empresa | não | ≤120 |
| Serviço(s) | sim | uma ou mais opções, enum do CMS |
| Objetivo/briefing | sim | 20–3000 caracteres |
| Prazo | não | opções configuráveis, sem promessas |
| Orçamento previsto | não | faixas configuráveis + `prefiro conversar` |
| Como conheceu | não | escolha configurável, não substitui atribuição técnica |
| Consentimento de contato/privacidade | sim | guardar versão do texto e timestamp; base legal avaliada |

Serviços: Social Media, Sites e Landing Pages, Copywriting, Vídeos, Campanhas e Consultoria (disponíveis conforme serviços reais da cliente).

## Fluxo correto de envio (transacional)
1. Usuário preenche e aceita política; botão `Enviar briefing e abrir WhatsApp`.
2. Client valida schema (Zod) e envia `POST /api/leads` usando HTTPS; servidor valida novamente, aplica rate limit, captcha/honeypot proporcional e valida consentimento.
3. Servidor grava lead no banco com identificador único, status `new`, source e UTM permitidos; evita duplicação por `idempotency_key`.
4. Somente após gravação bem-sucedida, resposta retorna `leadId` e `whatsappUrl` gerada pelo servidor para número confirmado da cliente (não salvar segredos no browser).
5. Browser navega para `https://wa.me/55...?...` com texto legível. Dar botão `Copiar mensagem` como fallback se popup/navegação falhar.
6. Painel apresenta o lead como `Novo`, com horário, conteúdo, origem e status de acompanhamento. Pode registrar `whatsapp_open_attempted_at`; **não marcar como mensagem enviada/recebida** sem confirmação externa do provedor.
7. Se banco falhar, não abrir WhatsApp automaticamente e não declarar sucesso; oferecer tentativa novamente ou canal alternativo, evitando perda silenciosa do briefing.

## Modelo de mensagem gerada
```text
Olá, Eloisa! Preenchi o formulário no seu site.
Protocolo: {leadIdCurto}
Nome: {nome}
Empresa: {empresaOuNaoInformada}
Interesse: {servicos}
Objetivo: {breveResumoSeguro}
Prazo: {prazo}
Orçamento: {faixaOuNaoInformado}
Pode me ajudar com uma proposta?
```
**Privacidade:** evite inserir e-mail ou dados sensíveis desnecessários no texto da URL. WhatsApp abre em terceiro; informar claramente essa transição.

## Atribuição
Gravar URL da landing page, canal de referência agregado, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, referrer sanitizado, data/hora, sem cookies invasivos sem fundamento. Relatórios: leads por canal e por serviço, com limiar de anonimização em baixo volume.

## Critérios de aceite
- Validação frontend/backend e rate limit.
- Lead salvo antes do WhatsApp, uma vez só mesmo com duplo clique.
- Feedback real de sucesso/erro e fallback copiar.
- Link WhatsApp do número correto.
- Painel tem registro, contato, origem e histórico.
- Política acessível, sem dados sensíveis em analytics e sem logs públicos de mensagens.
