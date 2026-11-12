/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(124, 58, 237, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'soft-hover': '0 16px 36px -4px rgba(124, 58, 237, 0.18), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 35px -5px rgba(124, 58, 237, 0.35)',
        'glass': '0 8px 32px 0 rgba(124, 58, 237, 0.08)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(0.98)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(25px, -35px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-30px, 25px) scale(0.96)' },
          '66%': { transform: 'translate(20px, -25px) scale(1.06)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out forwards',
        slideLeft: 'slideLeft 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        slideRight: 'slideRight 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        pulseSubtle: 'pulseSubtle 2.5s infinite ease-in-out',
        floatSlow: 'floatSlow 14s infinite ease-in-out',
        floatReverse: 'floatReverse 16s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}
