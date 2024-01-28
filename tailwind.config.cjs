/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,md,mdx}"],
  theme: {
    extend: {
      transitionProperty: {
        filter: "filter",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
