import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "../data/projects";
import { Section, SurfaceCard } from "./design-system";
import { revealItem, staggerContainer } from "./design-system/motionVariants";

export function ProjectEntryPointsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section tone="white" className="py-12 lg:py-16">
      <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div>
          <h2 className="max-w-md text-3xl font-bold leading-tight text-[var(--color-text-primary)]">
            Tres formas de ver cómo pienso producto.
          </h2>
        </div>

        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial={shouldReduceMotion ? undefined : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.18 }}
          className="grid gap-3 md:grid-cols-3"
        >
          {featuredProjects.map((project) => (
            <motion.button
              key={project.id}
              variants={shouldReduceMotion ? undefined : revealItem}
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
                <span className="cta-group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-primary)]">
                  Ver caso
                  <ArrowRight className="cta-arrow h-4 w-4" />
                </span>
              </SurfaceCard>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
