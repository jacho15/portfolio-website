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
        'p5-red': '#D80027',
        'p5-red-dark': '#A30020',
        'p5-red-light': '#FF1744',
        'p5-crimson': '#8B0000',
        'p5-black': '#0D0D0D',
        'p5-black-pure': '#000000',
        'p5-white': '#FAFAFA',
        'p5-gray': '#1A1A1A',
        'p5-gray-mid': '#2A2A2A',
        'p5-yellow': '#FFD700',
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(216, 0, 39, 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(216, 0, 39, 0)' },
        },
      },
    },
  },
  plugins: [],
}
