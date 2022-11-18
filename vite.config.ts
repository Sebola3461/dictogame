import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mix from "vite-plugin-mix";

const mixDefault: any = mix;

// https://vitejs.dev/config/
export default defineConfig(
  process.env.NODE_ENV == "production"
    ? {
        plugins: [
          react({
            fastRefresh: true,
          }),
          process.env.NODE_ENV == "production"
            ? null
            : mixDefault.default({
                handler: "./server/server.ts",
              }),
        ],
        build: {
          outDir: "./dist",
        },
        server: {
          host: true,
          port: isNaN(Number(process.env.PORT))
            ? 5173
            : Number(process.env.PORT) || 5173,
        },
      }
    : {
        plugins: [
          react({
            fastRefresh: true,
          }),
        ],
        build: {
          outDir: "./dist",
        },
        server: {
          host: true,
        },
      }
);
