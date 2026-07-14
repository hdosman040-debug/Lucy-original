import { useEffect, useRef, useState } from "react";

export function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(eased * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const display =
    count >= 1000 ? `${(count / 1000).toFixed(count >= value ? 0 : 1)}k` : count;

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-4xl font-semibold text-gold sm:text-5xl">
        {display}
        {suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-wider text-white/70 sm:text-sm">
        {label}
      </div>
    </div>
  );
}
