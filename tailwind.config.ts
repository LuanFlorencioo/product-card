import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#3C8067',
        background: '#F2EBE3',
        neutral: {
          '100': '#1C232B',
          '200': '#6C7289',
          '300': '#FFFFFF',
        },
      },
      fontFamily: {
        'display': ['Fraunces', 'ui-serif', 'Georgia'],
        'sans': ['Montserrat', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
