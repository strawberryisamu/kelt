import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        loading17: {
          '0%': { transform: 'scale(1.2)' ,opacity:'1' },
          '100%': { transform: 'scale(0.7)', opacity: '0.1' },
        },
      },
      animation: {
        loading17: 'loading17 1s ease-in infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      writingMode: {
        vertical: 'vertical-rl',
      },
      textOrientation: {
        upright: 'upright',
      },

    },
  },
  variants: {
    extend: {
      writingMode: ['responsive'],
      textOrientation: ['responsive'],
    },
  },
  plugins: [],
}
export default config
