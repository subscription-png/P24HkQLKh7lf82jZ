import { useEffect, useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import Logo from '@/components/Logo';

const NAV = [
  { to: '/d2-dna', label: 'D2 DNA' },
  { to: '/build-and-scale', label: 'BUILD & SCALE' },
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-indigo/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-6">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-base font-bold tracking-widest transition-colors duration-200 hover:text-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded px-1 py-1 ${
                pathname === item.to ? 'text-purple' : 'text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/get-in-touch"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-coral px-7 py-3 text-base font-bold tracking-widest text-white transition-colors duration-200 hover:bg-coral focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-indigo"
          >
            GET IN TOUCH
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-coral transition-colors duration-200 group-hover:text-white">
              <path d="M4 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-coral md:hidden"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-indigo transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-80 border-t border-indigo-2' : 'max-h-0'
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-6 py-4">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded px-3 py-3 text-lg font-bold tracking-widest transition-colors hover:text-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-coral ${
                pathname === item.to ? 'text-purple' : 'text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/get-in-touch"
            className="mt-2 inline-flex items-center justify-center gap-3 rounded-full border-2 border-coral px-6 py-3 text-lg font-bold tracking-widest transition-colors hover:bg-coral focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
          >
            GET IN TOUCH
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-coral">
              <path d="M4 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
