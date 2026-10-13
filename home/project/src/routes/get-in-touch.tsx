import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import type { FormEvent } from 'react';
import FadeIn from '@/components/FadeIn';

export const Route = createFileRoute('/get-in-touch')({
  head: () => ({
    meta: [
      { title: 'Get in Touch — D2 Media Communication Agency in Melbourne' },
      {
        name: 'description',
        content: "Still figuring out your next move? Let's make it clear. Get in touch with D2 Media, Port Melbourne VIC 3207.",
      },
    ],
  }),
  component: GetInTouchPage,
});

type Errors = { name?: string; email?: string; message?: string };

function GetInTouchPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!name.trim()) e.name = 'Please enter your name.';
    if (!email.trim()) e.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email address.';
    if (!message.trim()) e.message = 'Please tell us a little about your project.';
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    // No backend email service is configured in this environment.
    // The form composes a mailto: to the published address so the enquiry
    // is delivered by the visitor's own mail client.
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:info@d2media.com.au?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-xl border-2 bg-indigo-2/40 px-5 py-4 text-white placeholder:text-grey/60 outline-none transition-colors duration-200 focus:border-purple ${
      hasError ? 'border-coral' : 'border-indigo-2'
    }`;

  return (
    <main className="pt-28 md:pt-36">
      <section className="mx-auto max-w-2xl px-5 pb-28 md:px-10" aria-label="Contact form">
        <FadeIn className="text-center">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            STILL FIGURING OUT
            <br />
            <span className="text-coral">YOUR NEXT MOVE?</span>
          </h1>
          <p className="mt-5 text-xl text-white/90">Let&apos;s make it clear.</p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-12">
          {sent ? (
            <div
              role="status"
              className="rounded-3xl border border-purple bg-indigo-2/30 p-10 text-center"
            >
              <svg className="mx-auto h-14 w-14 text-purple" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="m8 12.5 2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2 className="mt-5 text-3xl font-bold">Thanks, {name.split(' ')[0] || 'legend'}!</h2>
              <p className="mt-3 text-lg text-grey">
                Your mail app should have opened with your enquiry addressed to{' '}
                <a
                  href="mailto:info@d2media.com.au"
                  className="font-bold text-purple underline underline-offset-4 hover:text-coral"
                >
                  info@d2media.com.au
                </a>
                . Hit send and we&apos;ll be in touch.
              </p>
              <p className="mt-4 text-sm text-grey/80">
                Nothing opened? Email us directly at info@d2media.com.au.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold tracking-widest">
                  YOUR NAME
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={inputClass(!!errors.name)}
                  placeholder="Jane Citizen"
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-2 text-sm font-bold text-coral">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold tracking-widest">
                  EMAIL ADDRESS
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={inputClass(!!errors.email)}
                  placeholder="jane@yourstartup.com.au"
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-2 text-sm font-bold text-coral">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold tracking-widest">
                  YOUR MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${inputClass(!!errors.message)} resize-y`}
                  placeholder="Tell us about your startup and what you're trying to achieve…"
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-2 text-sm font-bold text-coral">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-coral px-9 py-4 text-sm font-bold tracking-widest text-white transition-colors duration-200 hover:bg-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo sm:w-auto"
              >
                SEND MESSAGE
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 17 17 7m0 0H8m9 0v9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}
        </FadeIn>

        <FadeIn delay={0.25} className="mt-12 text-center text-grey">
          <p className="text-base">
            Prefer email?{' '}
            <a
              href="mailto:info@d2media.com.au"
              className="font-bold text-purple underline underline-offset-4 transition-colors hover:text-coral"
            >
              info@d2media.com.au
            </a>
          </p>
          <p className="mt-2 text-base">Port Melbourne VIC 3207</p>
        </FadeIn>
      </section>
    </main>
  );
}
