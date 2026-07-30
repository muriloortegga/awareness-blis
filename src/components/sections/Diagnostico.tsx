import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Card, CardContent } from "@/components/ui/card";

const STATS = [
  { value: "873 mil", label: "pacientes em tratamento em 2025 (+30% vs. 2024)" },
  {
    value: "~R$ 971 mi",
    label: "movimentados pelo setor em 2025, projeção de superar R$ 1 bi em 2026",
  },
  {
    value: "46%",
    label: "dos perfis do Instagram no Brasil já consomem conteúdo de saúde e bem-estar",
  },
  {
    value: "quase 0",
    label:
      "criadores brasileiros de peso falando especificamente de uso medicinal regulado — o ecossistema hoje é dominado por ativismo, cultivo e uso recreativo",
  },
];

export function Diagnostico() {
  return (
    <Section id="diagnostico" alt eyebrow="Diagnóstico" title="O mercado cresceu. A conversa, não.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.value} delay={i * 70}>
            <Card className="h-full border-border/70 bg-card/80 shadow-none">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <p className="text-3xl font-bold tabular-nums text-primary lg:text-[2.1rem]">
                  {stat.value}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <p className="mt-12 max-w-2xl border-l-2 border-accent pl-6 text-sm leading-relaxed text-foreground md:text-base">
          Saúde e bem-estar é o 2º tema mais popular do Instagram brasileiro. Mas quem fala de
          cannabis, hoje, fala de militância, cultivo ou lifestyle recreativo — não do caminho legal,
          regulado e seguro. Esse território está praticamente vazio. É nele que a estratégia a
          seguir foi desenhada para atuar primeiro.
        </p>
      </Reveal>
    </Section>
  );
}
