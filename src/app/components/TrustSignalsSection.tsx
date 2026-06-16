import { motion, useReducedMotion } from "motion/react";
import { trustSignals } from "../data/home";
import { Section, SectionHeader } from "./design-system";
import { revealItemFromLeft, staggerContainer } from "./design-system/motionVariants";

export function TrustSignalsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section tone="soft">
      <SectionHeader
        title="Dónde puedo aportar valor"
        description="Trabajo en productos digitales donde hace falta ordenar ideas, flujos e información para convertirlos en experiencias claras, usables y viables."
      />

      <motion.div
        variants={shouldReduceMotion ? undefined : staggerContainer}
        initial={shouldReduceMotion ? undefined : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.18 }}
        className="divide-y divide-[var(--color-border-soft)] border-y border-[var(--color-border-soft)]"
      >
        {trustSignals.map((signal, index) => (
          <motion.div key={signal.title} variants={shouldReduceMotion ? undefined : revealItemFromLeft} className="grid gap-4 py-6 md:grid-cols-[120px_0.55fr_1fr] md:items-start">
            <span className="text-sm font-semibold text-[var(--color-brand-primary)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">{signal.title}</h3>
            <p className="leading-7 text-[var(--color-text-secondary)]">{signal.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
