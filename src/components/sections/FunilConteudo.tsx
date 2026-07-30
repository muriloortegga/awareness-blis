import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const MIX = [
  { name: "Educação & Desmistificação", value: 30, color: "var(--chart-1)" },
  { name: "Jornada & Bastidor do atendimento", value: 20, color: "var(--chart-2)" },
  { name: "Cultura, bem-estar & rotina", value: 20, color: "var(--chart-3)" },
  { name: "Autoridade médica", value: 15, color: "var(--chart-4)" },
  { name: "Dado & Notícia de mercado", value: 10, color: "var(--chart-5)" },
  { name: "Comunidade & UGC", value: 5, color: "var(--primary-faint)" },
];

const DETALHE: Record<string, string> = {
  "Cultura, bem-estar & rotina": "sem exposição de produto",
  "Autoridade médica": "médicos-criadores, ciência",
  "Comunidade & UGC": "jornada, não eficácia clínica",
};

export function FunilConteudo() {
  return (
    <Section
      id="funil"
      alt
      eyebrow="Funil de conteúdo"
      title="Não é funil de venda. É funil de consciência."
    >
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Reveal>
          <div className="h-[300px] w-full md:h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={MIX}
                  dataKey="value"
                  nameKey="name"
                  innerRadius="58%"
                  outerRadius="88%"
                  paddingAngle={2}
                  stroke="none"
                >
                  {MIX.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number, name: string) => [`${value}%`, name]}
                  contentStyle={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    color: "var(--foreground)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Reveal>

        <ul className="space-y-4">
          {MIX.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 60}>
              <div className="flex items-center gap-4 border-b border-border pb-4">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: item.color }}
                />
                <span className="flex-1 text-sm text-foreground">
                  {item.name}
                  {DETALHE[item.name] && (
                    <span className="text-muted-foreground"> ({DETALHE[item.name]})</span>
                  )}
                </span>
                <span className="text-sm font-bold tabular-nums text-primary">{item.value}%</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <Reveal delay={100}>
        <p className="mt-12 max-w-2xl border-l-2 border-primary pl-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          Antes de decidir se tratar, a pessoa precisa primeiro <strong className="font-extrabold text-[#171717]">acreditar que existe um caminho
          legal, sério e possível</strong>. Esse funil constrói essa crença, etapa por etapa, formato por
          formato.
        </p>
      </Reveal>
    </Section>
  );
}
