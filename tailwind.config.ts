import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E7C3D0",
        secondary: "#F5ECE7",
        accent: "#C59D5F",
        dark: "#1A1A1A",
        muted: "#F3F4F6",
      },
      boxShadow: {
        soft: "0 12px 30px -18px rgba(26, 26, 26, 0.35)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
