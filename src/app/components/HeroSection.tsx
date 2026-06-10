import { ArrowRight, FileText } from "lucide-react";
import { cvUrl, heroIndicators, heroProcess } from "../data/home";
import { Pill } from "./design-system";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section id="inicio" className="section-reveal bg-[var(--color-bg-soft)] pt-32 lg:pt-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid min-h-[calc(100vh-5rem)] gap-12 pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-4xl">
            <Pill variant="success" dot className="mb-8 px-4 py-2 text-sm">
              Disponible para proyectos
            </Pill>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-primary)]">
              Florencia Acuña - Product Designer
            </p>
            <h1 className="text-balance max-w-4xl text-4xl font-bold leading-[1.08] text-[var(--color-text-primary)] md:text-6xl lg:text-7xl">
              Soy Florencia Acuña, Product Designer.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-8 text-[var(--color-text-secondary)] md:text-2xl md:leading-9">
              Ayudo a convertir ideas, necesidades y procesos en productos digitales simples de usar,
              con foco en usuarios, negocio y equipos.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
              Trabajo en la intersección entre experiencia, interfaz y producto para ordenar problemas,
              diseñar flujos claros y acompañar soluciones hasta desarrollo.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={() => {
                  window.location.hash = "#/proyectos";
                  setTimeout(() => window.scrollTo(0, 0), 100);
                }}
                variant="primary"
                size="lg"
              >
                Ver proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    cvUrl,
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                variant="secondary"
                size="lg"
              >
                <FileText className="mr-2 h-4 w-4" />
                Ver CV
              </Button>
            </div>

            <div className="mt-14 grid gap-4 border-y border-[var(--color-border-soft)] py-6 sm:grid-cols-3">
              {heroIndicators.map((indicator) => (
                <div key={indicator.label}>
                  <p className="text-3xl font-bold text-[var(--color-text-primary)]">{indicator.value}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{indicator.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:justify-self-end">
            <div className="relative aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border-soft)] media-fallback p-6 shadow-[0_24px_80px_rgba(28,24,20,0.10)]">
              <div className="relative flex h-full flex-col justify-between rounded-md border border-white/70 bg-white/55 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--color-brand-primary)] text-lg font-bold text-white">
                    FA
                  </span>
                  <Pill variant="brand">
                    Product Design
                  </Pill>
                </div>

                <div className="space-y-4">
                  {heroProcess.map((label, index) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-brand-primary)] text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <div className="h-3 flex-1 rounded-full bg-[var(--color-border-soft)]" />
                      <span className="w-24 text-sm font-bold text-[var(--color-brand-primary)]">{label}</span>
                    </div>
                  ))}
                </div>

                <p className="max-w-[260px] text-2xl font-bold leading-tight text-[var(--color-text-primary)]">
                  Decidir qué vale la pena llevar a pantalla.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 left-5 max-w-[280px] rounded-[var(--radius-card)] bg-[var(--color-dark)] p-5 text-white shadow-[var(--shadow-card-hover)]">
              <p className="text-lg font-semibold leading-7">
                Claridad, usabilidad y valor para productos que necesitan avanzar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
