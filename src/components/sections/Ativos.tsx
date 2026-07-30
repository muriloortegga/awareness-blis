import { BadgeCheck, Database, MapPin, BookOpen, Stethoscope, Compass } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Fonte } from "@/components/Fonte";

const FONTE_BLIS_DATA = {
  label: "Blis Data 2025, via Click Cannabis",
  href: "https://blog.clickcannabis.com/cannabis-medicinal-blis-data-2025/",
};

const HOJE = [
  {
    icon: BadgeCheck,
    text: "Única plataforma do segmento homologada simultaneamente por Apple e Google, um selo de legitimidade que nenhum concorrente reivindica de forma equivalente.",
    sources: [
      {
        label: "Forbes",
        href: "https://www.forbes.com/sites/javierhasse/2025/07/03/this-brazilian-startup-is-turning-a-population-of-211-million-into-a-cannabis-data-goldmine/",
      },
    ],
  },
  {
    icon: Database,
    text: "O maior banco de dados clínicos da América Latina em uso terapêutico da cannabis, com mais de 30 mil registros voluntários.",
    sources: [FONTE_BLIS_DATA],
  },
  {
    icon: MapPin,
    text: "Presença em mais de 2.200 cidades brasileiras, nota 8,3 no Reclame Aqui, entre 4,8 e 4,9 nas lojas de aplicativo.",
    sources: [
      { label: "appblis.com.br", href: "https://appblis.com.br/" },
      {
        label: "Reclame Aqui",
        href: "https://www.reclameaqui.com.br/empresa/blis-tecnologia-e-representacoes/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/br/app/blis-inicie-seu-tratamento/id6474689421",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.canablis.paciente",
      },
    ],
  },
];

const CONSTRUIR = [
  {
    icon: BookOpen,
    text: "Transformar a base de dados clínicos em propriedade editorial recorrente, com autoridade e pauta de imprensa própria, não conteúdo genérico de blog.",
  },
  {
    icon: Stethoscope,
    text: "Construir uma rede própria de médicos-criadores, um território de conteúdo ainda sem dono relevante no Brasil.",
  },
  {
    icon: Compass,
    text: 'Ampliar o enquadramento da categoria: de "cannabis para quem sofre muito" para bem-estar e produtividade de quem já tentou de tudo e não foi ouvido.',
  },
];

function Column({
  title,
  items,
  accent,
}: {
  title: string;
  items: ((typeof HOJE)[number] | (typeof CONSTRUIR)[number])[];
  accent?: boolean;
}) {
  return (
    <div>
      <h3 className="mb-8 flex items-center gap-3 text-xs font-bold tracking-[0.22em] uppercase">
        <span className={accent ? "text-primary" : "text-primary"}>{title}</span>
        <span className="h-px flex-1 bg-primary/20" />
      </h3>
      <ul className="space-y-6">
        {items.map((item, i) => (
          <Reveal as="li" key={item.text} delay={i * 70} className="flex gap-4 items-start">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-primary shadow-sm">
              <item.icon
                className="h-4 w-4"
                strokeWidth={1.8}
              />
            </div>
            <div className="pt-1">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                {item.text}
              </p>
              {"sources" in item && item.sources && <Fonte links={item.sources} className="mt-2" />}
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export function Ativos() {
  return (
    <Section
      id="ativos"
      alt
      eyebrow="Ativos de marca"
      title="O que já temos. O que ainda podemos construir."
    >
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <Column title="Hoje" items={HOJE} />
        <Column title="A construir" items={CONSTRUIR} accent />
      </div>
    </Section>
  );
}
