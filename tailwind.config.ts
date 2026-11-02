import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B0F",
          soft: "#1B1B20",
          card: "#16161B",
          surface: "#121217",
        },
        brand: {
          primary: "#A40DDB",
          "primary-hover": "#8F08C0",
          magenta: "#C013B9",
          lavender: "#C677E0",
          "lavender-soft": "#EBD2FA",
          "lavender-light": "#F6E7FF",
          "lilac-50": "#F8F2FD",
        },
        muted: {
          DEFAULT: "#646475",
          light: "#9C97A8",
          dark: "#3A3644",
        },
        border: {
          DEFAULT: "#E9E2EE",
          dark: "#2C2932",
          "dark-soft": "#211F27",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "Poppins", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        card: "16px",
        large: "24px",
      },
      boxShadow: {
        soft: "0 14px 44px rgba(20, 0, 40, 0.08)",
        card: "0 10px 30px rgba(0, 0, 0, 0.06)",
        glow: "0 0 30px rgba(164, 13, 219, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
