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
          DEFAULT: '#0f172a',
          elevated: '#111827',
          soft: '#1e293b'
        },
        accent: {
          DEFAULT: '#60a5fa',
          strong: '#3b82f6',
          soft: '#dbeafe'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(148, 163, 184, 0.22), 0 12px 40px rgba(15, 23, 42, 0.28)'
      }
    }
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('light', '.light &');
    }
  ]
};
