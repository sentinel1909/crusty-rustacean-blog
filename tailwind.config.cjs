/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        white: {
          css: {
            "--tw-prose-body": theme("colors.white"),
            "--tw-prose-headings": theme("colors.orange[600]"),
            "--tw-prose-quotes": theme("colors.white"),
            "--tw-prose-links": theme("colors.pink[500]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
