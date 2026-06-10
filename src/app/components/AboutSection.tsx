import { focusAreas } from "../data/home";
import { Section, SectionHeader, SurfaceCard } from "./design-system";

export function AboutSection() {
  return (
    <Section id="sobre-mi" tone="white">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeader
          eyebrow="Enfoque"
          title="Diseño para ordenar y avanzar."
          className="mb-0 block lg:sticky lg:top-28"
        />

        <div className="space-y-8">
          <p className="max-w-3xl text-xl leading-8 text-[var(--color-text-secondary)]">
            Trabajo en productos donde hace falta entender necesidades, definir flujos,
            simplificar decisiones y traducirlas en experiencias digitales claras.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map((area) => (
              <SurfaceCard key={area.title} variant="soft" className="p-6">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">{area.title}</h3>
                <p className="mt-3 leading-7 text-[var(--color-text-secondary)]">{area.description}</p>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
