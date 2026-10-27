import { useEffect, useState } from 'react';

type Segment = { text: string; className?: string };

export default function Typewriter({
  segments,
  startDelay = 400,
  speed = 45,
  className = '',
}: {
  segments: Segment[];
  startDelay?: number;
  speed?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const total = segments.reduce((n, s) => n + s.text.length, 0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setCount(total);
      return;
    }
    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= total && interval) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [total, startDelay, speed]);

  let remaining = count;
  return (
    <span className={className} aria-label={segments.map((s) => s.text).join('')}>
      <span aria-hidden="true">
        {segments.map((seg, idx) => {
          const visible = Math.max(0, Math.min(seg.text.length, remaining));
          remaining -= seg.text.length;
          return (
            <span key={idx} className={seg.className}>
              {seg.text.slice(0, visible)}
            </span>
          );
        })}
        {count < total && (
          <span className="text-coral" style={{ animation: 'caret-blink 0.9s step-end infinite' }}>
            |
          </span>
        )}
      </span>
    </span>
  );
}
