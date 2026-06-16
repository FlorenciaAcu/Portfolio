import { cvUrl } from "../data/home";
import { Heart } from "lucide-react";

const footerLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/florencia-acuna-ux/",
  },
  {
    label: "Medium",
    href: "https://medium.com/@florencia.acuna",
  },
  {
    label: "CV",
    href: cvUrl,
  },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-bold">Florencia Acuña</p>
            <p className="mt-2 max-w-md leading-7 text-[var(--color-dark-muted)]">
              Product Designer. Diseño productos digitales claros para equipos que necesitan ordenar,
              decidir y avanzar.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <a
              className="focus-ring w-fit rounded-sm font-semibold text-white transition hover:text-[var(--color-brand-soft)]"
              href="mailto:contact@florenciaux.com"
            >
              contact@florenciaux.com
            </a>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--color-dark-muted)]">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  className="focus-ring rounded-sm transition hover:text-[var(--color-brand-soft)]"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Florencia Acuña.</p>
          <p className="flex items-center gap-1.5">
            Hecho con
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" aria-hidden="true" />
            y mucho tecito.
          </p>
        </div>
      </div>
    </footer>
  );
}
