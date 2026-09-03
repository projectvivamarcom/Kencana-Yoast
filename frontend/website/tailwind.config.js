/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        kencana: {
          red: '#E3000F',
          redDark: '#B3000B',
          redLight: '#FFF1F2',
          navy: '#0f2744',
          blue: '#1a56db',
          lightBlue: '#3b82f6',
          cyan: '#0284c7',
          gold: '#f59e0b',
          grayBg: '#f8fafc',
          darkBg: '#0b132b'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif']
      }
    },
  },
  plugins: [],
}
