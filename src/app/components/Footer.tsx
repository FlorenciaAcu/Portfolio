import { cvUrl } from "../data/home";

const footerLinks = [
  { label: "Inicio", target: "inicio" },
  { label: "Sobre mí", target: "sobre-mi" },
  { label: "Proyectos", route: "/proyectos" },
  { label: "Artículos", target: "articulos" },
  { label: "Contacto", target: "contacto" },
];

function goTo(target: string) {
  const isProjectsPage = window.location.hash.startsWith("#/proyectos") || window.location.pathname.startsWith("/proyectos");

  if (isProjectsPage) {
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

export function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-brand-soft)] text-sm font-bold text-[var(--color-brand-primary)]">
                FA
              </span>
              <div>
                <p className="font-bold">Florencia Acuña</p>
                <p className="text-sm text-[var(--color-dark-muted)]">Product Designer</p>
              </div>
            </div>
            <p className="max-w-sm leading-7 text-[var(--color-dark-muted)]">
              Product Designer enfocada en productos claros, usables y alineados a equipos.
            </p>
          </div>

          <nav aria-label="Navegación del footer">
            <h3 className="mb-4 font-bold">Navegación</h3>
            <div className="grid gap-2 text-[var(--color-dark-muted)]">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    if (link.route === "/proyectos") {
                      window.location.hash = "#/proyectos";
                      setTimeout(() => window.scrollTo(0, 0), 100);
                    } else if (link.target) {
                      goTo(link.target);
                    }
                  }}
                  className="focus-ring w-fit rounded-sm text-left transition hover:text-[var(--color-brand-soft)]"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </nav>

          <div>
            <h3 className="mb-4 font-bold">Contacto</h3>
            <div className="grid gap-2 text-[var(--color-dark-muted)]">
              <a className="focus-ring w-fit rounded-sm transition hover:text-[var(--color-brand-soft)]" href="mailto:contact@florenciaux.com">
                contact@florenciaux.com
              </a>
              <a
                className="focus-ring w-fit rounded-sm transition hover:text-[var(--color-brand-soft)]"
                href="https://www.linkedin.com/in/florencia-acuna-ux/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="focus-ring w-fit rounded-sm transition hover:text-[var(--color-brand-soft)]"
                href="https://medium.com/@florencia.acuna"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </a>
              <a
                className="focus-ring w-fit rounded-sm transition hover:text-[var(--color-brand-soft)]"
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/55">
          © 2026 Florencia Acuña. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
