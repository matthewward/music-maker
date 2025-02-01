/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: 'var(--color-white)',
        'white-75%': 'var(--color-white-75percent)',
        'white-50%': 'var(--color-white-50percent)',
        'black-12%': 'var(--color-black-12percent)',
        'black-50%': 'var(--color-black-50percent)',
        black: 'var(--color-black)',
        theme: {
          light: 'var(--color-theme-light)',
          neutral: 'var(--color-theme-neutral)',
          dark: 'var(--color-theme-dark)',
        },
      },
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        mono: ['Instrument Mono', 'monospace'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
