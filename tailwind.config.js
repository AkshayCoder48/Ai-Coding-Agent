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
        "background-light": "#f6f6f8",
        "background-dark": "#0f1117",
        "surface-dark": "#1a1b26",
        "border-dark": "#2b2d3d",
        "onyx-surface": "#1a1b26", // Added based on HTML preview
        "onyx-border": "#2b2d3d",  // Added based on HTML preview
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"]
      },
    },
  },
  plugins: [],
}
