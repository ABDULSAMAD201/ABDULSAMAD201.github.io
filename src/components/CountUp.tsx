"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const format = (n: number) => n.toLocaleString("en-US");

/**
 * Animates a number from 0 to `value` when it scrolls into view.
 *
 * The final value is rendered in the initial HTML (SSR / no-JS), and the
 * animation only starts from 0 once JavaScript hydrates and the element
 * enters the viewport.
 */
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1400,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [display, setDisplay] = useState(() => format(value));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(format(Math.round(value * eased)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
