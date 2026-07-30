import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe a barra após o usuário rolar 500px (passando da seção hero)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border py-4 px-6 md:px-12 shadow-[0_-4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="mx-auto flex max-w-[1120px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Left text */}
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <p className="text-xs font-extrabold tracking-wider text-[#171717] uppercase">
            Jornada de acesso à Cannabis Medicinal
          </p>
        </div>

        {/* Right Action Button */}
        <a
          href="#roadmap"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
        >
          Iniciar Jornada blis
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
