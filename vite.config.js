import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: ['./src/index.tsx', './src/index2.tsx'],
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: `[name].js`
            }
        }
    },
})
