import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: './src/index.tsx',
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: `[name].js`
            }
        }
    },
})
