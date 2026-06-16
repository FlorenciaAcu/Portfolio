import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

interface RevealSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

export function RevealSection({
  children,
  delay = 0,
  className,
  y = 16,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.16 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
