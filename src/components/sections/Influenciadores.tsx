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
      <div className="grid gap-6 md:grid-cols-2">
        {BLOCOS.map((b, i) => (
          <Reveal key={b.titulo} delay={i * 70}>
            <div className="h-full border-t border-border pt-6">
              <b.icon className="h-5 w-5 text-accent" strokeWidth={1.4} />
              <h3 className="mt-4 font-display text-base font-semibold text-primary md:text-lg">
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
