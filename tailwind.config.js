/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'p5-red': 'rgb(var(--color-p5-red) / <alpha-value>)',
        'p5-red-dark': 'rgb(var(--color-p5-red-dark) / <alpha-value>)',
        'p5-red-light': 'rgb(var(--color-p5-red-light) / <alpha-value>)',
        'p5-crimson': 'rgb(var(--color-p5-crimson) / <alpha-value>)',
        'p5-black': 'rgb(var(--color-p5-black) / <alpha-value>)',
        'p5-black-pure': 'rgb(var(--color-p5-black-pure) / <alpha-value>)',
        'p5-white': 'rgb(var(--color-p5-white) / <alpha-value>)',
        'p5-gray': 'rgb(var(--color-p5-gray) / <alpha-value>)',
        'p5-gray-mid': 'rgb(var(--color-p5-gray-mid) / <alpha-value>)',
        'p5-yellow': 'rgb(var(--color-p5-yellow) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['Anton', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-red': 'pulseRed 2s infinite',
      },
      keyframes: {
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(var(--color-p5-red), 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(var(--color-p5-red), 0)' },
        },
      },
    },
  },
  plugins: [],
}
