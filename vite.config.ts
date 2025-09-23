import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import tsConfigPaths from 'vite-tsconfig-paths'

const config = {
  mode: "development",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    minify: true,
    cssMinify: true,
    terserOptions: { compress: false, mangle: false },
  },
  define: { "process.env.NODE_ENV": "'development'" },
  esbuild: { jsx: "automatic", jsxImportSource: "react" },
  plugins: [
    tailwindcss(),
    tsConfigPaths(),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    viteStaticCopy({
      targets: [
        { src: "./assets/*", dest: "assets" },
        {
          src: "./public/assets/{*,}",
          dest: path.join("dist", "public/assets"),
        },
        { src: "./assets/*", dest: path.join("dist", "assets") },
      ],
      silent: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./src"),
    },
  },
};
export default defineConfig(config);
