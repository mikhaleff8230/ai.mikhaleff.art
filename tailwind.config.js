/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#C9FF38",
        panel: "#0D0F14",
        panelSoft: "#12151C",
        textMuted: "#A3A9B8"
      },
      boxShadow: {
        card: "0 8px 28px rgba(0,0,0,.35)",
        neon: "0 0 0 1px rgba(201,255,56,.35), 0 12px 30px rgba(201,255,56,.16)"
      }
    }
  },
  plugins: []
};
