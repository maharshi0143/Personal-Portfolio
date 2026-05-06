/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bricolage Grotesque', 'ui-sans-serif', 'system-ui'],
        body: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        ink: '#0b0b10',
        panel: 'rgba(17, 19, 26, 0.7)',
        panelBorder: 'rgba(255, 255, 255, 0.08)',
        accent: '#ff6b3d',
        accentSoft: '#ffd2c2',
        glow: '#f5a87a',
        muted: '#a1a1aa',
      },
      boxShadow: {
        'soft-xl': '0 30px 80px -50px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}
