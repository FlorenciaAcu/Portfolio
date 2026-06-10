import { FileText, Linkedin, Mail } from "lucide-react";
import { cvUrl } from "../data/home";
import { Section, SectionHeader } from "./design-system";
import { Button } from "./ui/button";

const linkedinUrl = "https://www.linkedin.com/in/florencia-acuna-ux/";

export function ContactSection() {
  return (
    <Section id="contacto" tone="white">
      <div className="grid gap-12 border-t border-[var(--color-border-soft)] pt-12 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionHeader
          eyebrow="Contacto"
          title="¿Tenés un producto para ordenar, diseñar o mejorar?"
          description="Puedo ayudarte a transformar una idea, flujo o proceso en una experiencia digital clara, usable y lista para avanzar."
          className="mb-0 block"
        />

          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <a
                href="mailto:contact@florenciaux.com"
                className="focus-ring flex items-center gap-4 rounded-[var(--radius-card)] border border-[var(--color-border-soft)] p-4 text-[var(--color-text-primary)] transition hover:border-[var(--color-brand-border)] hover:bg-[var(--color-bg-soft)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--color-brand-primary)] text-white">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[var(--color-text-muted)]">Mail</span>
                  <span className="block font-bold">contact@florenciaux.com</span>
                </span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-4 rounded-[var(--radius-card)] border border-[var(--color-border-soft)] p-4 text-[var(--color-text-primary)] transition hover:border-[var(--color-brand-border)] hover:bg-[var(--color-bg-soft)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--color-brand-primary)] text-white">
                  <Linkedin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[var(--color-text-muted)]">LinkedIn</span>
                  <span className="block font-bold">Florencia Acuña</span>
                </span>
              </a>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                variant="brand"
                size="lg"
              >
                <a href="mailto:contact@florenciaux.com">Contactarme</a>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
              >
                <a href={cvUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Ver CV
                </a>
              </Button>
            </div>
          </div>
      </div>
    </Section>
  );
}
