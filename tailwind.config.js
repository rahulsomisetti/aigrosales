/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        seen: {
          dark: "#0B0D11",
          charcoal: "#111318",
          surface: "#181B22",
          cardDark: "#13161D",
          borderDark: "#222733",
          border: "#E2E4E9",
          offwhite: "#FBFBFD",
          warmgray: "#F4F5F8",
          muted: "#64748B",
          text: "#0F172A",
          accent: "#2563EB",
          accentDark: "#1D4ED8",
          accentLight: "#3B82F6",
          accentGlow: "rgba(37, 99, 235, 0.12)",
          emerald: "#059669",
          amber: "#D97706",
        }
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-plus-jakarta)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 10px 30px -4px rgba(15, 23, 42, 0.1), 0 4px 10px -2px rgba(15, 23, 42, 0.05)',
        'premium': '0 20px 40px -15px rgba(11, 13, 17, 0.15)',
        'glow': '0 0 25px -5px rgba(37, 99, 235, 0.25)',
      }
    },
  },
  plugins: [],
}
