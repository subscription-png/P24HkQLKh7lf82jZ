import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { nitro } from 'nitro/vite';
import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Vite 8 resolves the tsconfig "@/*" alias natively.
  resolve: { tsconfigPaths: true },
  // Nitro produces the `.vercel/output` Build Output API bundle that Vercel
  // needs to run the SSR server (it auto-selects the `vercel` preset on Vercel).
  plugins: [tailwindcss(), tanstackStart(), nitro(), viteReact()],
});
