// tailwind.config.mjs
export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx,svelte,astro}',
    './public/**/*.html',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        eventura: {
          primary: '#FF6B6B',
          accent: '#FFD93D',
          teal: '#4ECDC4',
          dark: '#2E2E2E',
          lavender: '#CBA6F7',
          light: '#F7F7F7',
        },
      },
    },
  },
  plugins: [],
};
