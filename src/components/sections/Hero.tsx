import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section
      id="abertura"
      className="relative flex min-h-screen scroll-mt-8 items-center overflow-hidden px-6 py-24 lg:px-24 2xl:px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-secondary/70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/5 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-[1120px]">
        <Reveal>
          <p className="text-[0.7rem] font-medium tracking-[0.28em] text-accent uppercase">
            Estratégia de mídias sociais
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-8 max-w-4xl text-[2.1rem] leading-[1.1] font-semibold text-primary md:text-5xl lg:text-[3.6rem]">
            O Brasil fala muito sobre cannabis. Quase nunca sobre o uso que realmente importa aqui.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-8 h-px w-16 bg-accent" />
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Uma estratégia de topo de funil para transformar a marca na referência pública em uso
            medicinal regulado — com método, dado e previsibilidade, não com achismo de rede social.
          </p>
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
