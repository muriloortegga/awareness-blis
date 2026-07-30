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
        <div className="rounded-2xl border border-primary/20 bg-secondary/40 p-8 md:p-12">
          <p className="max-w-3xl font-display text-lg leading-relaxed text-[#171717] md:text-2xl md:leading-[1.5]">
            Por volta dos 40 anos. Casado, com filhos, economicamente ativo. Já tentou tratamento
            convencional — e não encontrou alívio suficiente. Chega à cannabis medicinal não por uma
            doença isolada, mas por <strong className="font-extrabold text-primary">esgotamento acumulado</strong>.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CHIPS.map((chip, i) => (
          <Reveal key={chip.label} delay={i * 60}>
            <div className="flex items-baseline gap-3 rounded-2xl border border-border bg-white px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-xl font-extrabold tabular-nums text-primary">{chip.value}</span>
              <span className="text-sm text-muted-foreground">{chip.label}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="mt-12 border-l-4 border-primary bg-secondary/30 px-6 py-6 md:px-8 rounded-r-2xl">
          <p className="max-w-2xl text-sm leading-relaxed font-medium text-muted-foreground md:text-base">
            Isso muda a régua de conteúdo: <strong className="font-extrabold text-[#171717]">não falamos com alguém em estado terminal</strong>. Falamos com um
            profissional produtivo que já tentou de tudo — e ainda não achou alívio.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
