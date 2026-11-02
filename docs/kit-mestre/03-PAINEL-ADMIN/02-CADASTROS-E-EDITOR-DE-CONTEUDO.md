# Operação detalhada de conteúdo, ordem, SEO e destaques

## Editor padrão
Direita: tabs Conteúdo | SEO | Mídia | Configurações. Na criação, abrir como rascunho. Botões fixos inferiores para salvar e publicar, sem confundir as duas ações. Form valida campos obrigatórios, avisa sobre alterações não salvas e permite cancelar.

### Conteúdo
- Título, resumo, descrição completa (rich text seguro ou editor de blocos simples), categoria, tags, créditos, cliente e datas quando aplicável.
- O editor rico deve permitir H2/H3, parágrafo, negrito, itálico, listas, links, imagem inline com alt e citação curta. Sanitizar HTML/MDX, não aceitar scripts arbitrários.
- Não usar HTML direto no banco sem sanitização. Preferir JSON estruturado (`TipTap` com schema permitido) ou Markdown sanitizado.

### SEO
- Meta title e description exclusivos, `slug` único, canonical, OG image, `index/noindex`, palavras relacionadas (campo editorial, **não** `meta keywords`), preview Google sem simular ranking.
- Checklist heurístico para tamanho de título, meta, imagem alt, headings, links internos; nenhum score implica posição real no Google.

### Mídia
- Upload de capa e galeria; thumbnail 16:9/9:16 conforme tipo; limites por tamanho/MIME, processamento e otimização.
- Exigir texto alternativo em imagens informativas, focos de recorte e direitos de uso.

### Configurações
- Visibilidade e estado (rascunho, publicado, arquivado), posição por seção, featured slot, URL externa validada, horário de publicação, autoria/créditos.

## Lista Artigos
Tabela com Thumb, título, categoria, status, atualização, visualizações reais, origem do tráfego, SEO heurístico, destaque; busca, paginação, filtros. Modal de exclusão/despublicação e exportação sob permissão.

## Lista Projetos
Categorias Sites, LP, Campanhas, Social Media, Vídeos, Outros. Drag handle à esquerda e `sort_order` que persiste; projetos podem aparecer em múltiplas vitrines por featured_slots configuráveis.

## Social Media
Biblioteca de posts demonstrativos do portfólio com slides de carrossel reordenáveis e legendas; preview de mockup. **O CMS não publica automaticamente no Instagram/TikTok/LinkedIn sem OAuth, permissões, auditoria e fluxos próprios.** Métricas externas só de APIs oficiais autorizadas.

## Vídeos
Miniatura, título, descrição, orientação vertical/horizontal, duração metadada/extraída do vídeo, plataforma, URL/storage, transcrição e legendas opcionais, estado e destaque.

## Sites e LP
Miniatura, resumo de copy, escopo, categoria, CTA externo, vídeo preview opcional, data, metadados da página de case. Site externo é somente link/miniatura do case; nunca editor remoto sem integração específica.

## Ordenação: especificação
- Em cada vitrine, a ordenação deve ser independente da ordem global da tabela.
- Ao mover `A` antes de `B`, atualizar posições em transação para evitar duplicatas; persistir por `slot_id`/`surface`.
- Remover destaque não remove o item do conteúdo publicável.
- Excluir artigo/projeto remove primeiro da vitrine e marca `deleted_at`; recuperação mediante política antes de hard-delete.

## Critérios de aceite CMS
- [ ] Cria/edita/publica/arquiva itens reais.
- [ ] Controle de destaque altera site público.
- [ ] Ordenação consistente depois de refresh e em todas as resoluções.
- [ ] Upload/alt/preview com tratamento de erros.
- [ ] Permissões efetivamente aplicadas no backend/RLS.
- [ ] Todo item tem versão, autoria de edição, timestamp e log.
