import { useState } from "react";
import { Gauge } from "lucide-react";
import { cn } from "@/lib/utils";

type PorteCriador = "nano" | "micro" | "medio";

const CPE_REFERENCIA: Record<PorteCriador, { label: string; faixa: string; sugerido: number }> = {
  nano: { label: "Nano", faixa: "R$ 0,80 – R$ 1,50", sugerido: 1.15 },
  micro: { label: "Micro", faixa: "R$ 1,50 – R$ 3,00", sugerido: 2.25 },
  medio: { label: "Médio", faixa: "R$ 3,00 – R$ 6,00", sugerido: 4.5 },
};

const PORTES = Object.keys(CPE_REFERENCIA) as PorteCriador[];

// Proporção de referência de mercado entre alcance e engajamento projetado.
// Ilustrativa e ajustável, não é um dado auditado da Blis.
const ALCANCE_POR_ENGAJAMENTO = 8;

function formatInt(value: number) {
  if (!Number.isFinite(value)) return "0";
  return Math.round(value).toLocaleString("pt-BR");
}

export function CpeSimulador() {
  const [porte, setPorte] = useState<PorteCriador>("micro");
  const [orcamento, setOrcamento] = useState(10000);
  const [cpe, setCpe] = useState(CPE_REFERENCIA.micro.sugerido);

  const handlePorteChange = (novoPorte: PorteCriador) => {
    setPorte(novoPorte);
    setCpe(CPE_REFERENCIA[novoPorte].sugerido);
  };

  const engajamentoProjetado = cpe > 0 ? orcamento / cpe : 0;
  const alcanceEstimado = engajamentoProjetado * ALCANCE_POR_ENGAJAMENTO;

  return (
    <div className="mt-8 rounded-2xl border border-border/60 bg-white p-6 shadow-sm md:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary shadow-sm">
          <Gauge className="h-4.5 w-4.5" strokeWidth={1.8} />
        </div>
        <h3 className="font-display text-base font-bold text-[#171717] md:text-lg">
          Simulador de previsibilidade de CPE
        </h3>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Valores de referência de mercado para fins de demonstração da metodologia, não são dados
        reais auditados da Blis.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {PORTES.map((key) => {
          const isActive = porte === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => handlePorteChange(key)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200",
                isActive
                  ? "bg-primary text-white shadow-sm"
                  : "bg-secondary/60 text-muted-foreground hover:bg-secondary",
              )}
            >
              {CPE_REFERENCIA[key].label}
              <span className="ml-1.5 font-medium normal-case tracking-normal opacity-80">
                ({CPE_REFERENCIA[key].faixa})
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">
            Orçamento mensal (R$)
          </span>
          <input
            type="number"
            min={0}
            step={100}
            value={orcamento}
            onChange={(e) => setOrcamento(Math.max(0, Number(e.target.value) || 0))}
            className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-semibold text-[#171717] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">
            CPE médio esperado (R$)
          </span>
          <input
            type="number"
            min={0}
            step={0.05}
            value={cpe}
            onChange={(e) => setCpe(Math.max(0, Number(e.target.value) || 0))}
            className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-semibold text-[#171717] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-secondary/40 p-5">
          <p className="text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">
            Engajamento projetado
          </p>
          <p className="mt-1 text-2xl font-extrabold tabular-nums text-primary">
            {formatInt(engajamentoProjetado)}
          </p>
        </div>
        <div className="rounded-xl bg-secondary/40 p-5">
          <p className="text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">
            Alcance estimado
          </p>
          <p className="mt-1 text-2xl font-extrabold tabular-nums text-primary">
            {formatInt(alcanceEstimado)}
          </p>
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground md:text-sm">
        Segmentar o CPE histórico por pilar de conteúdo e por camada de criador cria uma curva de
        referência que permite prever o custo de uma campanha futura com margem de confiança, em vez
        de negociar cada ação isoladamente.
      </p>
    </div>
  );
}
