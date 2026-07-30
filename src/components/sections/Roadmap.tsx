import { Layers, Zap, TrendingUp, Plus } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const FASES = [
  {
    id: "fase1",
    icon: Layers,
    fase: "Fase 1 · Dias 1–30",
    titulo: "Fundação",
    contexto: "ESTRUTURA & CONFIGURAÇÃO INICIAL",
    texto:
      "Auditoria de canais, tom de voz e identidade por plataforma, calibragem dos pilares de conteúdo, estrutura de mensuração (dashboard, UTMs, benchmarks iniciais).",
  },
  {
    id: "fase2",
    icon: Zap,
    fase: "Fase 2 · Dias 31–60",
    titulo: "Motor de conteúdo",
    contexto: "LANÇAMENTO & LEITURA REAL",
    texto:
      "Lançamento do funil por formato, piloto com médicos-criadores, recrutamento dos primeiros pacientes-embaixadores, primeira leitura de dados reais.",
  },
  {
    id: "fase3",
    icon: TrendingUp,
    fase: "Fase 3 · Dias 61–90",
    titulo: "Escala com dado",
    contexto: "OTIMIZAÇÃO & AMPLIAÇÃO",
    texto:
      "Expansão de criadores por performance real, ajuste de mix por CPE, entrada institucional no LinkedIn, primeira peça de autoridade no YouTube.",
    destaque: true,
  },
];

export function Roadmap() {
  return (
    <Section id="roadmap" eyebrow="Primeiros 90 dias" title="Por onde começa.">
      <div className="grid gap-6 md:grid-cols-3">
        {FASES.map((f, i) => {
          const Icon = f.icon;
          const isDestaque = f.destaque;
          return (
            <Reveal key={f.fase} delay={i * 90} className="h-full">
              <div
                className={cn(
                  "h-full rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md",
                  isDestaque
                    ? "bg-primary text-white border border-transparent"
                    : "bg-white text-muted-foreground border border-border/60"
                )}
              >
                <div>
                  {/* Pill label */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={cn(
                        "inline-block px-3 py-1 rounded-full text-[0.6rem] font-extrabold uppercase tracking-wider",
                        isDestaque
                          ? "bg-white text-primary"
                          : "bg-secondary text-primary"
                      )}
                    >
                      {f.fase}
                    </span>
                    
                    {/* Outline Icon */}
                    <Icon className={cn("h-6 w-6", isDestaque ? "text-white" : "text-primary")} strokeWidth={1.8} />
                  </div>

                  {/* Context layer */}
                  <p
                    className={cn(
                      "text-[0.6rem] font-bold tracking-[0.15em] uppercase mb-1",
                      isDestaque ? "text-white/70" : "text-muted-foreground/80"
                    )}
                  >
                    {f.contexto}
                  </p>

                  {/* Title layer */}
                  <h3
                    className={cn(
                      "font-display text-xl font-bold mb-4",
                      isDestaque ? "text-white" : "text-[#171717]"
                    )}
                  >
                    {f.titulo}
                  </h3>

                  {/* Text description */}
                  <p className={cn("text-xs leading-relaxed", isDestaque ? "text-white/90" : "text-muted-foreground")}>
                    {f.texto}
                  </p>
                </div>

                {/* Bottom link or button */}
                <div className="mt-8 pt-4 border-t border-current/10">
                  {isDestaque ? (
                    <a
                      href="#fechamento"
                      className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-2.5 text-xs font-bold text-primary transition-all hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Falar Conosco
                    </a>
                  ) : (
                    <a
                      href={`#roadmap`}
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:opacity-85 transition-opacity"
                    >
                      <Plus className="h-3 w-3" strokeWidth={2.5} />
                      Mais informações
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
