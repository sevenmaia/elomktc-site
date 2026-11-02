# ELOMKT C — Kit Mestre de Desenvolvimento

**Projeto:** Redesign do site e CMS de Eloisa Cunha | Marketing & Comunicação  
**Domínio de referência:** https://elomktc.com/  
**Versão documental:** 1.0 • 29/10/2026  
**Entrega:** Documentação pronta para iniciar a construção, começando pela Home. Não contém site implementado.

## Leia nesta ordem (obrigatório)
1. `00-INICIO/01-BRIEF-DECISOES.md` — decisões aprovadas e coisas que não podem mudar.
2. `01-DESIGN-SYSTEM/01-TOKENS-TIPOGRAFIA-CORES.md` — tokens, fontes, grids e hierarquia.
3. `01-DESIGN-SYSTEM/02-COMPONENTES-ESTADOS.md` — biblioteca de componentes.
4. `02-SITE-PUBLICO/01-MAPA-DE-ROTAS.md` — arquitetura do site.
5. `02-SITE-PUBLICO/02-HOME-BRIEF-DE-IMPLEMENTACAO.md` — **primeira tarefa de execução**.
6. `05-PROMPTS/00-PROMPT-MESTRE-GLOBAL.md` e `05-PROMPTS/01-PROMPT-INICIAR-HOME.md` — cole os dois no agente de código nesta ordem.
7. `04-ENGENHARIA/` — implementação, dados, segurança, SEO e testes.

## Estrutura
```text
elomktc-site/
├── src/                            site implementado
├── public/                         assets de produção
└── docs/
    └── kit-mestre/
        README.md
        00-INICIO/                  decisões, roadmap, checklist de ativos
        01-DESIGN-SYSTEM/           identidade, componentes, responsividade
        02-SITE-PUBLICO/            cada página e jornada do visitante
        03-PAINEL-ADMIN/            módulos, operação, permissões, leads
        04-ENGENHARIA/              stack, banco, SEO, LGPD, testes, deploy
        05-PROMPTS/                 prompts mestres e prompts por fase
        06-CONTEUDO/                copy inicial e modelo editorial
        07-REFERENCIAS/             mockups visuais e screenshots originais
```

## O que está aprovado
- Site editorial, ousado e enxuto; tipografia grande, superfícies roxas/lilás, preto profundo e áreas brancas.
- **Home com hero roxa e texto centralizado, SEM fotografia na hero.** Foto apenas na seção Sobre mim.
- Seção **Meus projetos** com cards em **formato de pasta**, com aba superior, quatro cards e cores alternadas preto/lilás/roxo.
- Páginas: Home, Sobre mim, Social Media (inclui copywriting), Vídeos (vertical e horizontal), Sites e Landing Pages, Artigos/Portfólio de Copywriting, Link na Bio e Solicitar orçamento.
- Painel privado para controlar essas páginas, ordem, publicação, destaques, imagens, textos, SEO, link bio, leads e análises.

## Regras de uso das referências
As imagens de `07-REFERENCIAS/` são **composições visuais de referência**, NÃO layouts codificados nem provas de métricas ou contratos. Não recortar screenshots para usar como fotos reais, logos ou conteúdo publicável. Utilizar fotos originais, miniaturas e logos licenciados fornecidos pela cliente. Todos os valores de visualização, seguidores, conversão, pontuação de SEO ou resultados nas imagens são exemplos fictícios de UI, até que exista integração real.

## Decisões abertas antes da publicação
- Confirmação de número WhatsApp e e-mail; titularidade e autorização de uso de fotos e marcas.
- Links efetivos dos projetos; textos integrais; vídeos originais; miniaturas em alta resolução.
- Regras da cliente para depoimentos, indicadores, projetos sigilosos e política de privacidade.
- Integração com métricas (GA4/Search Console) e eventual publicação em redes sociais: **fora da entrega inicial sem integração autorizada**.

## Definição de pronto da Fase 1
Home responsiva e fiel ao mockup, sem dados inventados, com menus, componentes acessíveis, CTAs navegáveis, imagens otimizadas e estados vazios/erro/loading; `npm run lint`, verificação TypeScript, build e testes passando. Depois disso, seguir para páginas internas.
