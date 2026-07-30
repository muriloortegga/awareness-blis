import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const CHIPS = [
  { value: "90%", label: "trabalham atualmente" },
  { value: "70%", label: "são casados" },
  { value: "71%", label: "praticam atividade física" },
  { value: "66%", label: "acordam já estressados" },
  { value: "51%", label: "relatam falhas frequentes de memória" },
  { value: "40%", label: "já teve crise de pânico" },
];

export function Publico() {
  return (
    <Section id="publico" eyebrow="Público" title="Não é o paciente que a categoria imagina.">
      <Reveal>
        <div className="rounded-lg border border-primary/15 bg-secondary/50 p-8 md:p-12">
          <p className="max-w-3xl font-display text-lg leading-relaxed text-primary md:text-2xl md:leading-[1.5]">
            Por volta dos 40 anos. Casado, com filhos, economicamente ativo. Já tentou tratamento
            convencional — e não encontrou alívio suficiente. Chega à cannabis medicinal não por uma
            doença isolada, mas por esgotamento acumulado.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CHIPS.map((chip, i) => (
          <Reveal key={chip.label} delay={i * 60}>
            <div className="flex items-baseline gap-3 rounded-md border border-border bg-card px-5 py-4">
              <span className="text-xl font-bold tabular-nums text-accent">{chip.value}</span>
              <span className="text-sm text-muted-foreground">{chip.label}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="mt-12 border-l-4 border-accent bg-accent/10 px-6 py-6 md:px-8">
          <p className="max-w-2xl text-sm leading-relaxed font-medium text-foreground md:text-base">
            Isso muda a régua de conteúdo: não falamos com alguém em estado terminal. Falamos com um
            profissional produtivo que já tentou de tudo — e ainda não achou alívio.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
