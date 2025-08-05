import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette inspirada em biblioteca/academia
        primary: {
          50: '#fef7ed',
          100: '#fdecd3',
          200: '#fbd5a5',
          300: '#f7b56d',
          400: '#f29632',
          500: '#d97706', // Cor principal - dourado clássico
          600: '#c2621a',
          700: '#a14a19',
          800: '#863e1c',
          900: '#70351a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b', // Cinza azulado para texto
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fdf4f3',
          100: '#fce7e6',
          200: '#f9d2d2',
          300: '#f5b1b1',
          400: '#ed8484',
          500: '#dc2626', // Vermelho para ações importantes
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#6b1f1f',
        },
        warm: {
          50: '#fefdfb',
          100: '#fef9f5',
          200: '#fef2e8',
          300: '#fde8d3',
          400: '#fcd9b8',
          500: '#f4a261', // Tom quente de pergaminho
          600: '#e76f51',
          700: '#d65a31',
          800: '#b8491f',
          900: '#8b3a15',
        },
        sage: {
          50: '#f6f8f6',
          100: '#e9f0e9',
          200: '#d3e1d3',
          300: '#adc8ad',
          400: '#7fa67f',
          500: '#5a8a5a', // Verde sábio para elementos naturais
          600: '#477347',
          700: '#3a5f3a',
          800: '#2f4f2f',
          900: '#264226',
        },
        parchment: {
          50: '#fefcf8',
          100: '#fdf8ed',
          200: '#fbf0d9',
          300: '#f7e4bb',
          400: '#f2d391',
          500: '#e8b865', // Cor de pergaminho antigo
          600: '#d49c42',
          700: '#b17c2a',
          800: '#8f6122',
          900: '#744f1e',
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'book': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        'book-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
