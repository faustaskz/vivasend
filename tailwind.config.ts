import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF6B1A',
          dark: '#E05510',
          light: '#FF8C42',
        },
        bg: {
          DEFAULT: '#0A0A0B',
          2: '#111113',
          3: '#18181C',
          4: '#1F1F25',
        },
        vs: {
          text: '#F0EEE8',
          muted: '#9B9893',
          faint: '#5A5856',
          border: 'rgba(255,255,255,0.07)',
          border2: 'rgba(255,255,255,0.12)',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      borderRadius: {
        xl: '12px',
        '2xl': '20px',
      },
    },
  },
  plugins: [],
}

export default config
