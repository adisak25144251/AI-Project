// vite.config.ts
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");

  return {
    // ✅ สำคัญมากสำหรับ GitHub Pages (repo = AI-Project)
    // URL จะเป็น https://adisak25144251.github.io/AI-Project/
    base: "/AI-Project/",

    plugins: [react()],

    server: {
      port: 3000,
      host: true, // = 0.0.0.0 เปิดให้มือถือในวง LAN เข้าได้
    },

    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
