import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://ace01603.github.io/symptom-checker/",
    build: {
        outDir: 'docs',
        emptyOutDir: true, // also necessary
    }
})
