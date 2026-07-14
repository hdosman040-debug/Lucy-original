import { cn } from "@/lib/utils";
import { AnimatedSection } from "./AnimatedSection";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <AnimatedSection className={cn("flex flex-col items-center text-center", className)}>
      {eyebrow && (
        <span className="mb-3 text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</span>
      )}
      <h2
        className={cn(
          "text-balance font-serif text-3xl font-semibold sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <span className="gold-line mt-5" />
      {subtitle && (
        <p
          className={cn(
            "mt-5 max-w-xl text-balance",
            light ? "text-white/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
