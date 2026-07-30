import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  alt?: boolean;
  className?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, alt, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-8 px-6 py-20 md:py-28 lg:px-24 lg:py-[8.75rem] 2xl:px-6",
        alt ? "bg-surface-alt" : "bg-background",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1120px]">
        {(eyebrow || title) && (
          <Reveal className="mb-12 md:mb-16">
            {eyebrow && (
              <p className="mb-4 text-[0.7rem] font-medium tracking-[0.22em] text-accent uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="max-w-3xl text-[1.75rem] leading-[1.15] font-semibold text-primary md:text-4xl lg:text-[2.6rem]">
                {title}
              </h2>
            )}
            <div className="mt-8 h-px w-16 bg-accent" />
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
