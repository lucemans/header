import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: ['./src/index.tsx', './src/index2.tsx', './src/style.scss'],
                output: {
                    entryFileNames: '[name].js',
                    chunkFileNames: '[name].js',
                    assetFileNames: (data) => data.name == 'style.css' ? '[name].css' : 'assets/[name].[ext]'
                }
        }
    },
})
