/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0F17',          // Soft midnight canvas
          surface: '#111827',     // Elevated surface
          card: '#151E2E',        // Deep matte card container
          cardHover: '#1B273C',   // Subtle responsive hover
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(99, 102, 241, 0.35)',
        },
        brand: {
          primary: '#4F46E5',     // Executive Indigo
          primaryHover: '#4338CA',
          accent: '#0EA5E9',      // Calming Sky
          teal: '#0D9488',
          emerald: '#10B981',
          slate: '#64748B',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft-glow': '0 0 2.1875rem -0.3125rem rgba(79, 70, 229, 0.15)',
        'subtle': '0 0.25rem 1.25rem -0.125rem rgba(0, 0, 0, 0.45)',
        'card': '0 0.125rem 0.75rem -0.0625rem rgba(0, 0, 0, 0.35)',
      }
    },
  },
  plugins: [],
};
