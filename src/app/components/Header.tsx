import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Inicio", target: "inicio" },
  { label: "Sobre mí", target: "sobre-mi" },
  { label: "Proyectos", route: "/proyectos" },
  { label: "Artículos", target: "articulos" },
];

function isProjectsPage() {
  return window.location.hash.startsWith("#/proyectos") || window.location.pathname.startsWith("/proyectos");
}

function goToSection(target: string) {
  if (isProjectsPage()) {
    window.location.hash = "#/";
    setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }), 120);
    return;
  }

  if (target === "inicio") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
}

function goToProjects() {
  window.location.hash = "#/proyectos";
  setTimeout(() => window.scrollTo(0, 0), 100);
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (item: (typeof navItems)[number]) => {
    if (item.route === "/proyectos") {
      goToProjects();
    } else if (item.target) {
      goToSection(item.target);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--color-border-soft)] bg-[var(--color-bg-soft)]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-6">
        <button
          onClick={() => {
            window.location.hash = "#/";
            setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
          }}
          className="focus-ring flex items-center gap-3 rounded-[var(--radius-button)] text-left"
          aria-label="Ir al inicio"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-brand-primary)] text-sm font-bold text-white">
            FA
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-bold text-[var(--color-text-primary)]">Florencia Acuña</span>
            <span className="block text-sm text-[var(--color-text-muted)]">florenciaux</span>
          </span>
        </button>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="focus-ring rounded-[var(--radius-button)] px-1 text-sm font-medium text-[var(--color-text-secondary)] transition hover:text-[var(--color-brand-primary)]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            onClick={() => goToSection("contacto")}
            variant="brand"
          >
            Contacto
          </Button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[var(--color-border-soft)] text-[var(--color-text-primary)] md:hidden"
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-[var(--color-border-soft)] bg-[var(--color-bg-soft)] px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="focus-ring rounded-[var(--radius-card)] px-3 py-3 text-left text-lg font-medium text-[var(--color-text-primary)] hover:bg-white"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => {
                goToSection("contacto");
                setIsMobileMenuOpen(false);
              }}
              variant="brand"
              className="mt-3"
            >
              Contacto
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
