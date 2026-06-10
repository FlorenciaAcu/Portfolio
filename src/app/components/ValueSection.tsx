import { valueCards } from "../data/home";
import { Section, SectionHeader, SurfaceCard } from "./design-system";

export function ValueSection() {
  return (
    <Section id="sobre-mi" tone="white">
      <SectionHeader
        eyebrow="Diferencial"
        title="Cómo aporto valor en un proyecto"
        description="Mi trabajo combina criterio de producto, diseño de experiencia y capacidad de ordenar información para que las decisiones sean más claras."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {valueCards.map((card) => (
          <SurfaceCard key={card.title} className="p-6 md:p-7">
            <h3 className="text-2xl font-bold leading-tight text-[var(--color-text-primary)]">{card.title}</h3>
            <p className="mt-4 leading-7 text-[var(--color-text-secondary)]">{card.description}</p>
          </SurfaceCard>
        ))}
      </div>
    </Section>
  );
}
