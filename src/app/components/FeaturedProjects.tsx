import { ArrowRight } from "lucide-react";
import { featuredProjects } from "../data/projects";
import { Section, SectionHeader } from "./design-system";
import { CompactProjectSheet, ProjectSheet } from "./project-sheets";
import { Button } from "./ui/button";

const [mainProject, ...secondaryProjects] = featuredProjects;

export function FeaturedProjects() {
  if (!mainProject) return null;

  return (
    <Section id="proyectos" tone="white">
      <SectionHeader
        title="Proyectos destacados"
        description="Láminas editoriales de proyectos donde el trabajo no fue solo diseñar pantallas, sino ordenar decisiones, flujos y criterios para que el producto pudiera avanzar."
      />

      <ProjectSheet project={mainProject} />

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {secondaryProjects.map((project) => (
          <CompactProjectSheet key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button
          variant="brand"
          size="lg"
          className="cta-group"
          onClick={() => {
            window.location.hash = "#/proyectos";
            setTimeout(() => window.scrollTo(0, 0), 100);
          }}
        >
          Ver todos los proyectos
          <ArrowRight className="cta-arrow ml-2 h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}
