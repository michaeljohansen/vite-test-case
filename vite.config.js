import { defineConfig } from "vite";

export default defineConfig(() => ({
  root: "app",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: new URL("./app/index.html", import.meta.url).pathname,
      },
    },
  },
}));
