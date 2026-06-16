import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, FileText } from "lucide-react";
import { cvUrl, heroIndicators } from "../data/home";
import { Pill } from "./design-system";
import { Button } from "./ui/button";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = (delay = 0, y = 12) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.52, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section id="inicio" className="bg-[var(--color-bg-soft)] pt-32 lg:pt-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex min-h-[calc(100vh-5rem)] items-center pb-12">
          <div className="max-w-5xl">
            <motion.div {...reveal(0, 8)}>
              <Pill variant="success" dot className="mb-8 px-4 py-2 text-sm shadow-[var(--shadow-card)]">
                Disponible para proyectos
              </Pill>
            </motion.div>

            <motion.p {...reveal(0.04, 10)} className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-primary)]">
              UX/UI · Producto · Delivery
            </motion.p>
            <motion.h1 {...reveal(0.08, 16)} className="text-balance max-w-4xl text-5xl font-bold leading-[1.02] text-[var(--color-text-primary)] md:text-7xl lg:text-[5.6rem]">
              Soy Florencia Acuña, Product Designer.
            </motion.h1>
            <motion.p {...reveal(0.12, 14)} className="mt-8 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
              Ayudo a convertir ideas, necesidades y procesos en productos digitales simples de usar,
              con foco en usuarios, negocio y equipos.
            </motion.p>

            <motion.div {...reveal(0.16, 14)} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={() => {
                  window.location.hash = "#/proyectos";
                  setTimeout(() => window.scrollTo(0, 0), 100);
                }}
                variant="primary"
                size="lg"
                className="cta-group"
              >
                Ver proyectos
                <ArrowRight className="cta-arrow ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    cvUrl,
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                variant="secondary"
                size="lg"
              >
                <FileText className="mr-2 h-4 w-4" />
                Ver CV
              </Button>
            </motion.div>

            <motion.div {...reveal(0.24, 14)} className="mt-14 grid gap-4 border-y border-[var(--color-border-soft)] py-6 sm:grid-cols-3">
              {heroIndicators.map((indicator) => (
                <div key={indicator.label}>
                  <p className="text-3xl font-bold text-[var(--color-text-primary)]">{indicator.value}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{indicator.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
