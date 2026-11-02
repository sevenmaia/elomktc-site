# Personalização do site e editor do Link na Bio

## Personalização visual
Sidebar `Personalização`: tabs Identidade, Cores, Tipografia, Componentes, Layout, Avançado. Painel de controle + preview renderizado usando **os mesmos componentes do site**. Alterar tokens globalmente sem permitir qualquer cor que destrua contraste. Tema inicial aprovado não deve mudar sem ação da cliente.

### Escopos de mudança
- Identidade: nome, assinatura, logo, favicon, redes.
- Cores: principal, acento, lavanda, preto, branco, fundo; preview com aviso de contraste.
- Tipografia: opções de famílias aprovadas e pesos/tamanhos por token; não controle livre que quebre responsividade.
- Componentes: bordas, botões, cards pasta, efeitos leves, ícones.
- Layout: exibir/ocultar e reordenar seções por página, sob regras de dependência.
- Avançado: preview publicado/draft, reset de tema e exportação JSON de tokens.

## Link na Bio (módulo próprio do admin)
**Referência:** `09-ADMIN-LINK-NA-BIO.webp`.

### Layout
Sidebar `Link na Bio` ativa; topo com KPIs reais (visualizações, visitantes, cliques, CTR, devices) e período de medição. Coluna esquerda com `Blocos e links` ordenáveis; central com preview de smartphone (não screenshot); direita com URL/QR, abas Personalização e Analytics por link.

### Cada bloco editável
- Título, subtítulo, ícone, link com protocolo válido, categoria (CTA, texto, card, social, banner, projeto), ativo/inativo, destaque, ordem, abertura em nova aba.
- Mídia/capa opcional, horário de início/fim opcional, tracking de clique, UTM de destino com consentimento adequado.
- Ação para duplicar/remover; proteção contra links inválidos e URLs perigosas.

### Controles globais bio
- Foto original, descrição e redes em ícones oficiais.
- Fundo sólido ou gradiente leve ou imagem autorizada; cores de botões, tipografia e raio.
- URL pública `https://elomktc.com/bio`; QR Code gerado a partir desta rota; sem URL gerada aleatoriamente.
- Preview mobile, desktop; publicar em um clique, histórico/rollback.

### Analytics do bio
Visualizações da bio e cliques por link em 7/30/90 dias, origens quando disponíveis e visitas via QR, com dados mínimos. CTR definido como `cliques registrados / visualizações da bio` no período, com clareza quanto a denominador e bots. Não confundir cliques totais com pessoas únicas. Mostrar indisponível antes de coleta real.

## Critérios de aceite
Alterar texto/ordem/habilitação e clicar Publicar atualiza `/bio` após revalidação; preview consistente; cores têm contraste; QR aponta para produção; permissões por perfil; não publicar conteúdo sem direitos.
