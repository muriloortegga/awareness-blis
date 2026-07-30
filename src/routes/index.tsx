import { createFileRoute } from "@tanstack/react-router";

import { ReadingProgress } from "@/components/ReadingProgress";
import { SideNav } from "@/components/SideNav";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { StickyCTA } from "@/components/StickyCTA";
import { Hero } from "@/components/sections/Hero";
import { Diagnostico } from "@/components/sections/Diagnostico";
import { Publico } from "@/components/sections/Publico";
import { Ativos } from "@/components/sections/Ativos";
import { Canais } from "@/components/sections/Canais";
import { FunilConteudo } from "@/components/sections/FunilConteudo";
import { Metricas } from "@/components/sections/Metricas";
import { Influenciadores } from "@/components/sections/Influenciadores";
import { Roadmap } from "@/components/sections/Roadmap";
import { Fechamento } from "@/components/sections/Fechamento";

const TITLE = "Estratégia de Mídias Sociais — Cannabis Medicinal Regulada";
const DESCRIPTION =
  "Estratégia de topo de funil para tornar a marca a referência pública em uso medicinal regulado de cannabis no Brasil: diagnóstico, canais, funil de conteúdo e medição.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground">
        <ReadingProgress />
        <SideNav />
        <Hero />
        <Marquee />
        <Diagnostico />
        <Publico />
        <Ativos />
        <Canais />
        <FunilConteudo />
        <Metricas />
        <Influenciadores />
        <Roadmap />
        <Fechamento />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
