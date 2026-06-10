import { ArrowRight } from "lucide-react";
import { type Project } from "../data/projects";
import { Chip, MediaBlock, SurfaceCard } from "./design-system";
import { Button } from "./ui/button";

function goToProject(projectId: string) {
  window.location.hash = `#/proyectos/${projectId}`;
  setTimeout(() => window.scrollTo(0, 0), 100);
}

export function ProjectVisualGrid({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const images = project.images?.items || [];

  return (
    <div className={compact ? "grid gap-3" : "grid min-h-[440px] gap-3 md:grid-cols-[1.15fr_0.85fr]"}>
      <MediaBlock
        src={project.images?.hero}
        alt={`${project.title}: imagen principal del proyecto`}
        title={project.title}
        eyebrow={project.productType}
        className={compact ? "min-h-[230px]" : "min-h-[320px] md:min-h-full"}
      />

      {!compact ? (
        <div className="grid gap-3">
          {[0, 1, 2].map((index) => (
            <MediaBlock
              key={`${project.id}-visual-${index}`}
              src={images[index]}
              alt={`${project.title}: visual ${index + 1}`}
              title={index === 0 ? project.industry : index === 1 ? project.productType : "Flujos y decisiones"}
              className="min-h-[132px]"
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function ProjectSheet({ project }: { project: Project }) {
  return (
    <SurfaceCard variant="soft" className="overflow-hidden p-0">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-4 md:p-5">
          <ProjectVisualGrid project={project} />
        </div>
        <ProjectSheetContent project={project} size="large" />
      </div>
    </SurfaceCard>
  );
}

export function CompactProjectSheet({ project }: { project: Project }) {
  return (
    <SurfaceCard className="overflow-hidden p-0">
      <ProjectVisualGrid project={project} compact />
      <ProjectSheetContent project={project} />
    </SurfaceCard>
  );
}

function ProjectSheetContent({ project, size = "default" }: { project: Project; size?: "default" | "large" }) {
  return (
    <div className={size === "large" ? "p-7 md:p-10 lg:p-12" : "p-6 md:p-7"}>
      <p className="text-sm font-semibold text-[var(--color-brand-primary)]">{project.title}</p>
      <h3
        className={
          size === "large"
            ? "mt-4 text-3xl font-bold leading-tight text-[var(--color-text-primary)] md:text-5xl"
            : "mt-3 text-2xl font-bold leading-tight text-[var(--color-text-primary)]"
        }
      >
        {project.impactTitle}
      </h3>

      <dl className="mt-6 grid gap-4 text-sm md:grid-cols-2">
        <div>
          <dt className="font-semibold text-[var(--color-text-soft)]">Industria</dt>
          <dd className="mt-1 font-semibold text-[var(--color-text-primary)]">{project.industry}</dd>
        </div>
        <div>
          <dt className="font-semibold text-[var(--color-text-soft)]">Tipo</dt>
          <dd className="mt-1 font-semibold text-[var(--color-text-primary)]">{project.productType}</dd>
        </div>
      </dl>

      <div className="mt-6 border-l-2 border-[var(--color-brand-primary)] pl-4">
        <p className="text-sm font-semibold text-[var(--color-text-soft)]">Objetivo de negocio</p>
        <p className="mt-1 leading-7 text-[var(--color-text-secondary)]">{project.businessGoal}</p>
      </div>

      <p className="mt-6 leading-7 text-[var(--color-text-secondary)]">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <Chip key={tag} variant="soft">
            {tag}
          </Chip>
        ))}
      </div>

      <Button variant="secondary" className="mt-7" onClick={() => goToProject(project.id)}>
        Ver caso
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
