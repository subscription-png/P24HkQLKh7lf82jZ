import { Link } from '@tanstack/react-router';

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="D2 Media — home"
      className="flex items-center gap-2 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded"
    >
      {/* Chevron mark matching the supplied logo: purple stroke with coral offset */}
      <svg
        width={compact ? 30 : 40}
        height={compact ? 30 : 40}
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 4 L22 20 L6 36"
          stroke="#AD00FF"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8 L24 20"
          stroke="#FF0063"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`font-bold leading-none tracking-tight text-white ${compact ? 'text-xl' : 'text-3xl'}`}
      >
        <span className="sr-only">D2 </span>
        MEDIA
      </span>
    </Link>
  );
}
