import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { MediaBlock, SectionHeader, SurfaceCard } from "./design-system";
import { Button } from "./ui/button";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function ProjectDetailPage({ projectId }: { projectId: string }) {
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--color-bg-soft)]">
        <Header />
        <main className="mx-auto max-w-4xl px-6 py-32">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-primary)]">
            Proyecto no encontrado
          </p>
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)]">No encontré este caso.</h1>
          <BackButton />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-32">
        <button
          onClick={() => {
            window.location.hash = "#/proyectos";
            setTimeout(() => window.scrollTo(0, 0), 100);
          }}
          className="focus-ring mb-16 inline-flex items-center gap-2 rounded-[var(--radius-button)] border border-[var(--color-border-soft)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-text-primary)] shadow-sm transition hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a proyectos
        </button>

        <CaseHeader project={project} />

        {project.caseStudy ? <CaseNarrative project={project} /> : <CasePlaceholder project={project} />}

        <div className="border-t border-[var(--color-border-soft)] pt-10">
          <button
            onClick={() => {
              window.location.hash = "#/proyectos";
              setTimeout(() => window.scrollTo(0, 0), 100);
            }}
            className="focus-ring group flex w-full items-center justify-between rounded-[var(--radius-card)] border border-[var(--color-border-soft)] bg-[var(--color-bg-soft)] px-8 py-8 text-left transition hover:border-[var(--color-brand-primary)]"
          >
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
                Archivo de proyectos
              </span>
              <span className="mt-2 block text-3xl font-bold text-[var(--color-text-primary)]">Ver otros trabajos</span>
            </span>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-brand-primary)] text-white transition group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" />
            </span>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function CaseHeader({ project }: { project: Project }) {
  return (
    <header className="border-b border-[var(--color-border-soft)] pb-12">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-primary)]">
        Caso de estudio · {project.productType}
      </p>
      <h1 className="text-balance max-w-4xl text-5xl font-bold leading-none text-[var(--color-text-primary)] md:text-7xl">
        {project.title}
      </h1>
      <p className="mt-5 max-w-4xl text-3xl font-bold leading-tight text-[var(--color-text-soft)] md:text-4xl">
        {project.impactTitle}
      </p>

      <div className="mt-12 grid gap-8 border-t border-[var(--color-border-soft)] pt-8 md:grid-cols-3">
        <MetaItem label="Rol" value={project.role} />
        <MetaItem label="Año" value={project.year} />
        <MetaItem label="Industria" value={project.industry} />
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <MetaItem label="Tipo de producto" value={project.productType} />
        <MetaItem label="Objetivo de negocio" value={project.businessGoal} />
      </div>
    </header>
  );
}

function CaseNarrative({ project }: { project: Project }) {
  const caseStudy = project.caseStudy!;

  return (
    <>
      <CaseSection eyebrow="01 · Dónde estaba la oportunidad" title="Un contexto que necesitaba claridad">
        {caseStudy.opportunity}
      </CaseSection>

      <CaseSection eyebrow="02 · Qué necesitaba resolverse" title="La tensión principal del producto">
        {caseStudy.problem}
      </CaseSection>

      <CaseSection eyebrow="03 · Cómo lo abordé" title="Ordenar para poder diseñar con criterio">
        {caseStudy.approach}
      </CaseSection>

      <section className="section-reveal py-16">
        <SectionHeader eyebrow="04 · Decisiones clave de diseño" title="Criterios que guiaron el trabajo" className="mb-8 block" />
        <div className="grid gap-4 md:grid-cols-3">
          {caseStudy.decisions.map((decision) => (
            <SurfaceCard key={decision} className="p-6">
              <p className="leading-7 text-[var(--color-text-secondary)]">{decision}</p>
            </SurfaceCard>
          ))}
        </div>
      </section>

      <CaseSection eyebrow="05 · Cómo evolucionó la solución" title="De información dispersa a una base más clara">
        {caseStudy.evolution}
      </CaseSection>

      <CaseSection eyebrow="06 · Resultado, impacto o próximos pasos" title="Una base preparada para seguir avanzando">
        {caseStudy.outcome}
      </CaseSection>

      <section className="section-reveal py-16">
        <SectionHeader eyebrow="07 · Galería visual" title="Espacio preparado para pantallas y evidencia visual" className="mb-8 block" />
        <div className="grid gap-4 md:grid-cols-2">
          <MediaBlock title={`${project.title} · pantallas principales`} />
          <MediaBlock title={`${project.title} · flujos y decisiones`} />
        </div>
      </section>
    </>
  );
}

function CasePlaceholder({ project }: { project: Project }) {
  return (
    <section className="section-reveal py-16">
      <SectionHeader eyebrow="Caso en preparación" title={project.impactTitle} className="mb-0 block" />
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)]">{project.description}</p>
      <p className="mt-5 max-w-3xl leading-7 text-[var(--color-text-muted)]">
        Esta página queda preparada para sumar contexto, decisiones, pantallas y aprendizajes cuando el caso esté completo.
      </p>
    </section>
  );
}

function CaseSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: string;
}) {
  return (
    <section className="section-reveal py-16">
      <SectionHeader eyebrow={eyebrow} title={title} className="mb-0 block" />
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)]">{children}</p>
    </section>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-soft)]">{label}</p>
      <p className="font-bold leading-7 text-[var(--color-text-primary)]">{value}</p>
    </div>
  );
}

function BackButton() {
  return (
    <Button
      onClick={() => {
        window.location.hash = "#/proyectos";
        setTimeout(() => window.scrollTo(0, 0), 100);
      }}
      variant="brand"
      className="mt-8"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Volver a proyectos
    </Button>
  );
}
