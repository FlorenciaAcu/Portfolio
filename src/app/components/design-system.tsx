import * as React from "react";
import { cn } from "./ui/utils";

type Tone = "white" | "soft" | "dark";

export function Section({
  id,
  tone = "white",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  const tones: Record<Tone, string> = {
    white: "bg-white text-[var(--color-text-primary)]",
    soft: "bg-[var(--color-bg-soft)] text-[var(--color-text-primary)]",
    dark: "bg-[var(--color-dark)] text-white",
  };

  return (
    <section id={id} className={cn("section-reveal py-20 lg:py-28", tones[tone], className)}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  invert = false,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  invert?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end", className)}>
      <div>
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-[0.18em]",
            invert ? "text-[var(--color-brand-soft)]" : "text-[var(--color-brand-primary)]",
          )}
        >
          {eyebrow}
        </p>
        <h2
          className={cn(
            "text-balance text-3xl font-bold leading-tight md:text-5xl",
            invert ? "text-white" : "text-[var(--color-text-primary)]",
          )}
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p
          className={cn(
            "max-w-3xl text-lg leading-8",
            invert ? "text-[var(--color-dark-muted)]" : "text-[var(--color-text-secondary)]",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Pill({
  children,
  variant = "neutral",
  dot = false,
  className,
}: {
  children: React.ReactNode;
  variant?: "brand" | "soft" | "success" | "neutral" | "dark";
  dot?: boolean;
  className?: string;
}) {
  const variants = {
    brand: "border-[var(--color-brand-border)] bg-white text-[var(--color-brand-primary)]",
    soft: "border-[var(--color-brand-border)] bg-[var(--color-brand-soft)] text-[var(--color-brand-primary)]",
    success: "border-[var(--color-border-soft)] bg-white text-[var(--color-text-primary)]",
    neutral: "border-[var(--color-border-soft)] bg-white text-[var(--color-text-secondary)]",
    dark: "border-white/20 bg-white/8 text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-[var(--radius-chip)] border px-3 py-1 text-xs font-semibold",
        variants[variant],
        className,
      )}
    >
      {dot ? <span className="h-2 w-2 rounded-full bg-[var(--color-success)]" /> : null}
      {children}
    </span>
  );
}

export function Chip({
  children,
  variant = "neutral",
  className,
}: {
  children: React.ReactNode;
  variant?: "neutral" | "soft" | "dark";
  className?: string;
}) {
  const variants = {
    neutral: "border-[var(--color-border-soft)] bg-white text-[var(--color-text-secondary)]",
    soft: "border-[var(--color-brand-border)] bg-white text-[var(--color-brand-primary)]",
    dark: "border-white/20 bg-white/8 text-[var(--color-brand-soft)]",
  };

  return (
    <span
      className={cn(
        "inline-flex rounded-[var(--radius-chip)] border px-3 py-1 text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SurfaceCard({
  children,
  variant = "default",
  className,
  as: Comp = "div",
}: {
  children: React.ReactNode;
  variant?: "default" | "soft" | "dark" | "media";
  className?: string;
  as?: React.ElementType;
}) {
  const variants = {
    default: "border-[var(--color-border-soft)] bg-white text-[var(--color-text-primary)]",
    soft: "border-[var(--color-border-soft)] bg-[var(--color-bg-soft)] text-[var(--color-text-primary)]",
    dark: "border-white/12 bg-white/[0.055] text-white",
    media: "border-[var(--color-border-soft)] media-fallback text-[var(--color-text-primary)]",
  };

  return (
    <Comp
      className={cn(
        "interactive-card rounded-[var(--radius-card)] border shadow-[var(--shadow-card)]",
        variants[variant],
        className,
      )}
    >
      {children}
    </Comp>
  );
}

export function MediaBlock({
  src,
  alt,
  title,
  eyebrow,
  className,
}: {
  src?: string;
  alt?: string;
  title: string;
  eyebrow?: string;
  className?: string;
}) {
  const [hasImageError, setHasImageError] = React.useState(false);
  const shouldShowImage = Boolean(src) && !hasImageError;

  return (
    <div
      className={cn(
        "relative flex min-h-[280px] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border-soft)] media-fallback p-6",
        className,
      )}
    >
      {shouldShowImage ? (
        <img
          src={src}
          alt={alt || title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          onError={() => setHasImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 opacity-70">
          <div className="absolute left-6 top-6 h-3 w-32 rounded-full bg-white/75" />
          <div className="absolute left-6 top-12 h-3 w-24 rounded-full bg-white/60" />
          <div className="absolute bottom-6 right-6 grid grid-cols-3 gap-2">
            <span className="h-16 w-16 rounded-md border border-white/60 bg-white/40" />
            <span className="h-16 w-16 rounded-md border border-white/60 bg-white/30" />
            <span className="h-16 w-16 rounded-md border border-white/60 bg-white/20" />
          </div>
        </div>
      )}
      <div className="relative mt-auto max-w-xs">
        {eyebrow ? <Pill variant="neutral">{eyebrow}</Pill> : null}
        <p className="mt-3 text-2xl font-bold leading-tight text-[var(--color-text-primary)]">{title}</p>
      </div>
    </div>
  );
}
