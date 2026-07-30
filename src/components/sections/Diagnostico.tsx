import { Info } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Fonte } from "@/components/Fonte";

const FONTE_MERCADO = [
  {
    label: "Kaya Mind, Anuário da Cannabis Medicinal 2025",
    href: "https://kayamind.com/anuario-da-cannabis-medicinal-2025/",
  },
  {
    label: "CNN Brasil",
    href: "https://www.cnnbrasil.com.br/agro/mercado-de-cannabis-medicinal-atinge-r-971-milhoes-no-brasil-em-2025/",
  },
];

const STATS = [
  {
    value: "873 mil",
    label: "pacientes em tratamento em 2025 (+30% vs. 2024)",
    sources: FONTE_MERCADO,
  },
  {
    value: "~R$ 971 mi",
    label: "movimentados pelo setor em 2025, projeção de superar R$ 1 bi em 2026",
    sources: FONTE_MERCADO,
  },
  {
    value: "14,7%",
    label:
      "dos criadores brasileiros no Instagram atuam no nicho de Saúde e Bem-estar, a 3ª maior categoria da plataforma, atrás de Lifestyle e Relacionamentos (28,8%) e Moda e Vestuário (15,2%)",
    sources: [
      {
        label: "HypeAuditor",
        href: "https://blog.hypeauditor.com/pt/os-temas-que-mais-crescem-no-instagram-brasileiro/",
      },
    ],
  },
  {
    value: "quase 0",
    label:
      "criadores brasileiros de peso falando especificamente de uso medicinal regulado, um ecossistema hoje dominado por ativismo, cultivo e uso recreativo",
    note: "Leitura qualitativa, não uma estatística fechada: baseada no mapeamento de referência da Kaya Mind sobre os principais criadores de cannabis no Brasil, não um censo do Instagram. Entre os perfis de maior destaque listados por essa fonte (ativismo/lifestyle, cultivo, culinária canábica, educação recreativa), nenhum tem uso medicinal regulado e jornada do paciente como foco central.",
    sources: [
      {
        label: "Kaya Mind, mapeamento de influenciadores",
        href: "https://kayamind.com/influenciadores-de-cannabis/",
      },
    ],
  },
];

export function Diagnostico() {
  return (
    <Section id="diagnostico" alt eyebrow="Diagnóstico" title="O mercado cresceu. A conversa, não.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.value} delay={i * 70}>
            <Card className="h-full border-border/60 bg-white rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <p className="text-3xl font-extrabold tracking-tight tabular-nums text-primary lg:text-4xl">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold leading-relaxed text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                <div className="mt-auto flex flex-col gap-2 border-t border-border/60 pt-3">
                  {stat.note && (
                    <p className="flex gap-1.5 text-[0.65rem] leading-relaxed text-muted-foreground normal-case tracking-normal">
                      <Info className="mt-0.5 h-3 w-3 shrink-0 text-primary" strokeWidth={2} />
                      {stat.note}
                    </p>
                  )}
                  <Fonte links={stat.sources} />
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <p className="mt-12 max-w-2xl border-l-2 border-primary pl-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          Saúde e bem-estar é a 3ª maior categoria de criadores do Instagram brasileiro, atrás de
          lifestyle e relacionamentos e de moda e vestuário. Mas quem fala de
          cannabis, hoje, fala de militância, cultivo ou lifestyle recreativo, <strong className="font-extrabold text-[#171717]">não do caminho legal,
          regulado e seguro</strong>. Esse território está praticamente vazio. É nele que a estratégia a
          seguir foi desenhada para atuar primeiro.
        </p>
      </Reveal>
    </Section>
  );
}
