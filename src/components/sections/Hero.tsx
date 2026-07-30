import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section
      id="abertura"
      className="relative flex min-h-screen scroll-mt-8 items-center overflow-hidden px-6 pt-28 pb-20 lg:px-24 lg:pt-36 lg:pb-24 2xl:px-6 bg-white"
    >
      {/* Background organic blob elements */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-secondary/50 blur-3xl animate-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/5 blur-3xl"
      />
      
      <div className="relative mx-auto w-full max-w-[1120px] grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
              Estratégia de Mídias Sociais
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#171717] uppercase md:text-5xl lg:text-6xl leading-[1.05]">
              O Brasil fala muito sobre cannabis. Quase nunca sobre o uso que realmente importa aqui.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <div className="h-px w-16 bg-primary" />
            <p className="max-w-xl text-base leading-relaxed text-[#6B7280] md:text-lg">
              Uma estratégia de topo de funil para transformar a marca <span className="font-bold text-[#171717]">blis</span> na referência pública em uso medicinal regulado, com método, dado e previsibilidade, não com achismo de rede social.
            </p>
          </Reveal>
        </div>

        {/* Right Content: Premium Still / Mockup & Overlaid Compliance Callout */}
        <Reveal delay={200} className="relative flex justify-center lg:justify-end">
          <div className="relative h-[340px] w-full max-w-[340px] md:h-[400px] md:w-[400px] rounded-2xl bg-[#FAFAF9] border border-border overflow-hidden flex items-center justify-center p-8 shadow-sm">
            {/* Minimalist health-tech Editorial Still simulation */}
            <div className="absolute inset-0 bg-radial-gradient from-emerald-50/30 to-transparent pointer-events-none" />
            
            {/* Sage Green Cubes / Pedestals */}
            <div className="absolute bottom-6 left-12 w-28 h-20 bg-[#E8F3EA] rounded-lg shadow-sm border border-emerald-900/5 rotate-6 transform translate-y-2" />
            <div className="absolute bottom-10 right-16 w-32 h-24 bg-[#D1E7D6] rounded-lg shadow-sm border border-emerald-900/5 -rotate-3 transform translate-y-3" />
            
            {/* Phone App Mockup */}
            <div className="absolute bottom-16 right-20 w-[140px] h-[250px] bg-[#171717] rounded-[24px] border-[4px] border-white shadow-xl flex flex-col overflow-hidden rotate-[4deg]">
              {/* Phone screen content */}
              <div className="w-full h-3 bg-white/10 shrink-0" />
              <div className="flex-1 bg-white p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-border pb-1.5">
                  <span className="text-[7px] font-extrabold text-[#171717] tracking-wider uppercase">blis</span>
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div className="space-y-1.5 my-2">
                  <div className="h-2 w-12 bg-primary/20 rounded" />
                  <div className="h-3 w-20 bg-[#171717] rounded" />
                  <div className="h-1.5 w-16 bg-muted-foreground/30 rounded" />
                </div>
                <div className="rounded bg-secondary p-1.5 space-y-1">
                  <div className="h-1 w-10 bg-primary/30 rounded" />
                  <div className="h-1 w-8 bg-primary/30 rounded" />
                </div>
                <div className="h-5 w-full bg-primary rounded-full flex items-center justify-center">
                  <span className="text-[6px] font-bold text-white uppercase">Acessar</span>
                </div>
              </div>
            </div>

            {/* Dropper Bottle representation */}
            <div className="absolute bottom-12 left-16 w-8 h-24 bg-white/80 rounded-md shadow-md border border-border flex flex-col justify-end p-1 -rotate-6">
              <div className="h-4 w-6 bg-[#171717]/90 rounded-sm self-center -translate-y-8" />
              <div className="h-1 w-4 bg-primary rounded-sm self-center -translate-y-6" />
              <div className="h-8 w-6 bg-emerald-600/40 rounded-sm self-center" />
            </div>

            {/* Compliance Callout Card */}
            <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-border p-3.5 rounded-lg shadow-md max-w-[280px]">
              <p className="text-[0.55rem] font-bold tracking-[0.15em] text-[#6B7280] uppercase leading-relaxed">
                IMAGEM ILUSTRATIVA. A BLIS NÃO COMERCIALIZA PRODUTOS OU MEDICAMENTOS. PLATAFORMA DE SUPORTE E FACILITAÇÃO DE ACESSO.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal
        delay={280}
        className="absolute inset-x-0 bottom-10 flex justify-center text-muted-foreground"
      >
        <span className="flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase">
          <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} />
          Role para explorar
        </span>
      </Reveal>
    </section>
  );
}
