import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Your TanStack Start app is ready</h1>
      <p className="text-lg text-slate-600">Describe the website you want and it will be built here.</p>
    </main>
  );
}
