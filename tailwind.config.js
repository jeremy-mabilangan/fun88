/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#21b1ff",
        "secondary-color": "#808080",
      },
      keyframes: {
        slideInFromBottom: {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        slideInFromBottom:
          "slideInFromBottom .25s ease-in-out forwards var(--delay, 0)",
      },
    },
  },
  plugins: [],
};
