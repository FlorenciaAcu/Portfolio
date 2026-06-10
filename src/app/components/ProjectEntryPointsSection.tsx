import { ArrowRight } from "lucide-react";
import { featuredProjects } from "../data/projects";
import { Section, SurfaceCard } from "./design-system";

export function ProjectEntryPointsSection() {
  return (
    <Section tone="white" className="py-12 lg:py-16">
      <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-primary)]">
            Por dónde empezar
          </p>
          <h2 className="mt-3 max-w-md text-3xl font-bold leading-tight text-[var(--color-text-primary)]">
            Tres formas de ver cómo pienso producto.
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => {
                window.location.hash = `#/proyectos/${project.id}`;
                setTimeout(() => window.scrollTo(0, 0), 100);
              }}
              className="focus-ring text-left"
            >
              <SurfaceCard className="flex min-h-[180px] flex-col justify-between p-5">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-brand-primary)]">{project.title}</p>
                  <h3 className="mt-3 text-xl font-bold leading-tight text-[var(--color-text-primary)]">
                    {project.impactTitle}
                  </h3>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-primary)]">
                  Ver caso
                  <ArrowRight className="h-4 w-4" />
                </span>
              </SurfaceCard>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
