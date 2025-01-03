import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const keyPath = path.resolve(__dirname, "ssl/localhost.key");
const certPath = path.resolve(__dirname, "ssl/localhost.crt");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [, react(), eslint(), svgr()],
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    https: {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath),
    },
  },
});
