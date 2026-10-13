import { Link } from '@tanstack/react-router';

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="D2 Media — home"
      className="flex items-end gap-1.5 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded"
    >
      {/* Chevron mark */}
      <svg width={compact ? 26 : 34} height={compact ? 26 : 34} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M6 4 L22 20 L6 36" stroke="#AD00FF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 12 L28 24" stroke="#FF0063" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" transform="translate(-4 -4)" />
      </svg>
      <span className={`font-bold leading-none tracking-tight text-white ${compact ? 'text-lg' : 'text-2xl'}`}>
        <span className="sr-only">D2 </span>
        MEDIA
      </span>
    </Link>
  );
}
