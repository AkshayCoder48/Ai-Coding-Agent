/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3713ec",
        "background-light": "#000000",
        "background-dark": "#000000",
        "surface-dark": "#0a0a0a",
        "border-dark": "#1a1a1a",
        "onyx-surface": "#0a0a0a",
        "onyx-border": "#1a1a1a",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"]
      },
    },
  },
  plugins: [],
}
