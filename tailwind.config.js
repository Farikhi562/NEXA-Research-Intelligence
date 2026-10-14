/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 700: '#1f3350', 800: '#16263d', 900: '#0f1b2d' },
        brand: { 50: '#f0f7fe', 100: '#dbeafe', 600: '#0972d3', 700: '#075ba6' },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
