import { Instagram, Music2, Youtube, Linkedin } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CANAIS = [
  {
    id: "instagram",
    nome: "Instagram",
    icon: Instagram,
    papel: "Hub central da estratégia.",
    fazer: "Reels de descoberta, carrossel educativo, Stories de bastidor e comunidade.",
    evitar:
      "Preço, cupom, qualquer chamada direta de compra, é o gatilho nº1 de remoção de conteúdo, mesmo para marcas 100% legais.",
  },
  {
    id: "tiktok",
    nome: "TikTok",
    icon: Music2,
    papel: "Cultura e bem-estar, não o produto.",
    fazer: "Conteúdo de cultura, rotina e saúde mental, sem exposição visual de cannabis.",
    evitar:
      "Qualquer imagem de planta, produto ou consumo, é a rede mais restritiva; contas já foram banidas do dia para a noite.",
  },
  {
    id: "youtube",
    nome: "YouTube",
    icon: Youtube,
    papel: "Autoridade de formato longo.",
    fazer: "Vídeos explicativos e documentais, com relevância dupla: audiência de vídeo educativo e fonte citada por buscadores de IA.",
    evitar: "Link direto de compra e monetização do vídeo.",
  },
  {
    id: "linkedin",
    nome: "LinkedIn",
    icon: Linkedin,
    papel: "Institucional e regulatório.",
    fazer: "Dado próprio, pauta de mercado, thought leadership do time médico e de liderança.",
    evitar: "Tom de consumo, é canal de autoridade, não de conversão de paciente.",
  },
];

function Linha({ rotulo, texto, accent }: { rotulo: string; texto: string; accent?: boolean }) {
  return (
    <div className="border-t border-border pt-4">
      <p
        className={`mb-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase ${accent ? "text-primary/90" : "text-muted-foreground"}`}
      >
        {rotulo}
      </p>
      <p className="text-sm leading-relaxed text-muted-foreground">{texto}</p>
    </div>
  );
}

export function Canais() {
  return (
    <Section id="canais" eyebrow="Canais" title="Mesma mensagem, quatro lógicas diferentes.">
      <Reveal>
        <Tabs defaultValue="instagram" className="w-full gap-8">
          <TabsList className="h-auto w-full flex-wrap justify-start gap-1 bg-secondary/40 p-1.5 rounded-full border border-border/50 max-w-xl">
            {CANAIS.map((c) => (
              <TabsTrigger
                key={c.id}
                value={c.id}
                className="cursor-pointer gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-white text-muted-foreground"
              >
                <c.icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                {c.nome}
              </TabsTrigger>
            ))}
          </TabsList>

          {CANAIS.map((c) => (
            <TabsContent key={c.id} value={c.id} className="mt-6">
              <div className="rounded-2xl border border-border bg-white p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-display text-xl font-bold text-[#171717] md:text-2xl">
                  {c.papel}
                </h3>
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <Linha rotulo="Fazer" texto={c.fazer} />
                  <Linha rotulo="Evitar" texto={c.evitar} accent />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Reveal>

      <Reveal delay={80}>
        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          X e Reddit entram como canais complementares de nicho, participação genuína, não campanha.
        </p>
      </Reveal>
    </Section>
  );
}
