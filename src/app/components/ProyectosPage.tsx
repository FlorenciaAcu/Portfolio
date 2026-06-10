import { ArrowLeft } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProjectGrid } from "./ProjectGrid";
import { Button } from "./ui/button";
import { projectGroups, projects } from "../data/projects";
import { SectionHeader } from "./design-system";

export function ProyectosPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-soft)]">
      <Header />

      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <SectionHeader
            eyebrow="Proyectos"
            title="Proyectos"
            description="Trabajos seleccionados en producto digital, MVPs, SaaS, plataformas web y experiencias para distintos clientes, equipos e industrias."
            className="max-w-5xl"
          />

          <div className="space-y-20">
            {projectGroups.map((group, index) => {
              const groupProjects = group.ids
                .map((id) => projects.find((project) => project.id === id))
                .filter(Boolean);

              if (!groupProjects.length) return null;

              return (
                <section key={group.label}>
                  <div className="mb-8 grid gap-4 border-t border-[var(--color-border-soft)] pt-6 md:grid-cols-[120px_1fr]">
                    <p className="text-sm font-semibold text-[var(--color-brand-primary)]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-primary)]">
                        {group.label}
                      </p>
                      <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">
                        {group.label === "SaaS y plataformas"
                          ? "Productos que necesitan claridad operativa"
                          : group.label === "MVPs y productos digitales"
                            ? "Primeras versiones y experiencias para validar"
                            : group.label === "Webs profesionales"
                              ? "Comunicación, confianza y conversión"
                              : "Procesos internos y flujos administrativos"}
                      </h2>
                    </div>
                  </div>
                  <ProjectGrid items={groupProjects as typeof projects} />
                </section>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Button
              onClick={() => {
                window.location.hash = "#/";
                setTimeout(() => window.scrollTo(0, 0), 100);
              }}
              variant="secondary"
              size="lg"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
