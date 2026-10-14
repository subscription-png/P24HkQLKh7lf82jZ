import { Link } from '@tanstack/react-router';

export default function SiteFooter() {
  return (
    <footer className="border-t border-indigo-2 bg-indigo">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-10">
        {/* Brand + contact */}
        <div className="space-y-5">
          <Link to="/" aria-label="D2 Media — home" className="inline-flex items-center gap-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-coral">
            <img
              src="https://res.cloudinary.com/lafaaku5/image/upload/v1791879037/hp9flfj7ca8pmzqzuxlz.png"
              alt="D2 Media"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <address className="space-y-3 not-italic text-base leading-relaxed text-grey">
            <p>
              <span className="font-bold text-white">A:</span> Port Melbourne VIC 3207
            </p>
            <p>
              <span className="font-bold text-white">E:</span>{' '}
              <a
                href="mailto:info@d2media.com.au"
                className="underline decoration-purple underline-offset-4 transition-colors hover:text-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded"
              >
                info@d2media.com.au
              </a>
            </p>
            <p>ABN 95 021 305 460</p>
          </address>
        </div>

        {/* Site links */}
        <nav aria-label="Footer" className="space-y-3 text-base font-bold tracking-widest md:justify-self-center">
          <Link to="/d2-dna" className="block w-fit rounded py-1 transition-colors hover:text-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-coral">
            D2 DNA
          </Link>
          <Link to="/build-and-scale" className="block w-fit rounded py-1 transition-colors hover:text-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-coral">
            BUILD &amp; SCALE
          </Link>
          <Link to="/get-in-touch" className="block w-fit rounded py-1 transition-colors hover:text-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-coral">
            FAQ
          </Link>
        </nav>

        {/* Legal + social */}
        <div className="space-y-4 text-base font-bold tracking-widest md:justify-self-end">
          <p className="text-grey">Privacy Policy</p>
          <p className="text-grey">Terms and Conditions</p>
          <div className="flex items-center gap-5 pt-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="D2 Media on Facebook"
              className="rounded text-white transition-colors hover:text-coral focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3V14h2.8v8h3.4Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="D2 Media on LinkedIn"
              className="rounded text-white transition-colors hover:text-coral focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.2 8h4.6v14H.2V8Zm7.6 0h4.4v1.9h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.9V22h-4.6v-6.6c0-1.6 0-3.6-2.2-3.6s-2.6 1.7-2.6 3.5V22H7.8V8Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
