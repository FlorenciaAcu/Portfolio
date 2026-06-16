import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { articles } from "../data/articles";
import { Pill, Section, SectionHeader, SurfaceCard } from "./design-system";
import { revealItem, staggerContainer } from "./design-system/motionVariants";

export function WritingSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="articulos" tone="dark">
      <SectionHeader
        title="Lo que aprendo, lo comparto."
        description="Artículos, aprendizajes y referencias sobre diseño de producto, DesignOps, sistemas de diseño, IA aplicada al diseño y formas de trabajo."
        invert
      />

      <motion.div
        variants={shouldReduceMotion ? undefined : staggerContainer}
        initial={shouldReduceMotion ? undefined : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.18 }}
        className="grid gap-5 md:grid-cols-3"
      >
        {articles.map((article) => (
          <motion.div key={article.id} variants={shouldReduceMotion ? undefined : revealItem}>
            <SurfaceCard
              variant="dark"
              as="article"
              className={article.secondary ? "min-h-[340px] p-7 opacity-85" : "min-h-[340px] p-7"}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <BookOpen className="h-5 w-5 text-[var(--color-brand-soft)]" />
                    <Pill variant="dark">{article.status || article.type}</Pill>
                  </div>
                  <p className="mb-3 text-sm font-semibold text-[var(--color-brand-soft)]">{article.category}</p>
                  <h3 className="text-2xl font-bold leading-8 text-white">{article.title}</h3>
                </div>
                <div className="mt-7">
                  <p className="text-sm leading-6 text-[var(--color-dark-muted)]">{article.excerpt}</p>
                  {article.url ? (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-group focus-ring mt-8 inline-flex items-center gap-2 rounded-[var(--radius-button)] border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-soft)] hover:text-[var(--color-brand-primary)]"
                    >
                      {article.cta}
                      <ArrowUpRight className="cta-arrow h-4 w-4" />
                    </a>
                  ) : (
                    <Pill variant="dark" className="mt-8 px-4 py-2 text-sm">{article.status}</Pill>
                  )}
                </div>
              </div>
            </SurfaceCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
