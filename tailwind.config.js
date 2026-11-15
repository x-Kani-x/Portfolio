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
          25: '#faf8ff',
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
          975: '#1a083d',
          deep: '#0d061c',
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
        'depth-sm': '0 2px 10px -1px rgba(124, 58, 237, 0.08), 0 1px 3px -1px rgba(0, 0, 0, 0.04)',
        'depth-md': '0 10px 28px -4px rgba(124, 58, 237, 0.12), 0 3px 8px -2px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
        'depth-lg': '0 18px 44px -6px rgba(124, 58, 237, 0.18), 0 6px 16px -4px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
        'depth-glow': '0 0 45px -5px rgba(124, 58, 237, 0.4), 0 0 20px -2px rgba(139, 92, 246, 0.3)',
        'dock': '0 14px 44px -8px rgba(124, 58, 237, 0.25), 0 4px 14px -2px rgba(0, 0, 0, 0.12), inset 0 1px 1px 0 rgba(255, 255, 255, 0.7)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(40px) scale(0.985)', opacity: '0' },
          '100%': { transform: 'translateX(0) scale(1)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-40px) scale(0.985)', opacity: '0' },
          '100%': { transform: 'translateX(0) scale(1)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(0.98)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px -2px rgba(124, 58, 237, 0.4)' },
          '50%': { boxShadow: '0 0 32px 4px rgba(124, 58, 237, 0.7)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
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
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.35s ease-out forwards',
        fadeInUp: 'fadeInUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        scaleIn: 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        slideLeft: 'slideLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        slideRight: 'slideRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        pulseSubtle: 'pulseSubtle 2.5s infinite ease-in-out',
        pulseGlow: 'pulseGlow 2.8s infinite ease-in-out',
        floatGentle: 'floatGentle 4s infinite ease-in-out',
        floatSlow: 'floatSlow 14s infinite ease-in-out',
        floatReverse: 'floatReverse 16s infinite ease-in-out',
        shimmer: 'shimmer 3s infinite linear',
      }
    },
  },
  plugins: [],
}
