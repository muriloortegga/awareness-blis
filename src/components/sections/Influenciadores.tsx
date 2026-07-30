import { Stethoscope, Users, MessageSquareQuote, ShieldCheck } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Fonte } from "@/components/Fonte";

const BLOCOS = [
  {
    icon: Stethoscope,
    titulo: "Médicos-criadores",
    texto:
      "A rota mais segura do ponto de vista regulatório: falam de ciência e fisiologia, não prometem resultado individual. Também é o território de conteúdo mais vazio do mercado brasileiro hoje.",
  },
  {
    icon: Users,
    titulo: "Nano e microinfluenciadores de bem-estar e produtividade",
    texto:
      "Não perfis de cultivo ou ativismo recreativo, e sim autenticidade e custo-benefício, tendência confirmada de mercado para 2026.",
  },
  {
    icon: MessageSquareQuote,
    titulo: "UGC de pacientes satisfeitos",
    texto:
      "Conteúdo sobre a jornada (acolhimento, clareza, cuidado), nunca sobre eficácia clínica, que é a linha mais sensível da regulação de publicidade de medicamentos de prescrição obrigatória.",
  },
  {
    icon: ShieldCheck,
    titulo: "Guardrails de toda peça",
    texto:
      'Identificação clara de publicidade, sem termos como "experimente"/"use"/"tome", sem promessa de resultado. Cada criador rastreado por link único, sem depender de checkout próprio.',
  },
];

const BASE_REGULATORIA = [
  {
    label: "RDC nº 660/2022, ANVISA",
    href: "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/controlados/cannabis",
  },
  {
    label: "RDC nº 96/2008, ANVISA (publicidade de medicamentos)",
    href: "https://www.gov.br/anvisa/pt-br/assuntos/fiscalizacao-e-monitoramento/propaganda/legislacao/legislacao",
  },
  {
    label: "Resolução CFM nº 2.336/2023",
    href: "https://sistemas.cfm.org.br/normas/arquivos/resolucoes/BR/2023/2336_2023.pdf",
  },
  {
    label: "CONAR, Guia de Marketing e Publicidade por Influenciadores Digitais (2026)",
    href: "http://www.conar.org.br/pdf/Guia-de-MKT-e-Publicidade-por-Influenciadores.pdf",
  },
];

export function Influenciadores() {
  return (
    <Section
      id="influenciadores"
      alt
      eyebrow="Influenciadores e UGC"
      title="Quem fala pela marca, e como isso fica dentro da lei."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {BLOCOS.map((b, i) => (
          <Reveal key={b.titulo} delay={i * 70}>
            <div className="h-full rounded-2xl border border-border/60 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary shadow-sm mb-4">
                <b.icon className="h-4.5 w-4.5" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-base font-bold text-[#171717] md:text-lg">
                {b.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.texto}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={80}>
        <div className="mt-8 rounded-2xl border border-border/60 bg-secondary/20 p-6 md:p-8">
          <p className="text-xs font-bold tracking-[0.22em] text-primary uppercase">Base regulatória</p>
          <ul className="mt-4 space-y-2">
            {BASE_REGULATORIA.map((ref) => (
              <li key={ref.href}>
                <a
                  href={ref.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline underline-offset-2"
                >
                  {ref.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
