import { Reveal } from "@/components/Reveal";

export function Fechamento() {
  return (
    <section
      id="fechamento"
      className="flex min-h-[80vh] scroll-mt-8 flex-col justify-center bg-primary px-6 py-28 lg:px-24 2xl:px-6 text-primary-foreground"
    >
      <div className="mx-auto w-full max-w-[1120px]">
        <Reveal>
          <div className="mx-auto h-px w-16 bg-accent" />
          <h2 className="mx-auto mt-12 max-w-4xl text-center font-display text-[1.75rem] leading-[1.2] font-semibold md:text-4xl lg:text-[3rem]">
            O mercado já decidiu crescer. A pergunta é quem vai ser a referência quando ele crescer.
          </h2>
        </Reveal>
      </div>
      <div className="mx-auto mt-24 w-full max-w-[1120px]">
        <p className="text-center text-[0.7rem] tracking-[0.2em] uppercase opacity-60">
          Cannabis Medicinal · 2026
        </p>
      </div>
    </section>
  );
}
