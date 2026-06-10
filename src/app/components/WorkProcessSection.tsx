import { processSteps } from "../data/skills";
import { Chip, Section, SectionHeader, SurfaceCard } from "./design-system";

export function WorkProcessSection() {
  return (
    <Section id="como-trabajo" tone="soft">
      <SectionHeader
        eyebrow="Proceso"
        title="Cómo trabajo"
        description="Me involucro desde las primeras definiciones hasta el diseño y preparación de soluciones para que el equipo pueda avanzar con claridad."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {processSteps.map((step, index) => (
          <SurfaceCard key={step.title} className="flex min-h-[280px] flex-col justify-between p-6">
            <div>
              <span className="text-sm font-semibold text-[var(--color-brand-primary)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-7 text-2xl font-bold text-[var(--color-text-primary)]">{step.title}</h3>
              <p className="mt-4 leading-7 text-[var(--color-text-secondary)]">{step.description}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {step.keywords.slice(0, 3).map((keyword) => (
                <Chip key={keyword}>{keyword}</Chip>
              ))}
            </div>
          </SurfaceCard>
        ))}
      </div>
    </Section>
  );
}
