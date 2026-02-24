import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    base: '/myportfolio/', // GitHub repository name (lowercase)
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                health: resolve(__dirname, 'case-study-health.html'),
                agency: resolve(__dirname, 'case-study-agency.html'),
                dental: resolve(__dirname, 'case-study-dental.html'),
                speed: resolve(__dirname, 'case-study-speed.html'),
            }
        }
    }
})
