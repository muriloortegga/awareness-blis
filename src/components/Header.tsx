import { useState, useEffect } from "react";
import { SECTIONS } from "@/lib/sections";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Header() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Active section spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.15, 0.3], rootMargin: "-25% 0px -45% 0px" }
    );

    for (const s of SECTIONS) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = SECTIONS.filter((s) => s.id !== "abertura" && s.id !== "fechamento");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-24 2xl:px-6 border-b border-transparent",
        isScrolled
          ? "bg-background/90 backdrop-blur-md py-3 shadow-sm border-border/40"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-[1120px] items-center justify-between">
        {/* Left Side: Logo & Main Navigation */}
        <div className="flex items-center gap-12">
          <a
            href="#abertura"
            className="text-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
            aria-label="Voltar para o topo"
          >
            <Logo className="h-6 w-auto text-[#171717]" />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={cn(
                        "text-xs font-semibold tracking-wide transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm px-1 py-0.5",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Right Side: Lang Selector, CTA, and Mobile Menu Trigger */}
        <div className="flex items-center gap-6">
          {/* Language Selector */}
          <div className="hidden sm:flex items-center gap-2 text-[0.7rem] font-bold tracking-wider text-muted-foreground">
            <button className="text-primary hover:text-primary font-extrabold focus:outline-none">PT</button>
            <span className="text-border">|</span>
            <button className="hover:text-primary transition-colors focus:outline-none">EN</button>
          </div>

          {/* Primary CTA (Pill Button) */}
          <a
            href="#roadmap"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Entrar em Contato
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground hover:bg-muted lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-background/95 backdrop-blur-md lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col p-6 h-full justify-between">
            <ul className="flex flex-col gap-5">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block py-2 text-base font-semibold tracking-wide transition-colors border-b border-border/20",
                        isActive ? "text-primary pl-2 border-l-2 border-l-primary" : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-4 border-t border-border/60 pt-6 pb-20">
              <div className="flex items-center gap-3 justify-center text-xs font-bold tracking-wider text-muted-foreground">
                <button className="text-primary font-extrabold">PT</button>
                <span className="text-border">|</span>
                <button className="hover:text-primary">EN</button>
              </div>
              <a
                href="#roadmap"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground transition-all active:scale-[0.98]"
              >
                Entrar em Contato
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
