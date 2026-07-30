import { Info, Stethoscope, Users, MessageSquareQuote, ShieldCheck } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Fonte } from "@/components/Fonte";

const RDC_96 = {
  label: "RDC nº 96/2008, ANVISA",
  href: "https://www.gov.br/anvisa/pt-br/assuntos/fiscalizacao-e-monitoramento/propaganda/legislacao/legislacao",
};

const CONAR_GUIA = {
  label: "CONAR, Guia de Marketing e Publicidade por Influenciadores Digitais (2026)",
  href: "http://www.conar.org.br/pdf/Guia-de-MKT-e-Publicidade-por-Influenciadores.pdf",
};

const BLOCOS = [
  {
    icon: Stethoscope,
    titulo: "Médicos-criadores",
    texto:
      "A rota mais segura do ponto de vista regulatório: falam de ciência e fisiologia, não prometem resultado individual. Também é o território de conteúdo mais vazio do mercado brasileiro hoje.",
    citacoes: [
      {
        sources: [
          {
            label: "Resolução CFM nº 2.336/2023 (texto oficial)",
            href: "https://sistemas.cfm.org.br/normas/arquivos/resolucoes/BR/2023/2336_2023.pdf",
          },
          {
            label: "CFM, nota oficial",
            href: "https://portal.cfm.org.br/noticias/cfm-atualiza-resolucao-da-publicidade-medica/",
          },
        ],
      },
      {
        note: "Leitura qualitativa, não uma estatística fechada: baseada no mapeamento de referência da Kaya Mind sobre os principais criadores de cannabis no Brasil, nenhum dos perfis de maior destaque listados tem uso medicinal regulado como foco central. O mercado global de criadores de conteúdo em saúde deve superar US$ 20 bilhões, e a conversa brasileira sobre médicos-influenciadores ainda está atrasada frente a esse movimento internacional.",
        sources: [
          {
            label: "Kaya Mind, mapeamento de influenciadores",
            href: "https://kayamind.com/influenciadores-de-cannabis/",
          },
          {
            label: "Pista Pop",
            href: "https://pistapop.com.br/2026/06/o-mercado-global-de-medicos-influenciadores-explode-e-o-brasil-ainda-hesita-2/",
          },
        ],
      },
    ],
  },
  {
    icon: Users,
    titulo: "Nano e microinfluenciadores de bem-estar e produtividade",
    texto:
      "Não perfis de cultivo ou ativismo recreativo, e sim autenticidade e custo-benefício, tendência confirmada de mercado para 2026.",
    citacoes: [
      {
        note: "74% dos profissionais de marketing brasileiros pretendem aumentar investimento em marketing de influência em 2026, e 54% priorizam nano e microinfluenciadores.",
        sources: [
          {
            label: "Aspire, The State of Influencer Marketing 2026 (via SEGS)",
            href: "https://www.segs.com.br/seguros/452293-marcas-apostam-em-nano-e-micro-influenciadores-para-fortalecer-a-confianca-no-marketing-digital",
          },
        ],
      },
    ],
  },
  {
    icon: MessageSquareQuote,
    titulo: "UGC de pacientes satisfeitos",
    texto:
      "Conteúdo sobre a jornada (acolhimento, clareza, cuidado), nunca sobre eficácia clínica, que é a linha mais sensível da regulação de publicidade de medicamentos de prescrição obrigatória.",
    citacoes: [
      {
        note: "Benchmark geral de UGC (dado agregado de mercado/e-commerce, não estudo específico do setor de saúde ou cannabis): campanhas com UGC têm aumento médio de 29% na taxa de conversão, e anúncios em formato UGC chegam a ter CTR até 4x maior e CPC até 50% menor que anúncios tradicionais de marca.",
        sources: [
          {
            label: "TurnTo Networks",
            href: "https://www.cioreview.com/company-retailsolution/turnto-networks-unleashing-the-power-of-user-generated-content-for-buying-decisions-cid-4969.html",
          },
          { label: "Taggbox", href: "https://taggbox.com/pt/blog/ugc-ads/" },
        ],
      },
      {
        sources: [RDC_96],
      },
    ],
  },
  {
    icon: ShieldCheck,
    titulo: "Guardrails de toda peça",
    texto:
      'Identificação clara de publicidade, sem termos como "experimente"/"use"/"tome", sem promessa de resultado. Cada criador rastreado por link único, sem depender de checkout próprio.',
    citacoes: [
      {
        sources: [RDC_96, CONAR_GUIA],
      },
    ],
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
            <div className="h-full w-full rounded-2xl border border-border/60 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary shadow-sm mb-4">
                <b.icon className="h-4.5 w-4.5" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-base font-bold text-[#171717] md:text-lg">
                {b.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.texto}</p>
              <div className="mt-auto w-full flex flex-col gap-3 border-t border-border/60 pt-3">
                {b.citacoes.map((c, ci) => (
                  <div key={ci} className="flex flex-col gap-1.5">
                    {c.note && (
                      <p className="flex gap-1.5 text-[0.65rem] leading-relaxed text-muted-foreground">
                        <Info className="mt-0.5 h-3 w-3 shrink-0 text-primary" strokeWidth={2} />
                        {c.note}
                      </p>
                    )}
                    <Fonte links={c.sources} />
                  </div>
                ))}
              </div>
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
