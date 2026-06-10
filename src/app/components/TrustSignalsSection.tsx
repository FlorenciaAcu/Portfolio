import { trustSignals } from "../data/home";
import { Section, SectionHeader } from "./design-system";

export function TrustSignalsSection() {
  return (
    <Section tone="soft">
      <SectionHeader
        eyebrow="Contextos"
        title="Dónde puedo aportar valor"
        description="Trabajo en productos digitales donde hace falta ordenar ideas, flujos e información para convertirlos en experiencias claras, usables y viables."
      />

      <div className="divide-y divide-[var(--color-border-soft)] border-y border-[var(--color-border-soft)]">
        {trustSignals.map((signal, index) => (
          <div key={signal.title} className="grid gap-4 py-6 md:grid-cols-[120px_0.55fr_1fr] md:items-start">
            <span className="text-sm font-semibold text-[var(--color-brand-primary)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">{signal.title}</h3>
            <p className="leading-7 text-[var(--color-text-secondary)]">{signal.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
