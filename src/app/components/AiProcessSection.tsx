import { aiTags, aiText } from "../data/home";
import { Chip, Section, SectionHeader, SurfaceCard } from "./design-system";

export function AiProcessSection() {
  return (
    <Section id="ia-aplicada" tone="white" className="py-16 lg:py-24">
      <SurfaceCard variant="soft" className="p-7 md:p-10 lg:p-12">
        <SectionHeader
          eyebrow="IA aplicada"
          title="IA aplicada con criterio de producto"
          description={aiText}
          className="mb-8"
        />

        <div className="flex flex-wrap gap-2">
          {aiTags.slice(0, 4).map((tag) => (
            <Chip key={tag} variant="soft">{tag}</Chip>
          ))}
        </div>
      </SurfaceCard>
    </Section>
  );
}
