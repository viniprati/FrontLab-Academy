/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular']
      },
      colors: {
        bg: {
          DEFAULT: '#0a0f1f',
          elevated: '#10172b',
          soft: '#18223d'
        },
        accent: {
          DEFAULT: '#22d3ee',
          strong: '#06b6d4',
          soft: '#67e8f9'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34, 211, 238, 0.2), 0 24px 80px rgba(2, 8, 20, 0.55)'
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
