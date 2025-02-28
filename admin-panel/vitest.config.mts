import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    include: ["**/__tests__/**/*.test.{js,ts,jsx,tsx}"],
    environment: "jsdom",
  },
});
