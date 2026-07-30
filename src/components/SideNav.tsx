import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/sections";
import { cn } from "@/lib/utils";

export function SideNav() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.5], rootMargin: "-20% 0px -40% 0px" },
    );
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Seções da apresentação"
      className="fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col gap-4">
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex cursor-pointer items-center gap-3 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <span
                  className={cn(
                    "h-2 w-2 shrink-0 rounded-full border transition-all duration-200",
                    isActive
                      ? "scale-125 border-accent bg-accent"
                      : "border-muted-foreground/50 bg-transparent group-hover:border-primary",
                  )}
                />
                <span
                  className={cn(
                    "text-[0.7rem] tracking-wide whitespace-nowrap transition-opacity duration-200",
                    isActive
                      ? "text-primary opacity-100"
                      : "text-muted-foreground opacity-0 group-hover:opacity-100",
                  )}
                >
                  {s.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
