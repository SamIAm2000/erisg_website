/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        /* Mobile below 600px; desktop layout from 600px (default Tailwind md is 768px) */
        md: '600px',
      },
      fontFamily: {
        eris: ['"Diatype Variable"', 'system-ui', 'sans-serif'],
        erisMono: ['"Diatype Mono Variable"', 'ui-monospace', 'monospace'],
        erisDisplay: ['"Freight Big"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

