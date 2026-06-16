import { motion, useReducedMotion } from "motion/react";
import { valueCards } from "../data/home";
import { Section, SectionHeader, SurfaceCard } from "./design-system";
import { revealItem, staggerContainer } from "./design-system/motionVariants";

export function ValueSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="sobre-mi" tone="white">
      <SectionHeader
        title="Mi forma de trabajar"
        description="Cuando entro a un proyecto, mi foco está en entender el contexto, ordenar la información y convertir decisiones dispersas en una experiencia clara."
      />

      <motion.div
        variants={shouldReduceMotion ? undefined : staggerContainer}
        initial={shouldReduceMotion ? undefined : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.18 }}
        className="grid gap-4 md:grid-cols-3"
      >
        {valueCards.map((card) => (
          <motion.div key={card.title} variants={shouldReduceMotion ? undefined : revealItem}>
            <SurfaceCard className="h-full p-4">
              <h3 className="text-2xl font-bold leading-tight text-[var(--color-text-primary)]">{card.title}</h3>
              <p className="mt-4 leading-7 text-[var(--color-text-secondary)]">{card.description}</p>
            </SurfaceCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
