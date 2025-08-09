// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import {resolve} from 'path';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     lib: {
//       entry: resolve(__dirname, 'src/index.ts'),
//       name: 'RealDigitalClock',
//       fileName: (format) => `real-digital-clock.${format}.js`,
//       formats: ['es', 'umd']
//     },
//     rollupOptions: {
//       external: ['react', 'react-dom'],
//       output: {
//         globals: {
//           react: 'React',
//           'react-dom': 'ReactDOM',
//         },
//         assetFileNames: (assetInfo) => {
//           // This condition is the most reliable way to catch the primary CSS output
//           // from a library build, regardless of its original source name.
//           // Vite often names the main CSS chunk 'index.css' by default in library builds.
//           if (assetInfo.names.includes('index.css')) { // Corrected condition back to 'index.css'
//             return 'style.css';
//           }
//           return assetInfo.name || '';
//         },
//       },
//     },
//     copyPublicDir: false,
//   },
// });

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
});
