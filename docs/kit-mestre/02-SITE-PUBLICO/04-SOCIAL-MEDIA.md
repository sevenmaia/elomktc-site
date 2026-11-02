# Página Social Media — `/social-midia`

**Referência:** `03-SOCIAL-MEDIA-COM-COPY.webp`. A página oferece gestão/criação de conteúdo, planejamento e **copywriting estratégico** dentro da entrega.

## Seções
1. Hero branco com H1 grande `Estratégia que gera conexões.` e área de mockups de celulares com peças reais licenciadas, CTAs Fale comigo e Ver projetos.
2. Faixa de serviços: Estratégia de conteúdo, **Copywriting estratégico**, Calendário e planejamento, Criação de artes e vídeos, Gestão e análise de resultados.
3. Seção preta `Do planejamento à performance.` com **cinco etapas** em cards: Estratégia → Planejamento → Copywriting → Produção → Análise. A etapa Copywriting não pode ser omitida.
4. Seção clara `Formatos que se conectam com seu público.` com cards tipo pasta: Posts Estratégicos, Reels e Vídeos, Stories, Carrosséis. Setas e navegação acessíveis.
5. Projetos em destaque sobre preto, com **carrossel real** de trabalhos. `scroll-snap`, controles e swipe, sem vídeo que apenas imita um slider.
6. Opcional: indicadores de resultados **somente se verificados** e rotulados com fonte/período. Se não houver, trocar por metodologia e benefícios, sem números fictícios.
7. CTA final lavanda idêntico à Home.

## Copywriting — mensagem e escopo
Copy deve aparecer na promessa do serviço e no fluxo: pesquisa, tom de voz, roteiros, legendas, títulos, CTAs, storytelling, SEO para copy e otimizações. Texto sugerido: `Do planejamento às legendas e roteiros, cada palavra é pensada para aproximar a marca do público.` Não criar seção gigante que quebre o estilo.

## Modelo de portfólio de Social
Cada `social_case` tem `client_label`, `platform`, `format` (post/carousel/reel/story), `cover_asset_id`, `slides_asset_ids[]`, `caption`, `context`, `services[]`, `featured`, `sort_order`, `visibility` e opcional `external_url`. Dados só mostram clientes e campanhas autorizados.

## QA
Carrossel funcional; cards sem cortes; texto legível; posts podem ter muitas imagens; modal/lightbox sem prender usuários; keyboard funcional. A ordem que aparece na Home ou no carrossel deve refletir o CMS.
