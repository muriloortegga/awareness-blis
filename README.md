# Estratégia de Awareness Blis

Construa uma landing page institucional, de página única com rolagem, em React + TypeScript + Tailwind CSS (use shadcn/ui onde fizer sentido para cards, tabs e tabelas). 

É uma apresentação estratégica de mídias sociais — não um site de vendas, não um app funcional, não precisa de backend, autenticação ou formulário de captura. O objetivo é comunicar, com autoridade visual e objetividade cirúrgica, como seria a estratégia de mídias sociais de uma healthtech de acesso a cannabis medicinal, para ser apresentada a gestores de marketing em uma reunião de até 30 minutos.

Tom e regras inegociáveis

A página deve soar como material institucional produzido internamente pela marca — nunca como um documento gerado por IA, nunca como pitch de agência, nunca com qualquer menção a "entrevista", "candidato", "proposta" ou a quem a produziu. Sem rodapé de autoria, sem "sobre mim".

Zero clichê de cannabis: nada de folha de maconha, fumaça, cores neon, gírias de maconheiro, imagens de baseado. Isso é saúde regulada, não contracultura. Pense em estética de healthtech premium (o tipo de seriedade visual de uma fintech ou de uma clínica de ponta), com um toque orgânico/botânico sutil — nunca óbvio.

Nada de emoji como ícone. Use ícones de linha (lucide-react).

Copy enxuto: cada seção resolve UMA ideia. Nada de parágrafos longos, nada de bullet points genéricos e vazios. Prefira frases curtas que respiram, com hierarquia visual clara (título curto + 1 frase de apoio + dado/prova).

Sem CTA de venda ("compre agora", "assine já"). É uma apresentação estratégica, não uma página de conversão.

Sistema de design

Paleta de cores (defina como variáveis Tailwind/CSS):

Fundo base: creme quente #FAF8F2

Fundo alternado (seções pares): stone/sage suave #E9E5D8

Primária (verde botânico profundo, autoridade): #1F3D2E

Texto principal: carvão #22241F

Texto secundário/legenda: #5C5A4F

Acento (âmbar/terracota — usar com moderação, para destaques de dado e divisores): #B8823E

Paleta de gráficos: variações do verde primário + o âmbar como cor de destaque; nunca use verde neon.

Tipografia (importar do Google Fonts ou similares):

Títulos/headline: Sora (serifada editorial, peso 500–600) — transmite autoridade e seriedade institucional.

Corpo, UI, dados: Poppins, pesos 400/500/700.

Números/estatísticas grandes: Poppins Bold, com tabular-nums.

Layout e interação:

Página única, rolagem vertical, largura de conteúdo máxima ~1120px centralizada, respiro generoso entre seções (padding vertical grande, 96–140px em desktop).

Nav lateral fixa e discreta (desktop) com indicadores de seção (dots) que destacam a seção ativa ao rolar — clicável para navegação rápida (útil em apresentação ao vivo).

Barra de progresso de leitura fina no topo (opcional, sutil).

Animações de entrada por scroll: fade + slide-up leve (200–300ms, easing suave), respeitando prefers-reduced-motion. Nada de exagero, nada de parallax pesado.

Responsivo: breakpoints 375px, 768px, 1024px, 1440px. Em mobile, nav lateral vira menu simplificado ou desaparece.

Contraste mínimo AA, estados de foco visíveis, cursor-pointer em todo elemento clicável.

Estrutura de seções e conteúdo (use este copy, não invente dados novos)

1. Hero (abertura)

Eyebrow (label pequeno acima do título): ESTRATÉGIA DE MÍDIAS SOCIAIS

Headline (grande, serifada): "O Brasil fala muito sobre cannabis. Quase nunca sobre o uso que realmente importa aqui."

Subheadline (menor, sans, texto secundário): "Uma estratégia de topo de funil para transformar a marca na referência pública em uso medicinal regulado — com método, dado e previsibilidade, não com achismo de rede social."

Indicador sutil de "role para explorar" no rodapé da seção.

2. Diagnóstico — o espaço em aberto

Título de seção: "O mercado cresceu. A conversa, não."

Três a quatro stat cards lado a lado:

873 mil — pacientes em tratamento em 2025 (+30% vs. 2024)

~R$ 971 mi — movimentados pelo setor em 2025, projeção de superar R$ 1 bi em 2026

46% — dos perfis do Instagram no Brasil já consomem conteúdo de saúde e bem-estar

quase 0 — criadores brasileiros de peso falando especificamente de uso medicinal regulado (o ecossistema hoje é dominado por ativismo, cultivo e uso recreativo)

Texto de apoio (curto, uma ideia): "Saúde e bem-estar é o 2º tema mais popular do Instagram brasileiro. Mas quem fala de cannabis, hoje, fala de militância, cultivo ou lifestyle recreativo — não do caminho legal, regulado e seguro. Esse território está praticamente vazio. É nele que a estratégia a seguir foi desenhada para atuar primeiro."

3. Para quem estamos falando

Título de seção: "Não é o paciente que a categoria imagina."

Card de perfil (destaque central): "Por volta dos 40 anos. Casado, com filhos, economicamente ativo. Já tentou tratamento convencional — e não encontrou alívio suficiente. Chega à cannabis medicinal não por uma doença isolada, mas por esgotamento acumulado."

Grid de estatísticas de apoio (formato pequeno, tipo "chip" ou mini-card):

90% trabalham atualmente

70% são casados

71% praticam atividade física

66% acordam já estressados

51% relatam falhas frequentes de memória

40% já teve crise de pânico

Callout de virada (destacado visualmente, cor de acento): "Isso muda a régua de conteúdo: não falamos com alguém em estado terminal. Falamos com um profissional produtivo que já tentou de tudo — e ainda não achou alívio."

4. Ativos de marca

Título de seção: "O que já temos. O que ainda podemos construir."

Duas colunas lado a lado:

Coluna A — "Hoje"

Única plataforma do segmento homologada simultaneamente por Apple e Google — um selo de legitimidade que nenhum concorrente reivindica de forma equivalente.

O maior banco de dados clínicos da América Latina em uso terapêutico da cannabis — mais de 30 mil registros voluntários.

Presença em mais de 2.200 cidades brasileiras, nota 8,3 no Reclame Aqui, entre 4,8 e 4,9 nas lojas de aplicativo.

Coluna B — "A construir"

Transformar a base de dados clínicos em propriedade editorial recorrente — autoridade e pauta de imprensa própria, não conteúdo genérico de blog.

Construir uma rede própria de médicos-criadores — território de conteúdo ainda sem dono relevante no Brasil.

Ampliar o enquadramento da categoria: de "cannabis para quem sofre muito" para bem-estar e produtividade de quem já tentou de tudo e não foi ouvido.

5. Canais e adaptação de conteúdo

Título de seção: "Mesma mensagem, quatro lógicas diferentes."

Componente de cards/tabs por plataforma (4 cards principais + 1 nota secundária):

Instagram — Papel: hub central da estratégia. Fazer: Reels de descoberta, carrossel educativo, Stories de bastidor e comunidade. Evitar: preço, cupom, qualquer chamada direta de compra — é o gatilho nº1 de remoção de conteúdo, mesmo para marcas 100% legais.

TikTok — Papel: cultura e bem-estar, não o produto. Fazer: conteúdo de cultura, rotina e saúde mental, sem exposição visual de cannabis. Evitar: qualquer imagem de planta, produto ou consumo — é a rede mais restritiva; contas já foram banidas do dia para a noite.

YouTube — Papel: autoridade de formato longo. Fazer: vídeos explicativos e documentais, com relevância dupla — audiência de vídeo educativo e fonte citada por buscadores de IA. Evitar: link direto de compra e monetização do vídeo.

LinkedIn — Papel: institucional e regulatório. Fazer: dado próprio, pauta de mercado, thought leadership do time médico e de liderança. Evitar: tom de consumo — é canal de autoridade, não de conversão de paciente.

Nota secundária (linha única, discreta): "X e Reddit entram como canais complementares de nicho — participação genuína, não campanha."

6. Funil de conteúdo por formato

Título de seção: "Não é funil de venda. É funil de consciência."

Gráfico de barras horizontais empilhadas ou donut chart (implemente com recharts) mostrando a distribuição percentual do mix de conteúdo:

Educação & Desmistificação — 30%

Jornada & Bastidor do atendimento — 20%

Cultura, bem-estar & rotina (sem exposição de produto) — 20%

Autoridade médica (médicos-criadores, ciência) — 15%

Dado & Notícia de mercado — 10%

Comunidade & UGC (jornada, não eficácia clínica) — 5%

Texto de apoio abaixo do gráfico: "Antes de decidir se tratar, a pessoa precisa primeiro acreditar que existe um caminho legal, sério e possível. Esse funil constrói essa crença — etapa por etapa, formato por formato."

7. Medição, métricas e previsibilidade (seção mais robusta — é a espinha dorsal)

Título de seção: "A pergunta não é 'engajou?'. É 'quanto custou cada engajamento — e dá para prever o próximo'."

Sub-bloco A — Funil de métricas por etapa (apresente como 3 colunas ou 3 blocos horizontais conectados):

Topo (Consciência): alcance, impressões, taxa de retenção de vídeo (referência de mercado: 52% em Reels/TikTok), crescimento líquido de seguidores, share of voice frente aos concorrentes diretos.

Meio (Consideração): taxa de engajamento, salvamentos e compartilhamentos (o sinal mais forte para o algoritmo — mais forte que curtida), cliques para o link/bio, taxa de visita ao perfil.

Ponte (Intenção): downloads do app, taxa de cadastro, agendamentos de teleconsulta iniciados — os únicos pontos de "conversão" mensuráveis antes da decisão médica, que está fora do controle da própria plataforma.

Sub-bloco B — Como isso vira previsibilidade de custo: Texto: "Sem checkout próprio — a compra acontece fora da plataforma, depois de uma decisão médica — a régua certa nunca é custo por venda. É custo por atenção qualificada: CPM (custo por mil), CPE (custo por engajamento), CPC (custo por clique qualificado), custo por download, custo por agendamento iniciado."

Card de método: "Rastreamento sem checkout próprio: link único (UTM) por criador e por campanha, redirecionamento rastreável para a loja de app, cupom de desconto na consulta atrelado ao agendamento. Cada criador e cada peça de mídia paga gera um número — não uma impressão."

Card de previsibilidade: "Benchmarking contínuo de CPE por pilar de conteúdo e por camada de criador (nano, micro, médico-criador), atualizado campanha a campanha. Isso transforma orçamento de mídia em decisão orientada por histórico — não em aposta."

Sub-bloco C — Exemplo de OKR (apresente como card destacado): Objetivo: Tornar a marca a referência pública em uso medicinal regulado de cannabis no Brasil.

KR1: Crescer alcance qualificado a cada trimestre, medido por reach + retenção média de vídeo.

KR2: Manter taxa de engajamento acima do benchmark do nicho de saúde e bem-estar.

KR3: Aumentar o volume de downloads atribuíveis a social orgânico e a criadores, via rastreamento de link único.

KR4: Reduzir o CPE médio a cada trimestre, via otimização do mix de formato e camada de criador.

Tabela simples (3 colunas: Métrica | O que mede | Por que importa) com 5–6 linhas cobrindo as métricas citadas acima, para fechar a seção em formato de referência rápida.

8. Influenciadores e UGC

Título de seção: "Quem fala pela marca — e como isso fica dentro da lei."

Quatro blocos curtos:

Médicos-criadores: a rota mais segura do ponto de vista regulatório — falam de ciência e fisiologia, não prometem resultado individual. Também é o território de conteúdo mais vazio do mercado brasileiro hoje.

Nano e microinfluenciadores de bem-estar e produtividade: não perfis de cultivo ou ativismo recreativo — autenticidade e custo-benefício, tendência confirmada de mercado para 2026.

UGC de pacientes satisfeitos: conteúdo sobre a jornada — acolhimento, clareza, cuidado — nunca sobre eficácia clínica, que é a linha mais sensível da regulação de publicidade de medicamentos de prescrição obrigatória.

Guardrails de toda peça: identificação clara de publicidade, sem termos como "experimente"/"use"/"tome", sem promessa de resultado. Cada criador rastreado por link único — sem depender de checkout próprio.

9. Primeiros 90 dias

Título de seção: "Por onde começa."

Timeline horizontal de 3 fases (componente de steps/roadmap):

Fase 1 · Dias 1–30 — Fundação: auditoria de canais, tom de voz e identidade por plataforma, calibragem dos pilares de conteúdo, estrutura de mensuração (dashboard, UTMs, benchmarks iniciais).

Fase 2 · Dias 31–60 — Motor de conteúdo: lançamento do funil por formato, piloto com médicos-criadores, recrutamento dos primeiros pacientes-embaixadores, primeira leitura de dados reais.

Fase 3 · Dias 61–90 — Escala com dado: expansão de criadores por performance real, ajuste de mix por CPE, entrada institucional no LinkedIn, primeira peça de autoridade no YouTube.

10. Fechamento

Frase de encerramento, centralizada, tipografia grande: "O mercado já decidiu crescer. A pergunta é quem vai ser a referência quando ele crescer."

Sem CTA de venda. Pode incluir apenas uma linha discreta de rodapé com o nome da marca e o ano.

Requisitos técnicos

React + TypeScript + Tailwind, componentizado por seção (<Hero />, <Diagnostico />, <Publico />, <Ativos />, <Canais />, <FunilConteudo />, <Metricas />, <Influenciadores />, <Roadmap />, <Fechamento />).

Use recharts para os gráficos (donut/barras do funil de conteúdo).

Sem backend, sem autenticação, sem formulário de captura de lead.

Priorize performance e limpeza de código sobre quantidade de efeitos.

Entregue como uma única página (/), pronta para apresentação em tela cheia.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/119c37f5-c007-4dd1-826e-5496a021ff87).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
