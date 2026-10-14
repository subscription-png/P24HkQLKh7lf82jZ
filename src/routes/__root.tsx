import type { ReactNode } from 'react';
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import appCss from '../styles.css?url';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CustomCursor from '@/components/CustomCursor';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'D2 Media Communication Agency in Melbourne' },
      {
        name: 'description',
        content:
          "Based in Melbourne, D2 Media helps startups say what they really mean — and get heard. Branding, copywriting, web design, social media and lead generation.",
      },
      { property: 'og:title', content: 'D2 Media Communication Agency in Melbourne' },
      {
        property: 'og:description',
        content: "Play it safe, you will be forgotten. It's time to stand out!",
      },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-indigo text-white antialiased">
        <CustomCursor />
        <SiteHeader />
        {children}
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  );
}
