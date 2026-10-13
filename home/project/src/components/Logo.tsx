import { Link } from '@tanstack/react-router';

const LOGO_URL =
  'https://res.cloudinary.com/lafaaku5/image/upload/v1791879037/hp9flfj7ca8pmzqzuxlz.png';

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="D2 Media — home"
      className="flex items-center gap-2 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded"
    >
      <img
        src={LOGO_URL}
        alt="D2 Media"
        width={compact ? 90 : 120}
        height={compact ? 30 : 40}
        className={compact ? 'h-8 w-auto' : 'h-10 w-auto'}
      />
    </Link>
  );
}
