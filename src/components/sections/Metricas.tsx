import { Eye, MousePointerClick, ArrowRightLeft, Link2, LineChart, Target } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ETAPAS = [
  {
    icon: Eye,
    etapa: "Topo",
    nome: "Consciência",
    itens: [
      "Alcance e impressões",
      "Taxa de retenção de vídeo (referência de mercado: 52% em Reels/TikTok)",
      "Crescimento líquido de seguidores",
      "Share of voice frente aos concorrentes diretos",
    ],
  },
  {
    icon: MousePointerClick,
    etapa: "Meio",
    nome: "Consideração",
    itens: [
      "Taxa de engajamento",
      "Salvamentos e compartilhamentos — o sinal mais forte para o algoritmo, mais forte que curtida",
      "Cliques para o link/bio",
      "Taxa de visita ao perfil",
    ],
  },
  {
    icon: ArrowRightLeft,
    etapa: "Ponte",
    nome: "Intenção",
    itens: [
      "Downloads do app",
      "Taxa de cadastro",
      "Agendamentos de teleconsulta iniciados",
      "Os únicos pontos de conversão mensuráveis antes da decisão médica, que está fora do controle da própria plataforma",
    ],
  },
];

const TABELA = [
  {
    metrica: "Retenção de vídeo",
    mede: "Quanto do conteúdo é efetivamente assistido",
    importa: "Define distribuição algorítmica no topo do funil",
  },
  {
    metrica: "Salvamentos e compartilhamentos",
    mede: "Valor percebido além do consumo passivo",
    importa: "Sinal de relevância mais forte que curtida",
  },
  {
    metrica: "CPM",
    mede: "Custo por mil impressões",
    importa: "Preço da atenção bruta por canal e formato",
  },
  {
    metrica: "CPE",
    mede: "Custo por engajamento",
    importa: "Compara pilares de conteúdo e camadas de criador",
  },
  {
    metrica: "Custo por download",
    mede: "Investimento por instalação atribuível",
    importa: "Primeira medida real de intenção",
  },
  {
    metrica: "Custo por agendamento iniciado",
    mede: "Investimento por teleconsulta iniciada",
    importa: "Ponto mensurável mais próximo da decisão clínica",
  },
];

const OKRS = [
  "KR1: Crescer alcance qualificado a cada trimestre, medido por reach + retenção média de vídeo.",
  "KR2: Manter taxa de engajamento acima do benchmark do nicho de saúde e bem-estar.",
  "KR3: Aumentar o volume de downloads atribuíveis a social orgânico e a criadores, via rastreamento de link único.",
  "KR4: Reduzir o CPE médio a cada trimestre, via otimização do mix de formato e camada de criador.",
];

export function Metricas() {
  return (
    <Section
      id="metricas"
      eyebrow="Medição e previsibilidade"
      title="A pergunta não é 'engajou?'. É 'quanto custou cada engajamento — e dá para prever o próximo'."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {ETAPAS.map((e, i) => (
          <Reveal key={e.etapa} delay={i * 80}>
            <div className="flex h-full flex-col rounded-lg border border-border bg-card p-6">
              <e.icon className="h-5 w-5 text-accent" strokeWidth={1.4} />
              <p className="mt-5 text-[0.65rem] font-medium tracking-[0.2em] text-muted-foreground uppercase">
                {e.etapa}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-primary">{e.nome}</h3>
              <ul className="mt-5 space-y-3">
                {e.itens.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-px w-3 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={80}>
        <p className="mt-16 max-w-3xl text-sm leading-relaxed text-foreground md:text-base">
          Sem checkout próprio — a compra acontece fora da plataforma, depois de uma decisão médica —
          a régua certa nunca é custo por venda. É custo por atenção qualificada: CPM (custo por
          mil), CPE (custo por engajamento), CPC (custo por clique qualificado), custo por download,
          custo por agendamento iniciado.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-lg border border-primary/15 bg-secondary/50 p-6 md:p-8">
            <Link2 className="h-5 w-5 text-primary" strokeWidth={1.4} />
            <h3 className="mt-4 font-display text-base font-semibold text-primary">
              Rastreamento sem checkout próprio
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Link único (UTM) por criador e por campanha, redirecionamento rastreável para a loja de
              app, cupom de desconto na consulta atrelado ao agendamento. Cada criador e cada peça de
              mídia paga gera um número — não uma impressão.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="h-full rounded-lg border border-primary/15 bg-secondary/50 p-6 md:p-8">
            <LineChart className="h-5 w-5 text-primary" strokeWidth={1.4} />
            <h3 className="mt-4 font-display text-base font-semibold text-primary">
              Previsibilidade de custo
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Benchmarking contínuo de CPE por pilar de conteúdo e por camada de criador (nano,
              micro, médico-criador), atualizado campanha a campanha. Isso transforma orçamento de
              mídia em decisão orientada por histórico — não em aposta.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={60}>
        <div className="mt-8 rounded-lg border-l-4 border-accent bg-primary p-8 text-primary-foreground md:p-10">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-accent" strokeWidth={1.4} />
            <p className="text-[0.65rem] font-medium tracking-[0.22em] uppercase opacity-80">
              Exemplo de OKR
            </p>
          </div>
          <p className="mt-5 max-w-2xl font-display text-lg leading-snug font-semibold md:text-xl">
            Tornar a marca a referência pública em uso medicinal regulado de cannabis no Brasil.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {OKRS.map((kr) => (
              <li key={kr} className="text-sm leading-relaxed opacity-90">
                {kr}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-12 overflow-hidden rounded-lg border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-primary">Métrica</TableHead>
                <TableHead className="text-primary">O que mede</TableHead>
                <TableHead className="text-primary">Por que importa</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {TABELA.map((row) => (
                <TableRow key={row.metrica}>
                  <TableCell className="align-top font-medium text-foreground">
                    {row.metrica}
                  </TableCell>
                  <TableCell className="align-top text-muted-foreground">{row.mede}</TableCell>
                  <TableCell className="align-top text-muted-foreground">{row.importa}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Reveal>
    </Section>
  );
}
