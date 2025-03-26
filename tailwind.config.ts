import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './pages/**/*.{js,jsx}',
    './components/**/*.{ts,tsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{ts,tsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{ts,tsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",

    },
    extend: {
      colors: {
        primary: '#A39F9F',
        accent: {
          DEFAULT: '#5d17eb',
          hover: '#652ce7',
          lighter: '#5d17eb',
        }
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config