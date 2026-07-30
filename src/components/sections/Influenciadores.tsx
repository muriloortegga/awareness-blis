import { Stethoscope, Users, MessageSquareQuote, ShieldCheck } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const BLOCOS = [
  {
    icon: Stethoscope,
    titulo: "Médicos-criadores",
    texto:
      "A rota mais segura do ponto de vista regulatório — falam de ciência e fisiologia, não prometem resultado individual. Também é o território de conteúdo mais vazio do mercado brasileiro hoje.",
  },
  {
    icon: Users,
    titulo: "Nano e microinfluenciadores de bem-estar e produtividade",
    texto:
      "Não perfis de cultivo ou ativismo recreativo — autenticidade e custo-benefício, tendência confirmada de mercado para 2026.",
  },
  {
    icon: MessageSquareQuote,
    titulo: "UGC de pacientes satisfeitos",
    texto:
      "Conteúdo sobre a jornada — acolhimento, clareza, cuidado — nunca sobre eficácia clínica, que é a linha mais sensível da regulação de publicidade de medicamentos de prescrição obrigatória.",
  },
  {
    icon: ShieldCheck,
    titulo: "Guardrails de toda peça",
    texto:
      'Identificação clara de publicidade, sem termos como "experimente"/"use"/"tome", sem promessa de resultado. Cada criador rastreado por link único — sem depender de checkout próprio.',
  },
];

export function Influenciadores() {
  return (
    <Section
      id="influenciadores"
      alt
      eyebrow="Influenciadores e UGC"
      title="Quem fala pela marca — e como isso fica dentro da lei."
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
    </Section>
  );
}
