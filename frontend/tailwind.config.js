/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wp: {
          dark: '#1d2327',
          sidebar: '#1d2327',
          sidebarHover: '#131619',
          sidebarActive: '#2271b1',
          bg: '#f0f0f1',
          card: '#ffffff',
          border: '#dcdcde',
          borderLight: '#f0f0f1',
          text: '#2c3338',
          textMuted: '#646970',
          blue: '#2271b1',
          blueHover: '#135e96',
          good: '#00a32a',
          goodBg: '#edfaef',
          warning: '#dba617',
          warningBg: '#fcf9e8',
          poor: '#d63638',
          poorBg: '#fcf0f1'
        }
      }
    },
  },
  plugins: [],
}
