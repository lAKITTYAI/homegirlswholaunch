import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        lavender: {
          50: "#FAF8FF",
          100: "#F3EFFF",
          200: "#E6DDFF",
          300: "#D4C5F9",
          400: "#B99EF0",
          500: "#9B7FE5",
          600: "#7D5FD9",
          700: "#6447C2",
          800: "#4E3899",
          900: "#3D2B76",
        },
        gold: {
          50: "#FFFEF5",
          100: "#FFF9E0",
          200: "#FFF0C2",
          300: "#FFE499",
          400: "#FFD666",
          500: "#D4AF37",
          600: "#B8941F",
          700: "#8B6F14",
          800: "#5C4A0D",
          900: "#3D3108",
        },
        luxury: {
          cream: "#FEFCF9",
          charcoal: "#2D2D35",
          platinum: "#E8E8ED",
        },
      },
      fontFamily: {
        sans: ["'Old Standard TT'", "serif"],
        body: ["'Playfair Display'", "serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;