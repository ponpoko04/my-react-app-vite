/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.vitest": false,
  },
  test: {
    include: ["src/**/*.(ts|tsx)"],
    exclude: ["src/vite-env.d.ts","src/main.tsx"],
    passWithNoTests: true,
  }
})
