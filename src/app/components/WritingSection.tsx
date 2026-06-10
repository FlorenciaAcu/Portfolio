import { ArrowUpRight, BookOpen } from "lucide-react";
import { articles } from "../data/articles";
import { Pill, Section, SectionHeader, SurfaceCard } from "./design-system";

export function WritingSection() {
  return (
    <Section id="articulos" tone="dark">
      <SectionHeader
        eyebrow="Artículos"
        title="Lo que aprendo, lo comparto."
        description="Artículos, aprendizajes y referencias sobre diseño de producto, DesignOps, sistemas de diseño, IA aplicada al diseño y formas de trabajo."
        invert
      />

      <div className="grid gap-4 md:grid-cols-3">
        {articles.map((article) => (
          <SurfaceCard
            key={article.id}
            variant="dark"
            as="article"
            className={article.secondary ? "min-h-[320px] p-6 opacity-90" : "min-h-[320px] p-6"}
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
              <div className="mt-6">
                <p className="text-sm leading-6 text-[var(--color-dark-muted)]">{article.excerpt}</p>
                {article.url ? (
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-8 inline-flex items-center gap-2 rounded-[var(--radius-button)] border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-soft)] hover:text-[var(--color-brand-primary)]"
                  >
                    {article.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Pill variant="dark" className="mt-8 px-4 py-2 text-sm">{article.status}</Pill>
                )}
              </div>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </Section>
  );
}
