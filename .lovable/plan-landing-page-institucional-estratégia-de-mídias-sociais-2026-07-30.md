# Landing page institucional — Estratégia de Mídias Sociais

Página única em `/`, rolagem vertical, pronta para apresentação em tela cheia. Material institucional: sem venda, sem backend, sem formulário, sem autoria.

## Sistema de design

- Tokens em `src/styles.css` (oklch): fundo creme `#FAF8F2`, alternado `#E9E5D8`, primária verde botânico `#1F3D2E`, texto `#22241F`, secundário `#5C5A4F`, acento âmbar `#B8823E`.
- Fontes via `<link>` no head do root: Sora (títulos, 500–600) e Poppins (corpo/UI/números, 400/500/700). Números com `tabular-nums`.
- Conteúdo centralizado em ~1120px, respiro vertical 96–140px no desktop.
- Estética healthtech premium: linhas finas, divisores em âmbar, toque botânico discreto (formas orgânicas sutis em background, nunca folha de cannabis). Ícones lucide-react de linha, zero emoji.

## Estrutura (componentes por seção)

1. `Hero` — eyebrow, headline serifada, subheadline, indicador de rolagem.
2. `Diagnostico` — 4 stat cards (873 mil, ~R$ 971 mi, 46%, quase 0) + texto de apoio.
3. `Publico` — card de perfil central, grid de 6 chips estatísticos, callout em âmbar.
4. `Ativos` — duas colunas: "Hoje" e "A construir".
5. `Canais` — tabs/cards por plataforma (Instagram, TikTok, YouTube, LinkedIn) com Papel / Fazer / Evitar + nota discreta sobre X e Reddit.
6. `FunilConteudo` — donut chart (recharts) com o mix 30/20/20/15/10/5 + texto de apoio.
7. `Metricas` — 3 blocos conectados (Topo / Meio / Ponte), bloco de custo por atenção qualificada, card de método de rastreamento, card de previsibilidade, card de OKR (KR1–KR4) e tabela de referência (Métrica | O que mede | Por que importa).
8. `Influenciadores` — 4 blocos curtos incluindo guardrails.
9. `Roadmap` — timeline horizontal de 3 fases (1–30, 31–60, 61–90).
10. `Fechamento` — frase grande centralizada + linha discreta com nome da marca e ano.

## Navegação e interação

- Nav lateral fixa (desktop) com dots por seção, destaque da ativa via IntersectionObserver, clicável.
- Barra de progresso de leitura fina no topo.
- Entrada por scroll: fade + slide-up 200–300ms, desativado sob `prefers-reduced-motion`.
- Responsivo em 375 / 768 / 1024 / 1440; nav lateral some no mobile.
- Contraste AA, foco visível, `cursor-pointer` em clicáveis.

## Detalhes técnicos

- Rota: reescrever `src/routes/index.tsx` com `head()` próprio (título e descrição específicos, og/twitter).
- Seções em `src/components/sections/*.tsx`; conteúdo textual em constantes tipadas por seção.
- shadcn/ui para card, tabs e table; `recharts` instalado se ausente.
- Hook único `useRevealOnScroll` para as animações; sem parallax, sem bibliotecas extras de animação.
