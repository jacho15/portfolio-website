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
        'p5-black': '#0D0D0D',
        'p5-white': '#FAFAFA',
        'p5-gray': '#1A1A1A',
        'p5-yellow': '#FFD700',
      },
      fontFamily: {
        heading: ['Anton', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'slash-in': 'slashIn 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'skew-in': 'skewIn 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'spin-in': 'spinIn 0.8s ease-out forwards',
        'pulse-red': 'pulseRed 2s infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        slashIn: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) skewX(0deg)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        skewIn: {
          '0%': { transform: 'skewX(-20deg) translateX(-50px)', opacity: '0' },
          '100%': { transform: 'skewX(0deg) translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        spinIn: {
          '0%': { transform: 'rotate(-180deg) scale(0)', opacity: '0' },
          '100%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
        },
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(216, 0, 39, 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(216, 0, 39, 0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
