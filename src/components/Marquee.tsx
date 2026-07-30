import {
  ShieldCheck,
  Smartphone,
  Database,
  MapPin,
  HeartHandshake,
  Stethoscope,
  Scale,
} from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, text: "Homologado Apple & Google" },
  { icon: Database, text: "+30 Mil Registros Clínicos" },
  { icon: MapPin, text: "Presente em +2.200 Cidades" },
  { icon: Stethoscope, text: "Médicos-Criadores Parceiros" },
  { icon: Scale, text: "Segurança e RDC 660 ANVISA" },
  { icon: HeartHandshake, text: "Acompanhamento Humanizado" },
  { icon: Smartphone, text: "App blis: Saúde na Palma da Mão" },
];

export function Marquee() {
  // Double the list to create a seamless infinite loop
  const listItems = [...ITEMS, ...ITEMS];

  return (
    <div className="relative w-full overflow-hidden border-y border-border bg-secondary/30 py-3.5">
      <div className="flex w-max animate-marquee">
        {listItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-6 px-8">
              {/* Divider (only show between items, not on first item) */}
              {idx > 0 && <span className="h-4 w-px bg-border shrink-0" />}
              
              <div className="flex items-center gap-2.5">
                <Icon className="h-4.5 w-4.5 text-primary shrink-0 animate-pulse" strokeWidth={1.5} />
                <span className="text-[0.65rem] font-extrabold tracking-[0.15em] text-[#171717] uppercase whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
