import { SECTIONS } from "@/lib/sections";

export function Footer() {
  const navItems = SECTIONS.filter((s) => s.id !== "abertura" && s.id !== "fechamento");

  return (
    <footer className="bg-[#171717] text-white border-t border-white/10 px-6 py-16 lg:px-24 lg:py-20 2xl:px-6">
      <div className="mx-auto max-w-[1120px]">
        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Logo & Compliance Column */}
          <div className="space-y-6 lg:col-span-6">
            <div className="flex items-center gap-2 text-white">
              <img src="/brand/logo-white.png" alt="blis" className="h-7 w-auto object-contain" />
            </div>
            
            {/* Regulatory compliance callout */}
            <div className="rounded-lg bg-white/5 border border-white/10 p-5 max-w-lg">
              <p className="text-[0.65rem] font-bold tracking-[0.15em] text-primary uppercase mb-2">
                Aviso Regulatório e de Compliance
              </p>
              <p className="text-[0.7rem] leading-relaxed text-white/60 uppercase">
                IMAGEM ILUSTRATIVA. A BLIS NÃO COMERCIALIZA MEDICAMENTOS OU PRODUTOS. A BLIS É UMA PLATAFORMA DE 
                TECNOLOGIA E FACILITAÇÃO DE ACESSO À SAÚDE, INTEGRANDO PACIENTES, MÉDICOS PRESCRITORES E IMPORTADORES 
                DE PRODUTOS DE CANNABIS MEDICINAL AUTORIZADOS EM CONFORMIDADE COM A RDC 660 DA ANVISA. O USO DE CANNABIS 
                MEDICINAL É DE DECISÃO EXCLUSIVA E CRITÉRIO CLÍNICO DO PROFISSIONAL MÉDICO RESPONSÁVEL.
              </p>
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-3 lg:col-start-8">
            <h4 className="text-[0.65rem] font-bold tracking-[0.25em] text-white/40 uppercase mb-4">
              Navegação
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-xs font-semibold text-white/70 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h4 className="text-[0.65rem] font-bold tracking-[0.25em] text-white/40 uppercase mb-4">
              Plataforma
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="https://appblis.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  appblis.com
                </a>
              </li>
              <li>
                <span className="text-white/40 block">Dúvidas ou contato:</span>
                <a href="mailto:suporte@appblis.com" className="hover:text-primary font-semibold transition-colors block">
                  suporte@appblis.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Bottom copyright details */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[0.7rem] text-white/40 font-semibold tracking-wide">
          <p>© {new Date().getFullYear()} blis. Todos os direitos reservados.</p>
          <p className="uppercase">BLIS TECNOLOGIA LTDA · CNPJ sob consulta regulatória</p>
        </div>
      </div>
    </footer>
  );
}
