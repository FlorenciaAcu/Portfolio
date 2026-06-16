import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { Chip, MediaBlock, SurfaceCard } from "./design-system";
import { revealItem, staggerContainer } from "./design-system/motionVariants";
import { Button } from "./ui/button";

function ProjectCard({ project }: { project: Project }) {
  const hasInternalCase = project.cta === "Ver caso";
  const externalLink = project.caseUrl || project.url;

  return (
    <SurfaceCard as="article" className="flex h-full flex-col overflow-hidden p-0">
      <MediaBlock title={project.title} eyebrow={project.year} className="h-56 min-h-56 rounded-none border-0" />

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-3 text-sm font-semibold text-[var(--color-brand-primary)]">{project.title}</p>
        <h3 className="text-2xl font-bold leading-tight text-[var(--color-text-primary)]">{project.impactTitle}</h3>
        <p className="mt-3 text-sm font-medium text-[var(--color-text-muted)]">
          {project.industry} · {project.productType}
        </p>

        <p className="mt-5 text-sm leading-6 text-[var(--color-text-secondary)]">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Chip key={tag} variant="soft">{tag}</Chip>
          ))}
        </div>

        <div className="mt-auto pt-6">
          {hasInternalCase ? (
            <Button
              variant="secondary"
              size="sm"
              className="cta-group"
              onClick={() => {
                window.location.hash = `#/proyectos/${project.id}`;
                setTimeout(() => window.scrollTo(0, 0), 100);
              }}
            >
              {project.cta}
              <ArrowRight className="cta-arrow ml-2 h-3.5 w-3.5" />
            </Button>
          ) : externalLink ? (
            <Button
              variant="secondary"
              size="sm"
              className="cta-group"
              onClick={() => window.open(externalLink, "_blank", "noopener,noreferrer")}
            >
              {project.cta}
              <ExternalLink className="cta-arrow ml-2 h-3.5 w-3.5" />
            </Button>
          ) : (
            <span className="inline-flex rounded-[var(--radius-button)] border border-[var(--color-border-soft)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-brand-primary)]">
              {project.cta}
            </span>
          )}
        </div>
      </div>
    </SurfaceCard>
  );
}

export function ProjectGrid({ items = projects }: { items?: Project[] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : staggerContainer}
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.18 }}
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((project) => (
        <motion.div key={project.id} variants={shouldReduceMotion ? undefined : revealItem}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
