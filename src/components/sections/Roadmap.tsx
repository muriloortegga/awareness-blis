import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const FASES = [
  {
    fase: "Fase 1 · Dias 1–30",
    titulo: "Fundação",
    texto:
      "Auditoria de canais, tom de voz e identidade por plataforma, calibragem dos pilares de conteúdo, estrutura de mensuração (dashboard, UTMs, benchmarks iniciais).",
  },
  {
    fase: "Fase 2 · Dias 31–60",
    titulo: "Motor de conteúdo",
    texto:
      "Lançamento do funil por formato, piloto com médicos-criadores, recrutamento dos primeiros pacientes-embaixadores, primeira leitura de dados reais.",
  },
  {
    fase: "Fase 3 · Dias 61–90",
    titulo: "Escala com dado",
    texto:
      "Expansão de criadores por performance real, ajuste de mix por CPE, entrada institucional no LinkedIn, primeira peça de autoridade no YouTube.",
  },
];

export function Roadmap() {
  return (
    <Section id="roadmap" eyebrow="Primeiros 90 dias" title="Por onde começa.">
      <div className="relative grid gap-10 md:grid-cols-3 md:gap-8">
        <div aria-hidden className="absolute top-[9px] right-0 left-0 hidden h-px bg-border md:block" />
        {FASES.map((f, i) => (
          <Reveal key={f.fase} delay={i * 90} className="relative">
            <span className="relative z-10 block h-[18px] w-[18px] rounded-full border-2 border-accent bg-background" />
            <p className="mt-6 text-[0.65rem] font-medium tracking-[0.2em] text-muted-foreground uppercase">
              {f.fase}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold text-primary md:text-xl">
              {f.titulo}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.texto}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
