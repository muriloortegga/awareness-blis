import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type FonteLink = { label: string; href: string };

export function Fonte({
  links,
  prefix = "Fonte:",
  className,
}: {
  links: FonteLink[];
  prefix?: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.65rem] font-semibold tracking-wide text-muted-foreground",
        className,
      )}
    >
      <span>{prefix}</span>
      {links.map((link, i) => (
        <span key={link.href} className="inline-flex items-center gap-1.5">
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-primary hover:underline underline-offset-2"
          >
            {link.label}
            <ArrowUpRight className="h-2.5 w-2.5" />
          </a>
          {i < links.length - 1 && <span className="text-border">·</span>}
        </span>
      ))}
    </p>
  );
}
